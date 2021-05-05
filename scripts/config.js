const { setSkin, setConfig, getConfig, addHook } = WebCardinal.preload;
const { define } = WebCardinal.components;

setConfig(
  (() => {
    const config = getConfig();
    config.translations = false;
    config.logLevel = "none";
    return config;
  })()
);

addHook("beforePageLoads", "webcardinal-skins", () => {
  setSkin("advanced");
  WebCardinal.state.translations = true;
});

addHook("afterPageLoads", "webcardinal-skins", () => {
  setSkin("default");
  WebCardinal.state.translations = false;
});

addHook("whenPageClose", "webcardinal-skins", () => {
  console.log("Skins page was in your past!");
});

addHook("beforePageLoads", "webcardinal-cheatsheet", () => {
  console.log("Hello Cheatsheet!");
});

addHook("afterAppLoads", () => {
  const preferencesElement = Object.assign(
    document.createElement("webc-xyz-preferences"),
    { controller: "webcardinal/PreferencesController" }
  );
  preferencesElement.attachShadow({ mode: "open" });
  const routerElement = WebCardinal.root.querySelector("webc-app-router");
  routerElement.append(preferencesElement);
});

define("webc-xyz-cheatsheet");
define("webc-xyz-preferences");
define("webc-xyz-slider");
