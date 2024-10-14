// keyword varaibleName = value ;
var a = 5;
let b =6;
const c = 7;
console.log(a)
console.log(b)
console.log(c)

// updating a variable
var a = 15;
console.log(a)
b = 16;

console.log(b)
// c = 17;

console.log(c)

//! operator

//? arithmetic operators
let d=4; e=2
console.log(d+e)  // 6
console.log(d/e)  //2
console.log(d*e)  //8
console.log(d** e) //16
console.log(d % e) //0
console.log(++d) //5
console.log(--d) //4

//? comparison operators
let f= 7;
console.log(f > 9); //false
console.log(f < 9); //true
console.log(f == 9); //false
console.log(f >= 9); //false
console.log(f <= 9); //true
console.log(f != 9); //true
console.log(f == '7'); //true
console.log(f === '7');//true
console.log(f !== '7'); //false

//? logical operators 
/*
  && is like multiplication 
  
  in truth table 0=false and 1=true

  condition1  condition2  result action
     0            1         0    false
     1            0         0     false
     0             0         0     false
     1             1         1     true

    || is like addition
      
   in truth table 0=false and 1=true;

   conditon1   condition2  result  action
     0             1        0       true
     1              0        0       true
     0              0        0       false
     1              1         1       true
     
     */
let isMarried = false;

console.log(isMarried) // true
console.log(f > 9 && f < 9);// false
console.log(f > 9 && f < 19); //false
console.log(f < 9 && f < 19) ;//true
console.log(f > 9 ||  f<9); //true
console.log(f > 9 ||  f <19);//true
console.log(f < 9 ||  f <19 );//true

// compund operation

let g = 6;
/*
  a+=b equivalent to a = a+b;
  a -=b equivalent to a = a-b;
  */
 console.log(g +=1); //7
 console.log(g+= 8); //15
 console.log(g+= 15); //30
 console.log(g -= 15); //15
 console.log(g *=15); //225
 console.log(g /=15); //15
 console.log(g %=15);  // 0

//? other operators
/*
   =assignment operator
   */

   let v =99;


   //? boolean  variable
   console.log('******* today *******')
   let isMale = true;
   console.log(isMale)
   console.log(typeof isMale)
   
   let blogs = null;// declaring blog and intializing it
   console.log(blogs, typeof blogs);
   blogs = {}; // updating b;ogs
   console.log(blogs)

   let age; // declaring age without initializing it
   let age2 = undefined;
   

   console.log(age,age2)
   age=969;
   console.log(age);

   let num = 10;
   let num2 = 33.5;
   console.log(num,num2)
  // number methods
  console.log(Math.pow(3,3));



  let Name = 'chile';
  console.log(typeof Name)

  /* index:01234
           chile
    items: 12345

    to get i from chile
    stringvariable[index]
  */

    console.log(Name [2])
    let fullName = 'Amadi Chile';
console.log(fullName.length)

    console.log(fullName [6])

    fullName = fullName.replace ('Chile',"White");
  console.log(fullName)
  fullName = fullName.replace('A',"O");
  let Fruit = 'Apple';
  // delete A 
  Fruit=Fruit.replace('A','')
  console.log(Fruit)
  // conveert a string  to any array
  let arrFruit = Fruit.split('');
  let sentence = 'I love to swim';
  let arrsentence = sentence.split('o')
  console.log(arrFruit)
console.log(arrsentence)  
// HOW TO JOIN TWO TEXT TOGMTMHER
let text1 = 'sea'
let text2 = 'food'
let result = text1.concat (text2);
console.log(result)
// joining two strings using +
console.log(text1+text2);

let n1 = 1;
let n2 = 1;
console.log(n1+n2)

// how to use template template stringin java string
let hobby = 'swim'

// ilove swim
let sent = "ilove to" + hobby

let name = 'chile';
let country = 'Nigeria';
let occupation= 'web developer'

let ans = "My name is " + name  +"." + "I am from " + country + " I am an "+ occupation;
console.log(ans)
// using template string
// how to inject variable in template  string `$(variable)`;
let ans2 = `Mym Name is $(name). I am mfrom mmm$(country) and I am an $ (moccupation)`;
console.log(ans2)
//!Arrays

// let arr = [item,item2]

let cars = ['toyota','BMW','lexus','Benz','volvo','venza'];
console.log()
//how to check if an item exist in an array                                         
console.log (cars.includes('venza'))
console.log(cars.indexOf ('venza'))
// searching a srtring 
let question ='how to check if an item exist in an array';

 console.log(question.includes ('array'))
 console.log(question .indexOf ('a'))
 console.log(question.lastIndexOf('a'))

 //!object 
 
 let remote = {
  // key:value
  name: 'LG',
  color: 'Black',
  "owner":'Elitpath',
 }

 // the key:value pairs forms thenproperties on an object

 // how to get object values 
 // objectNmae.key or objectName['key']
 console.log(remote.name)
 console.log (remote.color)
 console.log (remote['owner'])

 //adding new properties 

 Object.defineProperty(remote,'age',{value: '1 year'});
 remote.button = true;

 
 remote.color = 'white';
 console.log(remote)

 //! funtiions
 // how top crearte a funtion
 //? using funtion Keyword
 /*
   funtion funtionName () {
   codeblock
   }
   calling the funtion 
   funtionName();
   */
  function greetUser () {
    console.log ('Good Morning Mr. Chile!')
  }
const greetUser2 = ()=> {
  console.log('Good afternoon Mr. chief!')
}
  greetUser()
  greetUser2()
  //? using arrow funtion

// how to call a funtion
 // how to make a funtion dynamic 
 // how to return values from a function  