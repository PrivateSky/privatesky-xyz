import{r as t,h as e,H as s}from"./p-7cf930c5.js";import"./p-d9d3000e.js";import"./p-64251922.js";import{T as i}from"./p-01e50cc5.js";import{C as o}from"./p-42a5bb64.js";var r=function(t,e,s,i){var o,r=arguments.length,n=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,s,n):o(e,s))||n);return r>3&&n&&Object.defineProperty(e,s,n),n};const n=class{constructor(e){t(this,e),this.summary="",this.opened=!1}detailToggle(t){t.preventDefault(),t.stopImmediatePropagation(),this.opened=!this.opened}render(){return e(s,{opened:this.opened},e("div",{class:"summary",tabindex:0,onClick:t=>this.detailToggle(t)},e("psk-icon",{icon:this.opened?"chevron-down":"chevron-right"}),e("span",null,this.summary)),e("div",{class:"content",hidden:!this.opened},e("slot",null)))}};r([o(),i({description:"This property is used as title / summary.",isMandatory:!1,propertyType:"string"})],n.prototype,"summary",void 0),r([i({description:"This property decides if the content of the component is visible / hidden.",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],n.prototype,"opened",void 0),n.style=":host{cursor:pointer}.summary{display:flex;align-items:center}.summary .icon{margin-left:0;padding-left:0}.content{margin-bottom:1rem}";export{n as psk_details}