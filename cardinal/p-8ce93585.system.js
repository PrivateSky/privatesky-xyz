var __spreadArrays=this&&this.__spreadArrays||function(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var r=Array(n),i=0,e=0;e<t;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r};System.register(["./p-e1460616.system.js","./p-90e1ba03.system.js","./p-ca300ef6.system.js"],(function(n){"use strict";var e,t,r,i,s,o;return{setters:[function(n){e=n.g},function(n){t=n.b;r=n.c;i=n.d;s=n.e},function(n){o=n.c}],execute:function(){n("T",a);function a(n){return function(a,c){var f=a.connectedCallback,u=a.componentWillLoad,l=a.componentDidLoad,v=a.render;var p="psk-send-events";var d=i;var m=t;var b="definedEvents";a.componentWillLoad=function(){var n=this;var i=e(n);if(!i.hasAttribute(t)&&!i.hasAttribute(r)){return u&&u.call(n)}};a.componentDidLoad=function(){var n=this;var i=e(n);if(!i.hasAttribute(t)&&!i.hasAttribute(r)){return l&&l.call(n)}};a.connectedCallback=function(){var t=this;var i=e(t);if(n.controllerInteraction){m=r;b="definedControllers";d=s;p="psk-send-controllers"}if(i.hasAttribute(m)){if(!t.componentDefinitions){t.componentDefinitions={};t.componentDefinitions[b]=[Object.assign(Object.assign({},n),{eventName:String(c)})];return f&&f.call(t)}var o=t.componentDefinitions;var a=Object.assign(Object.assign({},n),{eventName:String(c)});if(o&&o.hasOwnProperty(d)){var u=__spreadArrays(o[d]);u.push(a);o[d]=__spreadArrays(u)}else{o[d]=[a]}t.componentDefinitions=Object.assign({},o)}return f&&f.call(t)};a.render=function(){var n=this;if(!n.componentDefinitions||!(n.componentDefinitions&&n.componentDefinitions[d])){return v&&v.call(n)}var e=n.componentDefinitions[d];if(e){e=e.reverse()}o(p,{composed:true,bubbles:true,cancelable:true,detail:e},true)}}}}}}));