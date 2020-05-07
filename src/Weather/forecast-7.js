import React from 'react'
function Forecast7(props) {
    return (
        <div className='forecast7' style={props.forecastWrapper}>

            {props.displayData.map((data) =>

                <div>
                    <p>{data.day}</p>
                    <p>{data.time}</p>
                    <p>{data.temparture}&deg;</p>
                    <p>{data.weatherDescription}</p>
                </div>

            )}
        </div>

    )
}
export default Forecast7