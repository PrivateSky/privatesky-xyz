import{r as s,h as r,g as t}from"./p-bd5842d7.js";const o=class{constructor(r){s(this,r),this.label=null,this.name=null,this.invalid=!0,this.selectedValue=null}onChangeRadioHandler(s){if(s.preventDefault(),s.stopImmediatePropagation(),!s.detail||!s.detail.value)return;const r=this._host.querySelectorAll("psk-radio");for(let t=0;t<r.length;++t){let o=r[t];o.getAttribute("value")===s.detail.value?(this.selectedValue=s.detail.value,o.setAttribute("checked","true")):o.setAttribute("checked","false")}}render(){return r("div",{class:"form-group"},r("psk-label",{for:this.name,label:this.label}),r("div",{id:"psk-radio-group",class:"form-group"},r("slot",null)))}get _host(){return t(this)}};export{o as psk_radio_group};