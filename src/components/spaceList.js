import React from 'react'; 

const SpaceList = function(props){


    return(
        <div className = "astroid">
            <div className="card">
                <h1>Name: {props.title}</h1>
                <p>Magnitude: {props.mag}</p>
                <p>Designation: {props.designation}</p>
                <p>Near Earth Obit Id: {props.NEO}</p>
                <p>JPL URL: {props.jplurl}</p>
            </div>
        </div>
    );
};

export default SpaceList;