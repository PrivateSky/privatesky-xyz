import{r as t,h as s,H as i,g as h}from"./p-83ba3037.js";import{C as l}from"./p-915522c6.js";import{a as o}from"./p-c98282f3.js";import{g as n}from"./p-674fc7a6.js";const e=class{constructor(s){t(this,s),this.column=null,this.columnStart=null,this.columnEnd=null,this.row=null,this.rowStart=null,this.rowEnd=null,this.align=null,this.alignX=null,this.alignY=null}async componentWillLoad(){const t=n(":host",this.__getProperties());o(this.__host,t)}__getProperties(){const t={};return this.column&&(t["grid-column"]=this.column),this.columnStart&&(t["grid-column-start"]=this.columnStart),this.columnEnd&&(t["grid-column-end"]=this.columnEnd),this.row&&(t["grid-row"]=this.row),this.rowStart&&(t["grid-row-start"]=this.rowStart),this.rowEnd&&(t["grid-row-end"]=this.rowEnd),this.align&&(t["place-self"]=this.align),this.alignX&&(t["justify-self"]=this.alignX),this.alignY&&(t["align-self"]=this.alignY),t}render(){return s(i,null,s("slot",null))}get __host(){return h(this)}};!function(t,s,i,h){var l,o=arguments.length,n=o<3?s:null===h?h=Object.getOwnPropertyDescriptor(s,i):h;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,s,i,h);else for(var e=t.length-1;e>=0;e--)(l=t[e])&&(n=(o<3?l(n):o>3?l(s,i,n):l(s,i))||n);o>3&&n&&Object.defineProperty(s,i,n)}([l()],e.prototype,"__host",void 0);export{e as psk_layout_item}