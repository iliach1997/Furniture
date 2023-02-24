import FurnitureItem from "./furnitureitem/FurnitureItem";
import chear from '../assets/chair.jpg';
import table from '../assets/table.jpg';
import kitchen from '../assets/kitchen.jpg';
import arm_chair from '../assets/arm-chair.jpg';
import classes from './AvailableFurniture.module.css'
const DUMMY_Furnitures = [
    {
      id: 'm1',
      name: 'chair',
      description: 'Finest fish and veggies',
      price: 322.99,
      img:[{url:chear},{url:table}]
    }, 
    {
      id: 'm2',
      name: 'table',
      description: 'A german specialty!',
      price: 163.5,
      img:[{url:table},{url:table}]
    },
    {
      id: 'm3',
      name: 'kitchen',
      description: 'American, raw, meaty',
      price: 122.99,
      img:[{url:kitchen},{url:table}]
    },
    {
      id: 'm4',
      name: 'arm-chair',
      description: 'Healthy...and green...',
      price: 318.99,
      img:[{url:arm_chair},{url:table}]
    },
    
    
  ];


const AvailableFurniture=()=>{
   const FurnitureData=DUMMY_Furnitures.map((furn)=>
     <FurnitureItem 
     key={furn.id}
     id={furn.id}
     name={furn.name}
     description={furn.description}
     price={furn.price}
     img={furn.img}
     />
   )


    return(
      <div className={classes.div}>
        <div className={classes.div_box}>
          {FurnitureData}
        </div>
        </div>
    )
}
export default AvailableFurniture;


