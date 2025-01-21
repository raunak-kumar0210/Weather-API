import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import { useState } from "react";

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({
        city: "",
        feelsLike: "",
        temp: "",
        tempMin: "",
        tempMax: "",
        humidity: "",
        weather: "",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}