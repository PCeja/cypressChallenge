/// <reference types="cypress" />

export class LoginPage{

    navigate(){
        cy.visit('https://devmalta.bitso.com/login')
        
    }

    login(email,password){
        
        cy.get('#client_id')
            .type(email)    
            .should('have.value', email)  

         cy.get('#password')
            .type(password)    
            .should('have.value', password)   
        
        //Log in
        cy.get('form > :nth-child(3) > .styles__StyledButton-sc-1mfj3x4-0').not('[disabled]').click()
    }
}