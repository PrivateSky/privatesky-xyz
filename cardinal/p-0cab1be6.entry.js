import{r as e,c as t,h as i}from"./p-7cf930c5.js";import"./p-f2139256.js";import"./p-6f3d2ab8.js";import{T as o}from"./p-4db332c8.js";import{C as s}from"./p-daa61edb.js";import{B as n}from"./p-473247c7.js";import{T as a}from"./p-64ebc7f3.js";var r=function(e,t,i,o){var s,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(a=(n<3?s(a):n>3?s(t,i,a):s(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};const p=class{constructor(i){e(this,i),this.onChangeRadio=t(this,"onChangeRadio",5),this.label=null,this.value=null,this.name=null,this.readOnly=!1,this.invalidValue=null,this.checked=!1}render(){const e=this.name?this.name:this.label&&this.label.replace(/\s/g,"").toLowerCase();return i("div",{class:"form-check form-check-inline"},i("input",{type:"radio",class:"form-check-input",value:this.value?this.value:e,name:e,readOnly:this.readOnly,checked:this.checked,onChange:this.__handleRadioChange.bind(this)}),i("psk-label",{for:e,label:this.label}))}__handleRadioChange(e){e.preventDefault(),e.stopImmediatePropagation(),this.onChangeRadio.emit({value:e.target.value})}};r([s(),n()],p.prototype,"modelHandler",void 0),r([o({description:['By filling out this property, the component will display near it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],p.prototype,"label",void 0),r([o({description:["Specifies the value of a psk-radio component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],p.prototype,"value",void 0),r([o({description:["Specifies the name of a psk-radio component. It is used along with the psk-label component."],isMandatory:!1,propertyType:"string"})],p.prototype,"name",void 0),r([o({description:["\tSpecifies that a psk-radio is read-only and it cannot be changed.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],p.prototype,"readOnly",void 0),r([o({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean"})],p.prototype,"invalidValue",void 0),r([o({description:["This property indicates the status of the component, if it checked or not. Also, by using this property, you can set the default value of the radio, in case you need it to be checked."],isMandatory:!1,propertyType:"boolean"})],p.prototype,"checked",void 0),r([a({description:["This event is being triggered when a radio button is checked.","The event bubbles to the parent component, psk-radio-group, where the component will handle the selection of the radio."],specialNote:"This event is not composed, it will not bubble outside the form!"})],p.prototype,"onChangeRadio",void 0);export{p as psk_radio}