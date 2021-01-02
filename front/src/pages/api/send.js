const sgMail = require('@sendgrid/mail');

export default async function Send(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, message, name } = req.body;

  const content = {
    to: 'augustocmallmann@gmail.com',
    from: email,
    subject: `Nova mensagem de - ${email}`,
    text: message,
    html: `
    <span><strong>Nome:</strong></span>
    <p>${name}</p>
    <span><strong>Mensagem:</strong></span>
    <p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Mensagem enviada com sucesso');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Ocorreu um erro, tente novamente mais tarde.');
  }
}
