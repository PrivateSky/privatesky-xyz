System.register(["./p-226ad382.system.js","./p-ef158f82.system.js"],function(t){"use strict";var e,n,r;return{setters:[function(t){e=t.r;n=t.h},function(t){r=t.C}],execute:function(){var i=undefined&&undefined.__decorate||function(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)if(o=t[c])s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s;return i>3&&s&&Object.defineProperty(e,n,s),s};var s=t("psk_button",function(){function t(t){e(this,t);this.buttonClass="btn btn-primary";this.disabled=false}t.prototype.render=function(){var t=this;return n("button",{onClick:function(){t.eventEmitter.emit(t.eventData)},class:this.buttonClass,disabled:this.disabled},n("slot",{name:"button_content"}),this.label?this.label:null)};return t}());i([r()],s.prototype,"label",void 0)}}});