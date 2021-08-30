/// <reference types ='Cypress' />

const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testname = `Test${id}`
describe('All Tests', ()=>{
  
    beforeEach('Visit Url',()=>{
        //pomoFocusPage.navigateToUrl()
        cy.visit('https://pomofocus.io/')
        Cypress.Cookies.preserveOnce('IDE','AHWqTUkYPoL-abhaZYn5aJ-32ak06CMwXsMIsS-cVle9ugCogr5Q8ckTkn_JWGbT')
    })

    it('Create a task', ()=>{
        //cy.visit('https://pomofocus.io/')
        cy.wait(10000)
        //cy.get('.sc-esOvli', {timeout:1000}).should('contain.text','Add a Task')
        cy.get('.sc-esOvli').click()
        cy.get('#input_activity_title').type(testname)
        cy.get('#input_est_pomodoro').clear()
        cy.get('#input_est_pomodoro').type('28')
        cy.get('.sc-kIPQKe').click()
    })

    it('Start a task', ()=>{
        cy.reload()
        /*cy.get('tbody tr').each(($el) => {
            cy.wrap($el).within(() => {
              cy.get('td').eq(1).should('contain.text', 'Test') // contains() doesn't work
            })
          })*/
        cy.get('#activity_main-16303166217441').click()
        cy.wait(6000)
        cy.get('.sc-hmXxxW > .sc-bdVaJa').click()
        cy.wait(10000)
        cy.get('.sc-hmXxxW > .sc-bdVaJa').click() 
        
    })
    
    it('Finish a task', ()=>{
        cy.reload()
        cy.get('#activity_main-16303166217441').click()
        cy.get('.sc-hmXxxW > .sc-bdVaJa').click()
        cy.wait(6000)
        //cy.get('.sc-hmXxxW > .sc-bdVaJa').click()
        cy.wait(10000)
        cy.get('.sc-kLIISr').click()
        cy.wait(6000)
        cy.on('window:confirm', () => true);  
    })

    it('Start a break', ()=>{
        cy.reload()
        cy.get('.sc-kUaPvJ').click()
        cy.get('.sc-hmXxxW > .sc-bdVaJa').click()
        cy.wait(10000)
        cy.get('.sc-hmXxxW > .sc-bdVaJa').click()
    })

    it('Finish a break', ()=>{
        cy.reload()
        cy.get('.sc-kUaPvJ').click()
        cy.get('.sc-hmXxxW > .sc-bdVaJa').click()
        cy.wait(6000)
        //cy.get('.sc-hmXxxW > .sc-bdVaJa').click()
        cy.wait(10000)
        cy.get('.sc-kLIISr').click()
        cy.wait(6000)
        cy.on('window:confirm', () => true);   
    })

    it('View the report', ()=>{
        cy.reload()
        cy.get('.sc-kpOJdX > :nth-child(1) > .sc-kEYyzF').click
        cy.wait(10000)
        cy.get('.skeIG').contains('Summary')
    })
})