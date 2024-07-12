describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.contains('div', 'Burgers').click()
    cy.get('p.text-2xl').contains('Burgers').click()
    cy.get('div.cursor-pointer').contains('p','Hard Core').click()

  })
})