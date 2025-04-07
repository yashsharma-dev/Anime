import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css"

function Login({ setShowlogin, setIsOpenLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    let resp = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        role,
      }),
      headers: { "Content-Type": "application/json" },
    });

    let result = await resp.json();
    console.log(result);

    if (result.token) {
      let user = { username: result.username, role: result.role };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(result.token));
      window.location.reload();
    } else {
      localStorage.clear();
      setError(result.message || "Invalid credentials. Please try again.");
    }
  };

  return (
    <div className=" login fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-96 bg-[var(--grey)] p-6 rounded-lg shadow-lg text-white relative">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Login</h3>
          <i className="bx bx-x text-2xl cursor-pointer" onClick={() => setIsOpenLogin(false)}></i>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* Email Input */}
        <input
          type="text"
          placeholder="Email"
          className="w-full mt-4 p-2 border border-gray-500 bg-transparent text-white rounded"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        {/* Password Input */}
        <div className="relative mt-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-2 border border-gray-500 bg-transparent text-white rounded"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer">
            <i className={`bx ${showPassword ? "bx-hide" : "bx-show"} text-xl`} onClick={() => setShowPassword(!showPassword)}></i>
          </div>
        </div>

        {/* Role Selection */}
        <div className="mt-4">
          <label className="text-sm text-gray-400">Select Role</label>
          <select
            className="w-full mt-1 p-2 border border-gray-500 bg-[var(--gray)] text-white rounded"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option className="text-black bg-[var(--gray)]" value="user">User</option>
            <option className="text-black bg-[var(--gray)]" value="admin">Admin</option>
          </select>
        </div>

        {/* Login Button */}
        <button
          className="w-full mt-6 bg-[var(--yellow)] hover:bg-[#d8b828] text-black p-2 rounded font-semibold transition"
          onClick={handleLogin}
        >
          Login
        </button>

        {/* Register Option */}
        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <span className="text-[var(--yellow)] cursor-pointer" onClick={() => setShowlogin(false)}>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
