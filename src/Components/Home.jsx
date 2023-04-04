import React from "react";
import { NavLink } from "react-router-dom";

export default function Home(){

    return (
        <>
            <div>
                HomePage
            </div>
            <NavLink to='login'>Login</NavLink>
        </>
    )
}