const fs = require('fs');

function countStudents(path) {
  try {
    const content = fs.readFileSync(path, 'utf8');
    const lines = content
      .split('\n')
      .filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const students = [];
    for (let i = 1; i < lines.length; i += 1) {
      const parts = lines[i].split(',');
      if (parts.length >= 4) {
        const firstname = parts[0].trim();
        const field = parts[3].trim();
        if (firstname && field) {
          students.push({ firstname, field });
        }
      }
    }

    console.log(`Number of students: ${students.length}`);

    const groups = {};
    students.forEach(({ firstname, field }) => {
      if (!groups[field]) groups[field] = [];
      groups[field].push(firstname);
    });

    Object.keys(groups).sort().forEach((field) => {
      const list = groups[field];
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
