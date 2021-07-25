/// <reference types="cypress" />

export class BeneficiariesPage{
    navigate(){
        cy.visit(' https://devmalta.bitso.com/r/user/beneficiaries/add')
        
        // Close country restriction warning
        // cy.get('[data-testid=modal-close]').click()
    }

    addBeneficiary(names,lastName,secondLastName,birthdate,kinship,benefitPercentage){
        cy.get('#first_name')
            .type(names)    
            .should('have.value', names)  

         cy.get('#last_name')
            .type(lastName)    
            .should('have.value', lastName)  
            
        cy.get('#second_last_name')
            .type(secondLastName)    
            .should('have.value', secondLastName)
        
        cy.get('#dob')
            .type(birthdate)    
            .should('have.value', birthdate)

        cy.get('.Form__StyledForm-sc-1f7vh8u-0 > .styles__Wrapper-sc-6qm6qf-6 > .css-m0do4z > .css-16ljna5')
            .select(kinship)    
            .should('have.value', kinship)

            cy.get('#benefit_percentage')
            .select(benefitPercentage)    
            .should('have.value', benefitPercentage)    
        
        //Add Beneficiary
        cy.get('[data-testid=add-beneficiary-button]').not('[disabled]').click()
    }
}