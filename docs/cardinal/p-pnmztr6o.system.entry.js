System.register(["./p-226ad382.system.js","./p-93e391e4.system.js","./p-1e5da36a.system.js","./p-c7b74a69.system.js","./p-0626afad.system.js"],function(e){"use strict";var t,n,o,s;return{setters:[function(e){t=e.r;n=e.h},function(){},function(){},function(e){o=e.T},function(e){s=e.C}],execute:function(){var r=undefined&&undefined.__decorate||function(e,t,n,o){var s=arguments.length,r=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(i=e[a])r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r;return s>3&&r&&Object.defineProperty(t,n,r),r};var i=e("psk_floating_menu",function(){function e(e){t(this,e);this.opened=false}e.prototype.render=function(){var e=this;return[n("div",{id:"backdrop",onClick:function(t){t.preventDefault();e.opened=!e.opened}}),n("div",{class:"container"},n("ul",{class:"items"},this.menuItems.map(function(t){n("li",{onClick:function(){e.opened=!e.opened},class:"nav-item"},t)})),n("div",{class:"toggleFloatingMenu"},n("a",{href:"#",class:"plus",onClick:function(t){t.preventDefault();e.opened=!e.opened}},n("span",{class:"fa fa-plus"}))))]};return e}());r([s(),o({description:"This property represents the elements that should be rendered in a Floating Menu.",isMandatory:true,propertyType:"Array of MenuItem(MenuItem[])"})],i.prototype,"menuItems",void 0);r([o({description:"This property shows the state of the backdrop on the Floating Menu and the Floating Menu itself.",isMandatory:false,propertyType:"boolean",defaultValue:"false"})],i.prototype,"opened",void 0)}}});