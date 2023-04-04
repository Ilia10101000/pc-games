import React from "react";

export default function ProductItem({title,images,price}){
    return (
        <div className="product-item">
            <div className="image-wrapper"><img src={images[0]} alt='title'/></div>
            <div className="description">
                <div className="title">{title}</div>
                <div className="price">{price}</div>
            </div>
        </div>
    )
}