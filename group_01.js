// var atticus = ["Atticus", "2405", "47000", 3];
// var jem = ["Jem", "62347", "63500", 4];
// var boo = ["Boo", "11435", "54000", 3];
// var scout = ["Scout", "6243", "74750", 5];

var atticus = new Employee('Atticus', '2405', '47000', 3);
var jem = new Employee("Jem", "62347", "63500", 4);
var boo = new Employee("Boo", "11435", "54000", 3);
var scout = new Employee("Scout", "6243", "74750", 5);

function Employee(name, number, salary, rating) {
	this.employeeName = name;
	this.employeeNumber = number;
	this.employeeSalary = salary;
	this.employeeRating = rating;
}
//define employee array
var employees = [atticus, jem, boo, scout];
//call calculateEmployeeBonuses function
calculateEmployeeBonuses(employees);

//Function to loop over the employee array and call bonus function
function calculateEmployeeBonuses(array) {
	for(var i = 0; i < array.length; i++) {
		calculateBonus(array[i]);
	}
}

//Function to calculate individual bonuses
function calculateBonus(employee) {
	//Create empty array for new employee
	var newArray = [];

	//Define employee variables for this function
	var empSalary = Number(employee.employeeSalary);
	//empSTI calls the calcSti function and passes in employee information
	var empSTI = calcSti(employee.employeeNumber, empSalary, employee.employeeRating);
	var totalBonus = Math.round(empSalary * empSTI);

	//Push new employee values to newArray
	newArray[0] = employee.employeeName;
	newArray[1] = empSTI ;
	newArray[2] = empSalary + totalBonus;
	newArray[3] = totalBonus;

	//Log the employee array: THIS is what shows up in the console
	console.log(newArray);
}

//Function to calculate an individual's STI percent
function calcSti (number, salary, rating) {
	var bonus = 0;

	//base bonus based on rating
	switch (rating) {
		case 0:
		case 1:
		case 2:
			bonus = 0;
			break;
		case 3:
			bonus = 0.04;
			break;
		case 4:
			bonus = 0.06;
			break;
		case 5:
			bonus = 0.1;
			break;
		default:
			bonus = 0;
			break;
	}

	//Seniority bonus
	if(number.length == 4) {
		bonus += 0.05;
	}

	//Salary cap bonus
	if(salary > 65000) {
		bonus -= 0.01;
	}

	if(bonus > 0.13) {
		bonus = 0.13;
	}

	return bonus;
}