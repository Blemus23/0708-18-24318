// Pruebas del formulario de registro
describe("Formulario de registro", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("muestra los 3 mensajes de error con datos inválidos", () => {
    cy.get("#nombre").clear()                 // nombre vacío
    cy.get("#correo").type("correo-sin-arroba")
    cy.get("#contrasena").type("123")         // menos de 6 caracteres
    cy.get("#btn-registrar").click()

    cy.get("#error-nombre").should("have.text", "El nombre es obligatorio")
    cy.get("#error-correo").should("have.text", "El correo debe contener @")
    cy.get("#error-contrasena").should("have.text", "La contraseña debe tener al menos 6 caracteres")
    cy.get("#mensaje").should("not.contain", "Registro exitoso")
    cy.url().should("eq", Cypress.config("baseUrl") + "/")   // no se recargó ni cambió de página
  })

  it("muestra 'Registro exitoso' y vacía el formulario con datos válidos", () => {
    cy.get("#nombre").type("Brando Lemus")
    cy.get("#correo").type("brando@correo.com")
    cy.get("#contrasena").type("secreto123")
    cy.get("#btn-registrar").click()

    cy.get("#mensaje").should("have.text", "Registro exitoso")
    cy.get("#nombre").should("have.value", "")
    cy.get("#correo").should("have.value", "")
    cy.get("#contrasena").should("have.value", "")
    cy.get(".error").each(($el) => expect($el.text()).to.eq(""))
  })
})
