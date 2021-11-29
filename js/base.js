
    
$("#header").load("../header.html"); 
$("#enquiry").load("../enquiry.html"); 

gsap.to(
    ['body', '.header'],
    {
        scrollTrigger:{
        trigger: ".enquiry",
        start: "top 70%",
        end: "50px 40%",
        scrub: true,
        // markers: true,
        },
        background:"#113"
    }
)
gsap.set('.header', {background:"#fff0"})
gsap.to(
    '.header',
    {
        scrollTrigger:{
        trigger: ".cover",
        start: "bottom 100px",
        // end: "bottom bottom",
        scrub: true,
        // markers: true,
        },
        background:"#fff"
    }
)

if(thisPage != 'home'){
    $('.header').addClass("show");
}


$(document).ready(function(){

    //menu-icon

    $('#menu-icon').on('click', function(){
        console.log("click detected")
        $("#menu-cont").toggleClass("open");
        $(this).toggleClass("close");
        $('body').toggleClass("scroll-stopped");
        $('.header-container').toggleClass("open");
    });
});


//submit button glow
const button = document.querySelector("button");

button.addEventListener("mousemove", (e) => {
  const { x, y, width, height} = button.getBoundingClientRect();
  console.log(x, y, width, height)
  if((e.clientX > x && e.clientX < x+width)&&(e.clientY > y && e.clientY < y+height)){
      button.style.setProperty("--x", e.clientX - x);
    }
});


const layerTop = gsap.utils.toArray('.lyr-top');
const layerMid = gsap.utils.toArray('.lyr-mid');

layerTop.forEach((el) => {
    gsap.set(el, {y:100})
  gsap.to(el, {
    scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        // markers: true,
    },
    y:-100
  });
});

layerMid.forEach((el) => {
    gsap.set(el, {y:50})
  gsap.to(el, {
    scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        // markers: true,
    },
    y:-50
  });
});

