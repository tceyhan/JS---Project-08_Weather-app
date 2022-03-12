const inputCity = document.getElementById("input");
const submitCity = document.getElementById("submit");
const cardContainer = document.getElementById("air_card");

let h1 = document.querySelector('h1');
let cardBody = document.getElementById("cardbody");


inputCity.style.backgroundColor = "khaki";

h1.style.fontSize = "50px";
h1.animate([
  {opacity: 0},
  {opacity: 1}
], {
  duration: 1000,
  iterations: 3
});


async function get(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}


submitCity.addEventListener("click", addToCard);

function addToCard(e) {
  console.log(inputCity.value);
  get(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=1f200bfdffc562d6b20713c8e197849d&lang=tr&units=metric`)
    .then((result) => {
      console.log(result);
      cardContainer.innerHTML += `
        <div class="col">
         <div class="card">
          <div class="card-body" id ="cardbody">
            <h5 class="card-title">${result.name}<sup>${result.sys.country}</sup></h5>
            <p class="card-text">
              <img src="http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png" alt="">
            </p>
            <p class="card-text">
              ${Math.round(result.main.temp)}
            </p>
            <p class="card-text durum" >
            ${result.weather[0].description}
            </p>
          </div>
        </div>
       </div>
        `;    
                   
    })

    .catch((err) => {});

 
  e.preventDefault();
}

cardContainer.addEventListener("click", arama);

function arama(e) {
  
      window.open(`https://www.google.com/search?q=${inputCity.value}`);
      window.open(`https://tr.wikipedia.org/w/index.php?search=${inputCity.value}&title=%C3%96zel:Ara&profile=advanced&fulltext=1&ns0=1`);
      e.preventDefault();
  
};
