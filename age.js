function ageCalculator(name,yearofBirth,currentYear)
{
  var age = currentYear - yearofBirth;
  var output = name + " is " + age + " years old.";
  return output; 
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
console.log(ageCalculator("Nithilan",2012,2018));
console.log(ageCalculator("Navilan",2015,2018));

function howManyHundreds(num)
{
	var remainder = (num % 100)/100;
	
	var divisor = (num / 100);
	var output = divisor - remainder;

	return output;
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
