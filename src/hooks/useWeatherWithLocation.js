import axios from 'axios';
import { useState, useEffect } from "react";

export default () => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = () => {
        try {
            const location = window.navigator && window.navigator.geolocation

            if (location) {
                location.getCurrentPosition((position) => {
                    console.log(position.coords.latitude + ' ' + position.coords.longitude);
                    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=173d7d4200394dff86bad335a784684f`).
                        then(response => {
                            console.log(response.data);
                            setWeatherData(response.data);
                        })
                }, (error) => {
                    console.error(error);
                })
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchWeatherData();
    }, []);

    return [weatherData];
};
