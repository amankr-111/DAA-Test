import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendMail = async (sendToMail, mailSub, content, htmlContent) => {
    console.log(`mailer called`)
  try {
    let transpoter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });

    let mailOptions = {
      from: "ashutosh615singh@gmail.com",
      to: sendToMail,
      subject: mailSub,
      text: content,
      html: htmlContent,
    };

    const info = await transpoter.sendMail(mailOptions);
   console.log(info);
    return info;
  } catch (error) {
    console.log(error);
    return error;
  }
};
