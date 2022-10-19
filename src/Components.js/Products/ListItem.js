import react,{Fragment, useState} from "react"
import Modal from "../UI/Modal";
// import ""

const ListItem=({data,onAdd,onRemove})=>{
    // data here is props
    // const data={
    //      discountedprice:350,
    //      price:450,
    //      title:"Title of the Item",
    const [counter, setcounter] = useState(0)
    const [showModal, setshowModal] = useState(false)
    function handleClick(event){
        event.stopPropagation();
        setcounter(counter+1);
    }
    function increaseCounterByOne(event){
        event.stopPropagation();
        onAdd(data.id)
        setcounter(counter+1);
    }
    function decreaseCounterByOne(event){
        event.stopPropagation();
        if(counter===0){
            return ;
        }
        if(counter==1){
            onRemove(data.id);
        }
        setcounter(counter-1);
    }
    const handleModal=()=>{
        setshowModal(previousState=>!previousState)
    }
    // }
    return(
        <Fragment>
        <div onClick={handleModal} className="item-card">
            <img className="img-fluid" src="https://image.shutterstock.com/image-vector/shopping-cart-vector-icon-flat-260nw-1690453492.jpg" alt="Some title value"/>
            <div className="item-cart__information">
                <div className="pricing">
                  <span>${data.discountedPrice}</span> 
                  <small>
                        <strike>{data.price}</strike>
                  </small> 
                </div>
                <div className="title"> 
                 <h3>{data.title}</h3>   
                </div>
            </div>
            {
                counter<1?
                    <button className="add-on" onClick={increaseCounterByOne}>
                    <span> Add to cart</span>
                    <img src="" alt=""></img>
                </button> 
                : 
            <div className="cart-add">
                <button onClick={decreaseCounterByOne}><span>-</span></button>
                <span>{counter}</span>
                <button onClick={increaseCounterByOne}><span>+</span></button>
            </div>
            }
        </div>
        {showModal&&<Modal onClose={handleModal}>
            <div className="item-card-modal">
                <div className="img-wrap">
                <img className={"img-fluid"} src="https://image.shutterstock.com/image-vector/shopping-cart-vector-icon-flat-260nw-1690453492.jpg" alt="Some title value"></img>
            </div>
            <div className="meta">
                <h3>{data.title}</h3>
                <div className="pricing">
                  <span>${data.discountedPrice}</span> 
                  <small>
                        <strike>{data.price}</strike>
                  </small> 
                </div>
                <p>{data.description}</p>
                {
                counter<1?
                    <button className="cart-add-card-add__modal" onClick={handleClick}>
                    <span> Add to cart</span>
                    <img src="" alt=""></img>
                </button> 
                : 
            <div className="cart-add-card-add__modal">
                <button onClick={decreaseCounterByOne}><span>-</span></button>
                <span>{counter}</span>
                <button onClick={increaseCounterByOne}><span>+</span></button>
            </div>
            }
            </div>
            
            </div>

            </Modal>
        }
        </Fragment>

    )
}
export default ListItem