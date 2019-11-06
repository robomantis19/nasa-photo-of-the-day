import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import NasaCard from './NasaCard'; 

function NasaPhoto(){
    const [pic, setPic] = useState([])
    const APIkey = "98REzccm6Ml8n54NaB9XPz4R7nADaOI4iEOOlSj9"; 
    useEffect(() => { 
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIkey}`)
            .then(res => { 
                console.log(res.data);
                setPic(res.data); 
                 
            })
            .catch(error => {
                console.log("the data was not return", error);
              });
    },[])
    return (

        <div>
            <NasaCard 
            title = {pic.title}
            date = {pic.date}
            image = {pic.hdurl}
            explanation = {pic.explanation}
            />
        </div>
    )
};

export default NasaPhoto; 