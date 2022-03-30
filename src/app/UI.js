export class UI {
    constructor(){
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.temperature = document.getElementById('weather-temperature');
        this.maxTemperature = document.getElementById('weather-max-temperature');
        this.minTemperature = document.getElementById('weather-min-temperature');
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
    }

    render(weather){
        this.location.innerHTML = weather.name + ' / ' + weather.sys.country;
        this.temperature.innerHTML = '<b>Temperature:</b> '+ weather.main.temp + ' °C';
        this.maxTemperature.innerHTML = '<b>Max Temperature:</b> '+ weather.main.temp_max + ' °C';
        this.minTemperature.innerHTML = '<b>Min Temperature:</b> '+ weather.main.temp_min + ' °C';
        this.desc.innerHTML = '<b>Weather:</b> ' + weather.weather[0]['description'];
        this.humidity.innerHTML = '<b>Humidity:</b> ' + weather.main.humidity + ' %';
        this.wind.innerHTML = '<b>Wind:</b> ' + weather.wind.speed + ' m/s';
    }
}