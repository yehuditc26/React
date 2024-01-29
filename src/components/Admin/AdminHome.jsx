import React, { useState } from "react";
import { observer } from "mobx-react"

import AppStore from "../../store/AppStoreLogin";
import Login from "./Login";
import { login } from "../../store/Server";
import BusinessDetails from "../BusinessData/BusinessDetails";
import ServicesList from "../Services/ServicesList";



const Admin = observer(() => {

    const [loginError, setLoginError] = useState(false);

    const handleLogin = async (username, password) => {

        const isValid = await login(username, password);

        if (!isValid) {

            setLoginError(true);
        }

        console.log("Received username:", username);
        console.log("Received password:", password);
    };


    return (
        <>
            {!AppStore.isLogin ? (
                <Login />
            ) : (
                <>
                    <BusinessDetails />
                    <ServicesList />
                </>
            )}
        </>
    );
});

export default Admin;

