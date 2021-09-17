import{r as t,h as e,g as i}from"./p-a9ce478c.js";import"./p-303a9197.js";import{B as o}from"./p-fccee2b6.js";import{C as a,T as n}from"./p-256c3418.js";var s=function(t,e,i,o){var a,n=arguments.length,s=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(n<3?a(s):n>3?a(e,i,s):a(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};const r={0:"",1:"0",2:"00",3:"000"},l=class{constructor(e){t(this,e),this.__getBrowser=()=>{let t,e=navigator.userAgent,i=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(i[1])?(t=/\brv[ :]+(\d+)/g.exec(e)||[],{name:"IE",version:t[1]||""}):"Chrome"===i[1]&&(t=e.match(/\bOPR|Edge\/(\d+)/),null!=t)?{name:"Opera",version:t[1]}:(i=i[2]?[i[1],i[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(t=e.match(/version\/(\d+)/i))&&i.splice(1,1,t[1]),{name:i[0],version:i[1]})},this.__isSafari=()=>-1!==this.__getBrowser().name.indexOf("Safari"),this.__inputHandler=t=>{t.stopImmediatePropagation(),this.__isSafari()||this.__focusOutHandler(t)},this.__focusOutHandler=t=>{t.stopImmediatePropagation();let e=t.target.value;if(e&&e.trim().length){const t=new Date(e).getTime();this.modelHandler.updateModel("value",t)}},this.__getFormattedDate=()=>{if(!this.value||!this.value.trim().length)return{};let t=new Date(parseInt(this.value));const e=t.getUTCFullYear(),i=t.getUTCMonth()+1,o=t.getUTCDate(),a=o<=9?"0"+o:""+o,n=i<=9?"0"+i:""+i;let s=e.toString();s=`${r[s.length<4?4-s.length:0]}${s}`;const l={DD:a,MM:n,YYYY:s},p="YYYY MM DD".split(" ").map((t=>l[t])).join("-");return{dateToDisplay:this.dataFormat?this.dataFormat.trim().split(/[ ,\/]+/).map((t=>l[t])).join("/"):p,dateToAssign:p}},this.label=null,this.value=null,this.name=null,this.placeholder=null,this.required="false",this.readOnly=!1,this.type="date",this.invalidValue=null,this.dataFormat=null}render(){if(!this.htmlElement.isConnected)return null;let{dateToDisplay:t,dateToAssign:i}=this.__getFormattedDate();return"month"===this.type&&i&&(i=i.substring(0,i.lastIndexOf("-"))),e("psk-input",{type:"month"===this.type?"month":"date",label:this.label,name:this.name,value:i,placeholder:this.placeholder,required:"true"===this.required,readOnly:this.readOnly,invalidValue:this.invalidValue,specificProps:{onKeyUp:this.__inputHandler.bind(this),onChange:this.__inputHandler.bind(this),onfocusout:this.__focusOutHandler.bind(this),"data-date":t,class:this.dataFormat&&!this.__isSafari()?"form-control formated-date":"form-control"}})}get htmlElement(){return i(this)}};s([a(),o()],l.prototype,"modelHandler",void 0),s([n({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],l.prototype,"label",void 0),s([n({description:["Specifies the value of an psk-date-input component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.',"This property should respect the format give nto the data-format property."],isMandatory:!1,propertyType:"string"})],l.prototype,"value",void 0),s([n({description:["Specifies the name of a psk-date-input component. It is used along with the psk-label component."],isMandatory:!1,propertyType:"string"})],l.prototype,"name",void 0),s([n({description:["Specifies a short hint that describes the expected value of an psk-date-input component"],isMandatory:!1,propertyType:"string"})],l.prototype,"placeholder",void 0),s([n({description:["Specifies that an input field must be filled out before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],l.prototype,"required",void 0),s([n({description:["\tSpecifies that an input field is read-only.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],l.prototype,"readOnly",void 0),s([n({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean"})],l.prototype,"invalidValue",void 0),s([n({isMandatory:!1,description:'This property is the format of the date. At the moment the component can format only "MM DD YYYY", "DD MM YYYY", "MM YYYY DD", "YYYY MM DD", "YYYY DD MM" and "DD YYYY MM".',propertyType:"string",defaultValue:"null"})],l.prototype,"dataFormat",void 0),l.style=".formated-date{position:relative;color:transparent!important}.formated-date:before{position:absolute;top:0.45rem;left:0.7rem;content:attr(data-date);display:inline-block;color:#333333}.formated-date::-webkit-datetime-edit,.formated-date::-webkit-inner-spin-button,.formated-date::-webkit-clear-button{display:none}.formated-date::-webkit-calendar-picker-indicator{position:absolute;top:0.41rem;right:0.8rem;opacity:1}";export{l as psk_date_input}