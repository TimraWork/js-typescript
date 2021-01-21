// Object Interface
interface IRect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect: IRect = {
  id: '1234',
  size: {
    width: 20,
    height: 30
  }
};
console.log('Obj with IRect interface', rect);

// Create obj with Interface
const rect2 = {} as IRect;
const rect3 = <IRect>{};
console.log('Create empty Obj1 with IRect interface', rect2);
console.log('Create empty Obj2 with IRect interface', rect3);

// Class Interface
interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}
console.log('Class implements IClock interface', Clock);

// Interface for dynamic types
interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '4px'
};

console.log('Obj with interface for dynamic types', css);
