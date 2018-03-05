const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of Note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Reads a note', {
    title: titleOptions
  })
  .command('remove', 'Removes a note', {
    title: titleOptions
  })
  .help()
  .argv;
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
