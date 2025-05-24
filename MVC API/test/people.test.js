const {describe, expect, it} = require('@jest/globals');
const ServicePeople = require("../src/services/people");

describe ("First people test", () => {
    const service = new ServicePeople();
    
    it("Add a name in the list", () => {
        const name = "Josefinas";
        service.Add(name);
        const names = service.GetAll();
        console.log(names)
        expect(names[names.length - 1]).toBe(name);
    })

    it("Edit a name in the list", () => {
        const name = "Astolfo";
        const index = 0
        service.Edit(index, name);
        const names = service.GetAll();
        console.log(names)
        expect(names[index]).toBe(name);
    })

    it("Delete a name in the list", () => {
        const index = 2;
        const nameBeforeTest = service.GetOne(index);
        service.Delete(index);
        const name  = service.GetOne(index);
        expect(name).not.toBe(nameBeforeTest)
    })
})