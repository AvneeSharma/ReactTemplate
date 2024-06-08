const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 5000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', upload.single('resume'), async (req, res) => {
  const { firstName, lastName, email, phone, address, address2, city, state, zip } = req.body;
  const resume = req.file;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.TO,
    subject: 'New Application Form Submission',
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone: ${phone}
      Address: ${address}
      Address 2: ${address2}
      City: ${city}
      State: ${state}
      Zip: ${zip}
    `,
    attachments: [
      {
        filename: resume.originalname,
        content: resume.buffer,
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true }); 
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false }); // Send plain text response
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
