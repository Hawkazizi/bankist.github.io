"use strict";

// const book = {
//   location: "nyc",
//   array1: [],
//   bookings(flightNum, name1) {
//     console.log(
//       `${name1} booked seat on ${this.location} with the number of ${flightNum}`
//     );

//     this.array1.push({ flight: `${flightNum}`, name1 });
//   },
// };
// const book2 = {
//   location: "WDC",
//   array1: [],
// };

// const book3 = {
//   location: "HTC",
// };

// // const x = book.bookings;

// const books = book.bookings;

// const bookEw = books.bind(book2);

// // bookEw(21, "sina");
// const x = function () {
//   let x = 1;
//   x += 0;
//   console.log(x);
// };

// const operator = function () {
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };

// document.querySelector(".poll").addEventListener("click", operator);

// function addsum(arr) {
//   var sum = 0;
//   for (var z = 0; z < arr.length; z++) {
//     sum += arr[z];
//   }
//   return sum;
// }

// const tax = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const tax3 = tax(10)(100);
// console.log(tax3);

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n(Write option number)`
//       )
//     );

//     typeof answer === "number" &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     console.log(this.answers);
//   },
//   displayResults() {},
// };

// // poll.registerNewAnswer();
// // poll.registerNewAnswer();

// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));
// {
//   const x = "hello";
//   var xx = "hi";
// }
// // console.log(x);
// console.log(xx);

// const selector = function () {
//   let counter = 0;

//   return function () {
//     counter++;

//     console.log(`${counter} times`);
//   };
// };

// const select = selector();
// document.querySelector(".poll").addEventListener("click", select);

// let f;

// const fun = function () {
//   const x = 0;

//   f = function () {
//     console.log((x + 2) * 89);
//   };
// };

// fun();
// f();

// setTimeout(function () {
//   console.log("hello");
// }, 5000);

// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";

//   document.querySelector("body").addEventListener("click", function () {
//     header.style.color == "blue";
//   });
// })();

// BANKIST APP

// Data
const account1 = {
  owner: "Shahin Azizi",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// // numbers.splice(3, 2);
// // console.log(numbers);
// console.log(numbers[(0, 2)]);

// movements.forEach(function (xxx, i, p) {
//   // console.log(xxx);
//   // console.log(i);
//   console.log(p);
// });

// currencies.forEach(function (xx, xxx, xxxx) {
//   console.log(xx);
//   console.log(xxx);
//   console.log(xxxx);
// });

// const newSet = new Set([1, 2, 3, 4, 56]);
// console.log(newSet);
// newSet.forEach(function (xxx, xxxx, xxxxx) {
//   console.log(xxx);
//   console.log(xxxx);
//   console.log(xxxxx);
// });

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `  
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  
    <div class="movements__value">${mov.toFixed(2)}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// displayMovements(account1.movements);

// const usdDollor = 222;

// const movs = movements.map(function (mov) {
//   return mov * usdDollor;
// });

// console.log(movs);
// const arrs = [];
// for (const mov of movements) {
//   arrs.push(mov);
// }

// console.log(arrs);

// const arrs = [];

// const movement = movements.filter(function (mov) {
//   return mov < 0;
// });
// for (const mov of movements) {
//   if (mov < 0) {
//     arrs.push(mov);
//   }
// }

// const arrowing = movements.map((mov) => mov + 2);
// console.log(movement);
// console.log(arrs);
// console.log(arrowing);

// const movement = movements.reduce(function (acc, cur, i, arr) {
//   const x = acc;
//   const xx = cur;
//   const xxx = arr;
//   console.log(x);
//   // console.log(xx);
//   console.log(xxx);
//   return cur + acc;
// });
// console.log(movement);

// const arrr = [];
// for (const mov of movements) {
//   arrr.push(mov);
// }

// console.log(arrr);

// code challenge 2

// const calcAverageHumanAge = function (ages) {
//   const toHumanAge = ages.map(function (age) {
//     age <= 2 ? 2 * age : 16 + age * 4;

//     console.log(toHumanAge);
//   });
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// function createPhoneNumber(numbers) {
//   const random = Math.floor(Math.random() * numbers.length);
//   console.log(`(${numbers[random] + numbers[random] + random}) `);
// }

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// for (let i = 0; i < username.length; i++) {
//   const y = ;

//   console.log(y);
// }

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((mov) => mov[0])
      .join("");
  });
};
createUserNames(accounts);

// const filter = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(filter);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};
// calcDisplayBalance(account1.movements);

// const max = movements.reduce(function (acc, mov) {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// });
// const min = movements.reduce(function (acc, mov) {
//   if (acc < mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// });

// console.log(max);
// console.log(min);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};
// calcDisplaySummary1(account1.movements);

// const calcAverageHuman = function (movs) {
//   const average = movs.reduce((acc, mov) => acc + mov, 0);
//   const av2 = average / movs.length;
//   console.log(av2);
// };
// calcAverageHuman([1, 2, 3, 5, 7, 9, 9, 6, 53, 343, 47, 8, 9]);

// const accs = accounts.find((acc) => acc.owner === "Jonas Schmedtmann");
// console.log(accs);

const updateUI = function (acc) {
  displayMovements(acc.movements);

  calcDisplayBalance(acc);

  calcDisplaySummary(acc);
};
const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //In each call, print the reamining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //When 0 seconds, stop timer and and log out user

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;

      // Decrease 1s
      time--;
    }
  };
  // Set time to 5 minutes
  let time = 120;
  //Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
let currentAccount, timer;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = "";

    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    updateUI(currentAccount);
  } else alert("Username or PIN is not correct");
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
    updateUI(currentAccount);

    //Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;

    labelWelcome.textContent = "This account no longer exists :(";
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      currentAccount.movements.push(amount);

      updateUI(currentAccount);

      //Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  } else {
    alert("more than that you should have 😕");
  }
  inputLoanAmount.value = "";
});

// const arrs = [1, 2, 3, 5, 6, -1, -6, -3];

// console.log(arrs.every((mov) => mov > 0));

// const allmovments = accounts.map((mov) => mov.movements);
// console.log(allmovments);

// const litraryAll = allmovments.flat();
// console.log(litraryAll);

// const sums = litraryAll.reduce((acc, mov) => acc + mov, 0);
// console.log(sums);

// cleaner code

// const calcBalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(calcBalance);

// const unsortedarr = ["az", "ah", " as", "af"];
// unsortedarr.sort();

// console.log(unsortedarr);

// console.log(movements);

// const sorted = movements.sort((a, b) => {
//   if (b < a) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
// });
// console.log(sorted);
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();

  // let sort = !unsorted;
  displayMovements(currentAccount.movements, !sorted);

  sorted = !sorted;
});

// const diceRolls = Array.from({ length: 100 }, function (movs) {
//   return movs;
// });
// console.log(diceRolls);

// labelBalance.addEventListener("click", function () {
//   const movmentsUI = Array.from(
//     document.querySelectorAll(".movements__value"),
//     (el) => Number(el.textContent.replace("€", ""))
//   );
//   console.log(movmentsUI);
// });
// const reduceUses = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (sums, curr) => {
//       curr > 0 ? (sums.desposits += curr) : (sums.withdrawal += curr);
//       return sums;
//     },
//     { desposits: 0, withdrawal: 0 }
//   );

// console.log(reduceUses);

// const converter = function (eee) {
//   const exceptions = ["a", "an", "the", "for", "with", "is"];

//   const arrayzation = eee.toLowerCase().split(" ");

//   return arrayzation.map((word) =>
//     exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//   ).join(' ');
// };
// // console.log(converter("this is a nice topic"));

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["alice", "bob"] },

//   { weight: 8, curFood: 200, owners: ["matilda"] },
//   {
//     weight: 13,
//     curFood: 275,
//     owners: ["sarah", "john"],
//   },
//   { weight: 32, curFood: 340, owners: ["michael"] },
// ];
// const looping = new Array(dogs);
// console.log(looping);

// const newarr = new Array((dogs.reccc = d * 0.12));
// console.log(newarr);
// dogs.map((dog) => (dog.reFood = Math.trunc(dog.weight ** 0.75 * 28)));
// // console.log(dogs);
// dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// const dogSarah = dogs.find((dog) => dog.owners.includes("sarah"));
// console.log(dogSarah);

// const tooMuchEaters = dogs.filter((dog) => dog.recFood < dog.curFood);
// const tooMuchEaterOwners = [
//   ...tooMuchEaters[0].owners,
//   ...tooMuchEaters[1].owners,
// ];

// console.log(tooMuchEaters);
// const thoseWhoHasNotEatenTooMuch = dogs.find(
//   (dog) => dog.recFood > dog.curFood
// );
// const thoseWhoHasNotEatenTooMuchOwners = thoseWhoHasNotEatenTooMuch.owners;
// console.log(thoseWhoHasNotEatenTooMuchOwners);

// console.log(tooMuchEaterOwners);

// console.log(dogs);

// console.log(typeof +"12");

// const randomINt = function (min, max) {
//   return Math.trunc(Math.random() * (max - min)) + min;
// };

// console.log(randomINt(2, 5));

// const redrow = document.querySelector(".movements__type--withdrawal");
// const redrow2 = document.querySelector(".movements__value");
// btnTransfer.addEventListener("click", function () {
//   [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
//     if (Number.parseInt(redrow2.textContent) > 0) {
//       row.style.backgroundColor = "blue";
//     }
//     // if ((redrow.textContent = "5 WITHDRAWAL")) {
//     //   row.style.backgroundColor = "red";
//     // } else {
//     //   row.style.backgroundColor = "orange";
//     // }
//   });
// });

// console.log(2 ** 53);

// console.log(Number.MAX_SAFE_INTEGER);

// const now = new Date();
// console.log(now);
// console.log(account1.movementsDate[0]);

// labelDate.textContent = new Date();
