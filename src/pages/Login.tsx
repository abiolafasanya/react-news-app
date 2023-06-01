import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../assets/styles/form";
import { useLoginMutation } from "../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {  authActions } from "../store/slices/authSlice";
import { authState, reqType } from "../types";
import { Alert, AlertColor } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reqStatus, setRequestStatus] = useState({} as reqType);  
  const [login, {isSuccess, isError}] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const auth = useSelector((state: authState) => state.auth);

  useEffect(() => {
    auth.isAuthenticated && navigate('/')
  }, [auth.isAuthenticated, navigate])

  const handleLogin = async (event: React.SyntheticEvent) => {
    // Handle login logic here
    event.preventDefault();
    try {
      const data = (await login({
        email,
        password,
      }).unwrap());

      dispatch(
        authActions.setAuth({
          isAuthenticated: true,
          token: data.token,
          user: {
            id: data.user?.id as string,
            email: data.user?.email as string,
            name: data.user?.name,
          },
        })
      );
      if(data.success){
        navigate('/', {replace: true});
      }
    } catch (error) {
      if (error instanceof Error) {
        setRequestStatus({color: 'error', message: error.message ?? 'failed'})
        console.log(error.message);
      }
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.heading}>Login</h1>
        {isSuccess ||
          (isError && (
            <Alert color={reqStatus?.color as AlertColor}>
              {reqStatus.message}
            </Alert>
          ))}
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
        <button type="button" className={styles.button} onClick={handleLogin}>
          Login
        </button>
        <p className={styles.link}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
