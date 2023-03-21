import { Form } from "react-router-dom";
import { useEffect } from "react";
import React, { useState } from "react";
import Result from "./Result";
import styles from "./ImageUpload.module.css";


const ImageUpload = () => {
  const [prediction, setPrediction] = useState("");
  const [confidence, setConfidence] = useState("");
  useEffect(() => {
    const handleFileSelect = (event) => {
      const fileName = event.target.files[0].name;
      const fileNameDisplay = document.getElementById('file-name-display');
      fileNameDisplay.textContent = fileName;
    };
  
    const fileInput = document.getElementById('leaf_image');
    fileInput.addEventListener('change', handleFileSelect);

    return () => {
      fileInput.removeEventListener('change', handleFileSelect);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

  
    const formData = new FormData(event.target);
    try {
      const response = await fetch("http://localhost:3000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      setPrediction(data.prediction);
      setConfidence(data.confidence);
    } catch (error) {
      console.error(error);
      setPrediction("Internal Error");
    }
  };

  if (prediction) {
    return <Result prediction={prediction} confidence= {confidence}/>;
  }
  return (
    <div className={styles.imageupload}>
      <img
        className={styles.backgroundImageUploadScreenIcon}
        alt=""
        src="/background-image-upload-screen@2x.png"
      />
      <div className={styles.dragDropRectangle} />
      <b className={styles.uploadImageText}>Upload Image</b>
      <div className={styles.uploadAPicture}>
        Upload a picture of the plant and get immediate results!
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.dragDropContainer}>
          <span>{`Drag & drop or `}</span>
          <label htmlFor="leaf_image" className={styles.browse}>
            browse
          </label>
          <span> your files</span>
          <br></br>
          <input type="file" id="leaf_image" name="leaf_image" required />
          <div id="file-name-display" className="fileNameDisplay"></div>
          <button type="submit">Predict Disease</button>
        </div>
      </form>

      <img
        className={styles.uploadIconVector}
        alt=""
        src="/upload-icon-vector.svg"
      />
    </div>
  );
};

export default ImageUpload;
