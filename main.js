// Ex 1. Number comparison
const exercise1 = (five, eight) => {
  if (five < eight) console.log(`${five} is less than ${eight}`);
  else console.log("ERROR");
}

// Ex 2. Print even numbers from given range
const exercise2 = (min, max) => {
  let evenNums = [];
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) evenNums.push(i);
  }
  console.log(`Even numbers from ${min} - ${max}: ${[...evenNums]}`)
}

// Ex 3. Prompt user for two variables. log bigger number
const compare = (num1,num2) => {
  if (num1 === num2) return `Both numbers are equal to each other`;
  if (num1 > num2) return `${num1} is the larger number`;
  return `${num2} is the larger number`;
}

const exercise3 = () => {
  const num1 = parseInt(prompt('Enter a number'));
  const num2 = parseInt(prompt('Enter another number'));
  console.log(compare(num1,num2));
}

// Ex 4. loop prompt; end when q is entered
const exercise4 = () => {
  let continueLooping = true;
  let loopNumber = 0;
  while (continueLooping) {
    let answer = prompt("Enter anything. Enter 'q' to quit.");
    if (answer !== 'q') {
      loopNumber++;
      alert(`Attempt ${loopNumber}:\nEntered value: ${answer}`)
    } else {
      continueLooping = false;
    }
  }
}

// Ex 5. bank account withdraw and deposit
const exercise5 = () => {
  let balance = parseFloat(prompt(`What is your starting balance?`));
  let continueTransactions = true;
  while (continueTransactions) {
    let action = prompt(`Current Balence: $${balance}\nDo you want to withdraw or deposit funds?\nEnter 'deposit' to deposit or 'withdraw' to withdraw\nEnter 'q' to quit`); 
    if (action.toUpperCase() === 'Q') continueTransactions = false;
      else if (action.toUpperCase() === 'DEPOSIT') {
      let deposit = parseFloat(prompt('How much money do you want to deposit?'));
      balance += deposit;
    } else if (action.toUpperCase() === 'WITHDRAW') {
      let deposit = parseFloat(prompt('How much money do you want to withdraw?'));
      balance -= deposit;
    } else {
      alert('Invalid action. Please choose an available action');
    }
  }
  alert(`Recipt:\nCurrent Balance: $${balance}`)
}

const main = () => {
  exercise1(5,8);
  exercise2(19,58);
  exercise3();
  exercise4();
  exercise5();
}
