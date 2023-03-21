import styles from "./Result.module.css";

const Result = (props) => {
  const prediction = props.prediction;
  const confidence = props.confidence;
 return (
    <div className={styles.result}>
      <img
        className={styles.backgroundImageResultScreenIcon}
        alt=""
        src="/background-image-result-screen@2x.png"
      />
      <div className={styles.reportRectangle} />
      <div className={styles.detectingPlantDiseases}>
        “ Detecting Plant Diseases , Protecting Your Harvest ”.
      </div>
      <img className={styles.logoVectorIcon} alt="" src="/logo-vector1.svg" />
      <div className={styles.headingContainer}>
        <div className={`${styles.resultContainer} ${styles.diseased}`}>
          <div>Diseased</div>
          <div className={styles.prediction}>{prediction}</div>
        </div>

        <div className={`${styles.confidenceContainer} ${styles.confidence}`}>
          <div>Confidence</div>
          <div className={styles.prediction}>{confidence}</div>
        </div>
      </div>

      <div className={styles.finalReport}>Final Report</div>
    </div>
  );
};

export default Result;
