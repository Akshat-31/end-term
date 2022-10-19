import logo from './logo.svg';
import './App.css';
import ListItem from './Components.js/Products/ListItem';
import Products from './Components.js/Products/Product';
import Header from './Components.js/Layout/Header';
import Subheader from './Components.js/Layout/Subheader';
import{useState} from "react"
{/* <ListItem data={
  discountedprice:350,
  //      price:450,
  //      title:"Title of the Item",
}></listItem>  stateless component just dumping data
 although dynamic*/}

const App=()=>{
const [cartItems, setcartItem] = useState(0)
const handleAddItem=()=>{
  setcartItem(cartItems+1)
}
const handleRemoveItem=()=>{
  setcartItem(cartItems-1)
}
  return (
    <div>
      <Header count={cartItems}></Header>
      <Subheader></Subheader>
      <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem}></Products>
      
    </div>
  );
}

export default App;
