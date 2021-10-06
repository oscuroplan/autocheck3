                                                                                // ЗАДАЧА 1/41
// Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

// imgUrl - фотография, значение "https://via.placeholder.com/640x480";
// descr - описание, значение "Spacious apartment in the city center";
// rating - рейтинг, значение 4;
// price - цена, значение 2153;
// tags - метаинформация, массив ["premium", "promoted", "top"].

const apartment = {
imgUrl: "https://via.placeholder.com/640x480",
descr: "Spacious apartment in the city center",
rating: 4,
price: 2153,
tags: ["premium", "promoted", "top"],
};
                                                                                // ЗАДАЧА 2/41
// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com".

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  }
};


                                                                                // ЗАДАЧА 3/41
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
// Change code above this line

                                                                                // ЗАДАЧА 4/41
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Change code above this line

                                                                                // ЗАДАЧА 5/41
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];
// Change code above this line

                                                                                // ЗАДАЧА 6/41
// Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на "Henry Sibola";
// массив тегов в свойстве tags добавив в конец строку "trusted".

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Henry Sibola';
apartment.tags.push('trusted');

                                                                                // ЗАДАЧА 7/41
// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston".

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston",
}

                                                                                // ЗАДАЧА 8/41
// Дополни код объявления объекта так, чтобы у него были свойства name,
// price, image и tags со значениями из переменных с аналогичными именами.
// Обязательно используй синтаксис коротких свойств.

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  // Change code below this line
  name,
  price,
  image,
  tags,
  // Change code above this line
};


                                                                                // ЗАДАЧА 9/41
// Дополни код объявления объекта credentials так, чтобы в результате у
// него были два свойства: email и password, имена которых хранятся в 
// переменных emailInputName и passwordInputName.

// Значением свойства email должна быть строка
// "henry.carter@aptmail.com", а значением свойства password - строка
// "jqueryismyjam".

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line
[emailInputName]: "henry.carter@aptmail.com",
[passwordInputName]: "jqueryismyjam",
  // Change code above this line
};


                                                                                // ЗАДАЧА 10/41
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (key in apartment) {
  keys.push(key); 
  values.push(apartment[key]);}


                                                                                // ЗАДАЧА 11/41

// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if (apartment.hasOwnProperty(key)){
  keys.push(key);
  values.push(apartment[key]);
}
  // Change code above this line
}


                                                                                // ЗАДАЧА 12/41

// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object.
// Используй переменную propCount для хранения количества свойств объекта.

function countProps(object) {
  let propCount = 0;
  // Change code below this line
propCount = Object.keys(object).length
  // Change code above this line
  return propCount;
}


                                                                                // ЗАДАЧА 13/41
// Перебери объект apartment используя метод Object.keys() и цикл for...of.
// Запиши в переменную keys массив ключей собственных свойств объекта apartment,
// и добавь в массив values все значения его свойств.

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (const key of keys) {
 values.push(apartment[key]);
}



                                                                                // ЗАДАЧА 14/41
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, 
// возможно, но необязательно, цикл for...of.

function countProps(object) {
  // Change code below this line
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
  return Object.keys(object).length;
  // Change code above this line
}


                                                                                // ЗАДАЧА 15/41

// Запиши в переменную keys массив ключей собственных свойств объекта apartment,
// а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);


                                                                                // ЗАДАЧА 16/41
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника,
// а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
// Используй переменную totalSalary для хранения общей суммы зарплаты.

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
for (const value of Object.values(salaries)){
 totalSalary += value;
  }
  // Change code above this line
  return totalSalary;
}



                                                                                // ЗАДАЧА 17/41
// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex,
// а в массив rgbColors значения свойств rgb из всех объектов массива colors.

