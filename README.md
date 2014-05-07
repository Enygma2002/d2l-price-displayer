Dota 2 & CS:GO Lounge item price displayer
===================

<a href="https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/">Greasemonkey</a> userscript for the <a href="http://dota2lounge.com">dota2lounge.com</a> and <a href="http://csgolounge.com">csgolounge.com</a> websites that displays an item's lowest price offer from the <a href="http://steamcommunity.com/market/">Steam Community Market</a> and helps to copy an item's name or to quickly open the market listings for an item.

_Note:_ This script was originally published on [www.userscripts.org](http://userscripts.org/scripts/show/182588), but due to the availability issues the site has been having lately, I have also published it on [www.openuserjs.org](https://openuserjs.org/scripts/enygma/httpwww.enygma.ro/Dota_2_CSGO_Lounge_item_price_displayer) and here, obviously. Whatever place you prefer, please enjoy it :)

# Works with:
* [www.dota2lounge.com](http://www.dota2lounge.com)
* [www.csgolounge.com](http://www.csgolounge.com)

# Features:
* The item's price is displayed below its name, with extra information if the price is hovered.

   ![Item price displayed under name - Dota2](http://i.imgur.com/tAZCMMO.png)
   ![Item price displayed under name - CSGO](http://i.imgur.com/ASY5wzF.png)
* "Not Marketable" is displayed for items that can not be sold on the Steam community market.

   ![Not Marketable items are also displayed](http://i.imgur.com/r0AFm4q.png)
* A 'Refresh' button is added to re-fetch the latest price for the item from the Steam market.

   ![Refresh price button available](http://i.imgur.com/8TumkIN.png)
* A 'Show listings' button is added to allow quickly opening the Steam Market listings for that item for further study.

   ![Show listings button available to go to the Steam Market website](http://i.imgur.com/WSUpBbD.png)
* A popup with the selectable item's name is displayed if the item's name panel is clicked. This helps copy the item's name if needed.

   ![Popup helper to copy an item's name](http://i.imgur.com/sFQXBgH.png)

Please share your opinions, suggestions or bug reports.

Hope you like it ;)

_Credits:_ This script is inspired by the [Steam Market Price Matcher](http://userscripts.org/scripts/show/154071) script by tomatolicious.

**Google Chrome users:** In case you`re having issues running or installing the script manually with Google Chrome, try installing the [Tampermonkey extension](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) and install the script there. This way the script should be able to run nicely and you will also benefit from automatic updates when new version are available.

**Firefox users:** You will obviously need the [Greasemonkey addon] (https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) to be able to install and use this script.

# Donations:
If this script saved your life and you want to show your love and support to its developer for the work he did and will keep on doing, please consider offering a modest donation :)

[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&amp;business=YE37DBVW7UBDE&amp;lc=RO&amp;item_name=Dota%202%20%26%20CSGO%20Lounge%20item%20price%20displayer&amp;item_number=lounge%2ditem%2dprice%2ddisplayer&amp;currency_code=EUR&amp;bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

# Updates:

**May 6, 2014**
Accepting donations! The script seems to have caught on. I am very happy with that and, if anyone is interested in donating, it is now possible. Thank you for your support!

**Mar 17, 2014**
[www.csgolounge.com](www.csgolounge.com) is now supported!

**Mar 17, 2014**
* Fixed the "Remove item" behavior when clicked that was causing the copy-item-name popup to also show.
* Skipping the d2l generic items ("Any Common", "Any Rare", etc.) since they don`t exist on the Steam Market and should not be handled by the script.

**Mar 16, 2014**
Version 2.0
* Rewrote the way items are augmented with price information and extra buttons and, as a result:
  * The script now works for all views of the site, including backpack, profile, etc.
  * No more problems with the script not loading and having to refresh the page.
  * The script is more responsive, not having to wait for the page to fully load as before.
* Added a refresh button for the price of an item, in case the user wants to get the latest price or if the item wrongly displays as Not Marketable and the user knows otherwise.
* Added a button to open the Steam market listings in a new tab for an item, so that the user can quickly consult other price offers and price variations over time.
* Fixed script not loading if the website is opened with "www"

**Nov 20, 2013**
Now also displaying item prices for items in your backpack that are displayed when when you press "Add items to offer" in the messages section of an active trade.

**Nov 8, 2013**
Initial release
