const Engineer = require('../lib/Engineer');

test('create a new engineer object', ()=>{
    const engineer = new Engineer('Dave Smith', 10, 'test@email.com', 'https://github.com/username');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets the engineers name', ()=>{
    const engineer = new Engineer('Dave Smith', 10, 'test@email.com', 'https://github.com/username')

    expect(engineer.getName()).toHaveProperty('name');
});

test('gets the engineers id number', ()=>{
    const engineer = new Engineer('Dave Smith', 10, 'test@email.com', 'https://github.com/username')

    expect(engineer.getId()).toHaveProperty('id');
});

test('gets the engineers email', ()=>{
    const engineer = new Engineer('Dave Smith', 10, 'test@email.com', 'https://github.com/username')

    expect(engineer.getEmail()).toHaveProperty('email');
});

test('gets the engineers role in the company', ()=>{
    const engineer = new Engineer('Dave Smith', 10, 'test@email.com', 'https://github.com/username')

    expect(engineer.getRole()).toEqual('Engineer');
});

test('gets the engineers github username', ()=>{
    const engineer = new Engineer('Dave Smith', 10, 'test@email.com', 'https://github.com/username')

    expect(engineer.github).toEqual(expect.any(String));
});