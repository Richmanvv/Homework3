// первое задание
let someUser = {}

console.log(someUser);

someUser.name = "John",
  someUser.surname = "Smith",

  console.log(someUser);

  //Изменяем значение свойства name на Pete.
someUser.name = "Pete";

console.log(someUser)

//Удаление свойства name из объекта.

delete someUser.name
console.log(someUser);

//Второе задание

const user = {
  name:"Jone"
};

//Изменяем name Jone
user.name = "Pete"

console.log(user);

//Третье задание
let salaries = {

  John: 100,

  Ann: 160,

  Pete: 130

}

let sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);

// Четвертое задание
//1
//Boolean(Number('10')) + 1;//2 Boolean в котором есть Number со строкой 10 это  = True = 1+1= 2

//2
//"sub" + Number(false). //Number(false)= 0. sub это строка при додавании числа = sub0.

//3
//16  *  "         91      "; // 16 - Number, "  91 " - строка = 1390
//let a = 16  *  "         91      ";
//console.log(a);

//4
//(true-70 ); true =1, 1-70=69

//5
//Number(1 + String(1)) + 1 ,число 1 + String(1)=11, 11+1=12