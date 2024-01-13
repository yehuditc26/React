// import React, { useState } from "react";

// // export default function Login(){
// //     return "hello"
// // }

// const Login = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
  
//     const handleUsernameChange = (e) => {
//       setUsername(e.target.value);
//     };
  
//     const handlePasswordChange = (e) => {
//       setPassword(e.target.value);
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
  
//       // Perform login logic here, e.g. send the username and password to an API
  
//       // Reset the form after submission
//       setUsername("");
//       setPassword("");
//     };
  
//     return (
//       <div>
//         <h2>שלום:)</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="username">שם משתמש: </label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={handleUsernameChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="password">סיסמא: </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//           </div>
//           <button type="submit">התחבר</button>
//         </form>
//       </div>
//     );
//   };
  
//   export default Login;