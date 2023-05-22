/*=============== SHOW MENU ===============*/

const navMenu=document.getElementById('nav-menu');
const navToggle=document.getElementById('nav-toggle');
const navClose=document.getElementById('nav-close');
/*=============== REMOVE MENU MOBILE ===============*/
if(navToggle){
    navToggle.addEventListener('click',function(){
        navMenu.classList.add('show-menu')
        // this.style.display='none';
        // navClose.style.display='block';
    })
}
if(navClose){
    navClose.addEventListener('click',function(){
        navMenu.classList.remove('show-menu')
        // this.style.display='none';
        // navToggle.style.display='block';
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader=()=>{
    const header=document.getElementById('header')
    this.scrollY >=50?header.classList.add('bg-header'):header.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)
/* ======================remove menu mobile================*/
const navLink=document.querySelectorAll('.nav__link');
const linckAction=()=>{
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linckAction))
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/



/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up')
    this.scrollY >=350?scrollUp.classList.add('show-scroll'):scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
scrollBtn=document.getElementById('scroll-up');
scrollBtn.addEventListener('click',function(){
    
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr= ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    
})
sr.reveal(`.home__data ,.footer__container ,.footer__group`);
sr.reveal(`.home__img`,{delay:700,origin:'bottom'});
sr.reveal(`.logos__img ,.program__card ,.pricing__card`,{interval:100});
sr.reveal(`.choose__img ,.calculate__content`,{origin:'left'});
sr.reveal(`.choose__content ,.calculate__img`,{origin:'right'});


/*=============== CALCULATE JS ===============*/
const calculateForm=document.getElementById('calculate-form');
const calculateCm=document.getElementById('calculate-cm');
const calculateKg=document.getElementById('calculate-kg');
const calculateMessage=document.getElementById('calculate-message');
const calculateBmi=(e)=>{
    e.preventDefault();
    if(calculateCm.value==="" || calculateKg.value===""){
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')
        calculateMessage.textContent='Fill in the height and weight 🙂'
         setTimeout(()=>{
         calculateMessage.textContent="";
         },3000)
        }else{
            const cm=calculateCm.value / 100,
                  kg=calculateKg.value,
                  bmi=Math.round(kg/(cm * cm));
                  if(bmi<18.5){
                      calculateMessage.classList.add('color-green');
                      calculateMessage.textContent=`Your BMI is ${bmi} and you are skinny 😔`
                  }else if(bmi<25){
                    calculateMessage.classList.add('color-green');
                    calculateMessage.textContent=`Your BMI is ${bmi} and you are healthy 🥳`
                  
                  }else{
                    calculateMessage.classList.add('color-green');
                    calculateMessage.textContent=`	Your BMI is ${bmi} and you are overweight 😔`
                  }
                  calculateCm.value=""
                  calculateKg.value=""
                  setTimeout(()=>{
                      calculateMessage.textContent="";
                  },4000)
        }
}



calculateForm.addEventListener('submit',calculateBmi)
/*=============== EMAIL JS ===============*/
const contactForm=document.getElementById('contact-form');
const contactMessage=document.getElementById('contact-message');
const contactUser=document.getElementById('contact-user');
const sendEmail=(e)=>{
    e.preventDefault();
    if(contactUser.value===""){
        contactMessage.classList.remove('color-green');
        contactMessage.classList.add('color-red');
        contactMessage.textContent=`You must enter your email ☝️` ;
        setTimeout(()=>{
            contactMessage.textContent="";
        },3000)
    }else{
        emailjs.sendForm('service_qtu9k4o', 'template_rwo3hjg', '#contact-form', 'KT-9_3S3rbPQdyTto').then(()=>{
           contactMessage.classList.add('color-green');
            contactMessage.textContent = `You registered successfully 💪`;
            setTimeout(()=>{
                contactMessage.textContent="";
            },3000)
        },(error)=>{
            alert('OOPS! SOMETHING HAS FAILED...',error);
        })
      contactUser.value=""
    }
}
contactForm.addEventListener('submit',sendEmail);

// scroll link
const sections=document.querySelectorAll('section[id]')
function scrollActive(){
  const scrollY = window.pageYOffset
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')
          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link')

          }else{
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link')
          }
  })

}
window.addEventListener('scroll',scrollActive)


let footer1=document.querySelectorAll('.footer1')
footer1.forEach(function(el){
    el.addEventListener('click',function(e){
        e.preventDefault();
    })
})