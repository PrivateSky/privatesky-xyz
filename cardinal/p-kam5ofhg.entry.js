import{r as e,c as t,h as i}from"./p-bd5842d7.js";import{T as r}from"./p-ce13cd9c.js";import"./p-9138c41e.js";import{C as o}from"./p-bd9d7655.js";import{T as n}from"./p-741b8297.js";var s=function(e,t,i,r){var o,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,i,s):o(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};const a=class{constructor(i){e(this,i),this.menuItems=null,this.hamburgerMaxWidth=960,this.showHamburgerMenu=!1,this.showNavBar=!1,this.menuItemClicked=t(this,"menuEvent",7),this.needMenuItemsEvt=t(this,"needMenuItems",7),this.getHistoryType=t(this,"getHistoryType",7)}checkIfHamburgerIsNeeded(){this.showHamburgerMenu=document.documentElement.clientWidth<this.hamburgerMaxWidth}componentDidLoad(){this.checkIfHamburgerIsNeeded(),this.getHistoryType.emit((e,t)=>{e?console.log(e):this.historyType=t})}handleClick(e){e.preventDefault();let t=e.target.value;for(let e=0;e<this.menuItems.length;e++)this.menuItems[e].active=t===this.menuItems[e];this.menuItemClicked.emit(e.target.value),this.menuItems=[...this.menuItems]}toggleNavBar(){this.showNavBar=!this.showNavBar}componentWillLoad(){this.menuItems||this.needMenuItemsEvt.emit((e,t)=>{e?console.log(e):this.menuItems=t})}renderItem(e){let t=this.itemRenderer?this.itemRenderer:"psk-menu-item-renderer",r=[];if(e.children)for(let t=0;t<e.children.length;t++)r.push(this.renderItem(e.children[t]));return i(t,{onclick:e=>this.handleClick(e),historyType:this.historyType,active:!!e.active&&e.active,children:r,hamburger:this.showHamburgerMenu,value:e})}render(){if(!this.menuItems)return;let e=[];for(let t=0;t<this.menuItems.length;t++)e.push(this.renderItem(this.menuItems[t]));if(this.showHamburgerMenu){e=e.map(e=>i("li",{onClick:this.toggleNavBar.bind(this),class:"nav-item"},e));let t="collapse navbar-collapse "+`${1==this.showNavBar?"show":""}`;return i("nav",{class:"navbar navbar-dark "},i("a",{class:"navbar-brand",href:"#"}),i("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse",onClick:this.toggleNavBar.bind(this),"aria-label":"Toggle navigation"},i("span",{class:"navbar-toggler-icon"})),i("div",{class:t},i("ul",{class:"navbar-nav mr-auto"},e)))}return e}};s([o(),r({description:"Another web component that can render each menu item.\n     This component is responsible for rendering children (nested menu items).",isMandatory:!1,propertyType:"string"})],a.prototype,"itemRenderer",void 0),s([r({description:"Menu items datasource. It should be an array if MenuItem[]. \n      If it is not provided, it the component will emit an event (needMenuItems) in order to get the menu items.",isMandatory:!1,propertyType:"array of MenuItem items (MenuItem[])",defaultValue:"null"})],a.prototype,"menuItems",void 0),s([r({description:"This property is intended to be added when you want to change the default value of 600px for switching between normal and hamburger menu.",isMandatory:!1,propertyType:"number",defaultValue:"600"})],a.prototype,"hamburgerMaxWidth",void 0),s([n({eventName:"menuEvent",controllerInteraction:{required:!0},description:"This event will be emited when you click on a menu item and it will create another CustomEvent that will change your route to the page you want to access."})],a.prototype,"menuItemClicked",void 0),s([n({eventName:"needMenuItems",controllerInteraction:{required:!0},description:"If no data is provided for the menuItems property this event will be emited that will render a default menuItem created by us."})],a.prototype,"needMenuItemsEvt",void 0),s([n({eventName:"getHistoryType",controllerInteraction:{required:!0},description:"This event gets the history type "})],a.prototype,"getHistoryType",void 0);var l=function(e,t,i,r){var o,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,i,s):o(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};const h=class{constructor(i){e(this,i),this.menuItems=[],this.failRedirectTo="",this.notFoundRoute="",this.needRoutesEvt=t(this,"needRoutes",7),this.getHistoryType=t(this,"getHistoryType",7)}componentDidLoad(){this.needRoutesEvt.emit((e,t)=>{e?console.log(e):this.menuItems=t}),this.getHistoryType.emit((e,t)=>{e?console.log(e):this.historyType=t})}renderItems(e){return e.map(e=>("404"==e.name&&(this.notFoundRoute=e.path),e.children?this.renderItems(e.children):i("stencil-route",{url:e.path,component:e.component,componentProps:e.componentProps})))}render(){let e=this.renderItems(this.menuItems);return 0===e.length?i("psk-ui-loader",{shouldBeRendered:!0}):(""==this.notFoundRoute&&(this.notFoundRoute=this.menuItems[0].path),i("div",{class:"app_container"},i("stencil-router",{historyType:"query"===this.historyType?"browser":this.historyType},i("stencil-route-switch",{scrollTopOffset:0},"query"===this.historyType?i("stencil-route",{component:"query-pages-router",componentProps:{pages:this.menuItems}}):[i("stencil-route",{url:"hash"===this.historyType?"/#/":"/",exact:!0,component:this.menuItems[0].component,componentProps:this.menuItems[0].componentProps}),e,i("stencil-route",{component:"psk-page-not-found",componentProps:{urlDestination:this.notFoundRoute}})]))))}};l([r({description:"This parameter holds the datasource for the creation of the application routes. If this property is not provided, the component will emit an event (needMenuItems) in order to fetch this information.",specialNote:"The same configuration file is used in generating the App Menu component",isMandatory:!1,propertyType:"Array of MenuItem types(MenuItem[])"})],h.prototype,"menuItems",void 0),l([r({description:"This is the history type that will be passed along to the stencil-router",isMandatory:!1,propertyType:"string",defaultValue:"browser"})],h.prototype,"historyType",void 0),l([n({eventName:"needMenuItems",controllerInteraction:{required:!0},description:"This event gets the data as parameter and it is emitted immediately after the component is loaded in order to create the application routes "})],h.prototype,"needRoutesEvt",void 0),l([n({eventName:"getHistoryType",controllerInteraction:{required:!0},description:"This event gets the history type "})],h.prototype,"getHistoryType",void 0);var c=function(e,t,i,r){var o,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,i,s):o(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};const p=class{constructor(i){e(this,i),this.userInfo=null,this.getUserInfoEvent=t(this,"getUserInfo",7)}componentWillLoad(){this.userInfo||this.getUserInfoEvent.emit((e,t)=>{e?console.error("Error getting user info",e):this.userInfo=t})}render(){return i(this.profileRenderer?this.profileRenderer:"psk-user-profile-renderer",{userInfo:this.userInfo})}};c([r({description:"should receive an object with the following properties if the default renderer is wanted: username, avatar, email.",isMandatory:!1,propertyType:"any",defaultValue:"null"})],p.prototype,"userInfo",void 0),c([r({description:"This property allows the component to display a custom User Profile in case the default one is not preferred. ",isMandatory:!1,propertyType:"any"})],p.prototype,"profileRenderer",void 0),c([n({eventName:"getUserInfo",controllerInteraction:{required:!0},description:"This event is emitted only if the userInfo property is null in order to get the desired data."})],p.prototype,"getUserInfoEvent",void 0);export{a as app_menu,h as psk_app_router,p as psk_user_profile};