import{r as t,h as e}from"./p-2eb42df6.js";import"./p-acb9d1e1.js";import"./p-7111d76e.js";import{T as s}from"./p-f3fbe684.js";import{C as i}from"./p-6a61ad0f.js";var r=function(t,e,s,i){var r,o=arguments.length,p=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,e,s,i);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(p=(o<3?r(p):o>3?r(e,s,p):r(e,s))||p);return o>3&&p&&Object.defineProperty(e,s,p),p};const o=class{constructor(e){t(this,e),this.title="",this.typeOfHighlight="note"}render(){return e("div",{class:`psk-highlight psk-highlight-${this.typeOfHighlight}`},this.title?e("div",{class:"header"},this.title):null,e("div",{class:"body"},e("slot",null)))}};r([i(),s({description:"This property is the title of the new psk-card/psk-chapter that will be created.",isMandatory:!1,propertyType:"string"})],o.prototype,"title",void 0),r([s({description:'This property is the type of highlight. Possible values are: "note", "issue", "example"',isMandatory:!1,propertyType:"string"})],o.prototype,"typeOfHighlight",void 0);export{o as psk_highlight};