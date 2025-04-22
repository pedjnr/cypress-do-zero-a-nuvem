describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('Exercício 01 - Verifica o Título da Página', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('Exercício 02 - Preenche os campos obrigatório e envia o formulário', () => {
    cy.get('#firstName').type('Juno')
    cy.get('#lastName').type('Jupiter')
    cy.get('#email').type('juno@jupiter.com')
    cy.get('#open-text-area').type('Hello World!')
    cy.get('button.button').click()

    cy.get('.success').should('be.visible')
    cy.get('.success').contains('Mensagem enviada com sucesso.').should('be.visible')
  })

  it('Exercício Extra 01 - (Delay) Preenche os campos obrigatório e envia o formulário', () => {
    cy.get('#firstName').type('Juno')
    cy.get('#lastName').type('Jupiter')
    cy.get('#email').type('juno@jupiter.com')
    cy.get('#open-text-area').type('Hello World!', {delay:300})
    cy.get('button.button').click()

    cy.get('.success').should('be.visible')
    cy.get('.success').contains('Mensagem enviada com sucesso.').should('be.visible')
  })

  it('Exercício Extra 02 - Verifica mensagem de erro de email', () => {
    cy.get('#firstName').type('Juno')
    cy.get('#lastName').type('Jupiter')
    cy.get('#email').type('emailErrado')
    cy.get('#open-text-area').type('Hello World!')
    cy.get('button.button').click()

    cy.get('.error').should('be.visible')
    cy.get('.error').contains('Valide os campos obrigatórios!').should('be.visible')
  })

  it('Exercício Extra 03 - Verifica campo telefone só aceita números', () => {
    cy.get('#phone').type('TesteTelefone')
    cy.get('#phone').should('be.empty')
  })

  it('Exercício Extra 04 - Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Juno')
    cy.get('#lastName').type('Jupiter')
    cy.get('#email').type('juno@jupiter.com')
    cy.get('#open-text-area').type('Hello World!')
    cy.get('#phone-checkbox').click()
    cy.get('button.button').click()

    cy.get('.error').should('be.visible')
    cy.get('.error').contains('Valide os campos obrigatórios!').should('be.visible')
  })

  it('Exercício Extra 05 - Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    //Teste validando se os campos foram preenchidos
    cy.get('#firstName').type('Juno')
    cy.get('#firstName').should('have.value', 'Juno')
    cy.get('#lastName').type('Jupiter')
    cy.get('#lastName').should('have.value', 'Jupiter')
    cy.get('#email').type('juno@jupiter.com')
    cy.get('#email').should('have.value', 'juno@jupiter.com')
    cy.get('#phone').type('1234567891')
    cy.get('#phone').should('have.value', '1234567891')

    //Teste validando se os campos foram apagados
    cy.get('#firstName').clear()
    cy.get('#firstName').should('have.value', '')
    cy.get('#lastName').clear()
    cy.get('#lastName').should('have.value', '')
    cy.get('#email').clear()
    cy.get('#email').should('have.value', '')
    cy.get('#phone').clear()
    cy.get('#phone').should('have.value', '')
  })

  it('Exercício Extra 06 - Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
    cy.get('.error').contains('Valide os campos obrigatórios!').should('be.visible')
  })

  it('Exercício Extra 07 - Envia o formuário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit('Juno', 'Jupiter', 'juno@jupiter.com', 'Hello World!')
  })

  it('Exercício 08 - Alterar o localizador do botão usando o .contains', () => {
    cy.get('#firstName').type('Juno')
    cy.get('#lastName').type('Jupiter')
    cy.get('#email').type('juno@jupiter.com')
    cy.get('#open-text-area').type('Hello World!')
    cy.contains('button', 'Enviar').click()

    cy.get('.success').should('be.visible')
    cy.get('.success').contains('Mensagem enviada com sucesso.').should('be.visible')
  })
})