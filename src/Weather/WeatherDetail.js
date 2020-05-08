import React from 'react'
import { Row, Col } from 'reactstrap';


function WeatherDetail(props) {
    return (
        <div className='weatherContent' style={props.weatherContent}>
            <div>{props.city} , {props.country}</div>
            <Row>
                <Col sm='12' lg={{size:4 , offset:2}} className='weather-temp'>
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
                </Col>

                <Col sm='12' lg={{size:4}} className='weather-description'>
                    <div><p>Today</p>
                        <p>{props.date}</p>
                        <h2>{props.description}</h2>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default WeatherDetail;