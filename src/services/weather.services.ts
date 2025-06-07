import axios from "axios"

class WeatherService {

    private apiKey: string = process.env.REACT_APP_WEATHER_API_KEY || ""

    getWeatherByLocation(lat: number, lon: number) {
        try {
            return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric&lang=he`).then(res => res.data)
        } catch (error: any) {
            console.error("שגיאה בשליפת נתוני מזג האוויר:", error.message);
            throw new Error("אירעה שגיאה בשליפת נתוני מזג האוויר.");
        }
    }


}

export default new WeatherService