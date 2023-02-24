import { useState,useEffect } from "react";
import SliuderContent from "./SliuderContent";
// import imgSlider from "./imgSlider";
import Arrows from "./Arrows";
import Dots from "./Dots";
import './slider.css';

 const Slider=(props)=>{
    const len=props.img.length-1;
    const[activeIndex,setActiveIndex]=useState(0)
    useEffect(()=>{
    const interval=setInterval(()=>{
    setActiveIndex(activeIndex===len?0:activeIndex+1)
    },6000);
    return()=>clearInterval(interval)},[activeIndex, len])
   return<div className="slider-container">
     <SliuderContent activeIndex={activeIndex} imageSlider={props.img}/>
     <Arrows
     prevSliade={()=>setActiveIndex(activeIndex<1?len:activeIndex-1)}
     nextSliade={()=>setActiveIndex(activeIndex===len?0:activeIndex+1)}/>
     <Dots activeIndex={activeIndex} imageSlider={props.img} 
     onclick={activeIndex=>setActiveIndex(activeIndex)}/>  
    </div>
 }
 export default Slider; 