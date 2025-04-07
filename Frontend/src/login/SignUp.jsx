import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ setShowlogin, setIsOpenLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [admin_password, setAdmin_Password] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const register_handle = async () => {
    try {
      let resp = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        body: JSON.stringify({ username, email, password, role, admin_password }),
        headers: { "Content-type": "application/json" },
      });

      let result = await resp.json();

      if (result.token) {
        const user = { username: result.username, role: result.role };
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(result.token));
        navigate("/");
        window.location.reload();

      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-96  bg-[var(--grey)] p-6 rounded-lg shadow-lg text-white relative">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Sign Up</h3>
          <i className="bx bx-x text-2xl cursor-pointer" onClick={() => setIsOpenLogin(false)}></i>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          className="w-full mt-4 p-2 border border-gray-500 bg-transparent text-white rounded"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        
        <input
          type="text"
          placeholder="Email"
          className="w-full mt-4 p-2 border border-gray-500 bg-transparent text-white rounded"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

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

        {role === "admin" && (
          <input
            type="password"
            placeholder="Admin Password"
            className="w-full mt-4 p-2 border border-gray-500 bg-transparent text-white rounded"
            onChange={(e) => setAdmin_Password(e.target.value)}
            value={admin_password}
          />
        )}

        <select
          className="w-full mt-4 p-2 border border-gray-500 bg-[var(--gray)] text-white rounded"
          onChange={(e) => setRole(e.target.value)}
          value={role}
        >
          <option className="text-black" value="user">User</option>
          <option className="text-black" value="admin">Admin</option>
        </select>

        <button
          className="w-full mt-6 bg-[var(--yellow)] hover:bg-[#d8b828] text-black p-2 rounded font-semibold transition"
          onClick={register_handle}
        >
          Sign Up
        </button>

        <p className="mt-4 text-sm text-center">
          Already have an account? <span className="text-[var(--yellow)] cursor-pointer" onClick={() => setShowlogin(true)}>Login</span> instead
        </p>
      </div>
    </div>
  );
}

export default SignUp;
