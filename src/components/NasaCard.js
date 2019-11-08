import React, {useRef, useState, useEffect} from 'react'; 
// import Datetime from 'react-datetime'; 
// import moment from 'moment';
import { TweenMax, TimelineMax,Elastic, Back} from "gsap";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import styled from "styled-components";


  


function NasaCard(props){
    //console.log("index: ", props.index); 
    // const [time, setTime] = useState(); 
    // const handleInput = event => setTime({[event.target.value]: event.target.value})
        // onChange = {handleInput}
    // const DateTime =  <Datetime   locale= 'en' placeholder="YYYY/MM/DD/" dateFormat="YYYY/MM/DD" value={''} timeFormat={false}/>
    // function count() {
        // for(let i=0; i < 7; i++){
            //console.log("index item", props.index)
        // useEffect(() => { 
            const Stack = styled(Card)`
                padding-left: ${props => (`${props.primary}0` +`px`)};
                zIndex: ${props => `${props.primary}`};
                height: 400px;
                background-color: white;
                background: white;
                box-shadow: 0 8px 6px -6px black;
            `
            const Square = styled.div`
            padding-left: ${props => (`${props.primary}` +`px`)};
            zIndex: ${props => `${props.primary}`};
            width: 20px;
            height: 20px;
            background-color: green;
            box-shadow: 0 8px 6px -6px black;
            
        `
        
        // },[props.index])
        // }
    // }
    const [mouseAnimation, setMouseAnimation] = useState();
    const [clickAnimation, setClickAnimation] = useState();
    const [tl] = useState(new TimelineMax({ paused: true }));
    let imgRef = useRef(null);
    let textRef = useRef(null);
    let cardRef = useRef(null);
    useEffect(() => {
        setMouseAnimation(
          TweenMax.to(imgRef, 1, {
            scale: 1.5,
            filter: "none",
            ease: Elastic.easeOut.config(1, 0.75)
          }).pause()
        );
        
    },[])

    
    
    return (
        <div>
            {/* {DateTime} */}
            <div>
                {/* <Stack primary={props.index} 
                
                
                onMouseEnter={() => mouseAnimation.play()}

                ref={element => {
                    cardRef = element;
                  }}
                
                >
                    <img 
                    

                    ref={element => {
                    imgRef = element;
                    }} 
                    src={props.image} style={{width: `50%`, height: `300px`}}/>
                    <div
                    ref={element => {
                        textRef = element;
                      }}
                    >
                        {props.title}
                    </div>
                    

                </Stack>
                <div>
                <Square primary={props.index}/>
                </div> */}
                

                
                {/* <Stack primary={props.index}> */}
                      
                    <Card 
                    onMouseEnter={() => mouseAnimation.play()}
                    onMouseLeave={()=> mouseAnimation.reverse()}
                
                    ref={element => {
                        cardRef = element;
                      }}
                    
                    // style={{zIndex:props.index}} 
                    className="card">
                        {/* <CardImg 
                        
                        ref={element => {
                        imgRef = element;
                        }} 
                        
                        top width="50%" height="25%" 
                        src={props.image} alt="Card image cap" /> */}
                        <CardBody top height="100%">
                        <CardTitle>{props.title}</CardTitle>
                        <CardSubtitle>{props.date}</CardSubtitle>
                        <img 
                        ref={element => {
                        imgRef = element;
                        }} 
                        width="100%" src={props.image} alt="Card image cap" />
                        <CardText ref={element => {
                        textRef = element;
                        }}
                        height="100%">{props.explanation}</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                {/* </Stack>    */}
            </div>
            
            
        </div>
    )
    
}


export default NasaCard; 