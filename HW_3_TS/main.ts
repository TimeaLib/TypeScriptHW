// Створити функцію, яка робить запити на апі, та віддає результат свого запиту.
// Тип відповіді визначається дженеріком функції.
//
//     Сигнатур функції під час виклику foobar<SomeType>('/url')
//
// SomeType - ваш тип відповіді
//
// url - ваш ендпоінт, з якого чекаємо відповідь

interface IDummyUser{
    "id": number,
    "username": string,
    "email": string,
    "firstName": string,
    "lastName": string,
    "gender": string,
}

async function foobar1<SomeType>(url:string): Promise<SomeType>{
let APIResp:Response = await fetch(url)
    if (!APIResp.ok) {
        throw new Error(`Something went wrong: ${APIResp.status}`);
    }
    return await APIResp.json() as SomeType
}

foobar1<IDummyUser>('https://dummyjson.com/users/1')
    .then (user => console.log(user))

