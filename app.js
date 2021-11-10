///   CHAPTER 21-25  STRING METHODS   ///

// Q NO. 1

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + lastName;
// document.write("Assalam Alaikum " + fullName);


// Q NO. 2

// var favMobile = prompt("Enter Your Favourite Mobile Phone");
// document.write("Your Favourite Phone Is: " + favMobile);
// document.write("<br><br>Length Of String: " + favMobile.length);


// Q NO. 3

// var nationality = "Pakistani";
// document.write("String: " + nationality);
// var index = nationality.indexOf("n");
// document.write("<br>Index of 'n':" + index);


// Q NO. 4

// var hi = "Hello World";
// var index = hi.lastIndexOf("l");

// document.write("String: " + hi);
// document.write("<br>Last index of 'l': " + hi.lastIndexOf("l"));


// Q NO. 5

// var nationality = "Pakistani";
// document.write("String: " + nationality);
// document.write("<br>Character at index 3: " + nationality.charAt(3));


// Q NO. 6

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(lastName);
// document.write("Assalam Alaikum " + fullName);


// Q NO. 7

// var city = "Hyderabad";
// document.write("City: " + city);
// var replacemet = city.replace("Hyder", "Islam");
// document.write("<br>After Replacemet: " + replacemet);


// Q NO. 8

// var para = "Ali and Sami are best friends. They play cricket and football together."
// var uptPara = para.replace(/and/g, "&");

// document.write("<strong>String: </strong> " + para);
// document.write("<br><strong>After Replacement: </strong> " + uptPara);


// Q NO. 9

// var string = "472";
// var number = parseInt(string);
// document.write("value: " + string);
// document.write("<br>Type: " +typeof string);
// document.write("<br>value: " + number);
// document.write("<br>Type: " +typeof number);


// Q NO. 10

// var userInput = prompt("Enter Something");
// document.write("User Input: " + userInput);
// document.write("<br>UPPER CASE: " + userInput.toUpperCase());


// Q NO. 11
/*
var userInput = prompt("Enter an Alphabet");
document.write("User Input: " + userInput);

var firstChar = userInput.slice(0,1);
var capWord = firstChar.toUpperCase();

var uptPara = userInput.slice(1);
document.write("<br>Title case: " + capWord.concat(uptPara));
*/


// Q NO. 12

// var num = 35.36 ;
// var str = num.toString();
// var uptPara = str.replace(".", "")
// document.write(typeof num + " " + num);
// document.write("<br>" + typeof uptPara + " " + uptPara);


// Q NO. 13


// Q NO. 14

/*
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userItem = prompt("Welcome To Marvel Bakery.What do you want to order Sir/Maam");
var flag = false
for (var i = 0; i < items.length; i++) {
    if (userItem.toLowerCase() === items[i]) {
        document.write(userItem + " is <strong>Available</strong> at index " + i + " is " + items[i] + "<br>");
        flag = true
    }

}
if (flag === false) {
    document.write("We are Sorry " + userItem + " is <strong>Not Available</strong> in our bakkery" + "<br>");
}
*/


// Q NO. 15

var password = prompt("Enter Your Password");