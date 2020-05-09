var __attachEventHandler = function (element, eventName, handler) {
    if (element.addEventListener)
        element.addEventListener(eventName, handler, false);
    else
        element.attachEvent('on' + eventName, handler);
};

var __detachEventHandler = function (element, eventName, handler) {
    if (element.removeEventListener)
        element.removeEventListener(eventName, handler, false);
    else
        element.detachEvent('on' + eventName, handler);
};

var __addUnloadEvent = function (func) {
    var wnd = window.top; //When we call it from iframe.
    if (wnd.onpagehide || wnd.onpagehide === null) {
        __attachEventHandler(wnd, "pagehide", func);
    } else {
        __attachEventHandler(wnd, "unload", func);
    }
};

function __sendAjaxPost(url) {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("POST", url, true);
    xmlhttp.send(null);
}

var __urlParameters = function () {
    var vars = [], part;
    var parts = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < parts.length; i++) {
        part = parts[i].split('=');
        vars.push(part[0]);
        vars[part[0]] = part[1];
    }
    return vars;
};

function __setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function __getCookie(c_name) {
    var i, x, y, cookies = document.cookie.split(";");
    for (i = 0; i < cookies.length; i++) {
        x = cookies[i].substr(0, cookies[i].lastIndexOf("="));
        y = cookies[i].substr(cookies[i].lastIndexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

function __getByClassName(matchClass) {
    var allElements = document.getElementsByTagName('*'), i;
    var elements = [];
    for (i in allElements) {
        if ((' ' + allElements[i].className + ' ').indexOf(' ' + matchClass + ' ') > -1) {
            elements.push(allElements[i]);
        }
    }
    return elements;
}