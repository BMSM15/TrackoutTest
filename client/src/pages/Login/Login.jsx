import styles from "./styles.module.css";
import { logo, logo_google } from "../../assets/images";

const Login = () => {
  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.form_container}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <h1>
            Sign into <br></br> your account
          </h1>
          <div className={styles.form_container_labels}>
            <button className={styles.google_btn} onClick={googleAuth}>
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
            <div className={styles.form_container_login}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className={styles.input}
              />
              <div className={styles.divbutton}>
                {
                  <button type="submit" className={styles.signin_btn}>
                    Sign in
                  </button>
                }
              </div>
            </div>
          </div>
        </div>
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
            <div className={styles.linediv}>
              <hr className={styles.line2}></hr>
            </div>
            <div className={styles.description2_group_text}>
              <div className={styles.description2_text}>
                <p>Transparency</p>
                <div>Know where all royalties really come from.</div>
              </div>
              <div className={styles.description2_text}>
                <p>Proof of Ownership</p>
                <div>Get your D-ID on chain.</div>
              </div>
              <div className={styles.description2_text}>
                <p>One House Only</p>
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
