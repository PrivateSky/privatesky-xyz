System.register(["./p-226ad382.system.js","./p-32fcf664.system.js","./p-50480096.system.js","./p-d5102599.system.js"],function(t){"use strict";var e,n,r,i,o;return{setters:[function(t){e=t.r;n=t.h;r=t.g},function(t){i=t.C},function(){},function(t){o=t.T}],execute:function(){var s=undefined&&undefined.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)if(s=t[l])o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o;return i>3&&o&&Object.defineProperty(e,n,o),o};var l=t("psk_table",function(){function t(t){e(this,t);this.tableContent=null}t.prototype.render=function(){return n("table",null,this.tableContent)};t.prototype.componentWillLoad=function(){var t=this;var e=this.element.innerHTML.split(/\n/g).map(function(t){return t.trim().replace("\x3c!----\x3e","")}).filter(function(t){return t.length>0}).map(function(e){var n=e.split("|").map(function(e){if(t.head){return"<th>"+e.trim()+"</th>"}else{return"<td>"+e.trim()+"</td>"}}).join("");return"<tr>"+n+"</tr>"});var n=[];if(this.head){n.push(this._stringArrayToHTMLElement("thead",e.splice(0,1)));if(this.footer){n.push(this._stringArrayToHTMLElement("tbody",e.splice(0,e.length-1)));n.push(this._stringArrayToHTMLElement("tfoot",[e[e.length-1]]))}else{n.push(this._stringArrayToHTMLElement("tbody",e.splice(0)))}}else{n=[this._stringArrayToHTMLElement("tbody",e)]}this.tableContent=n;this.element.innerHTML=""};t.prototype._stringArrayToHTMLElement=function(t,e){var r=t;return n(r,{innerHTML:e.join("")})};Object.defineProperty(t.prototype,"element",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());s([i(),o({description:"If this property is set as true then the table will have a footer in which the first info of the table will be written. ",isMandatory:false,propertyType:"boolean"})],l.prototype,"head",void 0);s([o({description:"If this property is set as true then the table will have a footer in which the last info of the table will be written.",isMandatory:false,propertyType:"boolean"})],l.prototype,"footer",void 0)}}});