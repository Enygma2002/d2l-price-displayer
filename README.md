Dota 2 & CS:GO Lounge item price displayer
===================

[Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) userscript for the [dota2lounge.com](http://dota2lounge.com) and [csgolounge.com](http://csgolounge.com) websites that, when hovering an item, displays its price information from the [Steam Community Market](http://steamcommunity.com/market/) using the user selected currency and also helps to easily copy an item's name.

# Donations:

This script is free and open source and it will stay that way. If you like it and want to show your appreciation and support to its developer, please consider offering a modest donation:

* [Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YE37DBVW7UBDE&lc=RO&item_name=Dota%202%20%26%20CS%3aGO%20Lounge%20item%20price%20displayer&item_number=lounge%20item%20price%20displayer&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHostedGuest) - You want to buy me a beer or a cup of hot chocolate? Awesome! Thank you! :)

    [![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YE37DBVW7UBDE&lc=RO&item_name=Dota%202%20%26%20CS%3aGO%20Lounge%20item%20price%20displayer&item_number=lounge%20item%20price%20displayer&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHostedGuest)

* [Steam Trade link](http://steamcommunity.com/tradeoffer/new/?partner=40940382&token=yltD_4U7) - Steam items/keys/sets/games/etc. anything is welcomed as a sign of your appreciation.

    [![Donate on Steam](https://i.imgur.com/C4RiaHy.png)](http://steamcommunity.com/tradeoffer/new/?partner=40940382&token=yltD_4U7)

Humble thanks to these wonderful people that have donated so far:

* [Reishid](http://steamcommunity.com/id/reishid) - game: "Contrast"
* [Mangas](http://steamcommunity.com/profiles/76561197973489069) - dota2 items: 5 commons, 1 rare and 1 mythical
* [&lt;&lt;MAx.__.harunO&gt;&gt;™](http://steamcommunity.com/id/MAxharunO) - dota2 item: 1 rare
* Tuguldur Galbadrakh - 4 Euros
* [@LeeTrojan ಠ_ಠ](http://steamcommunity.com/id/LeeTrojanDOTO) - dota2 items: 1 immortal and 1 rare
* [Caotine](http://steamcommunity.com/profiles/76561198023810320) - csgo items: 4 skins and 3 cases
* &lt;Your name here&gt; - anything you consider this script is worth ;)

_Note: If, for any reason, you want your donation to remain anonymous, please let me know._

# Works with:

* [www.dota2lounge.com](http://www.dota2lounge.com)
* [www.csgolounge.com](http://www.csgolounge.com)

# Features:

* The item's lowest price and price trend is displayed below its name, with extra information if the price is hovered.

    ![Item price displayed under name - Dota2](https://i.imgur.com/Id89Vby.png)

    ![Item price displayed under name - CSGO](https://i.imgur.com/NbbgYvS.png)
    * Price trend shows the diference between the lowest price and the median price and it can be:
        * Ascending (↗) if the lowest price is bigger than the median price

            ![Price trend: Ascending (↗)](https://i.imgur.com/1S9XFtE.png)

        * Stagnating (→) if the lowest price equals the median price

            ![Price trend: Stagnating (→)](https://i.imgur.com/8vgmIoY.png)
        * Descending (↘) if the lowest price is lower than the median price

            ![Price trend: Descending (↘)](https://i.imgur.com/uf2hIHn.png)
    * Price safety (the price's color) gets better with the more popular an item is (i.e. the more daily transactions the item has on the market) and it can be:
        * Green: over 50 daily transaction

            ![Price safety: Safe (Green)](https://i.imgur.com/To07UCU.png)
        * Orange: less than 50 daily transactions

            ![Price safety: Warning (Orange)](https://i.imgur.com/WYMFQmZ.png)
        * Red: less than 10 daily transactions

            ![Price safety: Unsafe (Red)](https://i.imgur.com/hoRGZwj.png)
* "Not Marketable" is displayed for items that can not be sold on the Steam community market.

    ![Not Marketable items are also displayed](https://i.imgur.com/vj31S8a.png)
* A 'Refresh' button is added to re-fetch the latest price for the item from the Steam market.

    ![Refresh price button available](https://i.imgur.com/qDOsOyj.png)
* A currency selector that allows you to choose the currency for which you want to see prices displayed...

    ![Currency selector in the top right of the page](https://i.imgur.com/rSSBJEN.png)
    *  ...from the list of currencies supported by the Steam Market

        ![List of available currencies](https://i.imgur.com/oBmAhp6.png)
    * Your selected currency is remembered across page reloads
* A popup with the selectable item's name is displayed if the item's name panel is clicked. This helps copy the item's name if needed.

    ![Popup helper to copy an item's name](https://i.imgur.com/sFQXBgH.png)

Please share your opinions, suggestions or bug reports.

Hope you like it ;)

# Installation:

**Google Chrome:** You will need to install this script using the [Tampermonkey extension](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo). This way the script should be able to run nicely and you will also benefit from automatic updates when new version are available.

**Firefox:** You will obviously need the [Greasemonkey addon](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) to be able to install and use this script. If you are using Firefox 30+ you need to make sure you use Greasemonkey version 2.2+ or the script won't work.

# Credits:

This script is initially inspired by the [Steam Market Price Matcher](http://userscripts-mirror.org/scripts/show/154071) script by the userscripts.org user tomatolicious.

A special shout out to people that helped out so far:
- [Reishid](http://steamcommunity.com/id/reishid) for his [great post](http://steamcommunity.com/groups/dota2lounge/discussions/0/648814396001808197/) on the D2L Steam Community forums
- [Powsin (@lordpuza)](https://github.com/lordpuza) for giving out a helping hand with fixing the script when the lounge websites layout changed
- [@joturako](https://github.com/joturako) for suggesting a better and clever way of retrieving prices from the Steam Market
- [Enhanced Steam project](https://github.com/jshackles/Enhanced_Steam) for inspiration and reference on building a nice mapping of the available currencies on the Steam Market
- &lt;Your name here&gt; for being awesome :)

# Updates:

**December, 15, 2014**

* Added list of people that have donated so far in the script's README
* Added @supportURL and @contributionURL metadata to the script in order for people to easily get help

**December, 7, 2014**

* Published on MonkeyGuts.com
* Fixed minor bugs that managed to slip my sight during testing :)

**December, 6, 2014**

Version 3.0! - Early Christmas present! :)

* Addded the ability to select the currency you want to see prices displayed in
  * Offering a currency selector and remember the choice across page reloads
  * Refreshing all previously retrieved prices so they are now displayed in the new currency
* Added a non-intrusive 'Donate' button at the end of the supported currencies list for generous people to find and use
* Rewrote the way prices are retrieved and displayed:
  * Lowest price (default)
  * Median price (on price hover)
  * Price trend (default) can be:
    * Ascending (↗) if the lowest price is bigger than the median price
    * Stagnating (→) if the lowest price equals the median price
    * Descending (↘) if the lowest price is lower than the median price
  * Daily transactions (on price hover): Number of transactions that were made in the past 24 hours period
  * Price safety (the price's color)
    * Red: less than 10 daily transactions
    * Orange: less than 50 transactions
    * Green: over 50 transaction
  * This method should be much faster than the previous one because it uses a specialized JSON API instead of scraping the market listing page and extracting the value from there
* Displaying an "Error" message instead of a missleading "Not Marketable" when the price can not be retrieved due to a network error or to Steam's servers going crazy

**October 13, 2014**

* Updated the script to run with the recent changes done by the dota2lounge.com and csgolounge.com websites.
* Accepting donations through the published [Steam Trade link](http://steamcommunity.com/tradeoffer/new/?partner=40940382&token=yltD_4U7) in the "Donations" section above.
* Removed the 'Show listings' custom button, since this feature is provided by the website by default through the new "Market" link.

**May 6, 2014**

Accepting donations! The script seems to have caught on. I am very happy with that and, if anyone is interested in donating, it is now possible. Thank you for your support!

**Mar 17, 2014**

[www.csgolounge.com](http://www.csgolounge.com) is now supported!

**Mar 17, 2014**

* Fixed the "Remove item" behavior when clicked that was causing the copy-item-name popup to also show.
* Skipping the d2l generic items ("Any Common", "Any Rare", etc.) since they don't exist on the Steam Market and should not be handled by the script.

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

# Mirrors / Alternate websites:

This script was originally published on userscripts.org but since August 2014 the website is now dead. Thus, I have published this script on the main userscript communities that arose from userscripts.org's ashes:

* [OpenUserJS.org](https://openuserjs.org/scripts/Enygma/Dota_2_CSGO_Lounge_item_price_displayer)
* [GreasyFork.org](https://greasyfork.org/scripts/666-dota-2-csgo-lounge-item-price-displayer)
* [GitHub.com](https://github.com/Enygma2002/d2l-price-displayer)
* [MonkeyGuts.com](https://monkeyguts.com/code.php?id=653)
* [userscripts-mirror.org](http://userscripts-mirror.org:8080/scripts/show/182588) (outdated / old version, mirror of the original, listing here for historical reasons)
* [userscripts.org](http://userscripts.org:8080/scripts/show/182588) (original link, dead, listing here for historical reasons)
