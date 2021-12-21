const router=require("express").Router();
const person =require("../controllers/person")
router.get('/getAllPerson',person.getAllPersons)
router.get('/insertPersons',person.insertPersons)
router.get('/firstLetter',person.firstLetter)
router.get('/maxMinAge',person.maxMinAge)
router.get('/getByAge',person.getByAge)
router.post('/updateAge',person.updateAge)
router.post('/addPerson',person.addPerson)
module.exports=router;