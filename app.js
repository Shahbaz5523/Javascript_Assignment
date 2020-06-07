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
let mypassword = 'pass123';
let confirmPassword = prompt("Enter your password to login: ");
if(confirmPassword != ""){
  if(confirmPassword == mypassword){
    alert("Correct The password you entered matches the original password");
  }else{
    alert("Incorrect password!");
  }
}else{
  alert("Please enter your password again.");
}

// Chapter 12 to 13 assignment 6
var greeting;
var hour = 13;
if(hour < 18){
  greeting = "Good day";
}else{
  greeting = "Good evening";
}

// Chapter 12 to 13 assignment 7
let currentTime  = prompt("Enter Time in 24 hours colck format and dont add : between time enter like(1900)");
if(currentTime >='0000' && currentTime<1200){
  alert("Good Morning");
}else if(currentTime >=1200 && currentTime<1700){
  alert("Good afternoon");
}else if(currentTime >=1700 && currentTime<2100){
  alert("Good evening");
}else if(currentTime >=2100 && currentTime<=2359){
  alert("Good Night");
}else{
  alert("wrong input");
}

// --------------------------End of Chapter 12 to 13------------------------------

alert("Chapter 14 to 16 staring...")
// Chapter 14 to 16 assignment 1
let studentsArry = [];
// Chapter 14 to 16 assignment 2
let studtens = {};
// Chapter 14 to 16 assignment 3
let names = ['Shahbaz','Ali','Hassan'];
// Chapter 14 to 16 assignment 4
let ages = [12,56,34,21,10];
// Chapter 14 to 16 assignment 5
let flags = [true,false];
// Chapter 14 to 16 assignment 6
let myarr = ['Shahbaz',21,'FSD'];
// Chapter 14 to 16 assignment 7
let qualifications = ['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PHD'];
document.writeln("<br><br><h1>Qualification:</h1>");
document.writeln('1) '+qualifications[0]);
document.writeln('<br>2) '+qualifications[1]);
document.writeln('<br>3) '+qualifications[2]);
document.writeln('<br>4) '+qualifications[3]);
document.writeln('<br>5) '+qualifications[4]);
document.writeln('<br>6) '+qualifications[5]);
document.writeln('<br>7) '+qualifications[6]);
document.writeln('<br>8) '+qualifications[7]);

// Chapter 14 to 16 assignment 8
let studtens_names = ['Michael','John','Tony'];
let score = [320,230,480];
let totalMarks = 500;
let studentPer = [];
studentPer[0] = (score[0]/totalMarks)*100;
studentPer[1] = (score[1]/totalMarks)*100;
studentPer[2] = (score[2]/totalMarks)*100;
document.writeln("<br><br>Score of "+ studtens_names[0] + ' is ' + score[0] + '. Percentage: '+studentPer[0]+'%');
document.writeln("<br>Score of "+ studtens_names[1] + ' is ' + score[1] + '. Percentage: '+studentPer[1]+'%');
document.writeln("<br>Score of "+ studtens_names[2] + ' is ' + score[2] + '. Percentage: '+studentPer[2]+'%');

// Chapter 14 to 16 assignment 9
let colors = ['red','blue','green','yellow','white','black','pink','purple'];
document.writeln("<br><br>Colors:<b>");
document.writeln("<br>"+colors[0]);
document.writeln("<br>"+colors[1]);
document.writeln("<br>"+colors[2]);
document.writeln("<br>"+colors[3]);
document.writeln("<br>"+colors[4]);
document.writeln("<br>"+colors[5]);
document.writeln("<br>"+colors[6]);
document.writeln("<br>"+colors[7]);
let userColor = prompt("Enter a color name to add in start of the arry");
colors.unshift(userColor);
document.writeln("<br><br>after adding in start<br>")
document.writeln("<br>"+colors[0]);
document.writeln("<br>"+colors[1]);
document.writeln("<br>"+colors[2]);
document.writeln("<br>"+colors[3]);
document.writeln("<br>"+colors[4]);
document.writeln("<br>"+colors[5]);
document.writeln("<br>"+colors[6]);
document.writeln("<br>"+colors[7]);
document.writeln("<br>"+colors[8]);

userColor = prompt("Enter a color name to add in start of the arry");
colors.push(userColor);
document.writeln("<br><br>after adding in end<br>")
document.writeln("<br>"+colors[0]);
document.writeln("<br>"+colors[1]);
document.writeln("<br>"+colors[2]);
document.writeln("<br>"+colors[3]);
document.writeln("<br>"+colors[4]);
document.writeln("<br>"+colors[5]);
document.writeln("<br>"+colors[6]);
document.writeln("<br>"+colors[7]);
document.writeln("<br>"+colors[8]);
document.writeln("<br>"+colors[9]);

colors.unshift('DarkPink');
colors.unshift('LightPink');
document.writeln("<br><br>after adding 2colors in start<br>")
document.writeln("<br>"+colors[0]);
document.writeln("<br>"+colors[1]);
document.writeln("<br>"+colors[2]);
document.writeln("<br>"+colors[3]);
document.writeln("<br>"+colors[4]);
document.writeln("<br>"+colors[5]);
document.writeln("<br>"+colors[6]);
document.writeln("<br>"+colors[7]);
document.writeln("<br>"+colors[8]);
document.writeln("<br>"+colors[9]);
document.writeln("<br>"+colors[10]);
document.writeln("<br>"+colors[11]);

colors.shift(0);
document.writeln("<br><br>after deleteting 1st color in start<br>")
document.writeln("<br>"+colors[0]);
document.writeln("<br>"+colors[1]);
document.writeln("<br>"+colors[2]);
document.writeln("<br>"+colors[3]);
document.writeln("<br>"+colors[4]);
document.writeln("<br>"+colors[5]);
document.writeln("<br>"+colors[6]);
document.writeln("<br>"+colors[7]);
document.writeln("<br>"+colors[8]);
document.writeln("<br>"+colors[9]);
document.writeln("<br>"+colors[10]);

colors.pop(10)
document.writeln("<br><br>after deleteting last color in start<br>")
document.writeln("<br>"+colors[0]);
document.writeln("<br>"+colors[1]);
document.writeln("<br>"+colors[2]);
document.writeln("<br>"+colors[3]);
document.writeln("<br>"+colors[4]);
document.writeln("<br>"+colors[5]);
document.writeln("<br>"+colors[6]);
document.writeln("<br>"+colors[7]);
document.writeln("<br>"+colors[8]);
document.writeln("<br>"+colors[9]);

userColor = prompt("Enter a color name");
let colorindex = +prompt("Enter index at which you want to add color");
colors.splice(colorindex,0,userColor)
document.writeln("<br><b><br>Insert into specific index<br>");
document.writeln("<br>"+colors[0]);
document.writeln("<br>"+colors[1]);
document.writeln("<br>"+colors[2]);
document.writeln("<br>"+colors[3]);
document.writeln("<br>"+colors[4]);
document.writeln("<br>"+colors[5]);
document.writeln("<br>"+colors[6]);
document.writeln("<br>"+colors[7]);
document.writeln("<br>"+colors[8]);
document.writeln("<br>"+colors[9]);
document.writeln("<br>"+colors[10]);

let startingcolorindex = +prompt("Enter index from which you want to remove color");
let endingcolorindex = +prompt("Enter index to which you want to remove color");
colors.splice(startingcolorindex,endingcolorindex+1);
document.writeln("<br><b><br>Remove Colors form index to index<br>");
for(let i=0; i<colors.length; i++){
  document.writeln("<br>"+colors[i]);
}

// Chapter 14 to 16 assignment 10
score = [320,230,480,120];
document.writeln("<br><br>Score of students: ");
document.writeln(score[0] +','+score[1] +','+score[2] +','+score[3]);
score.sort();
document.writeln("<br><br>Orderd Score of students: ");
document.writeln(score[0] +','+score[1] +','+score[2] +','+score[3]);

// Chapter 14 to 16 assignment 11
let cities = ['Karachi','Lahore','Faisalabad','Peshawar'];
document.writeln("<br><b>Cities List:<br>");  
document.writeln(cities[0]+','+cities[1]+','+cities[2]+','+cities[3]);  
document.writeln("<br><b><br>Selected Cities List:<br>");  
let SelectedCites = cities.slice(0,3);
document.writeln(SelectedCites[0]+','+SelectedCites[1]+','+SelectedCites[2]);  

// Chapter 14 to 16 assignment 12
var arr = ['This', 'is', 'my', 'cat'];
document.writeln("<br><br>Array:<br>");
document.writeln(arr[0]+","+arr[1]+","+arr[2]+","+arr[3]);
var joinedArr = arr.join(' ');
document.writeln("<br><br>String:<br>");
document.writeln(joinedArr);

// Chapter 14 to 16 assignment 13
let devices = ['Keyboard','mouse','printer','monitor'];
document.writeln("<br><br>Divices:");
document.writeln(devices[0]+','+devices[1]+','+devices[2]+','+devices[3]);
document.writeln("<br><br>Out:");
document.writeln('<br>'+devices[0]);
document.writeln("<br><br>Out:");
document.writeln('<br>'+devices[1]);
document.writeln("<br><br>Out:");
document.writeln('<br>'+devices[2]);
document.writeln("<br><br>Out:");
document.writeln('<br>'+devices[3]);

// Chapter 14 to 16 assignment 14
document.writeln("<br><br>Divices:");
document.writeln(devices[0]+','+devices[1]+','+devices[2]+','+devices[3]);
document.writeln("<br><br>Out:");
document.writeln('<br>'+devices[3]);
document.writeln("<br><br>Out:");
document.writeln('<br>'+devices[2]);
document.writeln("<br><br>Out:");
document.writeln('<br>'+devices[1]);
document.writeln("<br><br>Out:");
document.writeln('<br>'+devices[0]);

// Chapter 14 to 16 assignment 15
let phones =['Apple','Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
document.write("<br><br><select><option>"+ phones[0] +"</option><option>"+ phones[1] +"</option><option>"+ phones[2] +"</option><option>"+ phones[3] +"</option><option>"+ phones[4] +"</option><option>"+ phones[5] +"</option></select><br><br>");

// --------------------------End of Chapter 14 to 16------------------------------

// Chapter 17 to 20 assignment 1
let multi = [[],[],[]];

// Chapter 17 to 20 assignment 2
let matrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for(let j=0; j<matrix.length; j++){
  for(let k=0; k<4; k++){
    document.writeln(matrix[j][k]);
  }
  document.writeln('<br>')
}

// Chapter 17 to 20 assignment 3
for(let l=1; l<=10; l++){
  document.writeln(l + '<br>')
}

// Chapter 17 to 20 assignment 4
let tablenum = +prompt('Enter a number for mutiplication table:');
let len =  +prompt('Enter a length:');
document.writeln("<br><br>")
for(let i=1; i<=len; i++){
  document.writeln(tablenum + 'x' + i + '=' + tablenum*i + '<br>');
}

// Chapter 17 to 20 assignment 5
let fruits = ['apple', 'banana', 'mango', 'orange','strawberry'];
for(let i=0; i<fruits.length; i++){
  document.writeln(fruits[i]+"<br>")
}
document.writeln("<br>")
for(let j=0; j<fruits.length; j++){
  document.writeln("Element at index "+ j +" is "+fruits[j]+"<br>")
}

// Chapter 17 to 20 assignment 6
document.writeln('<br><br>Counting:')
for(let k=0; k<=15; k++){
  document.writeln(k +',');
}
document.writeln('<br><br>Reverse Counting:')
for(let l=10; l>=1; l--){
  document.writeln(l +',');
}
document.writeln('<br><br>Even:')
for(let l=0; l<=20; l++){
  if(l%2==0){
    document.writeln(l +',');
  }
}
document.writeln('<br><br>Odd:')
for(let m=0; m<=20; m++){
  if(m%2!=0){
    document.writeln(m +',');
  }
}
document.writeln('<br><br>Series:')
for(let l=1; l<=20; l++){
  if(l%2==0){
    document.writeln(l +'k,');
  }
}

// Chapter 17 to 20 assignment 7
let foods  = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
let findFood = prompt("Welcome to ABC Bakary. What do you want to order.");
for(let m=0;m<foods.length;m++){
  if(findFood.toLowerCase() == foods[0]){
    alert(foods[m] + ' is available at index ' + m + ' in our bakary');
    break;
  }else{
    alert("We are sorry. "+findFood+" is not available in our bakary.")
  }
}

// Chapter 17 to 20 assignment 8 and 9
let numbersArry = [24, 53, 78, 91, 12];
alert('Max number is : '+ Math.max(...numbersArry));
alert('Min number is : '+ Math.min(...numbersArry));

// Chapter 17 to 20 assignment 10
document.writeln("<br><br>");
for(let n=1;n<=100;n++){
  if(n%5==0){
    document.writeln(n + ',');
  }
}
