import{r,h as e}from"./p-87f0c668.js";import"./p-ff3b654f.js";import"./p-185b2ebc.js";import"./p-a5fc534d.js";import{B as s}from"./p-67458612.js";import{C as o}from"./p-b4c074e0.js";const l=class{constructor(e){r(this,e),this.value=null,this.max=null,this.color=null,this.label=null,this.placeholder=null,this.colorOptions=[]}componentWillLoad(){this.colorOptions=["red","blue","green","yellow"]}render(){let r=void 0!==this.max&&null!=this.max?this.max:100;return e("div",{class:"psk-progress"},null==this.label?null:e("label",null,this.label),e("div",null,null==this.placeholder?null:e("label",{class:"overTheProgress"},this.placeholder),e("progress",{class:this.color,max:r,value:this.value})))}};(function(r,e,s,o){var l,t=arguments.length,p=t<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(r,e,s,o);else for(var a=r.length-1;a>=0;a--)(l=r[a])&&(p=(t<3?l(p):t>3?l(e,s,p):l(e,s))||p);t>3&&p&&Object.defineProperty(e,s,p)})([o(),s()],l.prototype,"modelHandler",void 0),l.style=".overTheProgress{position:absolute;color:white;padding-left:5px}progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background-size:auto;height:25px}.psk-progress label{margin-bottom:0}.psk-card .card-body div.psk-progress,.psk-card .card-body div.psk-progress .psk-card .card-body div{padding-top:0}progress.red::-webkit-progress-bar{background-color:red}progress.blue::-webkit-progress-bar{background-color:blue}progress.green::-webkit-progress-bar{background-color:green}progress.yellow::-webkit-progress-bar{background-color:yellow}";export{l as psk_progress}