/* РАБОТА С КОЛЛЕКЦИЕЙ (МАССИВОМ ОБЪЕКТОВ) */
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];
console.table(friends);


/* ИЩЕМ ДРУГА ПО ИМЕНИ */
const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.name);

    if (friend.name === friendName) {
      return 'НАШЛИ!!!';
    }
  } 
  return 'НЕ НАШЛИ :(';
};
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));


/* ПОЛУЧАЕМ ИМЕНА ВСЕХ ДРУЗЕЙ */
const getAllNames = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    console.log(friend.name);

    names.push(friend.name);
  }
  return names;
};
// console.log(getAllNames(friends));


/* ПОЛУЧАЕМ ИМЕНА ТОЛЬКО ТЕХ ДРУЗЕЙ, КОТОРЫЕ ОНЛАЙН */
const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);

    if (friend.online) {
      onlineFriends.push(friend);
    }
  }
  return onlineFriends;
};
// console.log(getOnlineFriends(friends));


const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend.online);

    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }
  return offlineFriends;
};
// console.log(getOfflineFriends(friends));



// СОЗДАЕМ " МАССИВА: онлайн и офлайн?
// если true - в первый, если false - во второй
const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }
    friendsByStatus.offline.push(friend);
  }
  return friendsByStatus;
};
// console.log(getFriendsByStatus(friends));
