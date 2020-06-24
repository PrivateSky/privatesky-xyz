import{g as t,r as i,h as s}from"./p-56172067.js";import"./p-67893e64.js";import{d as e,a as h}from"./p-ba942fe7.js";import{C as r}from"./p-00597ad52.js";import{T as n}from"./p-afd0098a2.js";class a{constructor(t){this.context=t,this.superKey=0===navigator.platform.indexOf("Mac")?"metaKey":"ctrlKey",this._=Prism.Live=class{constructor(t){this._=Prism.Live,this.source=t,this.sourceType=t.nodeName.toLowerCase(),this.wrapper=document.createElement("div"),this.wrapper.classList="prism-live";var i=this.source.nextSibling,s=this.source.parentNode;i?s.insertBefore(this.wrapper,i):s.appendChild(this.wrapper),this.wrapper.appendChild(this.source),"textarea"===this.sourceType?(this.textarea=this.source,this.code=document.createElement("code"),this.pre=document.createElement("pre"),this.pre.classList=this.textarea.classList+" no-whitespace-normalization",this.pre.appendChild(this.code),this.wrapper.insertBefore(this.pre,this.textarea)):(this.pre=this.source,this.code=this.pre.querySelector("code"),this.code||(this.code=document.createElement("code"),this.pre.appendChild(this.code)),this.textarea=document.createElement("textarea"),this.textarea.classList=this.pre.classList,this.textarea.innerHTML=this.pre.textContent,this.pre.parentNode.insertBefore(this.textarea,this.pre.nextSibling)),this._.all.set(this.textarea,this),this._.all.set(this.pre,this),this._.all.set(this.code,this),this.pre.classList.add("prism-live"),this.textarea.classList.add("prism-live"),this.source.classList.add("prism-live-source"),self.Incrementable&&new Incrementable(this.textarea),this.textarea.addEventListener("input",()=>this.update()),this.textarea.addEventListener("click",()=>{this.getLine()}),this.textarea.addEventListener("click keyup",t=>{(!t.key||t.key.lastIndexOf("Arrow")>-1)&&(this.tabstops=null)}),this.textarea.addEventListener("keyup",t=>{"Enter"==t.key&&(this.insert(this.currentIndent),this.syncScroll())}),this.textarea.addEventListener("keydown",t=>{if("Tab"!=t.key||t.altKey)if(this._.pairs[t.key])this.wrapSelection({before:t.key,after:this._.pairs[t.key],outside:!0}),t.preventDefault();else for(let i in this._.shortcuts)this._.checkShortcut(i,t)&&(this._.shortcuts[i].call(this,t),t.preventDefault());else if(t.preventDefault(),this.tabstops&&this.tabstops.length>0)this.moveCaret(this.tabstops.shift());else if(this.hasSelection){var i=this.beforeCaret("\n"),s=t.shiftKey;this.selectionStart-=i.length;var e=this._.adjustIndentation(this.selection,{relative:!0,indentation:s?-1:1});if(this.replace(e),s){var h=this._.regexp.gm`^${this.indent}`.test(i);this.selectionStart+=i.length+1-(s+h)}else this.selectionStart+=i.length+1+!(i.length==this.selectionStart)}else{var r=this._.match(this.beforeCaret(),/\S*$/);this.expandSnippet(r)?requestAnimationFrame(()=>{var t=document.createEvent("HTMLEvents");t.initEvent(type,!0,!0),this.textarea.dispatchEvent(t)}):this.insert(this.indent)}}),this.textarea.addEventListener("scroll",this,{passive:!0}),window.addEventListener("resize",()=>this.syncStyles()),requestAnimationFrame(()=>{this.syncStyles();var t=getComputedStyle(this.source);this.pre.style.height=this.source.style.height||t.getPropertyValue("--height"),this.pre.style.maxHeight=this.source.style.maxHeight||t.getPropertyValue("--max-height")}),this.update(),this.lang=(this.code.className.match(/lang(?:uage)?-(\w+)/i)||[,])[1],this.observer=new MutationObserver(()=>{document.activeElement!==this.textarea&&(this.textarea.value=this.pre.textContent)}),this.observe(),this.source.dispatchEvent(new CustomEvent("prism-live-init",{bubbles:!0,detail:this}))}handleEvent(t){"scroll"===t.type&&this.syncScroll()}observe(){return this.observer&&this.observer.observe(this.pre,{childList:!0,subtree:!0,characterData:!0})}unobserve(){this.observer&&this.observer.disconnect()}expandSnippet(t){if(!t)return!1;var i=this.context;if(t in i.snippets||t in this._.snippets)var s=i.snippets[t]||this._.snippets[t];else i.snippets.custom&&(s=i.snippets.custom.call(this,t));if(s){for(var e,h=[],r=[],n=s;e=this._.CARETthis._INDICATOR.exec(n);)h.push(e.index+1),r.push(n.slice(0,e.index+e[1].length)),n=n.slice(e.index+e[0].length),this._.CARETthis._INDICATOR.lastIndex=0;r.push(n),r=r.join(""),h.length>0&&(h[0]-=r.length),this.delete(t),this.insert(r,{matchIndentation:!0}),this.tabstops=h,this.moveCaret(this.tabstops.shift())}return!!s}get selectionStart(){return this.textarea.selectionStart}set selectionStart(t){this.textarea.selectionStart=t}get selectionEnd(){return this.textarea.selectionEnd}set selectionEnd(t){this.textarea.selectionEnd=t}get hasSelection(){return this.selectionStart!=this.selectionEnd}get selection(){return this.value.slice(this.selectionStart,this.selectionEnd)}get value(){return this.textarea.value}set value(t){this.textarea.value=t}get indent(){return this._.match(this.value,/^[\t ]+/m,this._.DEFAULTthis._INDENT)}get currentIndent(){var t=this.value.slice(0,this.selectionStart-1);return this._.match(t,/^[\t ]*/gm,"",-1)}get currentLanguage(){var t=this.getNode(),i=this._.match((t=t?t.parentNode:this.code).closest('[class*="language-"]').className,/language-(\w+)/,1);return this._.aliases[i]||i}get context(){return this._.languages[this.currentLanguage]||this._.languages.DEFAULT}update(){var t=this.value;/\n$/.test(this.value)&&(t+="​"),this.unobserve(),this.code.textContent=t,requestAnimationFrame(()=>{this.observe()}),Prism.highlightElement(this.code)}syncStyles(){var t=getComputedStyle(this.pre);this.textarea.style.caretColor=t.color;var i=/^(font|lineHeight)|[tT]abSize/gi;for(var s in t)t[s]&&s in this.textarea.style&&i.test(s)&&(this.wrapper.style[s]=t[s],this.textarea.style[s]=this.pre.style[s]="inherit");this.update()}syncScroll(){0===this.pre.clientWidth&&0===this.pre.clientHeight||(this.pre.scrollTop=this.textarea.scrollTop,this.pre.scrollLeft=this.textarea.scrollLeft)}beforeCaretIndex(t=""){return this.value.lastIndexOf(t,this.selectionStart)}afterCaretIndex(t=""){return this.value.indexOf(t,this.selectionEnd)}beforeCaret(t=""){var i=this.beforeCaretIndex(t);return-1!==i&&t||(i=0),this.value.slice(i,this.selectionStart)}getLine(t=this.selectionStart){for(var i,s=this.value,e=this.selectionStart;(i=s[e])&&"\n"!==i&&"\r"!==i&&e;e--);for(var h=this.selectionStart;(i=s[h])&&"\n"!==i&&"\r"!==i;h++);return{start:e,end:h}}afterCaret(t=""){var i=this.afterCaretIndex(t);return-1!==i&&t||(i=void 0),this.value.slice(this.selectionEnd,i)}setCaret(t){this.selectionStart=this.selectionEnd=t}moveCaret(t){t&&this.setCaret(this.selectionEnd+t)}insert(t,{index:i}={}){if(t)if(this.textarea.focus(),void 0===i)this.replace(t);else{var s=this.selectionStart,e=this.selectionEnd;this.selectionStart=this.selectionEnd=i,this.replace(t),this.selectionStart=s+(i<s?t.length:0),this.selectionEnd=e+(i<=e?t.length:0)}}replace(t){var i=this.hasSelection;this.insertText(t),i&&(this.selectionStart=this.selectionEnd-t.length)}set(t,{start:i,end:s}={}){var e=this.selectionStart,h=this.selectionEnd;this.selectionStart=i,this.selectionEnd=s,this.insertText(t),this.selectionStart=e,this.selectionEnd=h}insertText(t){if(t){if(!0===this._.supportsExecCommand)document.execCommand("insertText",!1,t);else if(void 0===this._.supportsExecCommand){let i=this.value;document.execCommand("insertText",!1,t),this._.supportsExecCommand=i!==this.value}return!1===this._.supportsExecCommand&&(this.textarea.setRangeText(t,this.selectionStart,this.selectionEnd,"end"),requestAnimationFrame(()=>this.update())),this._.supportsExecCommand}}wrap({before:t,after:i,start:s=this.selectionStart,end:e=this.selectionEnd}={}){var h=this.selectionStart,r=this.selectionEnd,n=this.value.slice(s,e);this.set(t+n+i,{start:s,end:e}),h>s&&(h+=t.length),r>s&&(r+=t.length),h>e&&(h+=i.length),r>e&&(r+=i.length),this.selectionStart=h,this.selectionEnd=r}wrapSelection(t={}){var i=this.hasSelection;this.replace(t.before+this.selection+t.after),i?t.outside&&(this.selectionStart+=t.before.length,this.selectionEnd-=t.after.length):this.moveCaret(-t.after.length)}toggleComment(){var t=this.context.comments,i=this.getNode().parentNode.closest(".token.comment");if(i){var s,e=this.getOffset(i),h=i.textContent;t.singleline&&0===h.indexOf(t.singleline)?(this.set(this.value.slice(e+t.singleline.length,s=e+h.length),{start:e,end:s}),this.moveCaret(-t.singleline.length)):this.set(this.value.slice(e+(t=t.multiline||t)[0].length,s=e+h.length-t[1].length),{start:e,end:s+t[1].length})}else this.hasSelection?this.wrapSelection({before:(t=t.multiline||t)[0],after:t[1]}):(t=t.singleline?[t.singleline,""]:t.multiline||t,s=this.afterCaretIndex("\n"),this.wrap({before:t[0],after:t[1],start:this.beforeCaretIndex("\n")+1,end:s<0?this.value.length:s}))}duplicateContent(){var t=this.beforeCaret("\n"),i=this.afterCaret("\n");this.insert(t+this.selection+i,{index:this.selectionStart-t.length})}delete(t,{forward:i,pos:s}={}){var e=t=t>0?t:(t+"").length;if(s){var h=this.selectionStart;this.selectionStart=s,this.selectionEnd=s+this.selectionEnd-h}for(;e--;)document.execCommand(i?"forwardDelete":"delete");s&&(this.selectionStart=h-t,this.selectionEnd=this.selectionEnd-s+this.selectionStart)}getNode(t=this.selectionStart,i=this.code){for(var s,e=0,h=document.createTreeWalker(i,NodeFilter.SHOWthis._TEXT);s=h.nextNode();)if((e+=s.data.length)>=t)return s;return null}getOffset(t){var i=document.createRange();return i.selectNodeContents(this.code),i.setEnd(t,0),i.toString().length}static match(t,i,s,e=0){"number"==typeof s&&3===arguments.length&&(e=s,s=void 0);var h=t.match(i);return e<0&&(e=h.length+e),h?h[e]:s}static checkShortcut(t,i){return t.trim().split(/\s*\+\s*/).every(t=>{switch(t){case"Cmd":return i[this.superKey];case"Ctrl":return i.ctrlKey;case"Shift":return i.shiftKey;case"Alt":return i.altKey;default:return i.key===t}})}static registerLanguage(t,i,s=this._.languages.DEFAULT){return Object.setPrototypeOf(i,s),this._.languages[t]=i}static matchIndentation(t,i){t=t.replace(/\r?\n/g,"$&"+i)}static adjustIndentation(t,{indentation:i,relative:s=!0,indent:e=this._.DEFAULTthis._INDENT}){if(!s){var h=t.match(this._.regexp.gm`^(${e})+`).sort()[0];h&&t.replace(this._.regexp.gm`^${h}`,"")}return i<0?t.replace(this._.regexp.gm`^${e}`,""):i>0?t.replace(/^/gm,e):void 0}},Object.assign(this._,{all:new WeakMap,DEFAULT_INDENT:"\t",CARET_INDICATOR:/(^|[^\\])\$(\d+)/g,snippets:{test:"Snippets work!"},pairs:{"(":")","[":"]","{":"}",'"':'"',"'":"'","`":"`"},shortcuts:{"Cmd + /":function(){this.toggleComment()},"Ctrl + Shift + D":function(){this.duplicateContent()}},languages:{DEFAULT:{comments:{multiline:["/*","*/"]},snippets:{}}},aliases:(()=>{var t={},i=new WeakMap(Object.entries(Prism.languages).map(t=>t.reverse()).reverse());for(var s in Prism.languages){var e=Prism.languages[s];"function"!=typeof e&&(t[s]=i.get(e))}return t})(),regexp:(()=>{var t=(t,i,...s)=>{var e=i[0]+s.map((t,s)=>t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")+i[s+1]).join("");return RegExp(e,t)},i={};return new Proxy(t.bind(this._,""),{get:(s,e)=>s[e]||i[e]||(i[e]=t.bind(this._,e))})})()}),this._.supportsExecCommand=!!document.execCommand&&void 0,Array.from(this.context.querySelectorAll(":not(.prism-live) > textarea.prism-live, :not(.prism-live) > pre.prism-live")).forEach(t=>{this._.all.get(t)||new this._(t)})}}function o(t){return null!==t&&"string"==typeof t&&!!t.startsWith("@")&&t.length>=1}function l(t,i,s){return!!o(i)&&void 0===s[e(t)]&&"view-model"!==t}function u(t,i){switch(t){case"attr":return function(t,s){this.setAttribute(t,i.getChainValue(s))};default:return function(t,s){this[t]=i.getChainValue(s)}}}function c(t,i){this.createBoundedModel=function(s,e){return e=h(e),i.onChange(e,()=>{t(s,e)}),t(s,e),{updateModel:t=>{i.setChainValue(e,t)}}}}function d(t,i,s){let{properties:e,hasViewModel:r,instanceName:n}=i;t.dispatchEvent(new CustomEvent("getModelEvent",{bubbles:!0,composed:!0,detail:{callback:(i,a)=>{if(i&&console.error(i),r){let i=t.getAttribute("view-model");i=h(i);let s=a.getChainValue(i);for(let t in s)e[t]||(e[t]={value:i?i+"."+t:t,type:"prop"})}let o={};for(let i in e){let s="attr"===e[i].type?t:this,h=new c(u.call(s,e[i].type,a).bind(s),a);o[i]=h.createBoundedModel(i,e[i].value)}if(void 0!==this[n])throw new Error(`BindModel decorator received a wrong argument as instance name: [${n}]`);this[n]={updateModel:(t,i)=>{e[t]&&o[t].updateModel(i)}},s()}}}))}var p=function(t,i,s,e){var h,r=arguments.length,n=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,i,s,e);else for(var a=t.length-1;a>=0;a--)(h=t[a])&&(n=(r<3?h(n):r>3?h(i,s,n):h(i,s))||n);return r>3&&n&&Object.defineProperty(i,s,n),n};const v=class{constructor(t){i(this,t),this.value="",this.language="markup",this._updateViewModel=t=>{this.modelHandler.updateModel("value",t.target.value)}}componentDidLoad(){new a(this._hostElement.shadowRoot.querySelector(".live-editor-container"))}render(){return s("div",{class:"live-editor-container"},s("textarea",{value:this.value,class:"prism-live language-"+this.language,onKeyUp:this._updateViewModel,onChange:this._updateViewModel}))}get _hostElement(){return t(this)}};p([r(),(i,s)=>{let{componentWillLoad:e}=i;i.componentWillLoad=function(){let i=this.__proto__,h=this,r=t(h),n=t=>t?new Promise(i=>{t.then(()=>{i(e&&e.call(h))})}):e&&e.call(h);if(r.isConnected){let t=Object.keys(i),e=r.getAttributeNames(),a={};for(let i=0;i<t.length;i++){let s=t[i];o(this[s])&&(a[s]={value:this[s],type:"prop"})}for(let t=0;t<e.length;t++){let i=e[t],s=r.getAttribute(i);l(i,s,a)&&(a[i]={value:s,type:"attr"})}let u=r.hasAttribute("view-model");if(Object.keys(a).length>0||u)return n(new Promise(t=>{d.call(h,r,{properties:a,hasViewModel:u,instanceName:s},t)}))}return n()}}],v.prototype,"modelHandler",void 0),p([n({description:"This property provides the source code to be edited and can be updated to a defined model.",isMandatory:!1,propertyType:"string"})],v.prototype,"value",void 0),p([n({description:"This property is setting the language of the code snippet. Supported values are: markup (xml, html), javascript, css",isMandatory:!1,propertyType:"string",defaultValue:"markup"})],v.prototype,"language",void 0);export{v as psk_live_code}