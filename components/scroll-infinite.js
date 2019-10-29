/*! For license information please see scroll-infinite.js.LICENSE */
!function(t,i){"object"===typeof exports&&"object"===typeof module?module.exports=i():"function"===typeof define&&define.amd?define([],i):"object"===typeof exports?exports["BalmScroll_scroll-infinite"]=i():t["BalmScroll_scroll-infinite"]=i()}(window,(function(){return function(t){var i={};function e(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)e.d(s,n,function(i){return t[i]}.bind(null,n));return s},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s="l9Gb")}({ebSe:function(t,i,e){var s;!function(n,o,r){var l=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.oRequestAnimationFrame||n.msRequestAnimationFrame||function(t){n.setTimeout(t,1e3/60)},h=function(){var t={},i=o.createElement("div").style,e=function(){for(var t=["t","webkitT","MozT","msT","OT"],e=0,s=t.length;e<s;e++)if(t[e]+"ransform"in i)return t[e].substr(0,t[e].length-1);return!1}();function s(t){return!1!==e&&(""===e?t:e+t.charAt(0).toUpperCase()+t.substr(1))}t.getTime=Date.now||function(){return(new Date).getTime()},t.extend=function(t,i){for(var e in i)t[e]=i[e]},t.addEvent=function(t,i,e,s){t.addEventListener(i,e,!!s)},t.removeEvent=function(t,i,e,s){t.removeEventListener(i,e,!!s)},t.prefixPointerEvent=function(t){return n.MSPointerEvent?"MSPointer"+t.charAt(7).toUpperCase()+t.substr(8):t},t.momentum=function(t,i,e,s,n,o){var l,h,a=t-i,c=r.abs(a)/e;return h=c/(o=void 0===o?6e-4:o),(l=t+c*c/(2*o)*(a<0?-1:1))<s?(l=n?s-n/2.5*(c/8):s,h=(a=r.abs(l-t))/c):l>0&&(l=n?n/2.5*(c/8):0,h=(a=r.abs(t)+l)/c),{destination:r.round(l),duration:h}};var l=s("transform");return t.extend(t,{hasTransform:!1!==l,hasPerspective:s("perspective")in i,hasTouch:"ontouchstart"in n,hasPointer:!(!n.PointerEvent&&!n.MSPointerEvent),hasTransition:s("transition")in i}),t.isBadAndroid=function(){var t=n.navigator.appVersion;if(/Android/.test(t)&&!/Chrome\/\d/.test(t)){var i=t.match(/Safari\/(\d+.\d)/);return!(i&&"object"===typeof i&&i.length>=2)||parseFloat(i[1])<535.19}return!1}(),t.extend(t.style={},{transform:l,transitionTimingFunction:s("transitionTimingFunction"),transitionDuration:s("transitionDuration"),transitionDelay:s("transitionDelay"),transformOrigin:s("transformOrigin")}),t.hasClass=function(t,i){return new RegExp("(^|\\s)"+i+"(\\s|$)").test(t.className)},t.addClass=function(i,e){if(!t.hasClass(i,e)){var s=i.className.split(" ");s.push(e),i.className=s.join(" ")}},t.removeClass=function(i,e){if(t.hasClass(i,e)){var s=new RegExp("(^|\\s)"+e+"(\\s|$)","g");i.className=i.className.replace(s," ")}},t.offset=function(t){for(var i=-t.offsetLeft,e=-t.offsetTop;t=t.offsetParent;)i-=t.offsetLeft,e-=t.offsetTop;return{left:i,top:e}},t.preventDefaultException=function(t,i){for(var e in i)if(i[e].test(t[e]))return!0;return!1},t.extend(t.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),t.extend(t.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return r.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){return(t-=1)*t*(5*t+4)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){return 0===t?0:1==t?1:.4*r.pow(2,-10*t)*r.sin((t-.055)*(2*r.PI)/.22)+1}}}),t.tap=function(t,i){var e=o.createEvent("Event");e.initEvent(i,!0,!0),e.pageX=t.pageX,e.pageY=t.pageY,t.target.dispatchEvent(e)},t.click=function(t){var i,e=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(e.tagName)||((i=o.createEvent("MouseEvents")).initMouseEvent("click",!0,!0,t.view,1,e.screenX,e.screenY,e.clientX,e.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),i._constructed=!0,e.dispatchEvent(i))},t}();function a(t,i){for(var e in this.wrapper="string"==typeof t?o.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={mouseWheelSpeed:20,snapThreshold:.334,infiniteUseTransform:!0,deceleration:.004,disablePointer:!h.hasPointer,disableTouch:h.hasPointer||!h.hasTouch,disableMouse:h.hasPointer||h.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:"undefined"===typeof n.onmousedown},i)this.options[e]=i[e];this.translateZ=this.options.HWCompositing&&h.hasPerspective?" translateZ(0)":"",this.options.useTransition=h.hasTransition&&this.options.useTransition,this.options.useTransform=h.hasTransform&&this.options.useTransform,this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?h.ease[this.options.bounceEasing]||h.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,!0===this.options.tap&&(this.options.tap="tap"),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,this.options.infiniteElements&&(this.options.probeType=3),this.options.infiniteUseTransform=this.options.infiniteUseTransform&&this.options.useTransform,3==this.options.probeType&&(this.options.useTransition=!1),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}a.prototype={version:"5.2.0",_init:function(){this._initEvents(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys(),this.options.infiniteElements&&this._initInfinite()},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if(1!=h.eventType[t.type]&&0!==(t.which?t.button:t.button<2?0:4==t.button?1:2))return;if(this.enabled&&(!this.initiated||h.eventType[t.type]===this.initiated)){!this.options.preventDefault||h.isBadAndroid||h.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var i,e=t.touches?t.touches[0]:t;this.initiated=h.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=h.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,i=this.getComputedPosition(),this._translate(r.round(i.x),r.round(i.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=e.pageX,this.pointY=e.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&h.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,e,s,n,o=t.touches?t.touches[0]:t,l=o.pageX-this.pointX,a=o.pageY-this.pointY,c=h.getTime();if(this.pointX=o.pageX,this.pointY=o.pageY,this.distX+=l,this.distY+=a,s=r.abs(this.distX),n=r.abs(this.distY),!(c-this.endTime>300&&s<10&&n<10)){if(this.directionLocked||this.options.freeScroll||(s>n+this.options.directionLockThreshold?this.directionLocked="h":n>=s+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);a=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);l=0}l=this.hasHorizontalScroll?l:0,a=this.hasVerticalScroll?a:0,i=this.x+l,e=this.y+a,(i>0||i<this.maxScrollX)&&(i=this.options.bounce?this.x+l/3:i>0?0:this.maxScrollX),(e>0||e<this.maxScrollY)&&(e=this.options.bounce?this.y+a/3:e>0?0:this.maxScrollY),this.directionX=l>0?-1:l<0?1:0,this.directionY=a>0?-1:a<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(i,e),c-this.startTime>300&&(this.startTime=c,this.startX=this.x,this.startY=this.y,1==this.options.probeType&&this._execEvent("scroll")),this.options.probeType>1&&this._execEvent("scroll")}}},_end:function(t){if(this.enabled&&h.eventType[t.type]===this.initiated){this.options.preventDefault&&!h.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();t.changedTouches&&t.changedTouches[0];var i,e,s=h.getTime()-this.startTime,n=r.round(this.x),o=r.round(this.y),l=r.abs(n-this.startX),a=r.abs(o-this.startY),c=0,p="";if(this.isInTransition=0,this.initiated=0,this.endTime=h.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(n,o),!this.moved)return this.options.tap&&h.tap(t,this.options.tap),this.options.click&&h.click(t),void this._execEvent("scrollCancel");if(this._events.flick&&s<200&&l<100&&a<100)this._execEvent("flick");else{if(this.options.momentum&&s<300&&(i=this.hasHorizontalScroll?h.momentum(this.x,this.startX,s,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:n,duration:0},e=this.hasVerticalScroll?h.momentum(this.y,this.startY,s,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:o,duration:0},n=i.destination,o=e.destination,c=r.max(i.duration,e.duration),this.isInTransition=1),this.options.snap){var u=this._nearestSnap(n,o);this.currentPage=u,c=this.options.snapSpeed||r.max(r.max(r.min(r.abs(n-u.x),1e3),r.min(r.abs(o-u.y),1e3)),300),n=u.x,o=u.y,this.directionX=0,this.directionY=0,p=this.options.bounceEasing}if(n!=this.x||o!=this.y)return(n>0||n<this.maxScrollX||o>0||o<this.maxScrollY)&&(p=h.ease.quadratic),void this.scrollTo(n,o,c,p);this._execEvent("scrollEnd")}}}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout((function(){t.refresh()}),this.options.resizePolling)},resetPosition:function(t){var i=this.x,e=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||this.y>0?e=0:this.y<this.maxScrollY&&(e=this.maxScrollY),(i!=this.x||e!=this.y)&&(this.scrollTo(i,e,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){var t;this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.options.infiniteElements&&(this.options.infiniteLimit=this.options.infiniteLimit||r.floor(2147483645/this.infiniteElementHeight),t=-this.options.infiniteLimit*this.infiniteElementHeight+this.wrapperHeight),this.maxScrollY=void 0!==t?t:this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=h.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)},off:function(t,i){if(this._events[t]){var e=this._events[t].indexOf(i);e>-1&&this._events[t].splice(e,1)}},_execEvent:function(t){if(this._events[t]){var i=0,e=this._events[t].length;if(e)for(;i<e;i++)this._events[t][i].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,i,e,s){t=this.x+t,i=this.y+i,e=e||0,this.scrollTo(t,i,e,s)},scrollTo:function(t,i,e,s){s=s||h.ease.circular,this.isInTransition=this.options.useTransition&&e>0;var n=this.options.useTransition&&s.style;!e||n?(n&&(this._transitionTimingFunction(s.style),this._transitionTime(e)),this._translate(t,i)):this._animate(t,i,e,s.fn)},scrollToElement:function(t,i,e,s,n){if(t=t.nodeType?t:this.scroller.querySelector(t)){var o=h.offset(t);o.left-=this.wrapperOffset.left,o.top-=this.wrapperOffset.top,!0===e&&(e=r.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===s&&(s=r.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),o.left-=e||0,o.top-=s||0,o.left=o.left>0?0:o.left<this.maxScrollX?this.maxScrollX:o.left,o.top=o.top>0?0:o.top<this.maxScrollY?this.maxScrollY:o.top,i=void 0===i||null===i||"auto"===i?r.max(r.abs(this.x-o.left),r.abs(this.y-o.top)):i,this.scrollTo(o.left,o.top,i,n)}},_transitionTime:function(t){t=t||0;var i=h.style.transitionDuration;if(this.scrollerStyle[i]=t+"ms",!t&&h.isBadAndroid){this.scrollerStyle[i]="0.0001ms";var e=this;l((function(){"0.0001ms"===e.scrollerStyle[i]&&(e.scrollerStyle[i]="0s")}))}},_transitionTimingFunction:function(t){this.scrollerStyle[h.style.transitionTimingFunction]=t},_translate:function(t,i){this.options.useTransform?this.scrollerStyle[h.style.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=r.round(t),i=r.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.x=t,this.y=i},_initEvents:function(t){var i=t?h.removeEvent:h.addEvent,e=this.options.bindToWrapper?this.wrapper:n;i(n,"orientationchange",this),i(n,"resize",this),this.options.click&&i(this.wrapper,"click",this,!0),this.options.disableMouse||(i(this.wrapper,"mousedown",this),i(e,"mousemove",this),i(e,"mousecancel",this),i(e,"mouseup",this)),h.hasPointer&&!this.options.disablePointer&&(i(this.wrapper,h.prefixPointerEvent("pointerdown"),this),i(e,h.prefixPointerEvent("pointermove"),this),i(e,h.prefixPointerEvent("pointercancel"),this),i(e,h.prefixPointerEvent("pointerup"),this)),h.hasTouch&&!this.options.disableTouch&&(i(this.wrapper,"touchstart",this),i(e,"touchmove",this),i(e,"touchcancel",this),i(e,"touchend",this)),i(this.scroller,"transitionend",this),i(this.scroller,"webkitTransitionEnd",this),i(this.scroller,"oTransitionEnd",this),i(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,i,e=n.getComputedStyle(this.scroller,null);return this.options.useTransform?(t=+((e=e[h.style.transform].split(")")[0].split(", "))[12]||e[4]),i=+(e[13]||e[5])):(t=+e.left.replace(/[^-\d.]/g,""),i=+e.top.replace(/[^-\d.]/g,"")),{x:t,y:i}},_initWheel:function(){h.addEvent(this.wrapper,"wheel",this),h.addEvent(this.wrapper,"mousewheel",this),h.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",(function(){clearTimeout(this.wheelTimeout),this.wheelTimeout=null,h.removeEvent(this.wrapper,"wheel",this),h.removeEvent(this.wrapper,"mousewheel",this),h.removeEvent(this.wrapper,"DOMMouseScroll",this)}))},_wheel:function(t){if(this.enabled){t.preventDefault();var i,e,s,n,o=this;if(void 0===this.wheelTimeout&&o._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout((function(){o.options.snap||o._execEvent("scrollEnd"),o.wheelTimeout=void 0}),400),"deltaX"in t)1===t.deltaMode?(i=-t.deltaX*this.options.mouseWheelSpeed,e=-t.deltaY*this.options.mouseWheelSpeed):(i=-t.deltaX,e=-t.deltaY);else if("wheelDeltaX"in t)i=t.wheelDeltaX/120*this.options.mouseWheelSpeed,e=t.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in t)i=e=t.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in t))return;i=e=-t.detail/3*this.options.mouseWheelSpeed}if(i*=this.options.invertWheelDirection,e*=this.options.invertWheelDirection,this.hasVerticalScroll||(i=e,e=0),this.options.snap)return s=this.currentPage.pageX,n=this.currentPage.pageY,i>0?s--:i<0&&s++,e>0?n--:e<0&&n++,void this.goToPage(s,n);s=this.x+r.round(this.hasHorizontalScroll?i:0),n=this.y+r.round(this.hasVerticalScroll?e:0),this.directionX=i>0?-1:i<0?1:0,this.directionY=e>0?-1:e<0?1:0,s>0?s=0:s<this.maxScrollX&&(s=this.maxScrollX),n>0?n=0:n<this.maxScrollY&&(n=this.maxScrollY),this.scrollTo(s,n,0),this.options.probeType>1&&this._execEvent("scroll")}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",(function(){var t,i,e,s,n,o,l=0,h=0,a=0,c=this.options.snapStepX||this.wrapperWidth,p=this.options.snapStepY||this.wrapperHeight;if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(!0===this.options.snap)for(e=r.round(c/2),s=r.round(p/2);a>-this.scrollerWidth;){for(this.pages[l]=[],t=0,n=0;n>-this.scrollerHeight;)this.pages[l][t]={x:r.max(a,this.maxScrollX),y:r.max(n,this.maxScrollY),width:c,height:p,cx:a-e,cy:n-s},n-=p,t++;a-=c,l++}else for(t=(o=this.options.snap).length,i=-1;l<t;l++)(0===l||o[l].offsetLeft<=o[l-1].offsetLeft)&&(h=0,i++),this.pages[h]||(this.pages[h]=[]),a=r.max(-o[l].offsetLeft,this.maxScrollX),n=r.max(-o[l].offsetTop,this.maxScrollY),e=a-r.round(o[l].offsetWidth/2),s=n-r.round(o[l].offsetHeight/2),this.pages[h][i]={x:a,y:n,width:o[l].offsetWidth,height:o[l].offsetHeight,cx:e,cy:s},a>this.maxScrollX&&h++;this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1===0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=r.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=r.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}})),this.on("flick",(function(){var t=this.options.snapSpeed||r.max(r.max(r.min(r.abs(this.x-this.startX),1e3),r.min(r.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,t)}))},_nearestSnap:function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var e=0,s=this.pages.length,n=0;if(r.abs(t-this.absStartX)<this.snapThresholdX&&r.abs(i-this.absStartY)<this.snapThresholdY)return this.currentPage;for(t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),i>0?i=0:i<this.maxScrollY&&(i=this.maxScrollY);e<s;e++)if(t>=this.pages[e][0].cx){t=this.pages[e][0].x;break}for(s=this.pages[e].length;n<s;n++)if(i>=this.pages[0][n].cy){i=this.pages[0][n].y;break}return e==this.currentPage.pageX&&((e+=this.directionX)<0?e=0:e>=this.pages.length&&(e=this.pages.length-1),t=this.pages[e][0].x),n==this.currentPage.pageY&&((n+=this.directionY)<0?n=0:n>=this.pages[0].length&&(n=this.pages[0].length-1),i=this.pages[0][n].y),{x:t,y:i,pageX:e,pageY:n}},goToPage:function(t,i,e,s){s=s||this.options.bounceEasing,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),i>=this.pages[t].length?i=this.pages[t].length-1:i<0&&(i=0);var n=this.pages[t][i].x,o=this.pages[t][i].y;e=void 0===e?this.options.snapSpeed||r.max(r.max(r.min(r.abs(n-this.x),1e3),r.min(r.abs(o-this.y),1e3)),300):e,this.currentPage={x:n,y:o,pageX:t,pageY:i},this.scrollTo(n,o,e,s)},next:function(t,i){var e=this.currentPage.pageX,s=this.currentPage.pageY;++e>=this.pages.length&&this.hasVerticalScroll&&(e=0,s++),this.goToPage(e,s,t,i)},prev:function(t,i){var e=this.currentPage.pageX,s=this.currentPage.pageY;--e<0&&this.hasVerticalScroll&&(e=0,s--),this.goToPage(e,s,t,i)},_initKeys:function(t){var i,e={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};if("object"==typeof this.options.keyBindings)for(i in this.options.keyBindings)"string"==typeof this.options.keyBindings[i]&&(this.options.keyBindings[i]=this.options.keyBindings[i].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(i in e)this.options.keyBindings[i]=this.options.keyBindings[i]||e[i];h.addEvent(n,"keydown",this),this.on("destroy",(function(){h.removeEvent(n,"keydown",this)}))},_key:function(t){if(this.enabled){var i,e=this.options.snap,s=e?this.currentPage.pageX:this.x,n=e?this.currentPage.pageY:this.y,o=h.getTime(),l=this.keyTime||0;switch(this.options.useTransition&&this.isInTransition&&(i=this.getComputedPosition(),this._translate(r.round(i.x),r.round(i.y)),this.isInTransition=!1),this.keyAcceleration=o-l<200?r.min(this.keyAcceleration+.25,50):0,t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?s+=e?1:this.wrapperWidth:n+=e?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?s-=e?1:this.wrapperWidth:n-=e?1:this.wrapperHeight;break;case this.options.keyBindings.end:s=e?this.pages.length-1:this.maxScrollX,n=e?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:s=0,n=0;break;case this.options.keyBindings.left:s+=e?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:n+=e?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:s-=e?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:n-=e?1:5+this.keyAcceleration>>0;break;default:return}e?this.goToPage(s,n):(s>0?(s=0,this.keyAcceleration=0):s<this.maxScrollX&&(s=this.maxScrollX,this.keyAcceleration=0),n>0?(n=0,this.keyAcceleration=0):n<this.maxScrollY&&(n=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(s,n,0),this.keyTime=o)}},_animate:function(t,i,e,s){var n=this,o=this.x,r=this.y,a=h.getTime(),c=a+e;this.isAnimating=!0,function p(){var u,f,d,g=h.getTime();if(g>=c)return n.isAnimating=!1,n._translate(t,i),void(n.resetPosition(n.options.bounceTime)||n._execEvent("scrollEnd"));d=s(g=(g-a)/e),u=(t-o)*d+o,f=(i-r)*d+r,n._translate(u,f),n.isAnimating&&l(p),3==n.options.probeType&&n._execEvent("scroll")}()},_initInfinite:function(){var t=this.options.infiniteElements;this.infiniteElements="string"==typeof t?o.querySelectorAll(t):t,this.infiniteLength=this.infiniteElements.length,this.infiniteMaster=this.infiniteElements[0],this.infiniteElementHeight=this.infiniteMaster.offsetHeight,this.infiniteHeight=this.infiniteLength*this.infiniteElementHeight,this.options.cacheSize=this.options.cacheSize||1e3,this.infiniteCacheBuffer=r.round(this.options.cacheSize/4),this.options.dataset.call(this,0,this.options.cacheSize),this.on("refresh",(function(){var t=r.ceil(this.wrapperHeight/this.infiniteElementHeight);this.infiniteUpperBufferSize=r.floor((this.infiniteLength-t)/2),this.reorderInfinite()})),this.on("scroll",this.reorderInfinite)},reorderInfinite:function(){this.y,this.wrapperHeight;for(var t=r.max(r.floor(-this.y/this.infiniteElementHeight)-this.infiniteUpperBufferSize,0),i=r.floor(t/this.infiniteLength),e=t-i*this.infiniteLength,s=0,n=0,o=[],l=r.floor(t/this.infiniteCacheBuffer);n<this.infiniteLength;)s=n*this.infiniteElementHeight+i*this.infiniteHeight,e>n&&(s+=this.infiniteElementHeight*this.infiniteLength),this.infiniteElements[n]._top!==s&&(this.infiniteElements[n]._phase=s/this.infiniteElementHeight,this.infiniteElements[n]._phase<this.options.infiniteLimit&&(this.infiniteElements[n]._top=s,this.options.infiniteUseTransform?this.infiniteElements[n].style[h.style.transform]="translate(0, "+s+"px)"+this.translateZ:this.infiniteElements[n].style.top=s+"px",o.push(this.infiniteElements[n]))),n++;this.cachePhase!=l&&(0===l||t-this.infiniteCacheBuffer>0)&&this.options.dataset.call(this,r.max(l*this.infiniteCacheBuffer-this.infiniteCacheBuffer,0),this.options.cacheSize),this.cachePhase=l,this.updateContent(o)},updateContent:function(t){if(void 0!==this.infiniteCache)for(var i=0,e=t.length;i<e;i++)this.options.dataFiller.call(this,t[i],this.infiniteCache[t[i]._phase])},updateCache:function(t,i){var e=void 0===this.infiniteCache;this.infiniteCache={};for(var s=0,n=i.length;s<n;s++)this.infiniteCache[t++]=i[s];e&&this.updateContent(this.infiniteElements)},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":this.enabled&&!t._constructed&&(t.preventDefault(),t.stopPropagation())}}},a.utils=h,t.exports?t.exports=a:void 0===(s=function(){return a}.call(i,e,i,t))||(t.exports=s)}(window,document,Math)},kUbF:function(t,i,e){"use strict";(function(t){i.a=function(i){var e=null;"undefined"!==typeof window?e=window.Vue:"undefined"!==typeof t&&(e=t.Vue),e&&e.use(i)}}).call(this,e("yLpj"))},l9Gb:function(t,i,e){"use strict";e.r(i);var s=e("kUbF"),n=function(t){var i={install:function(i){i.component(t.name,t)}};return Object(s.a)(i),i},o=e("ebSe"),r=e.n(o);var l=function(){var t=!1;try{addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){t=!0}}))}catch(i){}return t},h={flip:"flip",loading:"loading"};var a=function(t,i,e,s,n,o,r,l){var h,a="function"===typeof t?t.options:t;if(i&&(a.render=i,a.staticRenderFns=e,a._compiled=!0),s&&(a.functional=!0),o&&(a._scopeId="data-v-"+o),r?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},a._ssrRegister=h):n&&(h=l?function(){n.call(this,this.$root.$options.shadowRoot)}:n),h)if(a.functional){a._injectStyles=h;var c=a.render;a.render=function(t,i){return h.call(i),c(t,i)}}else{var p=a.beforeCreate;a.beforeCreate=p?[].concat(p,h):[h]}return{exports:t,options:a}}({name:"ui-scroll-infinite",mixins:[{props:{debug:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},pullDownLabel:{type:String,default:"Pull down to refresh"},pullUpLabel:{type:String,default:"Pull up to load more"},releaseLabel:{type:String,default:"Release to update"},loadingLabel:{type:String,default:"Loading..."},pullDownY:{type:Number,default:5},pullAction:Function,pullDownAction:Function,pullUpAction:Function,excludes:Array,scrollEnabled:{type:Boolean,default:!0}},data:function(){return{$scroll:null,pullDownEl:null,pullDownLabelEl:null,pullDownOffset:0,pullUpEl:null,pullUpLabelEl:null,pullUpOffset:0,currentMaxScrollY:0,isScrolling:!1}},watch:{pullUpLabel:function(t){this.pullUpLabelEl.innerHTML=t}},mounted:function(){this.pullDownAction&&(this.pullDownEl=this.$refs.pullDown,this.pullDownLabelEl=this.$refs.pullDownLabel,this.pullDownOffset=this.pullDownEl.offsetHeight),this.pullUpAction&&(this.pullUpEl=this.$refs.pullUp,this.pullUpLabelEl=this.$refs.pullUpLabel,this.pullUpOffset=this.pullUpEl.offsetHeight),this.debug&&(console.log("--------mounted--------"),console.log("pullDownOffset: ".concat(this.pullDownOffset)),console.log("pullUpOffset: ".concat(this.pullUpOffset))),document.addEventListener("touchmove",this._touchMoveHandler,!!l()&&{capture:!1,passive:!1})},beforeDestroy:function(){document.removeEventListener("touchmove",this._touchMoveHandler),this.$scroll.destroy(),this.$scroll=null},methods:{_touchMoveHandler:function(t){var i=!0;if(t.target.classList.length)for(var e=0,s=t.target.classList.length;e<s;e++){var n=t.target.classList[e];if(/^md(c|l)-/.test(n)||this.excludes&&this.excludes.includes(n)){i=!1;break}}i&&t.preventDefault()},_isPullDown:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.pullDownEl&&(i?!this.pullDownEl.classList.contains(t):this.pullDownEl.classList.contains(t))},_isPullUp:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.pullUpEl&&(i?!this.pullUpEl.classList.contains(t):this.pullUpEl.classList.contains(t))},onScrollStart:function(){this.$scroll.y===this.$scroll.startY&&(this.isScrolling=!0),this.debug&&(console.log("--------onScrollStart--------"),console.log("start-y: ".concat(this.$scroll.y)))},onScroll:function(){var t=!0,i=this.$scroll.y;this.debug&&(console.log("--------onScroll--------"),console.log("current y: ".concat(i)));var e=i<this.pullDownY&&this._isPullDown(h.flip),s=i>=this.pullDownY&&this._isPullDown(h.flip,!0),n=i>this.currentMaxScrollY-this.pullUpOffset&&this._isPullUp(h.flip),o=i<=this.currentMaxScrollY-this.pullUpOffset&&this._isPullUp(h.flip,!0);e?(this.pullDownEl.classList.remove(h.flip),this.pullDownLabelEl.innerHTML=this.pullDownLabel):s?(this.pullDownEl.classList.add(h.flip),this.pullDownLabelEl.innerHTML=this.releaseLabel):this.scrollEnabled?n?(this.pullUpEl.classList.remove(h.flip),this.pullUpLabelEl.innerHTML=this.pullUpLabel,this.$scroll.maxScrollY+=this.pullUpOffset):o&&(this.pullUpEl.classList.add(h.flip),this.pullUpLabelEl.innerHTML=this.releaseLabel,this.$scroll.maxScrollY-=this.pullUpOffset):(t=!1,this.debug&&console.log("scroll disabled")),t&&this.isScrolling&&this.pullAction&&this.pullAction(this.$scroll)},onScrollEnd:function(){var t=this.$scroll.y;this.debug&&(console.log("--------onScrollEnd--------"),console.log("current position: ".concat(t)),console.log("last direction: ".concat(this.$scroll.directionY)),console.log("maxScrollY: ".concat(this.$scroll.maxScrollY)));var i=this._isPullDown(h.flip,!0)&&t>this.$scroll.options.startY,e=this._isPullDown(h.flip),s=this._isPullUp(h.flip);i?(this.debug&&console.log("resume"),this.$scroll.scrollTo(0,this.$scroll.options.startY,800)):e?(this.debug&&console.log("pull down loading"),this.pullDownEl.classList.add(h.loading),this.pullDownLabelEl.innerHTML=this.loadingLabel,this.isScrolling&&this.pullDownAction&&(this.debug&&console.log("before pull down action: ".concat(t)),this.pullDownAction(this.refresh),this.debug&&console.log("after pull down action: ".concat(t)))):s&&(this.debug&&console.log("pull up loading"),this.pullUpEl.classList.add(h.loading),this.pullUpLabelEl.innerHTML=this.loadingLabel,this.isScrolling&&this.pullUpAction&&(this.debug&&console.log("before pull up action: ".concat(t)),this.pullUpAction(this.refresh),this.debug&&console.log("after pull up action: ".concat(t)))),this.isScrolling=!1},onRefresh:function(){this.debug&&(console.log("--------onRefresh--------"),console.log("before maxScrollY: ".concat(this.$scroll.maxScrollY))),this.$scroll.maxScrollY+=this.pullUpOffset,this.currentMaxScrollY=this.$scroll.maxScrollY,this.debug&&console.log("after maxScrollY: ".concat(this.$scroll.maxScrollY));var t=this._isPullDown(h.loading),i=this._isPullUp(h.loading);t?(this.pullDownEl.classList.remove(h.loading),this.pullDownEl.classList.remove(h.flip),this.pullDownLabelEl.innerHTML=this.pullDownLabel,this.$scroll.scrollTo(0,this.$scroll.options.startY,0)):i&&(this.pullUpEl.classList.remove(h.loading),this.pullUpEl.classList.remove(h.flip),this.pullUpLabelEl.innerHTML=this.pullUpLabel),this.debug&&console.log("refresh finished!")},refresh:function(){var t=this;this.$nextTick((function(){t.$scroll.refresh()}))}}}],mounted:function(){var t=this;this.$nextTick((function(){t.$scroll=new r.a(t.$el,Object.assign({},t.options))}))},methods:{updateCache:function(t,i){var e=this;this.$nextTick((function(){e.$scroll.updateCache(t,i)}))}}},(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"ui-scroll-infinite ui-scroll--wrapper"},[i("div",{staticClass:"ui-scroll--scroller"},[this._t("default")],2)])}),[],!1,null,null,null).exports;i.default=n(a)},yLpj:function(t,i){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(s){"object"===typeof window&&(e=window)}t.exports=e}})}));