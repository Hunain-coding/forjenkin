describe("University of sargodha website part1",()=>{
    it("start testing",()=>{
        cy.visit('https://su.edu.pk/')
        cy.get('.uos-mm-menu-button').click()
       


        
        cy.get('.m-menu > :nth-child(2) > [href="https://su.edu.pk/aboutus"]').click()
        cy.get('.fa-chevron-right').click()
        cy.get('.fa-chevron-right').click()
        cy.get('.fa-chevron-right').click()


        for (var i = 1; i < 35; i++) {

            cy.get('.owl-next > .fa').click()
         }
        })

        it("read only 3 buttons",()=>{
            cy.visit('https://su.edu.pk/')
            cy.get('.uos-mm-menu-button').click()
            cy.get('.m-menu > :nth-child(2) > [href="https://su.edu.pk/aboutus"]').click()

            cy.get(':nth-child(1) > .single-item > .button-bottom > .button-default').click()
            cy.wait(2000)
            cy.get('.uos-mm-menu-button').click()
            
            cy.get('.m-menu > :nth-child(2) > [href="https://su.edu.pk/aboutus"]').click()
            cy.get(':nth-child(2) > .single-item > .button-bottom > .button-default').click()
            cy.wait(2000)
            cy.get('.uos-mm-menu-button').click()
            
            cy.get('.m-menu > :nth-child(2) > [href="https://su.edu.pk/aboutus"]').click()

            cy.get(':nth-child(3) > .single-item > .button-bottom > .button-default')
            cy.get('.uos-mm-menu-button').click()
            
            cy.get('.m-menu > :nth-child(2) > [href="https://su.edu.pk/aboutus"]').click()

            cy.get('.team-link').click()

            cy.get('.uos-mm-menu-button').click()
            cy.get('.m-menu > :nth-child(2) > [href="https://su.edu.pk/aboutus"]').click()





            


        })

        it.only("admission",()=>{
            cy.visit('https://su.edu.pk/')
            cy.get('.uos-mm-menu-button').click()
            cy.get('.uos-normal-men > .mm-next').click()
            cy.get('#mm-6 > .sub-menu > :nth-child(1) > .mm-next').click()
            cy.get('#mm-7 > .sub-menu > :nth-child(1) > a').invoke('removeAttr', 'target').click()
            cy.get('.deleteMeetingClose').click()
            cy.get('.front > .form_bottom > .help > .click-toggle').click()

            //register form
            cy.get(':nth-child(3) > .input-group > .input').type("ali")
            cy.get('#phone').type("3077008187")
            cy.get(':nth-child(5) > .input-group > .input').type("hunaina662@gmail.com")
            cy.get('#register-form-home > [name="password"]').type("punjab1122")
            cy.get('[name="password_confirmation"]').type("punjab1122")

            cy.wait(2000)



            
            
            
           

                
            
            
            cy.get('#register-form-home > .submit').click({force: true})

        })



        it("login test",()=>{
            cy.visit('https://su.edu.pk/')
            cy.get('.uos-mm-menu-button').click()
            cy.get('.uos-normal-men > .mm-next').click()
            cy.get('#mm-6 > .sub-menu > :nth-child(1) > .mm-next').click()
            cy.get('#mm-7 > .sub-menu > :nth-child(1) > a').invoke('removeAttr', 'target').click()
            cy.get('.deleteMeetingClose').click()

            cy.get('#phone2').type("3077008187")
            cy.get('.front > form > [type="password"]').type("punjab1122")
            cy.get('.front > form > .submit').click()
            cy.get('.sidebar-content > .navbar-nav > :nth-child(2) > .nav-link').click()
            cy.get('.deleteMeetingClose').click()


        })
        it("admission process button",()=>{
            cy.visit('https://su.edu.pk/')
            cy.get('.uos-mm-menu-button').click()
            cy.get('.uos-normal-men > .mm-next').click()
            cy.get('#mm-6 > .sub-menu > :nth-child(1) > .mm-next').click()
            cy.get('#mm-7 > .sub-menu > :nth-child(1) > a').invoke('removeAttr', 'target').click()
            cy.get('.deleteMeetingClose').click()
            cy.get(':nth-child(1) > .oc_box > h5 > a').click()
            cy.contains('Home').click()
            cy.get('.deleteMeetingClose').click()
        })

        it("fee structure button",function(){
            cy.visit('https://su.edu.pk/')
            cy.get('.uos-mm-menu-button').click()
            cy.get('.uos-normal-men > .mm-next').click()
            cy.get('#mm-6 > .sub-menu > :nth-child(1) > .mm-next').click()
            cy.get('#mm-7 > .sub-menu > :nth-child(1) > a').invoke('removeAttr', 'target').click()
            cy.get('.deleteMeetingClose').click()
            cy.get(':nth-child(2) > .oc_box > h5 > a').click()
            cy.contains("Home").click()
            cy.get('.deleteMeetingClose').click()


        })

        it("important dates",function(){
            cy.visit('https://su.edu.pk/')
            cy.get('.uos-mm-menu-button').click()
            cy.get('.uos-normal-men > .mm-next').click()
            cy.get('#mm-6 > .sub-menu > :nth-child(1) > .mm-next').click()
            cy.get('#mm-7 > .sub-menu > :nth-child(1) > a').invoke('removeAttr', 'target').click()
            cy.get('.deleteMeetingClose').click()
            cy.get(':nth-child(3) > .oc_box > h5 > a').click()
            cy.contains("Home").click()
            cy.get('.deleteMeetingClose').click()

        })




      
        
        

        
      

    
})


describe("2.University of sargodha",()=>{
    it("how to apply page",()=>{
        cy.visit('https://su.edu.pk/')
        cy.get('.uos-mm-menu-button').click()
        cy.get('.uos-normal-men > .mm-next').click()
        cy.get('#mm-6 > .sub-menu > :nth-child(1) > .mm-next').click()
        cy.get('#mm-7 > .sub-menu > :nth-child(1) > a').invoke('removeAttr', 'target').click()
        cy.get('.deleteMeetingClose').click()
        
        cy.get('.uos-mm-menu-button').click()
        cy.get('.m-menu > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > .nav-link').click()
        cy.get('.deleteMeetingClose').click()
//programs pages
       cy.get('.uos-mm-menu-button').click()
        cy.get('.uos-normal-men > a').click()
        cy.get(':nth-child(1) > .form-control')
        cy.wait(2000)
        
        cy.get(':nth-child(2) > .form-control').select("Postgraduate")
        cy.get('.btn').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .nav-link').click()
        cy.get('.deleteMeetingClose').click()

        //previous merit list
        cy.get('.uos-mm-menu-button').click()
        cy.get('.m-menu > .uos-mega-menu > a').click()
        cy.wait(2000)
        cy.scrollTo(0, 800)
        cy.get(':nth-child(1) > .nav-link').click()
        cy.get('.deleteMeetingClose').click()


        //merit list
        cy.get('.uos-mm-menu-button').click()
        
        cy.get('.m-menu > .nav-item > .nav-link').click()
        cy.wait(3000)
        cy.get('#campus').select("Main Campus")
        cy.wait(3000)
        cy.get('.swal-button').click()
        cy.get(':nth-child(1) > .nav-link').click()
        cy.get('.deleteMeetingClose').click()


      //advertisement
        cy.get('.uos-mm-menu-button').click()
        cy.get('.m-menu > :nth-child(8) > .sf-with-ul-pre').click()
        cy.get(':nth-child(1) > .nav-link').click()
        cy.get('.deleteMeetingClose').click()

       


        //FAQ
        cy.get('.uos-mm-menu-button').click()

        cy.get(':nth-child(9) > .sf-with-ul-pre').click()
        cy.wait(3000)
        cy.scrollTo(0,800)
        cy.get(':nth-child(1) > .nav-link').click()
        cy.get('.deleteMeetingClose').click()


//other links
cy.get('.uos-mm-menu-button').click()
cy.get(':nth-child(10) > .mm-next').click()
cy.wait(1000)
cy.get(':nth-child(6) > .sf-with-ul-pre').click()


        
       



        

    })

})




describe("admission->information",()=>{

    it("information ",()=>{
        cy.visit('https://su.edu.pk/')
        
        
        cy.get('.uos-mm-menu-button').click()

        //
       
        cy.get('.uos-normal-men > .mm-next').click()
        cy.get('#mm-6 > .sub-menu > :nth-child(2) > .mm-next').click()
        cy.get('#mm-8 > .sub-menu > :nth-child(1) > a').invoke('removeAttr', 'target').click()
        cy.get(':nth-child(1) > .nav-link').click()
        cy.get('.deleteMeetingClose').click()
        cy.get('.uos-mm-menu-button').click()

        cy.get(':nth-child(9) > .mm-next').click()
        cy.get('.sub-menu > :nth-child(6) > .sf-with-ul-pre').click()




        //fee structure
        cy.get('.uos-mm-menu-button').click()
       
        
        cy.get('.uos-normal-men > .mm-next').click()
        //fee struture button
        cy.get('#mm-6 > .sub-menu > :nth-child(2) > .mm-next').click()
        cy.get('#mm-8 > .sub-menu > :nth-child(2) > a').click()
        cy.get(':nth-child(2) > .form-control').select("Postgraduate")
        cy.get('.btn').click()
        cy.get(':nth-child(1) > .nav-link').click()
        cy.get('.deleteMeetingClose').click()
        cy.get('.uos-mm-menu-button').click()
        
        cy.get(':nth-child(9) > .mm-next').click()
        cy.get('.sub-menu > :nth-child(6) > .sf-with-ul-pre').click()

        //private admission

        cy.get('.uos-mm-menu-button').click()
       
        
        cy.get('.uos-normal-men > .mm-next').click()
        cy.get('#mm-6 > .sub-menu > :nth-child(3) > .mm-next').click()
        cy.get('#mm-9 > .sub-menu > .menu-item > a').click()
        cy.contains('General').click()
        cy.get('#inputEmail4').type("Ali hunain")
        cy.get(':nth-child(2) > .form-control').type("Muhammad Iqbal")
        cy.get(':nth-child(3) > .form-control').type("38403-27029647").end()
        
        cy.get('.pull-right').click()


        //reason to choose su

        cy.get('.uos-mm-menu-button').click()
       
        
        cy.get('.uos-normal-men > .mm-next').click()
        cy.get('#mm-6 > .sub-menu > :nth-child(4) > .mm-next').click()
        cy.get('#mm-10 > .sub-menu > :nth-child(1) > a').click()

        cy.get('#accordion-18 > .card > .card-header > a').click()
        cy.wait(1000)
        cy.get('#accordion-17 > .card > .card-header > a').click()
        cy.wait(1000)
        cy.get('#accordion-16> .card > .card-header > a').click()
        cy.wait(1000)
        cy.get('#accordion-15 > .card > .card-header > a').click()
        cy.wait(1000)
        cy.get('#accordion-14 > .card > .card-header > a').click()
        cy.wait(1000)
        cy.get('#accordion-13 > .card > .card-header > a').click()
        cy.wait(1000)
        cy.get('#accordion-12 > .card > .card-header > a').click()
        cy.wait(1000)
        cy.get('#accordion-11 > .card > .card-header > a').click()
        cy.wait(1000)
        cy.get('#accordion-10 > .card > .card-header > a').click()
        cy.wait(1000)
        cy.get('#accordion-9 > .card > .card-header > a').click()



//why choose su part 2

        cy.get('.uos-mm-menu-button').click()
        cy.get('.uos-normal-men > .mm-next').click()
        cy.get('#mm-6 > .sub-menu > :nth-child(4) > .mm-next').click()
        cy.get('#mm-10 > .sub-menu > :nth-child(2) > a').click()
        //click on department of cs
        cy.scrollTo(0,500)
        cy.wait(2000)
        
        cy.get('#dep-5 > :nth-child(2) > .col-12 > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > :nth-child(2) > .px-4 > .mb-0 > a').click()
        cy.get('.col-12 > .btn').click()
        for (var i=7;i>=0;i--){
            cy.get('.mfp-arrow-right').click()
            cy.wait(1000)
            

        }
        
        cy.wait(2000)
        cy.get('.mfp-close').click()

        //rules and regulation
        cy.get(':nth-child(4) > .pt-2 > a').click()
        cy.scrollTo(0,900)
        cy.get('.uos-mm-menu-button').click()
        cy.get('.m-menu > .menu-item-home > .sf-with-ul-pre').click()






 





    })






})






//ACEDAMICS
describe("acedamics page",function(){
   
    it("acedamics_testing",()=>{
        cy.visit('https://su.edu.pk/')
        cy.get('.uos-mm-menu-button').click()
        
        
        cy.get('.m-menu > :nth-child(4) > .mm-next').click()
        cy.get('#mm-11 > .sub-menu > :nth-child(1) > .sf-with-ul-pre').click()
        cy.get('.uos-mm-menu-button').click()
        cy.get('.m-menu > .menu-item-home > .sf-with-ul-pre').click()

        //links
        cy.get('.uos-mm-menu-button').click()
        cy.get('.m-menu > :nth-child(4) > .mm-next').click()
        cy.get('#mm-11 > .sub-menu > :nth-child(2) > .mm-next').click()
        cy.get('#mm-13 > .sub-menu > :nth-child(1) > a').click()
        cy.get('.uos-mm-menu-button > span').click()
        cy.get('.m-menu > :nth-child(4) > .mm-next').click()
        cy.get('#mm-11 > .sub-menu > :nth-child(2) > .mm-next').click()
        cy.get('#mm-13 > .sub-menu > :nth-child(2) > a').click()
        cy.get('.uos-mm-menu-button').click()
        cy.get('.m-menu > .menu-item-home > .sf-with-ul-pre').click()




    })

    
    //research page
    it("research page",()=>{
        cy.visit('https://su.edu.pk/')
        cy.get('.uos-mm-menu-button').click()


        cy.get(':nth-child(5) > .mm-next').click()
        cy.get('#mm-14 > .sub-menu > .menu-item > .sf-with-ul-pre').click()
        for(var i=10;i>=0;i--){
            cy.get('.owl-next > span').click()
        }
        for(var k=15;k>=0;k--){
            cy.get('.fa-chevron-right').click()
        }
        cy.get('button.btn > .btn').click()
        cy.scrollTo(0,900)
        cy.wait(2000)
        cy.get('.uos-mm-menu-button').click()
        cy.get('.m-menu > .menu-item-home > .sf-with-ul-pre').click()
    })
    //student page

    it("students",()=>{
        cy.visit('https://su.edu.pk/')
        cy.get('.uos-mm-menu-button').click()
        cy.get('.m-menu > :nth-child(6) > .sf-with-ul-pre').click()
        cy.get('.team-link').scrollIntoView()
        cy.wait(2000)
        cy.get('.uos-mm-menu-button').click()
        cy.get('.m-menu > .menu-item-home > .sf-with-ul-pre').click()


    })


    //examination link
    it("examination",()=>{
        cy.visit('https://su.edu.pk/')
        cy.get('.uos-mm-menu-button').click()
        cy.get(':nth-child(7) > .mm-next').click()
        cy.get('#mm-20 > .sub-menu > :nth-child(1) > .mm-next').click()
        cy.get('#mm-21 > .sub-menu > :nth-child(1) > a').click()
        cy.get('.slick-next').click()
       
        cy.get(':nth-child(1) > .card1').click()
        cy.get('.uos-mm-menu-button').click()
        cy.get(':nth-child(7) > .mm-next').click()
        cy.get('#mm-20 > .sub-menu > :nth-child(2) > .mm-next').click()
        cy.get('#mm-22 > .sub-menu > :nth-child(1) > a').click()
        cy.get('#searchText').type("Admission Schedule: 3rd Term / Semester (Regular & Repeat) Affiliated Colleges")
        cy.wait(2000)
        cy.get('#btnSearch').click()
        cy.get('.home > span').click()



    })

    it("LMS",()=>{
        cy.visit('https://su.edu.pk/')
        cy.get('.uos-mm-menu-button').click()
        cy.get(':nth-child(8) > .mm-next').click()
        cy.get('.sub-menu > :nth-child(4) > .sf-with-ul-pre').click()
        cy.get('.course').type("compiler construction")
        cy.wait(2000)
        cy.get('.search-course > form > .nws-button > button').click()
        cy.wait(2000)
        cy.get(':nth-child(4) > .best-course-pic-text > .best-course-pic').click()
        cy.get('.nav-menu > ul > :nth-child(2) > #menu-2').click()
        cy.get('.nav-menu > ul > :nth-child(3) > #menu-7').click()
        //cy.get('.nav-menu > ul > :nth-child(4) > #menu-5').click()
        cy.get('.nav-menu > ul > :nth-child(5) > #menu-9').click()

    })


   
})





