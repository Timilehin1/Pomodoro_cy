export class PomodoroPages{
    addATask='.sc-esOvli'
    inputActivityTitle='#input_activity_title'
    estimatePomodoro='#input_est_pomodoro'
    saveTaskButton='.sc-kIPQKe'
    stop_startButton='.sc-hmXxxW > .sc-bdVaJa'
    finishButton='.sc-kLIISr'


clickAddATask(){
    cy.get(this.addATask).click()
}
inputTaskTitle(taskTitle){
    cy.get(this.inputActivityTitle).type(taskTitle)
}        
clearPomodoroPlaceholder(){
    cy.get(this.estimatePomodoro).clear()
}
inputEstimatePomodoro(time){
    cy.get(this.estimatePomodoro).type(time)
}
saveTask(){
    cy.get(this.saveTaskButton).click()
}
stop_startAction(){
    cy.get(this.stop_startButton).click()
}
finishAction(){
    cy.get(this.finishButton).click()
}
getATask(taskTitle){
    cy.get('tbody tr').each(($el) => {
        cy.wrap($el).within(() => {
          cy.get('td').eq(1).should('contain.text', taskTitle)
        })
      })
}  
}

