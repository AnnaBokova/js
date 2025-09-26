//Написать код, который при передаче пользователем языка: en, ru, de выводит
// в консоль соответствующее приветствие на указанном языке

let lang = prompt("Выберите язык: Русский, English, German");
let ru = "Русский";
let en = "English";
let de = "German";

switch (lang) {
  case en:
    console.log("Hello!");
    break;
  case ru:
    console.log("Привет!");
    break;
  case de:
    console.log("Hallo!");
    break;
  default:
    console.log("Вы не выбрали язык");
}
