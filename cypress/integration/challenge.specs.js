/// <reference types="cypress" />

import { BeneficiariesPage } from "./page-objects/beneficiaries";
import { LoginPage } from "./page-objects/login_page";
import { RegisterPage } from "./page-objects/register_page"
import { USER_AR, USER_MX } from "./support/users"
import { BENEFICIARY_LCEJA} from "./support/beneficiaries"

describe('My Bitso Challenge - Perla Ceja', function () {
    const registerPage = new RegisterPage()
    const loginPage = new LoginPage()
    const beneficiariesPage = new BeneficiariesPage()

    beforeEach(() => {
        cy.viewport(1200, 1740)
    })

    context('There is no Mexican account created', function () {
        it('should navigate to register page', function () {
            registerPage.navigate()
        })

        it('should create an account', function () {
            registerPage.createAccount(USER_MX.COUNTRY, USER_MX.EMAIL, USER_MX.PASSWORD)
        })
    })


    context('When account is from Mexico', function () {

        it('should navigate to login', function () {
            loginPage.navigate()
        })

        it('should login', function () {
            loginPage.login(USER_MX.EMAIL, USER_MX.PASSWORD)
        })

        // This below commented step was created because
        // the site was showing this element
        // in case it gets re-added 
        // the code has to be uncommented
        // because its on top of the wallet page

        // it('should close "Tell us a bit about yourself"', function () {
        //     cy.get('[data-testid=modal-close]').click()
        // })

        it('should verify the "Oops!" warning message', function () {
            //'Deposit'  
            cy.get(':nth-child(1) > .styles__IconContainer-sc-23vrf8-1').click()

            //'SPEI'  
            cy.get(':nth-child(1) > [data-testid=picker-item] > .fmDMXO').click()

            cy.contains('Oops! Something went wrong...')

            cy.contains('This transaction exceeds your limit. Increase your account limit to continue.')

            cy.contains('Increase my limit')
        })

        it('should close modal simulating esc key', function () {
            cy.get('.kCtQwo').type('{esc}')
        })

        it('should navigate to add beneficiaries', function () {
            beneficiariesPage.navigate()
        })

        // // This below commented step was created because
        // // the site was asking to re-log
        // it('should re-login', function () {
        //     loginPage.login(USER_MX.EMAIL, USER_MX.PASSWORD)
        // })

        it('should add a beneficiary', function () {
            beneficiariesPage.addBeneficiary(
                BENEFICIARY_LCEJA.NAMES,
                BENEFICIARY_LCEJA.LAST_NAME,
                BENEFICIARY_LCEJA.SECOND_LAST_NAME,
                BENEFICIARY_LCEJA.BIRTHDATE,
                BENEFICIARY_LCEJA.KINSHIP,
                BENEFICIARY_LCEJA.BENEFIT_PERCENTAGE)
        })

    })

    context('There is no Argentinian account created', function () {        
        it('should go to register page', function () {
            registerPage.navigate()
        })

        it('should create an account', function () {
            registerPage.createAccount(USER_AR.COUNTRY, USER_AR.EMAIL, USER_AR.PASSWORD)
        })
    })

    context('When account is from Argentina', function () {

        it('should navigate to login', function () {
            loginPage.navigate()
        })

        it('should login', function () {
            loginPage.login(USER_AR.EMAIL, USER_AR.PASSWORD)
        })

        // This below commented step was created because
        // the site was showing this element
        // in case it gets re-added 
        // the code has to be uncommented
        // because its on top of the wallet page

        // it('should close "Tell us a bit about yourself"', function () {
        //     cy.get('[data-testid=modal-close]').click()
        // })

        it('should verify the "Oops!" warning message', function () {
            //'Deposit'  
            cy.get(':nth-child(1) > .styles__IconContainer-sc-23vrf8-1').click()

            //'SPEI'  
            cy.get(':nth-child(1) > [data-testid=picker-item] > .fmDMXO').click()

            cy.contains('Oops! Something went wrong...')

            cy.contains('This transaction exceeds your limit. Increase your account limit to continue.')

            cy.contains('Increase my limit')
        })

        it('should close modal simulating esc key', function () {
            cy.get('.kCtQwo').type('{esc}')
        })

        it('should navigate to add beneficiaries', function () {
            beneficiariesPage.navigate()
        })

        // // This below commented step was created because
        // // the site was asking to re-log
        // it('should re-login', function () {
        //     loginPage.login(USER_MX.EMAIL, USER_MX.PASSWORD)
        // })

        it('should add a beneficiary', function () {
            beneficiariesPage.addBeneficiary(
                BENEFICIARY_LCEJA.NAMES,
                BENEFICIARY_LCEJA.LAST_NAME,
                BENEFICIARY_LCEJA.SECOND_LAST_NAME,
                BENEFICIARY_LCEJA.BIRTHDATE,
                BENEFICIARY_LCEJA.KINSHIP,
                BENEFICIARY_LCEJA.BENEFIT_PERCENTAGE)
        })

    })

})
