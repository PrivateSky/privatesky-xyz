System.register(["./p-d7daa894.system.js"],(function(t){"use strict";var e,n,i;return{setters:[function(t){e=t.r;n=t.g;i=t.h}],execute:function(){var s=t("dropdown_renderer",function(){function t(t){e(this,t);this.isOpened=false;this.dropDownHasChildActive=false;this.somethingChanged=false}t.prototype.handleClick=function(t){var e=t.target;if(!n(this).contains(e)){this.isOpened=false}};t.prototype.routeChanged=function(){this.dropDownHasChildActive=window.location.href.includes(this.url)};t.prototype.toggleDropdown=function(t){var e=t.target;var n=false;while(e.parentElement){e=e.parentElement;if(e.classList.contains("children")){n=true;break}}if(!n){t.stopImmediatePropagation()}this.isOpened=!this.isOpened};t.prototype.render=function(){var t=this;this.routeChanged();return i("div",{class:"dropdown "+(this.dropDownHasChildActive?"active":"")+" "+(this.isOpened?"isOpened":""),onClick:function(e){return t.toggleDropdown(e)}},i("slot",null))};return t}())}}}));