import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import NasaCard from './NasaCard'; 
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  
function NasaPhoto(){
    const [pic, setPic] = useState([])
    const [day, setDay] = useState(['2019-10-14'])
    const APIkey = "98REzccm6Ml8n54NaB9XPz4R7nADaOI4iEOOlSj9"; 
    useEffect(() => { 
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIkey}&start_date=2019-10-07&end_date=2019-11-07 `)
            .then(res => { 
                console.log(res.data);
                setPic(res.data); 
                 
            })
            .catch(error => {
                console.log("the data was not return", error);
              });
    },[])
    const items = [];
    pic.map((el, index) => { 
        
        items.push({
            src: `${el.hdurl}`,
            altText: `Slide ${index}`,
            header: `Title: ${el.title}    -----    Date: ${el.date}`,
            caption: `${el.explanation}`,
           
            key: `{index}`
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
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.header} />
        </CarouselItem>
        );
    });

    return (
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
    );
}
        
//     return (

//         <div>
//             {pic.map((item, index) => {

//             return (
//                 <NasaCard 
//                 key = {index}
//                 day = {item.day}
//                 setDay = {setDay}
//                 title = {item.title}
//                 date = {item.date}
//                 image = {item.hdurl}
//                 explanation = {item.explanation}
//                 />

//             )})}
//         </div>
//     )
// };

export default NasaPhoto; 