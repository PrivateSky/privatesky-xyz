import{r as e,h as t}from"./p-56172067.js";import"./p-67893e64.js";import"./p-ba942fe7.js";import{T as i}from"./p-afd0098a.js";import{C as s}from"./p-00597ad5.js";import{B as n}from"./p-8610b3e2.js";var o=function(e,t,i,s){var n,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var p=e.length-1;p>=0;p--)(n=e[p])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};const a=class{constructor(t){e(this,t),this.__inputHandler=e=>{e.stopImmediatePropagation(),this.modelHandler.updateModel("value",e.target.value)},this.label=null,this.value=null,this.name=null,this.placeholder=null,this.required=!1,this.readOnly=!1,this.invalidValue=null}render(){return t("psk-input",{type:"number",label:this.label,name:this.name,value:this.value,placeholder:this.placeholder,required:this.required,readOnly:this.readOnly,invalidValue:this.invalidValue,specificProps:{onKeyUp:this.__inputHandler.bind(this),onChange:this.__inputHandler.bind(this)}})}};o([s(),n()],a.prototype,"modelHandler",void 0),o([i({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],a.prototype,"label",void 0),o([i({description:["Specifies the value of an psk-number-input component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],a.prototype,"value",void 0),o([i({description:["Specifies the name of a psk-number-input component. It is used along with the psk-label component."],isMandatory:!1,propertyType:"string"})],a.prototype,"name",void 0),o([i({description:["Specifies a short hint that describes the expected value of an psk-number-input component"],isMandatory:!1,propertyType:"string"})],a.prototype,"placeholder",void 0),o([i({description:["Specifies that an input field must be filled out before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],a.prototype,"required",void 0),o([i({description:["\tSpecifies that an input field is read-only.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],a.prototype,"readOnly",void 0),o([i({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean"})],a.prototype,"invalidValue",void 0);export{a as psk_number_input}