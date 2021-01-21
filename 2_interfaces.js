var rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    }
};
console.log('Obj with IRect interface', rect);
// Create obj with Interface
var rect2 = {};
var rect3 = {};
console.log('Create empty Obj1 with IRect interface', rect2);
console.log('Create empty Obj2 with IRect interface', rect3);
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
console.log('Class implements IClock interface', Clock);
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '4px'
};
console.log('Obj with interface for dynamic types', css);
