import{r as e,c as t,h as r}from"./p-bd5842d7.js";import"./p-f77f00c7.js";import"./p-d4406555.js";import{T as o}from"./p-17f00870.js";import"./p-11ec80fb.js";import{i}from"./p-c2b42fe0.js";import"./p-4bed3927.js";import{T as s}from"./p-072b52b9.js";var n=function(e,t,r,o){var i,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var p=e.length-1;p>=0;p--)(i=e[p])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n};const p=class{constructor(r){e(this,r),this.menuItems=[],this.needMenuItemsEvt=t(this,"needMenuItems",7)}componentDidLoad(){this.needMenuItemsEvt.emit((e,t)=>{e?console.log(e):this.menuItems=t})}renderItems(e){return e.map(e=>e.children?this.renderItems(e.children):r("stencil-route",{url:e.path,exact:e.exact,component:e.component,componentProps:e.componentProps}))}render(){console.log("here inside PskAppRouter",this.history);let e=this.renderItems(this.menuItems);return 0===e.length?r("psk-ui-loader",{shouldBeRendered:!0}):r("stencil-router",{historyType:"browser"},r("stencil-route-switch",{scrollTopOffset:0},e,r("stencil-route",{component:"psk-page-not-found"})))}};n([o({description:"This parameter holds the datasource for the creation of the application routes. If this property is not provided, the component will emit an event (needMenuItems) in order to fetch this information.",specialNote:"The same configuration file is used in generating the App Menu component",isMandatory:!1,propertyType:"Array of MenuItem types(MenuItem[])"})],p.prototype,"menuItems",void 0),n([o({description:"This is the history type that will be passed along to the stencil-router",isMandatory:!1,propertyType:"string",defaultValue:"browser"})],p.prototype,"history",void 0),n([s({eventName:"needMenuItems",controllerInteraction:{required:!0},description:"This event gets the data as parameter and it is emitted immediately after the component is loaded in order to create the application routes "})],p.prototype,"needMenuItemsEvt",void 0),i(p);var a=function(e,t,r,o){var i,s=arguments.length,n=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var p=e.length-1;p>=0;p--)(i=e[p])&&(n=(s<3?i(n):s>3?i(t,r,n):i(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n};const c=class{constructor(r){e(this,r),this.userInfo=null,this.getUserInfoEvent=t(this,"getUserInfo",7)}componentWillLoad(){this.userInfo||this.getUserInfoEvent.emit((e,t)=>{e?console.error("Error getting user info",e):this.userInfo=t})}render(){return r(this.profileRenderer?this.profileRenderer:"psk-user-profile-renderer",{userInfo:this.userInfo})}};a([o({description:"should receive an object with the following properties if the default renderer is wanted: username, avatar, email.",isMandatory:!1,propertyType:"any",defaultValue:"null"})],c.prototype,"userInfo",void 0),a([o({description:"This property allows the component to display a custom User Profile in case the default one is not preferred. ",isMandatory:!1,propertyType:"any"})],c.prototype,"profileRenderer",void 0),a([s({eventName:"getUserInfo",controllerInteraction:{required:!0},description:"This event is emitted only if the userInfo property is null in order to get the desired data."})],c.prototype,"getUserInfoEvent",void 0);export{p as psk_app_router,c as psk_user_profile};