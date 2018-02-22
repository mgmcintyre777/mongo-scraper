// ----------------------------------------------------
// --- A R T I C L E . J S ----------------------------
// ----------------------------------------------------
// Article model for the mongo database
// Daniel Orlovsky

// INCLUDES
const mongoose = require('mongoose');

// ALIAS
const Schema = mongoose.Schema;

// MODEL
let ArticleSchema = new Schema({
    // This will store the title of the article
    title: {
        type: String,
        required: true,
    },
    // This stores the article's URL
    url: {
        type: String,
        required: true,
    },
    // This stores user notes about the article
    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Note'
        },
    ]
});

// CREATE THE ARTICLE OBJECT
const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;