import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import ".//styling/authentication.css";
import Blob1 from "./components/Blob1";

function Signup() {
  // const isSignUp = true;
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        setError("Passwords need to match!");
        return;
      }
      const response = await axios.post(`http://localhost:8000/signup`, {
        email,
        password,
      });
      setCookie("AuthToken", response.data.token);
      setCookie("UserId", response.data.userId);

      const success = response.status === 201;

      if (success) navigate("/onboarding");

      window.location.reload();
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <>
      <Blob1 />
      <body>
        <div className="auth-container">
          {/*<Blob1 />*/}
          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              placeholder="Confirm Password"
              required={true}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <input className="secondary-button" type="submit" />
          </form>
        </div>
      </body>
    </>
  );
}

export default Signup;
