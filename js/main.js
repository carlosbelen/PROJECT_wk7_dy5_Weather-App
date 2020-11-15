function getWeather() {
    let city = document.querySelector('#city').value;
    let zip_code = document.querySelector('#zip_code').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&zip=${zip_code}&appid=362de25d9b1b31dae378cb1bbc11babc`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

     
// City Name
    let city_display = document.getElementById('citydisplay')
    city_display.innerHTML = data.name


// Current Temp
    let Current = data.main.temp
    Current = Temp_conversion(Current)
    let current_display = document.getElementById('current')
    current_display.innerHTML = Current
    
// Feels Like Temp
    let Feels_like = data.main.feels_like
    Feels_like = Temp_conversion(Feels_like)
    let Feels_like_display = document.getElementById('feels_like')
    Feels_like_display.innerHTML = Feels_like
    

// High Temp
    let Temp_Max = data.main.temp_max   
    Temp_Max = Temp_conversion(Temp_Max)
    let Temp_Max_display = document.getElementById('high')
    Temp_Max_display.innerHTML = Temp_Max   

// Low Temp
    let Temp_Min = data.main.temp_min   
    Temp_Min = Temp_conversion(Temp_Min)
    let Temp_Min_display = document.getElementById('low')
    Temp_Min_display.innerHTML = Temp_Min   
    
// Forecast
    let Forecast = data.weather[0].main   
    let Forecast_display = document.getElementById('forecast')
    Forecast_display.innerHTML = Forecast   

// Humididty
    let Humidity = data.main.humidity  
    let Humidity_display = document.getElementById('humidity')
    Humidity_display.innerHTML = Humidity   
    })
}

// Temperature Conversion
function Temp_conversion(temp){
    return Math.round((temp-273.15)*1.8)+32
}




