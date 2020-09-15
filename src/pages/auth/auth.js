import React from "react";
import { useParams } from "react-router-dom";
import Login, { LOGIN_TYPE } from "../../components/login/login";
import styles from "./auth.module.css"
const AuthPage = () => {
  let { type } = useParams();
  return (
    <div>
      <img
        className={styles.img}
        src="https://media-exp1.licdn.com/dms/image/C561BAQHowLZFjFa2zQ/company-background_10000/0?e=2159024400&v=beta&t=rnuIgHIpD32_2SkJTU3NIu7J96m2djr6VMZd4ILy7v8"
      />
      <div className={styles.layer}></div>
      <Login type={type==="login"?LOGIN_TYPE.login:LOGIN_TYPE.signup}/>
    </div>
  );
};

export default AuthPage;
