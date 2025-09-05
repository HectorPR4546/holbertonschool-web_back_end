const express = require('express');
const fs = require('fs');

const DB_PATH = process.argv[2];

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const lines = data
        .split('\n')
        .filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        resolve({ total: 0, groups: {} });
        return;
      }
      const groups = {};
      let total = 0;
      for (let i = 1; i < lines.length; i += 1) {
        const parts = lines[i].split(',');
        if (parts.length >= 4) {
          const firstname = parts[0].trim();
          const field = parts[3].trim();
          if (firstname && field) {
            total += 1;
            if (!groups[field]) groups[field] = [];
            groups[field].push(firstname);
          }
        }
      }
      resolve({ total, groups });
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const header = 'This is the list of our students';
  readDatabase(DB_PATH)
    .then(({ total, groups }) => {
      const lines = [header, `Number of students: ${total}`];
      Object.keys(groups).sort().forEach((field) => {
        const list = groups[field];
        lines.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      });
      res.type('text/plain').send(lines.join('\n'));
    })
    .catch(() => {
      res.type('text/plain').send(`${header}\nCannot load the database`);
    });
});

app.listen(1245);

module.exports = app;
