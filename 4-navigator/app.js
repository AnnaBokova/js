//Нахождение расстояния с помощью теоремы Пифагора
const addressLat = 20;
const addressLong = 50;
const positionLat = 10;
const positionLong = 30;

//Разница по широте и долготе
const diffLat = addressLat - positionLat;
const diffLong = addressLong - positionLong;

const distance = Math.sqrt(diffLat ** 2 + diffLong ** 2);

console.log(`Расстояние: ${distance} единиц`);
