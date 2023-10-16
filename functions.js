// function syntax
function nameOfFunction(parameter) { // function definition with some input
    // function body
    }

//example of a function

function displayGreeting() {
    console.log('Hello, world!');
  }

  // calling or invoking a function

  // calling the function
displayGreeting();
// function parameters
function name(param, param2, param3) {

}

// function with a parameter called name
function displayGreeting(name) { 
    // creating a new local variable that inserts the name into a string   
    const message = `Hello, ${name}!`; 
    // printing the variable to the console
    console.log(message);
}
//callling and passing parameters
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run

// default values
function displayGreeting(name, salutation='Hello') {
    console.log(`${salutation}, ${name}`);
  }

  displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"

//return a variable
return myVariable;

// how to return on his own
return;

function createGreetingMessage(name) {
    const message = `Hello, ${name}`;
    return message;
  }

  //local variable
  let greetingMessage = createGreetingMessage('Christopher');

  //use a callback
  function displayDone() {
    console.log('Done!');
}
// set a timer
// timer value is in milliseconds
setTimeout(displayDone, 3000);

//anonymous functions
setTimeout(
    function() { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)
//arrow functions
setTimeout(
    () => { // anonymous function
        console.log('Done!');
    },
    3000 // 3000 milliseconds (3 seconds)
)
