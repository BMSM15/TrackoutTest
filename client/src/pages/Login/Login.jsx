import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../../_helpers";
import { authActions } from "../../_store";
import { logo, logo_google } from "../../assets/images";

const Login = () => {
  /*const [data, setData] = useState({ email: "", password: "", code: "" });
  const { register, handleSubmit, formState } = useForm();
  const { errors, isSubmitting } = formState;
  const dispatch = useDispatch();
  const authUser = useSelector((x) => x.auth.user);
  const authError = useSelector((x) => x.auth.error);

  useEffect(() => {
    // redirect to home if already logged in
    if (authUser) history.navigate("/");
  }, []);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const onSubmit = async (e) => {
    return dispatch(
      authActions.login({ email: data.email, password: data.password })
    );
  };

  const handleAccessCode = (e) => {
    return dispatch(authActions.loginViaAccessCode({ accessCode: data.code }));
  };*/

  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/google`, "_self");
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <form
          className={styles.form_container}
          //onSubmit={handleSubmit(onSubmit)}
        >
          <img src={logo} alt="Logo" className={styles.logo} />
          <h1>
            Sign into <br></br> your account
          </h1>
          <div className={styles.form_container_labels}>
            <button type="submit" className={styles.google_btn}>
              <img
                src={logo_google}
                alt="Logo"
                className={styles.logo_google}
              />{" "}
              Sign In with Google
            </button>
            <div className={styles.form_container_division}>
              <hr className={styles.line}></hr>
              <h2>OR</h2>
              <hr className={styles.line}></hr>
            </div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              //onChange={handleChange}
              //value={data.email}
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              //onChange={handleChange}
              //value={data.password}
              className={styles.input}
            />
            {
              /*authError && (
              <div className={styles.error_msg}>{authError.message}</div>
            )}
            {isSubmitting ? (
              <button
                type="submit"
                className={styles.signin_btn}
                disabled={true}
              >
                Sign In
              </button>*/
              //) : (
              <button
                type="submit"
                className={styles.signin_btn}
                onClick={googleAuth}
              >
                Sign in
              </button>
              //)
            }
          </div>
        </form>
        <div className={styles.login_info_container}>
          <h1>
            Your Music <br></br> Your Control
          </h1>
          <div className={styles.description}>
            <p>
              Say farewell to convoluted processes,<br></br> data loss and
              uncertain ownership.
            </p>
          </div>
          <div className={styles.description2}>
            <hr className={styles.line2}></hr>
            <div className={styles.description2_group_text}>
              <div className={styles.description2_text}>
                <h1>Transparency</h1>
                <div>Know where all royalties really come from.</div>
              </div>
              <div className={styles.description2_text}>
                <h1>Proof of Ownership</h1>
                <div>Get your D-ID on chain.</div>
              </div>
              <div className={styles.description2_text}>
                <h1>One House Only</h1>
                <div>Manage all your rights in one place.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
