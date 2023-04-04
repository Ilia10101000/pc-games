import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsList } from "../store/productReducer";
import ProductItem from "./ProductItem";

export default function Products(){

    React.useEffect(() => {
        dispatch(fetchProductsList())
    },[]);

    const dispatch = useDispatch();
    const {product, error, status} = useSelector(state => state.product);
    console.log(product)
    
    
    let result;
    if(status === 'loading') result = status;
    if(status === 'resolved') {
        result = product.map(item => <ProductItem key={item.id} price={item.price} images={item.images} title={item.title}/>)
    }


    return(
        <div className="products-container">
            {result}
        </div>
    )
}