import ListItem from "./ListItem"
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Loader from '../UI/Loader.js';

// const items=[
//         {
//             id:0,
//             discountedprice:350,
//             price:450,
//             title:"Title of the Item",
//         },
//         {
//             id:1,
//             discountedprice:350,
//             price:450,
//             title:"Title of the Item",
//         }
// ]


function Products({onAddItem,onRemoveItem}) {
    // const [items, setitems] = useState([
    //     {
    //         id:0,
    //         discountedprice:350,
    //         price:450,
    //         title:"Title of the Item",
    //     },
    //     {
    //         id:1,
    //         discountedprice:350,
    //         price:450,
    //         title:"Title of the Item",
    //     },
    //     {
    //         id:3,
    //         discountedprice:350,
    //         price:450,
    //         title:"Title of the Item",
    //     }]
    // );
    const [items, setitems] = useState([]);
    const [loader, setloader] = useState(true);
    const [presentItems, setpresentItems] = useState([])
    //   console.log(result);
    /*using fetch Api*/
    useEffect(() => {

        /*fetch(`https://project-endterm-default-rtdb.firebaseio.com/.json`)
        .then(response=>response.json())
        .then(data=>console.log(data))
        .catch(error=>{
          console.log("error")
      })*/
        /*using axios package */
        axios.get(`https://project-endterm-default-rtdb.firebaseio.com/.json`)
            .then(response => {
                // console.log(response)
                const d2 = response.data.items
                // console.log(d2)
                setitems(d2.map((item, index) => {
                    return {
                        ...item,
                        id: index
                    }
                }))
                // setitems(transformedData)
                // console.log(transformedData)
                setloader(false);
            }
            )
            .catch(error => { console.log(error) })  
    })

        const handleAddItem= id =>{
           if(presentItems.indexOf(id)>-1){
            return;
           }
           setpresentItems([...presentItems,id])
           onAddItem();
        }
        const handleRemoveItem= id =>{
            let index=presentItems.indexOf(id);
            if(index>-1){
                let items=[...presentItems]
                items.splice(index,1);
                setpresentItems([...items])
                onRemoveItem();
            }else{
                return 
            }   
        }

    return (
        <><div className="product-list">
            <div className="product-list--wrapper">
                {/* <ListItem data={items[0]}></ListItem>
    <ListItem data={items[1]}></ListItem> */}

                {items.map(item => {
                    return (<ListItem onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item}></ListItem>);
                })}
                {/* } */}
                {/* {[<ListItem data={items[0]}></ListItem>]} */}
            </div>
        </div>
       {loader&&<Loader></Loader>} 
        </>
    )


}
export default Products