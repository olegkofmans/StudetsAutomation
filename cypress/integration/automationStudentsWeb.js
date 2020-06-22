/// <reference types="Cypress" />


describe('Studets Forms fill',  function() {
    it(' Form one ', function()  {
        cy.visit('http://students-aid.org:9222/');
        cy.get('#register').click()
        cy.get('#firstname').type('Oleg')
        cy.get('#lastname').type('Kofman')
        cy.get('#personalId').type('321331831')
        cy.get('#dateOfBirth').type('1990-09-11')
        cy.get('#phone').type('0547948399')
        cy.get('.male').click()
        cy.get('#agreeTerms').click()
        cy.get('.button-big').click()
        
    });

    it('Form two', function()  {
     cy.get('#isStudentNo').click()
     cy.get('.button-big').click()
    });

    it('Form three', function()  {
    
        cy.get('#residence').type('יבנה')
        cy.get('#hasCarYes').click()
        cy.get(':nth-child(3) > .checkbox-outline > input').check()
        cy.get(':nth-child(5) > :nth-child(2) > .form-group > .my-2 > .checkbox-outline > input').check()
        cy.get(':nth-child(9) > :nth-child(1) > .form-group > .my-2 > .checkbox-outline > input').check()
        cy.get(':nth-child(12) > :nth-child(1) > .form-group > .my-2 > .checkbox-outline > input').check()
        cy.get('.button-big').click()
    });

    it('Form four', function()  {
        cy.get('#email').type('blabla@gmail.com')
        cy.get('#password').type('oleg12341234')
        cy.get('#register-button').click()
        });

});
    

