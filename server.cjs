const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const twilio = require('twilio');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Configure o Twilio
const accountSid = 'seu sid';
const authToken = 'seu token';
const client = twilio(accountSid, authToken);

app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor!');
});

app.get('/success-page', (req, res) => {
  res.send('Mensagem Enviada com sucesso!');
});

app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Nome:', name);
  console.log('Email:', email);
  console.log('Mensagem:', message);

  // Send the message SMS
  client.messages
    .create({
      body: `Nova mensagem do formulário:\n\nNome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
      from: 'seu telefone',
      to: 'telefone que recebe'
    })
    .then(message => console.log('Mensagem enviada:', message.sid))
    .catch(error => console.error('Erro ao enviar a mensagem:', error));

  res.send('Dados recebidos com sucesso!');
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});