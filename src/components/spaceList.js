import React from 'react'; 
import styled from 'styled-components';

const Card = styled.div`
    width: 400px;
    height: 420px;
    margin-top: 100px;
    margin-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    border: 2px solid black;
    box-shadow: 0 5px 10px #777;

`


const SpaceList = function(props){


    return(
        
            <Card key = {props.id}>
                    <h1>Name: {props.title}</h1>
                    <p>Magnitude: {props.mag}</p>
                    <p>Designation: {props.designation}</p>
                    <p>Near Earth Obit Id: {props.NEO}</p>
                    <p>JPL URL: {props.jplurl}</p>
            
            </Card>
            
        

        
    );
};

export default SpaceList;