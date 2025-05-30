const database = require('../../src/database');
const serviceUser = require('../../src/services/user')

describe("Users test", () =>{

    beforeAll(async() =>{
        this.transaction = await database.db.transaction();
    })
    afterAll(() =>{
        this.transaction.rollback()
    })

    it ("should create an user", async () =>{
        //Creating a variable with the same parameters the class has
        const user = {
            email: "testEMAIL@test.com",
            password: "123456"
        }
        const addUser = await serviceUser.create(user.email, user.password, this.transaction);
        console.log(addUser);

        this.id = addUser.id;

        expect(addUser.email).toBe(user.email);
        expect(addUser.password).toBe(user.password);
    })
    
    it ("should update an user", async () =>{
        //Creating a variable with the same parameters the class has
        const user = {
            id: this.id,
            email: "testEMAILaltered@test.com",
            password: "123456"
        }
        const alteredUser = await serviceUser.update(user.id, user.email, user.password, this.transaction);
        console.log(alteredUser);

        expect(alteredUser.email).toBe(user.email);
        expect(alteredUser.password).toBe(user.password);
    })
    
    it ("should delete an user", async () =>{
        //Creating a variable with the same parameters the class has
        const user = {
            id: this.id,
        }
        const response = await serviceUser.delete(user.id, this.transaction);
        console.log(response);

        expect(response).toBe(true);
    })
})