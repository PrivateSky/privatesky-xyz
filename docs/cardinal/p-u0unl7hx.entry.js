import{r as e,h as t}from"./p-bd5842d7.js";import{C as r}from"./p-c5df8991.js";const s=class{constructor(t){e(this,t)}renderMenuItem(e){let r=e.path,s=[];return e.children&&e.children.forEach(e=>{s.push(this.renderMenuItem(e))}),t("abstract"===e.type?"expandable-renderer":"stencil-route-link",{firstMenuChild:e.children?e.children[0]:"",url:r,activeClass:"active",exact:!1,somethingChanged:this.value},t("div",{class:"wrapper_container"},t("div",{class:"item_container"},t("span",{class:`icon fa ${e.icon}`}),t("span",{class:"item_name"},e.name),e.children?t("span",{class:"fa fa-caret-right expand-menu"}):null),e.children?t("div",{class:"children"},s):null))}render(){return this.renderMenuItem(this.value)}};!function(e,t,r,s){var a,n=arguments.length,c=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,s);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(c=(n<3?a(c):n>3?a(t,r,c):a(t,r))||c);n>3&&c&&Object.defineProperty(t,r,c)}([r()],s.prototype,"value",void 0);export{s as sidebar_renderer};