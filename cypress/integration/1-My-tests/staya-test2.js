[
    describe('Тестирование staya', function () { 
        it('вход проверка мои заказы', function () {
            cy.visit('https://staya.dog/');
            cy.get('.header-bottom__right--link').click();
            cy.get('.auth-form > form > [type="email"]').type('antihomirov21@gmail.com');
            cy.get('.auth-form > form > [type="password"]').type('89214301074ta');
            cy.get('.auth-form__submit > .s-button__content').click();
             })
            })
        ]   
    