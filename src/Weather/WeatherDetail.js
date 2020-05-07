import React from 'react'


function WeatherDetail(props){
    return(
        <div className='weatherContent' style={props.weatherContent}>
                    <div>{props.city} , {props.country}</div>
                    <div style={{ 'display': 'flex' }}>
                        <div className='weather-temp' style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                            <span><img src={`https://openweathermap.org/img/w/${props.icon}.png`} /></span>
                            <span><h1>{props.temp}&deg;</h1></span>
                            <div>
                                <span style={{ marginRight: '20px' }}>
                                    {props.maxtemp}&deg;
                                </span>
                                <span>
                                    {props.mintemp}&deg;
                                </span>
                            </div>
                        </div>

                        <div className='weather-description'>
                            <div style={{ 'textAlign': "justify" }}><p>Today</p>
                                <p>{props.date}</p>
                                <h2>{props.description}</h2>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default WeatherDetail;