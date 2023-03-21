import styles from "./SignupLogin.module.css";

const SignupLogin = () => {
  return (
    <div className={styles.signuplogin}>
      <img
        className={styles.backgroundImageSignupPageIcon}
        alt=""
        src="/background-image-signup-page@2x.png"
      />
      <div className={styles.signUpFor}>Sign up for an account</div>
      <img
        className={styles.yourEmailRectangleIcon}
        alt=""
        src="/rectangle-39.svg"
      />
      <button className={styles.firstNameRectangle} />
      <button className={styles.lastNameRectangle} />
      <input className={styles.passwordRectangle} type="text" />
      <img
        className={styles.signUpRectangleIcon}
        alt=""
        src="/sign-up-rectangle.svg"
      />
      <div className={styles.firstName}>First Name</div>
      <div className={styles.yourEmail}>Your Email</div>
      <div className={styles.password}>Password</div>
      <div className={styles.lastName}>Last Name</div>
      <b className={styles.signUp}>Sign Up</b>
      <div className={styles.byCreatingAnContainer}>
        <span className={styles.byCreatingAnContainer1}>
          <span>{`By creating an account, you agreeing to our `}</span>
          <b className={styles.privacyPolicy}>Privacy Policy</b>
          <span className={styles.span}>.</span>
        </span>
      </div>
      <div className={styles.alreadyHaveAnContainer}>
        <span className={styles.byCreatingAnContainer1}>
          <span>Already have an account?</span>
          <b className={styles.privacyPolicy}>
            <span className={styles.span}>{` `}</span>
            <span>Sign In</span>
          </b>
        </span>
      </div>
    </div>
  );
};

export default SignupLogin;
