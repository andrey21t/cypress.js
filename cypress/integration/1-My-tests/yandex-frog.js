
describe('Тестирование главной Yandex', function () {
    it('Проверка, что при поиске лягушки в выдаче есть лягушки', function () {
         cy.visit('https://www.yandex.ru/');
         cy.get('#text').type('лягушки').type('{enter}');
         cy.contains('лягушки');
     })
 })
 