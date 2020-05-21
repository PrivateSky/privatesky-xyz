var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,s=arguments.length;t<s;t++)e+=arguments[t].length;for(var i=Array(e),r=0,t=0;t<s;t++)for(var o=arguments[t],a=0,n=o.length;a<n;a++,r++)i[r]=o[a];return i};System.register(["./p-e1460616.system.js","./p-90e1ba03.system.js","./p-ca300ef6.system.js","./p-f4127746.system.js","./p-9195761b.system.js","./p-8ce93585.system.js","./p-64fd25d1.system.js"],(function(e){"use strict";var t,s,i,r,o,a,n;return{setters:[function(e){t=e.r;s=e.c;i=e.h},function(){},function(){},function(e){r=e.T},function(e){o=e.C},function(e){a=e.T},function(e){n=e.C}],execute:function(){var l=undefined&&undefined.__decorate||function(e,t,s,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,s):i,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)if(a=e[n])o=(r<3?a(o):r>3?a(t,s,o):a(t,s))||o;return r>3&&o&&Object.defineProperty(t,s,o),o};var p=e("psk_list_feedbacks",function(){function e(e){t(this,e);this._styleCustomisation={};this.alertOpened=false;this._messagesQueue=[];this._messagesContent=[];this.timer=0;this.opened=false;this.typeOfAlert=[];this.styleCustomisation={};this.messagesToDisplay=3;this.openFeedbackHandler=s(this,"openFeedback",7)}e.prototype.styleCustomisationWatcher=function(e){if(typeof e==="string"){this._styleCustomisation=JSON.parse(e)}else{this._styleCustomisation=e}};e.prototype.closeFeedbackHandler=function(e){if(this.alertOpened){this.alertOpened=false}var t=this._messagesContent.indexOf(e.detail);if(t>-1){this.typeOfAlert.splice(t,1);this._messagesContent.splice(t,1);this._messagesContent=this._messagesContent.slice();if(this._messagesQueue.length>0){this._messagesContent=__spreadArrays(this._messagesContent,[this._messagesQueue.shift()])}}};e.prototype.componentWillLoad=function(){var e=this;this.styleCustomisationWatcher(this.styleCustomisation);this.openFeedbackHandler.emit((function(t,s,i){if(i){if(i instanceof Array){i.forEach((function(t){e.typeOfAlert.push(t)}))}else{e.typeOfAlert.push(i)}}else{e.typeOfAlert.push("toast")}e.alertOpened=true;if(t instanceof Array){t.forEach((function(t){e.addToMessageArray.bind(e)(t,s)}))}else{e.addToMessageArray.bind(e)(t,s)}}))};e.prototype.timerToShow=function(e){var t=this;if(this._messagesContent.length>0){var s=(new Date).getTime();var i=e.timer;var r=Math.floor((s-i)/n.MINUTE);var o=setTimeout((function(){t.timerToShow.bind(t)(e)}),n.MINUTE_TICK);var a=setTimeout((function(){t.timerToShow.bind(t)(e)}),n.HOUR_TICK);switch(true){case r<=0:this.timeMeasure=n.RIGHT_NOW;break;case r<1:this.timer=Math.floor((s-i)/n.MINUTE);this.timeMeasure="minute ago";break;case r<60:this.timer=Math.floor((s-i)/n.MINUTE);this.timeMeasure=n.MINUTES;break;case r>=60:this.timer=Math.floor((s-i)/n.HOUR);this.timeMeasure=n.HOURS;break}}else{return}};e.prototype.addToMessageArray=function(e,t){var s=new Date;var i={content:e,timer:s.getTime(),name:t};if(this._messagesContent.length+1<=this.messagesToDisplay){this._messagesContent=__spreadArrays(this._messagesContent,[i])}else{this._messagesQueue=__spreadArrays(this._messagesQueue,[i])}};e.prototype.render=function(){var e=this;var t=[];var s;this._messagesContent.forEach((function(r,o){if(e.typeOfAlert[o]==="toast"){s=e.toastRenderer?e.toastRenderer:"psk-ui-toast";e.timerToShow.bind(e)(r);t.push(i(s,{message:r,timeSinceCreation:e.timer,timeMeasure:e.timeMeasure,styleCustomisation:e._styleCustomisation}))}else{s=e.alertRenderer?e.alertRenderer:"psk-ui-alert";t.push(i(s,{message:e._messagesContent[e._messagesContent.length-1],typeOfAlert:e.typeOfAlert[o],timeAlive:e.timeAlive,styleCustomisation:e._styleCustomisation}))}}));return i("div",null,t?t:null)};Object.defineProperty(e,"watchers",{get:function(){return{styleCustomisation:["styleCustomisationWatcher"]}},enumerable:true,configurable:true});return e}());l([o(),r({description:"This property is a object based on StyleCustomisation interface ",isMandatory:false,propertyType:"StyleCustomisation type",specialNote:"Even if you do not use all the parameters there will not be a problem with the default renderers."})],p.prototype,"styleCustomisation",void 0);l([r({description:"This property is the auto closing timer in milliseconds for the alert.",isMandatory:false,propertyType:"number",defaultValue:5e3,specialNote:"This property will only be taken into consideration when used with the psk-ui-alert child component"})],p.prototype,"timeAlive",void 0);l([r({description:"This property represents the number of toasts to be renderer on the user interface.",isMandatory:false,propertyType:"number",defaultValue:3,specialNote:"This property will only be taken into consideration when used with the psk-ui-toast child component."})],p.prototype,"messagesToDisplay",void 0);l([r({description:"This property allows the component to display a custom toast in case the default one is not preferred.",isMandatory:false,propertyType:"string",defaultValue:"psk-ui-toast",specialNote:"If this property is missing , psk-ui-toast will be assumed."})],p.prototype,"toastRenderer",void 0);l([r({description:"This property allows the component to display a custom alert in case the default one is not preferred.",isMandatory:false,propertyType:"string",defaultValue:"psk-ui-alert",specialNote:"If this property is missing , psk-ui-alert will be assumed."})],p.prototype,"alertRenderer",void 0);l([a({eventName:"openFeedback",controllerInteraction:{required:true},description:"This even is triggered when the user does an action that require feedback.This event comes with three parameters :\n            message(string) : the message for the action that was executed,\n            name(string) : the name is necessary in case of a toast feedback and\n            typeOfAlert(string) : either toast or a bootstrap alert."})],p.prototype,"openFeedbackHandler",void 0)}}}));