import { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import Input from "../../components/Inputs/Input";
import { Link } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!validatePassword(password)) {
      setError("Please enter a strong password");
      return;
    }

    setError("");

    //Login API Call
  };

  return (
    <AuthLayout>
      <div className="md:h-full flex flex-col justify-center items-center">
        <p className="text-2xl text-center font-semibold text-black">
          Welcome Back
        </p>
        <p className="text-xs text-center text-slate-700 mt-[5px] mb-6">
          Please enter your details to log in
        </p>

        <form onSubmit={handleSubmit}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email Address"
            type="email"
            placeholder="elon@example.com"
          />

          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
            placeholder="Min 8 Characters"
          />

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary">
            LOGIN
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Don't have an account?{" "}
            <Link className="font-medium text-primary underline" to="/signup">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
