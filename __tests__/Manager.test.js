const Manager = require('../lib/Manager');

test('creates a new Manager object', ()=>{
    const manager = new Manager('Dave', 1, 'test@email.com', 10);
    
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.getRole()).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(10);
});

test('gets the managers name', ()=>{
    const manager = new Manager('Dave', 1, 'test@email.com', 10);

    expect(manager.getName()).toHaveProperty('name');
});

test('gets the Managers id number', ()=>{
    const manager = new Manager('Dave', 1, 'test@email.com', 10);

    expect(manager.getId()).toHaveProperty('id');
});

test('gets the managers email', ()=>{
    const manager = new Manager('Dave', 1, 'test@email.com', 10);

    expect(manager.getEmail()).toHaveProperty('email');
});

test('gets the managers role in the company', ()=>{
    const manager = new Manager('Dave', 1, 'test@email.com', 10);

    expect(manager.getRole()).toEqual('Manager');
});