import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Picture(){
   const [pic, setPic] = useState([]);

   useEffect(() => {
       axios.get('https://api.nasa.gov/planetary/apod?api_key=PoE0g5C9HMC6gBJKPbJHYejVbLbwqxrEVWaBACA0')
        .then(res => {
            console.log('picture of day data: ', res);
            const pod = res.data.url;
            setPic(pod);
        }) 
        .catch(err => {
            console.log('picture of day error: ', err)
        })
   },[])

    return(
        <div>
            <h2> Astronomy picture of the day</h2>
            <img id = "mypic" style={{width:"500px", marginBottom: '50px'}} src={pic} alt= 'space planet picture of day'/>
        </div>
    )
}

export default Picture;