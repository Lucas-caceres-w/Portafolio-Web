import transporter from "../../../lib/mailer";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    return SubmitEmail(req, res);
  }
}

const SubmitEmail = async (req: any, res: any) => {
  const { asunto, email, mensaje } = req.body;
  try {
    const mailOptions = {
      from: email,
      to: "lukitas3.lc@gmail.com",
      subject: asunto,
      template: "template-mail",
      context: {
        name: email,
        asunto,
        mensaje,
      },
    };

    transporter.sendMail(mailOptions);

    return res.status(200).json("success");
  } catch (err) {
    console.log(err);

    return res.status(403).json("Ocurrio un error");
  }
};
