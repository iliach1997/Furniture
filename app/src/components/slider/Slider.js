import { useState,useEffect } from "react";
import SliuderContent from "./SliderContent";
import imgSlider from "./imgSlider";
import Arrows from "./Arrows";
import Dots from "./Dots";
import './slider.css';
const len=imgSlider.length-1;
 const Slider=(props)=>{
    const[activeIndex,setActiveIndex]=useState(0)
    useEffect(()=>{
    const interval=setInterval(()=>{
    setActiveIndex(activeIndex===len?0:activeIndex+1)
    },3000);
    return()=>clearInterval(interval)},[activeIndex])
   return<div className="slider-container">
     <SliuderContent activeIndex={activeIndex} imageSlider={imgSlider}/>
     <Arrows
     prevSliade={()=>setActiveIndex(activeIndex<1?len:activeIndex-1)}
     nextSliade={()=>setActiveIndex(activeIndex===len?0:activeIndex+1)}/>
     <Dots activeIndex={activeIndex} imageSlider={imgSlider} 
     onclick={activeIndex=>setActiveIndex(activeIndex)}/>  
    </div>
 }
 export default Slider; 