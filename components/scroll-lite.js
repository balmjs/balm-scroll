!function(t,i){"object"===typeof exports&&"object"===typeof module?module.exports=i():"function"===typeof define&&define.amd?define([],i):"object"===typeof exports?exports["BalmScroll_scroll-lite"]=i():t["BalmScroll_scroll-lite"]=i()}(window,(function(){return function(t){var i={};function e(s){if(i[s])return i[s].exports;var o=i[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var o in t)e.d(s,o,function(i){return t[i]}.bind(null,o));return s},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s="Eru1")}({Eru1:function(t,i,e){"use strict";e.r(i);var s=e("kUbF"),o=function(t){var i={install:function(i){i.component(t.name,t)}};return Object(s.a)(i),i},n=e("XUtN"),r=e.n(n);var l=function(){var t=!1;try{addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){t=!0}}))}catch(i){}return t};var a=function(t,i,e,s,o,n,r,l){var a,c="function"===typeof t?t.options:t;if(i&&(c.render=i,c.staticRenderFns=e,c._compiled=!0),s&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),r?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=a):o&&(a=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(c.functional){c._injectStyles=a;var h=c.render;c.render=function(t,i){return a.call(i),h(t,i)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,a):[a]}return{exports:t,options:c}}({name:"ui-scroll-lite",mixins:[{props:{debug:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},excludes:Array,pullDownAction:Function,pullUpAction:Function,pullOffset:{type:Number,default:5},scrollEnabled:{type:Boolean,default:!0}},data:function(){return{$scroll:null,pullUpOffset:0,currentMaxScrollY:0,isScrolling:!1,isScrollEnabled:this.scrollEnabled}},computed:{wrapperClassName:function(){return{"ui-scroll--wrapper":!0,"ui-scroll--disabled":!this.isScrollEnabled}}},watch:{scrollEnabled:function(t){this.isScrollEnabled=t}},mounted:function(){document.addEventListener("touchmove",this._touchMoveHandler,!!l()&&{capture:!1,passive:!1})},beforeDestroy:function(){document.removeEventListener("touchmove",this._touchMoveHandler),this.$scroll.destroy(),this.$scroll=null},methods:{init:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.$nextTick((function(){i.$scroll=new t(i.$el,Object.assign(e,i.options)),i.$scroll.maxScrollY+=i.pullUpOffset,i.currentMaxScrollY=i.$scroll.maxScrollY,i.$scroll.on("scrollStart",i.onScrollStart),i.$scroll.on("scrollEnd",i.onScrollEnd),i.$scroll.on("refresh",i.onRefresh),s&&i.$scroll.on("scroll",i.onScroll)}))},_touchMoveHandler:function(t){var i=!0;if(t.target.classList.length)for(var e=0,s=t.target.classList.length;e<s;e++){var o=t.target.classList[e];if(/^md(c|l)-/.test(o)||this.excludes&&this.excludes.includes(o)){i=!1;break}}i&&t.preventDefault()},onScrollStart:function(){this.$scroll.y===this.$scroll.startY&&(this.isScrolling=!0),this.debug&&(console.log("--------onScrollStart--------"),console.log("start-y: ".concat(this.$scroll.y)))},onScrollEnd:function(){var t=this.$scroll.y;if(this.debug&&(console.log("--------onScrollEnd--------"),console.log("current position: ".concat(t)),console.log("last direction: ".concat(this.$scroll.directionY)),console.log("maxScrollY: ".concat(this.$scroll.maxScrollY))),this._onScrollEnd)this._onScrollEnd(t);else if(t>this.$scroll.options.startY)this.debug&&console.log("resume"),this.$scroll.scrollTo(0,this.$scroll.options.startY,800);else if(this.isScrolling){var i=t>=-this.pullOffset&&this.pullDownAction,e=t<=this.$scroll.maxScrollY+this.pullOffset&&this.pullUpAction;i?(this.debug&&console.log("before pull down action: ".concat(t)),this.pullDownAction(this.refresh),this.debug&&console.log("after pull down action: ".concat(t))):this.isScrollEnabled&&e&&(this.debug&&console.log("before pull up action: ".concat(t)),this.pullUpAction(this.refresh),this.debug&&console.log("after pull up action: ".concat(t)))}this.isScrolling=!1},refresh:function(){var t=this;this.$nextTick((function(){try{t.$scroll.refresh()}catch(i){}}))}}}],mounted:function(){this.init(r.a)}},(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{class:["ui-scroll-lite",this.wrapperClassName]},[i("div",{staticClass:"ui-scroll--scroller"},[this._t("default")],2)])}),[],!1,null,null,null).exports;i.default=o(a)},XUtN:function(t,i,e){var s;!function(o,n,r){var l=o.requestAnimationFrame||o.webkitRequestAnimationFrame||o.mozRequestAnimationFrame||o.oRequestAnimationFrame||o.msRequestAnimationFrame||function(t){o.setTimeout(t,1e3/60)},a=function(){var t={},i=n.createElement("div").style,e=function(){for(var t=["t","webkitT","MozT","msT","OT"],e=0,s=t.length;e<s;e++)if(t[e]+"ransform"in i)return t[e].substr(0,t[e].length-1);return!1}();function s(t){return!1!==e&&(""===e?t:e+t.charAt(0).toUpperCase()+t.substr(1))}t.getTime=Date.now||function(){return(new Date).getTime()},t.extend=function(t,i){for(var e in i)t[e]=i[e]},t.addEvent=function(t,i,e,s){t.addEventListener(i,e,!!s)},t.removeEvent=function(t,i,e,s){t.removeEventListener(i,e,!!s)},t.prefixPointerEvent=function(t){return o.MSPointerEvent?"MSPointer"+t.charAt(7).toUpperCase()+t.substr(8):t},t.momentum=function(t,i,e,s,o,n){var l,a,c=t-i,h=r.abs(c)/e;return a=h/(n=void 0===n?6e-4:n),(l=t+h*h/(2*n)*(c<0?-1:1))<s?(l=o?s-o/2.5*(h/8):s,a=(c=r.abs(l-t))/h):l>0&&(l=o?o/2.5*(h/8):0,a=(c=r.abs(t)+l)/h),{destination:r.round(l),duration:a}};var l=s("transform");return t.extend(t,{hasTransform:!1!==l,hasPerspective:s("perspective")in i,hasTouch:"ontouchstart"in o,hasPointer:!(!o.PointerEvent&&!o.MSPointerEvent),hasTransition:s("transition")in i}),t.isBadAndroid=function(){var t=o.navigator.appVersion;if(/Android/.test(t)&&!/Chrome\/\d/.test(t)){var i=t.match(/Safari\/(\d+.\d)/);return!(i&&"object"===typeof i&&i.length>=2)||parseFloat(i[1])<535.19}return!1}(),t.extend(t.style={},{transform:l,transitionTimingFunction:s("transitionTimingFunction"),transitionDuration:s("transitionDuration"),transitionDelay:s("transitionDelay"),transformOrigin:s("transformOrigin")}),t.hasClass=function(t,i){return new RegExp("(^|\\s)"+i+"(\\s|$)").test(t.className)},t.addClass=function(i,e){if(!t.hasClass(i,e)){var s=i.className.split(" ");s.push(e),i.className=s.join(" ")}},t.removeClass=function(i,e){if(t.hasClass(i,e)){var s=new RegExp("(^|\\s)"+e+"(\\s|$)","g");i.className=i.className.replace(s," ")}},t.offset=function(t){for(var i=-t.offsetLeft,e=-t.offsetTop;t=t.offsetParent;)i-=t.offsetLeft,e-=t.offsetTop;return{left:i,top:e}},t.preventDefaultException=function(t,i){for(var e in i)if(i[e].test(t[e]))return!0;return!1},t.extend(t.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),t.extend(t.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return r.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){return(t-=1)*t*(5*t+4)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){return 0===t?0:1==t?1:.4*r.pow(2,-10*t)*r.sin((t-.055)*(2*r.PI)/.22)+1}}}),t.tap=function(t,i){var e=n.createEvent("Event");e.initEvent(i,!0,!0),e.pageX=t.pageX,e.pageY=t.pageY,t.target.dispatchEvent(e)},t.click=function(t){var i,e=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(e.tagName)||((i=n.createEvent("MouseEvents")).initMouseEvent("click",!0,!0,t.view,1,e.screenX,e.screenY,e.clientX,e.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),i._constructed=!0,e.dispatchEvent(i))},t}();function c(t,i){for(var e in this.wrapper="string"==typeof t?n.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={disablePointer:!a.hasPointer,disableTouch:a.hasPointer||!a.hasTouch,disableMouse:a.hasPointer||a.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:"undefined"===typeof o.onmousedown},i)this.options[e]=i[e];this.translateZ=this.options.HWCompositing&&a.hasPerspective?" translateZ(0)":"",this.options.useTransition=a.hasTransition&&this.options.useTransition,this.options.useTransform=a.hasTransform&&this.options.useTransform,this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?a.ease[this.options.bounceEasing]||a.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,!0===this.options.tap&&(this.options.tap="tap"),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}c.prototype={version:"5.2.0",_init:function(){this._initEvents()},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if(1!=a.eventType[t.type]&&0!==(t.which?t.button:t.button<2?0:4==t.button?1:2))return;if(this.enabled&&(!this.initiated||a.eventType[t.type]===this.initiated)){!this.options.preventDefault||a.isBadAndroid||a.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var i,e=t.touches?t.touches[0]:t;this.initiated=a.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=a.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,i=this.getComputedPosition(),this._translate(r.round(i.x),r.round(i.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=e.pageX,this.pointY=e.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&a.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,e,s,o,n=t.touches?t.touches[0]:t,l=n.pageX-this.pointX,c=n.pageY-this.pointY,h=a.getTime();if(this.pointX=n.pageX,this.pointY=n.pageY,this.distX+=l,this.distY+=c,s=r.abs(this.distX),o=r.abs(this.distY),!(h-this.endTime>300&&s<10&&o<10)){if(this.directionLocked||this.options.freeScroll||(s>o+this.options.directionLockThreshold?this.directionLocked="h":o>=s+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);c=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);l=0}l=this.hasHorizontalScroll?l:0,c=this.hasVerticalScroll?c:0,i=this.x+l,e=this.y+c,(i>0||i<this.maxScrollX)&&(i=this.options.bounce?this.x+l/3:i>0?0:this.maxScrollX),(e>0||e<this.maxScrollY)&&(e=this.options.bounce?this.y+c/3:e>0?0:this.maxScrollY),this.directionX=l>0?-1:l<0?1:0,this.directionY=c>0?-1:c<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(i,e),h-this.startTime>300&&(this.startTime=h,this.startX=this.x,this.startY=this.y)}}},_end:function(t){if(this.enabled&&a.eventType[t.type]===this.initiated){this.options.preventDefault&&!a.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();t.changedTouches&&t.changedTouches[0];var i,e,s=a.getTime()-this.startTime,o=r.round(this.x),n=r.round(this.y),l=r.abs(o-this.startX),c=r.abs(n-this.startY),h=0,u="";if(this.isInTransition=0,this.initiated=0,this.endTime=a.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(o,n),!this.moved)return this.options.tap&&a.tap(t,this.options.tap),this.options.click&&a.click(t),void this._execEvent("scrollCancel");if(this._events.flick&&s<200&&l<100&&c<100)this._execEvent("flick");else{if(this.options.momentum&&s<300&&(i=this.hasHorizontalScroll?a.momentum(this.x,this.startX,s,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:o,duration:0},e=this.hasVerticalScroll?a.momentum(this.y,this.startY,s,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:n,duration:0},o=i.destination,n=e.destination,h=r.max(i.duration,e.duration),this.isInTransition=1),o!=this.x||n!=this.y)return(o>0||o<this.maxScrollX||n>0||n<this.maxScrollY)&&(u=a.ease.quadratic),void this.scrollTo(o,n,h,u);this._execEvent("scrollEnd")}}}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout((function(){t.refresh()}),this.options.resizePolling)},resetPosition:function(t){var i=this.x,e=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||this.y>0?e=0:this.y<this.maxScrollY&&(e=this.maxScrollY),(i!=this.x||e!=this.y)&&(this.scrollTo(i,e,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=a.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)},off:function(t,i){if(this._events[t]){var e=this._events[t].indexOf(i);e>-1&&this._events[t].splice(e,1)}},_execEvent:function(t){if(this._events[t]){var i=0,e=this._events[t].length;if(e)for(;i<e;i++)this._events[t][i].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,i,e,s){t=this.x+t,i=this.y+i,e=e||0,this.scrollTo(t,i,e,s)},scrollTo:function(t,i,e,s){s=s||a.ease.circular,this.isInTransition=this.options.useTransition&&e>0;var o=this.options.useTransition&&s.style;!e||o?(o&&(this._transitionTimingFunction(s.style),this._transitionTime(e)),this._translate(t,i)):this._animate(t,i,e,s.fn)},scrollToElement:function(t,i,e,s,o){if(t=t.nodeType?t:this.scroller.querySelector(t)){var n=a.offset(t);n.left-=this.wrapperOffset.left,n.top-=this.wrapperOffset.top,!0===e&&(e=r.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===s&&(s=r.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),n.left-=e||0,n.top-=s||0,n.left=n.left>0?0:n.left<this.maxScrollX?this.maxScrollX:n.left,n.top=n.top>0?0:n.top<this.maxScrollY?this.maxScrollY:n.top,i=void 0===i||null===i||"auto"===i?r.max(r.abs(this.x-n.left),r.abs(this.y-n.top)):i,this.scrollTo(n.left,n.top,i,o)}},_transitionTime:function(t){t=t||0;var i=a.style.transitionDuration;if(this.scrollerStyle[i]=t+"ms",!t&&a.isBadAndroid){this.scrollerStyle[i]="0.0001ms";var e=this;l((function(){"0.0001ms"===e.scrollerStyle[i]&&(e.scrollerStyle[i]="0s")}))}},_transitionTimingFunction:function(t){this.scrollerStyle[a.style.transitionTimingFunction]=t},_translate:function(t,i){this.options.useTransform?this.scrollerStyle[a.style.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=r.round(t),i=r.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.x=t,this.y=i},_initEvents:function(t){var i=t?a.removeEvent:a.addEvent,e=this.options.bindToWrapper?this.wrapper:o;i(o,"orientationchange",this),i(o,"resize",this),this.options.click&&i(this.wrapper,"click",this,!0),this.options.disableMouse||(i(this.wrapper,"mousedown",this),i(e,"mousemove",this),i(e,"mousecancel",this),i(e,"mouseup",this)),a.hasPointer&&!this.options.disablePointer&&(i(this.wrapper,a.prefixPointerEvent("pointerdown"),this),i(e,a.prefixPointerEvent("pointermove"),this),i(e,a.prefixPointerEvent("pointercancel"),this),i(e,a.prefixPointerEvent("pointerup"),this)),a.hasTouch&&!this.options.disableTouch&&(i(this.wrapper,"touchstart",this),i(e,"touchmove",this),i(e,"touchcancel",this),i(e,"touchend",this)),i(this.scroller,"transitionend",this),i(this.scroller,"webkitTransitionEnd",this),i(this.scroller,"oTransitionEnd",this),i(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,i,e=o.getComputedStyle(this.scroller,null);return this.options.useTransform?(t=+((e=e[a.style.transform].split(")")[0].split(", "))[12]||e[4]),i=+(e[13]||e[5])):(t=+e.left.replace(/[^-\d.]/g,""),i=+e.top.replace(/[^-\d.]/g,"")),{x:t,y:i}},_animate:function(t,i,e,s){var o=this,n=this.x,r=this.y,c=a.getTime(),h=c+e;this.isAnimating=!0,function u(){var p,f,d,v=a.getTime();if(v>=h)return o.isAnimating=!1,o._translate(t,i),void(o.resetPosition(o.options.bounceTime)||o._execEvent("scrollEnd"));d=s(v=(v-c)/e),p=(t-n)*d+n,f=(i-r)*d+r,o._translate(p,f),o.isAnimating&&l(u)}()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":this.enabled&&!t._constructed&&(t.preventDefault(),t.stopPropagation())}}},c.utils=a,t.exports?t.exports=c:void 0===(s=function(){return c}.call(i,e,i,t))||(t.exports=s)}(window,document,Math)},kUbF:function(t,i,e){"use strict";(function(t){i.a=function(i){var e=null;"undefined"!==typeof window?e=window.Vue:"undefined"!==typeof t&&(e=t.Vue),e&&e.use(i)}}).call(this,e("yLpj"))},yLpj:function(t,i){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(s){"object"===typeof window&&(e=window)}t.exports=e}})}));