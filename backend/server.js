const express = require('express');
const app = express();
const sequelize = require('./config/db');

app.get('/', async (req, res) => {
  try {
    // Consulta SQL
    const results = await sequelize.query('SELECT * FROM minha_tabela', { type: sequelize.QueryTypes.SELECT });
    res.send(results);
  } catch (err) {
    console.error('Erro na consulta:', err);
    res.status(500).send('Erro no servidor');
  }
});
// 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
