/*DAY 1*/

/*

let js = 'amazing'
if (js ==='amazing') alert ('javascript is fun')

console.log(40 + 8 + 23 -10)

console.log("Kevin Maina")
console.log("25")

let firstName = "Kevin"; 
console.log(firstName);


let javascriptIsFun = true;

//data types
console.log(typeof firstName);
console.log(typeof 32);
console.log(typeof js);
console.log(typeof javascriptIsFun);

//dynamic typing...changed from boolean to string
javascriptIsFun = 'YES';
console.log( typeof javascriptIsFun);


let age = 30;

age = 31;

*/

/*DAY 2 */

let age = 30;
age = 31;

/*a let variable can be changed*/

const birthYear = 1991;

/*birthYear = 1990;
const variable cannot be changed
*/

var job = 'programmer';
job = 'teacher'

/*a var variable can  also be changed*/


lastName = 'Maina';
console.log(lastName);


/* MATH OPERATORS*/

const now= 2037;
const ageKevin = 2037 - 1994;
const ageSarah = now - 2018;
console.log(ageKevin, ageSarah);


console.log(ageKevin * 2, ageSarah/2, 2**3);
/* 2**3 means 2 to the power of 3 */

const fName = 'Kev';
const lName = 'Maina';
console.log( fName + ' ' + lName); /*concatenating strings usi operators*/


/*ASSIGNMENT OPERATORS*/
let x = 10 + 5 ;

x+= 10;
x *= 2;
x++;	/* x= x+1*/
x--; 	/* x= x-1*/
console.log(x);


/*COMPARISON OPERATORS*/

//console.log(ageKevin < ageSarah);

/*  <,  >,  <=,  >=  */

const isFullAge =ageSarah >= 18;

console.log(now - 1994 > now -2018)

let a,b;
a=b= 25-10-5;
console.log(a, b);

const averageAge = (ageKevin + ageSarah) /2
console.log(ageKevin, ageSarah, averageAge);



/*CODING CHALLENGE #1*/

let markHeight= 1.69, markMass =78;
let johnHeight=1.95, johnMass=92

let markBmi = markMass / (markHeight **2)
console.log(markBmi) 

let johnBmi = johnMass / (johnHeight **2)
console.log(johnBmi)


let markHigherBMI = markBmi > johnBmi

console.log(markHigherBMI)


const firstName = 'Kevin'
const jobs = 'teacher'
const birthYears = 1994
const year = 2022

const kevin = "I'm " +  firstName + ", a " +  (year - birthYears) + ' Year old ' + jobs + '!';
console.log(kevin);


/*TEMPLATE LITERALS*/

const kevinNew = `I'm ${firstName}, a ${year - birthYears} year old ${jobs}`;  /*USED REVERSED QUOTE MARKS  ``  */
console.log(kevinNew);

console.log(`Just a normal string...`);

/*creating multi line strings*/

console.log('String with \n\
multiple \n\
lines')

/*creating multi line strings using template string*/
/*using back quote*/

console.log(`String with 
multiple 
lines`)


/*TAKIN DECISIONS USING IF ELSE STATEMENTS*/

const ages = 15

if (ages >= 18) {

	console.log('Sarah can get a driving licence😊') /*win button plus .  to get an emoji*/
}
else{
	const yearsLeft = 18 - ages
	console.log(`Sarah cannot get a licence😒, wait another ${yearsLeft} years`)/*using back quote (template strings) */
}

const birthYearz = 2002

let century/*defining the variable*/ 

if (birthYearz <= 2000) {
	century = '20th century'
}
else{
	century= '21st century'
}

console.log(century)



/*CODING CHALLENGE #2*/

let maryHeight= 1.69, maryMass =78;
let janeHeight=1.95, janeMass=92

let maryBmi = maryMass / (maryHeight **2)
console.log(maryBmi) 

let janeBmi = janeMass / (janeHeight **2)
console.log(janeBmi)


let maryHigherBMI = maryBmi > janeBmi

console.log(maryHigherBMI)

if (maryBmi > janeBmi) {
	console.log(" Mary's BMI is higher than Janes BMI ")
}
else{
console.log("Jane's BMI is higher than Mary's BMI ")

}


if (maryBmi > janeBmi) {
	console.log(` Mary's BMI (${maryBmi}), is higher than Janes BMI (${janeBmi}) `)
}
else{
console.log("Jane's BMI is higher than Mary's BMI ")

}


/*Type conversion and coercion*/
//Type conversion

const inputYear = '1994'

console.log(Number(inputYear)) /*Using the Number function to convert */

console.log(Number(inputYear) + 18)


//Type coercion

console.log( "I am " + 23 + " years old") /* the + operatore triggers a coercion*/

console.log('23' - '10' - 3) /* the - operator triggers a coversion but only from string(23 and 10) to number*/  /*also the * and  / operators*/
console.log('23' + '10' + 3)/* in this case the + converts from number(3) to string*/


//FALSY AD TRUTHY VALUES
//0, '', UNDEFINED, NULL, NaN

//convertin to boolean
console.log(Boolean(0))	//false
console.log(Boolean(undefined))   //false
console.log(Boolean('Kevo'))	//true
console.log(Boolean({}))//empty object  //true
console.log(Boolean(''))//false


const money = 0  		//zero is a falsy values
if (money) {//tries to convert to boolean
	
	console.log("Don't spend it all")
}
else{
	console.log("You should get a job")	
}

const money2 = 100  		//100is a truthy values
if (money2) {//tries to convert to boolean
	
	console.log("Don't spend it all")
}
else{
	console.log("You should get a job")	
}



let height		//height is undefined here, so its a falsy value
if (height) {
	console.log("Yay, height is defined")
}
else{
console.log("Height is undefined")
}

let heights = 100		//heights is defined here, so its a truthy value
if (heights) {
	console.log("Yay, heights is defined")
}
else{
console.log("Heights is undefined")
}


//EQUALITY OPERATORS



/*const ager = 18

if (ager===18) console.log("You are an adult")
//when an IF statement has only one line, no need of curly braces {} as shown above



const aged = '18'  

if (aged==18) console.log("You are an adult")

//the double == converts the type, but === only returns exact match
// string == int, but string is not === to int

const favourite = Number(prompt("What's your favourite number?")) //Number function to convert from string to number
console.log(favourite)

if (favourite === 3){
	console.log("Ok, 3 is a good number")
}
else if (favourite === 7){
	console.log("Ok, 7 is also a good number")
}

else{
	console.log("Number is not 3 or 7")
}

if (favourite !== 23) {
	console.log("Why is the Number is not 23?")
}*/

//BOOLEAN LOGIC
//AND, OR & NOT

const hasDriversLicence = true  //A
const hasGoodVision = true  //B

console.log(hasDriversLicence && hasGoodVision) //AND
console.log(hasDriversLicence || hasGoodVision) //OR
console.log(!hasDriversLicence) // NOT 

const shouldDrive = hasDriversLicence && hasGoodVision

if (shouldDrive) {
	console.log("She can drive")
}
else
console.log("She cannot drive")

const isTired = false; //C

console.log(hasDriversLicence || hasGoodVision || isTired) //OR
console.log(hasDriversLicence && hasGoodVision && isTired) //AND


const canDrive = hasDriversLicence && hasGoodVision && !isTired

if (canDrive) {
	console.log("She can drive and is not tired")
}
else
console.log("She cannot drive")





//EXERCISE 3


const scoreDallas1= 97
const scoreDallas2= 50
const scoreDallas3= 101

const scoreKoalas1= 109
const scoreKoalas2= 95
const scoreKoalas3= 80




const aveScoreDallas= (scoreDallas1 + scoreDallas2 + scoreDallas3)/3
const aveScoreKoalas= (scoreKoalas1 + scoreKoalas2 + scoreKoalas3)/3

console.log(aveScoreDallas, aveScoreKoalas)


if (aveScoreKoalas > aveScoreDallas) {
	console.log("Koalas are the winners")
}
else if (aveScoreDallas >aveScoreKoalas) {
	console.log("Dallas are the winners")
}

else
console.log("Its a draw")

//Bonus exercise, one has to have more than 100 points so as to be the winners

const scoreDraw = aveScoreKoalas === aveScoreDallas

if ((aveScoreKoalas > aveScoreDallas) &&  aveScoreKoalas >= 100) {
	console.log("Koalas are the winners")

}

else if ((aveScoreDallas > aveScoreKoalas) && aveScoreDallas >= 100 ) {
	console.log("Dallas are the winners")
}

else if( aveScoreKoalas === aveScoreDallas && aveScoreKoalas >= 100 && aveScoreDallas >= 100){
	console.log("Its a draw")
}

else {
	console.log("No team wins the trophy")
}

//JS Functions

let greeting = "Hello there" //(Global variable) Can be used inside a function

function games(){

	console.log ('sonic the hedgehog')
	console.log ('super marioo')
	console.log ('Donkey Kong')

	let title = "Kevoh" //(local variable) any variable declared inside a function can only be used inside the function
	console.log(title, greeting)
}
games() //invoking a function

console.log(greeting)//(Global variable)






//JS Objects

let alien = {
	name: 'Kevin',
	Tech: 'Javascript',
	laptop:  {			//complex objects, object inside an object
		cpu: 'i7',
		ram: '4GB',
		brand:'Hp'
	}

}
console.log(typeof alien) //will return object
console.log(alien.name)
console.log(alien.Tech)

console.log(alien.laptop)//complex objects
console.log(alien.laptop.brand)
console.log(alien.laptops?.brand) //the '?' will check if the property(in this case, laptops) is defined first, before printing the brand
								//if not, it will return undefined instead of returning an error(try removing the '?')

//Delete property 
/*
delete alien.Tech*/
console.log(alien)

//this keyword...refers to an object

const person = {
  fName: "John",
  lName : "Doe",
  id    : 5566,

  //Object methods
  //A method is a function stored as a property
  
  fullName : function() {
    return this.fName + " " + this.lName;
  }
}

console.log(person.fullName())  //Accessing object methods




//JAVASCRIPT ARRAYS AND ARRAY METHODS


let cars = ["volvo", "BMW", "Nissan"]

console.log(cars)

let numberz =[]//no values in this Array
numberz.push(2,3,78, "ten") //adding values in an array


numberz[4] = "Thirty"		//another method of adding values to an arrray
console.log(numberz)


console.log(numberz.pop()) //to remove the last added value in an array.....Thirty will be removed
console.log(numberz)



console.log(numberz.shift()) //to remove the first value in an array.....2 will be removed
console.log(numberz)

console.log(numberz.unshift(88)) //to add into the first value in an array.....88 will be added  at index 0
console.log(numberz)


console.log(numberz.join("*")) //Joins array elements into a string...in this case, using the seperator * 

const all = cars.concat(numberz) //creates a new array by merging (concatenating) existing arrays
console.log(all)


//Learnt more on JS methods
/*
The splice() method adds new items to an array.

The slice() method slices out a piece of an array.

join()

concat() creates a new array by merging (concatenating) existing arrays


*/


console.log(cars[2]) //Fetching a specific value in an array

let data = [

	"Kevin",
	"Maina",
	{Tech: "javascript"}, //Adding an object to a array
	function(){ console.log("Hello world")} //Adding a function to an array
]
console.log(data)

data[3]() //will return Hello world


//FOR OF LOOP IN ARRAYS	

let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

for (let n of nums){

	console.log(n)
}






















