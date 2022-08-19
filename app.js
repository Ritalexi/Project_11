const svg = document.querySelector('.svg');
const mobileToggle = document.querySelector('.mobile_toggle');
const nav = document.getElementById('nav');
const hamburger = document.querySelector('.hamburger');
const closed = document.querySelector('.close');
const dropMenu = document.querySelector('.drop_menu');

mobileToggle.addEventListener('click', () => {
    hamburger.classList.toggle('transparent');
    closed.classList.toggle('transparent');
dropMenu.classList.toggle('active');
nav.classList.toggle('style');
svg.classList.toggle('fill');
})

const tabs1 = document.querySelector('.tabs1');
const tabs2 = document.querySelector('.tabs2');
const tabs3 = document.querySelector('.tabs3');
const tab1 = document.querySelector('.tab1');
const tab2 = document.querySelector('.tab2');
const tab3 = document.querySelector('.tab3');


tabs1.addEventListener('click', () => {
    tabs1.classList.add('red_border');
    tabs2.classList.remove('red_border');
    tabs3.classList.remove('red_border');
    tab2.classList.add('tab_vanish');
    tab3.classList.add('tab_vanish');
    tab1.classList.remove('tab_vanish');
})
tabs2.addEventListener('click', () => {
    tabs2.classList.add('red_border');
    tabs3.classList.remove('red_border');
    tabs1.classList.remove('red_border');
    tab1.classList.add('tab_vanish');
    tab3.classList.add('tab_vanish');
    tab2.classList.remove('tab_vanish');
})
tabs3.addEventListener('click', () => {
    tabs3.classList.add('red_border');
    tabs2.classList.remove('red_border');
    tabs1.classList.remove('red_border');
    tab1.classList.add('tab_vanish');
    tab2.classList.add('tab_vanish');
    tab3.classList.remove('tab_vanish');
})
const questions = document.querySelectorAll('.questions');



        for (const item of questions) {
            const curr = item.childNodes;
            const question = curr[3];
            const answer = curr[5];
            const arrow1 = question.querySelector('.arrow1');
const colorArrow = arrow1.querySelector('.color_arrow');
            question.addEventListener('click', () => {
                if(!answer.classList.contains('answer1')){
                    arrow1.classList.add('arrow');
                    answer.classList.add('answer1');
                    colorArrow.style.stroke = 'hsl(0, 94%, 66%)';
                }else{
                    arrow1.classList.remove('arrow');
                    answer.classList.remove('answer1');
                    colorArrow.style.stroke = '#5267DF';
                }
            })
        }

        const email = document.getElementById("email");
        const errorIcon = document.querySelector(".error_icon");
        const errorMessage = document.querySelector(".error_message");
        const inputSection = document.querySelector('.submit');
        
        if(window.innerWidth <= 500){
            inputSection.style.marginTop = "10px";
          }
          if(window.innerWidth >= 500){
            inputSection.style.marginTop = "0px";
          }
        inputSection.addEventListener('click', (e) => {
          e.preventDefault();
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(email.value === "" || email.value == "null")
            {
                email.style.border = "solid 2px hsl(0, 94%, 66%)";
                email.style.borderBottomLeftRadius = "0px";
                email.style.borderBottomRightRadius = "0px";
                errorIcon.classList.add("active");
                  errorMessage.classList.add("active");
            }
         if (!email.value.match(mailformat) )
         {
            email.style.border = "solid 2px hsl(0, 94%, 66%)";
            email.style.borderBottomLeftRadius = "0px";
            email.style.borderBottomRightRadius = "0px";
            errorIcon.classList.add("active");
              errorMessage.classList.add("active");
         }
         else
         {
            email.style.borderColor = "transparent";
            errorIcon.classList.remove("active");
              errorMessage.classList.remove("active");
              email.style.borderBottomLeftRadius = "5px";
            email.style.borderBottomRightRadius = "5px";
         }
         
            })
        