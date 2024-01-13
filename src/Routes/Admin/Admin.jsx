import React, { useState } from "react";
import { observer } from "mobx-react"

// import AppStore from "../../store/store"
import AppStore from "../../store/AppStore";
import Login from "./Login"
import BusinessDetails from "../Main/BusinessDetails"
import ErrorLogin from "../../components/Admin/ErrorLogin"
import { login } from "../../store/Server";



const Admin = observer(() => {

    const [loginError, setLoginError] = useState(false);

    const handleLogin = async (username, password) => {
        // Perform login logic in the Admin component, e.g. send the username and password to an API
        
        const isValid = await login(username,password);

        if (!isValid) {
            // Set the login state to true
        //     AppStore.setIsLogin(true);
        // } else {
            // Set the login error state to true
            setLoginError(true);
        }

        console.log("Received username:", username);
        console.log("Received password:", password);
      };

    // const handleLogin = async (details) => {
    //     // Perform login verification against the server
    //     const isValid = await verifyLogin(details);

    //     if (isValid) {
    //         // Set the login state to true
    //         AppStore.setIsLogin(true);
    //     } else {
    //         // Set the login error state to true
    //         setLoginError(true);
    //     }
    // };

    return (
        <>
        
            {!AppStore.isLogin ?
                // loginError ? <ErrorLogin /> : <Login onLogin={handleLogin} /> :
                // loginError ? <ErrorLogin /> : <Login/> :
                // <BusinessDetails /> 
                
                <Login/> :  <BusinessDetails /> 
            }
        </>
    );
});

export default Admin;



// const Admin = (observer(() => {

//     return (
//         <>
//             {!AppStore.isLogin ?
//                 <Login /> :
//                 <BusinessDetails />
//             }
        
//         </>
//     )
// }))

// export default Admin
