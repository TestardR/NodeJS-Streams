const fs = require('fs');
const crypto = require('crypto');
const zlib = require('zlib');
const file = process.argv[2];

fs.createReadStream(file)
  .pipe(crypto.createCipher('aes192', 'a_secret'))
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream(file.slice(0, -3)))
  .on('finish', () => console.log('Done'));
