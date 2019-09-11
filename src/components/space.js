import React, {useState, useEffect} from 'react'; 
import SpaceList from './spaceList';
import axios from 'axios';


const Space = function(){
    const [nasa, setNasa] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=PoE0g5C9HMC6gBJKPbJHYejVbLbwqxrEVWaBACA0`)
        .then(response => {
            const nasa = response.data.near_earth_objects; 
            const NEO = response.data.near_earth_objects.close_approach_data
            console.log("nasa data: ", nasa);
            console.log("NEO: ", NEO)
            setNasa(nasa);
        })
        .catch( error => {
            console.log('nasa api error: ', error);
        })
    
    },[])

    return (
        <div className="astroidContainer">
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
        </div>
    );
}

export default Space;