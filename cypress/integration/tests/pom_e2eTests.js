///<reference types = 'cypress'/>

import { PomodoroPages } from "../pages/e2eTest_pomodoro";
 const pomodoroPages = new PomodoroPages()

const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testname = `Test${id}`

describe('Create, Start & Finish a task', ()=>{
    beforeEach('Call Url', ()=>{
        cy.pomodoroUrl()
    })

    it('Create a task', ()=>{
        //cy.visit('https://pomofocus.io/')
        cy.wait(10000)
        //cy.get('.sc-esOvli', {timeout:1000}).should('contain.text','Add a Task')
        pomodoroPages.clickAddATask()
        pomodoroPages.inputTaskTitle().type('Test8')
        pomodoroPages.inputEstimatePomodoro().clear()
        pomodoroPages.inputEstimatePomodoro().type('28')
        pomodoroPages.saveTask.click()
    })

    it('Start a task', ()=>{
        cy.reload()
        //pomodoroPages.getATask('Test')
        cy.get('#activity_main-16303166217441').click()
        cy.wait(6000)
        pomodoroPages.stop_startAction().click()
        cy.wait(10000)
        pomodoroPages.stop_startAction().click()
    })
    
    it('Finish a task', ()=>{
        cy.reload()
        //pomodoroPages.getATask('Test')
        cy.get('#activity_main-16303166217441').click()
        pomodoroPages.stop_startAction().click()
        cy.wait(6000)
        //cy.get('.sc-hmXxxW > .sc-bdVaJa').click()
        cy.wait(10000)
        pomodoroPages.finishAction().click()
        cy.wait(6000)
        cy.on('window:confirm', () => true);  
    })

})
