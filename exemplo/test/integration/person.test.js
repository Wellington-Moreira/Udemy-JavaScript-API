const servicePerson = require('../../src/services/person');
const database = require('../../src/database');

describe ("Person test", () =>{

    beforeAll(async() =>{
            this.transaction = await database.db.transaction();
        })
        afterAll(() =>{
            this.transaction.rollback()
        })

    it ("Should create a person", async () =>{

        const person = {
            name: "Test Person",
            address: "St. Person's Test n123",
            userId: 2
        }

        const addPerson = await servicePerson.create(person.name, person.address, person.userId, this.transaction)

        this.id = addPerson.id;

        expect(addPerson.name).toBe(person.name);
        expect(addPerson.address).toBe(person.address);
        expect(addPerson.userId).toBe(person.userId);

    })

    it ("Should update a person", async () =>{

            const person = {
            id: this.id,
            name: "Test Person Altered",
            address: "St. Person's Test n124",            
        }

        const alteredPerson = await servicePerson.update(person.id, person.name, person.address, this.transaction)

        expect(alteredPerson.name).toBe(person.name);
        expect(alteredPerson.address).toBe(person.address);

    })

    it ("Should delete a person", async () =>{
    
           
        const person = {
            id: this.id,
        }
    
        const response = await servicePerson.delete(person.id, this.transaction)
        console.log(response)
    
        expect(response).toBe(true);   
    
    })
})