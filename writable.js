// const { Writable } = require('stream');

// const outStream = new Writable({
//   write(chunk, encoding, callback) {
//     console.log(chunk.toString());
//     callback();
//   }
// });

// process.stdin.pipe(outStream);

// not very useful example as it already exists in one simple line
process.stdin.pipe(process.stdout);
