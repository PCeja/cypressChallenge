/// <reference types="cypress" /> 

export class RegisterPage{
    
    navigate(){
        cy.visit('https://devmalta.bitso.com/register')
        
        // Close country restriction warning as I'm in US
        cy.get('[data-testid=modal-close]').click()
    }

    createAccount(country,email,password){
        cy.get('.styles__Form-sc-1cll17m-4 > .styles__Wrapper-sc-6qm6qf-6 > .css-m0do4z > .css-16ljna5')
            .type(country + '{enter}')            

        cy.get('#email')
            .type(email)    
            .should('have.value', email)  

         cy.get('#password')
            .type(password)    
            .should('have.value', password)  
            
        cy.get('#password_confirmation')
            .type(password)    
            .should('have.value', password)   

        //Force is used due to error: 
            // Timed out retrying after 4050ms: cy.check() failed because this element is not visible:
        cy.get('#accept_terms').not('[disabled]')
        .check({force: true}).should('be.checked')   
        
        cy.get('#accept_privacy').not('[disabled]')
        .check({force: true}).should('be.checked') 

        cy.get('#accept_nvio_terms').not('[disabled]')
        .check({force: true}).should('be.checked') 

        cy.get('.Container__StyledContainer-sc-1nmtyg4-0 > .styles__StyledButton-sc-1mfj3x4-0').click()
        
        //Remove for new accounts
        // cy.contains('This email is already in use')
    }

}