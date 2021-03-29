import{S as e,M as n,a as t,P as o,b as a,T as i,D as r,c as s,d as l,e as c,f as u}from"./p-5b88ecac.js";import{c as f,d}from"./p-0c3518a5.js";function h(e,n,t){let o=null;for(;e;){if(e.matches(n)){o=e;break}if(t&&e.matches(t))break;e=e.parentElement}return o}function m(n,{key:t,value:o}){if(!e.includes(t))if(["innerHTML","innerText"].includes(t)&&console.warn(`Model property "${t}" can be short handed, try "${t.substr(5).toLowerCase()}" instead!\n`,"target element:",n),["data-tag","data-model"].includes(t)&&console.warn(`Model property "${t}" can be shorthanded, try "${t.substr(5)}" instead!\n`,"target model:",n.getAttribute("data-model")),function(e){return["value","innerText","innerHTML"].includes(e)}(t=function(e){switch(e){case"model":return"data-model";case"tag":return"data-tag";case"text":return"innerText";case"html":return"innerHTML";default:return e}}(t)))n[t]=o;else if("class"!==t)"boolean"!=typeof o?"string"!=typeof o?"object"!=typeof o||(n[t]=o):n.setAttribute(t,o):o?n.setAttribute(t,""):n.removeAttribute(t);else{if(""===o)return void(n.className="");if("string"==typeof o)return void n.classList.add(o);if("object"==typeof o){for(const[e,t]of Object.entries(o))t?n.classList.add(e):n.classList.remove(e);return}}}function b(e,n){return"input"===e.tagName.toLowerCase()&&"checkbox"===e.getAttribute("type")&&"checked"===n||"value"===n}function p(e,i,r=n,s=null){t.includes(e.tagName.toLowerCase())||e.tagName.startsWith(o.toUpperCase())||Array.from(e.attributes).forEach((t=>{const o=t.nodeName;let l=t.nodeValue;o!==a&&l.startsWith(r)&&(l=l.slice(1),s&&(l=[s,l].filter(String).join(".")),m(e,{key:o,value:i.getChainValue(l)}),r===n&&b(e,o)&&v(e,i,l),i.onChange(l,(()=>{m(e,{key:o,value:i.getChainValue(l)})})),i.hasExpression(l)&&(m(e,{key:o,value:i.evaluateExpression(l)}),r===n&&b(e,o)&&v(e,i,l),i.onChangeExpressionChain(l,(()=>{m(e,{key:o,value:i.evaluateExpression(l)})}))))}))}function y(e){e.nodeType===Node.ELEMENT_NODE&&(e.removeAttribute("slot"),e.removeAttribute("hidden"))}function v(e,n,t){const o=e.tagName.toLowerCase();["input","textarea"].includes(o)?e.addEventListener("input",(a=>{const i=a.target;"input"===o&&"checkbox"===e.getAttribute("type")?n.setChainValue(t,i.checked):n.setChainValue(t,i.value)})):"select"===o&&e.addEventListener("change",(e=>{n.setChainValue(t,e.target.value)}))}function x(e,n,t){if(!n.getChainValue(t))return;const o="input"===e.tagName.toLowerCase()&&"checkbox"===e.getAttribute("type")?"checked":"value";v(e,n,`${t}.${o}`)}function g(e,n){return Array.from(e.attributes).some((e=>e.nodeName===n))}function M(e,n){return e.filter((e=>e.getAttribute("slot")===n))}function $(e,n){return M(e,n).map((e=>e.outerHTML)).join("")}function k(e){for(;e.children.length>0;)e.children[0].remove()}function A(e){for(;e.childNodes.length>0;)e.childNodes[0].remove()}function T(e){const t=e.getAttribute(a);if(!t)return"";if(!t.startsWith(n)){const o=e.tagName.toLowerCase();return console.error([`Invalid chain found for ${o} (chain: "${t}")!`,`A valid chain must start with "${n}".`].join("\n")),""}return t}async function j(e,{chain:n,model:t,translationModel:o},a={}){return a||(a={}),t&&Array.from(e.childNodes).forEach((e=>{S.bindElement(e,Object.assign({model:t,translationModel:o,chainPrefix:n?n.slice(1):null,recursive:!0,enableTranslations:!0},a))})),{model:t,translationModel:o}}function P(e,n,t){const o=n.getChainValue(t);if(o){for(const[n,t]of Object.entries(o))m(e,{key:n,value:t});if(!0===o._saveElement){for(const n in e)"function"==typeof e[n]&&(e[n]=e[n].bind(e));o.getElement||n.setChainValue(t,Object.assign(Object.assign({},o),{getElement:()=>e}))}}if(n.hasExpression(t)){const o=n.evaluateExpression(t);for(const[n,t]of Object.entries(o))m(e,{key:n,value:t})}}function w(e){return e.nodeType===Node.ELEMENT_NODE}function O(e){return e.nodeType===Node.TEXT_NODE&&e.nodeValue&&e.nodeValue.trim()}function E(e,o,a,r=null){if(t.includes(e.nodeName.toLowerCase()))return;if(e.nodeType!==Node.TEXT_NODE||!e.nodeValue||!e.nodeValue.trim())return;const s=[...e.nodeValue.matchAll(/\{\{\s*([^\s}}]+)\s*\}\}/g)];if(!s.length)return;const l=s.map((e=>({expression:e[0],chainWithPrefix:e[1]}))).filter((({chainWithPrefix:e})=>e.startsWith(n)||e.startsWith(i))).map((e=>{let{chainWithPrefix:t}=e;const s=t.startsWith(i);let l=e.chainWithPrefix.slice(1);!s&&r&&(l=[r,l].filter(String).join("."),t=`${n}${l}`);const c=s?a:o;return Object.assign(Object.assign({},e),{chain:l,isTranslation:s,isModel:!s,isModelExpression:c.hasExpression(l),evaluateModelExpression:()=>c.evaluateExpression(l),model:c,getChainValue:()=>{let e=c.getChainValue(l);if(s&&void 0===e){const{language:n}=window.WebCardinal,{pathname:t}=window.location;console.warn(`No translations found for language ${n}, page ${t} and key ${l}`),e=l}return e}})}));if(!l.length)return;const c=e.nodeValue,u=()=>{let n=c;l.forEach((({expression:e,getChainValue:t,isModelExpression:o,evaluateModelExpression:a})=>{let i=t();["number","boolean"].includes(typeof i)&&(i=i.toString()),!i&&o&&(i=o?a():""),n=n.replace(e,i||"")})),e.nodeValue=n};u(),l.filter((e=>e.isModel)).forEach((({model:e,chain:n,isModelExpression:t})=>{e.onChange(n,(()=>{u()})),t&&e.onChangeExpressionChain(n,(()=>{u()}))}))}const S={bindElement:(e,h={model:null,translationModel:null})=>{const{model:m,translationModel:b,chainPrefix:v,enableTranslations:$=!1,recursive:k=!1}=h;if(m){if(O(e))E(e,m,b,v);else if(w(e)){const T=e;if(t.includes(T.tagName.toLowerCase()))return;const j=g(T,r),N=g(T,s);if(j&&N)console.error("Cannot use both data-if and data-for attributes on the same element",T);else if(j)!function(e,{model:t,translationModel:o,chainPrefix:a,enableTranslations:s=!1}={model:null,translationModel:null}){let u=e.getAttribute(r);if(!u.startsWith(n))return void console.warn(`Attribute "${r}" doesn't start with the chain prefix!`);u=u.slice(1);const f=a?[a,u].filter(String).join("."):u,d=Array.from(e.children);let h,m=M(d,l);const b=M(d,c);m.length||b.length||(m=Array.from(e.childNodes)),A(e);const v=async n=>{let i;if(n instanceof Promise)try{i=await n}catch(e){console.error("data-if condition promise failed",e),i=!1}else i=!!n;const r=h!==i;h=i,r&&(()=>{const n=h?m:b;A(e),n.forEach((n=>{const i=n.cloneNode(!0);y(i),e.appendChild(i),S.bindElement(i,{model:t,translationModel:o,chainPrefix:a,enableTranslations:s,recursive:!0})}))})()};v(t.getChainValue(f)),p(e,t,n,a),s&&p(e,o,i,a),t.onChange(f,(()=>{v(t.getChainValue(f))})),t.hasExpression(f)&&(v(t.evaluateExpression(f)),t.onChangeExpressionChain(f,(()=>{v(t.evaluateExpression(f))})))}(T,h);else if(N)!function(e,{model:t,translationModel:o,chainPrefix:a,enableTranslations:r=!1}={model:null,translationModel:null}){let l=e.getAttribute(s);if(!l.startsWith(n))return void console.warn(`Attribute "${s}" doesn't start with the chain prefix!`);l=l.slice(1);const c=a?[a,l].filter(String).join("."):l,h=t.getChainValue(c);if(!Array.isArray(h))return void console.error(`Attribute "${s}" must be an array in the model!`);const m=[],b=[];for(;e.childNodes.length>0;){const n=e.childNodes[0];w(n)&&n.getAttribute("slot")===u?m.push(n):b.push(n),n.remove()}let v=[];const x=()=>{if(!h.length)return A(e),void m.forEach((n=>{const i=n.cloneNode(!0);y(i),e.appendChild(i),S.bindElement(i,{model:t,translationModel:o,chainPrefix:a,enableTranslations:r,recursive:!0})}));h.forEach(((n,a)=>{const i=[];b.forEach((e=>{const n=e.cloneNode(!0),s=[c,a].filter(String).join(".");S.bindElement(n,{model:t,translationModel:o,chainPrefix:s,enableTranslations:r,recursive:!0}),i.push(n)})),i.forEach(v[a]?(e,n)=>{const t=document.createElement("div");t.appendChild(e);const o=document.createElement("div");o.appendChild(v[a][n].cloneNode(!0));const i=f(t),r=f(o);d(i,r,v[a][n])}:n=>{e.appendChild(n)}),v[a]=i}))},g=n=>{Array.isArray(n)||(console.error(`Attribute "${s}" must be an array in the model!`),n=[]),n=n||[],(0===h.length&&0!==n.length||0!==h.length&&0===n.length)&&(A(e),v=[]),x()};x(),p(e,t,n,a),r&&p(e,o,i,a),t.onChange(c,(()=>{g(t.getChainValue(c))})),t.hasExpression(c)&&t.onChangeExpressionChain(c,(()=>{g(t.evaluateExpression(c))}))}(T,h);else{if(T.getAttribute(a)){let e=T.getAttribute(a);if(e.startsWith(n)){e=e.slice(1);const n=v?[v,e].filter(String).join("."):e;P(T,m,n),x(T,m,n),m.onChange(n,(()=>P(T,m,n))),m.hasExpression(n)&&m.onChangeExpressionChain(n,(()=>P(T,m,n)))}else console.warn(`Invalid chain found! (chain: "${e}")!\n`,`A valid chain must start with "${n}".\n`,"target element:",T)}T.tagName.startsWith(o.toUpperCase())||p(T,m,n,v),$&&p(T,b,i,v),Array.from(T.childNodes).filter(O).forEach((e=>{E(e,m,b,v)})),k&&Array.from(T.children).forEach((e=>{S.bindElement(e,h)}))}}}else{const n=w(e)?e.tagName.toLowerCase():"text node";console.warn(`No model found for: ${n}!`)}}};export{S as B,v as a,p as b,x as c,M as d,$ as e,k as f,h as g,A as h,g as i,T as j,j as k,y as r,m as s}