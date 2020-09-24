import React from "react";
import Login, { LOGIN_TYPE } from "../../components/login/login";
import useQuery from "../../utils/use_query_hook";
import styles from "./auth.module.css"
const AuthPage = () => {
  let query = useQuery();
  return (
    <div>
      <img
        className={styles.img}
        src="https://media-exp1.licdn.com/dms/image/C561BAQHowLZFjFa2zQ/company-background_10000/0?e=2159024400&v=beta&t=rnuIgHIpD32_2SkJTU3NIu7J96m2djr6VMZd4ILy7v8"
      />
      <div className={styles.layer}></div>
      <Login type={query.get("type")==="signup"?LOGIN_TYPE.signup:LOGIN_TYPE.login}/>
    </div>
  );
};

export default AuthPage;
