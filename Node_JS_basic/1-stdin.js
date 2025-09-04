/*
 * Program that reads a name from stdin and prints it.
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

let responded = false;

process.stdin.on('data', (data) => {
  if (responded) return;
  const str = data.toString();
  const input = str.split(/\r?\n/)[0];
  console.log(`Your name is: ${input}`);
  responded = true;
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
