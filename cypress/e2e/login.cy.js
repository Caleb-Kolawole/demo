describe('Login Component', () => {
  it('Logs in and checks user details', () => {
    cy.visit('http://localhost:3000/login'); 
    cy.get('#email').type('kolawolebolarinwa771@gmail.com');
    cy.get('#password').type('taskflow');

    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (msg) => {
      expect(msg).to.equal('Check Console, Caleb');
    });
  });
});
