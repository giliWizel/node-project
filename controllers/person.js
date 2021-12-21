const Person = require('../models/person')

const insertPersons = async (req, res) => {

    try {

        Person.insertMany([
            { age: 12, firstName: 'Lea' },
            { age: 30, firstName: 'Lali' },
            { age: 25, firstName: 'Tamar' },
            { age: 80, firstName: 'Tova' },
            { age: 3, firstName: 'Ayale' },
            { age: 7, firstName: 'Avigdor' },
            { age: 95, firstName: 'David' },
            { age: 55, firstName: 'Dina' },
            { age: 63, firstName: 'Dov' },
            { age: 24, firstName: 'Rachel' },
            { age: 79, firstName: 'Rut' },
            { age: 46, firstName: 'Ester' },
        ])
        res.send('data inserted')
    }
    catch (error) {
        res.status(500).json({ myMessage: error.message })
    }

}


// שליפה של כל האנשים

const getAllPersons = async (req, res) => {
    console.log('hi get Persons')
    try {
        let persons = await Person.find();
        if (persons == null) {
            res.send("no persons")
        }
        return res.json({ status: 200, persons: persons })
    }
    catch (error) {
        res.status(500).json({ myMessage: error.message })
    }
}



//    שליפה ראשונה 
const firstLetter = async (req, res) => {
    console.log('i am firstLetter')
    try {
        var char = 'd';
        let persons = await Person.find({ "firstName": { $regex: '^' + req.query.letter, $options: 'i' } })
        if (persons == null) {
            res.send("no persons begin by this letter")
        }
        return res.json({ status: 200, persons: persons })
    }
    catch (err) {
        res.send('err' + err)
    }

}

// שליפה שניה
const maxMinAge = async (req, res) => {
    try {
        let persons = await Person.find({
            age: {
                $gt: req.query.min,
                $lt: req.query.max
            }
        })
        if (persons == null) {
            res.send("no personsbetween this age")
        }
        return res.json({ status: 200, persons: persons })

    }
    catch (err) {
        res.send(500).json({ err: err.message })


    }
}
// שליפה שלישית
const updateAge = async (req, res) => {
    try {
        const persons = await Person.findOneAndUpdate({ "firstName": req.body.firstName }, {
            "age": req.body.age
        });
        if (persons == null) {
            res.send("no personsbetween this name")

        }
        return res.json({ status: 200, persons: persons })

    }
    catch (err) {
        res.send(500).json({ err: err.message })

    }

}

// שליפה רביעית
const getByAge = async (req, res) => {

    try {
        const person = await Person.find({ "age": req.query.age })
        if (person == null) {
            res.send("no personsbetween this age")
        }
        return res.json({ status: 200, persons: person, sum:person.length })
    }
    catch (err) {
        res.send('err' + err)


    }
}

// שליפה חמישית
const addPerson= async (req, res) => {
    try{
        const person=await Person.findOne({"firstName":req.body.firstName})
        if(person == null)
        { 
            let newPerson = new Person(req.body);
            await newPerson.save();
            res.send("the person update")
        }
        res.send("this person already exists")



    }
    catch (err) {
        res.send('err' + err)

    }
}



module.exports = { getAllPersons, firstLetter, maxMinAge, insertPersons, updateAge,getByAge ,addPerson}