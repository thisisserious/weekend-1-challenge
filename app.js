$(document).ready(function () {
  console.log('This works!');
  $('#employeeInfo').on('submit', function (event) {
    event.preventDefault();

    var employee = {};

    var fields = $('#employeeInfo').serializeArray();
    console.log('fields', fields);

    fields.forEach(function (element, index) {
      employee[element.name] = element.value;
    });

    // console.log('salary', salary);

    // var salaries = +$('input[name=annualSalary]').val();
    // var calculator = function (total) {
    //   total += salaries;
    //   return total;
    // };
    //
    // calculator(salaries);
    // console.log('salaries', salaries);

    //var salaries pulls the value from the input annualSalary
    //prints salaries to show it's working

    var salaries = $('input[name=annualSalary]').val();
    console.log('salaries', salaries);

    $('#employeeInfo').find('input[type=text]').val('');
    $('#employeeInfo').find('input[type=number]').val('');

    appendDom(employee);

    // var calculate = {};
    //
    // var salaries = $('#annualSalary').serializeArray();
    // console.log('salaries', salaries);
    //
    // salaries.forEach(function (element, index) {
    //   calculate[element.name] = element.value;
    // });
    console.log('employee object', employee);

    // var salary = +$('#annualSalary').val();
    // console.log('salary', salary);

    $('#monthlyTotal').text(Math.round(salaries / 12));

    // function calculate() {
    //   var sum = 0;
    //   ('#monthlyTotal').each(function () {
    //     var value = $('#monthlyTotal').text(Math.round(salaries / 12));
    //     if (!isNaN(value) && value.length != 0) {
    //       sum += parseFloat(value);
    //     }
    //   });
    //   $('#pay').text(sum);
    // };

  });

  function appendDom(data) {
    var $data = $('<div class="employee"></div>');

    $data.append('<tr>' + '<td>' + data.firstName + ' ' + data.lastName
    + '</td>' + '<td>' + data.idNum + '</td>' + '<td>' + data.jobTitle + '</td>'
    + '<td>' + data.annualSalary + '</td>' + '</tr>');
    $('#employeeData').append($data);

    // $data.append('<h3>Total Monthly Expenditure: ' + data.annualSalary + '</h3>');

  }

});
