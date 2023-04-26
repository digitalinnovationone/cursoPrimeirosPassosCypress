/// <reference types="Cypress" />
describe('Aprendendo conceitos Cypress', () => {

  it('1 - Usuário faz login com username e senha inválidos', () => {
    cy.visit('/');
    cy.get('div.shop-menu').contains('Login').click();

    cy.contains('Login to your account');

    cy.get('[data-qa="login-email"]').type('teste@email.com');
    //cy.get('input[name="email"]').click() // dá errado
    //cy.get('.login-form').find('input[name="email"]'); // dá certo

    cy.get('[data-qa="login-password"]').type('123456');

    cy.get('[data-qa="login-button"]').contains('Login').click();

    cy.contains('Your email or password is incorrect!');
  })
    it('2 - Acessando home da página Automation Exercise', () => {
    cy.visit('/');
    cy.contains('Automation');
    cy.get('h1'); // acessando tag 
    cy.get('h1').contains('Automation'); 

    cy.get('.features_items');// verificar se a seção 'features items' existe na página inicial a partir da classe
    //or
    cy.get('div.features_items');//tag + classe

  });

  it('3 - Verificando itens para compra', () => {
    cy.visit('/');
    cy.get('.features_items'); // acessando prieiro elemento filho do item
    cy.get('.features_items').children().first();
    cy.get('.features_items').children().last(); // acessando filhos de um elemento
    cy.get('.features_items').children().eq(2); // acessando elemento de array

    cy.get('[data-product-id="2"]') // pelo data-id

  })

  it('4 - Colocar item no carrinho e continuar comprando', () => {
    cy.visit('/');
    cy.get('[data-product-id="2"]').contains('Add to cart').click();
 
    cy.get('#cartModal').contains('Added');

    cy.get('button.close-modal', {timeout: 5000}).click();

  });

  it.only('5 - Acessando página de produtos - usando intercept', () => {
    cy.visit('/');
    cy.intercept('GET','products' );
    cy.get('.navbar-nav').contains('Products').click();
    //cy.get('a[href^="/products"]').contains('Products').click();
  });

  it('6 - GET Produtos - usando request', () => {
   
    cy.request('GET', 'api/productsList');

  });
});


