// app.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde Docker!');
});

app.listen(PORT, () => {
  console.log(`Aplicación en ejecución en http://localhost:${PORT}`);
});
