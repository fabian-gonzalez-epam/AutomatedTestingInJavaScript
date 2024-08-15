describe('template spec', () => {
  
  it('displays dafault information of the page', () => {
    cy.visit('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard')
    cy.get('h1.clinic-name').should('have.text', ' APPOINTMENT PLANNER')
    cy.get('div.grid-container').should('be.visible')
  })

  it('change schedule', () => {
    cy.visit('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard')
    const newHour = '09:30 AM'
    
    cy.get('span.link-text').click()
    cy.contains('Day').click()
    cy.get('div.e-appointment').first().click({force: true})
    cy.contains('Edit').click()
    cy.get('input#StartTime').clear().type(`8/5/20 ${newHour}`)
    cy.get('button.e-event-save').click()
    cy.contains('Dashboard').click()
    cy.get('td.e-rowcell').first().should('have.text', `${newHour}`)

  })
  
  it('filter by doctor', () => {
    cy.visit('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard')
    const doctorName = 'Nembo Lukeni'
    cy.contains('Schedule').click()
    cy.get('span.e-specialist-doctors').click()
    cy.contains(`${doctorName}`).click({force: true})
    cy.get('div.e-appointment').each(($el, index, $list) => {
      cy.get($el).click()
      cy.get('div.e-popup-content').should('contain', `${doctorName}`)
      cy.get('td.e-work-cells').first().click()
      
    })
    /* cy.contains('Day').click()
    cy.get('div.e-appointment').first().click({force: true})
    cy.contains('Edit').click()
    cy.get('input#StartTime').clear().type(`${newItem}`)
    cy.get('button.e-event-save').click()
    cy.contains('Dashboard').click()
    cy.get('td.e-rowcell').first().should('have.text', '09:30 AM')
 */
  })


})