/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// console.log(playlist);

// const x = {};

// const fn = function (myObject) {
//   // myObject = { a: 1, b: 2 }
//   console.log(myObject);
// };
// fn({ a: 1, b: 2 });

// const rtfm = function () {
//   return { a: 5 };
// };
// console.log(rtfm());

/* ДОСТУП К СВОЙСТВУ
 * - obj.key
 * - obj['key']
 * - Отсутствующие свойства  */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// playlist.qwe = 5;       // добавление свойств в объект

// playlist.rating = 10;    // перезапись свойств в объекте

// console.log(playlist);

// console.log(playlist);
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);

// const propertyName = 'tracks'; // значение (ключ) свойства 'tracks' хранится в переменной propertyName

// console.log(playlist.rating);
// console.log(playlist['rating']);

// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);


/* КОРОТКАЯ ЗАПИСЬ СВОЙСТВ */
const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
  username,
  email,
};
// console.log(signupData);


/* ВЫЧИСЛЯЕМЫЕ СВОЙСТВА */

//  <input name="color" value="tomato" >
const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
  [inputName]: inputValue,
};
// console.log(colorPickerData);


/* ССЫЛОЧНЫЙ ТИП {} === {} */

// console.log({ a: 1 } === { a: 1 });
// console.log([] === []);

// const a = { x: 1, y: 2 };
// const b = a;   //при присвоении переменные со ссылками на один объект равны
// console.log(b === a);

// a.hello = 100;
// b.hello = 150;

// console.log(a);
// console.log(b);


/* МАССИВЫ И ФУНКЦИИ - ЭТО ОБЪЕКТЫ */

// const a = [1, 2, 3];
// a.hello = ':)';
// console.log(a);

// const fn = function () {
//   console.log('hello');
// };
// fn.hello = ';)';
// console.dir(fn.hello);
