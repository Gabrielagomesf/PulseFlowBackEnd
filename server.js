const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const passwordResetRoutes = require('./routes/passwordReset');
const cicloMenstrualRoutes = require('./routes/cicloMenstrualRoutes');
const pressaoRoutes = require('./routes/pressaoRoutes');
const insoniaRoutes = require('./routes/insoniaRoutes');
const hormonalRoutes = require('./routes/hormonalRoutes');

const app = express();

app.use(bodyParser.json());

// Conexão ao MongoDB
const uri = "url-bd";

mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err.message);
    process.exit(1);
});

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/password-reset', passwordResetRoutes);
app.use('/api/ciclo-menstrual', cicloMenstrualRoutes);
app.use('/api/pressao', pressaoRoutes);
app.use('/api/insonia', insoniaRoutes);
app.use('/api/hormonal', hormonalRoutes);

app.get('/', (req, res) => {
    res.send('Servidor está rodando!');
});

app.use((req, res, next) => {
    res.status(404).send('Rota não encontrada');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Ocorreu um erro no servidor');
});

// Inicializa o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
