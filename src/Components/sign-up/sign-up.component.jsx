import React, { useState } from "react";

import FormInput from "../Form-input/form-input.component";
import CustomButton from "../custom-button/custom-buttom.component";

import { auth } from "../../firebase/firebase.utils";

import { createUserProfileDocument } from "../../services/user.service";

import "./sign-up.style.scss";

const SignUp = () => {

  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmpassword } = user;

    if (password !== confirmpassword) {
      alert("Passwords do not match, please try again.");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setUser({
        displayName: "",
        email: "",
        password: "",
        confirmpassword: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const { displayName, email, password, confirmpassword } = user;
  
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account.</h2>
      <span className="title">Sign up with email and Password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmpassword"
          value={confirmpassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
    