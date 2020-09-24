import{r as t,h as e,g as i}from"./p-dac455db.js";import"./p-d9d3000e.js";import{s as r}from"./p-3c0afda3.js";import{T as s}from"./p-e6f7d338.js";import{C as a}from"./p-d9fd0f7b.js";import{B as o}from"./p-bd8f34fe.js";var d=function(t,e,i,r){var s,a=arguments.length,o=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,r);else for(var d=t.length-1;d>=0;d--)(s=t[d])&&(o=(a<3?s(o):a>3?s(e,i,o):s(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o};const n=["datamatrix","gs1datamatrix","qrcode"],c=class{constructor(e){t(this,e),this.type="qrcode",this.title="",this.size=32,this.includeText=!1,this.isLoaded=!1}drawQRCodeCanvas(){if(this.isLoaded&&this.data.length>0){let t=this.element.querySelector("canvas");t.innerHTML="";let e=()=>{if(window.bwipjs)try{let e={bcid:this.type,text:this.data,scale:3,height:this.size,textxalign:"center"};r(this.includeText)&&(e.alttext=this.data),-1!==n.indexOf(this.type)&&(e.width=this.size),window.bwipjs.toCanvas(t,e,(function(t){t&&console.log(t)}))}catch(t){}else setTimeout(e,100)};e()}}componentDidLoad(){this.isLoaded=!0,this.drawQRCodeCanvas()}render(){return e("psk-card",{title:this.title},e("script",{src:"/cardinal/libs/bwip.js"}),e("div",{class:"code_container"},e("div",{class:"card-body text-center"},e("canvas",{class:"code_canvas"}))))}get element(){return i(this)}static get watchers(){return{data:["drawQRCodeCanvas"]}}};d([o()],c.prototype,"modelHandler",void 0),d([a()],c.prototype,"element",void 0),d([s({description:"The data-model that will be used for generating the desired barcode.",isMandatory:!0,propertyType:"string"})],c.prototype,"data",void 0),d([s({description:"The barcode type. Accepted values are 'gs1datamatrix','datamatrix','qrcode', 'code128','code11','isbn'.",isMandatory:!0,propertyType:"string"})],c.prototype,"type",void 0),d([s({description:"A title that will be used for the current component instance.",isMandatory:!1,propertyType:"string"})],c.prototype,"title",void 0),d([s({description:"The size of the barcode in mm. Default is set to 32 mm.",isMandatory:!1,propertyType:"integer"})],c.prototype,"size",void 0),d([s({description:"This option allows to print the input data below the generated barcode.",isMandatory:!1,propertyType:"boolean"})],c.prototype,"includeText",void 0);export{c as psk_barcode_generator}