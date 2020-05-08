import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap';
import cloud from '../images/cloud.jpeg'
import snow from '../images/snow.jpeg'
import drizzle from '../images/drizzle.jpg'
import thunderstrom from '../images/thunderstrom.jpg'
import Clear from '../images/clear.jpeg'
import rain from '../images/light_rain.jpg'
import background from '../images/weather.jpeg'
import './weather.css'
import WeatherDetail from './WeatherDetail'
import Forecast7 from './forecast-7'
import Autocomplete from './Autocomplete'


const API_key = '2c639b15fdc37a10c3df6f2c0c697538'

function WeatherComponent() {


    const [isclicked, setIsclick] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [temp, setTemp] = useState('')
    const [maxtemp, setMaxtemp] = useState('')
    const [mintemp, setMintemp] = useState('')
    const [date, setDate] = useState([])
    const [icon, setIcon] = useState('')
    const [description, setDescription] = useState('')
    const [display, setDisplay] = useState([])
    const [bg, setBg] = useState(background)
    const weatherContent = {
        'display': isclicked ? 'block' : 'none'
    }
    const forecastWrapper = {
        'display': isclicked ? 'flex' : 'none'
    }


    const WeatherBackground = {
        Thunderstrom: thunderstrom,
        Drizzle: drizzle,
        Rain: rain,
        Snow: snow,
        // Atmosphere: "",
        Clear: Clear,
        Clouds: cloud
    }

    const getBackground = (rangeId) => {
        
        switch (true) {
            case rangeId >= 200 && rangeId <= 232:
                setBg(WeatherBackground.Thunderstrom)
                break;
            case rangeId >= 300 && rangeId <= 321:
                setBg(WeatherBackground.Drizzle)
                break;
            case rangeId >= 500 && rangeId <= 531:
                setBg(WeatherBackground.Rain)
                break;
            case rangeId >= 600 && rangeId <= 622:
                setBg(WeatherBackground.Snow)
                break;
            case rangeId >= 701 && rangeId <= 781:
                setBg(WeatherBackground.Atmosphere)
                break;
            case rangeId === 800:
                setBg(WeatherBackground.Clear)
                break;
            case (rangeId >=801 && rangeId <= 804):
                setBg(WeatherBackground.Clouds)
                break;
            default:
                setBg(background)
        }
    }
    const celcius = (temp) => {
        let cell = Math.floor(temp - 273.15);
        return cell;
    }
    const getWeather = async (address) => {
        const API_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${address}&cnt=7&appid=${API_key}`)
        const response = await API_call.json();

        const displayArray = [];

        setCity(response.city.name);
        setCountry(response.city.country);
        setMaxtemp(celcius(response.list[0].main.temp_max))
        setMintemp(celcius(response.list[0].main.temp_min))
        setIcon(response.list[0].weather[0].icon)
        for (let i = 0; i < (response.list).length; i++) {
            const obj = {};
            obj.date = moment(response.list[i].dt_txt).format('DD MMM, YYYY');
            obj.day = moment(response.list[i].dt_txt).format('dddd');
            obj.time = moment(response.list[i].dt_txt).format('hh:mm a');
            obj.temparture = celcius(response.list[i].main.temp);
            obj.weatherDescription = response.list[i].weather[0].description;
            displayArray.push(obj);
        }

        setDisplay(displayArray)
        setDate(displayArray[0].date)
        setTemp(displayArray[0].temparture)
        setDescription(displayArray[0].weatherDescription)
        setIsclick('true')
    
        getBackground(response.list[0].weather[0].id)
    }
    var moment = require('moment');
    return (
        <div className="mainContent">
            <img src={bg}></img>
            <Container className='weather-wrapper'>
                <div className='weather-search'>
                    <h2>Weather App</h2>
                    {/* <input type='text' name='city' id="autocomplete"
                        onChange={async(e) => {
                            setCity(e.target.value)
                            console.log(e.target.value)
                            if (e.target.value == '') {
                                setIsclick('')
                            }
                        }}
                        onKeyPress={event => { if (event.key === 'Enter') { getWeather(); } }}></input>
                    <FontAwesomeIcon className='search' icon={faSearch} onClick={getWeather}></FontAwesomeIcon> */}
                    <Autocomplete weatherGet={getWeather} setIsclick={setIsclick} />

                </div>

                <WeatherDetail
                    city={city}
                    country={country}
                    icon={icon}
                    temp={temp}
                    maxtemp={maxtemp}
                    mintemp={mintemp}
                    date={date}
                    description={description}
                    weatherContent={weatherContent}
                ></WeatherDetail>

                <Forecast7 displayData={display} forecastWrapper={forecastWrapper} />
            </Container>
        </div>
    );
}

export default WeatherComponent;