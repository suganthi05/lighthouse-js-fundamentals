/*function sayHello(name){
	console.log("Hello, " + name);
}
sayHello("Caliban");
sayHello("Miranda");
sayHello("Fedrinand");
*/

function sayHelloToConsole(name){
	console.log("Hello ," + name);
}
sayHelloToConsole('John');

//return js function 
/*returnSayHello(name)
{
	return "Hello," + name; 
}
var greeting = returnSayHello('John');*/

function returnSayHello(name) {
  return "Hello, " + name;
}
var greeting = returnSayHello('John');
console.log(greeting);
