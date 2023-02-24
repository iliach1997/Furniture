

const SliuderContent=({activeIndex,imageSlider})=>{
    return(
        <section>
            {imageSlider.map((slide,index)=> <div key={index}
            className={index===activeIndex?'slides active':'inactive'}>
                <img className="slide-image" src={slide.url} alt={slide.title}/>
           </div>)}
           
        </section>
    )
}
export default SliuderContent