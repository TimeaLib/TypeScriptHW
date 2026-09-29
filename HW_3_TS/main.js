"use strict";
// Створити функцію, яка робить запити на апі, та віддає результат свого запиту.
// Тип відповіді визначається дженеріком функції.
//
//     Сигнатур функції під час виклику foobar<SomeType>('/url')
//
// SomeType - ваш тип відповіді
//
// url - ваш ендпоінт, з якого чекаємо відповідь
async function foobar1(url) {
    let APIResp = await fetch(url);
    if (!APIResp.ok) {
        throw new Error(`Something went wrong: ${APIResp.status}`);
    }
    return await APIResp.json();
}
foobar1('https://dummyjson.com/users/1')
    .then(user => console.log(user));
