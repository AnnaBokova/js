//Написать код, который при передаче пользователем языка: en, ru, de выводит
// в консоль соответствующее приветствие на указанном языке

let Lang = "de"; // Можно поменять на 'en', 'ru'

switch (Lang) {
  case "en":
    console.log("Hello!");
    break;
  case "ru":
    console.log("Привет!");
    break;
  case "de":
    console.log("Gutten tag!");
    break;
  default:
    console.log("Вы не выбрали язык"); // Язык по умолчанию — русский
    break;
}
