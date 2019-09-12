import React, {useState, useEffect} from 'react'; 
import SpaceList from './spaceList';
import axios from 'axios';
import styled from 'styled-components';

const CardContain = styled.div`
    width: 1000px;
    height: 100%;
    background-color: transparent;
    
    display:flex;
    
    flex-wrap: wrap;

`


const Space = function(){
    const [nasa, setNasa] = useState([]);
   
    useEffect(() => {
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=PoE0g5C9HMC6gBJKPbJHYejVbLbwqxrEVWaBACA0`)
        .then(response => {
            const nasa = response.data.near_earth_objects; 
            
            console.log("nasa data: ", nasa);
            
            setNasa(nasa);
        })
        .catch( error => {
            console.log('nasa api error: ', error);
        })
    
    },[])
    
    
    

    return (
        <CardContain>
            {nasa.map((astroid, index, array) => {
                return(
                    <SpaceList
                    key = {astroid.id}
                    title = {astroid.name}
                    mag = {astroid.absolute_magnitude_h}
                    designation = {astroid.designation}
                    NEO = {astroid.neo_reference_id}
                    jplurl = {astroid.nasa_jpl_url}
                    

                    />
                );
            })}
        </CardContain>
    );
}

export default Space;