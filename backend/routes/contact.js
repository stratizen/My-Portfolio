// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your@gmail.com",
      pass: "your-app-password"
    }
  });

  await transporter.sendMail({
    from: email,
    to: "your@gmail.com",
    subject: `Message from ${name}`,
    text: message
  });

  res.json({ success: true });
});

app.listen(3000, () => console.log("Server running!"));