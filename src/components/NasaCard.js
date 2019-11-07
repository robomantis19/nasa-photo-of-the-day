import React, {useState, useEffect} from 'react'; 
// import Datetime from 'react-datetime'; 
// import moment from 'moment';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import styled from "styled-components";



function NasaCard(props){
    console.log("index: ", props.index); 
    // const [time, setTime] = useState(); 
    // const handleInput = event => setTime({[event.target.value]: event.target.value})
        // onChange = {handleInput}
    // const DateTime =  <Datetime   locale= 'en' placeholder="YYYY/MM/DD/" dateFormat="YYYY/MM/DD" value={''} timeFormat={false}/>
    // function count() {
        // for(let i=0; i < 7; i++){
            console.log("index item", props.index)
        // useEffect(() => { 
            const Stack = styled.div`
                padding-left: ${props => (`${props.primary}0` +`px`)};
                zIndex: ${props => `${props.primary}`};
                height: 20px;
                background-color: white;
                background: white;
                box-shadow: 0 8px 6px -6px black;
            `
            
        // },[props.index])
        // }
    // }

    return (
        <div>
            {/* {DateTime} */}
            <div>
                <Stack primary={props.index}>
                    <img src={props.image} style={{width: `50%`, height: `100px`}}/>
                    <div>
                        {props.title}
                    </div>
                    

                </Stack>
                {/* <Stack primary={props.index}>
                      
                    <Card style={{zIndex:props.index}} className="card">
                        <CardImg top width="50%" height="25%" src={props.image} alt="Card image cap" />
                        <CardBody top height="100%">
                        <CardTitle>{props.title}</CardTitle>
                        <CardSubtitle>{props.date}</CardSubtitle>
                        <img width="100%" src={props.image} alt="Card image cap" />
                        <CardText height="100%">{props.explanation}</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Stack>    */}
            </div>
            
            
        </div>
    )
    
}


export default NasaCard; 