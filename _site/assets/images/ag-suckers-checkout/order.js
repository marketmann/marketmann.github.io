function linkPopUp(url, winName, wi, he, to, le){settings = 'width=' +wi+ ',height=' +he+ ',top=' +to+ ',left=' +le+ 'menubar=0,resizable=1,scrollbars=1';window.open(url, winName, settings);}


// Domready = jQuery(document).ready()
// domready(function() {
//      do something here
// });
!function(a,ctx,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):ctx[a]=b()}("domready",this,function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}});

function get_url_parameter(e) {e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)"),r="";if(typeof t==="undefined"){r=n.exec(location.search)}else{r=n.exec(t)}return r==null?"":decodeURIComponent(r[1].replace(/\+/g," "))};
/* http://detectmobilebrowsers.com/ */
function isMobile(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))){return true}else{return false}};

function getPromoCode() {
    var href = window.location.href;
    href = href.split('/');
    href = href[4];
    href = encodeURIComponent(href);
    return href;
}

function get_pub_code() {
    var pub = window.location.href
        regex = new RegExp('/');

    if (pub.search(regex) === -1 || pub == '') { return false }
    pub = pub.split('/');
    pub = pub[3].split('_');

    return pub[0].toLowerCase();
};



if (!String.prototype.trim) {
   String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
}

var $ = (typeof jQuery != 'undefined') ? jQuery : 'undefined';

/**
 * compare the given verision of jQuery to the acutal jQuery available
 *
 * @param  {string} version  1.10.0
 * @param  {string} operator > | <
 * @return {boolean}
 */
function compareJqueryVersion(version, operator) {
    var jQueryVersion = '';

    version = version.split('.');

    if (typeof $ == 'undefined') {
        null;
    }

    jQueryVersion = $.fn.jquery;
    jQueryVersion = jQueryVersion.split('.');

    for (var i = 0; i < version.length; i++) {
        version[i] = 1 * version[i];
        jQueryVersion[i] = 1 * jQueryVersion[i];
    }

    if (operator == '>') {
        if (version[0] > jQueryVersion[0]) {
            return true;
        } else if (version[0] >= jQueryVersion[0] && version[1] > jQueryVersion[1] ) {
            return true;
        } else if (version[0] >= jQueryVersion[0] && version[1] >= jQueryVersion[1] && version[2] > jQueryVersion[2] ) {
            return true;
        }
    } else {
        if (version[0] < jQueryVersion[0]) {
            return true;
        } else if (version[0] <= jQueryVersion[0] && version[1] < jQueryVersion[1] ) {
            return true;
        } else if (version[0] <= jQueryVersion[0] && version[1] <= jQueryVersion[1] && version[2] < jQueryVersion[2] ) {
            return true;
        }
    }

    return false;
}

var orderFormPage = get_url_parameter('pageNumber');
var promocode = getPromoCode();
var outletCode = promocode.substring(0, 1);


// flag for sending deprecated tracker
var fireAfn = true;

function cartAbandon(options) {

    var return_object = {
            fireAfn: function() {
                return fireAfn;
            }
        };

    if (typeof options == 'undefined' || typeof options.promoId == 'undefined' || typeof options.page == 'undefined') {
        return return_object;
    }

    fireAfn = false;

    options.defaultPrice = (typeof options.defaultPrice == 'undefined') ? '59.00' : options.defaultPrice;
    options.priceOptions = (typeof options.priceOptions == 'undefined') ? new Array() : options.priceOptions;

    domready(function() {

    function checkSPR(){
            if( typeof imprint != 'undefined'){
                if(imprint === 'SPR' || imprint === 'SPRQS'){
                    if(typeof caFire != 'undefined'){
                        return false;
                    } else{
                        return true;
                    }
                } else {
                    return false;
                }
            }
        }


    
        if( checkSPR() === true){
            console.log('No CA');
        } else{





        if (options.page === 'orderForm') {
            //Listrak Tracking Code v 2.5.2
            //The following code will need to be placed on the FORM page
            //Because the AGORA object changes ID's each time the page is generated we needed a way to keep the forms consistent
            var ListrakID = 'aFDJJ3H47wgJ';
            var PromotionUID = options.promoId;
            var defaultPrice = options.defaultPrice;

            //Only fill in the override values if requested to do so by Listrak
            //Overrides are available if a form doesn't use one of the two 'common' naming conventions in use
            var overrides = {
                emailID: '',
                firstnameID: '',
                lastnameID: '',
                imagePriceOptions: options.priceOptions
            };

            (function(t,n,i,o,r){function a(){var t=this,e=function(t,e){t&&sessionStorage.setItem("ltkUserObj",JSON.stringify(t)),e&&sessionStorage.setItem("ltkItemObj",JSON.stringify(e))};this.save=function(t,n){e(t,n)};var n=function(e,n,i){console.log(e),t.submitRequest(e,n,i),t.save(email={email:e,fname:n,lname:i})};this.init=function(){var e=t.getParameterByName("email"),i=r(o.emailID.length>0?o.emailID:"#__billingEmailAddress__");i&&0==i.length&&(i=r("input[name=\"formComponentsMap['order'].emailAddress\"]"));var a=r(o.firstnameID.length>0?o.firstnameID:"#__billingFirstName__");a&&0==a.length&&(a=r("input[name=\"formComponentsMap['order'].firstName\"]"));var c=r(o.lastnameID.length>0?o.lastnameID:"#__billingLastName__");if(c&&0==c.length&&(c=r("input[name=\"formComponentsMap['order'].lastName\"]")),t.submitRequest(e,a.val(),c.val()),_ltk.SCA.CaptureEmail(i),i.focusout(function(){n(i.val(),a.val(),c.val())}),a.focusout(function(){n(i.val(),a.val(),c.val())}),c.focusout(function(){n(i.val(),a.val(),c.val())}),AGORA.availableChoices.length>1){var s=document.querySelectorAll("input[type='radio']");Array.prototype.forEach.call(s,function(e,n){t.checkSelector(e.getAttribute("value"))&&(e.addEventListener("change",function(){t.setItem(e,n)}),e.checked&&t.setItem(e))})}else t.setItem()}}a.prototype.waitForAGORA=function(t,e){var n="number"==typeof e?e:10;n>0&&setTimeout(function(){AGORA?t():waitForAGORA(t,n-1)},500)},a.prototype.getParameterByName=function(t){var e=RegExp("[?&]"+t+"=([^&]*)").exec(window.location.search);return e&&decodeURIComponent(e[1].replace(/\+/g," "))},a.prototype.submitRequest=function(t,e,n){_ltk.SCA.SetCustomer(t,e,n),_ltk.SCA.Submit()},a.prototype.submitItem=function(t){var e=new SCAItem(t.sku,1,t.price,t.name);e.Meta1=t.PublicationID,e.Meta2=t.PromotionID,_ltk.SCA.AddItemEx(e),_ltk.SCA.Submit()},a.prototype.customItem=function(t,e,i,o,r){var a={sku:t,price:e,name:i+"-"+o,PublicationID:r,PromotionID:n};this.submitItem(a)},a.prototype.checkSelector=function(t){for(var e in AGORA.choiceIdToPricingOptionIdMap)if(AGORA.choiceIdToPricingOptionIdMap.hasOwnProperty(e)&&t==e)return!0;return!1},a.prototype.scrapePrice=function(t){var e=r(t).parent().parent().find(".data").html();if(e){for(var n,i=0;i<e.length;i++)if(!isNaN(parseInt(e[i]))){","==e[i+1]&&(e=e.replace(",","")),n=parseInt(e.substring(i));break}return console.log(n),n}return-1},a.prototype.setItem=function(t,e){var r,a;t?(r=t.getAttribute("value"),a=this.scrapePrice(t),-1===a&&("undefined"==typeof e?e=0:e,e<o.imagePriceOptions.length&&(a=o.imagePriceOptions[e]))):(r=AGORA.availableChoices[0].id,a=i);var c={sku:AGORA.choiceIdMap[r].id,price:a,name:AGORA.choiceIdMap[r].itemDescription+"-"+AGORA.choiceIdMap[r].displayName,PublicationID:AGORA.choiceIdMap[r].itemNumber,PromotionID:n};this.submitItem(c),this.save(null,c)},window.LTKAgora=new a,function(t){document.addEventListener?document.addEventListener("ltkAsyncListener",t):(e=document.documentElement,e.ltkAsyncProperty=0,e.attachEvent("onpropertychange",function(e){"ltkAsyncProperty"==e.propertyName&&t()}))}(function(){_ltk.Click.Submit(),LTKAgora.waitForAGORA(LTKAgora.init)});var c="https:"==document.location.protocol?"https://":"http://";!function(t,e,n,i,o){var r,a=t.getElementsByTagName(e)[0];t.getElementById(n)||(r=t.createElement(e),r.id=n,r.src=c+"cdn.listrakbi.com/scripts/script.js?m="+i+"&v="+o,a.parentNode.insertBefore(r,a))}(document,"script","ltkSDK",t,"1")})(ListrakID,PromotionUID,defaultPrice,overrides,jQuery);

        } else if (options.page === 'confirm') {
            //Only fill in the item values if requested to do so by Listrak.
            var ListrakID = 'aFDJJ3H47wgJ';
            var Item = {
                price: '',
                name: ''
            };

            (function(t,n){var r=function(e){return JSON.parse(sessionStorage.getItem(e))};var i=jQuery.now();var s=r("ltkUserObj");(function(t){if(document.addEventListener)document.addEventListener("ltkAsyncListener",t);else{e=document.documentElement;e.ltkAsyncProperty=0;e.attachEvent("onpropertychange",function(e){if(e.propertyName=="ltkAsyncProperty"){t()}})}})(function(){_ltk.Click.Submit();if(s){_ltk.Order.SetCustomer(s.email,s.fname,s.lname);_ltk.SCA.SetCustomer(s.email,s.fname,s.lname)}_ltk.Order.OrderNumber=i;var e=r("ltkItemObj");if(e){_ltk.Order.ItemTotal=e.price;_ltk.Order.ShippingTotal="0.00";_ltk.Order.TaxTotal="0.00";_ltk.Order.HandlingTotal="0.00";_ltk.Order.OrderTotal=e.price;_ltk.Order.AddItem(e.sku,1,e.price)}else{_ltk.Order.ItemTotal=n.price;_ltk.Order.ShippingTotal="0.00";_ltk.Order.TaxTotal="0.00";_ltk.Order.HandlingTotal="0.00";_ltk.Order.OrderTotal=n.price;_ltk.Order.AddItem(n.sku,1,n.price)}_ltk.Order.Submit();_ltk.SCA.OrderNumber=i;_ltk.SCA.Submit()});var o="https:"==document.location.protocol?"https://":"http://";(function(e,t,n,r,i){var s,u=e.getElementsByTagName(t)[0];if(e.getElementById(n))return;s=e.createElement(t);s.id=n;s.src=o+"cdn.listrakbi.com/scripts/script.js?m="+r+"&v="+i;u.parentNode.insertBefore(s,u)})(document,"script","ltkSDK",t,"1")})(ListrakID,Item);
        }
        }
    });

    return return_object;
}

var tagManagerPromoPage = true;
var tagManagerPromoOrderForm = (orderFormPage == 2) ? true : false;

//set order confirmation variable only if this is the first time they visited this page. set session var to keep track.
if ((sessionStorage['orderComplete'] !== window.location.origin+window.location.pathname || sessionStorage['orderComplete'] == null) && orderFormPage == 5) {
    var tagManagerPromoConfirmation = true;
    sessionStorage['orderComplete'] = window.location.origin+window.location.pathname;
}

var tagManagerPromoPubCode = promocode;
var tagManagerPromoOutletCode = outletCode;


var thisPage = window.location.href;
var getDomain = thisPage.split('/');


/* TAG MANAGER */
if ( (typeof killGTM != 'undefined') && (getDomain[2] === "orders.sevenfiguresolutions.com")){
		console.log('quality score tags | SFP');

    // Quality Score Tags | SFP
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WXN88W7');

}

else if ( (typeof killGTM != 'undefined') && (getDomain[2] === "reports.richdadnewsletter.com" || getDomain[2] === "orders.paradigm-press.info" || getDomain[2] === "reports.richdadrecommends.com" || getDomain[2] === "orders.10x-secure.net" || getDomain[2] === "orders.nomi-secure.net" || getDomain[2] === "orders.richdad-secure.net" || getDomain[2] === "orders.rickards-secure.net" || getDomain[2] === "orders.scolardi-secure.net" || getDomain[2] === "orders.sykes-secure.net")){

    console.log('noGTM');


}

else {
    //GLOBAL CODE
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5R7GC3J');

}




/*COMPARE JQUERY VERSIONS AND FIX OLDER VERSIONS OF JQUERY TO SUPPORT THE ON FUNCTIONALITY*/
domready(function() {

    var jQuery = {};

    if (typeof $ == 'undefined') {
        return;
    } else {
        jQuery = $;
    }

    if (! compareJqueryVersion( '1.7.0', '<')) {
        jQuery.fn.extend( {
            on: function(eventsmap, selector, data, handler) {
                return this.delegate(selector, eventsmap, data, handler)
            }
        });
    }

});





/*LEGACY FUNCTION FOR DETERMINING LF PUBS*/
function isLfb(pubcode) {

    switch (pubcode.toUpperCase()) {
        case 'LWI': return true;
        case 'LFB': return true;
        case 'LFL': return true;
        case 'LFW': return true;
        case 'LPM': return true;
        case 'NHS': return true;
        case 'WNE': return true;
        case 'III': return true;
    }

    return false;
}

/*
Final endpoint for promo with no upsell/cross sell
https://reports.agorafinancial.com/RDP_advcross_50M_0515

Option to select no and go to confirmation page
https://reports.agorafinancial.com/LIR_candsoc_RDP0D_0515

No option to select no and go to confirmation page
https://reports.agorafinancial.com/LIR_candsoc_RDP50_0515
*/

/**
 * send confirmation emails
 */

//GLOBAL ORDERFORM DETAILS
//store order details in a global property for access by other scripts
//setting this as a weird name to prevent colisions
var aforgwhizy = {};


//AF EMAIL FOR FIRING OFF MAILGUN EMAILS
function AFemail(emailData) {

    var orderDetail = {},
        orderValues = {},
        endpoint = 'https://profiles.agorafinancial.com/pixel/email-order-confirmation',
        waiting_endpoint = 'https://profiles.agorafinancial.com/pixel/email-order-confirmation/waiting/',
        waiting_poll_index = 0,
        pub_code = false,
        // 30 minutes
        waiting_polls = 30,
        redirect = '',
        set_confirm_page = false,
        sto = {},
        choice_code = '',
        premium_value = '';

    function sendEmail() {

        setEmailOptions();

        if (isConfirmationPage()) {
            /**
             * wait 1 second to fire email this is to ensure any other email related JS calls that
             * get fired later in the page can be included in this request.
             * It also helps to prevent firing emails on Opiums random double page loads
             */
            window.setTimeout(function() {
                createEmailRequest();

                if (set_confirm_page) {
                    setConfirmationPage();
                }

            }, 1000);
        }
    }

    function trackPage()
    {
        if (isConfirmationPage()) {
            getPubCode();
            getEmailName();
            getOrderInformation(); // items under the "Order Information" header
            getYourOrder(); // items under the "Your Order" header
            getTax(); // items under the "Tax" header
            getSubtotal();
            getChoiceCode();
            getPromoData();
            prepareOrderValues();
            trackEcommerceGA();
        }
    }

    function setEmailOptions()
    {
        if (typeof emailData.endpoint != 'undefined') {
            endpoint = emailData.endpoint;
        }

        if (typeof emailData.waiting_endpoint != 'undefined') {
            waiting_endpoint = emailData.waiting_endpoint;
        }

        if (typeof emailData.pubCode != 'undefined') {
            pub_code = emailData.pubCode;
        }

        if (typeof emailData.redirectTo != 'undefined') {
            pageRedirect(emailData.redirectTo);
        }

        if (typeof emailData.setConfirmPage != 'undefined' && emailData.setConfirmPage) {
            set_confirm_page = true;
        }
    }

    function createEmailRequest() {
        getPubCode();
        getEmailName();
        getOrderInformation(); // items under the "Order Information" header
        getYourOrder(); // items under the "Your Order" header
        getTax(); // items under the "Tax" header
        getSubtotal();
        getChoiceCode();
        getPromoData();
        prepareOrderValues();
        trackEcommerceGA();
        parameterizeUrlValues();
        sendEmailRequest(endpoint);

        // prevent sendWaitingPoll(). This sends the email right away
        if (typeof emailData.noUpsell != 'undefined' && emailData.noUpsell) {
            return false;
        }

        sendWaitingPoll();
    }

    //this is where we will send the details of the order to google analytics for ecommerce tracking
    function trackEcommerceGA() {

        //we have to first decode these data points
        var reformatedOrderValues = orderValues,
            transactionID = Math.random().toString(36).substr(2, 9);
        for (var key in reformatedOrderValues) {
            reformatedOrderValues[key] = decodeURIComponent(reformatedOrderValues[key]);
        }

        reformatedOrderValues.transactionID = transactionID;

        //cleanup the ordertotal
        reformatedOrderValues.ordertotal = reformatedOrderValues.ordertotal.replace('Subtotal: US$ ', '');
        reformatedOrderValues.ordertotal = reformatedOrderValues.ordertotal.replace(',', '');

        aforgwhizy = reformatedOrderValues;

    }

    /**
     * do not convert LFB confirmation pages
     */
    function setConfirmationPage()
    {
        var noButton = $('h3.upsell_no').find('a'),
            href = noButton.attr('href'),
            pubcode = get_pub_code();

        if (isLfb(pubcode)) {
            return false;
        }

        // opium cross sell links
        if (href === '#') {
            return false;
        }

        noButton.attr('href', getConfirmationPage(pubcode));
    }

    function getConfirmationPage(pub_code)
    {
        // remove the values "termcode:" and appended pub code with "-OST"
        premium_value = choice_code.replace(/(termcode|\:|\%3A|\-[a-zA-Z]{2,4}$)/g, '');
        return 'http://agorafinancial.com/publications/' + pub_code + '/confirmation?premium=' + premium_value;
    }

    /**
     * automatically set the global confirmation pages with "confirm"
     * or set a custom value
     * @param  {string} r
     * @return {string}
     */
    function pageRedirect(r)
    {
        if (r === 'confirm') {
            // set the global redirect
            redirect = getConfirmationPage(get_pub_code());
            return redirect;
        }

        redirect = r;
        return redirect;
    }

    function setWaitingCacheBuster(endpoint) {
        var max = 1000000000,
            min = 100000,
            random = 0;
        // strip trailing "/"
        endpoint = endpoint.replace(/\/$/, '');
        // generate a random number
        random = Math.round(Math.random() * (max - min) + min);
        return endpoint + '/' + random;
    }

    function getPubCode() {
        orderValues.pubCode = (pub_code !== false) ? pub_code : get_pub_code();
    }

    function getEmailName() {
        // set client level variables
        if (typeof emailData != 'undefined') {
            if (typeof emailData.emailName != 'undefined'){
                orderValues.emailName = emailData.emailName;
            } else {
                //throw 'AFemail({emailName: "af_name"}) - emailName parameter is missing';
            }

        } else {
            //throw 'AFemail() - paramaters are not set';
        }
    }

    /**
     * check if there is order confirmation data
     * @return {Boolean}
     */
    function isConfirmationPage() {
        orderDetail = $('div.order_confirm');
        if (orderDetail.length === 1) {
            return true;
        } else {
            return false;
        }
    }

    function getOrderInformation() {
        var details = $('span.order_detail'), // get the detail names
            // now go up to the parent to get the actual value
            // and use .clone(), otherwise you will delete page data
            values = details.parent().clone(),
            key = '',
            val = '';

        for (var i = 0; i < details.length; i++) {
            key = details.eq(i).text();
            values.eq(i).children('span.order_detail').remove();
            setOrderInformation(key, values.eq(i).html());
        }
    }

    /**
     * choicecode = termcode
     * @return {boolean}
     */
    function getChoiceCode() {
        var description = $('.itemDescription'),
            text = description.text(),
            regex = new RegExp('termcode:(.*?)[0-9a-zA-Z-]+'),
            termcode = '';

        // over ride the term code set in the opium admin description
        if (typeof emailData.choiceCode != 'undefined') {
            choice_code = 'termcode:' + emailData.choiceCode + '-' + get_pub_code();
            orderValues.termcode = choice_code;
            return true;
        }

        if (description.length === 0) {
            return false;
        }

        termcode = text.match(regex);

        if (termcode === null) {
            return false;
        }

        choice_code = encodeURIComponent(termcode[0]);
        orderValues.termcode = choice_code;
    }

    /**
     * @param {string} key
     * @param {string} value
     * @return {null}
     */
    function setOrderInformation(key, value) {
        var regex = new RegExp('\:', 'g');
        // remove the colons
        key = key.replace(regex, '');

        // trim whitespace
        key = key.trim();

        switch (key) {
            case 'First Name':
                orderValues.nameFirst = value;
            break;
            case 'Last Name':
                orderValues.nameLast = value;
            break;
            case 'Address 1':
                orderValues.address1 = value;
            break;
            case 'Address 2':
                orderValues.address2 = value;
            break;
            case 'Country':
                orderValues.country = value;
            break;
            case 'Zip/Postal Code':
                orderValues.zipcode = value;
            break;
            case 'State':
                orderValues.state = value;
            break;
            case 'City':
                orderValues.city = value;
            break;
            case 'Phone':
                orderValues.phone = value;
            break;
            case 'Email':
                orderValues.email = value;
            break;
            case 'Visa':
                orderValues.cctype = 'visa';
                orderValues.ccnumber = value;
            break;
            case 'MasterCard':
                orderValues.cctype = 'mastercard';
                orderValues.ccnumber = value;
            break;
            case 'Discover':
                orderValues.cctype = 'discover';
                orderValues.ccnumber = value;
            break;
            case 'American Express':
                orderValues.cctype = 'american express';
                orderValues.ccnumber = value;
            break;
            case 'Order Number':
                orderValues.ordernumber = value;
            break;
            case 'Promotion Code':
                orderValues.promocode = value;
            break;
            case 'Username':
                orderValues.username = value;
            break;
            case 'Password':
                orderValues.password = value;
            break;
        }
    }

    function getYourOrder() {
        var itemName = $('.itemName'),
            itemDescription = $('.itemDescription'),
            itemQuantity = $('.itemQuantity'),
            itemPrice = $('.itemPrice'),
            blockLabel = $('.blockLabel'),
            blockData = $('.blockData');

        orderValues.itemname = itemName.text();
        orderValues.itemdescription = itemDescription.text();
        orderValues.orderquantity = itemQuantity.text();
        orderValues.itemprice = itemPrice.text();

        for (var i = 0; i < blockLabel.length; i++) {
            setOrderInformation(blockLabel.eq(i).html(), blockData.eq(i).html());
        }
    }

    function getTax() {
        var location = $('.shoppingCartShippingLocation'),
            price = $('.shippingPrice');

        orderValues.taxlocation = location.text();
        orderValues.taxprice = price.text();
    }

    /**
     * subtotal is wrapped in <h3> apparently,
     * but add <p> and <span> as well to be save
     * @return {null}
     */
    function getSubtotal() {
        var wrap = $('h3, p, span, th'),
            text = '';

        // find the text Subtotal
        for (var i = 0; i < wrap.length; i++) {
            text = wrap.eq(i).text();
            if (text.indexOf('Subtotal') > -1) {
                orderValues.ordertotal = text;
                return;
            }
        }
    }

    function getPromoData() {
        orderValues.orderUrl = window.location.href;
    }

    function prepareOrderValues() {
        for (v in orderValues) {
            // remove <>
            orderValues[v] = orderValues[v].replace(/(\<|\>)/g, ' ');
            // remove multiple new lines (do this first)
            orderValues[v] = orderValues[v].replace(/\n/g, " ");
            // remove multiple whitespaces (do this last)
            orderValues[v] = orderValues[v].replace(/\s{2,}/g, ' ');
            orderValues[v] = orderValues[v].trim();
            orderValues[v] = encodeURIComponent(orderValues[v]);
        }
    }

    function parameterizeUrlValues() {
        var params = '';

        for (v in orderValues) {
            params += v + '=' + orderValues[v] + '&';
        }

        // remove trailing &
        orderValues = params.replace(/&$/g, '');
    }

    function sendEmailRequest(endpoint) {
        $('<img />').attr({
            style: "display:none;height:1px;width:1px",
            alt: "a",
            src: endpoint + '?' + orderValues
        }).appendTo('body').load(function() {
            if (redirect !== '') {
                window.location.href = getConfirmationPage(get_pub_code());
            }
        });
    }

    function sendWaitingPoll() {
        var request = '';

        sto = window.setTimeout(function() {
            if (waiting_poll_index >= waiting_polls) {
                sto = null;
                return false;
            }
            // increment counter so we stop at waiting_polls
            waiting_poll_index++;
            // set new url with cache buster so every image fires
            request = setWaitingCacheBuster(waiting_endpoint);
            sendEmailRequest(request);
            sendWaitingPoll();
        // every minute
        }, (60 * 1000));
    }

    return {
        send: function() {
            domready(function() {
                sendEmail();
            });
        },
        track: function() {
            domready(function() {
                trackPage();
            })
        }
    }
}

AFemail({}).track();



//DOM CHANGES
domready(function() {

    (function() {
        var lnks = $('a.privacypolicy');
        lnks.attr('target', '_blank');
        lnks.click(function(e) {
            var self = $(this),
                href = self.attr('href');
            e.preventDefault();
            linkPopUp(href, 'window1', '500', '500', '50', '200');
            afga.send('event', {
                'eventCategory' : 'Promo',
                'eventAction' : 'PrivacyPolicy',
                'eventLabel' : 'Click'
            });
        });
    })();

    $('a.tel').click(function() {
        afga.send('event', {
            'eventCategory' : 'TeleNumber',
            'eventAction' : 'LinkClick'
        });
    });

    $(document).ready(function() {

        var right_column = $('div.right_column'),
            right_couumn_hl = {};

        if (right_column.length == 1) {
            right_couumn_hl = right_column.find('h2.form_headline');
            right_couumn_hl.eq(0).css('border', 'none');
            right_couumn_hl.eq(0).css('padding-top', '0');
        }

    });

    // prevent copy and pasting of email address
    (function() {
        var pgn = get_url_parameter('pageNumber');

        if (pgn == '') {
            return;
        }

        if ($("input").length === 0) {return}
        var email_input = $("input[name='formComponentsMap['order'].confirmEmailAddress']");

        if (email_input.length === 0) {return}

        email_input.bind("paste",function(e) {
            e.preventDefault();
        });
    })();

    setTimeout(function() {

        if (cartAbandon().fireAfn() !== true) {
            return null;
        }


    }, 300);

});




// password patch
domready(function() {
    var pword_input = $('input[type="password"]'),
        wrapper = pword_input.parents('div.field_wrapper');

    if (pword_input.length === 0) {return;}

    $.extend({
        password: function (length, special) {
        var iteration = 0;
        var password = "";
        var randomNumber;
        if(special == undefined){
            var special = false;
        }
        while(iteration < length){
            randomNumber = (Math.floor((Math.random() * 100)) % 94) + 33;
            if(!special){
                if ((randomNumber >=33) && (randomNumber <=47)) { continue; }
                if ((randomNumber >=58) && (randomNumber <=64)) { continue; }
                if ((randomNumber >=91) && (randomNumber <=96)) { continue; }
                if ((randomNumber >=123) && (randomNumber <=126)) { continue; }
            }
            iteration++;
            password += String.fromCharCode(randomNumber);
        }
        return password;
        }
    });

    wrapper.css('display', 'none');
    pword_input.val($.password(8,false));
});


// order form version
domready(function() {
    var of_ver = get_url_parameter('ver'),
        verpo = $('.verpo'),
        v_n = {},
        ver_input = {};

    if (of_ver === null) {return}

    v_n = $('.v' + of_ver);

    if (v_n.length === 0) {return}

    verpo.css('display', 'none');
    v_n.css('display', 'block');

    ver_input = v_n.find('input[type="radio"]');

    window.setTimeout(function () {
        ver_input.eq(0).prop('checked', true);
    }, 1000);
});


// ##### Chat
var chat = {

    pub: '',
    is_chat: false,

    init: function(initChat, pubs, include, exclude, exclude_regex) {
        var thispub = get_pub_code();

        if (pubs == 'backends') {
            this.is_chat = isPubBackend(thispub);

            if (this.is_chat && exclude.length > 0) {
                this.is_chat = this.exclude_list(exclude, thispub);
            }

            if (this.is_chat && exclude_regex.length > 0) {
                this.is_chat = this.exclude_list_regex(exclude_regex);
            }
        }

        if (pubs instanceof Array) {
            this.is_chat = this.is_valid_pub(pubs, thispub);
        }


        domready(function() {
            if (initChat && chat.is_chat) {
                chat.show_chat();
            }
        });

        // return true for testing where chat is eligilbe, but not shown
        if (initChat === false && this.is_chat) {
            return true;
        } else if (initChat && this.is_chat) {
            return true;
        } else {
            return false;
        }
    },

    is_valid_pub: function(pubs, thispub) {
        if ( typeof pubs === 'undefined' || typeof thispub === 'undefined' ) { return false }

        for (var i = 0; i < pubs.length; i++) {
            if (pubs[i].toLowerCase() == thispub) {
                return true;
            }
        }
        return false;
    },

    /*
        if pub is included in exclude list, then return false
        to set this.is_chat to false so chat does not display
        @param array excluded pubs
        @param string pub code
        @return boolean should we show chat
    */
    exclude_list: function(exclude, thispub) {
        for (var i = 0; i < exclude.length; i++) {
            if (exclude[i].toLowerCase() == thispub.toLowerCase()) {
                return false;
            } else if (typeof killChat !== 'undefined'){
              return false;
            }
        }
        return true;
    },

    exclude_list_regex: function(exclude) {
        var url = window.location.href,
            regex = {};

        for (var i = 0; i < exclude.length; i++) {
            if (url.match(new RegExp(exclude[i])) != null) {
                return false;
            }
        }

        return true;
    },

    show_chat: function() {
        window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
        d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
        _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8');
        $.src='//v2.zopim.com/?1eSlHB7fvaY4YaZc4ljkGodsIEA6PHNa';z.t=+new Date;$.
        type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');

        // modify chat window/badge
        // https://api.zopim.com/files/meshim/widget/controllers/liveChatAPI/Badge-js.html
        $zopim(function() {
            // on load (i think)
            $zopim.livechat.setOnConnected(function() {
                // if they're viewing LFB
                if (isLfb(get_pub_code())) {
                    $zopim.livechat.badge.setImage("https://sites.agorafinancial.com/promos/images/LFB_symbol_75x75.png");
                } else {
                    $zopim.livechat.badge.setImage("https://sites.agorafinancial.com/promos/images/AF_logo_transparent_darktext.png");
                }
            });
        });
    }
};
chat.init(true, 'backends', [], ['VANC', 'VAN', 'LPM'], ['MCO_symrec']);
// ##### End Chat


// ##### exit pop
var af_exit_pop = function(ui) {

    var ep = {

        bdy: $('body'),

        init: function(msg) {
            this.createExitPop();
            this.bindMessage(msg);
            this.bindEvents();
            this.fixHTML();
            this.fireUiEvents(ui);
        },

        createExitPop: function() {
            var html = '';

            html += '<div id="popmessage">';
            html +=     '<div id="popsmoke" class="popsmoke"></div>';
            html +=     '<div id="popcontrol" class="popcontrol">';
            html +=         '<div id="exitButton" class="exitButton"></div>';
            html +=         '<div id="epcontent" class="epcontent">';
            html +=         '</div>';
            html +=     '</div>';
            html += '</div>';

            this.bdy.append(html);
        },

        bindEvents: function() {
            var t = $(window),
                n = $("body"),
                r = $("#popsmoke"),
                i = $("#popcontrol"),
                s = $("#read_transcript"),
                o = r.add("#exitButton, #epcontent a:not(#new_page)"),
                u = 0,
                a = t.height(),
                f = t.width(),
                l = i.height(),
                c = r.height(),
                h = {
                    trig: 30
                };
            t.unbind("scroll");
            t.scroll(function () {
                h.trig = t.scrollTop() + 30
            });
            this.bdy.unbind("mousemove");
            this.bdy.mousemove(function (e) {
                if (e.pageY <= h.trig) {
                    r.fadeTo(50, .7);
                    i.fadeIn(50)
                }
            });
            o.unbind("click");
            o.click(function (e) {
                e.preventDefault();
                r.fadeOut(50);
                i.fadeOut(50);
                ep.bdy.unbind();
                t.unbind()
            });
        },

        bindMessage: function(msg) {
            var epcontent = $('#epcontent');
            epcontent.append(msg);
        },

        fixHTML: function() {
            var a = $('#epcontent a');
            a.css('display', 'block');
        },

        fireUiEvents: function(ui) {
            if (typeof ui === 'undefined') { return; }
            if (typeof ui.action === 'undefined') { return; }

            if (ui.action == 'newOffer') {
                this.setNewOffer(ui);
            }
        },

        setNewOffer: function(ui) {
            var newOffer = $('#new_page'),
                promoCode = this.getPromoCode();

            if (typeof ui.href === 'undefined') { return; }

            newOffer.attr('href', ui.href + promoCode);
        },

        getPromoCode: function() {
            var href = window.location.href;
            href = href.split('/');
            href = href[4];
            href = encodeURIComponent(href);
            return href;
        }
    }

    return {
        fire: function(msg, callback) {
            ep.init(msg);
            if (typeof callback == 'function') {
                callback();
            }
        }
    }
};

// ##### END exit pop

function af_video_player(obj) {

domready(function() {

    var ce = document.createElement('script'),
        s = document.getElementsByTagName('script')[0],
        sto = {
            pge: '',
        };

        ce.type = 'text/javascript';
        ce.async = true;
        ce.src = 'https://dhceihxydnf0v.cloudfront.net/JWplayer/jwPlayer_flex.js';
        s.parentNode.insertBefore(ce, s);

    function jwplayer_polling() {

        if (sto.pge !== null) {

            if (typeof jwplayer !== 'undefined') {
                load_video_player();
                window.clearTimeout(sto.pge)
                sto.pge = null;
                return;
            }
            sto.pge = window.setTimeout(function () {
                jwplayer_polling();

            }, 10);
        }
    } jwplayer_polling();

    function load_video_player() {

        var af_video = $('#af_video_player'),
            af_promo_player = {},
            html = '',
            sub_pop_fired = { b: 0 },
            hidestatus = {},
            unhide = {};

        html += '<div id="videowrapper" class="videowrapper">';
        html +=     '<div id="hidestatus" style="font-size:24px;margin:20px;color:#ff0000;">';
        html +=         'Your Video is Almost Finished Loading<br>';
        html +=         '<img style="height:25px;margin:10px 10px 0 0;width25px;" src="https://sites.agorafinancial.com/promos/images/video_loading.gif" alt="Video Loading"/>';
        html +=     '</div>';
        html +=     '<div id="af_promo_player"></div>';
        html += '</div>';

        af_video.append(html);

        af_promo_player = $('#af_promo_player');
        hidestatus = $('#hidestatus');
        unhide = $('.unhide');

        if (af_promo_player.length === 1) {

            jwplayer('af_promo_player').setup({
                flashplayer: 'https://dhceihxydnf0v.cloudfront.net/JWplayer/player.swf',
                file: obj.file,
                volume: 100,
                width: obj.width,
                height: obj.height,
                events: {
                    onPlay: function() {
                        hidestatus.css('display', 'none');
                    }
                },
                autostart: obj.autostart,
                controlbar: obj.controlbar
            });
        }
    }
});
}


//This is for dynamic content for order forms. Mostly changing event dates and cs names

domready(function() {

var csLifR = $('span.csLifeRep'),
csRes = $('span.csReserveRep'),
csLifeSection = $('div.csLifeSect'),
awnRegEv = $('span.awnRegEvnt'),
awnLifeEv = $('span.awnLifeEvnt');

csLifR.html('Christine');
csLifeSection.html('<p>WhatÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s involved? For one youÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ll get a special hotline phone number you can call anytime. The number rings direct to your specific liaison on our customer care team. No frustrating, automated menus to navigate through. No mind-numbing elevator-style music to wait through.</p><p>Because when you join this program today, weÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ll give you the phone number for Matt, who will serve as your personal lifetime liaison.</p><p>Matt sits in an office one floor below me here in our Baltimore-based headquarters. HeÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s not in some far off distant land with a phone delay. I walk by his office every day on my way to get my cup of coffee.</p><p>And if you have any questions about your subscriptionÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ or any of the other benefits IÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢m telling you about today ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ you can call up Matt whenever you have any questions.</p><p>In fact, when you call, you will ring him on a special phone weÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ve set up exclusively for our Lifetime members.</p><p>This phone rings right on MattÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s desk, and since it has a special ring, he answers it before taking any other calls. Matt will do everything he can to make sure your question is answered and your needs are met to your satisfaction.</p>');
csRes.html('Barbara');
awnRegEv.html('January 9th');
awnLifeEv.html('January 16th');
});
//end content

/*
domready(function(){

var ausPop = '';
     ausPop += '<div class="shadowArea" style="width:100%;height:100%;background: rgba(0,0,0, 0.8);z-index: 900;position: absolute;top:0;cursor:pointer;display: none;">';
     ausPop += '<div style="max-width: 750px;background-color: #FFF;position: fixed;margin: 5% auto;left: 0;right: 0;z-index: 950;padding:10px 50px 50px 50px;top:10px;cursor: default;text-align: left;font-size: 1rem;">';
     ausPop += '<div id="exitX" style="text-align: right;font-size: 2rem;position: absolute;right:5px;">X</div>';
     ausPop += '<p>This offer is not available in Australia.</p>';
      ausPop += '</div>';
      ausPop += '</div>';

 autoCountry = $('#__billingCountrySelect__').find('option:selected').text();
  $(function() {
      $('.paymentFormContainer').show();
      $('[name="formComponentsMap[\'order\']\.countryId"]').change(function () {
        var autoCountry = $('#__billingCountrySelect__').find('option:selected').text();
          if (autoCountry === 'AUSTRALIA') {
              var currentVal =  $('[name="formComponentsMap[\'order\']\.countryId"]').val();
              $('#__billingCountrySelect__').find('option:selected').remove();
              $('#__billingCountrySelect__').val(1).trigger('change');
              ausiePop();
          }
          $('#exitX, .shadowArea').click(function(){
            $('.shadowArea').hide();
          });
      });
  });

});
*/

/*
    function ausiePop(){
        $('body').append(ausPop);
        $('.shadowArea').show();
    }
    function removeAus(){
        //console.log('fired removeAus ' + checkAus);
        if ( ($("#__billingCountrySelect__ option[value='14']").text()) === 'AUSTRALIA'){

                $("#__billingCountrySelect__ option[value='14']").remove();
        }

        if ( ($('#__billingCountrySelect__').find('option:selected').text()) === 'AUSTRALIA'){
                ausiePop();
        }

    }
*/
 /*
window.addEventListener('load',

  function() {
    removeAus();
  });
*/

// email match code to cut back on cookies.js filling in a blank field on error.
domready(function(){


 // Check if there exists any validation messages
$('<p class="red misMatch" style="display:none;">Your email doesn\'t match please check it.</p>').insertAfter( "#emailConfirm" );

    $( "#emailConfirm" ).blur(function() {

    if ($('#__billingEmailAddress__').val()!= $('#emailConfirm').val() && $('.misMatch').not(':visible')){
        $('.misMatch').show();
    } else {
        $('.misMatch').hide();
    }
});

    $( "#__billingEmailAddress__" ).blur(function() {

     if ($('#__billingEmailAddress__').val()!= $('#emailConfirm').val() && $('.misMatch').not(':visible')){
        $('.misMatch').show();
    } else {
        $('.misMatch').hide();
    }


});

    var validationMsgCount = $('.alertMessage').length;
 // Check if there exists any validation messages
 if(validationMsgCount > 0) {
    $('#__billingEmailAddress__').val($('#emailConfirm').val());
    }
});


// end Australia light restrict



    function addFooter(){

        var footerDislcaim = ' No part of this report may be reproduced or placed on any electronic medium without written permission from the publisher. Information contained herein is obtained from sources believed to be reliable, but its accuracy cannot be guaranteed. All currency mentioned is in US dollars. If you are to receive an item by mail, it will ship within 7-10 business days once your item is processed.';
        var ofFooter = '<div class=\"ofFooter\" style=\"margin: 0px; max-width: 100%; padding-bottom: 20px; background: #ffffff\"><div style=\"margin: 0 auto; display: block; max-width: 700px; padding-top: 20px;\"><img src=\"https://d13p2xj50zkyqm.cloudfront.net/promos/AF/af_assets/AF_logo_transparent_darktext.png\" alt=\"Agora Financial.com\" width=\"35\" height=\"53\" style="float: left; margin: 0 .5em 0 2em; margin-bottom: 40px;"><p style=\"font-size: 1em; margin-top: 0px;\">&copy; Agora Financial, LLC | 808 St. Paul St., Baltimore, MD 21202, United States of America |  <span id=\"privacypolicy\" ><a class=\"privacypolicy\" style=\"text-decoration: underline; cursor: pointer; color: #05405b\" onclick=\"window.open(\'https://agorafinancial.com/contact-us/\', \'mywin\',\'width=300,height=300\')\",>Contact Us</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://agorafinancial.com/privacy-policy/\', \'mywin\',\'width=300,height=300\')\",>Privacy Policy</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://agorafinancial.com/terms-and-conditions\', \'mywin\',\'width=300,height=300\')\",>Terms and Conditions</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://privacyportal-cdn.onetrust.com/dsarwebform/90ddaa87-9d70-4282-9d4f-d6cbd96bd224/06ff6a58-8055-476b-a2b8-49825358a445.html\', \'mywin\',\'width=300,height=300\')\",>Do Not Sell My Info </a></span>' + footerDislcaim + '</p></div></div>';
        var thisPage = window.location.href;
        var getDomain = thisPage.split('/');

        if (getDomain[2] === "orders.chooseyourselffinancial.com"){

            var ofFooter = '<style>.footer_container{padding: 0 10px;display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -webkit-flex;display: flex;}.footer_container > img{align-self: center !important;-webkit-align-self:center !important;max-width: 30px;}.footer_container p {text-align:left;}@media screen and (max-width: 600px) {.footer_container{flex-direction: column}.footer_container img{margin-bottom:12px;}.footer_container p {text-align:center;}}</style> <div class=\"ofFooter\" style=\"margin: 0px; max-width: 100%; padding-bottom: 20px; background: rgba(255, 255, 255, 0)\"><div class="footer_container" style=\"margin: 0 auto; max-width: 700px; padding-top: 20px;\"><img src=\"https://d13p2xj50zkyqm.cloudfront.net/promos/AF/TOM/Assets/favicon.ico\" alt=\"Choose Yourself Financial\"><p style=\"font-size: 10px; margin-top: 0px; color:#969696;\">&copy; Choose Yourself Media, LLC | 808 St. Paul St., Baltimore, MD 21202, United States of America |  <span id=\"privacypolicy\" ><a class=\"privacypolicy\" style=\"text-decoration: underline; cursor: pointer; color: #969696\" onclick=\"window.open(\'https://chooseyourselffinancial.com/contact-us/\', \'mywin\',\'width=300,height=300\')\",>Contact Us</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://chooseyourselffinancial.com/faq/\', \'mywin\',\'width=300,height=300\')\",>FAQ</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'http://chooseyourselffinancial.com/terms.html\', \'mywin\',\'width=300,height=300\')\",>Terms and Conditions</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://privacyportal-cdn.onetrust.com/dsarwebform/90ddaa87-9d70-4282-9d4f-d6cbd96bd224/8f5f07fd-9b14-42b6-a86b-f78231464f86.html\', \'mywin\',\'width=300,height=300\')\",>Do Not Sell My Info </a></span>' + footerDislcaim + '</p></div></div>';
            changeOrderButton("Submit My Order");
            return ofFooter;
        }
        else if (getDomain[2] === "reports.agorafinancial.com"){
            changeOrderButton("Submit My Order");
        }
        else if (getDomain[2] === "orders.revolutionpublishing.com"){
            var ofFooter = '<style>.footer_container{padding: 0 10px;display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -webkit-flex;display: flex;}.footer_container > img{align-self: center !important;-webkit-align-self:center !important;max-width: 30px;}.footer_container p {text-align:left;}@media screen and (max-width: 600px) {.footer_container{flex-direction: column}.footer_container img{margin-bottom:12px;}.footer_container p {text-align:center;}}</style> <div class=\"ofFooter\" style=\"margin: 0px; max-width: 100%; padding-bottom: 20px; background: rgba(255, 255, 255, 0)\"><div class="footer_container" style=\"margin: 0 auto; max-width: 700px; padding-top: 20px;\">&copy; Revolution Publishing, a division of Laissez Faire, LLC. | 808 St. Paul St., Baltimore, MD 21202, United States of America |  <span id=\"privacypolicy\" ><a class=\"privacypolicy\" style=\"text-decoration: underline; cursor: pointer; color: #969696\" onclick=\"window.open(\'https://revolutionpublishing.com/privacy-policy/\', \'mywin\',\'width=300,height=300\')\",>Contact Us</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://revolutionpublishing.com/privacy-policy/\', \'mywin\',\'width=300,height=300\')\",>FAQ</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://revolutionpublishing.com/terms-and-conditions/\', \'mywin\',\'width=300,height=300\')\",>Terms and Conditions</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://privacyportal-cdn.onetrust.com/dsarwebform/90ddaa87-9d70-4282-9d4f-d6cbd96bd224/8f5f07fd-9b14-42b6-a86b-f78231464f86.html\', \'mywin\',\'width=300,height=300\')\",>Do Not Sell My Info </a></span>' + footerDislcaim + '</p></div></div>';
            return ofFooter;
        }
        else if (getDomain[2] === "orders.lfb.org" || getDomain[2] === "reports.phoenixpress.info"){
            var ofFooter = '<style>.footer_container{padding: 0 10px;display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -webkit-flex;display: flex;}.footer_container > img{align-self: center !important;-webkit-align-self:center !important;max-width: 50px;}.footer_container p {text-align:left;}@media screen and (max-width: 600px) {.footer_container{flex-direction: column}.footer_container img{margin-bottom:12px;}.footer_container p {text-align:center;}}</style> <div class=\"ofFooter\" style=\"margin: 0px; max-width: 100%; padding-bottom: 20px; background: rgba(255, 255, 255, 0)\"><div class="footer_container" style=\"margin: 0 auto; max-width: 700px; padding-top: 20px;\"><img src=\"https://d13p2xj50zkyqm.cloudfront.net/promos/LF/general_images/LFB_symbol_75x75.png\" alt=\"Laissez Faire Books\"><p style=\"font-size: 10px;color:#969696;\">&copy; Laissez Faire Books, LLC | 808 St. Paul St., Baltimore, MD 21202, United States of America |  <span id=\"privacypolicy\" ><a class=\"privacypolicy\" style=\"text-decoration: underline; cursor: pointer; color: #969696\" onclick=\"window.open(\'https://lfb.org/contact/\', \'mywin\',\'width=300,height=300\')\",>Contact Us</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://lfb.org/privacy\', \'mywin\',\'width=300,height=300\')\",>Privacy Policy</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://lfb.org/terms-and-conditions\', \'mywin\',\'width=300,height=300\')\",>Terms and Conditions</a></span> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://privacyportal-cdn.onetrust.com/dsarwebform/90ddaa87-9d70-4282-9d4f-d6cbd96bd224/d3969caa-448b-4ca8-a4bb-9a2bfc9d380c.html\', \'mywin\',\'width=300,height=300\')\",>Do Not Sell My Info </a>' + footerDislcaim + '</p></div></div>';
            changeOrderButton("Submit My Order");
            return ofFooter;
        }
        else if (getDomain[2] === "reports.gilderpress.info"){
            var ofFooter = '<style>.footer_container{padding: 0 10px;display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -webkit-flex;display: flex;}.footer_container > img{align-self: center !important;-webkit-align-self:center !important;max-width: 50px;}.footer_container p {text-align:left;}@media screen and (max-width: 600px) {.footer_container{flex-direction: column}.footer_container img{margin-bottom:12px;}.footer_container p {text-align:center;}}</style> <div class=\"ofFooter\" style=\"margin: 0px; max-width: 100%; padding-bottom: 20px; background: rgba(255, 255, 255, 0)\"><div class="footer_container" style=\"margin: 0 auto; max-width: 700px; padding-top: 20px;\"><img src=\"https://d13p2xj50zkyqm.cloudfront.net/promos/LF/general_images/LFB_symbol_75x75.png\" alt=\"Laissez Faire Books\"><p style=\"font-size: 10px;color:#969696;\">&copy; Laissez Faire Books, LLC | 808 St. Paul St., Baltimore, MD 21202, United States of America |  <span id=\"privacypolicy\" ><a class=\"privacypolicy\" style=\"text-decoration: underline; cursor: pointer; color: #969696\" href=\"https://lfb.org/contact/\" target=\"_blank\",>Contact Us</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" href=\"https://lfb.org/privacy/\" target=\"_blank\",>Privacy Policy</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" href=\"https://lfb.org/terms-and-conditions\" target=\"_blank\",>Terms and Conditions</a></span> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://privacyportal-cdn.onetrust.com/dsarwebform/90ddaa87-9d70-4282-9d4f-d6cbd96bd224/d3969caa-448b-4ca8-a4bb-9a2bfc9d380c.html\', \'mywin\',\'width=300,height=300\')\",>Do Not Sell My Info </a>' + footerDislcaim + '</p></div></div>';
            changeOrderButton("Submit My Order");
            return ofFooter;
        }

        else if (getDomain[2] === "reports.stpaulresearch.info"){
            
            const setFavicon = () => {
              var faviconTag = document.createElement('link');

              faviconTag.type = 'image/png';
              faviconTag.rel = 'icon';
              faviconTag.href = 'https://d13p2xj50zkyqm.cloudfront.net/promos/AF/SPR/branding/STP-Solo-Lion-Black-64x64.png';

              document.getElementsByTagName('head')[0].appendChild(faviconTag);
            };

            setFavicon();
            
            var ofFooter = '<style>.footer_container{padding: 0 10px;display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -webkit-flex;display: flex;}.footer_container > img{align-self: center !important;-webkit-align-self:center !important;width: 100%;max-width: 50px;}.footer_container p {text-align:justify;color: black;}@media screen and (max-width: 600px) {.footer_container{flex-direction: column}.footer_container img{margin-bottom:12px;}}</style> <div class=\"ofFooter\" style=\"margin: 0px; max-width: 100%; padding-bottom: 20px; background: white\"><div class="footer_container" style=\"margin: 0 auto; max-width: 700px; padding-top: 20px;\"><p style=\"font-size: 10px;color:black;\">&copy; St. Paul Research, LLC | 808 St. Paul St., Baltimore, MD 21202, United States of America |  <span id=\"privacypolicy\" ><a class=\"privacypolicy\" style=\"text-decoration: underline; cursor: pointer; color: #969696\" href=\"https://stpaulresearch.com/contact-us\" target=\"_blank\",>Contact Us</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" href=\"https://stpaulresearch.com/privacy-policy/\" target=\"_blank\",>Privacy Policy</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" href=\"https://stpaulresearch.com/terms\" target=\"_blank\",>Terms and Conditions</a></span> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://privacyportal-cdn.onetrust.com/dsarwebform/90ddaa87-9d70-4282-9d4f-d6cbd96bd224/4eab8264-1dfd-48ff-a7fb-68b530057ae5.html\', \'mywin\',\'width=300,height=300\')\",>Do Not Sell My Info </a>' + footerDislcaim + '</p></div></div>';

            return ofFooter;
       
        }




        else if (getDomain[2] === "orders.sevenfiguresolutions.com" || getDomain[2] === "reports.sevenfiguresolutions.com" || getDomain[2] === "reports.sevenfigurepublishing.com" || getDomain[2] === "orders.sevenfigurepublishing.com" || (typeof SFPrebrand !== 'undefined')){
            var ofFooter = '<div class=\"ofFooter\" style=\"margin: 0px; max-width: 100%; padding-bottom: 20px; background: #ffffff\"><div style=\"margin: 0 auto; display: block; max-width: 700px; padding-top: 20px;\"><img src=\"https://d13p2xj50zkyqm.cloudfront.net/promos/SFP/branding_assets/STYLES_ASSETS/SFP_Logomark_small_green.png\" alt=\"Seven Figure Publishing\" width=\"79\" height=\"75\" style="float: left; margin: 0 .5em 0 2em; margin-top: -20px; margin-bottom: 40px;"><p style=\"font-size: 1em; margin-top: 0px;\">&copy; Seven Figure Publishing, LLC. | 808 St. Paul St., Baltimore, MD 21202, United States of America |  <span id=\"privacypolicy\" ><a class=\"privacypolicy\" style=\"text-decoration: underline; cursor: pointer; color: #05405b\" onclick=\"window.open(\'https://sevenfigurepublishing.com/contact-us/\', \'mywin\',\'width=300,height=300\')\",>Contact Us</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://sevenfigurepublishing.com/help/\', \'mywin\',\'width=300,height=300\')\",>Help</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://sevenfigurepublishing.com/terms-and-conditions/\', \'mywin\',\'width=300,height=300\')\",>Terms and Conditions </a></span> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://privacyportal-cdn.onetrust.com/dsarwebform/90ddaa87-9d70-4282-9d4f-d6cbd96bd224/c3cc2583-c82a-4388-bc7f-2979b8fe581d.html\', \'mywin\',\'width=300,height=300\')\",>Do Not Sell My Info </a>' + footerDislcaim + '</p></div></div>';
                changeOrderButton("Order Now");
            return ofFooter;
        }
        else if (getDomain[2] === "reports.richdadnewsletter.com"){
            var ofFooter = '<div class=\"ofFooter\" style=\"margin: 0px; max-width: 100%; padding-bottom: 20px; background: #ffffff\"><div style=\"margin: 0 auto; display: block; max-width: 700px; padding-top: 20px;\"><img class=\"footI\" src=\"https://d13p2xj50zkyqm.cloudfront.net/promos/ParadigmPress/paradigm.png\" alt=\"Agora Financial.com\" width=\"35\" height=\"54\" ><p class=\"footP\">&copy; Paradigm Press, LLC. | 808 St. Paul St., Baltimore, MD 21202, United States of America |  <span id=\"privacypolicy\"><a class=\"privacypolicy\" style="text-decoration: underline;cursor: pointer;color: #05405b;" onclick=\"window.open(\'https://richdadnewsletter.com/privacy-policy.html\', \'mywin\',\'width=1000,height=800\')\",>Privacy Policy</a> | <a class=\"privacypolicy\" style="text-decoration: underline;cursor: pointer;color: #05405b;" onclick=\"window.open(\'https://richdadnewsletter.com/terms-and-conditions.html\', \'mywin\',\'width=1000,height=800\')\",>Terms and Conditions</a></span> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://privacyportal-cdn.onetrust.com/dsarwebform/90ddaa87-9d70-4282-9d4f-d6cbd96bd224/2f095f1e-de25-443a-890a-319f10136a2c.html\', \'mywin\',\'width=300,height=300\')\",>Do Not Sell My Info </a>' + footerDislcaim + ' <strong class=\"ftcdisclosure\">FTC Disclosure:</strong> Any income claims shared by my subscribers are understood to be true and accurate at the time they were shared. Their stories are exceptional and not typical representations of what is achievable. Your results, should you decide to participate, could be less, the same or more.</p></div></div>';
             changeOrderButton("Submit Order");
             return ofFooter;
        }
        else if (getDomain[2] === "orders.paradigm-press.info" || getDomain[2] === "orders.theconversionclub.info" || getDomain[2] === "reports.richdadrecommends.com" || getDomain[2] === "orders.10x-secure.net" || getDomain[2] === "orders.nomi-secure.net" || getDomain[2] === "orders.richdad-secure.net" || getDomain[2] === "orders.rickards-secure.net" || getDomain[2] === "orders.scolardi-secure.net" || getDomain[2] === "orders.sykes-secure.net"){
            var ofFooter = '<div class=\"ofFooter\" style=\"margin: 0px; max-width: 100%; padding-bottom: 20px; background: #ffffff\"><div style=\"margin: 0 auto; display: block; max-width: 700px; padding-top: 20px;\"><img src=\"https://d13p2xj50zkyqm.cloudfront.net/promos/ParadigmPress/logo-from-svg.png\" alt=\"Paradigm Press\" width=\"50\" height=\"25\" style="float: left; margin:0.125rem 0.5rem 0.25rem 1rem;"><p style=\"font-size: 1em; margin-top: 0px;\">&copy; Paradigm Press, LLC | 808 St. Paul St., Baltimore, MD 21202, United States of America |  <span id=\"privacypolicy\" ><a class=\"privacypolicy\" style=\"text-decoration: underline; cursor: pointer; color: #05405b\" onclick=\"window.open(\'https://paradigm.press/contact-us/\', \'mywin\',\'width=300,height=300\')\",>Contact Us</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://paradigm.press/privacy-policy/\', \'mywin\',\'width=300,height=300\')\",>Privacy Policy</a> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://paradigm.press/terms-and-conditions\', \'mywin\',\'width=300,height=300\')\",>Terms and Conditions</a>.</span> | <a style=\"text-decoration: underline; cursor: pointer; color: #05405b\" class=\"privacypolicy\" onclick=\"window.open(\'https://privacyportal-cdn.onetrust.com/dsarwebform/90ddaa87-9d70-4282-9d4f-d6cbd96bd224/2f095f1e-de25-443a-890a-319f10136a2c.html\', \'mywin\',\'width=300,height=300\')\",>Do Not Sell My Info </a>' + footerDislcaim + ' <strong class=\"ftcdisclosure\">FTC Disclosure:</strong> Any income claims shared by my subscribers are understood to be true and accurate at the time they were shared. Their stories are exceptional and not typical representations of what is achievable. Your results, should you decide to participate, could be less, the same or more.</p></div></div>';
                changeOrderButton("Submit Order");
            return ofFooter;
        }

        return ofFooter;
    } // addFooter

    domready(function() {
        if( orderFormPage === '2' || orderFormPage === '5'){
            addFooter();
            if(($('table.container').is(":visible") == true)){
                $('table.af-main-wrapper').append(addFooter());
                $(".ofFooter").css("background-color", "#000000");
                $(".ofFooter").css("padding", "25px");
                $(".ofFooter p").css("color", "#c4c4c4", "font-size", "12px");
                $(".ofFooter p").css("font-size", "12px");
                $(".ofFooter a").css("color", "#ffffff");

            }
            else if (($('div.contentwrapper').is(":visible") == true)){
                $('div.contentwrapper').append(addFooter());
            }

            else if(($('div.formwrapper').is(":visible") == true)){
                $('div.formwrapper').append(addFooter());
            }
            else if(($('div.container').is(":visible") == true)){
                $('div.container').append(addFooter());
            }
            else {
                $('body').append(addFooter());
            }
             if (typeof upsellno === 'undefined'){
                $(".ofFooter div").css("max-width", "1000px");
                $(".ofFooter p").css("font-size", "12px");
            }


        }
    }); // dom ready
// End OF Footer



function isPubBackend(pub) {
    var pubCodes = {
        'AWN': 0,
        'FIV': 0,
        'FIVE': 0,
        'FST': 0,
        'LFB': 0,
        'LFL': 0,
        'LIR': 0,
        'NHS': 0,
        'OST': 0,
        'PSF': 0,
        'TAO': 0,
        'TEK': 0,
        'SHI': 0,
        'WNE': 0,
        'RLL': 0,
        'SFF': 0,
        'TMR': 0,
        'CAT': 1,
        'ADR': 0,
        'BFT': 1,
        'DTA': 1,
        'PRC': 1,
        'FTR': 1,
        'BBI': 1,
        'LPM': 1,
        'MCO': 1,
        'MIL': 1,
        'MSS': 1,
        'MTA': 1,
        'POT': 1,
        'PDF': 1,
        'PMT': 1,
        'RGS': 1,
        'RIT': 1,
        'TIA': 1,
        'VANC': 1,
        'VAN': 1,
        'VPI': 1,
        'AFR': 1,
        'EFR': 1,
        'DFR': 1,
        'CWA': 1,
        'CIA': 1,
        'FWC': 1,
        'FIN': 1,
        'TOM': 1,
        'TOV': 1,
        'TAA': 1,
        'SEI': 1,
        'TOP': 1,
        'IAV': 1,
        'ARP': 1,
        'ACT': 1,
        'PSA': 1,
        'CSK': 1,
        'TSW': 1,
        'WEK': 1,
        'ADT': 1,
        'MPJ': 1,
        'WSB': 1,
        'AMP': 1,
        'TSR': 1,
        '7DS': 1,
        'RLA': 1,
        'PLA': 1,
        'SYN': 1,
        'VFT': 1,
        'TWK': 1,
        'TSB': 1,
        'KWC': 1,
        'RDN': 1,
        'BSP': 1,
        'CAL': 1,
        'SPC': 1,
        'HAP': 1,
        'HMT': 1,
        'GGM': 1,
        'MAS': 1,
        'TPW': 1,
        '25C': 1,
        'ACP': 1,
        'ARA': 1,
        'GMC': 1,
        'TPT': 1
    };

    pub = pub.toUpperCase();

    if (typeof pubCodes[pub] === 'undefined') {
        return false;
    } else {
        return (pubCodes[pub] === 1) ? true : false;
    }
}
/*
var content = document.createElement('div');
content.innerHTML = "<div class='form-group' id='autoRenewAuth' style='display:none' align='center'></div>"
document.body.appendChild(content);
*/
domready(function(){

    $( '#lightboxDiv' ).click(function() {
        afga.send('event', {
            'eventCategory' : 'Order Form',
            'eventAction' : 'Clicked Retrieve Credit Card',
            'eventLabel' : window.location.href
        });
    });


    $('input[name="formComponentsMap[\'paymentOption\'].creditCardDescription"]').click(function() {
           afga.send('event', {
            'eventCategory' : 'Order Form',
            'eventAction' : 'Clicked checkbox to save Credit Card',
            'eventLabel' : window.location.href
        });
    });

}); // dom ready

/* ||||| CoF |||| */

function cofCheck() {

  /*
       // Check for the domain
       var thisPage = window.location.href;
       var getDomain = thisPage.split('/');

       //Only fire for LF
       if (getDomain[2] === "orders.chooseyourselffinancial.com" || getDomain[2] === "orders.lfb.org"){
          cofAdjust();
      }
      //only fire for SFP
      else if (getDomain[2] === "orders.sevenfiguresolutions.com" || getDomain[2] === "reports.sevenfiguresolutions.com" || getDomain[2] === "reports.sevenfigurepublishing.com" || getDomain[2] === "orders.sevenfigurepublishing.com" || (typeof SFPrebrand !== 'undefined')){
          cofAdjust();
      }
      */
  cofAdjust();
} // end cofCheck

function cofAdjust() {

  $(document).ready(function() {

    document.cookie = "cofAdjust";

    var autoRenewCheckbox = $(
      "input:checkbox[name*='hasAgreedToAutoRenewConditions']"
    ).first();

    if (typeof stopArScript === "undefined" && autoRenewCheckbox.length > 0) {
      setupARScript();
    }

    //======================================================================================================================================================

    //======================================================================================================================================================

    //======================================================================================================================================================
    function setupARScript() {
      var arCheckboxStyles =
        "<style>.explainMessage {font-size: 1.4em;margin: .9375em 2em;font-weight: bold;}.autoRenewAuthConfDefaultContent #autoRenewAuthConfError p {margin: .6rem 0;font-size: 1.1rem;}.pulse {animation-name: pulse;animation-duration: .75s;animation-iteration-count: infinite;animation-direction: alternate;animation-timing-function: ease-in-out;}@-webkit-keyframes pulse {from {-webkit-transform: scale(1.0);}to {-webkit-transform: scale(1.3);}}@-moz-keyframes pulse {from {-moz-transform: scale(1.0);}to {-moz-transform: scale(1.3);}}@-o-keyframes pulse {from {-o-transform: scale(1.0);}to {-o-transform: scale(1.3);}}@keyframes pulse {from {transform: scale(1.0);}to {transform: scale(1.3);}}@media only screen and (min-width: 750px) {.explainMessage {margin: .9375em 8em;}}.hasError {background-color: rgba(255, 0, 0, 0.225);padding: 1rem;border-radius: 10px;}.errorMessageStyle {margin: .6rem 0;font-size: 1.1rem;}.maxhide{display:none !important;}.maxshow{display:block !important}</style>";
      var pagenumber = window.location.search;
      var pagenumberIndex = pagenumber.indexOf("pageNumber");
      pagenumber = pagenumber[pagenumberIndex + 11];

      // Check if confirm page or onepage
      if (pagenumberIndex > 0) {
        if (pagenumber !== "5" && pagenumber !== "2") {
          return;
        }

        // Append CSS
        $("head").prepend(arCheckboxStyles);
        // /Append CSS

        if (pagenumber === "5") {
          confirmCheckbox();
        }
        if (pagenumber === "2") {
          onePageCheckbox();
        }
      } else if (
        // else check if preview link
        window.location.href.includes("https://opium.agora-inc.com/opium/preview")
      ) {
        // If using a preview link, fire for both confirm and onpage scripts... cannot determine which page we are on with preview link.
        // Append CSS
        $("head").prepend(arCheckboxStyles);
        // /Append CSS

        confirmCheckbox();
        onePageCheckbox();
      } else {
        return;
      }
    }
    //======================================================================================================================================================

    //======================================================================================================================================================

    //======================================================================================================================================================
    // SCRIPT FOR ONE PAGES
    function onePageCheckbox() {
      console.log("ar checkbox for onepage");
      var autoRenewWrapper = $("#autoRenewAuth");

			var initialCheckboxForm = $(".autoRenewAuthConfDefaultContent")
        .first();

      // End script if checkbox doesnt exist on page.
      if (autoRenewCheckbox.length < 1) {
        autoRenewWrapper.hide();
        return;
      }

      if ($(".advancedEffortLinkClass").length < 1) {
        clearSessionStorage();
				initialCheckboxForm.hide();
        onePageOrderForm();
      } else {
        onePageUpsell();
      }

      function onePageOrderForm() {
        if (autoRenewWrapper.has(".alertMessage").length > 0) {
          autoRenewWrapper
            .addClass("hasError")
            .find("input:checkbox[name*='hasAgreedToAutoRenewConditions']")
            .addClass("pulse");
        }
        autoRenewCheckbox.click(function() {
          $(this).removeClass("pulse");
        });

        $(window).load(function() {
          var choices = $(".choiceName");
          if (choices.length > 1) {
            choices.each(function(i, el) {
              var thisEl = $(el);
              if (typeof thisEl.attr("data-lifetime") != "undefined") {
                if (
                  AGORA.viewModel.selectedOfferChoice().id ==
                  thisEl.find("input:radio").attr("value")
                ) {
                  hideCheckbox();
                }
                thisEl.click(function() {
                  hideCheckbox();
                });
              } else {
                thisEl.click(function() {
                  showCheckbox();
                });
              }
            });
          } else {
            if (typeof $(choices[0]).attr("data-lifetime") != "undefined") {
              hideCheckbox();
              choices.click(function() {
                hideCheckbox();
              });
            } else {
              choices.click(function() {
                showCheckbox();
              });
            }
          }

          function hideCheckbox() {
            autoRenewWrapper.addClass("maxhide");
            autoRenewCheckbox.prop("checked", true);
            setARState(false);
          }

          function showCheckbox() {
            autoRenewWrapper.removeClass("maxhide");
            autoRenewCheckbox.prop("checked", false);
            clearSessionStorage();
          }
        });
      };

      function onePageUpsell() {
        // Check if any links have isautorenew=true
        var autoRenewPresent = false;

        $(".advancedEffortLinkClass").each(function(i, el) {
          if ($(el).attr("isautorenew") === "true") {
            autoRenewPresent = true;
          }
        });
        // If there are no auto renew links, return.
        if (!autoRenewPresent) {
          autoRenewCheckbox.prop("checked", true);
          initialCheckboxForm.hide();
          return;
        }
        // ==============================================================

        // If the box does not exist on the page, return.
        if (autoRenewCheckbox.length === 0) {
          initialCheckboxForm.hide();
          return;
        }

        // Check session storage for the state of the AR checkbox, and set the box accordingly if exists.
        getARStateAndSetBox();

        var onlyLifetimeAndNoBtns = true;

        $(".upsell_yes").each(function(i, el) {
          if (
            typeof $(el).attr("data-lifetime") === "undefined" &&
            $(el)
            .find(".advancedEffortLinkClass")
            .attr("isautorenew") === "true"
          ) {
            onlyLifetimeAndNoBtns = false;
          }
        });

        // Setup checkboxes only if the stopDummyCheckboxes variable is not present
        if (!onlyLifetimeAndNoBtns && typeof stopDummyCheckboxes == "undefined") {
          setupDummyCheckboxes();
        }

        if (typeof stopDummyButtons === "undefined") {
          setupLifetimeAndNoBtns(false);
        }

				initialCheckboxForm.hide();
      };
    }

    //======================================================================================================================================================

    //======================================================================================================================================================

    //======================================================================================================================================================
    // SCRIPT FOR CONFIRM PAGES
    function confirmCheckbox() {
      console.log("ar checkbox for confirm");

      var initialCheckboxForm = $(".autoRenewAuthConfDefaultContent")
        .first()
        .parent();

      // If there are no upsell/crossSell links, end the script.
      if ($(".advancedEffortLinkClass").length < 1) {
        // Remove session storage item and end script
        autoRenewCheckbox.prop("checked", true);
        initialCheckboxForm.hide();
        clearSessionStorage();
        return;
      }

      // ==============================================================

      // Check if any links have isautorenew=true
      var autoRenewPresent = false;

      $(".advancedEffortLinkClass").each(function(i, el) {
        if ($(el).attr("isautorenew") === "true") {
          autoRenewPresent = true;
        }
      });
      // If there are no auto renew links, return.
      if (!autoRenewPresent) {
        autoRenewCheckbox.prop("checked", true);
        initialCheckboxForm.hide();
        return;
      }
      // ==============================================================

      // If the box does not exist on the page, return.
      if (autoRenewCheckbox.length === 0) {
        initialCheckboxForm.hide();
        return;
      }

      // Check session storage for the state of the AR checkbox, and set the box accordingly if exists.
      getARStateAndSetBox();
      // ==============================================================

      var onlyLifetimeAndNoBtns = true;

      $(".upsell_yes").each(function(i, el) {
        if (
          typeof $(el).attr("data-lifetime") === "undefined" &&
          $(el)
          .find(".advancedEffortLinkClass")
          .attr("isautorenew") === "true"
        ) {
          onlyLifetimeAndNoBtns = false;
        }
      });

      if (!onlyLifetimeAndNoBtns && typeof stopDummyCheckboxes === "undefined") {
        setupDummyCheckboxes();
      }

      if (typeof stopDummyButtons === "undefined") {
        setupLifetimeAndNoBtns(true);
      }

      // Hide initial Checkbox at the top of the page after everything else runs.
      initialCheckboxForm.hide();
    }
    //======================================================================================================================================================

    //======================================================================================================================================================

    //======================================================================================================================================================
    function setupDummyCheckboxes() {
      // MOVE ERROR MESSAGE TO END OF CHECKBOX
      $(".autoRenewAuthConfDefaultContent .explainMessage")
        .first()
        .append(
          $(".autoRenewAuthConfDefaultContent #autoRenewAuthConfError").first()
        );
      // MOVE ERROR MESSAGE TO END OF CHECKBOX
      // Determine insert location and insert dummy boxes.
      var dummyCheck = $(".autoRenewAuthConfDefaultContent")
        .first()
        .clone()
        .attr("id", "");
      $(dummyCheck)
        .find(
          "input:hidden[name='_formComponentsMap['paymentOption'].hasAgreedToAutoRenewConditions']"
        )
        .remove();
      $(dummyCheck)
        .find("input:checkbox[name*='hasAgreedToAutoRenewConditions']")
        .attr("id", "");

      if ($("div.customContainerForArCheckbox").length > 0) {
        $("div.customContainerForArCheckbox").append(dummyCheck);
      } else {
        $(".upsell_yes").each(function(i, el) {
          $(el).before(dummyCheck.clone());
        });
      }

      // Show error on all AR checkboxes
      $(".upsell_yes, .upsell_no, .advancedEffortLinkClass").click(function() {
        if (
          $("#autoRenewAuthConfError")
          .first()
          .css("display") !== "none"
        ) {
          $(".autoRenewAuthConfDefaultContent").each(function(i, el) {
            $(el)
              .find("#autoRenewAuthConfError")
              .show()
              .find("p")
              .addClass("errorMessageStyle");
            $(el)
              .find(".explainMessage")
              .addClass("hasError");
            $(el)
              .find('input:checkbox[name*="hasAgreedToAutoRenewConditions"]')
              .addClass("pulse");
          });
        }
      });
      // Show error on all AR checkboxes

      var checkboxInputs = $(
        "input:checkbox[name*='hasAgreedToAutoRenewConditions']"
      );

      // Sync checkboxes on page load
      if (checkboxInputs.first().prop("checked")) {
        checkTheBoxes();
      } else {
        uncheckTheBoxes();
      }

      // Sync up checkboxes on check and change the session storage arChecked key accordingly.  Do not add to first checkbox.
      checkboxInputs.not(":eq(0)").each(function(i, el) {
        $(el).change(function() {
          if ($(this).prop("checked")) {
            checkTheBoxes();
            setARState(true);
          } else {
            uncheckTheBoxes();
            setARState(false);
          }
        });
      });

      // Check all boxes on page
      function checkTheBoxes() {
        checkboxInputs.prop("checked", true);
        checkboxInputs.removeClass("pulse");
      }
      // Uncheck all boxes on page
      function uncheckTheBoxes() {
        checkboxInputs.prop("checked", false);
      }
    }

    //======================================================================================================================================================

    //======================================================================================================================================================

    //======================================================================================================================================================
    function setupLifetimeAndNoBtns(includeNo) {
      $(".upsell_yes, .upsell_no").each(function(i, el) {
        var upsellBtn = $(el);
        if (upsellBtn.hasClass("upsell_yes")) {
          createDummyBtn("yes", upsellBtn);
        } else if (includeNo) {
          createDummyBtn("no", upsellBtn);
        }
      });
    }
    //======================================================================================================================================================

    //======================================================================================================================================================

    //======================================================================================================================================================
    function createDummyBtn(upsellType, originalBtn) {
      var dummyBtn;
      if (upsellType === "yes") {
        if (originalBtn.attr("data-lifetime") === "true") {
          cloneBtn();
        } else {
          return;
        }
      } else {
        if (originalBtn.find("a").attr("isautorenew") === "true") {
          cloneBtn();
        } else {
          return;
        }
      }

      originalBtn.after(dummyBtn);

      dummyBtn.click(function() {
        autoRenewCheckbox.prop("checked", true);

        originalBtn.find("a").click(function(e) {
          e.stopPropagation();
        });
        originalBtn.find("a").click();
      });

      function cloneBtn() {
        dummyBtn = originalBtn.clone();
        dummyBtn
          .find("a.advancedEffortLinkClass")
          .replaceWith(originalBtn.find("a.advancedEffortLinkClass").html());
        originalBtn.hide();
      }
    }
    //======================================================================================================================================================

    //======================================================================================================================================================

    //======================================================================================================================================================
    function getARStateAndSetBox() {
      if (!("arChecked" in sessionStorage)) {
        if (autoRenewCheckbox.prop("checked")) {
          setARState(true);
        } else {
          setARState(false);
        }
      } else {
        var arChecked = sessionStorage.getItem("arChecked");

        if (arChecked === "true") {
          autoRenewCheckbox.prop("checked", true);
          toggleDefaultTo(true);
        } else {
          autoRenewCheckbox.prop("checked", false);
          toggleDefaultTo(false);
        }
      }
    }
    //======================================================================================================================================================

    //======================================================================================================================================================

    //======================================================================================================================================================
    function setARState(boxIsChecked) {
      if (typeof stopArStateSession !== "undefined") {
        return;
      } else {
        sessionStorage.setItem("arChecked", boxIsChecked);
        if (boxIsChecked) {
          toggleDefaultTo(true);
        } else {
          toggleDefaultTo(false);
        }
      }
    }
    //======================================================================================================================================================

    //======================================================================================================================================================

    //======================================================================================================================================================
    function toggleDefaultTo(isAR) {
      if ($(".aryes").length > 0 && $(".arno").length > 0) {
        if (isAR) {
          $(".aryes").show();
          $(".arno").hide();
        } else {
          $(".aryes").hide();
          $(".arno").show();
        }
      } else {
        $(".aryes").show();
        $(".arno").show();
      }
    }
    //======================================================================================================================================================

    //======================================================================================================================================================

    //======================================================================================================================================================
    function clearSessionStorage() {
      sessionStorage.removeItem("arChecked");
    }
  });
} // End cofAdjust


$(document).ready(function() {
  cofCheck();
});

function changeOrderButton(text){
    $('input[name="btnPaymentOptionSubmit"]').val(text);
}
