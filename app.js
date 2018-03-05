const fs = require('fs');
const _ = require('lodash'); // Need to 'npm install lodash --save' in project folder
const yargs = require('yargs');// 'npm install yargs@4.7.1 --save' in project folder (old version to ensure it works)
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Added note');
    notes.logNote(note);
  } else {
    console.log('That note already exists!');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.readNote(argv.title);
  if (note) {
    notes.logNote(note);
  } else {
    console.log(`That note doesn't exists!`);
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? `${argv.title} removed.` : 'Note not found';
  console.log(message);
} else if (command === 'Spinal Tap') {
  console.log('This one goes to eleven');
} else {
  console.log('Command not recognized');
}
