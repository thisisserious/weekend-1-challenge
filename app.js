$(document).ready(function () {
  console.log('This works!');//test to make sure all is well, linked correctly, etc.

  var totalMonthlySalary = 0; //keeps track of the total; scope that's local
  // to that anonymous function(the document ready function, global var for that
  // function; keeps it outside everything so everything has access)

  $('#employeeInfo').on('submit', function (event) { //event listener for submit
    event.preventDefault(); //prevents inputs from populating url

    var employee = {}; //empty object to populate with inputs

    var fields = $('#employeeInfo').serializeArray(); //call to form inputs to
    //populate an array
    console.log('fields', fields); //test to make sure fields is being populated

    fields.forEach(function (element, index) { //taking the element & index from
      //the fields array & populating the employee object
      employee[element.name] = element.value; //applying name & value within
      //employee object
    });

    $('#employeeData').on('click', 'button', removeEmployee);//event listener for
    //removing an employee on the button click

    //clear form data
    $('#employeeInfo').find('input[type=text]').val('');
    $('#employeeInfo').find('input[type=number]').val('');

    totalMonthlySalary = totalMonthlySalary + employee.annualSalary / 12;//updates
    //totalMonthlySalary to take the input & divide by 12 & make that the new total

    updateMonthlySalaryDisplay();//function call

    //appending to the DOM
    appendDom(employee);

    function updateMonthlySalaryDisplay() {//accesses the span id & changes the text
      //to totalMonthlySalary rounded to the nearest 2 decimals
      $('#monthlySalary').text(totalMonthlySalary.toFixed(2));
    }

    //myNumber.toLocaleString('en-US', { currency : 'USD', style : 'currency' });
    //^^not supported on a lot of mobile browsers

    console.log('employee object', employee);//test to see the populated employee object

    // var salary = +$('#annualSalary').val(); <--a neat trick to take a string,
    // convert it to a number, & return the value into a new var
    // console.log('salary', salary); <--the test to make sure that^ works

  });

  function appendDom(data) {
    var $data = $('<tr class="employee"></tr>');

    //add our employee data
    $data.append('<td>' + data.firstName + ' ' + data.lastName
    + '</td>' + '<td>' + data.idNum + '</td>' + '<td>' + data.jobTitle + '</td>'
    + '<td>$' + data.annualSalary + '</td>' + '</tr>');
    $('#employeeData').append($data);

    var $button = $('<button>Remove</button>');
    $button.data('salary', data.annualSalary);

    // wrap in a td for styling
    var $td = $('<td></td>');
    $td.append($button);

    $data.append($td);

  }

  function removeEmployee() {
    var $button = $(this);
    console.log('Button: ', $button);

    //console.log tests are our friends; write small chunks, test, repeat

    console.log('Button data:', $button.data('salary'));

    var salary = $button.data('salary');
    var monthly = salary / 12;

    totalMonthlySalary = totalMonthlySalary - monthly;

    // the button is wrapped in a table data element,
    // which is within a table row, the row is what we want to remove
    $button.closest('tr').remove();
  }
});
