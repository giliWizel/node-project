
const mongoose = require('mongoose');

 const PersonSchema = mongoose.Schema({
    age: {type: Number ,defaultValue:34},
   firstName: {type: String,defaultValue:'gili'}
 })

module.exports = mongoose.model('Person', PersonSchema)
