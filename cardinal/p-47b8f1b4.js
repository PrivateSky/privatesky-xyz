import{g as e}from"./p-56172067.js";import{b as t,c as n,d as s,e as i}from"./p-67893e64.js";import{c as o}from"./p-ba942fe7.js";function r(r){return function(c,l){const{connectedCallback:f,componentWillLoad:a,componentDidLoad:d,render:u}=c;let b="psk-send-events",p=s,m=t,h="definedEvents";c.componentWillLoad=function(){let s=e(this);if(!s.hasAttribute(t)&&!s.hasAttribute(n))return a&&a.call(this)},c.componentDidLoad=function(){let s=e(this);if(!s.hasAttribute(t)&&!s.hasAttribute(n))return d&&d.call(this)},c.connectedCallback=function(){let t=this,s=e(t);if(r.controllerInteraction&&(m=n,h="definedControllers",p=i,b="psk-send-controllers"),s.hasAttribute(m)){if(!t.componentDefinitions)return t.componentDefinitions={},t.componentDefinitions[h]=[Object.assign(Object.assign({},r),{eventName:String(l)})],f&&f.call(t);let e=t.componentDefinitions;const n=Object.assign(Object.assign({},r),{eventName:String(l)});if(e&&e.hasOwnProperty(p)){let t=[...e[p]];t.push(n),e[p]=[...t]}else e[p]=[n];t.componentDefinitions=Object.assign({},e)}return f&&f.call(t)},c.render=function(){if(!this.componentDefinitions||!this.componentDefinitions||!this.componentDefinitions[p])return u&&u.call(this);let e=this.componentDefinitions[p];e&&(e=e.reverse()),o(b,{composed:!0,bubbles:!0,cancelable:!0,detail:e},!0)}}}export{r as T}