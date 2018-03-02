const fs = require('fs');
const _ = require('lodash'); // Need to 'npm install lodash --save' in project folder
const yargs = require('yargs');// 'npm install yargs@4.7.1 --save' in project folder (old version to ensure it works)
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('That note already exists!');
  } else {
    console.log(`Added the ${note.title} note!`);
    console.log('--');
    console.log(note.body);
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.readNote(argv.title);
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? `${argv.title} removed.` : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
