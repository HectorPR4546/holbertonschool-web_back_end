import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const filePath = process.argv[2];

    readDatabase(filePath)
      .then((data) => {
        let response = 'This is the list of our students';

        Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
          .forEach((field) => {
            const list = data[field].join(', ');
            response += `\nNumber of students in ${field}: ${data[field].length}. List: ${list}`;
          });

        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const filePath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(filePath)
      .then((data) => {
        const list = data[major];
        res.status(200).send(`List: ${list.join(', ')}`);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }
}

export default StudentsController;
