import{r as e,h as r}from"./p-87f0c668.js";import"./p-ff3b654f.js";import"./p-185b2ebc.js";import"./p-a5fc534d.js";import{B as s}from"./p-67458612.js";import{C as o}from"./p-b4c074e0.js";const l=class{constructor(r){e(this,r),this.value=null,this.max=null,this.color=null,this.label=null,this.colorOptions=[]}componentWillLoad(){this.colorOptions=["red","blue","green","yellow"]}render(){let e=void 0!==this.max&&null!=this.max?this.max:100;return r("div",{class:"psk-progress"},null==this.label?null:r("label",null,this.label),r("div",null,null==this.value?null:r("label",{class:"overTheProgress"},this.value+"%"),r("progress",{class:this.color,max:e,value:this.value})))}};(function(e,r,s,o){var l,t=arguments.length,p=t<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,r,s,o);else for(var a=e.length-1;a>=0;a--)(l=e[a])&&(p=(t<3?l(p):t>3?l(r,s,p):l(r,s))||p);t>3&&p&&Object.defineProperty(r,s,p)})([o(),s()],l.prototype,"modelHandler",void 0),l.style=".overTheProgress{position:absolute;color:white;padding-left:5px}progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background-size:auto;height:25px}.psk-progress label{margin-bottom:0}.psk-card .card-body div.psk-progress,.psk-card .card-body div.psk-progress .psk-card .card-body div{padding-top:0}progress.red::-webkit-progress-value{background-color:red}progress.blue::-webkit-progress-value{background-color:blue}progress.green::-webkit-progress-value{background-color:green}progress.yellow::-webkit-progress-value{background-color:yellow}";export{l as psk_progress}