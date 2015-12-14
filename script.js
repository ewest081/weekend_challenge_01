
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

		employeeArray.push(values);

		console.log(employeeArray);
	})
});

function appendDom(object){
	$("#container").append("<div></div>");
	var $el = $("#container").children().last();

	$el.append("<p>" + object.employeefullname + "</p>");
	$el.append("<p>" + object.employeenumber + "</p>");
	$el.append("<p>" + object.employeetitle + "</p>");
	$el.append("<p>" + object.employeesalary + "</p>");

};

function totalSalary(){
	var salarySum = 0;

	for(var i = 0; i < employeeArray.length; i++){
		var object = employeeArray[i];
		salarySum += parseInt(object.employeesalary);
	}

	salarySum /= 12;

	$("#totalcontainer").text("Total Monthly Salary: " + salarySum);

	console.log(salarySum);
};



