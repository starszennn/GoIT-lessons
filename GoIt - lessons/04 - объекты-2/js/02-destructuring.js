/* ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА:
     - Значения по умолчанию;
     - Имя переменной отличное от имени свойства 
     
const { } = playlist; -это запись деструктуризации объекта (распаковка) */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// const {
//   rating, // это имена свойства
//   tracks,
//   name,
//   trackCount: numberOfTracks = 0, // изменение названия значения в локальной переменной
//   author = 'user', //значение по умолчанию после = (ставится когда нет такого значения в объекте)
// } = playlist;

// console.log(numberOfTracks);


/* ГЛУБОКАЯ ДЕСТРУКТУРИЗАЦИЯ */
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, location, avatar, followers, views, likes);


/* ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ */
// const rgb = [255, 100, 80];
// const [red, green, blue] = rgb;
// console.log(red, green, blue);

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// const entries = Object.entries(authors);
// console.log(entries);

// for (const [name, rating] of entries) {
//   // ур2
//   // const [name, rating] = entry;

//   // ур1
//   // const name = entry[0];
//   // const rating = entry[1];

//   console.log(name, rating);
// }


/* ОПЕРАЦИЯ rest (сбор) */
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);


/* ПАТТЕРН «ОБЪЕКТ НАСТРОЕК»
  - деструктуризация параметра-обьекта в подписи функции
  - rest при деструктуризации в подписи */

const showProfileInfo = function (userProfile) {
  const { name, tag, location, ...restProps } = userProfile;
  // console.log(name, tag, location, avatar, followers, views, likes);
  console.log(restProps);
};

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
showProfileInfo(profile);