
var employeeArray = [];


$(document).ready(function(){
	$("#employeedata").on('submit',function(event){
		event.preventDefault();

		var values = {};

		$.each($("#employeedata").serializeArray(), function(i, field){
			values[field.name] = field.value;
		})
		
		$("#employeedata").find("input[type=text]").val("");
		console.log(values);
		appendDom(values);

		// employeeArray.push(values);

		// function payroll(array){
		// totalPayroll += parseInt(array[2]/12);
		// };
		
		console.log(employeeArray);
		// console.log(payroll(employeeArray));
		// console.log(totalPayroll);
		var totalPayroll = 0;
		var payroll = function(array){
			for (i = 0; i < employeeArray.length; i++) {
				totalPayroll += (parseInt(employeeArray[i].emoloyeesalary)/12);
			}
			return totalPayroll;
		};
//I've moved this damn function around and changed it so many times... I simply cannot get it to work properly. So I'm going to cry myself to sleep and hopefully get some rest and look at it again in the morning. Transcendence through suffering!
		employeeArray.push(values);
		console.log(employeeArray);
		console.log(payroll(employeeArray));
		console.log(totalPayroll);
		
	})
});

function appendDom(object){
	$("#container").append("<div></div>");
	var $el = $("#container").children().last();

	$el.append("<p>" + object.employeefullname + "</p>");
	$el.append("<p>" + object.employeenumber + "</p>");
	$el.append("<p>" + object.employeetitle + "</p>");
	$el.append("<p>" + object.employeesalary + "</p>");
	// $el.apend("<p>" + totalPayroll + "</p>");

	// function payroll(object){
	// 	totalPayroll += parseInt(object.employeesalary);
	// };

	// $el.apend("<p>" + totalPayroll + "</p>");
}


// function payroll(array){
// 	totalPayroll += parseInt(employeeArray[2]/12);

// 	// $("total").append("<div></div>");
// 	// 	var $el = $("#total").children().last();

// 	// $el.append("<p>" + totalPayroll + "</p>");

// 	console.log(totalPayroll);
// };



