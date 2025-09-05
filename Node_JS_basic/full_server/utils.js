import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n');
    const result = {};

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i].trim();
      if (line) {
        const [firstName, , , field] = line.split(',');
        if (!result[field]) result[field] = [];
        result[field].push(firstName);
      }
    }

    resolve(result);
  });
});

export default readDatabase;
