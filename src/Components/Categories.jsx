import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryList } from "../store/categoryReducer";
import CategoryItem from "./CategoryItem";

export default function Categories(){

    const dispatch = useDispatch();
    const {category} = useSelector(state => state.category);
    console.log(category)
    React.useEffect(() => {
        dispatch(fetchCategoryList())
    },[])
    let result;
    if(category.length){
       result = category.map( item => <CategoryItem key={item.id} name={item.name} image={item.image}/>)
    }
    return (
        <div className="categories-container">
            {result}
        </div>
    )
}