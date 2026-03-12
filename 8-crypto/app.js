/*
Написать 2 функции:

шифратор пароля - функция принимает пароль, разбивает по символам, меняет местами какие-то буквы по заданному алгоритму и возвращает строку.
проверка пароля - принимает зашифрованный пароль и второй пароль. Воспроизводит алгоритм назад на зашифрованном пароле и возвращает true, если он совпадает со втором паролем и false, если нет.

crypto(‘password’) -> ssapdorw
check(‘ssapdorw’, ‘password’) -> true
check(‘ssapdorw’, ‘wrong’) -> false
*/

function crypto(password) {
  if (password.length < 2) return password;

  const mid = Math.floor(password.length / 2);

  // Обработка первой половины
  let leftPart = password.slice(0, mid).split("").reverse().join("");

  // Обработка второй половины
  let rightPartArr = password.slice(mid).split("");
  if (rightPartArr.length >= 2) {
    // Меняем местами первый и последний элементы массива второй половины
    let first = rightPartArr[0];
    let last = rightPartArr[rightPartArr.length - 1];

    rightPartArr[0] = last;
    rightPartArr[rightPartArr.length - 1] = first;
  }
  let rightPart = rightPartArr.join("");

  return leftPart + rightPart;
}

// Проверка

function check(encryptedPassword, originalToCompare) {
  const decrypted = crypto(encryptedPassword);
  return decrypted === originalToCompare;
}

const result = crypto("password");
console.log("Результат шифрования:", result);

console.log("Проверка 'password':", check(result, "password"));
console.log("Проверка 'wrong':", check(result, "wrong"));
