var __validLeadTimerId;

var __validTimeProvider = (function() {
    var isTimeValid = false;

    return {
        set: function(value) {
            isTimeValid = value;
        },
        get: function() {
            return isTimeValid;
        },
    };
})();

var __onWindowLoad = function() {
    __validLeadTimerId = setTimeout(function() {
        __validTimeProvider.set(true);
    }, __validLeadTime);

    __disableLinks(document, __preventEmailSending);
    __disableForms(document, __preventEmailSending);
};

var __preventEmailSending = function () {
    clearTimeout(__validLeadTimerId);
    __validTimeProvider.set(false);
};


var __disableLinks = function(doc, preventFunction) {
    var a = doc.getElementsByTagName('A');
    for (var i = 0; i < a.length; i++) {
        if (a[i].target !== '_blank') {
            __attachEventHandler(a[i], 'click', preventFunction);
        }
    }
};

var __disableForms = function(doc, preventFunction) {
    var f = doc.getElementsByTagName('FORM');
    for (var i = 0; i < f.length; i++) {
        __attachEventHandler(f[i], 'submit', preventFunction);
    }
};

var __getEmailParameters = function() {
    var result = {}
    var params = __urlParameters();
    if (params["u"] && params["a"] && params["r"])
    {
        result.u = params["u"];
        result.a = params["a"];
        result.r = params["r"];
    }
    if (params["Fsid"]) {
        result.Fsid = params["Fsid"];
    }
    return result;
}

var __onFrameLoad = function(frame) { //Inside exitsplash.js
    if (frame.src) {
        __validTimeProvider.set(false);
    }
};

var __addCurrentQueryStringParameters = function(queryObject) {
    var additionalQueryString = window.location.search.replace('?', '').split('&');
    for (var i = 0; i < additionalQueryString.length; ++ i) {
        var parameter = additionalQueryString[i];
        if (parameter && parameter.indexOf('=') > -1) {
            var values = parameter.split('=');
            if (!queryObject[values[0]]) {
                queryObject[values[0]] = values[1];
            }
        }
    }

    return queryObject;
};

var __convertQueryObjectToString = function(queryObject) {
    var queryString = '';
    for (var property in queryObject) {
        if (queryObject.hasOwnProperty(property)) {
            var parameter = property + '=' + queryObject[property];
            queryString += queryString.length > 0
                ? '&' + parameter
                : parameter;
        }
    }

    return queryString;
};

var __getQueryString = function (mcParams) {
    mcParams.promocode = __promocode;
    mcParams.isPreview = __isPreview;
   
    return __convertQueryObjectToString(mcParams);
};

var __isDefinedEmailParams = function(params) {
    var isDefinedMcParams = params.u !== undefined
        && params.a !== undefined
        && params.r !== undefined;
    var isDefinedFsid = params.Fsid !== undefined;

    return isDefinedMcParams || isDefinedFsid;
}

var __exitFunction = function() {
    clearTimeout(__validLeadTimerId);
    var params = __getEmailParameters();
    if (__isDefinedEmailParams(params) && __validTimeProvider.get()) {
        var queryString = __getQueryString(params);
        __sendAjaxPost(__sendAbandonEmailUrl + '?' + queryString);
    }

    __validTimeProvider.set(false);
};

__attachEventHandler(window, "beforeunload", function() {
    if (!window.onbeforeunload) { ////if exitsplash is enabled unload works fine.
        __exitFunction();
    }
});

__addUnloadEvent(__exitFunction);

__attachEventHandler(window, 'load', __onWindowLoad);