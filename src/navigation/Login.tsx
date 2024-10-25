import React, { useState } from "react";
import {
  authLoginResponseValidator,
  authLoginValidator,
  E_VALIDATION_ERROR,
} from "../validators/auth_validator";
import axios, { AxiosError } from "axios";
import { makeHttpUri } from "../utils/request-helpers";

const Login = () => {
  const [email, setEmail] = useState("fkakkus@hotmail.com");
  const [password, setPassword] = useState("123456");
  const [errorMessages, setErrorMessages] = useState<
    { field: string; message: string; rule: string }[]
  >([]);

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setErrorMessages([]);

      const payload = await authLoginValidator.validate({ email, password });

      axios
        .post(makeHttpUri("/v1/auth/login"), payload)
        .then(async (res) => {
          try {
            const payload = await authLoginResponseValidator.validate(res.data);
            localStorage.setItem("auth_token", payload.token.token);
          } catch (error) {
            if (error instanceof E_VALIDATION_ERROR) {
              console.error(error.message, error.messages);
            }
          }
        })
        .catch((error: Error | AxiosError) => {
          if (axios.isAxiosError(error)) {
            if (error.response) {
              if (Array.isArray(error.response.data)) {
                setErrorMessages(error.response.data);
              } else {
                setErrorMessages([{ field: "form", ...error.response.data }]);
              }
            }
          } else {
            console.error(error);
          }
        });
    } catch (error) {
      if (error instanceof E_VALIDATION_ERROR) {
        console.error(error.message, error.messages);
        setErrorMessages(error.messages);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 min-w-[40%]">
      <form
        className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">
            Email
          </label>
          <div className="text-red-500">
            {errorMessages
              .filter((error) => error.field === "email")
              .map((error) => error.message)
              .join(", ")}
          </div>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-white mb-2">
            Password
          </label>
          <div className="text-red-500">
            {errorMessages
              .filter((error) => error.field === "password")
              .map((error) => error.message)
              .join(", ")}
          </div>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
