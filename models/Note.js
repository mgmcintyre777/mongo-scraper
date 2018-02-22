// ----------------------------------------------------
// --- N O T E . J S ----------------------------------
// ----------------------------------------------------
// Note model for the mongo database
// Dan Orlovsky

// INCLUDES
const mongoose = require('mongoose');

// ALIAS
const Schema = mongoose.Schema;

let NoteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;