// Ex 1. Number comparison
const exercise1 = (five, eight) => {
  // if five is less than eight, log it in console. else, log error
  console.log("Exercise 1:");
  if (five < eight) console.log(`${five} is less than ${eight}`);
  else console.log("ERROR");
};

// Ex 2. Print even numbers from given range
const exercise2 = (min, max) => {
  console.log("Exercise 2:");
  // create empty array
  let evenNums = [];
  // simple for loop. min serves as starting point; max serves as the limit
  for (let i = min; i <= max; i++) {
    // if number is multiple of 2, add to evenNums array
    if (i % 2 === 0) evenNums.push(i);
  }
  // log range with evenNums
  console.log(`Even numbers from ${min} - ${max}: ${[...evenNums]}`);
};

// Ex 3. Prompt user for two variables. log bigger number
const compare = (num1, num2) => {
  // Guard clauses
  if (num1 === num2) return `Both numbers are equal to each other`;
  if (num1 > num2) return `${num1} is the larger number`;
  return `${num2} is the larger number`;
};

const exercise3 = () => {
  // use prompts to save variables that will be used as arguments in compare() function
  const num1 = parseInt(prompt("Exercise 3:\nEnter a number"));
  const num2 = parseInt(prompt("Exercise 3:\nEnter another number"));
  alert(`Exercise 3:\n${compare(num1, num2)}`);
};

// Ex 4. loop prompt; end when q is entered
const exercise4 = () => {
  // declare array that contains accepted value
  const accepted = ['1','2','3'];
  // initialize boolean that will be used in while loop
  let continueLooping = true;
  let answer = prompt("Exercise 4:\nEnter 1,2, or 3. Enter 'q' to quit.");
  while (continueLooping) {
    // if user quits, quit loop
    if (answer.toUpperCase() === "Q") continueLooping = false;
    // if user doesn't quit, prompt user for another entry
    else if (accepted.indexOf(answer) > -1)
      answer = prompt(
        `Exercise 4:\nPrevious entry: ${answer}\nEnter 1,2, or 3. Enter 'q' to quit.`
      );
    else {
      answer = prompt("ERROR! Please enter 1,2, or 3. Enter 'q' to quit.")
    }
  }
};

// Ex 5. bank account withdraw and deposit
const exercise5 = () => {
  // set initial balance
  let balance = parseFloat(
    prompt(`Exercise 5:\nWhat is your starting balance?`)
  );
  // boolean to use for while loop conditional
  let continueTransactions = true;
  while (continueTransactions) {
    // prompt user for desired action while showing current balance
    let action = prompt(
      `Excercise 5:\nCurrent Balance: $${balance}\nDo you want to withdraw or deposit funds?\nEnter 'deposit' to deposit or 'withdraw' to withdraw\nEnter 'q' to quit`
    );
    // if user quits, exit loop
    if (action.toUpperCase() === "Q") continueTransactions = false;
    // if user wants to deposit, ask for deposit amount then add to balance
    else if (action.toUpperCase() === "DEPOSIT") {
      let deposit = parseFloat(
        prompt("Exercise 5:\nHow much money do you want to deposit?")
      );
      balance += deposit;
      // if user wants to withdraw, ask for withdraw amount then subtract from balance
    } else if (action.toUpperCase() === "WITHDRAW") {
      let deposit = parseFloat(
        prompt("Exercise 5:\nHow much money do you want to withdraw?")
      );
      balance -= deposit;
      // if user doesn't choose available action, tell them and restart loop
    } else {
      alert("Exercise 5:\nInvalid action. Please choose an available action");
    }
  }
  // when user finished transactions, alert them of their current balance
  alert(`Exercise 5:\nRecipt:\nCurrent Balance: $${balance}`);
};

const main = () => {
  exercise1(5, 8);
  exercise2(19, 58);
  exercise3();
  exercise4();
  exercise5();
  alert("Look at console for output of Exercises 1 and 2");
};

main();
