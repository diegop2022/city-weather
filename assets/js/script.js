var city = document.querySelector(".city")
var submit = document.querySelector(".submit")
var date = new Date();
var date1 = date.getDate()
var month = new Date()
var month1 = month.getMonth() +1
var key = "3984ba96abb7dc803a786ec79db08642"


submit.addEventListener("click", function() {
    console.log(city.value)
    var cityNameEl = document.querySelector(".city-name")
    var cityNameText = document.createElement("h1")
    cityNameText.textContent = city.value

    var cityDateEl = document.querySelector(".city-name")
    var cityDateText = document.createElement("h1")
    cityDateText.textContent = month1 + "/" + date1

    cityNameEl.appendChild(cityNameText)
    cityDateEl.appendChild(cityDateText)
})


fetch("https://api.openweathermap.org/data/3.0/onecall?lat=38.58&lon=121.49&exclude=current&appid="+key) 
    .then(response => response.json())
    .then(data => console.log(data));