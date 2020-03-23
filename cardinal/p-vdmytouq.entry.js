import{r as e,h as t}from"./p-2eb42df6.js";import{I as i}from"./p-acb9d1e1.js";import{f as o}from"./p-7111d76e.js";import{T as s}from"./p-f3fbe684.js";import{C as a}from"./p-6a61ad0f.js";import{B as n}from"./p-69d9d418.js";var l=function(e,t,i,o){var s,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,i,n):s(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const p=class{constructor(t){e(this,t),this.options=null,this.selectOptions=null,this.label=null,this.value=null,this.selectionType="single",this.placeholder=null,this.required=!1,this.disabled=!1,this.invalidValue=null}componentWillLoad(){"single"!==this.selectionType&&"multiple"!==this.selectionType&&(this.selectionType="single")}render(){this.selectOptions&&this.__createOptions.call(this);const e=this.label&&this.label.replace(/( |:|\/|\.|-)/g,"").toLowerCase();return t("div",{class:"form-group"},t("psk-label",{for:e,label:this.label}),t("select",{name:e,id:e,class:"form-control",disabled:this.disabled,required:this.required,multiple:"multiple"===this.selectionType,onChange:this.__onChangeHandler.bind(this)},this.placeholder&&t("option",{disabled:!0,label:this.placeholder,value:"",selected:!0}),this.options&&this.options.map(e=>{const i=e.value?e.value:e.label&&e.label.replace(/( |:|\/|\.|-)/g,"").toLowerCase();return t("option",{value:i,label:e.label,disabled:e.disabled})})))}__onChangeHandler(e){e.preventDefault(),e.stopImmediatePropagation(),this.changeModel?this.changeModel.call(this,"value",e.target.value):console.warn("[psk-select] Function named -=changeModel=- is not defined!")}__createOptions(){let e=this.selectOptions.split("|");this.options=e.map(e=>{let t,s=e.trim().split(","),a=s[0].trim();return{label:a,value:t=1===s.length?o(a,i,"-",e=>e.toLowerCase()):s[1].trim()}})}};l([a(),n()],p.prototype,"options",void 0),l([s({description:["This property is providing the list of the options available for selection.",'Each option is sepparated by the special character "|" (pipe) (e.g. option 1 | option 2 | option 3).',"For each option, as a recommendation, you should add a value sepparated by comma.",'Example of options with values: "Romania, ROM | Italy, ITA | Germany, DE"','If no value is provided for an option, the component will create one. It will take the option and will normalize it to lower case and the special characters will be changed to dash ("-").'],isMandatory:!1,propertyType:"string"})],p.prototype,"selectOptions",void 0),l([s({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],p.prototype,"label",void 0),l([s({description:["Specifies the value of a psk-select component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],p.prototype,"value",void 0),l([s({description:["Specifies the type of the psk-select component.",'There are two possible values, "single" and "multiple". If no value is provided, "single" is assumed.'],isMandatory:!1,propertyType:"string",defaultValue:"single"})],p.prototype,"selectionType",void 0),l([s({description:["Specifies a short hint that describes the expected value of an psk-date-input component"],isMandatory:!1,propertyType:"string"})],p.prototype,"placeholder",void 0),l([s({description:["Specifies that at least one option must be selected before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],p.prototype,"required",void 0),l([s({description:["\tSpecifies that the component is disabled. Most of the times is used within conditional formatting of components.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],p.prototype,"disabled",void 0),l([s({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean"})],p.prototype,"invalidValue",void 0);export{p as psk_select};