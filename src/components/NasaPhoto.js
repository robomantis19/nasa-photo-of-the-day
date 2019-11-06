import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
const photoCss = {
    width: "500px"
}
function NasaPhoto(){
    const [photo, setPhoto] = useState()
    const APIkey = "98REzccm6Ml8n54NaB9XPz4R7nADaOI4iEOOlSj9"; 
    useEffect(() => { 
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIkey}`)
            .then(res => { 
                console.log(res.data);
                setPhoto(res.data.hdurl);  
            })
    },[])
    return (

        <div>
            Photo Here!!
            <img src={photo} style={photoCss}/> 
        </div>
    )
};

export default NasaPhoto; 