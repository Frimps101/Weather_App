let btn = document.querySelector(".btn")
let city = document.querySelector(".city")
let temperature = document.querySelector(".temp")
let description = document.querySelector(".description")

btn.addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&appid=abfd6b9844bc94c2c4fcf3d2f3cac767&units=metric")
    .then(res => res.json())
    .then(data=>{
        console.log(data)
        let temperature_value = data.main["temp"]
        let description_value = data.weather[0]["description"]

        temperature.innerHTML = temperature_value +"&deg;C"
        description.innerHTML = description_value
    })
        
    .catch(err => alert("Couldnt get the data. Try again!!!")
    )
})


// Use units=metric for celcius values
// Use units=imperial for Fahrenheit values