import React from "react";

export default function Product({price,title,description,images}){
    const [image, setImage] = React.useState(0);

    function changeImage(){
        if(image >= (images.length - 1)){
            setImage(0)
        } else {
            setImage(state => state + 1)
        }
    }

    return (
        <div className="product-container">
            <div>{title}</div>
            <div className="img-wrapper" onClick={changeImage}><img src={images[image]}/></div>
            <div>{description}</div>
            <div>{price}</div>
        </div>
    )
}