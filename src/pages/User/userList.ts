export type User = {
    name: string;
    age: number;
    birth: Date; // Now using Date object
  };
  
  export const userList: User[] = [
    { name: "Alice", age: 25, birth: new Date("1999-03-15") },
    { name: "Bob", age: 30, birth: new Date("1994-01-22") },
    { name: "Charlie", age: 22, birth: new Date("2002-07-08") },
    { name: "Daisy", age: 28, birth: new Date("1996-11-03") },
    { name: "Ethan", age: 35, birth: new Date("1989-05-14") },
    { name: "Fiona", age: 27, birth: new Date("1997-09-30") },
    { name: "George", age: 24, birth: new Date("2000-06-21") },
    { name: "Hannah", age: 26, birth: new Date("1998-02-18") },
    { name: "Ian", age: 33, birth: new Date("1991-12-10") },
    { name: "Jasmine", age: 29, birth: new Date("1995-08-12") },
    { name: "Kevin", age: 23, birth: new Date("2001-10-05") },
    { name: "Luna", age: 31, birth: new Date("1993-04-27") },
    { name: "Marcus", age: 34, birth: new Date("1990-06-15") },
    { name: "Nina", age: 21, birth: new Date("2003-01-30") },
    { name: "Oscar", age: 32, birth: new Date("1992-03-09") },
    { name: "Paula", age: 20, birth: new Date("2004-12-20") },
    { name: "Quinn", age: 27, birth: new Date("1997-07-19") },
    { name: "Rachel", age: 26, birth: new Date("1998-11-01") },
    { name: "Steve", age: 28, birth: new Date("1996-05-22") },
    { name: "Tina", age: 30, birth: new Date("1994-09-16") }
  ];