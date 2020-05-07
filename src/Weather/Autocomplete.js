import React, { useState } from 'react'
import PlacesAutoComplete from 'react-places-autocomplete'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Autocomplete(props) {
    const [address, setAddress] = useState('')

    const handleClick =async (address) => {
        setAddress(address)        
        props.weatherGet(address)
    }
    const handleEnter =(e)=>{
        if(e.key==="Enter"){
           return props.weatherGet(address);
        }
    }
    const handleSearch=()=>{
        props.weatherGet(address)

    }

    return (
        <PlacesAutoComplete
            value={address}
            onChange={setAddress}
            onSelect={handleClick}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps }) =>
                <div>
                    <input  {...getInputProps({ placeholder: "seacrh here", className: 'search-input', autoFocus: true })} onKeyUp={handleEnter} onInput={(e) => {
                        setAddress(e.target.value)

                        if (e.target.value == '') {
                            props.setIsclick('')
                        }
                    }} />
                    <FontAwesomeIcon className='search' icon={faSearch} onClick={handleSearch}></FontAwesomeIcon>

                    <div style={{ position: 'absolute', top: 75, left: 230 }}>
                        {suggestions.map((suggestion) => {
                            const style = {
                                backgroundColor: suggestion.active ? "#f12345" : "#fff",
                                width: '290px',
                                padding: '5px',
                                borderBottom: '1px solid #f12345'
                            }
                            return <div {...getSuggestionItemProps(suggestion, { style })} >
                            {suggestion.description}</div>
                        })}
                    </div>
                </div>}
        </PlacesAutoComplete>
    )
}
export default Autocomplete;