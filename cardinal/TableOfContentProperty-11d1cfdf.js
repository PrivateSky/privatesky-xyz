import { g as getElement } from './index-14684944.js';
import { D as DATA_DEFINED_PROPS, a as DEFINED_PROPERTIES } from './constants-1669062f.js';
import { n as normalizeCamelCaseToDashed, c as createCustomEvent } from './utilFunctions-c3c73b71.js';

function TableOfContentProperty(opts) {
    return function (proto, propertyKey) {
        const { connectedCallback, render, componentWillLoad, componentDidLoad } = proto;
        proto.componentWillLoad = function () {
            let self = this;
            let thisElement = getElement(self);
            if (!thisElement.hasAttribute(DATA_DEFINED_PROPS)) {
                return componentWillLoad && componentWillLoad.call(self);
            }
        };
        proto.componentDidLoad = function () {
            let self = this;
            let thisElement = getElement(self);
            if (!thisElement.hasAttribute(DATA_DEFINED_PROPS)) {
                return componentDidLoad && componentDidLoad.call(self);
            }
        };
        proto.connectedCallback = function () {
            let self = this;
            let thisElement = getElement(self);
            let propertyName = normalizeCamelCaseToDashed(String(propertyKey));
            if (thisElement.hasAttribute(DATA_DEFINED_PROPS)) {
                if (!self.componentDefinitions) {
                    self.componentDefinitions = {
                        definedProperties: [
                            Object.assign(Object.assign({}, opts), { propertyName: propertyName })
                        ]
                    };
                    return connectedCallback && connectedCallback.call(self);
                }
                let componentDefinitions = self.componentDefinitions;
                const newProperty = Object.assign(Object.assign({}, opts), { propertyName: propertyName });
                if (componentDefinitions &&
                    componentDefinitions.hasOwnProperty(DEFINED_PROPERTIES)) {
                    let tempProps = [
                        ...componentDefinitions[DEFINED_PROPERTIES]
                    ];
                    tempProps.push(newProperty);
                    componentDefinitions[DEFINED_PROPERTIES] = [...tempProps];
                }
                else {
                    componentDefinitions[DEFINED_PROPERTIES] = [newProperty];
                }
                self.componentDefinitions = Object.assign({}, componentDefinitions);
            }
            return connectedCallback && connectedCallback.call(self);
        };
        proto.render = function () {
            let self = this;
            if (!self.componentDefinitions ||
                !(self.componentDefinitions &&
                    self.componentDefinitions[DEFINED_PROPERTIES])) {
                return render && render.call(self);
            }
            let definedProps = self.componentDefinitions[DEFINED_PROPERTIES];
            if (definedProps) {
                definedProps = definedProps.reverse();
            }
            createCustomEvent("psk-send-props", {
                composed: true,
                bubbles: true,
                cancelable: true,
                detail: definedProps
            }, true);
        };
    };
}

export { TableOfContentProperty as T };
