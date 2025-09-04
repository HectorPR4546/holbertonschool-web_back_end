/*
 * Program that reads a name from stdin and prints it.
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  console.log(`Your name is: ${input}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
