
describe('Тестирование главной Google', function () {
    it('Проверка, что при поиске лягушки в выдаче есть лягушки', function () {
         cy.visit('https://www.google.ru/');
         cy.get('.gLFyf').type('лягушки').type('{enter}');
         cy.contains('лягушки');
     })
 })
 