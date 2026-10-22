import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('HOLA MUNDO');
});

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT} (Node ${process.version})`);
});

// Apagado limpio al detener el contenedor
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    console.log(`Recibido ${signal}, cerrando servidor...`);
    server.close(() => process.exit(0));
  });
}