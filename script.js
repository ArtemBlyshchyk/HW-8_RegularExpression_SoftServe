/*
TASK #1===========================================================================================
Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
Приклад роботи:
upperCase('regexp'); 
"String's not starts with uppercase character"
upperCase('RegExp');
"String's starts with uppercase character"
*/
// SOLUTION
// function upperCase(str) {
//   if (/^[A-Z]/.test(str)) {
//     console.log("String's starts with uppercase character");
//   } else {
//     console.log("String's not starts with uppercase character");
//   }
// }

// upperCase("regexp");
// upperCase("RegExp");

/*
TASK #2===========================================================================================
Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
Приклад роботи:
checkEmail("Qmail2@gmail.com");
true
*/
// SOLUTION
// function checkEmail(email) {
//   let regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // символ + та - повинні стояти або поряд у виразі або в кінці [a-zA-Z0-9._%+-], [a-zA-Z0-9.+_%-], [a-zA-Z0-9.+-_%]
//   return regExp.test(email);
// }
// console.log(checkEmail("Qmail2@gmail.com"));

/*
TASK #3===========================================================================================
Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
Приклад роботи:
Вхідний рядок    "Java Script"
Вихід    “Script, Java”
*/
// SOLUTION
// let regExp = /(\S+)\s+(\S+)/;
// let text = "Java Script";
// let swappedText = text.replace(regExp, "$2 $1");
// console.log(swappedText);

/*
TASK #4===========================================================================================
Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).
*/
// SOLUTION
// function validBankCard(cardNumber) {
//   let regexp = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/; //SECOND VARIANT /^\d{4}-\d{4}-\d{4}-\d{4}$/ // THIRD VARIANT /\d{4}(\-\d{4}){3}/;
//   if (regexp.test(cardNumber)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let bankCard = "9999-9999-9999-9999";
// console.log(validBankCard(bankCard));

/*
TASK #5===========================================================================================
Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
Вимоги:
•  Цифри (0-9).
•  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
•  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
 •  Символ “-” не може повторюватися.

checkEmail('my_mail@gmail.com');
"Email is correct!"
checkEmail('#my_mail@gmail.com');
"Email is not correct!"
checkEmail('my_ma--il@gmail.com');
"Email is not correct!"
*/
// SOLUTION
// function checkEmail(email) {
//   const emailRegex =
//     /^[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*\.[A-Za-z]{2,}$/; // SECOND VARIANT /^[a-zA-Z0-9]+([-_][a-zA-Z0-9_]+)*\@[a-z]+\.[a-z]+$/;
//   if (emailRegex.test(email)) {
//     return "Email is correct!";
//   } else {
//     return "Email is not correct!";
//   }
// }
// console.log(checkEmail("my_mail@gmail.com"));
// console.log(checkEmail("#my_mail@gmail.com"));
// console.log(checkEmail("my_ma--il@gmail.com"));

/*
TASK #6===========================================================================================
Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
Приклад роботи:
checkLogin('ee1.1ret3');
true 
//1.1, 3
checkLogin('ee1*1ret3');
false 
//1, 1, 3
*/
// SOLUTION
// function checkLogin(str) {
//   //   Checking the length of login (from 2 to 10);
//   if (str.length < 2 || str.length > 10) {
//     return false;
//   }
//   // Checking if the first symbol is number
//   if (!/[a-zA-Z]/.test(str[0])) {
//     return false;
//   }

//   // Searching all symbols in the line
//   const numbers = str.match(/\d+(\.\d+)?/g);
//   // Checking if the found numbers is number
//   if (numbers === null) {
//     return false;
//   }
//   if (str.match(/\*/)) {
//     console.log(numbers);
//     return false;
//   }
//   // Enter found numbers
//   console.log(numbers);
//   return true;
// }
// console.log(checkLogin("ee1.1ret3")); // true //1.1, 3

// console.log(checkLogin("ee1*1ret3")); // false //1, 1, 3
