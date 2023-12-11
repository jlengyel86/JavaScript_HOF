// Exercise 1
console.log(`Exercise 1: Function Plus`);

function plus(num) {
    return function (plusNumber) {
        return num + plusNumber;
    };
}

const plus15 = plus(15);

console.log(plus15(10));

//Exercise 2
console.log(`Exercise 2: Name Array`);

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach(user => console.log(user.name));

  //Exercise 3
  console.log(`Exercise 3: Map Function`);

  let newUsers = users.map((user) => {
    return {name: user.name, score: user.score};
  });

  console.log(newUsers);

  //Exercise 4
  console.log(`Exercise 4: Active Users`);

  let activeUsers = users.filter((user) => user.isActive);

  console.log(activeUsers);

  //Exercise 5
  console.log(`Exercise 5: Sort Scores`);

  users.sort((a, b) => {
    if(a.score < b.score) return 1;
    else return -1;
  });

  console.log(users);

  //Exercise 6
  console.log(`Exercise 6: Reduce`);

  let avgScore = users.reduce((sum, user) => sum + user.score, 0) / users.length;

  console.log(avgScore);