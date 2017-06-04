var person1= {
	name:"James Ghousling",
    age:'65',
    }

var person2= {
	name:"King",
    age:'30',
    }

    function sayHello(message,wish){
    	return message +" "+this.name+" "+this.age+" "+wish
    }

  var msg1=sayHello.bind(person1,"Hello");
  console.log(msg1())

  var msg2=sayHello.bind(person2);
  console.log(msg2("Hello"))

   var msg3=sayHello.call(person2,"Hello");
  console.log(msg3)

  var msg3=sayHello.apply(person2,["Hello","Be a friend"]);
  console.log(msg3)