const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates a new employee object', ()=>{
    const employee = new Employee('Dave Smith', 1, 'test@email.com');
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets the employees name', ()=>{
    const employee = new Employee('Dave Smith', 1, 'test@email.com');
    
    expect(employee.getName()).toHaveProperty('name');
});

test('gets the employees id number', ()=>{
    const employee = new Employee('Dave Smith', 1, 'test@email.com');
    
    expect(employee.getId()).toHaveProperty('id');
});

test('gets the employees email', ()=>{
    const employee = new Employee('Dave Smith', 1, 'test@email.com');
    
    expect(employee.getEmail()).toHaveProperty('email');
});

test('gets the employees role in the company', ()=>{
    const employee = new Employee('Dave Smith', 1, 'test@email.com');

    expect(employee.getRole()).toEqual(expect.any(String));
});