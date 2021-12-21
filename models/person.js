
const mongoose = require('mongoose');

// const PersonSchema = {
//     age: {type: Number},
//     name: {type: String}
// }
 const PersonSchema = mongoose.Schema({
    age: {type: Number ,defaultValue:34},
   firstName: {type: String,defaultValue:'gili'}
 })

// const PersonModel = mongoose.model('person', PersonSchema);
module.exports = mongoose.model('Person', PersonSchema)
// module.exports.Person = PersonModel;
