const mongoose = require('mongoose'),
      dateFormat = require('dateformat')

let date = new Date()

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Le champ "titre" est requis.']
    },
    content: {
        type: String,
        required: [true, 'Le champ "contenu" est requis.']
    },
    author: String,
    authorId: String,
    createDate: {
        type: Date,
        default: new Date()
    },
    formatDate: {
        type: String,
        default: (dateFormat(date, "dd mm yyyy à HH:MM:ss"))
    }
})

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;