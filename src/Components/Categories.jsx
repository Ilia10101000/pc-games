import React from "react";

export default function Categories(){

    React.useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/categories')
        .then(response => response.json())
        .then(data => setStore(data))
        .catch(e => console.log(e))
    },[])

    return (
        <div>
            Category
        </div>
    )
}