import{r as t,h as s,g as e,d as i}from"./p-56172067.js";import{A as o}from"./p-4b40d1f1.js";import{m as r,a as n,s as a,b as c,c as h,d as l,h as u,e as d,f as p,g as f,l as g}from"./p-1728ead7.js";import"./p-67893e64.js";import"./p-ba942fe7.js";import{T as y}from"./p-afd0098a.js";import{C as m}from"./p-00597ad5.js";import{s as b,a as v,b as k,g as w,i as P,c as j}from"./p-2bd4c60e.js";const O=class{constructor(s){t(this,s),this.shouldBeRendered=!1}render(){if(this.shouldBeRendered)return s("div",{class:"loader-container"},s("div",{class:"sk-fading-circle"},s("div",{class:"sk-circle1 sk-circle"}),s("div",{class:"sk-circle2 sk-circle"}),s("div",{class:"sk-circle3 sk-circle"}),s("div",{class:"sk-circle4 sk-circle"}),s("div",{class:"sk-circle5 sk-circle"}),s("div",{class:"sk-circle6 sk-circle"}),s("div",{class:"sk-circle7 sk-circle"}),s("div",{class:"sk-circle8 sk-circle"}),s("div",{class:"sk-circle9 sk-circle"}),s("div",{class:"sk-circle10 sk-circle"}),s("div",{class:"sk-circle11 sk-circle"}),s("div",{class:"sk-circle12 sk-circle"})))}static get watchers(){return{shouldBeRendered:["render"]}}};!function(t,s,e,i){var o,r=arguments.length,n=r<3?s:null===i?i=Object.getOwnPropertyDescriptor(s,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,s,e,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(s,e,n):o(s,e))||n);r>3&&n&&Object.defineProperty(s,e,n)}([m(),y({description:"This is the property that gives the state of the loader, if it is displayed or not. The possible values are true or false.",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],O.prototype,"shouldBeRendered",void 0);const T=class{constructor(s){t(this,s),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const s=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!s)return this.previousMatch=this.match,this.match=r(t.pathname,{path:this.url,exact:this.exact,strict:!0})}async loadCompleted(){let t={};this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!n(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t)}async componentDidUpdate(){await this.loadCompleted()}async componentDidLoad(){await this.loadCompleted()}render(){if(!this.match||!this.history)return null;const t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?s(this.component,Object.assign({},t)):void 0}get el(){return e(this)}static get watchers(){return{location:["computeMatch"]}}};o.injectProps(T,["location","history","historyType","routeViewsUpdated"]),T.style="stencil-route.inactive{display:none}";const L=t=>"STENCIL-ROUTE"===t.tagName,S=class{constructor(s){t(this,s),this.group=((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[],this.queue=i(this,"queue")}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}async regenerateSubscribers(t){if(null==t)return;let s=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(L).map((e,i)=>{const o=r(t.pathname,{path:e.url,exact:e.exact,strict:!0});return o&&-1===s&&(s=i),{el:e,match:o}}),-1===s)return;if(this.activeIndex===s)return void(this.subscribers[s].el.match=this.subscribers[s].match);this.activeIndex=s;const e=this.subscribers[this.activeIndex];this.scrollTopOffset&&(e.el.scrollTopOffset=this.scrollTopOffset),e.el.group=this.group,e.el.match=e.match,e.el.componentUpdated=t=>{this.queue.write(()=>{this.subscribers.forEach((t,s)=>{if(t.el.componentUpdated=void 0,s===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"})}),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))}}render(){return s("slot",null)}get el(){return e(this)}static get watchers(){return{location:["regenerateSubscribers"]}}};o.injectProps(S,["location","routeViewsUpdated"]);const U=(t,...s)=>{t||console.warn(...s)},H=()=>{let t,s=[];return{setPrompt:s=>(U(null==t,"A history supports only one prompt at a time"),t=s,()=>{t===s&&(t=null)}),confirmTransitionTo:(s,e,i,o)=>{if(null!=t){const r="function"==typeof t?t(s,e):t;"string"==typeof r?"function"==typeof i?i(r,o):(U(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),o(!0)):o(!1!==r)}else o(!0)},appendListener:t=>{let e=!0;const i=(...s)=>{e&&t(...s)};return s.push(i),()=>{e=!1,s=s.filter(t=>t!==i)}},notifyListeners:(...t)=>{s.forEach(s=>s(...t))}}},R=(t,s="scrollPositions")=>{let e=new Map;const i=(s,i)=>{if(e.set(s,i),b(t,"sessionStorage")){const s=[];e.forEach((t,e)=>{s.push([e,t])}),t.sessionStorage.setItem("scrollPositions",JSON.stringify(s))}};if(b(t,"sessionStorage")){const i=t.sessionStorage.getItem(s);e=i?new Map(JSON.parse(i)):e}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:i,get:t=>e.get(t),has:t=>e.has(t),capture:s=>{i(s,[t.scrollX,t.scrollY])}}},E={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+f(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:f,decodePath:c},slash:{encodePath:c,decodePath:c}},A=(t,s)=>{const e=0==t.pathname.indexOf(s)?"/"+t.pathname.slice(s.length):t.pathname;return Object.assign({},t,{pathname:e})},C={browser:(t,s={})=>{let e=!1;const i=t.history,o=t.location,r=t.navigator,n=v(t),f=!k(r),g=R(t),y=null!=s.forceRefresh&&s.forceRefresh,m=null!=s.getUserConfirmation?s.getUserConfirmation:w,b=null!=s.keyLength?s.keyLength:6,j=s.basename?a(c(s.basename)):"",O=()=>{try{return t.history.state||{}}catch(t){return{}}},T=t=>{t=t||{};const{key:s,state:e}=t,{pathname:i,search:r,hash:n}=o;let a=i+r+n;return U(!j||u(a,j),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+j+'".'),j&&(a=d(a,j)),h(a,e,s||l(b))},L=H(),S=t=>{g.capture(q.location.key),Object.assign(q,t),q.location.scrollPosition=g.get(q.location.key),q.length=i.length,L.notifyListeners(q.location,q.action)},E=t=>{P(r,t)||C(T(t.state))},A=()=>{C(T(O()))},C=t=>{if(e)e=!1,S();else{const s="POP";L.confirmTransitionTo(t,s,m,e=>{e?S({action:s,location:t}):M(t)})}},M=t=>{let s=x.indexOf(q.location.key),i=x.indexOf(t.key);-1===s&&(s=0),-1===i&&(i=0);const o=s-i;o&&(e=!0,N(o))},_=T(O());let x=[_.key],B=0,V=!1;const Y=t=>j+p(t),N=t=>{i.go(t)},W=s=>{B+=s,1===B?(t.addEventListener("popstate",E),f&&t.addEventListener("hashchange",A)):0===B&&(t.removeEventListener("popstate",E),f&&t.removeEventListener("hashchange",A))},q={length:i.length,action:"POP",location:_,createHref:Y,push:(t,s)=>{U(!("object"==typeof t&&void 0!==t.state&&void 0!==s),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const e=h(t,s,l(b),q.location);L.confirmTransitionTo(e,"PUSH",m,t=>{if(!t)return;const s=Y(e),{key:r,state:a}=e;if(n)if(i.pushState({key:r,state:a},"",s),y)o.href=s;else{const t=x.indexOf(q.location.key),s=x.slice(0,-1===t?0:t+1);s.push(e.key),x=s,S({action:"PUSH",location:e})}else U(void 0===a,"Browser history cannot push state in browsers that do not support HTML5 history"),o.href=s})},replace:(t,s)=>{U(!("object"==typeof t&&void 0!==t.state&&void 0!==s),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const e=h(t,s,l(b),q.location);L.confirmTransitionTo(e,"REPLACE",m,t=>{if(!t)return;const s=Y(e),{key:r,state:a}=e;if(n)if(i.replaceState({key:r,state:a},"",s),y)o.replace(s);else{const t=x.indexOf(q.location.key);-1!==t&&(x[t]=e.key),S({action:"REPLACE",location:e})}else U(void 0===a,"Browser history cannot replace state in browsers that do not support HTML5 history"),o.replace(s)})},go:N,goBack:()=>N(-1),goForward:()=>N(1),block:(t="")=>{const s=L.setPrompt(t);return V||(W(1),V=!0),()=>(V&&(V=!1,W(-1)),s())},listen:t=>{const s=L.appendListener(t);return W(1),()=>{W(-1),s()}},win:t};return q},hash:(t,s={})=>{let e=!1,i=null,o=0,r=!1;const n=t.location,f=t.history,y=j(t.navigator),m=null!=s.keyLength?s.keyLength:6,{getUserConfirmation:b=w,hashType:v="slash"}=s,k=s.basename?a(c(s.basename)):"",{encodePath:P,decodePath:O}=E[v],T=()=>{const t=n.href,s=t.indexOf("#");return-1===s?"":t.substring(s+1)},L=t=>{const s=n.href.indexOf("#");n.replace(n.href.slice(0,s>=0?s:0)+"#"+t)},S=()=>{let t=O(T());return U(!k||u(t,k),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+k+'".'),k&&(t=d(t,k)),h(t,void 0,l(m))},R=H(),A=t=>{Object.assign(q,t),q.length=f.length,R.notifyListeners(q.location,q.action)},C=()=>{const t=T(),s=P(t);if(t!==s)L(s);else{const t=S(),s=q.location;if(!e&&g(s,t))return;if(i===p(t))return;i=null,M(t)}},M=t=>{if(e)e=!1,A();else{const s="POP";R.confirmTransitionTo(t,s,b,e=>{e?A({action:s,location:t}):_(t)})}},_=t=>{let s=Y.lastIndexOf(p(q.location)),i=Y.lastIndexOf(p(t));-1===s&&(s=0),-1===i&&(i=0);const o=s-i;o&&(e=!0,N(o))},x=T(),B=P(x);x!==B&&L(B);const V=S();let Y=[p(V)];const N=t=>{U(y,"Hash history go(n) causes a full page reload in this browser"),f.go(t)},W=(t,s)=>{o+=s,1===o?t.addEventListener("hashchange",C):0===o&&t.removeEventListener("hashchange",C)},q={length:f.length,action:"POP",location:V,createHref:t=>"#"+P(k+p(t)),push:(t,s)=>{U(void 0===s,"Hash history cannot push state; it is ignored");const e=h(t,void 0,l(m),q.location);R.confirmTransitionTo(e,"PUSH",b,t=>{if(!t)return;const s=p(e),o=P(k+s);if(T()!==o){i=s,(t=>{n.hash=t})(o);const t=Y.lastIndexOf(p(q.location)),r=Y.slice(0,-1===t?0:t+1);r.push(s),Y=r,A({action:"PUSH",location:e})}else U(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),A()})},replace:(t,s)=>{U(void 0===s,"Hash history cannot replace state; it is ignored");const e=h(t,void 0,l(m),q.location);R.confirmTransitionTo(e,"REPLACE",b,t=>{if(!t)return;const s=p(e),o=P(k+s);T()!==o&&(i=s,L(o));const r=Y.indexOf(p(q.location));-1!==r&&(Y[r]=s),A({action:"REPLACE",location:e})})},go:N,goBack:()=>N(-1),goForward:()=>N(1),block:(s="")=>{const e=R.setPrompt(s);return r||(W(t,1),r=!0),()=>(r&&(r=!1,W(t,-1)),e())},listen:s=>{const e=R.appendListener(s);return W(t,1),()=>{W(t,-1),e()}},win:t};return q}},M=class{constructor(s){t(this,s),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const s=this.history.win.document.getElementById(t.scrollToId);if(s)return s.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=i(this,"isServer"),this.queue=i(this,"queue")}componentWillLoad(){this.history=C[this.historyType](this.el.ownerDocument.defaultView),this.history.listen(t=>{t=A(t,this.root),this.location=t}),this.location=A(this.history.location,this.root)}scrollTo(t){const s=this.history;if(null!=t&&!this.isServer&&s)return"POP"===s.action&&Array.isArray(s.location.scrollPosition)?this.queue.write(()=>{s&&s.location&&Array.isArray(s.location.scrollPosition)&&s.win.scrollTo(s.location.scrollPosition[0],s.location.scrollPosition[1])}):this.queue.write(()=>{s.win.scrollTo(0,t)})}render(){if(this.location&&this.history)return s(o.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},s("slot",null))}get el(){return e(this)}},_=class{constructor(s){t(this,s)}componentWillLoad(){if(this.history&&this.root&&this.url)return this.history.replace((s=this.root,"/"==(t=this.url).charAt(0)&&"/"==s.charAt(s.length-1)?s.slice(0,s.length-1)+t:s+t));var t,s}get el(){return e(this)}};o.injectProps(_,["history","root"]);export{O as psk_ui_loader,T as stencil_route,S as stencil_route_switch,M as stencil_router,_ as stencil_router_redirect}