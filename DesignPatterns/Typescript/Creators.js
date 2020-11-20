"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AdminCreator = exports.StudentsCreator = exports.Creator = void 0;
var Products_1 = require("./Products");
var Creator = (function () {
    function Creator() {
    }
    Creator.prototype.someOperation = function () {
        return 'This a creation!';
    };
    return Creator;
}());
exports.Creator = Creator;
var StudentsCreator = (function (_super) {
    __extends(StudentsCreator, _super);
    function StudentsCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StudentsCreator.prototype.factoryMethod = function (config) {
        var name = config.name, enrollment = config.enrollment, career = config.career, grade = config.grade, group = config.group;
        return new Products_1.Student(name, enrollment, career, grade, group);
    };
    return StudentsCreator;
}(Creator));
exports.StudentsCreator = StudentsCreator;
var AdminCreator = (function (_super) {
    __extends(AdminCreator, _super);
    function AdminCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminCreator.prototype.factoryMethod = function (config) {
        var name = config.name, enrollment = config.enrollment, job = config.job, area = config.area;
        return new Products_1.Admin(name, enrollment, area, job);
    };
    return AdminCreator;
}(Creator));
exports.AdminCreator = AdminCreator;
