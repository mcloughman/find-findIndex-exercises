/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  return usersArray.find(userObj => {
    return userObj.username === username;
  })
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
    // There may well be a more efficient way to write this. But this is what came to mind. We have to test for possible match. And if so, we then have to splice the original array at the index of the match. But splicing this single element returns an array with a single element. We need to tack on [0] at the end of our return statement to flush out desired obj. By default, if no match, it returns undefined
    let possibleIdx = usersArray.findIndex(userObj => {
    return userObj.username === username;
  })
  if (possibleIdx !== -1) {
    return usersArray.splice(possibleIdx, 1)[0]
  }
}

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];
console.log(removeUser(users, 'akagen')) 
console.log(removeUser(users, 'mlewis')) 