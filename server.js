const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3600;

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  const readStream = fs.createReadStream(filePath);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  readStream.pipe(res);
  return;
})

app.get('/stream', (req, res) => {
  const { message = '' } = req.query
  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });
  let step = 0;
  const time = setInterval(() => {
    const data = { message: message[step++]};
    res.write(`data: ${JSON.stringify(data)}\n\n`);
    if (step > message.length - 1) {
      res.end()
      clearInterval(time)
    }
  }, 500);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});