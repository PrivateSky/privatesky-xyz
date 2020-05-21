import{r as e,c as t,h as i}from"./p-1c0c10bb.js";import"./p-67893e64.js";import"./p-ba942fe7.js";import{T as r}from"./p-24eba9a2.js";import{C as s}from"./p-443e6d65.js";import{T as o}from"./p-3a19e4ef.js";var a=function(e,t,i,r){var s,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let n;const l=class{constructor(i){e(this,i),this.error=!1,this.destinationUrl="#",this.validateUrl=t(this,"validateUrl",7),this.getTags=t(this,"getTags",7)}getAssignedUrlFromTag(e,t){n?t(void 0,n[e]):this.getTags.emit((i,r)=>{if(i)return t(i);n=r,t(void 0,n[e])})}componentWillLoad(){let e=(e,t)=>{e||!t?this.error=!0:this.destinationUrl=this.chapter?t+"&chapter="+this.chapter:t};if(this.tag)return this.getAssignedUrlFromTag(this.tag,e);this.page&&this.validateUrl.emit({sourceUrl:this.page,callback:e})}render(){let e=null;return this.error&&(e=i("div",{class:"tooltip-error"},i("div",null,"Page ",i("b",null,this.page)," does not exists."))),i("div",{class:"psk-link"},this.error?i("div",null,i("a",{class:"btn btn-link "+(this.error?"invalid-url":""),onClick:e=>{e.preventDefault()}},i("slot",null)),e):i("stencil-route-link",{url:this.destinationUrl,anchorClass:"btn btn-link"},i("slot",null)))}};a([s(),r({description:"This property is helping the component to resolve the real URL of the target. This property is validated for the first time by the valdateUrl event.",isMandatory:!1,propertyType:"string"})],l.prototype,"page",void 0),a([r({description:"This property gives the component a unique tag which resolves a single page.",isMandatory:!1,propertyType:"string"})],l.prototype,"tag",void 0),a([r({description:"This property allows user to create a complex URL containing a page chapter identifier",isMandatory:!1,propertyType:"string"})],l.prototype,"chapter",void 0),a([o({controllerInteraction:{required:!0},description:["This event is sent to the application controller in order to check and validate the page property.","If the sequence of pages inside the page property is valid, then the event is sending back to the component the valid path to the required page.",'If not, a special behavior will be applied to the link. On mouse over, it will turn grey and will display a hint message: "Page {page-name} does not exists".']})],l.prototype,"validateUrl",void 0),a([o({controllerInteraction:{required:!0},description:["This event is sent to the application controller in order get the dictionary that keeps the mapped tags to their real page URLs"]})],l.prototype,"getTags",void 0);export{l as psk_link}