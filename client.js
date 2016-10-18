var app = angular.module('employeesFormApp', []);

app.controller('BasicController', function () {
  console.log('BasicController loaded');

  var _this = this;
  _this.employees = [];

  _this.person = {
    firstName: 'Laura',
    lastName: 'Abend',
    employeeID: '102938',
    jobTitle: 'Puppeteer',
    annualSalary: 500,
  };

  _this.createEmployees = function () {
    console.log('Submitted employees ', _this.employee);
    _this.employees.push(angular.copy(_this.employee));
  };

});
