import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  const navigate = useNavigate();

  const onAboutAppTextClick = useCallback(() => {
    navigate("/howworks");
  }, [navigate]);

  return (
    <div className={styles.homeScreen}>
      <img
        className={styles.androidAppBackPlantImageIcon}
        alt=""
        src="/android-app-back-plant-image@2x.png"
      />
      <div className={styles.aboutApp} onClick={onAboutAppTextClick}>
        <p className={styles.imageProcessingAlgorithmsAr}>About App</p>
      </div>
      <div className={styles.homeScreenChild} />
      <div className={styles.howItWorks}>How it works</div>
      <div className={styles.reviews}>Reviews</div>
      <div className={styles.contacts}>Contacts</div>
      <button className={styles.downloadAppRectangle} />
      <button className={styles.getStartedRectangle} />
      <button className={styles.findOutMoreRectangle} />
      <button className={styles.loginSignupRectangle} />
      <div className={styles.downloadApp}>
        <p className={styles.imageProcessingAlgorithmsAr}>Download App</p>
      </div>
      <b className={styles.getStarted}>
        <p className={styles.imageProcessingAlgorithmsAr}>Get started</p>
      </b>
      <b className={styles.findOutMore}>Find out more</b>
      <div className={styles.imageProcessingAlgorithmsContainer}>
        <p className={styles.imageProcessingAlgorithmsAr}>
          <span>{`Image processing algorithms are developed to detect the plant infection or disease by identifying the color feature of the leaf area and `}</span>
          <span className={styles.plantu}>Plantu</span>
          <span className={styles.isSomethingUnbelievable}>
            {" "}
            is something unbelievable that helps you
          </span>
        </p>
        <p className={styles.imageProcessingAlgorithmsAr}>
          “ Detecting Plant Diseases , Protecting Your Harvest ”.
        </p>
      </div>
      <div className={styles.downRect04} />
      <div className={styles.inAdditionToContainer}>
        <p className={styles.imageProcessingAlgorithmsAr}>
          In addition to scanning the plant for
        </p>
        <p className={styles.imageProcessingAlgorithmsAr}>
          its health, the scanner can also
        </p>
        <p className={styles.imageProcessingAlgorithmsAr}>identify the plant</p>
      </div>
      <div className={styles.downRect03} />
      <div className={styles.thanksToUsContainer}>
        <p className={styles.imageProcessingAlgorithmsAr}>
          Thanks to us you will make sure that
        </p>
        <p
          className={styles.imageProcessingAlgorithmsAr}
        >{`your plant grows and develops `}</p>
        <p className={styles.imageProcessingAlgorithmsAr}>properly</p>
      </div>
      <div className={styles.downRect01} />
      <div className={styles.dailyRemindersInContainer}>
        <p
          className={styles.imageProcessingAlgorithmsAr}
        >{`Daily reminders in the form of a `}</p>
        <p className={styles.imageProcessingAlgorithmsAr}>
          to-do list for the best care of your
        </p>
        <p className={styles.imageProcessingAlgorithmsAr}>plants</p>
      </div>
      <img
        className={styles.insideRectDown01Icon}
        alt=""
        src="/inside-rect-down-01.svg"
      />
      <div className={styles.androidAppRectangle} />
      <div className={styles.downRect02} />
      <div className={styles.thanksToUseful}>
        Thanks to useful tips you will know how to care for every indoor plants
        that you have
      </div>
      <img
        className={styles.leafIconDownInsideRect04}
        alt=""
        src="/leaf-icon-down-inside-rect-04.svg"
      />
      <img
        className={styles.leafInsideRectDownIcon}
        alt=""
        src="/leaf-inside-rect-down.svg"
      />
      <div className={styles.dailyPlants}>Daily plants</div>
      <div className={styles.dailyPlants1}>Daily plants</div>
      <div className={styles.myPlants}>My plants</div>
      <div className={styles.hiUsama}>Hi Usama</div>
      <div className={styles.indoorPlants}>Indoor plants</div>
      <div className={styles.plantGrowth}>Plant growth</div>
      <div className={styles.plantRecognition}>Plant recognition</div>
      <img
        className={styles.homeIconDownInsideRect02}
        alt=""
        src="/home-icon-down-inside-rect-02.svg"
      />
      <img
        className={styles.leafInsideHomeIcon}
        alt=""
        src="/leaf-inside-home-icon.svg"
      />
      <img
        className={styles.iconInsideRect03Down}
        alt=""
        src="/icon-inside-rect-03-down.svg"
      />
      <img className={styles.logoVectorIcon} alt="" src="/logo-vector.svg" />
      <img
        className={styles.searchBoxRectangleAndroidIcon}
        alt=""
        src="/search-box-rectangle-android.svg"
      />
      <div className={styles.search}>Search</div>
      <div className={styles.seeAll}>See all</div>
      <div className={styles.seeAll1}>See all</div>
      <img
        className={styles.searchIconInsideAndroidApp}
        alt=""
        src="/search-icon-inside-first-app.svg"
      />
      <div className={styles.rectangleAroundMyImage}>
        <img
          className={styles.circleAroundImageIcon}
          alt=""
          src="/circle-around-image.svg"
        />
        <img
          className={styles.myImageInsideAndroidIcon}
          alt=""
          src="/my-image-inside-android@2x.png"
        />
      </div>
      <div className={styles.lineInsideAndroid01} />
      <div className={styles.androidAppRectangle1} />
      <div className={styles.androidAppRectangle2} />
      <img
        className={styles.heartIconRect1}
        alt=""
        src="/heart-icon-rect-1.svg"
      />
      <div className={styles.androidAppRectangle4} />
      <div className={styles.androidAppRectangle3} />
      <img
        className={styles.heartIconRect3}
        alt=""
        src="/heart-icon-rect-3.svg"
      />
      <img
        className={styles.heartIconRect4}
        alt=""
        src="/heart-icon-rect-4.svg"
      />
      <img
        className={styles.androidAppPlantImage01Icon}
        alt=""
        src="/android-app-plant-image-01@2x.png"
      />
      <img
        className={styles.androidAppPlantImage04Icon}
        alt=""
        src="/android-app-plant-image-01@2x.png"
      />
      <img
        className={styles.androidAppPlantImage03Icon}
        alt=""
        src="/android-app-plant-image-03@2x.png"
      />
      <div className={styles.lineInsideAndroid02} />
      <img
        className={styles.heartIconRect2}
        alt=""
        src="/heart-icon-rect-1.svg"
      />
      <img
        className={styles.androidAppPlantImage02Icon}
        alt=""
        src="/android-app-plant-image-02@2x.png"
      />
      <div className={styles.protectingOurPlantsContainer}>
        <p className={styles.imageProcessingAlgorithmsAr}>Protecting our</p>
        <p className={styles.imageProcessingAlgorithmsAr}>plants has never</p>
        <p className={styles.imageProcessingAlgorithmsAr}>been easier.</p>
      </div>
      <div className={styles.pepperFace}>Pepper face</div>
      <div className={styles.pepperFace1}>Pepper face</div>
      <div className={styles.fittonia}>Fittonia</div>
      <div className={styles.pour500Ml}>Pour 500 ml water</div>
      <div className={styles.pour500Ml1}>Pour 500 ml water</div>
      <div className={styles.lightOnWindow}>Light on window 2 h</div>
      <img
        className={styles.checkSymbolInsideAndroidApIcon}
        alt=""
        src="/check-symbol-inside-android-app.svg"
      />
      <img
        className={styles.fittoniaImageInsideAndroidIcon}
        alt=""
        src="/fittonia-image-inside-android-app@2x.png"
      />
      <img
        className={styles.androidAppUserIconLeft}
        alt=""
        src="/top-android-profile-icon.svg"
      />
      <img
        className={styles.androidAppHomeIcon}
        alt=""
        src="/top-android-home-icon.svg"
      />
      <img
        className={styles.androidAppCenterIcon}
        alt=""
        src="/android-app-center-icon.svg"
      />
      <img
        className={styles.androidAppRightIcon}
        alt=""
        src="/android-app-right-icon.svg"
      />
      <img className={styles.downLoogoIcon} alt="" src="/down-loogo-icon.svg" />
      <div className={styles.checkHowWeContainer}>
        <span>{`Check how we helps in taking care of your plants, Thanks to `}</span>
        <span className={styles.plantu1}>Plantu</span>
        <span>
          {" "}
          application, you will have all the information about their health or
          care program in one place.
        </span>
      </div>
      <div className={styles.weHelpsYou}>
        We helps you to protect your plants
      </div>
      <div className={styles.loginsignUp}>Login/sign-up</div>
      <div className={styles.logoTextPlantu}>Plantu</div>
    </div>
  );
};

export default HomeScreen;
