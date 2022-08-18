
describe('Тестирование авторизации в Staya', function () {
   it('Проверка авторизации верные данные', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('Ввести зарегистрированный e-mail');
        cy.get('.auth-form > form > [type="password"]').type('Ввести пароль, соответствующий зарегистрированному e-mail');
        cy.get('.auth-form__submit').click();
    })

   it('Проверка выхода', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('button.profile__nav-link').click();

    })

   it('Проверка авторизации неверный пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('Ввести зарегистрированный e-mail');
        cy.get('.auth-form > form > [type="password"]').type('Ввести пароль, не соответствующий зарегистрированному e-mail');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    })
})
