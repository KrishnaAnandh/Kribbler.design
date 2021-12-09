gsap.registerPlugin(ScrollTrigger)


var tlHomeHeroIn= new TimelineMax()
var tlHomeHeroOut= new TimelineMax()
var tlHomeBioIn= new TimelineMax()
var tlHomeWorksIn= new TimelineMax()
var tlHomeExpertiseIn= new TimelineMax()
var tlHomeBlogsIn= new TimelineMax()
var tlHomeEnquiryIn= new TimelineMax()


var headerAppear = new TimelineMax()
var headerLoop = new TimelineMax({repeat: -1})

var scHomeHeroIn = ScrollTrigger.create({
    animation: tlHomeHeroIn,
    trigger: "section.hero",
    start: "top top",
    // end: "bottom bottom",
    scrub: true,
    // markers: true,
})


var scHomeHeroOut = ScrollTrigger.create({
    animation: tlHomeHeroOut,
    trigger: ".hero",
    start: "top top",
    scrub: true,
    // markers: true,
})

var scHomeBioIn = ScrollTrigger.create({
    animation: tlHomeBioIn,
    trigger: ".bio",
    start: "top 70%",
    end: "bottom bottom",
    scrub: true,
    // markers: true,
})

var scHomeWorksIn = ScrollTrigger.create({
    animation: tlHomeWorksIn,
    trigger: ".works",
    start: "top 60%",
    end: "50px 40%",
    scrub: true,
    // markers: true,
})
var scHomeExpertiseIn = ScrollTrigger.create({
    animation: tlHomeExpertiseIn,
    trigger: ".expertise",
    start: "top 70%",
    end: "50px 40%",
    scrub: true,
    // markers: true,
})

var scHomeBlogsIn = ScrollTrigger.create({
    animation: tlHomeBlogsIn,
    trigger: ".blogs",
    start: "top 70%",
    end: "50px 40%",
    scrub: true,
    // markers: true,
})
var scHomeEnquiryIn = ScrollTrigger.create({
    animation: tlHomeEnquiryIn,
    trigger: ".enquiry",
    start: "top 70%",
    end: "50px 40%",
    scrub: true,
    // markers: true,
})
// tlHomeHeroIn.staggerFrom('.hero-name .general span', 1, {y:100}, 0.1)

tlHomeHeroOut.to('.hero-details',1, {y:-100})
tlHomeHeroOut.to('.hero-name',1, {y:-30},"-=1")
// tlHomeHeroOut.to('body',0.1, {background:"#1b1486"},"-=0.5")

tlHomeBioIn.to('.hero',0.5, {opacity:0})
tlHomeBioIn.fromTo(['body', '.header'],{background:"#1e1e1f"},{duration:0.2, background:"#1b1486"})
// tlHomeBioIn.to(['body', '.header'],0.5, {background:"#1b1486"})
tlHomeBioIn.call(function() {$('.header').addClass("dark")}, null, null, 2);

tlHomeBioIn.from('.bio-head',1, { opacity:0},"+=0.5")
tlHomeBioIn.from('.bio-head span',1, { width:0},"-=0.8")
tlHomeBioIn.to('.bio-head span',1, { skewY:-20},"-=0.2")
tlHomeBioIn.staggerFrom(".bio-summary span", 0.5, {y:60, opacity:0},"0.04","-=1")

tlHomeBioIn.from('.bio-figures',1, {opacity:0},"+=0.1")
// tlHomeBioIn.to('.bio-head',1.7, {y:80}, "-=1")
// tlHomeBioIn.to('.bio-figures',1.7, {y:80}, "-=1.6")


tlHomeWorksIn.fromTo(['body', '.header'],{background:"#1b1486"},{duration:0.2, background:"#113"})
tlHomeWorksIn.from('.works-head h3',1, {y:200, opacity:1, skewY:10})
tlHomeWorksIn.from('.work-row-1',1, {y:50, opacity:0})

// tlHomeExpertiseIn.to('.shots',1, {opacity:0})
// tlHomeExpertiseIn.to(['body', '.header'],1, {background:"#30f9dd"})
// tlHomeExpertiseIn.from('.expertise',1, {opacity:0})

tlHomeBlogsIn.to('.shots',1, {opacity:0})
tlHomeBlogsIn.fromTo(['body', '.header'],{background:"#113"},{duration:0.2, background:"#eef"})
// tlHomeBlogsIn.call(function() {$('.header').removeClass("dark")}, null, null, 2);
tlHomeBlogsIn.from('.blogs',1, {opacity:0})

tlHomeEnquiryIn.to(['.blog'],1, {opacity:0})
tlHomeEnquiryIn.fromTo(['body', '.header'],{background:"#eef"},{duration:0.2, background:"#113"})
// tlHomeEnquiryIn.to(['body', '.header'],0.1, {background:"#113"})
tlHomeEnquiryIn.call(function() {$('.header').addClass("dark")}, null, null, 2);
tlHomeEnquiryIn.from('.enquiry',1, {opacity:0, y:40})
// gsap.to(
//     ".img-1",
//     {
//         scrollTrigger:{
//         trigger: "img",
//         // markers: true,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true
//         },
//         y:-100,
//     }
    
// )
// gsap.from(
//     ".bio-summary",
//     {
//         scrollTrigger:{
//         trigger: ".bio-summary",
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true,
//         // markers: true,
//         },
//         y:150,
//     },
// )
// gsap.from(
//     ".bio-summary span",
//     {
//         scrollTrigger:{
//         trigger: ".bio-summary",
//         start: "top 80%",
//         end: "bottom 60%",
//         scrub: true,
//         // markers: true,
//         },
//         stagger: {
//             from: 0,
//             amount: 1.5
//         },
//         y:10,
//         opacity:0
//     },
//     0.04
// )

gsap.set(".work-1-image", {y:150})
gsap.set(".work-2-image", {y:150})
gsap.set(".work-3-image", {y:150})
gsap.to(
    ".work-1-image",
    {
        scrollTrigger:{
        trigger: ".work-1-image",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        // markers: true,
        },
        y:-150
    }
    
)
gsap.to(
    ".work-2-image",
    {
        scrollTrigger:{
        trigger: ".work-2-image",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        // markers: true
        },
        y:-150
    }
)
gsap.to(
    ".work-3-image",
    {
        scrollTrigger:{
        trigger: ".work-3-image",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        // markers: true
        },
        y:-150
    }  
)

gsap.to(
    ".shots-row-1",
    {
        scrollTrigger:{
        trigger: ".shots",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        // markers: true
        },
        x:-1000
    }  
)
gsap.from(
    ".shots-row-2",
    {
        scrollTrigger:{
        trigger: ".shots",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        // markers: true
        },
        x:-1000
    }  
)

// gsap.set(".work-1-image .img-1", {right:300})
// gsap.set(".work-1-image .img-2", {right:200})
// gsap.set(".work-1-image .img-3", {right:100})

gsap.to(
    ".work-1-image .img-1",
    {
        scrollTrigger:{
        trigger: ".work-1-image",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        },
        x:-200
    }
    
)
// gsap.to(
//     ".work-1-image .img-2",
//     {
//         scrollTrigger:{
//         trigger: ".work-1-image",
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true,
//         },
//         right:150
//     }
    
// )
gsap.to(
    ".work-1-image .img-3",
    {
        scrollTrigger:{
        trigger: ".work-1-image",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        },
        x:200
    }
    
)





$(window).on('load', function() {
    $('.hero').addClass("appear");
    
//            $(this).impulse({
//                range: 60,
//                tempo: 1200,
//                effect: 'easeOutBack',
//                fluid: true
//            });



});

$(document).ready(function(){
    $(".hero-name span").lettering();
    // $('body').css("background", "#1e1e1f");
    introAnimation();
    
});

// $(window).focus(function() {
//     console.log('Focus')
//     if(introExecuted){ 
//         // headerRolesLoop.restart()
//         action()
//     }
// })
// $(window).blur(function() {
//     if(introExecuted){
//         headerRolesLoop.set(['.role1 span','.role2 span','.role3 span'], {opacity:0})
//     }
// })

function introAnimation() {

    window.scrollTo(0, 0);
    headerLoop.set([".role2 span",".role3 span"], {opacity: 0})
    // headerAppear.set(".hero-name", {width: "200%", textAlign: "center"})
    headerAppear.to("body",0.2,{background:"#1e1e1f"})
    headerAppear.to(".revealer",1, {ease: Power2.easeOut, y:"-100%"}, "+=2")
    headerAppear.from(
        ".general span", 
        1, 
        {ease: Back.easeInOut.config(1.7), 
         opacity: 0, 
         y: -10,
         stagger: {
            amount: 0.3, 
            from: "random",
         }
        }, "-=1"
    )
    headerAppear.from(
        ".role1 span", 
        1, 
        {ease: Back.easeInOut.config(1.7), 
         opacity: 0, 
         y: -10,
         stagger: {
            amount: 0.3, 
            from: "random",
         }
        },
        "-=1"
    )

    headerAppear.from(".hero-logo", 0.5, {ease: Power4.easeOut, y:20, opacity: 0})
    headerAppear.from(".hero-desc", 0.5, {ease: Power4.easeOut, y:-20, opacity: 0}, "-=0.2")
    headerAppear.from(".hero-cta", 0.2, {ease: Power4.easeOut, y:-20, opacity: 0}, "-=0.2")
    headerAppear.from(".hero-artwork", 0.5, {ease: Power4.easeOut, y:20, opacity: 0}, "-=0.6")
    

    headerLoop.to(
        ".role1 span", 
        1, 
        {
            ease: Back.easeInOut.config(1.7), 
            opacity: 0, 
            stagger: {
                amount: 0.4, 
                from: "random",
            }
        },
        "+=4"
      )
    headerLoop.to(
        ".role2 span", 
        1,{
            ease: Back.easeInOut.config(1.7), 
            opacity: 1, 
            stagger: {
                amount: 0.4, 
                from: "random",
            }
        },
      )
    headerLoop.to(
        ".role2 span", 
        1,{
            ease: Back.easeInOut.config(1.7), 
            opacity: 0, 
            stagger: {
                amount: 0.4, 
                from: "random",
            }
        },
        "+=4"
      )
    headerLoop.to(
        ".role3 span", 
        1, 
        {ease: Back.easeInOut.config(1.7), 
         opacity: 1, 
         stagger: {
            amount: 0.4, 
            from: "random",
         }
        },
      )
    headerLoop.to(
        ".role3 span", 
        1, 
        {ease: Back.easeInOut.config(1.7), 
         opacity: 0, 
         stagger: {
            amount: 0.4, 
            from: "random",
         }
        },
        "+=4"
      )
    headerLoop.to(
        ".role1 span", 
        1, 
        {ease: Back.easeInOut.config(1.7), 
         opacity: 1, 
         stagger: {
            amount: 0.4, 
            from: "random",
         }
        },
    )
    
}


var lastScrollTop = 0;

   
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if(scroll > 580){
        $('.header').addClass("show");
    }
    else{
        $('.header').removeClass("show");
    }

});





