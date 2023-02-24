const Arrows=({prevSliade,nextSliade})=>{
    return<div className="arrows">
    <span className="prev" onClick={prevSliade}>&#10094;</span>
    <span className="next" onClick={nextSliade}>&#10095;</span>
    </div>
}
export default Arrows