import{r as t,c as s,h as r,g as i}from"./p-bd5842d7.js";import"./p-11ec80fb.js";import{i as e}from"./p-c2b42fe0.js";import"./p-4bed3927.js";const o=new class{constructor(){this.controllers={},this.pendingControllerRequests={}}registerController(t,s){this.controllers[t]=s,this._fullFillPreviousRequests(t)}_fullFillPreviousRequests(t){if(this.pendingControllerRequests[t])for(;this.pendingControllerRequests[t].length;)this.pendingControllerRequests[t].pop().resolve(this.controllers[t])}getController(t){return new Promise((s,r)=>{this.controllers[t]?s(this.controllers[t]):(this.pendingControllerRequests[t]||(this.pendingControllerRequests[t]=[]),this.pendingControllerRequests[t].push({resolve:s,reject:r}))})}},h=class{constructor(r){t(this,r),this.mobileLayout=!1,this.componentCode="",this.hasSlot=!1,this.controller?o.getController(this.controller).then(t=>{new t(this.host)}):console.log("No controller added to app-root"),this.routeChangedEvent=s(this,"routeChanged",7),this.cfReadyEvent=s(this,"controllerFactoryIsReady",7)}componentWillLoad(){this.cfReadyEvent.emit(o);let t=this.host.innerHTML;(t=t.replace(/\s/g,"")).length&&(this.hasSlot=!0)}render(){return r(this.hasSlot?"slot":"psk-default-renderer",null)}get host(){return i(this)}};e(h);export{h as psk_app_root};