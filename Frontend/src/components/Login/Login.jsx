import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="bg-[#050210]">
      <h1 className="text-white text-left text-xl pl-10 py-5">
        <Link to="/">BACK</Link>
      </h1>
      <div className="flex justify-center items-center w-3/3">
        <div>
          <div>
            <img
              className="m-auto"
              src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/11/lifespring-footer-logo.png"
              alt=""
            />
          </div>
          <div>
            {error && <h3 className="text-red-500 text-xl">{error}</h3>}

            <form onSubmit={handleSubmit} className="mt-10">
              <div className="mb-4">
                <label className="block mb-2  font-medium text-white dark:text-gray-300 text-left text-md">
                  Email
                </label>
                <input
                  style={{ borderBottom: "2px solid white" }}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full bg-transparent text-white border-0 focus:outline-none focus:ring-0"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2  font-medium text-white dark:text-gray-300 text-left text-md">
                  Password
                </label>
                <input
                  style={{ borderBottom: "2px solid white" }}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="w-full bg-transparent text-white border-0 focus:outline-none focus:ring-0"
                  required
                />
              </div>

              <div className="flex items-start mb-4">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                </div>
                <label className="ml-2 text-sm font-medium text-white dark:text-gray-400">
                  Remember Me
                </label>
              </div>
              <button
                style={{ width: "50vh" }}
                type="submit"
                className="text-black bg-white hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl px-2 py-3 text-center transition-all duration-300 ease-in-out "
                disabled={isLoading}
              >
                LOGIN
              </button>
            </form>
            <a href={"/"} className="text-sm text-center text-white mt-2">
              Forgot your password ?
            </a>

            <div className="my-8">
              <p className="text-left text-white">Don't Have an account?</p>
              <Link to="/signup">
                <button
                  style={{ width: "50vh" }}
                  className="text-white mt-2 bg-none hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl px-2 py-3 text-center transition-all duration-300 ease-in-out border border-white "
                >
                  SIGNUP
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
