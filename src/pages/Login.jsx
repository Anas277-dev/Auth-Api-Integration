// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { saveToken } from "../utils/auth";

// const Login = () => {
//   const [username, setUsername] = useState(""); // changed from email to username
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("https://os-project-server.vercel.app/auth/existinguser", {
//         username: username.trim(),
//         password: password.trim(),
//       });
//       saveToken(res.data.token);
//       navigate("/welcome");
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="flex h-screen items-center justify-center bg-gray-100">
//       <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-80">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//         <input
//           type="text"
//           placeholder="Username"
//           className="border p-2 w-full mb-4"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="border p-2 w-full mb-4"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { saveToken } from "../utils/auth";
import "./Login.css"; // 👈 yeh purani CSS yahan import hogi

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://os-project-server.vercel.app/auth/existinguser",
        {
          username: username.trim(),
          password: password.trim(),
        }
      );
      saveToken(res.data.token);
      navigate("/welcome");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            👁️
          </span>
        </div>

        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
