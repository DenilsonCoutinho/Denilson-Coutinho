"use server"
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "contact.denilsoncoutinho@gmail.com",
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export async function SendEmail(name: string, email: string, message: string) {
  const info = await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: "contact.denilsoncoutinho@gmail.com", // seu próprio email
    subject: "Nova mensagem do formulário de contato",
    text: `Mensagem de: ${name} <${email}>\n\n${message}`,
    html: `
      <h2>Nova mensagem do site</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong><br/>${message}</p>
    `,
  });

  console.log("Mensagem enviada:", info.messageId);
}
