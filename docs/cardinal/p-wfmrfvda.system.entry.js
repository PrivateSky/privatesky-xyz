System.register(["./p-226ad382.system.js","./p-0f0da370.system.js","./p-9cc77e8c.system.js","./p-5f414978.system.js","./p-43c4f030.system.js"],function(e){"use strict";var t,n,o,r;return{setters:[function(e){t=e.r;n=e.h},function(){},function(e){o=e.i},function(){},function(e){r=e.C}],execute:function(){var i=undefined&&undefined.__decorate||function(e,t,n,o){var r=arguments.length,i=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)if(s=e[c])i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i;return r>3&&i&&Object.defineProperty(t,n,i),i};var s=650;var c=e("psk_default_renderer",function(){function e(e){t(this,e);this.mobileLayout=false}e.prototype.checkLayout=function(){this.mobileLayout=document.documentElement.clientWidth<s};e.prototype.componentWillLoad=function(){this.checkLayout()};e.prototype.render=function(){return n("div",{class:"global_container "+(this.mobileLayout?"is-mobile":"")},n("aside",null,n("psk-user-profile",null),n("app-menu",{"item-renderer":"sidebar-renderer",hamburgerMaxWidth:s}),this.mobileLayout===false?n("div",{class:"nav-footer"},"version 0.1"):null),n("section",null,n("psk-app-router",null),this.mobileLayout===true?n("div",{class:"nav-footer bottom-stick"},"version 0.1"):null))};return e}());i([r()],c.prototype,"history",void 0);o(c)}}});