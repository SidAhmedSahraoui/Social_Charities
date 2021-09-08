const mongoose = require('mongoose');

const Schema = mongoose.Schema;
/*
const sous_chapitreSChema = new Schema({
    titre: {type: String, required: true},
    description: {type: String, required: true},
    chapitreId: {type: String , required: true}},
    {timestamps: true}
);
*/
const chapitreSChema = new Schema({
    titre: {type: String, required: true},
    description: {type: String, required: true}/*,
    sousChapitres: [sous_chapitreSChema]*/
},
    {timestamps: true}
);

const Chapitre = mongoose.model('Chapitre', chapitreSChema);

module.exports = Chapitre;