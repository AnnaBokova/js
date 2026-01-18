/*
Написать функцию, которая получает на вход 3 параметра:
суммой средств - 1000
валютой средств - руб
целевой валютой - $
Возвращает число в новой валюте, если конвертация поддерживается, 
или null, если нет. 
Ставки конвертации хранятся внутри функции.
*/

function convertCurrency(amt, fromCurrency, toCurrency) {
  // курсы валют относительно рубля
  const rates = {
    руб: 1, // базовая валюта
    rub: 1,
    $: 0.011, // пример: 1 руб = 0.011 $
    usd: 0.011,
  };

  if (!rates[fromCurrency] || !rates[toCurrency]) {
    return null;
  }

  //переводим сумму в рубли (базовая валюта), потом в целевую
  const amtInRub = amt / rates[fromCurrency];
  const converted = amtInRub * rates[toCurrency];

  return converted;
}

console.log(convertCurrency(1000, "руб", "$"));
