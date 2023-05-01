function makeFriendsList(friends) {

  const arr = friends;

  let newUl = document.createElement("UL");

  
  arr.forEach(item => {
    newUl.insertAdjacentHTML('beforeEnd', `<li>${item.firstName} ${item.lastName}</li>`);
  });

  return newUl
  
}

