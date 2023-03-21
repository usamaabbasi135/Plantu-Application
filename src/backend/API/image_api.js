/* These lines import the required modules: express for creating the RESTful API, multer for handling file 
uploads, and fs for reading the image file. */

const express = require('express');
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');
const { dirname } = require('path');

/*This line creates an instance of the express application.*/
const app = express();
app.use(cors());
/*This line defines the storage configuration for the uploaded image. The image will be saved in the 
uploads/ directory and its file name will be a combination of the field name and the current timestamp.*/
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

/*This line creates an instance of the multer middleware 
with the storage configuration defined above.*/
const upload = multer({ storage: storage });

/*This line creates a POST endpoint at /predict that will receive the uploaded image. The 
upload.single('leaf_image') middleware is used to extract the image from the request. The req.file 
object will contain the information about the uploaded image. If no image is provided, 
a 400 Bad Request response is sent with an error message. */
app.post('/predict', upload.single('leaf_image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No image provided');
  }

/*This line reads the image file from the file system using the fs.readFileSync method. 
The file path is obtained from the req.file.path property.*/
// Read the image file
const image = fs.readFileSync(req.file.path);

/*This block of code is the dummy machine learning model. In this example, 
it returns a random prediction from a predefined list of classes.*/

/*This line returns the prediction in the 
response as a JSON object with a single property prediction.*/

// Pass the image to the dummy machine learning model
// This is a simple example that returns a random prediction

const predictions = ['apple scab', 'black rot', 'cedar apple rust'];
const prediction = predictions[Math.floor(Math.random() * predictions.length)];
const confidence = Math.random();
//return the prediction in the response
res.send({prediction:prediction, confidence: confidence});
});

/*This block of code starts the API server on the specified port. The default port is 3000. When the 
server starts, a log message will be printed indicating the port it's listening on.*/
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
