function getWeather() {
    let city = document.querySelector('#city').value;
    let zip_code = document.querySelector('#zip_code').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},zip=${zip_code},us&appid=362de25d9b1b31dae378cb1bbc11babc`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
     
     
// City Name
    let city_name = data.name  
    let info1 = document.createElement('h3')
    info1.innerHTML = city_name
    let target1 = document.getElementById('citydisplay')
    target1.append(info1)


// Current Temp
    let Current = data.main.temp
    Current = Temp_conversion(Current)
    let target = document.getElementById('tr1')
    let info = document.createElement('td')
    info.innerHTML = Current
    target.append(info)

// Feels Like Temp
    let Feels_like = data.main.feels_like
    Feels_like = Temp_conversion(Feels_like)
    let targe = document.getElementById('tr1')
    let inf = document.createElement('td')
    inf.innerHTML = Feels_like
    targe.append(inf)
    

// High Temp
    let Temp_Max = data.main.temp_max
    Temp_Max = Temp_conversion(Temp_Max)
    let target2 = document.getElementById('tr1')
    let info2 = document.createElement('td')
    info2.innerHTML = Temp_Max
    target2.append(info2)

// Low Temp
    let Temp_Min = data.main.temp_min
    Temp_Min = Temp_conversion(Temp_Min)
    let target3 = document.getElementById('tr1')
    let info3 = document.createElement('td')
    info3.innerHTML = Temp_Min
    target3.append(info3)
    
// Forecast
    let Forecast = data.weather[0].main
    let target4 = document.getElementById('tr1')
    let info4 = document.createElement('td')
    info4.innerHTML = Forecast
    target4.append(info4)

// Humididty
    let humidity = data.main.humidity
    let target5 = document.getElementById('tr1')
    let info5 = document.createElement('td')
    info5.innerHTML = humidity
    target5.append(info5)
    })
}

// Temperature Conversion
function Temp_conversion(temp){
    return Math.round((temp-273.15)*1.8)+32
}




