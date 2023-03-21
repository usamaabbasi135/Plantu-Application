import styles from "./Reviews.module.css";

const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <img
        className={styles.plantImageBehindNewsletterIcon}
        alt=""
        src="/plant-image-behind-newsletter@2x.png"
      />
      <img
        className={styles.plantImageBehindReviewsIcon}
        alt=""
        src="/plant-image-behind-reviews@2x.png"
      />
      <img
        className={styles.plantImageBehindCheckOutIcon}
        alt=""
        src="/plant-image-behind-check-out@2x.png"
      />
      <div className={styles.newsLetterOuterRectangle} />
      <div className={styles.checkOutTheContainer}>
        <p className={styles.checkOutThe}>Check out the reviews</p>
        <p className={styles.checkOutThe}>about us</p>
      </div>
      <div className={styles.newsletter}>Newsletter</div>
      <div className={styles.seeWhatUserContainer}>
        <p className={styles.checkOutThe}>
          See what user say about us, how they use the app. What are
        </p>
        <p className={styles.checkOutThe}>
          the greatest advantages of the application.What functionality
        </p>
        <p className={styles.checkOutThe}>
          is the most useful? Any feedback is appreciated!
        </p>
      </div>
      <b className={styles.doYouWantContainer}>
        <p className={styles.checkOutThe}>
          Do you want to be up to date with all the information and news? Want
          to be the first
        </p>
        <p className={styles.checkOutThe}>
          when it comes to app new? Do you know about all the new updates,
          upcoming
        </p>
        <p className={styles.checkOutThe}>
          features? Don’t wait and subscribe to our newsletter today!
        </p>
      </b>
      <b className={styles.joinThePlantu}>
        Join the plantu community and subscribe our newsletter.
      </b>
      <div className={styles.iHaveReadContainer}>
        <span className={styles.iHaveReadContainer1}>
          <span>
            <span>I have read the</span>
            <span className={styles.span}>{` `}</span>
          </span>
          <b className={styles.privacyPolicy}>Privacy policy*</b>
          <span>
            <span className={styles.span}>{` `}</span>
            <span>and accept it</span>
          </span>
        </span>
      </div>
      <b className={styles.enterYourEMail}>Enter your e-mail address</b>
      <img
        className={styles.enterEmailRectangleIcon}
        alt=""
        src="/enter-email-rectangle.svg"
      />
      <img
        className={styles.privacyPolicyCheckRectangleIcon}
        alt=""
        src="/rectangle-38.svg"
      />
      <img
        className={styles.subscribeButtonRectangleIcon}
        alt=""
        src="/rectangle-3.svg"
      />
      <b className={styles.subscribe}>Subscribe</b>
      <div className={styles.ayleenLawrenceRectangle} />
      <div className={styles.joshAustinRectangle} />
      <div className={styles.hollyDeanRectangle} />
      <div className={styles.ayleenLawrence}>Ayleen Lawrence</div>
      <div className={styles.joshAustin}>Josh Austin</div>
      <div className={styles.hollyDean}>Holly Dean</div>
      <div className={styles.thisAppSavedContainer}>
        <p className={styles.checkOutThe}>
          This app saved all my home flowers!
        </p>
        <p
          className={styles.checkOutThe}
        >{`it wouldn’t have happened without `}</p>
        <p className={styles.checkOutThe}>your help.</p>
      </div>
      <div className={styles.thanksToThisContainer}>
        <p className={styles.checkOutThe}>
          Thanks to this application, I learned
        </p>
        <p className={styles.checkOutThe}>
          to take care of all the plants I own.
        </p>
        <p className={styles.checkOutThe}>That’s so cool!</p>
      </div>
      <div className={styles.theBestFunctionalityContainer}>
        <p className={styles.checkOutThe}>The best functionality is</p>
        <p className={styles.checkOutThe}>tasks that help keep the</p>
        <p className={styles.checkOutThe}>healthy.</p>
      </div>
      <img className={styles.leftSideArrowIcon} alt="" src="/arrow-1.svg" />
      <img className={styles.reviewsChild} alt="" src="/arrow-2.svg" />
    </div>
  );
};

export default Reviews;
