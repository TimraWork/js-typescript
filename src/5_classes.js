// class User {
//   private _name: string;
//   private _year: number;
//   constructor(name: string, age: number) {
//     this._name = name;
//     this._year = this.setYear(age);
//   }
//   public displayYear(): void {
//     console.log('Год рождения: ' + this._year);
//   }
//   public displayName(): void {
//     console.log('name: ' + this._name);
//   }
//   private setYear(age: number): number {
//     return new Date().getFullYear() - age;
//   }
// }
// let tom = new User('Tom', 24);
// tom.displayName();
// tom.displayYear();
// console.log(tom._name); // нельзя обратиться, так как _name - private
// console.log(tom.setYear(45)); // нельзя обратиться, так как функция - private
var User2 = /** @class */ (function () {
    function User2(name, age) {
        this.name = name;
        this.age = age;
    }
    User2.prototype.displayInfo = function () {
        console.log('name: ' + this.name + '; age: ' + this.age);
    };
    return User2;
}());
var userCreate = new User2('Настя', 31);
console.log('user2 = ', userCreate);
