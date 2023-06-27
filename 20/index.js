import template from "lodash.template";

var compiled = template("hello <%= user %>!");
console.log(compiled({ user: "ViPro" }));
