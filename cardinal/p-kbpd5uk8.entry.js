import{r as e,h as t}from"./p-2eb42df6.js";import"./p-acb9d1e1.js";import"./p-7111d76e.js";import{T as s}from"./p-f3fbe684.js";import{C as o}from"./p-6a61ad0f.js";import{B as i}from"./p-69d9d418.js";var r=function(e,t,s,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(a=(r<3?i(a):r>3?i(t,s,a):i(t,s))||a);return r>3&&a&&Object.defineProperty(t,s,a),a};const a=class{constructor(t){e(this,t),this.opened=!1,this.classes=""}render(){return this.label||this.icon?t("div",{class:`button-group-wrapper ${this.classes}`},t("div",{class:"trigger",onClick:e=>{e.preventDefault(),this.opened=!this.opened}},this.icon&&t("psk-icon",{icon:this.icon,color:this.iconColor}),this.label&&this.label),t("div",{class:"list-group"},t("slot",null))):null}};r([i(),o()],a.prototype,"render",null),r([s({description:["This property shows the state of the button group, if it is expanded or collapsed."],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],a.prototype,"opened",void 0),r([s({description:["This is the label that will be displayed for the button. If it is not set, the button group will not be displayed."],isMandatory:!0,propertyType:"string"})],a.prototype,"label",void 0),r([s({isMandatory:!1,propertyType:"string",description:["This property gives the color of the icon."],defaultValue:"null"})],a.prototype,"icon",void 0),r([s({isMandatory:!0,propertyType:"string",description:["This property is mandatory and it is the icon defined in font-awesome Cascading Style Sheet .","We choose to use these icons because they are popular and quite expressive and very easy to use.(Example: user, eye, share, download"]})],a.prototype,"iconColor",void 0),r([s({isMandatory:!1,propertyType:"string",description:["By defining this property, you can assign more css classes according to your design needs.","These classes will be attached to the existing class, <code>button-group-wrapper</code>. Below in the examples section, this attribute is better illustrated."]})],a.prototype,"classes",void 0);export{a as psk_button_group};