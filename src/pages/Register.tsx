import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../assets/styles/form";
import { useRegisterMutation } from "../store/slices/userSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [register] = useRegisterMutation();
  const navigate = useNavigate();
  
  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    // Handle registration logic here
    event.preventDefault();
    try {
      const data = await register({
        name,
        email,
        password,
        password_confirmation: Confirmpassword,
      }).unwrap();
      if(data.success) {
        toast.success('Successfully registered')
        navigate('/')
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message || error);
        toast.error('Error registering')
      }
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleRegister}>
        <h1 className={styles.heading}>Register</h1>
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
          value={Confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Register
        </button>
        <p className={styles.link}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
