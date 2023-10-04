'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function(data,className = '') {  
// const html = `
//     <article class="country ${className}">
//     <img class="country__img" src="${data.flag}"/>
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)}M people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };
// const renderError = function(msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// // AJAX call coutry 1
// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // render country 1
//     renderCountry(data);

//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     // AJAX call coutry 2

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       // render country 2
//       renderCountry(data2,'neighbour');
//     });
//   });
// };

// // getCountryAndNeighbour('bharat');
// getCountryAndNeighbour('usa');

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     console.log(response);

//     if(!response.ok)
//       throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };


// const getCountryData = function(country){
// fetch(`https://restcountries.com/v2/name/${country}`)
//   .then(response => { 
//     console.log(response);
    
//     if(!response.ok) throw new Error(`Country could not found ${response.status}`);

//     return response.json()})
//   .then(data => {
//     renderCountry(data[0]);
   
//     // const neighbour = data[0].borders[0];
//     const neighbour = 'kjhgffgh';

//     if(!neighbour) return;

//     // country 2
//     return fetch(`https:restcountries.com/v2/alpha/${neighbour}`);
//   })
//   .then(response => {
//     if(!response.ok) throw new Error('Country could not found')
//     return response.json()})
//   .then(data => renderCountry(data, 'neighbour'))
//   .catch(err => { 
//   console.error(`${err}💥💥💥`)
//    renderError(`Something went wrong 💥💥 ${err.message}. Try again!`)
//    }).finally(() => {
// countriesContainer.style.opacity = 1;
// });
// };

// short code 
// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`,
//   'Country could not found')
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders[0];
//       // const neighbour = 'kjhgffgh';

//       if (!neighbour) return;

//       // country 2
//       return getJSON(`https:restcountries.com/v2/alpha/${neighbour}`,
//       'Country could not found');
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function() {
//  getCountryData('bharat');
// });
//  getCountryData('austrelia');


// Coding Challenge #1

// const whereAmI = function(lat,lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       console.log(res);
//       if (!res.ok) throw new Error(`Problem with ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//      return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(res => {
//       console.log(res);
//       if (!res.ok) throw new Error(`Country could not found (${res.status})`);
//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => 
//       console.error(`${err.message} 💥`));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// the event loop 

// console.log('Start Test');
// setTimeout(() => console.log('0 second'),0)

// Promise.resolve('Resolve promise 1').then(res => {
//   console.log(res)
  
//   Promise.resolve('Resolve promise 2').then(res => {
//     console.log(res)
//   })
// });
// console.log('End Test');


// const lotteryPromis = 
// new Promise(function(resolve,reject) {
//   console.log('Lottery draw is happening🙈')
// setTimeout(function (){
//   if(Math.random() >= 0.5) {
//     resolve('You WIN')
//   }else {
//     reject( new Error('You Loos your money'))
//   }
//   },2000 );
// });
// lotteryPromis.then(res => console.log(res))
// .catch(err => console.error(err));

// const wait = function(second) {
//   return new Promise(function(resolve) {
//     setTimeout(resolve , second * 1000)
//   });
// };

// wait(1)
// .then(() => {
//   console.log('1 second passed')
// return wait(1)
// })
// .then(() => {
//   console.log('2 second passed')
// return wait(1)
// })
// .then(() => {
//   console.log('3 second passed')
// return wait(1)
// })
// .then(() => {
//   console.log('4 second passed')
// return wait(1)
// });

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject( new Error('!Problem')).catch(x => console.error(x));


/////////////////////////////////////
// Promisifying the Geolocation API
// const getPosition = function() {
// return new Promise(function(resolve,reject) {
//   // navigator.geolocation.getCurrentPosition(
//   //   position => resolve(position),
//   //   err => reject(err)
//   // );
//   navigator.geolocation.getCurrentPosition(resolve,reject);
// })
// }

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`));
// };

// btn.addEventListener('click', whereAmI);

// Coding Challenge #2 
//  const wait = function(second) {
//   return new Promise(function(resolve) {
//     setTimeout(resolve , second * 1000)
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function(imagePath) {
//   return new Promise(function(resolve,reject) {
//     const img = document.createElement('img');
//     img.src = imagePath;

//     img.addEventListener('load', function() {
//      imgContainer.append(img); 
//      resolve(img)  
//     })

//     img.addEventListener('error',function() {
//       reject(new Error('Image not found'));
//     });
//   });
// }
// let currentImg;

// createImage('img/img-1.jpg').then(img => {
//   currentImg = img;
//   console.log('Image 1 loaded')
//   return wait(2)
// })
// .then(() => {
// currentImg.style.display = 'none';
//   return createImage('img/img-2.jpg');
// })
// .then(img => {
//   currentImg = img;
//   console.log('Image 2 loaded')
//   return wait(2)
// })
// .then(() => currentImg.style.display = 'none')
// .catch(err => console.error(err))

/////////////////////////
// Async and await
// const getPosition = function() {
// return new Promise(function(resolve,reject) {
//   navigator.geolocation.getCurrentPosition(resolve,reject)
// })
// }
// const whereAmI = async function() {
//   // Geolocation
//  try{
//   const pos =  await getPosition();
//   const { latitude: lat, longitude: lng } = pos.coords;

//   // reverse geolocation
//  const resGeo =  await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

//  if(!resGeo.ok) throw new Error('Problem getting location data ');

//  const dataGeo = resGeo.json();
//   console.log(dataGeo);
//   // Country
//   const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);

//   if (!res.ok) throw new Error('Problem getting location data ');
//   const data = await res.json();
//   console.log(data);
//   renderCountry(data[0]);
//  return `You are in ${dataGeo.city} in ${dataGeo.country}`
// }catch(err) {
//     console.log(`${err} 💥`);
//     renderError(`💥 ${err.message}`)
//   }
// }
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 😂`))
//   .finally(() => console.log('3: Finished Getting Location'));

// console.log('1: Will get location');(
//   async function () {
//     try {
//       const city = await whereAmI();
//       console.log(`2: ${city}`);
//     } catch (err) {
//       console.error(`2: ${err.message} 😂`);
//     }
//     console.log('3: Finished getting location');
//   }
// )();

// try{
//   let x = 23;
// const y = 10; 
// y = 20
// }catch(err){
//   console.log(`${err.message}`);
// }

// const promise1 = new Promise(function (resolve,reject){
//   console.log('Promise is pending');
//   setTimeout(() => {
//     console.log('1: I love my country')
//     resolve(true);
//   }, 2000)
  
// });
// const promise2 = new Promise(function (resolve,reject){
//   console.log('Promise is pending');
//   setTimeout(() => {
//     // console.log('2: I love my country')
//     reject(new Error('💥'));
//   }, 5000)
  
// });

// promise1.then(value => {
//   console.log(value)
// })

// promise2.catch(err => {
//   console.error('some error occured in promise2😂');
// })

// const get3Countries = async function(c1,c2,c3) {
// try{
// const [data1] =  await getJSON(`https://restcountries.com/v2/name/${c1}`);
// const [data2] =  await getJSON(`https://restcountries.com/v2/name/${c2}`);
// const [data3] =  await getJSON(`https://restcountries.com/v2/name/${c3}`);
// console.log([data1.capital,data2.capital,data3.capital]);

// const data = await Promise.all([
// getJSON(`https://restcountries.com/v2/name/${c1}`),
// getJSON(`https://restcountries.com/v2/name/${c2}`),
// getJSON(`https://restcountries.com/v2/name/${c3}`),
// ]);
// console.log(data.map(d => d[0].capital));
// }catch(err) {
//   console.log(err)
// }
// }
// get3Countries('afganistan','bharat','pakistan');
// ////////////////////////////////
// //  Other Promise Combinators: race, allSettled and any
// // Promise.race
// (async function() {
// const res = await Promise.race([  
//  getJSON(`https://restcountries.com/v2/name/italy`),
//  getJSON(`https://restcountries.com/v2/name/pakistan`),
//  getJSON(`https://restcountries.com/v2/name/canada`),
// ]);
// console.log(res[0]);
// })();

// const timeout = function(sec) {
//   return new Promise(function(_,reject) {
//     setTimeout(() => {
//   reject(new Error('Request took too long'));
//       },sec * 1000)
//    });
// };

// Promise.race([getJSON(`https://restcountries.com/v2/name/tanzaniya`),
// timeout(5)
// ]).then(res => console.log(res[0]))
// .catch(err => console.error(err));

// // Promise.allSettled 

// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Error 😬'),
//   Promise.resolve('Another Success'),
//   Promise.reject('Another Erorr'),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

//   /////////////
// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('Error 😬'),
//   Promise.resolve('Another Success'),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));
// ////////////////
// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('Error 😬'),
//   Promise.resolve('Another Success'),
// ])
  // .then(res => console.log(res[0]))
  // .catch(err => console.error(err));


//   // Coding Challenge #3
//  const wait = function(second) {
//   return new Promise(function(resolve) {
//     setTimeout(resolve , second * 1000)
//   });
// };
// const imgContainer = document.querySelector('.images');

// const createImage = function(imagePath) {
//   return new Promise(function(resolve,reject) {
//     const img = document.createElement('img');
//     img.src = imagePath;

//     img.addEventListener('load',function() {
//     imgContainer.append(img);
//     resolve(img)
//     })

//     img.addEventListener('error', function() {
//       reject(new Error('Image not found'))
//     })
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg').then(img => {
// currentImg = img; 
// console.log('img 1 loaded')
// return wait(2)
// })
// .then(() => {
//  currentImg.style.display = 'none';
//  return createImage('img/img-2.jpg')
// })
// .then(img => {
//    currentImg = img;
//    console.log('img 2 loaded');
//    return wait(2);
// })
// .then(() => {
//   currentImg.style.display = 'none'
//    return createImage('img/img-3.jpg')

// }).then(img => {
//       currentImg = img;
//       console.log('img 3 loaded');
//       return wait(2);
//   }).then(()=> currentImg.style.display = 'none')
//   .catch(err => console.error(err));

// const imgContainer = document.querySelector('.images');

// const createImage = function(imagePath) {
//   return new Promise(function(resolve,reject) {
//     const img = document.createElement('img');
//     img.src = imagePath;

//     img.addEventListener('load', function() {
//      imgContainer.append(img); 
//      resolve(img)  
//     })

//     img.addEventListener('error',function() {
//       reject(new Error('Image not found'));
//     });
//   });
// }
// let currentImg;

// createImage('img/img-1.jpg').then(img => {
//   currentImg = img;
//   console.log('Image 1 loaded')
//   return wait(2)
// })
// .then(() => {
// currentImg.style.display = 'none';
//   return createImage('img/img-2.jpg');
// })
// .then(img => {
//   currentImg = img;
//   console.log('Image 2 loaded')
//   return wait(2)
// })
// .then(() => currentImg.style.display = 'none')
// .catch(err => console.error(err))

// Part 1

// const loadNPause = async function() {
//   try{
//     // img load 1
//     let img = await createImage('img/img-1.jpg');
//     console.log('Image 1 loaded');
//     await wait(2);
//     img.style.display = 'none';

//     // img load 2
//    img = await createImage('img/img-2.jpg');
//     console.log('Image 2 loaded');
//     await wait(2);
//     img.style.display = 'none';
//   } catch(err){
//     console.error(err);
//   }
// }
// loadNPause();

// part 2

// const loadAll = async function(imgArr) {
// const imgs =  await imgArr.map(async img => await
// createImage(img))
// console.log(imgs)
// const imgsEl = await Promise.all(imgs);
// console.log(imgsEl)
// imgsEl.forEach(img => img.classList.add('parallel'));

// }
// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// const countryData = function(country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response =>{
//       if(!response.ok) throw(new Error(`Country could not fine 😞 (${response.status})`))
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);

//       // const neighbour = data[0].borders[0];
//       const neighbour = 'jshjhdd';

//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country  not found 😞 (${response.status})`);
//      return response.json()})
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//     console.error(`${err} 💥💥💥`);
//      renderError(`Something went wrong ${err.message}`)
//     });
// }
// btn.addEventListener('click', function() {
//   countryData('germany')
// })

// const lucky = new Promise(function(resolve,reject){

//   if(Math.random() >= 0.6) {
//     resolve('You Win💰')
//   }else {
//   reject('You lost your money💩')
//   }
  
// });
// lucky.then(res => console.log(res))
// .catch(err => console.error(err));
// /////////////////////////////
// const getPosition = function() {
// return new Promise(function(resolve,reject) {
//   navigator.geolocation.getCurrentPosition(resolve,reject);
// })
// };
// const whereAmI = async function() {
//   try{ 
//     const pos = await getPosition();
//         const { latitude: lat, longitude: lng } = pos.coords;
//   // country 1
//    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json
// `);

//   const dataGeo = await resGeo.json();
//   console.log(dataGeo);
   
//   const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);

//   if (!resGeo.ok) throw new Error(`problems in location ${resGeo.status}`);
//   const data = await res.json();
//   console.log(data);
//   renderCountry(data[0]);
// }catch(err){
//   console.error(`${err} 💥`)
//   renderError(`something went wrong ${err.message}`);
// }
// };
// whereAmI();
// console.log('FIRST');
///////////////////////////////
///////////////////////////////
/////////////////////////////////////
// Practice 

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data,className) {
const html = `
   <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M People</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend',html);
  countriesContainer.style.opacity = 1;
}

const renderError = function(msg) {
 countriesContainer.insertAdjacentText('beforeend', msg);
countriesContainer.style.opacity = 1;

}
// const getCountryAndNeighbour = function(country) {
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);

// request.send();

// request.addEventListener('load', function() {
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);
//  renderCountry(data);

//  const [neighbour] = data.borders;

//  if(!neighbour) return;

//  const request2 = new XMLHttpRequest();
//  request2.open('GET', `https://restcountries.com/v2/name/${neighbour}`);

//  request2.send();

//  request2.addEventListener('load', function() {
//   const [data2] = JSON.parse(this.responseText);
//   console.log(data2);
//  renderCountry(data2, 'neighbour');
// })
// })
// };
// getCountryAndNeighbour('canada');
//////////////////
// Promise 
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function(response) { 
//       console.log(response);
//       return response.json()
//     })
//     .then(function(data) {
//       console.log(data);
//       return renderCountry(data[0])});
// };
const getJSON = function (url, errMessage = 'Something went wrong') {
 return fetch(url).then(response => {
    console.log(response);

    if (!response.ok)
      throw new Error(`${errMessage}(${response.status})`);

    return response.json();
  });
};


// const getCountryData = function(country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//   .then(response =>  { 
//     console.log(response);

//     if(!response.ok) throw new Error(`Country Could not find!(${response.status})`);

//    return response.json()
//   })
//   .then(data => {
//     renderCountry(data[0])
  
//     const neighbour = 'fhjkkd';

//     if (!neighbour) return;
//     // console.log(neighbour);

//     return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
//       }).then(response => {
//       if (!response.ok)
//       throw new Error(`Country Could not find!(${response.status})`);
//       return  response.json()
//       })
//       .then(data => renderCountry(data, 'neighbour'))
//       .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
  
// };
// btn.addEventListener('click',function() {
//   getCountryData('bharat');
// });
// getCountryData('dfgdsss');

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.com/v2/name/${country}`,
    'Country Could not find!'
  ).then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('N0 Neighbour found!');
      // console.log(neighbour);

      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`,
      'Country Could not find!')
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    });
};
btn.addEventListener('click', function () {
  getCountryData('australia');
});


