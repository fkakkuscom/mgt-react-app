import { useRef, useState } from "react";
import {
  authLoginResponseValidator,
  authLoginValidator,
  E_VALIDATION_ERROR,
} from "../validators/auth_validator";
import axios, { AxiosError } from "axios";
import { makeHttpUri } from "../utils/request-helpers";
import { toast } from "react-toastify";
import Paper from "../stories/Paper";
import Button from "../stories/Button";

function Login() {
  const [email, setEmail] = useState("fkakkus@hotmail.com");
  const [password, setPassword] = useState("123456");
  const [errorMessages, setErrorMessages] = useState<
    { field: string; message: string; rule: string }[]
  >([]);

  const formRef = useRef<HTMLFormElement>(null);

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

            if (formRef.current) {
              toast("Login successful", { type: "success" });
            }
          } catch (error) {
            if (error instanceof E_VALIDATION_ERROR) {
              console.error(error.message, error.messages);
            }
          }
        })
        .catch((error: Error | AxiosError) => {
          if (axios.isAxiosError(error) && formRef.current) {
            if (error.response) {
              if (Array.isArray(error.response.data)) {
                setErrorMessages(error.response.data);
              } else {
                setErrorMessages([{ field: "form", ...error.response.data }]);
                toast(error.response.data.message, { type: "error" });
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
    <Paper className="flex-1 flex self-center justify-center items-center min-w-[50%] mr-4 ml-4">
      <form
        ref={formRef}
        className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
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
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2">
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
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        <Button primary type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Paper>
  );
}

export default Login;
