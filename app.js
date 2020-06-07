alert("Chapter 1 Assignments startnig...")


// Chapter 1 assignment 1
alert('Hello User! Welcome to our website.')


// Chapter 1 assignment 2
alert('Error! Please enter a valid password.')


// Chapter 1 assignment 3
alert('Welcome to JS Land...\nHappy Coding!')


// Chapter 1 assignment 4
alert('Welcome to JS land...');


// Chapter 1 assignment 5
alert('Happy Coding!');


// Chapter 1 assignment 6
alert('Hello... I can run JS Through my web browsers console')


// --------------------------End of Chapter 1------------------------------



// Chapter 2 Start From here
alert("Chapter 2 Variables assignment Starting...")


// Chapter 2 assignment 1
let username;


// Chapter 2 assignment 2
let myname = "Shahbaz ALi";


// Chapter 2 assignment 3
let message;
message="Hello World";
alert(message);


// Chapter 2 assignment 4
let name = "Shahbaz";
let age = "21 years old";
let degree = "Certified Mobile Application Development";
alert(name);
alert(age);
alert(degree);


// Chapter 2 assignment 5
let pizza = 'PIZZA\nPIZZ\nPIZ\nPI\nP';
alert(pizza)


// Chapter 2 assignment 6
let email = "shahbaz.rajpoot15@gmail.com";
alert("My email is " + email)


// Chapter 2 assignment 7
let book = "Asmarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);


// Chapter 2 assignment 8
document.write("Yeh! I can write HTML through Javascript");


// Chapter 2 assignment 9
let txt = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(txt)


// --------------------------End of Chapter 2------------------------------



alert("Chapter 3 assignments starting...")


// Chapter 3 assignment 1
let myage = 21;
alert("I am " + age + " years old.");


// Chapter 3 assignment 2
let countVist = 14;
alert("You have vist this website " + countVist + " times");


// Chapter 3 assignment 3
let birthYear = 1998;
document.writeln('<br><br>My birth year is '+ birthYear + '.<br>Data Type of my decleard variable is number.');


// Chapter 3 assignment 4
let vistor_name = "Shahbaz";
let product_title = "T-shirt";
let qty = 5;
document.writeln('<br><br>' + vistor_name + ' ordered ' + qty + ' ' + product_title + ' on XYZ Clothing store.');

// --------------------------End of Chapter 3------------------------------


alert('Chapter 4 assignments starting...');

// chapter 4 assignment 1
let a , b , c;


// chapter 4 assignment 2
    // 5 legal vaiables
    let abc;
    let _xyz;
    let $name;
    let first_name;
    let my_1stvariable;
    // 5 ilegal varibles
    // let 5names;
    // let var;
    // let const;
    // let first name;
    // let abc%vistor_name;


// chapter 4 assignment 3
document.writeln('<br><br><h1>Rules of naming variables</h1><br><br>');
document.writeln('Variable names can only contain, numbers, $ and _. For example: $my_1stVariable<br>');
document.writeln('Variables must begin with a letter, $ or _. For example $name, _name or name<br>');
document.writeln('Variable names are case senstive<br>');
document.writeln('Variable names should not be JS Keywords.<br>');

// --------------------------End of Chapter 4------------------------------


alert("Chapter 5 Assignment staring...");

// Chapter 5 assignment 1
let result;  //We use this result variable in our other blew assignments because we cant declaire it again
let num1 = 3;
let num2 = 5;
result= num1 + num2;
document.write("<br>Sum of "+ num1 +" and " + num2 + ' is ' + result);


// Chapter 5 assignment 2
result = num1 - num2;
document.write("<br>Subtraction of "+ num1 +" and " + num2 + ' is ' + result);

result = num1 * num2;
document.write("<br>Multiply of "+ num1 +" and " + num2 + ' is ' + result);

result = num1 / num2;
document.write("<br>Division of "+ num1 +" and " + num2 + ' is ' + result);

result = num1 % num2;
document.write("<br>Modulus of "+ num1 +" and " + num2 + ' is ' + result);


// Chapter 5 assignment 3
let num3;
document.writeln('<br><br><br>Value after variable declaration is: ' + num3);
num3 = 5;
document.writeln('<br>Initial value: '+ num3);
num3++;
document.writeln("<br>Value after increment is: "+ num3);
num3 = num3 + 7;
document.writeln("<br>Value after addition is: "+ num3);
num3--;
document.writeln("<br>Value after decrement is: "+ num3);
result = num3 % 3;
document.writeln("<br>The reminder is: "+ result);


// Chapter 5 assignment 4
let priceOfticket = 600;
let priceOf5Ticktes = priceOfticket * 5;
document.writeln("<br><br>Total cost to buy 5 ticks to a movies is " + priceOf5Ticktes + "PKR");


// Chapter 6 assignment 5
let n = 4;
document.writeln('<br><h1>Table of ' + n + ' </h1>')
document.writeln(n+'x1 = '+ n*1);
document.writeln('<br>'+n+'x2 = '+ n*2);
document.writeln('<br>'+n+'x3 = '+ n*3);
document.writeln('<br>'+n+'x4 = '+ n*4);
document.writeln('<br>'+n+'x5 = '+ n*5);
document.writeln('<br>'+n+'x6 = '+ n*6);
document.writeln('<br>'+n+'x7 = '+ n*7);
document.writeln('<br>'+n+'x8 = '+ n*8);
document.writeln('<br>'+n+'x9 = '+ n*9);
document.writeln('<br>'+n+'x10 = '+ n*10);


// Chapter 6 assignment 6
    // Temperature Converter
let t1 = 25; //Celsius temperature
let t2 = 70; //Fahrenheit temperature
result = (t1 * 9/5) + 32; //converting Celsisus to Fahrenheot
document.writeln("<br><br>" + t1 + "°C is " + result + "°F");
result = (t2 -32) * 5/9; //converting Fahrenheot to Celsisus
document.writeln("<br>" + t2 + "°F is " + result + "°C");


// Chapter 6 assignment 7
    // Shoping Cart
document.writeln('<br><br><h1>Shopping Cart</h1><br>');
let priceOfitem1st = 650;
let priceOfitem2nd = 100;
let QtyOfitem1st = 3;
let QtyOfitem2nd = 7;
let shipping_charges = 100;
let total1 = priceOfitem1st * QtyOfitem1st;
let total2 = priceOfitem2nd * QtyOfitem2nd;
result = (total1 + total2) + shipping_charges;

document.writeln('Price of item 1 is ' + priceOfitem1st);
document.writeln('<br>Quantity of item 1 is ' + QtyOfitem1st);
document.writeln('<br>Price of item 2 is ' + priceOfitem2nd);
document.writeln('<br>Quantity of item 2 is ' + QtyOfitem2nd);
document.writeln('<br>Shipping Charges is ' + shipping_charges);
document.writeln('<br><br>Total cost of your order is ' + result);


// Chapter 6 assignment 8
    //Marks Sheet
let toatl_marks = 980;
let obtain_marks = 804;
let percentage = (obtain_marks/toatl_marks)*100;
document.writeln('<br><br><h1>Marks Sheet</h1><br>');
document.writeln('Total marks : ' + toatl_marks);
document.writeln('<br>Obtained marks : ' + obtain_marks);
document.writeln('<br>Precentage : ' + percentage+"%");


// Chapter 6 assignment 9
document.writeln('<br><br><h1>Currancy in PKR</h1>');
let dollars = 10;
let riyals = 25;
let pakistani_rupees = (dollars * 104.80) + (riyals * 28);
document.writeln('The Currency in PKR: ' + pakistani_rupees);


// Chapter 6 assignment 10
let x = 9;
result = ((x+5)*10)/2;
console.log(result)

// Chapter 6 assignment 11
    //Age Calculator
let current_year = 2020;
let birth_year = 1998;
age = current_year - birth_year;
document.writeln('<br><br><h1>Age Calculator</h1>');
document.writeln('Current Year: ' + current_year);
document.writeln('<br>Birth Year: ' + birth_year);
document.writeln('<br>Your age: ' + age);


// Chapter 5 assignment 12
    // The Geometrizer
let r = 20;
let cir = 2 * 3.142 * r;
let area = 3.142 * (r*r)
document.writeln('<br><br><h1>The Geometrizer</h1>');
document.writeln('Radius of the circle: ' + r);
document.writeln('<br>The Circumference: ' + cir);
document.writeln('<br>Your area: ' + area);


// Chapter 5 assignment 13
    // The Lifetime Supply Calculator
let snack = 'Chocolate Chip';
let current_age = 15;
let max_age = 65;
let ammount = 3;
document.writeln('<br><br><h1>The Lifetime Supply Calculator</h1>');
document.writeln('Favourite snacks: ' + snack);
document.writeln('<br>Current age: ' + current_age);
document.writeln('<br>Estimated Maximum age: ' + max_age);
document.writeln('<br>Ammount of snacks per day: ' + ammount);
let max_age_in_days = (max_age - current_age) * 365;
let estimated_snacks_requierd_in_life = max_age_in_days * 3;
document.writeln('<br>You will need ' + estimated_snacks_requierd_in_life + ' Chocolate Chip to last you until the ripe old age 65.');

// --------------------------End of Chapter 5------------------------------


// Chapter 6 assignment 1
let y = 10;
let y_increment;
let y_decrement;
document.writeln("<br><br>Result:");
document.writeln("<br>The value of y is: " + y);
document.writeln("<br>............................<br>");
y_increment = ++y;
document.writeln("<br>The value of ++y is: " + y_increment);
document.writeln("<br>The value of y is: " + y);
y_increment = y++;
document.writeln("<br><br>The value of y++ is: " + y_increment);
document.writeln("<br>The value of y is: " + y);
y_decrement = --y;
document.writeln("<br><br>The value of --y is: " + y_decrement);
document.writeln("<br>The value of y is: " + y);
y_decrement = y--;
document.writeln("<br><br>The value of y-- is: " + y_decrement);
document.writeln("<br>The value of y is: " + y);


// Chapter 6 assignment 2
var n1 = 2, n2 =1;
var res = --n1 - --n2 + ++n2 + n2--;
document.writeln("<br><br>n1 = " + n1);
document.writeln("<br>n2 = " + n2);
document.writeln("<br>result = " + res);
--n1;
document.writeln("<br><br>n1 = " + n1);
document.writeln("<br>n2 = " + n2);
document.writeln("<br>result = " + res);
--n1 - --n2;
document.writeln("<br><br>n1 = " + n1);
document.writeln("<br>n2 = " + n2);
document.writeln("<br>result = " + res);
--n2 - --n2 + ++n2;
document.writeln("<br><br>n1 = " + n1);
document.writeln("<br>n2 = " + n2);
document.writeln("<br>result = " + res);
--n1 - --n2 + ++n2 +n2--;
document.writeln("<br><br>n1 = " + n1);
document.writeln("<br>n2 = " + n2);
document.writeln("<br>result = " + res);


// Chapter 6 assignment 3
let yourname = prompt("Enter your name please: ");
alert("Welcome to our website " + yourname);


// Chapter 6 assignment 4
n = prompt('Enter a number');
if(isNaN(n) === true){
    n = 5;
}
document.writeln('<br><h1>Table of ' + n + ' </h1>')
document.writeln(n+'x1 = '+ n*1);
document.writeln('<br>'+n+'x2 = '+ n*2);
document.writeln('<br>'+n+'x3 = '+ n*3);
document.writeln('<br>'+n+'x4 = '+ n*4);
document.writeln('<br>'+n+'x5 = '+ n*5);
document.writeln('<br>'+n+'x6 = '+ n*6);
document.writeln('<br>'+n+'x7 = '+ n*7);
document.writeln('<br>'+n+'x8 = '+ n*8);
document.writeln('<br>'+n+'x9 = '+ n*9);
document.writeln('<br>'+n+'x10 = '+ n*10);


// Chapter 6 assignment 5
let sub1 = prompt("Enter name of 1st Subject");
let sub2 = prompt("Enter name of 2nd Subject");
let sub3 = prompt("Enter name of 3rd Subject");
let toatlMarks_for_each = 100;
let obtain_marks1 = +prompt("Enter obtained  marks of 1st Subject");
let obtain_marks2 = +prompt("Enter obtained marks of 2nd Subject");
let obtain_marks3 = +prompt("Enter obtained marks of 3rd Subject");
let total_obt = obtain_marks1 + obtain_marks2 + obtain_marks3;
let percentage1 = (obtain_marks1/toatlMarks_for_each)*100;
let percentage2 = (obtain_marks2/toatlMarks_for_each)*100;
let percentage3 = (obtain_marks3/toatlMarks_for_each)*100;
let total_per = (percentage1 + percentage2 + percentage3)/3;
document.writeln("<br><br>");
document.writeln("<table border='1'><tr><th colspan='2'>Subject Total</th><th>Marks Obtained</th><th>Marks Percentage</th></tr><tr><td>"+sub1+"</td><td>"+toatlMarks_for_each+"</td><td>"+obtain_marks1+"</td><td>"+percentage1+"%</td></tr><tr><td>"+sub2+"</td><td>"+toatlMarks_for_each+"</td><td>"+obtain_marks2+"</td><td>"+percentage2+"%</td></tr><tr><td>"+sub3+"</td><td>"+toatlMarks_for_each+"</td><td>"+obtain_marks3+"</td><td>"+percentage3+"%</td></tr><tr><td colspan='2'>"+toatlMarks_for_each*3+"</td><td>"+total_obt+"</td><td>"+total_per+"%</td></tr></table>");


// --------------------------End of Chapter 5------------------------------

// Chpater 9 to 11 assignment 1
let city_name = prompt("Enter City name ");
if(city_name.toLowerCase() === 'karachi'){
	alert('Welcome to city of lights');
}

// chapter 9 to 11 assignment 2
let gender = prompt('Enter Gender');
if(gender.toLowerCase() === 'male'){
	alert('Good Morning Sir.')
}else if(gender.toLowerCase() === 'female'){
	alert('Good Morning Ma’am.');
}

// Chapter 9 to 11 assignment 3
let color = prompt("Enter signal color: ").toLowerCase();
if(color == 'red'){
  alert("Must Stop");
}else if(color == 'yellow'){
  alert("Ready to move");
}else if(color == 'green'){
  alert('Move Now');
}


// Chapter 9 to 11 assignment 4
let remaning_fuel = +prompt("Enter Remaing Fuel in Car");
if(remaning_fuel < 0.25){
  alert('Please refill the fuel in your car');
}


// Chapter 9 to 11 assignment 5
a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert("True");
}
if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}


// Chapter 9 to 11 assignment 6
obtain_marks1 = +prompt("Enter obtained  marks of 1st Subject");
obtain_marks2 = +prompt("Enter obtained marks of 2nd Subject");
obtain_marks3 = +prompt("Enter obtained marks of 3rd Subject");
let totalofall = 300;
let grade,remarks;
let totalobtain =obtain_marks1 + obtain_marks2 + obtain_marks3; 
let per = (totalobtain / totalofall)*100;
if(per >= 80){
  grade ='A-one';
  remarks = 'Excellent';
}else if(per >=70){
  grade ='A';
  remarks='Good';
}else if(per >=60){
  grade ='B';
  remarks='you need to improve';
}else{
  grade ='Fail';
  remarks='Sory';
}
document.writeln("<br><br><h1>Marks Sheet</h1>");
document.writeln("Total Marks: "+totalofall);
document.writeln("<br>Marks Obtained: "+totalobtain);
document.writeln("<br>Percentage: "+per+"%");
document.writeln("<br>Grade: "+grade);
document.writeln("<br>Remarks: "+remarks);


// Chapter 9 to 11 assignment 7
let secret_number = 5;
let guss_number = +prompt("Guss a number between 1 to 10");
if(guss_number == secret_number){
  alert("Bingo!");
}else if(guss_number <secret_number && guss_number>secret_number-2){
  alert("Close enough to the correct answer");
}else if(guss_number >secret_number && guss_number<secret_number+2){
  alert("Close enough to the correct answer");
}else{
  alert("Try agin")
}

// Chapter 9 to 11 assignment 8
let check_number = +prompt("Enter a number");
if(check_number % 3 == 0){
  alert("Give number is divisable by 3");
}else{
  alert('given number not divisable by 3');
}

// Chapter 9 to 11 assignment 9
check_number = +prompt("Enter a number");
if(check_number % 2 == 0){
  alert("Number is Even");
}else{
  alert('Number is Odd');
}

// Chapter 9 to 11 assignment 10
let temp = prompt("Enter temprature");
if(temp>40){
  alert('It is too hot outside.')
}else if(temp>30){
  alert('It is too hot outside.')
}else if(temp>20){
  alert('Today’s Weather is cool.')
}else if(temp>10){
  alert('Today’s Weather is cool')
}

// Chapter 9 to 11  assignment 11
let first_number = +prompt("enter a number");
let secound_number = +prompt("enter a number");
let op = prompt("enter a Operater LIke(+ - * / %)");
let resultofCalculation;
if(op == '+'){
   resultofCalculation = first_number+secound_number;
}else if(op == '-'){
   resultofCalculation = first_number-secound_number;
}else if(op == '*'){
   resultofCalculation = first_number*secound_number;
}else if(op == '/'){
   resultofCalculation = first_number/secound_number;
}else if(op == '%'){
   resultofCalculation = first_number%secound_number;
}else{
  alert("Wrong input");
}
alert(resultofCalculation)

// --------------------------End of Chapter 6 to 11------------------------------

// Chapter 12 to 13 assignment 1
let charter = prompt("Enter a single character only");
if(charter >= 'A' && charter <= 'Z'){
  alert("This is an Capital Letter")
}else if(charter >= 'a' && charter <= 'z'){
  alert("This is an Small Letter")
}else if(charter >=0 || charter <=0){
  alert("This is a number");
}else{
  alert("This is symbols");
}

// Chapter 12 to 13 assignment 2
num1 = +prompt("Enter a number");
num2 = +prompt("Enter a number");
if(num1>num2){
  alert(num1 + ' is Larger number')
}else if(num1<num2){
  alert(num2 + ' is Larger number')
}else if(num1==num2){
  alert('Both are equal')
}else{
  alert("invalid input")
}

// Chapter 12 to 13 assignment 3
let check_postive = +prompt("Enter a number");
if(check_postive >=0){
  alert("this is a postive number")
}else if(check_postive <0){
  alert("this is a Negative number")
}
else{
  alert("invalid input")
}

// Chapter 12 to 13 assignment 4
let check_vowol = prompt("Enter an Alphabat Character");
if(check_vowol == 'a' || check_vowol == 'e' || check_vowol=='i' || check_vowol=='o' || check_vowol=='u'){
  alert("This is vowel")  
}else{
  alert("This is not a vowel")  
}

// Chapter 12 to 13 assignment 5
