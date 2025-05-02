import { useState } from "react";
import styles from "./login.module.css";
import { useAPIStatus } from "../../hooks/useAPIStatus";
import ProductsHeader from "../../components/productsHeader";
import { login } from "../../services/auth/login";
import { useNavigate } from "react-router";

const initals = { username: "", password: "" };
const Login = () => {
  const [data, setData] = useState(initals);
  const navigate = useNavigate();
  const { isLoading, isError, setStatus } = useAPIStatus("");

  const onInput = (e) => {
    const { value, id } = e.target;

    setData((curr) => ({ ...curr, [id]: value }));
  };
  const onLogin = async () => {
    setStatus("loading");
    const { username, password } = data;

    if (username.length > 3 && password.length) {
      try {
        const res = await login(data);
        if (res) {
          navigate("/", {
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
      <ProductsHeader title={"Login"} />
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Login</h2>
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
        {isError && <p className={styles.error}>Invalid credentials</p>}
        <button className={styles.btn} disabled={isLoading} onClick={onLogin}>
          {isLoading ? "Processing..." : "Signin"}
        </button>
      </div>
    </div>
  );
};

export default Login;
