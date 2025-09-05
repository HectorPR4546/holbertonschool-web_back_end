import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const dbPath = process.argv[2];
    const header = 'This is the list of our students';
    try {
      const groups = await readDatabase(dbPath);
      const fields = Object
        .keys(groups)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      const total = fields.reduce((acc, f) => acc + (groups[f] ? groups[f].length : 0), 0);
      const lines = [header, `Number of students: ${total}`];
      fields.forEach((field) => {
        const list = groups[field];
        lines.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      });
      res.status(200).type('text/plain').send(lines.join('\n'));
    } catch (err) {
      res.status(500).type('text/plain').send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).type('text/plain').send('Major parameter must be CS or SWE');
      return;
    }
    const dbPath = process.argv[2];
    try {
      const groups = await readDatabase(dbPath);
      const list = groups[major] || [];
      res.status(200).type('text/plain').send(`List: ${list.join(', ')}`);
    } catch (err) {
      res.status(500).type('text/plain').send('Cannot load the database');
    }
  }
}

export default StudentsController;
