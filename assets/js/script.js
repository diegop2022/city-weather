var city = document.querySelector(".city")
var submit = document.querySelector(".submit")
var date = new Date();
var date1 = date.getDate()
var month = new Date()
var month1 = month.getMonth() + 1
var key = "3984ba96abb7dc803a786ec79db08642"
var search = JSON.parse(localStorage.getItem("history")) || []
var historyList = document.querySelector(".history")
var current = document.querySelector(".city-weather")
var days = document.querySelector(".days")


submit.addEventListener("click", function () {
    historyList.style.display = "none"
    console.log(city.value)

    var cityDateEl = document.querySelector(".city-name")
    cityDateEl.classList.add("city-style")
    var cityDateText = document.createElement("h1")
    cityDateText.textContent = "(" + month1 + "/" + date1 + ")"

    cityDateEl.appendChild(cityDateText)

    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city.value + "&appid=" + key)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            var lat = data[0].lat
            var lon = data[0].lon
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + key)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    console.log(data)
                    console.log(data.weather[0].description)
                    console.log(data.main.temp)
                    console.log(data.main.humidity)
                    console.log(data.wind.speed)

                    var cityNameEl = document.querySelector(".city-name")
                    var cityNameText = document.createElement("h1")
                    cityNameText.textContent = data.name
                    cityNameEl.appendChild(cityNameText)

                    var temp = data.main.temp

                    currentDesc = document.createElement("h1")
                    currentDesc.textContent = data.weather[0].description
                    current.appendChild(currentDesc)

                    currentTemp = document.createElement("h2")
                    currentTemp.textContent = "Temp: " + ((temp - 273.15) * 9 / 5 + 32).toFixed(1)
                    current.appendChild(currentTemp)

                    currentHum = document.createElement("h2")
                    currentHum.textContent = "Humidity: " + data.main.humidity
                    current.appendChild(currentHum)

                    currentWind = document.createElement("h2")
                    currentWind.textContent = "Wind Speed: " + data.wind.speed
                    current.appendChild(currentWind)

                    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + key)
                        .then(function (response) {
                            return response.json()
                        })
                        .then(function (data) {
                            console.log(data)
                            console.log(data.list[0].main.temp)
                            console.log(data.list[0].weather[0].description)

                            var daysList = document.createElement("ul")
                            days.appendChild(daysList)
                            daysList.classList.add("daysList")

                            day1Div = document.createElement("div")
                            day1Div.classList.add("day1")
                            day1 = document.createElement("li")
                            day1Date = document.createElement("h1")
                            day1Date.textContent = "(" + month1 + "/" + (date1 + 1) + ")"
                            day1Temp = document.createElement("h1")
                            day1Temp.textContent = ((data.list[0].main.temp - 273.15) * 9 / 5 + 32).toFixed(1)
                            day1Desc = document.createElement("h1")
                            day1Desc.textContent = data.list[0].weather[0].description
                            day1Div.appendChild(day1Date)
                            day1Div.appendChild(day1Temp)
                            day1Div.appendChild(day1Desc)
                            daysList.appendChild(day1Div)

                            day2Div = document.createElement("div")
                            day2Div.classList.add("day2")
                            day2 = document.createElement("li")
                            day2Date = document.createElement("h1")
                            day2Date.textContent = "(" + month1 + "/" + (date1 + 2) + ")"
                            day2Temp = document.createElement("h1")
                            day2Temp.textContent = ((data.list[8].main.temp - 273.15) * 9 / 5 + 32).toFixed(1)
                            day2Desc = document.createElement("h1")
                            day2Desc.textContent = data.list[8].weather[0].description
                            day2Div.appendChild(day2Date)
                            day2Div.appendChild(day2Temp)
                            day2Div.appendChild(day2Desc)
                            daysList.appendChild(day2Div)

                            day3Div = document.createElement("div")
                            day3Div.classList.add("day3")
                            day3 = document.createElement("li")
                            day3.classList.add("day3")
                            day3Date = document.createElement("h1")
                            day3Date.textContent = "(" + month1 + "/" + (date1 + 3) + ")"
                            day3Temp = document.createElement("h1")
                            day3Temp.textContent = ((data.list[16].main.temp - 273.15) * 9 / 5 + 32).toFixed(1)
                            day3Desc = document.createElement("h1")
                            day3Desc.textContent = data.list[16].weather[0].description
                            day3Div.appendChild(day3Date)
                            day3Div.appendChild(day3Temp)
                            day3Div.appendChild(day3Desc)
                            daysList.appendChild(day3Div)

                            day4Div = document.createElement("div")
                            day4Div.classList.add("day4")
                            day4 = document.createElement("li")
                            day4.classList.add("day4")
                            day4Date = document.createElement("h1")
                            day4Date.textContent = "(" + month1 + "/" + (date1 + 4) + ")"
                            day4Temp = document.createElement("h1")
                            day4Temp.textContent = ((data.list[24].main.temp - 273.15) * 9 / 5 + 32).toFixed(1)
                            day4Desc = document.createElement("h1")
                            day4Desc.textContent = data.list[24].weather[0].description
                            day4Div.appendChild(day4Date)
                            day4Div.appendChild(day4Temp)
                            day4Div.appendChild(day4Desc)
                            daysList.appendChild(day4Div)

                            day5Div = document.createElement("div")
                            day5Div.classList.add("day5")
                            day5 = document.createElement("li")
                            day5.classList.add("day5")
                            day5Date = document.createElement("h1")
                            day5Date.textContent = "(" + month1 + "/" + (date1 + 5) + ")"
                            day5Temp = document.createElement("h1")
                            day5Temp.textContent = ((data.list[32].main.temp - 273.15) * 9 / 5 + 32).toFixed(1)
                            day5Desc = document.createElement("h1")
                            day5Desc.textContent = data.list[32].weather[0].description
                            day5Div.appendChild(day5Date)
                            day5Div.appendChild(day5Temp)
                            day5Div.appendChild(day5Desc)
                            daysList.appendChild(day5Div)
                        })
                })


        })
})

submit.addEventListener("click", function () {
    city.value
    search.push(city.value)
    localStorage.setItem("history", JSON.stringify(search))
})

var createSearch = function () {
    for (var i = 0; i < search.length; i++) {
        var historyLi = document.createElement("li")
        historyLi.classList.add("history-style")
        historyLi.textContent = search[i]

        historyList.appendChild(historyLi)
    }
}

createSearch()



