import React from "react";
import { observer } from "mobx-react"
import { Outlet, Link } from "react-router-dom"
import AppStore from "../../store/AppStoreLogin";
import Login from "./Login";
import BusinessDetails from "../BusinessData/BusinessDetails";




const Admin = observer(() => {


    return (
        <>
            {!AppStore.isLogin ? (
                <Login />
            ) : (
                <>
                    <BusinessDetails />
                    <br />
                    <Link to="./services">services | </Link>
                    <Link to="./meeting">meeting</Link>
                    <Outlet />
                </>
            )}
        </>
    );
});

export default Admin;

