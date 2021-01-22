// Public, private, protected,readonly, static modifiers
class User {
  constructor(private name: string, private age: number) {}
  public displayInfo(): void {
    console.log('name: ' + this.name + '; age: ' + this.age);
  }
}
console.log(new User('Nastya', 31));

class Car {
  constructor(readonly model: string) {}
  public getModel(): void {
    console.log('readonly model property: ' + this.model);
  }
}
console.log(new Car('BMVx6'));

// Static Properties
// We can also create static members of a class,
// those that are visible on the class itself rather than on the instances
class Grid {
  static origin = {x: 0, y: 0};
  public calculateDistanceFromOrigin(): void {
    console.log('Static Propertie origin = ', Grid.origin.x, Grid.origin.y);
  }
}
new Grid().calculateDistanceFromOrigin();

//Abstract Classes
abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log('Department name: ' + this.name);
  }

  abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing'); // constructors in derived classes must call super()
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }

  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}

let department: Department; // ok to create a reference to an abstract type
// department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
// department.generateReports(); // error: department is not of type AccountingDepartment, cannot access generateReports
