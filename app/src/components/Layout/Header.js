import { Fragment } from "react"; 
import HeaderCartButton from "./HeaderCartButton";

import Slider from "../slider/Slider";
import classes from './Header.module.css';
const Header=(props)=>{
return<Fragment>
    <header className={classes.header}>
        <h1>ReactFurniture</h1>
      
       <HeaderCartButton  onClick={props.onOpen} />
    </header>
    <div className={classes['main-image']}> 

        <Slider/>
    </div>
</Fragment>
};
export default Header;

