"use strict";

const noExportDefault = require("./rules/no-export-default");

// import all rules in lib/rules
module.exports.rules = {
  "no-export-default": noExportDefault,
};
