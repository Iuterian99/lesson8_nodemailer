const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

module.exports = async (receiverMail, receiverName) => {
  let transporter = nodemailer.createTransport({
    port: 465,
    service: "gmail",
    auth: {
      user: "teshayevbaxtiyor@gmail.com",
      pass: "root0215",
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <teshaevbaxtiyor@gmail.com>',
    to: receiverMail,
    subject: "Hello ✔️",
    text: "Hello world?",
    html: `
            <h1>Hello ${receiverName}</h1>

            <p>Welcome to our system, what was your purpose of sending mail to me ??</p>
        `,
  });

  return info.messageId;
};
