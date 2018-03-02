const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return notes = JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }

};

var getAll = () => {
  console.log('Getting all notes');
};

var readNote = (title) => {
  var notes = fetchNotes();
  var note = notes.filter((note) => note.title === title);
  return note[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var notesNew = notes.filter((note) => note.title !== title);
  saveNotes(notesNew);

  return notes.length !== notesNew.length;
};

var logNote = (note) => {
  console.log('--');
  console.log(`${note.title}:`);
  console.log(note.body);
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote,
  logNote
};
