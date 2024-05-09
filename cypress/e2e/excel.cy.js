import 'cypress-file-upload';
/* eslint-disable no-undef */
describe('Excel Component', () => {

  it('successfully uploads an Excel file and converts it to JSON', () => {
    // Visit the page containing the Excel component
    cy.visit('http://localhost:3000/excel')

    // Select an Excel file from the file input
    cy.get('input[type="file"]').attachFile('example.xlsx'); // Ensure you have an example.xlsx file in your fixtures folder

    // Click the button to convert the file to JSON
    cy.get('button').click();

    // Wait for the JSON data to be processed and displayed
    cy.get('pre').should('contain', '{'); // Adjust this assertion based on the expected output

    
  });
});
