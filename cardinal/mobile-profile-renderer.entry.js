import { r as registerInstance, h } from './index-14684944.js';
import './constants-53c76d9d.js';
import './utilFunctions-b2eac78a.js';
import { T as TableOfContentProperty } from './TableOfContentProperty-66120778.js';
import { C as CustomTheme } from './CustomTheme-a8c4b938.js';
import { B as BindModel } from './BindModel-c728ddd5.js';

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
const MobileProfileRenderer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "profile" }, h("div", { class: "card-body text-center" }, h("img", { src: this.userInfo.avatar, width: "48", height: "48", alt: "card image" }), h("span", null, this.userInfo.username))));
    }
};
__decorate([
    BindModel()
], MobileProfileRenderer.prototype, "modelHandler", void 0);
__decorate([
    CustomTheme(),
    TableOfContentProperty({
        description: `This property is the user information that needs to be rendered for the user.`,
        isMandatory: false,
        propertyType: `any`
    })
], MobileProfileRenderer.prototype, "userInfo", void 0);

export { MobileProfileRenderer as mobile_profile_renderer };
