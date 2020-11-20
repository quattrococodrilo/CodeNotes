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
exports.Admin = exports.Student = exports.Product = void 0;
var Product = (function () {
    function Product(name, enrollment) {
        this.name = name;
        this.enrollment = enrollment;
    }
    return Product;
}());
exports.Product = Product;
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(name, enrollment, career, grade, group) {
        var _this = _super.call(this, name, enrollment) || this;
        _this.career = career;
        _this.grade = grade;
        _this.group = group;
        return _this;
    }
    Student.prototype.operation = function () {
        return "Study";
    };
    Student.prototype.info = function () {
        return "Student: " + this.name + " - " + this.enrollment;
    };
    return Student;
}(Product));
exports.Student = Student;
var Admin = (function (_super) {
    __extends(Admin, _super);
    function Admin(name, enrollment, area, job) {
        var _this = _super.call(this, name, enrollment) || this;
        _this.area = area;
        _this.job = job;
        return _this;
    }
    Admin.prototype.operation = function () {
        return 'Work';
    };
    Admin.prototype.info = function () {
        return "Admin: " + this.name + " - " + this.enrollment;
    };
    return Admin;
}(Product));
exports.Admin = Admin;
