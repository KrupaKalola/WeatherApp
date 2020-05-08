import React from 'react'
import { Row, Col } from 'reactstrap'
function Forecast7(props) {
    return (
        <Row className='forecast7' style={props.forecastWrapper}>

            {props.displayData.map((data) =>

                <Col lg='1' sm='12' className='border-right'>
                    <Row>
                        <Col>
                            <p>{data.day}</p>
                            <p>{data.time}</p>
                        </Col>
                        <Col>
                            <p>{data.temparture}&deg;</p>
                            <p>{data.weatherDescription}</p>
                        </Col>
                    </Row>
                </Col>

            )}
        </Row>

    )
}
export default Forecast7