import { useState } from "react";
import styles from "./login.module.css";
import { useAPIStatus } from "../../hooks/useAPIStatus";
import ProductsHeader from "../../components/productsHeader";

import { Link, useNavigate } from "react-router";
import { signup } from "../../services/auth/signup";

const initals = { username: "", password: "", email: "" };
const Signup = () => {
  const [data, setData] = useState(initals);
  const navigate = useNavigate();
  const { isLoading, isError, setStatus } = useAPIStatus("");

  const onInput = (e) => {
    const { value, id } = e.target;

    setData((curr) => ({ ...curr, [id]: value }));
  };
  const onLogin = async () => {
    setStatus("loading");
    const { username, password, email } = data;

    if (username.length > 3 && email.length && password.length) {
      try {
        const res = await signup(data);
        if (res) {
          navigate("/login", {
            replace: true,
          });
        } else {
          setData(initals);
          setStatus("error");
        }
      } catch (e) {
        setData(initals);
        setStatus("error");
      }
    } else {
      setStatus("error");
    }
  };
  return (
    <div>
      <ProductsHeader title={"Signup"} />
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Register</h2>
        <form className={styles.form}>
          <div className={styles.inptuItem}>
            <input
              value={data.username}
              onChange={onInput}
              id="username"
              placeholder="Enter username here..."
              className={styles.input}
            />{" "}
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
          </div>
          <div className={styles.inptuItem}>
            <input
              value={data.email}
              onChange={onInput}
              id="email"
              type="email"
              placeholder="Enter email here..."
              className={styles.input}
            />{" "}
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
          </div>
          <div className={styles.inptuItem}>
            <input
              type="password"
              onChange={onInput}
              value={data.password}
              id="password"
              placeholder="Enter password here..."
              className={styles.input}
            />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
          </div>
        </form>
        {isError && <p className={styles.error}>Enter correct details</p>}
        <button className={styles.btn} disabled={isLoading} onClick={onLogin}>
          {isLoading ? "Processing..." : "Signup"}
        </button>
        <Link className={styles.link} to="/login">
          Already have account? Login here..
        </Link>
      </div>
    </div>
  );
};

export default Signup;
