import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import NasaCard from './NasaCard'; 

import Datetime from 'react-datetime'; 
import moment from 'moment';
import styled from "styled-components";

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  var moment1 = require('moment');

  
//   function dateConv(input){
//     let x = input.slice(1,3)
//     switch(x){
//         case x== 'Oct':
//             console.log('jan: ', 10);
//             break
//         case x== 'Nov':
//             console.log('jan: ', 11);
//             break
//     }
//   }
//   dateConv(DateTime.onChange);
function NasaPhoto(){
    const [pic, setPic] = useState([])
    const [day, setDay] = useState(['2019-10-14'])
    const APIkey = "98REzccm6Ml8n54NaB9XPz4R7nADaOI4iEOOlSj9"; 

    const [calDate, setcalDate] = useState([])

    const [onepic, setOnepic] = useState([]);
  


    const DateTime =  <Datetime  onChange={(val)=> { setcalDate(moment1( val._d.toString().slice(4,15) ).format('YYYY-MM-DD')) }} locale= 'en' placeholder="YYYY/MM/DD/" dateFormat="YYYY/MM/DD" value={''} timeFormat={false}/>

    let theDay = calDate;
    console.log("date time: ", theDay)


    const Bottom=styled.div`
            width:100%;
            height: 20%; 
            background-color: grey;
            box-shadow: 16px 8px 6px -6px black;
            margin-top: 20px;
            border-top: 5px solid #585858; 

        `

    useEffect(() => { 
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIkey}&start_date=2019-11-01&end_date=2019-11-07 `)
            .then(res => { 
                console.log(res.data);
                setPic(res.data); 
                console.log('pic', pic);
            }).catch(error => {
                console.log("the data was not return", error);
              })         
    },[])

    useEffect(() => { 
        axios.get(`https://api.nasa.gov/planetary/apod?date=${calDate}&api_key=${APIkey} `)
                .then(response => { 
                    console.log(response.data);
                    setOnepic(response.data)
                    console.log(onepic)
                }).catch(error => {
                    console.log("the data was not return", error);
                  });
    },[calDate])
    const items = [];
    pic.map((el, index) => { 
        
        items.push({
            src: `${el.hdurl}`,
            altText: `Slide ${index}`,
            header: `Title: ${el.title}    -----    Date: ${el.date}`,
            caption: `${el.explanation}`,
            index: `${index}`,
            key: `${index}`
          })
        return items;
          
    })
    
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
        <CarouselItem className="CarouselItem"
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            style={{width:`20%`}}
            key={item.src}
        >
            <CarouselCaption className="caption" captionText={item.caption} captionHeader={item.header} />
            <img src={item.src} alt={item.altText} />
            
        </CarouselItem>
        );
    });

    return (
    <div className="halfSides">
        <Carousel
        className="Carousel"
        
        
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        >
        
        <CarouselIndicators  items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        <Bottom/>
        <div>
            {DateTime}
            {/* {pic.map((item, index) => {

            return (
                <NasaCard 
                key = {index}
                index = {index}
                day = {item.day}
                setDay = {setDay}
                title = {item.title}
                date = {item.date}
                image = {item.hdurl}
                explanation = {item.explanation}
                />

            )})} */}

            <NasaCard 
                key = {onepic.url}
                // index = {index}
                day = {onepic.day}
                // setDay = {setDay}
                title = {onepic.title}
                date = {onepic.date}
                image = {onepic.hdurl}
                explanation = {onepic.explanation}
                />
            
        </div>
        
    </div>
    );
}
        
//     return (


//     )
// };

export default NasaPhoto; 