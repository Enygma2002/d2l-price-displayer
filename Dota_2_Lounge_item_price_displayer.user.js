// ==UserScript==
// @name        Dota 2 & CSGO Lounge item price displayer
// @namespace   http://www.enygma.ro
// @version     2.3
// @author      Enygma + Johnny
// @description Displays an item's lowest price offer from the Steam Community Market and helps to copy an item's name or to quickly open the market listings for an item.
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @include     /^http(s)?://(www.)?dota2lounge.com//
// @include     /^http(s)?://(www.)?csgolounge.com//
// @updateURL   https://github.com/joturako/d2l-price-displayer/raw/master/Dota_2_Lounge_item_price_displayer.user.js
// @downloadURL https://github.com/joturako/d2l-price-displayer/raw/master/Dota_2_Lounge_item_price_displayer.user.js
// @grant       GM_xmlhttpRequest
// @grant       GM_addStyle
// ==/UserScript==

// Determine on which site is the script being executed (dota2lounge or csgolounge)
if (document.URL.match(/^http(s)?:\/\/(www.)?dota2lounge.com\//)) {
    // Dota2 app ID on Steam's community market website.
    appID = 570;

    // Generic item placeholder names used by the d2l website and not existing in the Steam Market.
    genericItemPlaceholderNames = ["Offers", "Any Common", "Any Uncommon", "Any Rare", "Any Mythical", "Any Legendary",
                                   "Any Ancient", "Any Immortal", "Real Money", "+ More", "Any Set"];
} else if (document.URL.match(/^http(s)?:\/\/(www.)?csgolounge.com\//)) {
    // CS:GO app ID on Steam's community market website.
    appID = 730;

    // Generic item placeholder names used by the csgolounge website and not existing in the Steam Market.
    genericItemPlaceholderNames = ["Any Offers", "Real Money", "Dota Items", "TF2 Items"];
}

// Main event listener for hovering items.
document.addEventListener("mouseover", function (event) {
    var itemElement = getItemElement(event);
    if (!itemElement) {
        return;
    }

    attachExtraPanelAndListeners(itemElement);
    getLowestPrice(itemElement);
})

// Get the hovered item, if any.
var getItemElement = function(mouseEvent) {
    var targetElement = mouseEvent.target;
    var itemElement = null;

    // Check the hovered element to see if it's an item element or one of it's children (image or rarity section).

    // Old d2l website layout that used directly the "item" display and within it the "name" panel;
    // It is now only present on csgolounge but we still want to support it in order to work with both sites.
    if (hasClass(targetElement, "item") && targetElement.querySelector(".name")) {
        // Hover the item display (contains image and rarity section)
        itemElement = target;
    } else if (hasClass(targetElement.parentNode, "item") && targetElement.parentNode.querySelector(".name")) {
        // Hover an individual item display's children (image or rarity section)
        itemElement = targetElement.parentNode;
    } else
    // New d2l website layout, that uses an "oitm" container for the "item" display and the "name" panel
    if (hasClass(targetElement, "oitm")) {
        // Hover the main container (contains item display and item popup).
        itemElement = targetElement;
    } else if (hasClass(targetElement.parentNode, "oitm")) {
        // Hover the item display (contains image and rarity section)
        itemElement = targetElement.parentNode;
    } else if (hasClass(targetElement.parentNode, "item")) {
        // Hover an individual item display's children (image or rarity section)
        itemElement = targetElement.parentNode.parentNode;
    } else {
        // Hovered an uninteresting element of the UI.
        return null;
    }

    // Avoid returning empty item slots.
    var itemNameElement = itemElement.querySelector(".name");
    if (!itemNameElement) {
        return null;
    }

    // Avoid returning generic item placeholders.
    var itemName = getItemName(itemElement);
    if (genericItemPlaceholderNames.indexOf(itemName) > -1) {
        return null;
    }

    return itemElement;
}

// Add to the specified item element an extra panel that contains the price information and a click handler to facilitate copying the item's name 
var attachExtraPanelAndListeners = function(itemElement) {
    var itemNamePanel = itemElement.querySelector(".name");
    // If the extra panel already exists, stop here.
    var extraPanel = itemNamePanel.querySelector(".extraPanel");
    if (extraPanel) {
        return;
    }

    // Otherwise, create our own panel to append... 
    extraPanel = document.createElement('div');
    extraPanel.innerHTML = "<span class='scriptStatus'>Ready</span>" +
        "<button type='button' class='extraButton refreshButton' title='Refresh'/>";
    extraPanel.setAttribute("class", "extraPanel");

    // ...and append it.
    itemNamePanel.appendChild(extraPanel);
    // Set click event handler for the item's name panel so that the item name can be copied to the clipboard easier.
    itemNamePanel.addEventListener("click", copyItemNameHandler, false);
    // Set click event handler for the refresh button that re-fetches the item's price.
    var refreshButton = extraPanel.querySelector(".refreshButton");
    refreshButton.addEventListener("click", function(event) {
        event.stopPropagation();
        getLowestPrice(itemElement, true);
    }, false);
}

// Get the lowest price for an item from the Steam market.
var getLowestPrice = function(itemElement, override) {
    var itemNameElement = itemElement.querySelector(".name");
    // Don`t try to get the price if we've already retrieved it.
    if (!override && itemNameElement.querySelector(".scriptStatus").innerHTML != "Ready") {
        return;
    }

    itemNameElement.querySelector(".scriptStatus").innerHTML = "Loading...";
    var url = getSteamMarketListingsURL(itemElement);
    GM_xmlhttpRequest({
        method: "GET",
        url: url,
        onload: function (response) {
            var httpResponse = response.responseText;
          var priceObj = $.parseJSON(httpResponse);
          if(priceObj.success)
          {
           var str = "<span style=\"color:red\" title='\"Lowest Price\"'>L: " + priceObj.lowest_price + "</span> <br>";
           str+="<span style=\"color:green\"  title='\"Median Price\"'>M: " + priceObj.median_price + "</span> <br>";
           
           str+="<span style=\"color:blue\"  title='\"Volume\"'>V: " + priceObj.volume + "</span> <br>";
               itemNameElement.querySelector(".scriptStatus").innerHTML = str;
          }
          else
          {
             itemNameElement.querySelector(".scriptStatus").innerHTML = "Error!";
          }
        }
    });
}

// Computes the URL used to access the Steam market listings for a given item.
var getSteamMarketListingsURL = function(itemElement) {
    var itemName = getItemName(itemElement);
    var itemNameEncoded = encodeURIComponent(itemName);
    var url = "http://steamcommunity.com/market/priceoverview/?appid="+appID+"&market_hash_name="+itemNameEncoded;
   // var url = "http://steamcommunity.com/market/listings/" + appID + "/" + itemNameEncoded + "/";

    return url;
}

// Extract the item's name from a DOM item element.
var getItemName = function(itemElement) {
    var itemNameElement = itemElement.querySelector(".name");
    var itemName = itemNameElement.querySelector("b").innerHTML.trim();

    return itemName;
}

// Cached RegExps used to read the item's value from the Steam page.
var lowestPriceWithFeeRegExp = /<span class="market_listing_price market_listing_price_with_fee">\s*(.*?)\s*<\/span>/i;
var lowestPriceWithoutFeeRegExp = /<span class="market_listing_price market_listing_price_without_fee">\s*(.*?)\s*<\/span>/i;

// Event handler to facilitate copying an item's name.
var copyItemNameHandler = function(event) {
    var clickedElement = event.target;

    // Avoid executing this handler if the "Remove item" button is clicked in a trade.
    if (excludedTags.indexOf(clickedElement.tagName) > -1 || excludedTags.indexOf(clickedElement.parentNode.tagName) > -1) {
        return;
    }

    // Stop the element's parent (item) from getting the click event. This stops the item from being selected.
    event.stopPropagation();

    // Make sure we select the item name element.
    var itemNameElement = clickedElement;
    while (!hasClass(itemNameElement, "name")) {
        itemNameElement = itemNameElement.parentNode;
    }

    // Get and display the item's name.
    var itemName = itemNameElement.querySelector("b").innerHTML.trim();
    window.prompt("Press CTRL+C to copy the item's name:", itemName);
}

// Tags that, if clicked on in an item name panel, should not execute the copyItemNameHandler.
var excludedTags = ["A", "IMG"];

// Helper method to check if an element has the specified class name.
var hasClass = function(element, cls) {
    return element && (" " + element.className + " ").indexOf(" " + cls + " ") > -1;
}

// Style.
// The two websites currently have diferent styles, so we need to tweak a bit the price color to make it properly readable.
if (appID == 570) {
    // D2L - lighter green (same used on the "Market" link) to go with the darker name panel background.
    GM_addStyle(".itemMarketable { color: #8EC13E }");
} else {
    // CSGOLounge - darker green to contrast with the lighter name panel background.
    GM_addStyle(".itemMarketable { color: green }");
}
GM_addStyle(".itemNotMarketable { color : red } .extraButton { margin-left: 0.3em; vertical-align: top; margin-top: -0.1em; border: 0; padding: 0; width: 16px; height: 16px; }");
GM_addStyle(".refreshButton { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOUlEQVQ4jc2RsUoDQRCGv32CXECzdjaWRiOCVSA+RdqAL6BFesUXOPUFbCWKJ2thkcRgxCa3cJUEQuCwExRjCi1sxiKXsElO6wz81e58888/sPhlESwxlhNaeP/+zRnO/wCMNaBDIbVZG/ztppLcLYdpgK3uSFgGc05WAnbX7pTcD5FCQ8lyMDOlQ4mQaO8lcRI6Q7wATxsGR32k9YUc9RFtiL1gZsoTq1jk7D3JxLEeFNtKLj6ZqNhWkppHSOvxO3GRFlb3J3mc2VEb/I2mktM3Jtp5UKINgUuProYJoMO+C8jWyGhDXO0hl0Ok2hutma2RcR1UsMjx6ySoA9fJkqGUryu5+UDydSW5azbn1wiJyjFSjp3bO4lrg19opJzacZEhJMIi688juYBkFT+9eRpUGYOmbr6Q9QvwBrFqSdh8NgAAAABJRU5ErkJggg==) no-repeat left center; }");
