import{r as e,h as t,g as i}from"./p-7cf930c5.js";import"./p-d9d3000e.js";import"./p-64251922.js";import{T as o}from"./p-01e50cc5.js";import{C as r}from"./p-42a5bb64.js";import{C as s}from"./p-c68ecd54.js";var n=function(e,t,i,o){var r,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(s<3?r(n):s>3?r(t,i,n):r(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};const a=class{constructor(t){e(this,t),this.title="",this.disableSidebar=!1,this.enableBack=!1,this.aside={disabled:this.disableSidebar,hidden:!0},this.options={disabled:!0,hidden:!0}}toggleAside(e){e.preventDefault(),e.stopImmediatePropagation(),this.aside=Object.assign(Object.assign({},this.aside),{hidden:!this.aside.hidden}),this.options=Object.assign(Object.assign({},this.options),{hidden:!0})}toggleBack(e){e.preventDefault(),e.stopImmediatePropagation(),window.history.back()}toggleOptions(e){e.preventDefault(),e.stopImmediatePropagation(),this.options=Object.assign(Object.assign({},this.options),{hidden:!this.options.hidden}),this.aside=Object.assign(Object.assign({},this.aside),{hidden:!0})}onHandleClickEvent(e){e.preventDefault(),e.stopImmediatePropagation();const t=e.composedPath(),i=this._host.shadowRoot.querySelector("main");for(const e of t)e===i&&(this.aside=Object.assign(Object.assign({},this.aside),{hidden:!0}),this.options=Object.assign(Object.assign({},this.options),{hidden:!0}))}async componentWillLoad(){if(this._host.querySelector('[slot="options"]')&&(this.options.disabled=!1),"string"==typeof this.controllerName)try{const e=await s.getController(this.controllerName);this.controller=new e(this._host,this.history)}catch(e){console.error(e)}}render(){return t("div",{class:"mobile"},t("header",null,t("div",{class:"back-toggler"},this.enableBack?t("psk-button",{onClick:e=>this.toggleBack(e)},t("psk-icon",{icon:"chevron-left"})):null),t("div",{class:"aside-toggler"},this.aside.disabled?null:t("psk-button",{onClick:e=>this.toggleAside(e)},t("psk-icon",{icon:"bars"}))),t("h1",{class:"title"},this.title),t("div",{class:"options-toggler"},this.options.disabled?null:t("psk-button",{onClick:e=>this.toggleOptions(e)},t("psk-icon",{icon:"ellipsis-v"}))),t("div",{class:"aside-menu",hidden:this.aside.hidden},t("psk-user-profile",null),t("app-menu",{"hamburger-max-width":0,"item-renderer":"sidebar-renderer"})),t("div",{class:"options-menu",hidden:this.options.hidden},t("slot",{name:"options"}))),t("main",null,t("div",{class:"main-cover",hidden:this.aside.hidden}),t("slot",{name:"content"})),t("footer",null,t("slot",{name:"footer"})))}get _host(){return i(this)}};n([r(),o({description:"This property is used as title for the page.",isMandatory:!1,propertyType:"string"})],a.prototype,"title",void 0),n([o({description:"This property decides if the hamburger button and the sidebar attached with it should be rendered.",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],a.prototype,"disableSidebar",void 0),n([o({description:"This property decides if the return / go back button should be displayed.",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],a.prototype,"enableBack",void 0),n([o({description:["This property is a string that will permit the developer to choose his own controller.","If no value is sent then the null default value will be taken and the component will use the basic Controller."],propertyType:"string",isMandatory:!1,defaultValue:"null"})],a.prototype,"controllerName",void 0),a.style=".mobile{position:relative;height:100vh;width:100vw;display:grid;grid-template-rows:auto 1fr auto}.mobile>header{position:relative;height:4rem;padding:0 0.5rem;display:grid;grid-template-columns:auto auto 1fr 50px;place-items:center;background-color:#5E7FE1;z-index:8}.mobile>header>.title{margin:0;color:#FFFFFF}.mobile>header .btn{padding:0;margin:0;min-width:50px;min-height:50px;border-radius:5px;border-color:transparent;background-color:transparent}.mobile>header .btn:hover,.mobile>header .btn:focus,.mobile>header .btn:active{border-style:solid;border-color:#5E7FE1;background-color:transparent !important}.mobile>header .btn .icon,.mobile>footer .btn .icon{padding:0;margin:0}.mobile>header .aside-menu,.mobile>header .options-menu{position:absolute;top:100%}.mobile>header .aside-menu{height:calc(100vh - 4rem);width:100%;max-width:300px;left:0;display:grid;align-content:flex-start;z-index:9;overflow-y:scroll;background-color:#4461B5}.mobile>header .aside-menu .wrapper_container{width:100%}.mobile>header .aside-menu .profile .card-body.text-center{padding-top:2rem;padding-bottom:1rem}.mobile>header .options-menu{display:grid;right:0;min-width:200px;background-color:#FFFFFF;box-shadow:0 0 1px rgba(0, 0, 0, 0.25);z-index:8}.mobile>main{display:block;padding:1rem;overflow-y:scroll}.mobile>main .main-cover{position:fixed;content:'';top:4rem;bottom:0;left:0;right:0;z-index:7}::slotted([slot='options']){display:grid}::slotted([slot='footer']){display:flex;height:4.5rem;justify-content:space-between;align-items:center}::-webkit-scrollbar{height:6px}::-webkit-scrollbar-thumb{background:#CCCCCC;border-radius:3px}::-webkit-scrollbar-track{background-color:#F1F1F1}.mobile>header .aside-menu::-webkit-scrollbar{background-color:#FFFFFF;width:7px}.mobile>header .aside-menu::-webkit-scrollbar-track{background-color:#354F9B}.mobile>header .aside-menu::-webkit-scrollbar-thumb{background-color:#FFFFFF;border-radius:10px;border:1px solid #354f9b}.mobile>header .aside-menu::-webkit-scrollbar-button{display:none}@media screen and (max-width: 340px){.mobile>header .aside-menu{max-width:100%}}";export{a as psk_mobile}