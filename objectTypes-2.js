//types of  creating empty Object

var obj1=new Object();
//object literal
var obj2={};
//by method create
var obj3=Object.create(null);
//by using a constructor function
function Person(){}
var obj4=new Person();
console.log(obj4)

//adding properties to object

var obj={
	id:1
};
obj["name"]="Asha";
obj.city="Amaravati";
Object.defineProperty(obj,'state', {
	value:"AP"
})
Object.defineProperty(obj,'country',{
	value:"India"
})

delete obj.city;

//console.log(obj);


//modifying object

//1.prevent extensions()

//*Allows to update existing property and delete a property but we cannot add a new property
 var person1={name:"shiva",age:'23'}

Object.preventExtensions(person1)

person1.name="Shivakumar"
person1.city="Hyderabad";

delete person1.age;
console.log(person1)

//2.seal extensions

/*It wont allow to add new property and delete existing property 
 but we can update existing property */


var person2={name:"shiva",age:'23'}

Object.seal(person2)

person2.name="Shivakumar";
person2.city="Hyderabad";

delete person2.age;
console.log(person2)

//3.freeze
/* we cannot add,update,delete a property*/

var person3={name:"shiva",age:'23'}

Object.freeze(person3)

person3.name="Shivakumar";
person3.city="Hyderabad";

delete person3.age;
console.log(person3)


//adding properties and methods to object

var person={

	firstname:"shiva",
	lastname:"kumar",
	fullname:function(){
		return this.firstname+" "+this.lastname;
	}
}
var firstname=person.firstname;
console.log(firstname)
var fullname=person.fullname();
console.log("fullname:"+fullname);


//getting keys and valuesfrom an object

var employee={
	name:"shivakumar",
	age:'23',
	city:"Kurnool",
	state:"Andhrapradesh",
	country:"India"
}

var keys=Object.keys(employee);
console.log(keys)

var values=Object.values(employee)
console.log(values);