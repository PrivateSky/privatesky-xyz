import { r as registerInstance, h } from './index-14684944.js';
import './constants-1669062f.js';
import './utilFunctions-c3c73b71.js';
import { T as TableOfContentProperty } from './TableOfContentProperty-11d1cfdf.js';
import { C as CustomTheme } from './CustomTheme-2f9444f1.js';
import { B as BindModel } from './BindModel-f8ef25c0.js';

const pskButtonLinkCss = ":host>psk-link{padding:0.75rem 1rem;margin:0;border:none;border-radius:0;background-color:transparent}:host>psk-link .icon{padding:0;margin:0}:host>psk-link .icon,:host>psk-link div{color:#000000}[slot='footer'] psk-link{text-align:center}[slot='options'] psk-link{padding:0.25rem 1rem;width:100%}";

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
const PskButtonLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("psk-link", { page: this.page, class: 'button-link' }, this.icon ? h("psk-icon", { icon: this.icon }) : null, this.name ? h("div", null, this.name) : h("slot", null)));
    }
};
__decorate([
    CustomTheme(),
    BindModel()
], PskButtonLink.prototype, "modelHandler", void 0);
__decorate([
    TableOfContentProperty({
        description: `This property is passed to psk-link.`,
        isMandatory: false,
        propertyType: `string`
    })
], PskButtonLink.prototype, "page", void 0);
__decorate([
    TableOfContentProperty({
        description: [
            `This property is the label for this component.`,
            `If this property is not specified, you must provide a slot as content for the label of this component`
        ],
        isMandatory: false,
        propertyType: `string`
    })
], PskButtonLink.prototype, "name", void 0);
__decorate([
    TableOfContentProperty({
        description: `This property describes the icon specified for psk-icon.`,
        isMandatory: false,
        propertyType: `string`
    })
], PskButtonLink.prototype, "icon", void 0);
PskButtonLink.style = pskButtonLinkCss;

export { PskButtonLink as psk_button_link };
