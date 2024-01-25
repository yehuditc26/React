
import React, { useState } from "react";
import { Button, TextField, Alert, AlertTitle } from '@mui/material';
import AppStore from "../../store/AppStore";
import { login } from "../../store/Server";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
  };

  const handleLogin = async (e) => {
    const isValid = await login(username, password);
    console.log(isValid)
    if (isValid == 'failed') {
      setValid(false)
    }
    

  };

  return (
    <div dir="rtl">
      <h2>שלום:)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">שם משתמש: </label>
          <TextField
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">סיסמא: </label>
          <TextField
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {
          !valid && <Alert severity="error">
            שם משתמש או סיסמא שגויים:(
          </Alert>
        }
        <Button type="submit" onClick={handleLogin}>
          התחבר
        </Button>

      </form>
    </div>
  );
};

export default Login;


