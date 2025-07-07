document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input");
    const getWhetherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info")
    const cityName = document.getElementById("city-name")
    const temprature = document.getElementById("temp")
    const description = document.getElementById("description")
    const errorMeassge = document.getElementById("error-message")

    const API_key = "bd76d0f4f4f68f2af9a9bbee336c6852"
    console.log('hello');
    getWhetherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim()
        if (!city) return;
        try {
            const weatherData = await feactWeaterData(city)
            dishplayWeatherData(weatherData)
        } catch (error) {
            showError()
        }

    })

    async function feactWeaterData(city) {
        //  const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${}`
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`
        const responce = await fetch(url);
        if (!responce.ok) {
            throw new Error("somethink went wrong")
        }
        console.log(typeof responce);
        console.log("RESPONCE", responce)
        const data = await responce.json()
        return data
    }

    function dishplayWeatherData(data) {
        console.log(data)
        const { name, main, weather } = data
        cityName.textContent =name;
        temprature.textContent =`Temperature : ${main.temp}`
        description.textContent= `Weather : ${weather[0].description}`
        
        weatherInfo.classList.remove("hidden");
        errorMeassge.classList.add("hidden")

        
    }

    function showError() {
        weatherInfo.classList.remove('hidden');
        errorMeassge.classList.remove('hidden');
    }
})



// if (new Boolean(false)) {
//  console.log("I run!");
// } else {
//  console.log("I don't run.");
// }

// // I run!


// let a = {};
// let b = { key: "b" };
// let c = { key: "c" };

// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);

// 456

// let x = 1;

// if (function f() {}) {
//   x += typeof f;
// }
// console.log(x);

// 1undefined

// let x = [1, 2, 3];
// let y = [1, 2, 3];
// let z = y;

// console.log(x == y);
// console.log(x === y);
// console.log(z == y);
// console.log(z == x);

// false
// false
// true
// false

// const arr = [1, 2, 3];
// const [a, b, c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// 1
// 2
// 3

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(null === undefined);
// console.log(null == undefined);

// object
// undefined
// false
// true


// var a = 1;

// {
//   var a = 2;
//   console.log(a); 
// }
// console.log(a);

// // 2
// // 2


var a = 1
function foo() {
    var a = 2
    console.log(a)
}
foo()
console.log(a);

// 2
// 1

// let arr =[1,2]
// function test(array){
//   array.push(3)
// }
// test(arr)
// console.log(arr)

// [ 1, 2, 3 ]

// let arr =[1,2]
// function test(array){
//   array.push(3)
// }
// test([...arr])
// console.log(arr)

// [1,2 ]

// console.log(a)
// console.log(b)
// var a = 2
// let b = 2

// //error 


// const obj = { prop: 'old' };
// const arr = [obj];

// obj.prop = 'new';
// console.log(arr[0].prop);

// // new 

const arr = [, , , 4]

arr.forEach((num) => console.log(num * 2))

// 8