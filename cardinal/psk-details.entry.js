import { r as registerInstance, h, f as Host } from './index-14684944.js';
import './constants-53c76d9d.js';
import './utilFunctions-b2eac78a.js';
import { T as TableOfContentProperty } from './TableOfContentProperty-66120778.js';
import { C as CustomTheme } from './CustomTheme-a8c4b938.js';

const pskDetailsDefaultCss = ":host{display:block}:host .title{display:flex;align-items:center;outline:none;cursor:pointer;border:2px solid transparent;background-color:transparent}:host .content{transform-origin:top;transition-duration:0.3s;transition-property:transform, padding, height, opacity;transition-timing-function:ease-in}:host .content,:host([opened='false']) .content{overflow:hidden;height:0;opacity:0;padding-top:0;padding-bottom:0;transform:translateY(-0.15em)}:host([opened]) .content,:host([opened='true']) .content{height:100%;opacity:1;padding-top:0.75em;padding-bottom:0.5em;transform:translateY(0)}:host([layout='default']) .title{border-radius:5px}:host([layout='default']) .title .icon{padding:0.45em 0.25em;transition:transform 0.2s ease-in-out}:host([layout='default']) .title .rotated .icon{transform:rotate(90deg)}:host([layout='collapsable']){overflow:hidden;border-radius:4px;transition:box-shadow 0.2s ease-in-out}:host([layout='collapsable']) .title{padding:0.65em}:host([layout='collapsable']) .content{padding-left:1em;padding-right:1em}:host([layout='collapsable']) .footer{text-align:center;cursor:pointer}:host([layout='collapsable']) .footer .icon{padding:0;font-size:75%;transition:transform 0.2s ease-in-out}:host([layout='collapsable']) .footer .rotated .icon{transform:rotate(180deg)}:host .title .icon,:host .title span{color:#5E7FE2}:host .title:hover{background-color:#5E7FE225}:host([layout='default']) .title:focus,:host([layout='default'][opened]) .title,:host([layout='default'][opened='true']) .title{border-color:#5E7FE2}:host([layout='collapsable'][opened]),:host([layout='collapsable'][opened='true']){box-shadow:0 0 5px rgba(0, 0, 0, .25)}:host([layout='collapsable']) .title{background-color:#5E7FE225}:host([layout='collapsable']) .title:focus{border-color:#5E7FE2}:host([layout='collapsable']) .content{background-color:#FFFFFF}:host([layout='collapsable']) .footer{background-color:#5E7FE2}:host([layout='collapsable']) .footer .icon{color:#FFFFFF}";

const pskDetailsLayoutCss = ":host{display:block}:host .title{display:flex;align-items:center;outline:none;cursor:pointer;border:2px solid transparent;background-color:transparent}:host .content{transform-origin:top;transition-duration:0.3s;transition-property:transform, padding, height, opacity;transition-timing-function:ease-in}:host .content,:host([opened='false']) .content{overflow:hidden;height:0;opacity:0;padding-top:0;padding-bottom:0;transform:translateY(-0.15em)}:host([opened]) .content,:host([opened='true']) .content{height:100%;opacity:1;padding-top:0.75em;padding-bottom:0.5em;transform:translateY(0)}:host([layout='default']) .title{border-radius:5px}:host([layout='default']) .title .icon{padding:0.45em 0.25em;transition:transform 0.2s ease-in-out}:host([layout='default']) .title .rotated .icon{transform:rotate(90deg)}:host([layout='collapsable']){overflow:hidden;border-radius:4px;transition:box-shadow 0.2s ease-in-out}:host([layout='collapsable']) .title{padding:0.65em}:host([layout='collapsable']) .content{padding-left:1em;padding-right:1em}:host([layout='collapsable']) .footer{text-align:center;cursor:pointer}:host([layout='collapsable']) .footer .icon{padding:0;font-size:75%;transition:transform 0.2s ease-in-out}:host([layout='collapsable']) .footer .rotated .icon{transform:rotate(180deg)}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const PskDetails = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.title = '';
        this.opened = false;
        this.layout = 'default';
    }
    toggleDetails(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.opened = !this.opened;
    }
    __renderDetails() {
        switch (this.layout) {
            case 'collapsable':
                return [
                    h("div", { class: 'title', tabindex: 0, onClick: e => this.toggleDetails(e) }, h("span", null, this.title)),
                    h("div", { class: 'content' }, h("slot", null)),
                    h("div", { class: 'footer', onClick: e => this.toggleDetails(e) }, h("psk-icon", { icon: 'chevron-down', class: { 'rotated': this.opened } }))
                ];
            default:
                this.layout = 'default';
                return [
                    h("div", { class: 'title', tabindex: 0, onClick: e => this.toggleDetails(e) }, h("psk-icon", { icon: 'chevron-right', class: { 'rotated': this.opened } }), h("span", null, this.title)),
                    h("div", { class: 'content' }, h("slot", null))
                ];
        }
    }
    render() {
        return h(Host, { opened: this.opened }, this.__renderDetails());
    }
};
__decorate([
    CustomTheme(),
    TableOfContentProperty({
        description: `This property is used as title or summary for collapsable section.`,
        isMandatory: true,
        propertyType: `string`
    })
], PskDetails.prototype, "title", void 0);
__decorate([
    TableOfContentProperty({
        description: `This property decides if the content of the component is visible / hidden.`,
        isMandatory: false,
        propertyType: `boolean`,
        defaultValue: `false`
    })
], PskDetails.prototype, "opened", void 0);
__decorate([
    TableOfContentProperty({
        description: [
            `There are two alternatives for this attribute: "collapsable" and "default". If other value is passed, fallback plan is also the default value.`,
            `According to this property, the appearance of the component is changing.`
        ],
        isMandatory: false,
        propertyType: `string`,
        defaultValue: `default`
    })
], PskDetails.prototype, "layout", void 0);
PskDetails.style = {
    default: pskDetailsDefaultCss,
    layout: pskDetailsLayoutCss
};

export { PskDetails as psk_details };
