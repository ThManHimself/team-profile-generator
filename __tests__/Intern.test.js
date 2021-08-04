const Intern = require('../lib/Intern');

test('creates a new Intern object', ()=>{
    const intern = new Intern('Dave Smith', 100, 'test@email.com', 'Test School')

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets the Interns name', ()=>{
    const intern = new Intern('Dave Smith', 100, 'test@email.com', 'Test School');

    expect(intern.getName()).toHaveProperty('name');
});

test('gets the interns id number', ()=>{
    const intern = new Intern('Dave Smith', 100, 'test@email.com', 'Test School');

    expect(intern.getId()).toHaveProperty('id');
});

test('gets the interns email', ()=>{
    const intern = new Intern('Dave Smith', 100, 'test@email.com', 'Test School');

    expect(intern.getEmail()).toHaveProperty('email');
});

test('gets the interns role in the company', ()=>{
    const intern = new Intern('Dave Smith', 100, 'test@email.com', 'Test School');
    
    expect(intern.getRole()).toEqual(expect.any(String));
});

test('gets the school the intern attends', ()=>{
    const intern = new Intern('Dave Smith', 100, 'test@email.com', 'Test School');

    expect(intern.school).toEqual(expect.any(String));
});