import{r as e,h as t}from"./p-9eaba2bd.js";import"./p-67893e64.js";import"./p-ba942fe7.js";import{T as i}from"./p-76b560d9.js";import{C as s}from"./p-ea3b4b27.js";import{B as a}from"./p-691f45fe.js";var o=function(e,t,i,s){var a,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(n=(o<3?a(n):o>3?a(t,i,n):a(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};const n=class{constructor(t){e(this,t),this.__inputHandler=e=>{e.stopImmediatePropagation(),this.dataFormat&&(this.dataDate=this.changeDateFormat(e.target.value,this.dataFormat)),this.modelHandler.updateModel("value",this.dataDate)},this.changeDateFormat=(e,t)=>{let i;if(console.log(typeof e),"DD MM YYYY"===t){let t=e.split("-");i=t[2]+"/"+t[1]+"/"+t[0],console.log(i)}else if("MM DD YYYY"===t){let t=e.split("-");i=t[1]+"/"+t[2]+"/"+t[0],console.log(i)}else if("YYYY MM DD"===t)return e},this.label=null,this.value=null,this.name=null,this.placeholder=null,this.required=!1,this.readOnly=!1,this.invalidValue=null,this.dataFormat=null}render(){return t("psk-input",{type:"date",label:this.label,name:this.name,value:this.value,dataDate:this.dataDate,placeholder:this.placeholder,required:this.required,readOnly:this.readOnly,"data-date":this.value,dateClass:this.dataFormat?"formated-date":null,dataDateFormat:this.dataFormat?this.dataFormat:null,invalidValue:this.invalidValue,specificProps:{onKeyUp:this.__inputHandler.bind(this),onChange:this.__inputHandler.bind(this)}})}};o([s(),a()],n.prototype,"modelHandler",void 0),o([i({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],n.prototype,"label",void 0),o([i({description:["Specifies the value of an psk-date-input component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.',"This property should respect the format give nto the data-format property."],isMandatory:!1,propertyType:"string"})],n.prototype,"value",void 0),o([i({description:["Specifies the name of a psk-date-input component. It is used along with the psk-label component."],isMandatory:!1,propertyType:"string"})],n.prototype,"name",void 0),o([i({description:["Specifies a short hint that describes the expected value of an psk-date-input component"],isMandatory:!1,propertyType:"string"})],n.prototype,"placeholder",void 0),o([i({description:["Specifies that an input field must be filled out before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],n.prototype,"required",void 0),o([i({description:["\tSpecifies that an input field is read-only.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],n.prototype,"readOnly",void 0),o([i({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean"})],n.prototype,"invalidValue",void 0),o([i({isMandatory:!1,description:'This property is the format of the date, it can take these two values "DD MM YYYY" and"YYYY MM DD"',propertyType:"string"})],n.prototype,"dataFormat",void 0);export{n as psk_date_input}