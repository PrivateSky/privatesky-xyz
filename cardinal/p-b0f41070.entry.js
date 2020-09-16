import{r as e,h as t}from"./p-7cf930c5.js";import"./p-d9d3000e.js";import{s as i}from"./p-64251922.js";import{T as s}from"./p-01e50cc5.js";import{C as o}from"./p-42a5bb64.js";import{B as n}from"./p-5ebf7f0a.js";var p=function(e,t,i,s){var o,n=arguments.length,p=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(p=(n<3?o(p):n>3?o(t,i,p):o(t,i))||p);return n>3&&p&&Object.defineProperty(t,i,p),p};const a=class{constructor(t){e(this,t),this.name=null,this.required=!1,this.checked=null,this.value="unchecked",this.checkedValue=null,this.uncheckedValue=null}render(){const e=this.name?this.name:this.checkboxLabel?this.checkboxLabel.replace(/\s/g,"").toLowerCase():"";let s=i(this.checked);const o=t("div",{class:"form-group"},t("div",{class:"form-check form-check-inline"},t("input",{type:"checkbox",class:"form-check-input",id:e,name:e,required:this.required,defaultChecked:s,onChange:this.__handleCheckbox.bind(this),value:this.value}),t("psk-label",{for:e,label:this.checkboxLabel})));return this.label?t("div",{class:"form-group"},t("psk-label",{label:this.label}),o):o}__handleCheckbox(e){this.checked=e.target.checked,this.value=e.target.checked?this.checkedValue?this.checkedValue:"checked":this.uncheckedValue?this.uncheckedValue:"unchecked",this.modelHandler.updateModel("value",this.value)}};p([o(),n()],a.prototype,"modelHandler",void 0),p([s({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],a.prototype,"label",void 0),p([s({description:["Specifies the name of a psk-checkbox component. It is used along with the psk-label component."],isMandatory:!1,propertyType:"string"})],a.prototype,"name",void 0),p([s({description:['By filling out this property, the component will display near the checkbox, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],a.prototype,"checkboxLabel",void 0),p([s({description:["Specifies that the psk-checkbox must be checked before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],a.prototype,"required",void 0),p([s({description:["This property indicates the status of the component, if it checked or not. Also, by using this property, you can set the default value of the psk-checkbox, in case you need it to be checked."],isMandatory:!1,propertyType:"boolean"})],a.prototype,"checked",void 0),p([s({description:["Specifies the value of a psk-checkbox component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link tag="using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],a.prototype,"value",void 0),p([s({description:["Specifies the value that will be assigned to the component when it is checked."],isMandatory:!1,propertyType:"string"})],a.prototype,"checkedValue",void 0),p([s({description:["Specifies the value that will be assigned to the component when it is unchecked."],isMandatory:!1,propertyType:"string"})],a.prototype,"uncheckedValue",void 0);export{a as psk_checkbox}