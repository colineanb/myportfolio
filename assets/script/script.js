
/**
 * Image Parallax
 */
// let  imgContainer = document.querySelector('.image-date-container')
// window.addEventListener('mousemove', (_event) =>
// {
//     const ratioX = _event.clientX / window.innerWidth - 0.5
//     const ratioY = _event.clientY / window.innerHeight - 0.5
    
//     const translateX = - 0.008 * ratioX * 300
//     const translateY = - 0.008 * ratioY * 300

//     img.style.transform = `translate(${translateX}%, ${translateY}%)`
    
// })


// window.addEventListener('mousemove', (_event) =>
// {
//     const ratioX = _event.clientX / window.innerWidth - 0.5
//     const ratioY = _event.clientY / window.innerHeight - 0.5
    
//     const translateX = 0.008 * ratioX * 300
//     const translateY = 0.008 * ratioY * 300
    
//     typoContainer.style.transform = `translate(${translateX}%, ${translateY}%)`
    
// })

// window.addEventListener('mousemove', (_event) =>
// {
//     const ratioX = _event.clientX / window.innerWidth - 0.5
//     const ratioY = _event.clientY / window.innerHeight - 0.5
    
//     const translateX = - 0.008 * ratioX * 300
//     const translateY = - 0.008 * ratioY * 300
    
//     randomContainer.style.transform = `translate(${translateX}%, ${translateY}%)`
    
// })

// window.addEventListener('mousemove', (_event) =>
// {
//     const ratioX = _event.clientX / window.innerWidth - 0.5
//     const ratioY = _event.clientY / window.innerHeight - 0.5
    
//     const translateX = 0.008 * ratioX * 300
//     const translateY = 0.008 * ratioY * 300
    
//     solarContainer.style.transform = `translate(${translateX}%, ${translateY}%)`
    
// })




/**
 * ANIMATION REDIRECTION 
 * PROJECT
 */

let date = document.querySelector('.date')
let contentWrapper = document.querySelector('.content-wrapper')
let header = document.querySelector('header')
let blackDescriptionProjet = document.querySelector('.description-container')
let img = document.querySelector('.hyphen-click')
let typo = document.querySelector('.typo')
let solar = document.querySelector('.solar')
let random = document.querySelector('.random')



 /**
  * projet 1 WASTIC
  */
 let imgWastic = document.querySelector('.wastic-click')

imgWastic.addEventListener('click', () =>
{
    console.log("heyyyyyy")
    window.location.href = "pages/wastic.html";
})


 /**
  * projet 2 HYPHEN
  */
img.addEventListener('click', () =>
{
    window.location.href = "pages/hyphen.html";
    // //delay before redirection
    // setTimeout(function () {
    //     window.location.href = "pages/hyphen.html";
    //  }, 3000); 

//     //animation image
//     imgContainer.classList.add('animation-image')
//     img.classList.add('width-image')
//     date.style.display = "none"
//     header.style.display = "none"
//     typo.style.display = "none"  
//     solar.style.display = "none"  
//     random.style.display = "none"  
//     contentWrapper.classList.add('content-wrapper-animation')
//     setTimeout(function(){
//     blackDescriptionProjet.style.visibility = "visible"
//    }, 1000)
   
})

 /**
  * projet 3 AIRBNB
  */


 let imgAirbnb = document.querySelector('.airbnb-click')

 imgAirbnb.addEventListener('click', () =>
{
    window.location.href = "pages/airbnb.html";
   
})


 /**
  * projet 4 BAPTISTE FOLIO
  */


 let imgFolio = document.querySelector('.portfolio-click')

 imgFolio.addEventListener('click', () =>
{
    window.location.href = "pages/folio.html";
   
})



 /**
  * projet 5 LAB
  */


 let imgLab = document.querySelector('.lab-click')

 imgLab.addEventListener('click', () =>
{
    window.location.href = "pages/lab.html";
   
})



