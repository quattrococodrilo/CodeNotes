"use strict";
exports.__esModule = true;
var Creators_1 = require("./Creators");
var productTypes = {
    'student': Creators_1.StudentsCreator,
    'admin': Creators_1.AdminCreator
};
var client = function (productType, config) {
    var creator = productTypes[productType];
    return new creator().factoryMethod(config);
};
var a = client("admin", {
    name: "Fernando Cruz",
    enrollment: "1313",
    area: "SIT",
    job: "Chief"
});
console.log(a.info());
var s = client("student", {
    name: "Jaime Camil",
    enrollment: "486453",
    career: "IMA",
    grade: 6,
    group: "G"
});
console.log(s.info());
