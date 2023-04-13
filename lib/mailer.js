import handlebars from 'nodemailer-express-handlebars'
import { createTransport } from "nodemailer";
import { resolve } from "path";

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "lukitas3.lc@gmail.com",
    pass: "cwebfhbhlqolqvxr",
  },
});

transporter.use(
  "compile",
  handlebars({
    viewEngine: {
      extName: ".handlebars",
      partialsDir: resolve("./lib/template"),
      defaultLayout: false,
    },
    viewPath: resolve("./lib/template"),
    extName: ".handlebars",
  })
);

export default transporter;
