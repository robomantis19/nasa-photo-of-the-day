import React, {useState, useEffect} from 'react'; 
// import Datetime from 'react-datetime'; 
// import moment from 'moment';
// import {
//     Carousel,
//     CarouselItem,
//     CarouselControl,
//     CarouselIndicators,
//     CarouselCaption
//   } from 'reactstrap';

const photoCss = {
    width: "500px"
}

function NasaCard(props){
    // const [time, setTime] = useState(); 
    // const handleInput = event => setTime({[event.target.value]: event.target.value})
        // onChange = {handleInput}
    // const DateTime =  <Datetime   locale= 'en' placeholder="YYYY/MM/DD/" dateFormat="YYYY/MM/DD" value={''} timeFormat={false}/>
    
    

    return (
        <div>
            {/* {DateTime} */}
            
            
            <h2>{props.title}</h2>
            <h2>{props.date}</h2>
            
            <img src={props.image} style={photoCss}/> 
            <p>{props.explanation}</p> 
        </div>
    )
    
}


export default NasaCard; 