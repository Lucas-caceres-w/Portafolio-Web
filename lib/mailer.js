import { createTransport } from "nodemailer";

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "lukitas3.lc@gmail.com",
    pass: "cwebfhbhlqolqvxr",
  },
});

export default transporter;
