import{r as e,h as t}from"./p-56172067.js";import"./p-67893e64.js";import"./p-ba942fe7.js";import{T as i}from"./p-afd0098a.js";import{C as s}from"./p-00597ad5.js";import{B as o}from"./p-8610b3e2.js";var n=function(e,t,i,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var p=e.length-1;p>=0;p--)(o=e[p])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};const a=class{constructor(t){e(this,t),this.__keyUpHandler=e=>{e.stopImmediatePropagation(),this.modelHandler.updateModel("value",e.target.value)},this.type="text",this.label=null,this.value=null,this.name=null,this.placeholder=null,this.required=!1,this.readOnly=!1,this.invalidValue=null,this.dataDateFormat=null,this.specificProps={}}render(){const e=null===this.invalidValue?"":this.invalidValue?"is-invalid":"is-valid",i=this.name?this.name:this.label&&this.label.replace(/( |:|\/|\.|-)/g,"").toLowerCase();return t("div",{class:"form-group"},this.label&&t("psk-label",{for:i,label:this.label}),t("input",Object.assign({type:this.type,value:this.value,name:i,class:"form-control "+e,placeholder:this.placeholder,required:this.required,readOnly:this.readOnly,onKeyUp:this.__keyUpHandler.bind(this)},this.specificProps)))}};n([s(),o()],a.prototype,"modelHandler",void 0),n([i({description:["Specifies the type psk-input to display.",'The full list of type and explanations can be found at: <a href="https://www.w3schools.com/html/html_form_input_types.asp">HTML Input Types</a>'],isMandatory:!1,propertyType:"string",defaultValue:"text",specialNote:'If no value is provided, "text" is assumed'})],a.prototype,"type",void 0),n([i({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],a.prototype,"label",void 0),n([i({description:["Specifies the value of an psk-input component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],a.prototype,"value",void 0),n([i({description:["Specifies the name of a psk-input component. It is used along with the psk-label component."],isMandatory:!1,propertyType:"string"})],a.prototype,"name",void 0),n([i({description:["Specifies a short hint that describes the expected value of an psk-input component"],isMandatory:!1,propertyType:"string"})],a.prototype,"placeholder",void 0),n([i({description:["Specifies that an input field must be filled out before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean"})],a.prototype,"required",void 0),n([i({description:["\tSpecifies that an input field is read-only.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean"})],a.prototype,"readOnly",void 0),n([i({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean"})],a.prototype,"invalidValue",void 0),n([i({isMandatory:!1,description:"",propertyType:"string"})],a.prototype,"dataDateFormat",void 0);export{a as psk_input}