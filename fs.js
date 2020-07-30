const fs = require('fs');

fs.writeFile('message.txt', 'Hello there node', (err) => { // async process
    if(err) throw err;

    console.log('file has been written');
});

console.log('hello');

// reading a file
fs.readFile('./message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});