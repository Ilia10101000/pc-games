import React from "react";

export default function CategoryItem({image,name}){
    return(
        <div className="category-item">
            <div className="image"><img src={image} alt={name}/></div>
            <div className="name">{name}</div>
        </div>
    )
}