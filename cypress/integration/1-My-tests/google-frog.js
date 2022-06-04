
describe('Тестирование главной Google', function () {
    it('Проверка, что при поиске лягушки в выдаче есть лягушки', function () {
         cy.visit('https://www.google.ru/');
         cy.get('input:first').should('have.class', 'gLFyf').type('лягушки').type('{enter}');
         cy.contains('лягушки');
     })
 })
 