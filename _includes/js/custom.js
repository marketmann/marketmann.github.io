
        $('.pop').click(function(){
            $('.shadowarea').fadeIn();
        });

  $('.shadowarea').click(function(){
         $('.shadowarea').fadeOut();

});

$('.pop').click(function(){
     ga('primaryTracker.send', 'event', {
        'eventCategory': 'click',
        'eventAction': 'order form pre-pop - email',
        'eventLabel': window.location.href
    });
});

$('.x').click(function(){
         $('.shadowarea').fadeOut();

});

$('.signup').click(function(e) {
    e.stopPropagation();
});

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var _OldCookies = window.Cookies;
        var api = window.Cookies = factory();
        api.noConflict = function () {
            window.Cookies = _OldCookies;
            return api;
        };
    }
}(function () {
    function extend () {
        var i = 0;
        var result = {};
        for (; i < arguments.length; i++) {
            var attributes = arguments[ i ];
            for (var key in attributes) {
                result[key] = attributes[key];
            }
        }
        return result;
    }

    function init (converter) {
        function api (key, value, attributes) {
            var result;

            // Write

            if (arguments.length > 1) {
                attributes = extend({
                    path: '/'
                }, api.defaults, attributes);

                if (typeof attributes.expires === 'number') {
                    var expires = new Date();
                    expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
                    attributes.expires = expires;
                }

                try {
                    result = JSON.stringify(value);
                    if (/^[\{\[]/.test(result)) {
                        value = result;
                    }
                } catch (e) {}

                value = encodeURIComponent(String(value));
                value = value.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

                key = encodeURIComponent(String(key));
                key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                key = key.replace(/[\(\)]/g, escape);

                return (document.cookie = [
                    key, '=', value,
                    attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
                    attributes.path    && '; path=' + attributes.path,
                    attributes.domain  && '; domain=' + attributes.domain,
                    attributes.secure ? '; secure' : ''
                ].join(''));
            }

            // Read

            if (!key) {
                result = {};
            }

            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling "get()"
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            var rdecode = /(%[0-9A-Z]{2})+/g;
            var i = 0;

            for (; i < cookies.length; i++) {
                var parts = cookies[i].split('=');
                var name = parts[0].replace(rdecode, decodeURIComponent);
                var cookie = parts.slice(1).join('=');

                if (cookie.charAt(0) === '"') {
                    cookie = cookie.slice(1, -1);
                }

                try {
                    cookie = converter && converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);

                    if (this.json) {
                        try {
                            cookie = JSON.parse(cookie);
                        } catch (e) {}
                    }

                    if (key === name) {
                        result = cookie;
                        break;
                    }

                    if (!key) {
                        result[name] = cookie;
                    }
                } catch (e) {}
            }

            return result;
        }

        api.get = api.set = api;
        api.getJSON = function () {
            return api.apply({
                json: true
            }, [].slice.call(arguments));
        };
        api.defaults = {};

        api.remove = function (key, attributes) {
            api(key, '', extend(attributes, {
                expires: -1
            }));
        };

        api.withConverter = init;

        return api;
    }

    return init();
}));
//to set cookie

$('.actualPop').on('click', function (e) {
    e.preventDefault();
    Cookies.set('email', $('#emailEnter').val(), { domain: '.lfb.org' });
    window.location = $(this).attr('href');
});


//to read cookie
var firstname = Cookies.set('firstname');
var email = Cookies.set('email');
        "use strict";var disclaimWording="The examples provided below may not be representative of typical results. Your capital is at risk when you invest in securities &ndash; you can lose some or all of your money. Never risk more than you can afford to lose.",disclaimWording_2="Disclaimer: The examples provided above may not be representative of typical results. Your capital is at risk when you invest in securities &ndash; you can lose some or all of your money. Never risk more than you can afford to lose.",adWord="Advertisement",astDisclaim="The examples provided below may not be representative of typical results. Your capital is at risk when you invest in securities and options – you can lose some or all of your money. Never risk more than you can afford to lose.",get_url_parameter=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var a=new RegExp("[\\?&]"+e+"=([^&#]*)"),o="";return null==(o="undefined"==typeof t?a.exec(location.search):a.exec(t))?"":decodeURIComponent(o[1].replace(/\+/g," "))};$(document).ready(function(){switch("read"===get_url_parameter("readT")&&$(".read_transcript_2").show(),$(".subnow").after('<p class="finalreview">(You Can Review Your Order Before it\'s Final)</p>'),$(".awnRegEvent").html("May 12th"),$(".tekRegEvent").html("November 16th"),pubpromo){case"AAH":$("#pubPhone").text("1-844-368-8259");break;case"OPI":$("pubPhone").text("1-844-228-4648");break;case"ACT":$("#pubPhone").text("1-855-638-5894");break;case"ARP":$("#pubPhone").text("1-888-301-1663");break;case"AWN":$("#pubPhone").text("1-844-883-2879");break;case"PMT":$("#pubPhone").text("1-800-214-3004");break;case"RDN":$("#pubPhone").text("1-844-650-1523");break;case"KWC":$("#pubPhone").text("1-855-303-4012");break;case"RDP":$("#pubPhone").text("1-888-519-6555");break;case"CIA":$("#pubPhone").text("1-888-267-4133");break;case"FWC":$("#pubPhone").text("1-855-817-8046");break;case"TIA":$("#pubPhone").text("1-855-638-5895");break;case"LIR":$("#pubPhone").text("1-855-638-5892");break;case"MIL":$("#pubPhone").text("1-855-623-5431");break;case"CAT":$("#pubPhone").text("1-855-373-9556");break;case"BFT":$("#pubPhone").text("1-855-373-9551");break;case"CWA":$("#pubPhone").text("1-855-251-6945");break;case"RGS":$("#pubPhone").text("1-855-251-6937");break;case"RIT":$("#pubPhone").text("1-855-251-6925");break;case"MCO":$("#pubPhone").text("1-844-883-2876");break;case"FTR":$("#pubPhone").text("1-844-858-9333");break;case"VPI":$("#pubPhone").text("1-844-858-9330");break;case"TEK":$("#pubPhone").text("1-844-858-9328");break;case"ADR":$("#pubPhone").text("1-844-748-9693");break;case"AFR":$("#pubPhone").text("1-844-731-9054");break;case"ALN":$("#pubPhone").text("1-844-370-6600");break;case"LPM":$("#pubPhone").text("1-844-449-6522");break;case"LFL":$("#pubPhone").text("1-844-496-6522");break;case"SPY":$("#pubPhone").text("1-844-414-4055");break;case"GLN":$("#pubPhone").text("1-844-373-5823");break;case"TAO":$("#pubPhone").text("1-800-300-0291");break;case"BBI":$("#pubPhone").text("1-800-550-4266");break;case"PRC":$("#pubPhone").text("1-800-550-4246");break;case"DTA":$("#pubPhone").text("1-855-817-7937");break;case"CIC":$("#pubPhone").text("1-844-368-2928");break;case"NHS":$("#pubPhone").text("1-844-449-6516");break;case"HAN":$("#pubPhone").text("1-844-449-6514");break;case"POT":$("#pubPhone").text("1-844-368-2925");break;case"TUR":$("#pubPhone").text("1-844-373-5825");break;case"TOM":$("#pubPhone").text("1-844-368-2921");break;case"TOV":$("#pubPhone").text("1-844-368-2922");break;case"WEK":$("#pubPhone").text("1-844-449-6518");break;case"TOP":$("#pubPhone").text("1-844-883-2755");break;case"SEI":$("#pubPhone").text("1-844-858-9329");break;case"ALT":$("#pubPhone").text("1-844-883-2877");break;case"ALR":$("#pubPhone").text("1-844-449-6519");break;case"RLL":$("#pubPhone").text("1-844-591-7201");break;case"ASL":$("#pubPhone").text("1-855-623-5431");break;case"CSK":$("#pubPhone").text("1-855-817-8049");break;case"TSW":$("#pubPhone").text("1-844-748-9693");break;case"TSR":$("#pubPhone").text("1-844-228-3838");break;case"7DS":$("#pubPhone").text("1-844-228-8835");break;case"RLA":$("#pubPhone").text("1-844-342-7636");break;case"25C":$("#pubPhone").text("1-844-370-6602");break;case"TS1":$("#pubPhone").text("1-844-370-6598");break;case"TSB":$("#pubPhone").text("1-844-731-9054");break;case"TWK":$("#pubPhone").text("1-855-817-7937");break;case"PTN":$("#pubPhone").text("1-855-373-9550");break;case"DTC":$("#pubPhone").text("1-844-796-6088");break;case"RDL":$("#pubPhone").text("1-855-373-9547");break;case"WSB":$("#pubPhone").text("1-844-370-6639");break;case"TAA":$("#pubPhone").text("1-844-883-2877");break;case"PLA":$("#pubPhone").text("1-844-228-6247");break;default:$("#pubPhone").text("1-866-361-7662")}});var popOff=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];for(var o=0;o<t.length;o++)-1<window.location.href.indexOf(t[o])&&($("#popmessage").remove(),$("div.read_transcript_shortcut_2").show())},stepOff=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];for(var o=0;o<t.length;o++)-1<window.location.href.indexOf(t[o])&&function(){var e=$(".clickPop_2").attr("href");$(".pop").on("click",function(t){t.preventDefault(),$(".shadowarea").remove(),window.location=e})}()},advertOn=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];for(var o=0;o<t.length;o++)-1<window.location.href.indexOf(t[o])&&$('<p id="ad" style="text-align:center; font-size:1.1rem; margin-bottom:1.25rem;">'+adWord+"</p>").insertBefore(".contentwrapper")},disclaimOn=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];for(var o=0;o<t.length;o++)-1<window.location.href.indexOf(t[o])&&$(".contentwrapper").before('<div id="findisclaimer"><p style="font-size:14px;">'+disclaimWording+'</p><hr style="width: 95%" /></div>')},disclaimOn_2=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];for(var o=0;o<t.length;o++)-1<window.location.href.indexOf(t[o])&&$(".contentwrapper").after('<div id="findisclaimer"><p style="font-size:14px;"><span class="red" style="font-size:1.5rem; font-weight:bold;">*</span>'+disclaimWording_2+"</p></div>")},copySwap=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];for(var o=0;o<t.length;o++)-1<window.location.href.indexOf(t[o])&&($(".noShowSect").remove(),$(".hiddenNetSect").show())},innerDisc=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];for(var o=0;o<t.length;o++)-1<window.location.href.indexOf(t[o])&&($('<div id="disclaimwrapper" style="width:100%; position:fixed; top:0; background-color:#ccc; border-bottom:thin solid black; display:none;"><p style="font-size:0.8rem;">'+astDisclaim+"</p>").appendTo("body"),$(".astrick").show(),$("#disclaimwrapper").is(":hidden")&&$(".astrick").on("click",function(){$("#disclaimwrapper").slideDown(),$("#disclaimwrapper").delay(1e4).slideUp()}))},videoDisc=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];for(var o=0;o<t.length;o++)-1<window.location.href.indexOf(t[o])&&($(".vidastrick").show(),$(".vidastrick").on("click",function(){$("html, body").animate({scrollTop:$("#findisclaimer").offset().top},50)}))};window._wq=window._wq||[],_wq.push({id:"_all",onReady:function(e){e.bind("silentplaybackmodechange",function(e){$("button.w-vulcan-v2-button",function(){$(".w-vulcan-v2-button").addClass("autoplayAdjust")})})}});