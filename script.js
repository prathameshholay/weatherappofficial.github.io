
// disabling the inspect option.


const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d4355d6350msha6230eafa8bcca8p1bf848jsn5d7c25b5b936",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    // console response 
    .then((response) => response.json())
    .then((response) => {
      console.log("fetching successfull....city name = " + city)
      // api resource fetched and display their value with variable 
      console.log(response);
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

// forecasting code >>>>>>>

function fetchdelhi() {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi",
    options
  )
    // console response 
    .then((response) => response.json())
    .then((response) => {
      console.log("fetching successfull....showing weather of delhi");
      console.log(response)
      delhi_temp.innerHTML = response.temp;
      delhi_feels_like.innerHTML = response.feels_like + 2;
      delhi_humidity.innerHTML = response.humidity;
      delhi_min_temp.innerHTML = response.min_temp;
      delhi_max_temp.innerHTML = response.max_temp;
      delhi_wind_speed.innerHTML = response.wind_speed;
      delhi_wind_degrees.innerHTML = response.wind_degrees;
    })
    .catch((err) => console.error(err));

}

function fetchahmadnagar() {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=ahmadnagar",
    options
  )
    // console response 
    .then((response) => response.json())
    .then((response) => {
      console.log("fetching successfull....showing weather of ahmadnagar");
      console.log(response)
      nagar_temp.innerHTML = response.temp;
      nagar_feels_like.innerHTML = response.feels_like;
      nagar_humidity.innerHTML = response.humidity;
      nagar_min_temp.innerHTML = response.min_temp;
      nagar_max_temp.innerHTML = response.max_temp;
      nagar_wind_speed.innerHTML = response.wind_speed;
      nagar_wind_degrees.innerHTML = response.wind_degrees;
    })
    .catch((err) => console.error(err));

}

function fetchmumbai() {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai",
    options
  )
    // console response 
    .then((response) => response.json())
    .then((response) => {
      console.log("fetching successfull....showing weather of mumbai");
      console.log(response)
      mumbai_temp.innerHTML = response.temp;
      mumbai_feels_like.innerHTML = response.feels_like;
      mumbai_humidity.innerHTML = response.humidity;
      mumbai_min_temp.innerHTML = response.min_temp;
      mumbai_max_temp.innerHTML = response.max_temp;
      mumbai_wind_speed.innerHTML = response.wind_speed;
      mumbai_wind_degrees.innerHTML = response.wind_degrees;
    })
    .catch((err) => console.error(err));

}
document.getElementById("fetchdelhid").addEventListener('click', (e) => {
  fetchdelhi();
  fetchahmadnagar();
  fetchmumbai();
})
// api key = > ""


