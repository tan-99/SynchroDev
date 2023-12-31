import React from "react";

function Signup() {
  const isSignUp = true;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="eMail"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && (
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            placeholder="confirmPassword"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <input className="secondary-button" type="submit" />
      </form>
    </div>
  );
}

export default Signup;
