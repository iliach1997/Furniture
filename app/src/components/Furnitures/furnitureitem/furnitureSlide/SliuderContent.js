import './slider.css'
const SliuderContent=({activeIndex,imageSlider})=>{
    return(
        <section>
            {imageSlider.map((slide,index)=> <div key={index}
            className={index===activeIndex?'slides active':'inactive'}>
                <img className="img" src={slide.url} alt={slide.title}/>
           </div>)}
           
        </section>
    )
}
export default SliuderContent