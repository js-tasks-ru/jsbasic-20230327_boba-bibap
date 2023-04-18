
// let user1 = {
//   "balance": "$1,325.45",
//   "picture": "https://placehold.it/32x32",
//   "age": 21,
//   "name": "Golden Branch",
//   "gender": "male",
//   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//   "favouriteFruit": "banana"
// };

// let user2 = {
//   "balance": "$1,925.65",
//   "picture": "https://placehold.it/32x32",
//   "age": 61,
//   "name": "Booka",
//   "gender": "male",
//   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//   "favouriteFruit": "banana"
// };

// let user3 = {
//   "balance": "$1,825.65",
//   "picture": "https://placehold.it/32x32",
//   "age": 31,
//   "name": "Silver",
//   "gender": "male",
//   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//   "favouriteFruit": "banana"
// };



// function showSalary(users, age) {


//   let res = users.reduce((acc,cur) => {
//     if (cur.age <= age) {
//       acc.push(`${cur.name}, ${cur.balance}`)
//     }
//     return acc
//   },[])

//   return res.join("\n");

// }

// let users = [user1, user2, user3]

// let result = showSalary(users, 31);

// console.log(result);



function showSalary(users, age) {
 
  let filtrated = users
    .filter((item) => item.age <= age)
    .reduce((acc, item) => {
      acc.push(item.name + ", " + item.balance);
      return acc;
    }, [])
    .join("\n");
  return filtrated;
}