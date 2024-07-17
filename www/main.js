"use strict";
(() => {
  // src/main.ts
  console.log("Hello World!");
  var SectorState = /* @__PURE__ */ ((SectorState2) => {
    SectorState2["Used"] = "User";
    SectorState2["Reading"] = "Reading";
    SectorState2["Bad"] = "Bad";
    SectorState2["Unused"] = "Unused";
    SectorState2["Writing"] = "Writing";
    SectorState2["Unmoved"] = "Unmoved";
    return SectorState2;
  })(SectorState || {});
  var defaultOptions = {
    hdSize: 10,
    hdSpeed: 7,
    theme: "Dos" /* Dos */,
    sound: true,
    damageLevel: 3
  };
})();
//# sourceMappingURL=main.js.map
