
function Employee(name, designation, department)
{
    this.name = name;
    this.designation = designation;
    this.department = department;
}

Employee.prototype.addEmployee = function()
{
    console.log(this.name);
    console.log("Adding to Database");
}
Employee.prototype.print = function(value)
{
    console.log("Printing " + value);
}
console.log(Employee.prototype.addEmployee);
var emp = new Employee("Emp01", "Devaloper", "IT");
console.log(emp);
emp.addEmployee();
emp.print("Data");
