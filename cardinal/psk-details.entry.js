import { r as registerInstance, h, f as Host } from './index-14684944.js';
import './constants-1669062f.js';
import './utilFunctions-c3c73b71.js';
import { T as TableOfContentProperty } from './TableOfContentProperty-11d1cfdf.js';
import { C as CustomTheme } from './CustomTheme-2f9444f1.js';

const pskDetailsCss = ":host{cursor:pointer}.summary{display:flex;align-items:center}.summary .icon{margin-left:0;padding-left:0}.content{margin-bottom:1rem}";

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
        this.summary = '';
        this.opened = false;
    }
    detailToggle(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.opened = !this.opened;
    }
    render() {
        return (h(Host, { opened: this.opened }, h("div", { class: 'summary', tabindex: 0, onClick: e => this.detailToggle(e) }, h("psk-icon", { icon: this.opened ? 'chevron-down' : 'chevron-right' }), h("span", null, this.summary)), h("div", { class: 'content', hidden: !this.opened }, h("slot", null))));
    }
};
__decorate([
    CustomTheme(),
    TableOfContentProperty({
        description: `This property is used as title / summary.`,
        isMandatory: false,
        propertyType: `string`
    })
], PskDetails.prototype, "summary", void 0);
__decorate([
    TableOfContentProperty({
        description: `This property decides if the content of the component is visible / hidden.`,
        isMandatory: false,
        propertyType: `boolean`,
        defaultValue: `false`
    })
], PskDetails.prototype, "opened", void 0);
PskDetails.style = pskDetailsCss;

export { PskDetails as psk_details };
