/// <reference types="cypress"/>

const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('rayane@ebac.com')
        cy.get('#password').type('rayane1234')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
            .should('contain', 'Olá, rayane (não é rayane? Sair)')
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('ray@ebac.com')
        cy.get('#password').type('rayane1234')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error')
            .should('contain', 'Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('rayane@ebac.com')
        cy.get('#password').type('1234')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail rayane@ebac.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
            .should('contain', 'Olá, rayane (não é rayane? Sair)')
    });

    it('Deve fazer login com sucesso - Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
                .should('contain', 'Olá, rayane (não é rayane? Sair)')
        })
    });

    it.only('Deve fazer login com sucesso - Usando comandos', () => {
        cy.login('rayane@ebac.com', 'rayane1234')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
            .should('contain', 'Olá, rayane (não é rayane? Sair)')
    });

})