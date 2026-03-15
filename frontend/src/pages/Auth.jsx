import { useState } from "react";
import { loginUser, registerUser } from "../api/api";

function Auth() {

  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (isLogin) {
        const res = await loginUser({
          email: form.email,
          password: form.password
        });

        localStorage.setItem("token", res.data.access_token);
        window.location.href = "/dashboard";

      } else {

        await registerUser(form);
        alert("Registration successful. Please login.");
        setIsLogin(true);

      }

    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (

    <div className="flex items-center justify-center h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h2 className="text-2xl font-bold text-center mb-6">

          {isLogin ? "Login to your account" : "Create an account"}

        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {!isLogin && (

            <input
              type="text"
              placeholder="Name"
              className="w-full border p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {isLogin ? "Login" : "Register"}
          </button>

        </form>

        <p className="text-center mt-4 text-sm">

          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <span
            className="text-blue-500 cursor-pointer ml-1"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register" : "Login"}
          </span>

        </p>

      </div>

    </div>

  );
}

export default Auth;