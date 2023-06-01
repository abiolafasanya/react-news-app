import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../assets/styles/form";
import { useRegisterMutation } from "../store/slices/userSlice";
import { Alert, AlertColor } from "@mui/material";
import { reqType } from "../types";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [register, { isSuccess, isError }] = useRegisterMutation();
  const [reqStatus, setRequestStatus] = useState({} as reqType);
  const navigate = useNavigate();

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    // Handle registration logic here
    setRequestStatus({ color: "", message: "" });
    event.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setRequestStatus({
        color: "error",
        message: "Please enter all fields",
      });
    }
    try {
      const response = await register({
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      }).unwrap();
      if (response.success) {
        setConfirmPassword("");
        setPassword("");
        setEmail("");
        setName("");
        setRequestStatus({
          color: "success",
          message: response.message ?? "Successfully registered",
        });
        navigate("/login");
        return
      }
    } catch (error) {
      if (error instanceof Error) {
        setRequestStatus({
          color: "error",
          message: error.message ?? "Registration Failed",
        });
        console.log(error.message || error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleRegister}>
        <h1 className={styles.heading}>Register</h1>
        {isSuccess ||
          (isError && (
            <Alert color={reqStatus?.color as AlertColor}>
              {reqStatus.message}
            </Alert>
          ))}
        <input
          type="text"
          placeholder="Name"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className={styles.input}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Register
        </button>
        <p className={styles.link}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
