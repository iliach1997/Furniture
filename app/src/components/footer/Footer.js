
import './footer.css'
const Footer=()=>{
    return(
        <div className='page-container'>
        <div className='main-footer'>
            <div className='container'>
                <div className='row'>
                  <div className='col'>
                  
                    <ul className='list-unstyled'>  
                    <h3>Company</h3>
                      <li>598-17-21-24</li>
                      <li>Georgia,  Foti</li>
                      <li>Vano Sarjishvili Street</li>
                    </ul>
                  </div>
                  <div className='col'>
            
                    <ul className='list-unstyled'>
                              <h3>STUFF</h3>
                      <li>Chapidze ilia</li>
                      <li>Facia Daviti</li>
                      <li>Chapidze Mito</li>
                    </ul>
                  </div>
                  <div className='col'>
                   
                    <ul className='list-unstyled'>
                       <h3>Contact us</h3>
                      <li>chapidze19997@gmail.com</li>
                      <li>598-124-804</li>
                      <li></li>
                    </ul>
                  </div>
                  {/* <hr/>
                  <div className='row'>
                    <p className='col-sm'>
                      &copy;{new Date().getFullYear()}FUNITURE</p>
                  </div> */}
              </div>
            </div>
        </div>
        </div>
    )
}
export default Footer