import AuthLayout from "../../components/layouts/AuthLayout";
import Input from "../../components/Inputs/Input";
import { Link } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils/helper";
import { useState } from "react";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";

const SignUp = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Please enter your full name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!validatePassword(password)) {
      setError("Please enter a strong password");
      return;
    }

    setError("");
  };

  return (
    <AuthLayout>
      <div className="md:h-full flex flex-col justify-center items-center">
        <p className="text-2xl text-center font-semibold text-black">
          Create an Account
        </p>
        <p className="text-xs text-center text-slate-700 mt-[5px] mb-6">
          Join us today by entering your details below
        </p>

        <form onSubmit={handleSubmit}>
          {/* <Input
            value={profilePhoto}
            onChange={(e) => setProfilePhoto(e.target.value)}
            label="Profile Photo"
            type="file"
          /> */}

          <ProfilePhotoSelector
            image={profilePhoto}
            setImage={setProfilePhoto}
          />

          <Input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            label="Full Name"
            type="text"
            placeholder="Krish Ahlawat"
          />

          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email Address"
            type="email"
            placeholder="krish@example.com"
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
            SIGNUP
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Already have an account?{" "}
            <Link className="font-medium text-primary underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
