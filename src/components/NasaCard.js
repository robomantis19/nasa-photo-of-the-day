import React from 'react'; 

const photoCss = {
    width: "500px"
}
function NasaCard(props){
    
    
    return (
        <div>
            <h2>{props.title}</h2>
            <h2>{props.date}</h2>
            <img src={props.image} style={photoCss}/> 
            <p>{props.explanation}</p> 
        </div>
    )
    
}


export default NasaCard; 