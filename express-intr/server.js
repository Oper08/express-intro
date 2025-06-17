let express = require('express');
let app = express();
let PORT = 3000;

app.get('/', (req, res) => {
  res.send('Қош келдіңіз');
});

app.get('/about', (req, res) => {
  res.send('Бұл сервер туралы қысқаша ақпарат');
});

app.get('/api/info', (req, res) => {
  res.json({
    developer: "ANUAR",
    subject: "Express"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
