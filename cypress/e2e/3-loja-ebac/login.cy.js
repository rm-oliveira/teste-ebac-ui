/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('rayane@ebac.com')
        cy.get('#password').type('rayane1234')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
            .should('contain', 'Olá, rayane (não é rayane? Sair)')
    })

})