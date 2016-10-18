var app = angular.module('employeesFormApp', []);

app.controller('BasicController', function () {
  console.log('BasicController loaded');

  var _this = this;
  console.log('This:', _this);
  _this.employees = [];
  _this.annualSalary = 0;

  _this.createEmployees = function () {
    console.log('Submitted employees ', _this.employee);
    _this.employees.push(angular.copy(_this.employee));

    _this.employees.forEach(salaryFunction);

    function salaryFunction(employee) {
      var annualSalary = employee.annualSalary;
      console.log('salaryFunction annualSalary:', annualSalary);
      _this.annualSalary += annualSalary;
    }
  };

  _this.deleteEmployees = function () {
    console.log('Delete button clicked');
    _this.employees.pop(_this.employee);
  };

});
