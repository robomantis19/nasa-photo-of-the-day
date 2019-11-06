import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import NasaCard from './NasaCard'; 
const photoCss = {
    width: "500px"
}
function NasaPhoto(){
    const [pic, setPic] = useState([])
    const APIkey = "98REzccm6Ml8n54NaB9XPz4R7nADaOI4iEOOlSj9"; 
    useEffect(() => { 
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIkey}`)
            .then(res => { 
                console.log(res.data);
                setPic(res.data); 
                // for (let el  in res.data) { 
                //     setPhoto(photo => photo += el);
                // }
                 
            })
            .catch(error => {
                console.log("the data was not return", error);
              });
    },[])
    return (

        <div>
            {pic.map((item, index) =>  {
                return <NasaCard key={index} date={item.date}/>
                // <NasaCard key={index} date={item.date} explanation={item.explanation} img={item.hdurl} title={item.title} url={item.url}/> 
                
            })}
            
            {/* <img src={photo} style={photoCss}/>  */}
        </div>
    )
};

export default NasaPhoto; 