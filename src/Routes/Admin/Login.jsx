import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import AppStore from "../../store/AppStore";
import { login } from "../../store/Server";
// import Admin from "./Admin";
// import {handleLogin} from "./Admin";

// export default function Login(){
//     return "hello"
// }

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here, e.g. send the username and password to an API
    // handleLogin(username, password);
    // history.push("/Admin");
    // onLogin(username, password);

    // Reset the form after submission
    setUsername("");
    setPassword("");
  };

  const handleLogin = async (e) => {

    console.log(1)
    const isValid = await login(username, password);
    const data = await response.json();

    if (isValid.ok) {
      console.log(fail)
      // handle success, redirect or show success message
    } else {
      setError(data.error || "Unexpected error occurred");
    }


  };

  //   const handleLogin = async (e) => {
  //     e.preventDefault();

  //     try {
  //         const response = await login(username, password);
  //         const data = await response.json();

  //         if (response.ok) {
  //             // handle success, redirect or show success message
  //         } else {
  //             setError(data.error || "Unexpected error occurred");
  //         }
  //     } catch (error) {
  //         setError("Error occurred while logging in");
  //     }

  //     // Reset the form after submission
  //     setUsername("");
  //     setPassword("");
  // };



  return (
    <div>
      <h2>שלום:)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">שם משתמש: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">סיסמא: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {/* <button type="submit">התחבר</button> */}
        <button type="submit" onClick={handleLogin}>התחבר</button>
        {/* <button type="submit" onClick={()=>login(username,password)}>התחבר</button> */}
        {/* <button type="submit" onClick={()=>AppStore.setIsLogin(true)}>התחבר</button> */}
        {/* <button type="submit" onClick={onLogin}>התחבר</button> */}

        {/* <button type="submit">התחבר</button> */}
      </form>
    </div>
  );
};

export default Login;