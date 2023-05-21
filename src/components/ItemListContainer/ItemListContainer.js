import "./ItemListContainer.css";
import { useState, useEffect} from "react";
import { getProducts} from "../../asincMock";
import ItemList from "../ItemList/ItemList";
import React from "react";

const ItemListContainer = ( {greeting} ) => {
    const[products, setProducts] = useState ([]);

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .cacth(error => {
                console.error(error)
            })
    }, []
    );

    return(
        <div>
            <h1 className="greeting">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer