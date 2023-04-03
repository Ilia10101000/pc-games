import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout(){

    return(
        <>
        <Sidebar/>
        <div className="layout-wrapper">
            <Header/>
            <main className="outlet">
                <Outlet/>
            </main>
            <Footer/>
        </div>
        </>
    )
}