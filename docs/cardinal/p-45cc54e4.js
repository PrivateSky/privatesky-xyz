import{g as e}from"./p-bd5842d7.js";import{b as t,c as n,d as s,e as r}from"./p-f77f00c7.js";import{c as i}from"./p-51c401ee.js";function c(c){return function(o,l){const{connectedCallback:f,render:a}=o;let d="psk-send-events",b=t,p=n,m="definedEvents";o.connectedCallback=function(){let t=this,n=e(t);if(c.controllerInteraction&&(p=s,m="definedControllers",b=r,d="psk-send-controllers"),n.hasAttribute(p)){if(!t.componentDefinitions)return t.componentDefinitions={},t.componentDefinitions[m]=[Object.assign({},c,{eventName:String(l)})],f&&f.call(t);let e=t.componentDefinitions;const n=Object.assign({},c,{eventName:String(l)});if(e&&e.hasOwnProperty(b)){let t=[...e[b]];t.push(n),e[b]=[...t]}else e[b]=[n];t.componentDefinitions=Object.assign({},e)}return f&&f.call(t)},o.render=function(){if(!this.componentDefinitions||!this.componentDefinitions||!this.componentDefinitions[b])return a&&a.call(this);let e=this.componentDefinitions[b];e&&(e=e.reverse()),i(d,{composed:!0,bubbles:!0,cancelable:!0,detail:e},!0)}}}export{c as T};