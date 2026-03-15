import { useState } from "react";
import { loginUser, registerUser } from "../api/api";

function Auth() {

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200">

      <div className="bg-white p-8 rounded-xl shadow-xl w-96">

        {/* Title */}

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">

          {isLogin ? "Login to your account" : "Create an account"}

        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {!isLogin && (

            <div>
              <label className="text-sm text-gray-600">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>

          )}

          <div>

            <label className="text-sm text-gray-600">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
            />

          </div>

          <div>

            <label className="text-sm text-gray-600">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
            />

          </div>

          {/* Button */}

          <button
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2.5 rounded-lg font-medium hover:bg-blue-600 transition"
          >
            {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
          </button>

        </form>

        {/* Toggle */}

        <p className="text-center mt-4 text-sm text-gray-600">

          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <span
            className="text-blue-500 cursor-pointer ml-1 font-medium hover:underline"
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