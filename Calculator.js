/*

Inspired by this article on debugging - check it out for useful tips and hints
// https://medium.com/young-coder/basic-debugging-in-visual-studio-code-b9a5d193fe7b



*/

let andThisIsAGlobalVariable = 'howdy all';
if (getCookie('trackingCode') != 'XYZ' && isNaN(getCookie('trackingCode'))){
  alert('reinitialzing cookie');
  setCookie('trackingCode', 'XYZ', 30);
} else {
  alert('cookie is fine:' + getCookie('trackingCode'));
}

//setCookie('username', 'XYZ', -1);
let cookieName = 'trackingCode';
let hat = getCookie(cookieName);
let a = 1;

// alert('value of tracking code is ' + hat);

// Set a Cookie
function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

// Apply setCookie

function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded .split('; ');
  let res;
  cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res;
}

/**
 * Performs the actions linked to the click of a button in the main html form
 */
function doButtonClick() {

  // Let's assign our form fields to variables.
  // In javascript, use 'let' to declare a new variable whose value may change as some point
  //       during script execution.
  // Use 'const' to declare a new variable whose value will not change (i.e. it's 'constant' ;) from what it was initialized as.
  let numberA = document.getElementById("numA").value;
  let numberB = document.getElementById("numB").value;
  let phone = getCookie('trackingCode');

  // HW: 'git commit' the changes and push them up to the repo and let Jared know when this is done so he can make sure that the HW assignment is feasible.

  // HW: if phone is a number then set numberA = to the value of phone 
  // This should result in the numberA being larger each time you load the page,
  // because it'll take whatever it was last time (from setting a cookie below)
if (isNaN(phone)) {
  console.log (`Phone:${phone} is not a number`)
}
else{
  console.log(`numberA:${phone} IS a number`)
  numberA = phone
}

  // Sample if statement - let's see if numberA is a number or not.
  if (isNaN(numberA)) {
    console.log(`numberA:${numberA} is not a number`);
  }
  else {
    console.log(`numberA:${numberA} IS a number`);
  }

  // Let's use some helper functions to add an multiply our numbers
  let additionResult = addNumbers(numberA, numberB);

  // HW: Write the result of additionResult out as the trackingCode cookie.
  setCookie('trackingCode', additionResult, 30);


  let multiplicationResult = multiplyNumbers(numberA, numberB);

  // Let's create a new instance of our Cat object
  const hiccup = new Cat();
  let catWeightBeforeExercise = hiccup.weight;

  // Here's an example For loop
  let iterations = 3;
  for (let i = 0; i < iterations; i++) {
    hiccup.exercise();
  }


  // Here's an example While loop
  let loopCatcher = 1;
  const breakAfterThisMany = 4;
  while (loopCatcher < 10) {
    console.log(`Now we're on loop number ${loopCatcher}`);
    loopCatcher++;

    if (loopCatcher >= breakAfterThisMany) {
      break;
    }
  }

  // Reinitialize loopCatcher variable back to 1
  loopCatcher = 1;

  // Here's an example Do loop
  do {
    console.log(`Now we're on loop number ${loopCatcher}`);
    loopCatcher++;

    if (loopCatcher == breakAfterThisMany) {
      // This will make us skip the break check below on this iteration.
      continue;
    }

    if (loopCatcher >= breakAfterThisMany) {
      break;
    }
    
  } while (loopCatcher < 10);

  let finalOutput = `(addition: ${additionResult}) (multiplication: ${multiplicationResult})`;
  finalOutput += ' (cat weight:' + hiccup.weight +')';
  

  document.getElementById("result").innerHTML = finalOutput + ' - ' + andThisIsAGlobalVariable;
}



/**
 * Takes two numbers and multiplies them together.
 * 
 * @param {int} a 
 * @param {int} b 
 * @returns {int}
 */
function addNumbers(a, b) {
  let result = Number (a) + Number (b);
  return result;
}

/**
 * Take two numbers and multiply them together to give a result.
 * 
 * @param {integer} a 
 * @param {integer} b 
 * @returns 
 */
function multiplyNumbers(a, b) {
  let result = a * b;
  return result;
}



// Object
class Cat {

  // This is what gets called when someone "new"s up an instance of this class.
  constructor() {
    // Properties
    this.weight = 20;
    this.color= 'black';
    this.name= 'Hiccup';
  }

  // Method
  exercise() {
    if (this.weight <= 10) {
      alert('no more exercise, getting too skinny');
      return;
    }
    this.weight -= 1;
  }

  // Method
  feed() {
    this.weight += 3;
  }

}



