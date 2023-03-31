import React from "react";

export default function Category({img, name}){

    return (
        <div className="category-container">
            <div>{name}</div>
            <div className="img-wrapper"><img src={img} alt={name}/></div>
        </div>
    )
}