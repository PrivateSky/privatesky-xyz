import{r as t,h as l}from"./p-bd5842d7.js";const s=class{constructor(l){t(this,l),this.title="",this.decoratorProperties=[]}receivedPropertiesDescription(t){const l=t.detail;t.stopImmediatePropagation(),l&&l.length>0&&(this.decoratorProperties=JSON.parse(JSON.stringify(l)))}render(){let t=this.decoratorProperties.map(t=>l("psk-hoc",{title:t.propertyName},l("p",{class:"subtitle"},l("i",null,`${t.propertyName}${t.isMandatory?"":"?"}: ${t.propertyType} ${t.isMandatory?"(mandatory)":"(optional)"}`)),Array.isArray(t.description)?t.description.map(t=>l("p",{innerHTML:t})):l("p",null,t.description),t.specialNote?l("p",null,l("b",null,"Note: ",t.specialNote)):null,t.defaultValue?l("p",null,l("i",null,"Default value: ",t.defaultValue)):null));return l("psk-chapter",{title:this.title,id:this.title.replace(/( |:|\/|\.)/g,"-").toLowerCase()},t)}};export{s as psk_property_descriptor};