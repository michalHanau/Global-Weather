import axios from "axios"

class WeatherService {

    private apiKey: string = process.env.REACT_APP_WEATHER_API_KEY || ""

    getWeatherByLocation(lat: number, lon: number) {
        console.log("apiKey",this.apiKey)
        var d = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric&lang=he`).then(res => res.data)
       console.log("d",d)
        return d
    }


}

export default new WeatherService