/*** types of creating functions *****/

/*** 1.Regular Functions *****/

function sayHello(){
	return("Hello World");
}
var message=sayHello();
console.log(message);

/****2.Anonymous function ****/

var sayAgain=function(){
	return "Hi Good Evening"
}
console.log(sayAgain());

/**** 3.constructor function ****/

function Person(firstName,lastName){
	this.firstName =firstName;
	this.lastName=lastName;	
} 

Person.prototype.fullName=function(){
	return this.firstName+ " "+this.lastName;
}
var newPerson1=new Person("vamsi","krishna");
var newPerson2=new Person("shiva","kumar");
var newPerson3=new Person("kiran","kumar");
console.log(newPerson1.fullName());
console.log(newPerson2.fullName());
console.log(newPerson3.fullName());

/*****4.selfinvoking function****/

(function(message){
	console.log("Hello"+message)
}) ("shivakumar")



