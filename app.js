console.log('Starting app.js');

const fs = require('fs');
// const _ = require('lodash'); // Need to 'npm install lodash --save' in project folder
// 'npm install nodemon -g', then going forward to run app 'nodemon app.js'
// const yargs = require('yargs');// 'npm install yargs@4.7.1 --save' in project folder (old version to ensure it works)
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.readNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
