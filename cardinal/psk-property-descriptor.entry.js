import { r as registerInstance, h } from './index-14684944.js';
import './constants-1669062f.js';
import { b as normalizeElementId } from './utilFunctions-c3c73b71.js';

const PskPropertyDescriptor = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.title = "";
        this.decoratorProperties = [];
    }
    receivedPropertiesDescription(evt) {
        const payload = evt.detail;
        evt.stopImmediatePropagation();
        if (payload && payload.length > 0) {
            this.decoratorProperties = JSON.parse(JSON.stringify(payload));
        }
    }
    render() {
        let componentPropertiesDefinitions = this.decoratorProperties.map((prop) => {
            const cardSubtitle = `${prop.propertyName}${prop.isMandatory ? "" : "?"}: ${prop.propertyType} ${prop.isMandatory ? "(mandatory)" : "(optional)"}`;
            return (h("psk-chapter-wrapper", { title: prop.propertyName }, h("p", { class: "subtitle" }, h("i", null, cardSubtitle)), Array.isArray(prop.description)
                ? prop.description.map(line => h("p", { innerHTML: line }))
                : h("p", null, prop.description), prop.specialNote ? (h("p", null, h("b", null, "Note: ", prop.specialNote))) : null, prop.defaultValue ? (h("p", null, h("i", null, "Default value: ", prop.defaultValue))) : null));
        });
        return (h("psk-chapter", { title: this.title, id: normalizeElementId(this.title) }, componentPropertiesDefinitions));
    }
};

export { PskPropertyDescriptor as psk_property_descriptor };
