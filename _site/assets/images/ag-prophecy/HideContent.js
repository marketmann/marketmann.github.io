function __showElements(elements){
    for (var index in elements){
        elements[index].style.display = "inline-block";
    }
}
  
var __subscribeNowElements = [];
  
function __showSubscribeNow(){
    __subscribeNowElements = __getByClassName('subscribeNow');
    if (__getCookie(document.location.href)) {
        __showElements(__subscribeNowElements);
    }else{
        setTimeout(function () {
            __showElements(__subscribeNowElements);
        }, __subscribeNowDelay);
        __setCookie(document.location.href, "visited",365);
    }
}
  
if (self !== top) {
    setTimeout(__showSubscribeNow, 200);
} else {
    __attachEventHandler(window, 'load', __showSubscribeNow);
}

