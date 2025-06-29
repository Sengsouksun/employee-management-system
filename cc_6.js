class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department); // use super() to inherit
    this.teamSize = teamSize;
  }

  describe() {
    return `${this.name} manages a team of ${this.teamSize} in the ${this.department} department.`;
  }
}

const emp1 = new Employee("Alice", "Engineering");
const emp2 = new Employee("Bob", "Design");

const mgr1 = new Manager("Charlie", "Engineering", 5);

class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    this.employees.forEach(emp => {
      console.log(emp.describe());
    });
  }
}

const myCompany = new Company();

myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);

myCompany.listEmployees();



