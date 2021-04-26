const { setSkin, setConfig, getConfig, addHook } = WebCardinal.preload;
// WebCardinal.components

setConfig(
  (() => {
    const config = getConfig();
    config.translations = false;
    return config;
  })()
);

addHook("webcardinal-skins", "beforePageLoads", () => {
    setSkin("advanced");
    WebCardinal.state.translations = true;
});

addHook("webcardinal-skins", "afterPageLoads", () => {
    setSkin("default");
    WebCardinal.state.translations = false;
});

// addHook("webcardinal-skins", "whenPageClose", () => {
//     console.log('Skins page was in your past!')
// });
