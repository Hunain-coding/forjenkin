describe('Marvel characters', () => {
  beforeEach(() => {
    cy.visit("https://su.edu.pk/")
    
  
  })
  it('Get all Marvel characters', () => {
    
    
    cy.request("/affiliated-colleges").then((resp)=>{

      if(resp.status===200 && resp.body.ok===true){
        return

      req()
      }


    })
  

      //cy.request(); // We will build the URL and test assertions in the coming steps
  })
  it("challan",()=>{
    
    cy.request("/challan").then((resp)=>{
      expect(resp.status).to.eq(200)
      .should('include', 'ONLINE CHALLAN')
    })
  })
})