let employee = {
    Name: "Zain",
    Role: "HR",
    Salary: "30000",
    getSalary: function(){
    document.writeln("Salary Of " + this.Name + " is " + this.Salary)
    }
}

document.writeln(employee.Name + "<br>")
employee.getSalary()

document.writeln("<br>")

class Employee{
    constructor(name, role, salary){
        this.name = name
        this.role = role
        this.salary = salary
    }

    getSalary(){
        document.writeln("Salary of " + this.name + " is " + this.salary)
    }
}

let e1 = new Employee("Mike", "Senior Partner", 45000)
let e2 = new Employee("Luke", "Junior Partner", 35000)
let e3 = new Employee("David", "Managing Parnter", 60000)

document.writeln(e1.salary + "<br>")
document.writeln(e2.name + "<br>")
e3.getSalary()
document.writeln("<br>")

class Manager extends Employee{ //inheritance

}
 let m1 = new Manager("Peter", "Founding Partner", 80000)
 document.writeln(m1.name + "<br>")
 document.writeln(m1.role + "<br>")
 m1.getSalary()