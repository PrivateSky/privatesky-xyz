System.register(["./p-e1460616.system.js","./p-90e1ba03.system.js","./p-ca300ef6.system.js","./p-f4127746.system.js","./p-9195761b.system.js","./p-1dc6fa5f.system.js"],(function(e){"use strict";var t,o,i,s,n;return{setters:[function(e){t=e.r;o=e.h},function(){},function(){},function(e){i=e.T},function(e){s=e.C},function(e){n=e.B}],execute:function(){var a=undefined&&undefined.__decorate||function(e,t,o,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,o,i);else for(var c=e.length-1;c>=0;c--)if(a=e[c])n=(s<3?a(n):s>3?a(t,o,n):a(t,o))||n;return s>3&&n&&Object.defineProperty(t,o,n),n};var c=e("psk_checkbox",function(){function e(e){t(this,e);this.name=null;this.required=false;this.checked=false;this.value="unchecked";this.checkedValue=null;this.uncheckedValue=null}e.prototype.render=function(){var e=this.name?this.name:this.checkboxLabel?this.checkboxLabel.replace(/\s/g,"").toLowerCase():"";var t=o("div",{class:"form-group"},o("div",{class:"form-check form-check-inline"},o("input",{type:"checkbox",class:"form-check-input",id:e,name:e,required:this.required,checked:this.checked,onChange:this.__handleCheckbox.bind(this),value:this.value}),o("psk-label",{for:e,label:this.checkboxLabel})));return this.label?o("div",{class:"form-group"},o("psk-label",{label:this.label}),t):t};e.prototype.__handleCheckbox=function(e){this.checked=e.target.checked;if(e.target.checked){this.value=this.checkedValue?this.checkedValue:"checked"}else{this.value=this.uncheckedValue?this.uncheckedValue:"unchecked"}this.modelHandler.updateModel("value",this.value)};return e}());a([s(),n()],c.prototype,"modelHandler",void 0);a([i({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:false,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],c.prototype,"label",void 0);a([i({description:["Specifies the name of a psk-checkbox component. It is used along with the psk-label component."],isMandatory:false,propertyType:"string"})],c.prototype,"name",void 0);a([i({description:['By filling out this property, the component will display near the checkbox, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:false,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],c.prototype,"checkboxLabel",void 0);a([i({description:["Specifies that the psk-checkbox must be checked before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean",defaultValue:"false"})],c.prototype,"required",void 0);a([i({description:["This property indicates the status of the component, if it checked or not. Also, by using this property, you can set the default value of the psk-checkbox, in case you need it to be checked."],isMandatory:false,propertyType:"boolean"})],c.prototype,"checked",void 0);a([i({description:["Specifies the value of a psk-checkbox component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:false,propertyType:"string"})],c.prototype,"value",void 0);a([i({description:["Specifies the value that will be assigned to the component when it is checked."],isMandatory:false,propertyType:"string"})],c.prototype,"checkedValue",void 0);a([i({description:["Specifies the value that will be assigned to the component when it is unchecked."],isMandatory:false,propertyType:"string"})],c.prototype,"uncheckedValue",void 0)}}}));