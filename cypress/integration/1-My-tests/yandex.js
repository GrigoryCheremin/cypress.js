
describe('Тестирование главной яндекса', function () {
   it('Проверка,  что на странице выдачи есть слова "Картинки по запросу котята"', function () {
        cy.visit('https://yandex.ru');
        cy.get('#text').type('котята').type('{enter}');
        cy.contains('Картинки по запросу «котята»');
    })
})
