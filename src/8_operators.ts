interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // 'name'|'age'

let key: PersonKeys = 'name';
key = 'age';

// --------------------------
type User2 = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

type UserKeysNoMeta = Exclude<keyof User2, '_id' | 'createdAt'>; // 'name'|'email'
type UserNoEmail = Pick<User2, '_id' | 'name'>; // '_id'|'name'
