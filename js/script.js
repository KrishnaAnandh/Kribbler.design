gsap.registerPlugin(ScrollTrigger)

var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.querySelector("#scroll-container"),
  ease: 0.1, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

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
    // pin:true,
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
    start: "top 80%",
    end: "50px 20%",
    scrub: true,
    // markers: true,
})
var scHomeExpertiseIn = ScrollTrigger.create({
    animation: tlHomeExpertiseIn,
    trigger: ".expertise",
    start: "top 70%",
    end: "50px 20%",
    scrub: true,
    // markers: true,
})

var scHomeBlogsIn = ScrollTrigger.create({
    animation: tlHomeBlogsIn,
    trigger: ".home-blogs",
    start: "top 70%",
    end: "50px 20%",
    scrub: true,
    // markers: true,
    onEnter() {
        $('.header').removeClass('dark');
    },
    onLeaveBack() {
        console.log("onLeaveBack")
        $('.header').addClass('dark');
    }
})
// var scHomeEnquiryIn = ScrollTrigger.create({
//     animation: tlHomeEnquiryIn,
//     trigger: ".enquiry",
//     start: "top 70%",
//     end: "50px 40%",
//     scrub: true,
//     // markers: true,
// })
// tlHomeHeroIn.staggerFrom('.hero-name .general span', 1, {y:100}, 0.1)

tlHomeHeroOut.to('.hero-details',1, {y:-100})
tlHomeHeroOut.to('.hero-name',1, {y:-50},"-=1")
tlHomeHeroOut.to('.hero-image-holder',1, {y:100},"-=1")
tlHomeHeroOut.to('body',0.1, {background:"#1b1486"},"-=0.5")

// tlHomeHeroOut.to('.bio',1, {y:-1000})

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

tlHomeWorksIn.to('.bio',0.5, {opacity:0})
tlHomeWorksIn.fromTo(['body', '.header'],{background:"#1b1486"},{duration:0.2, background:"#113"})
tlHomeWorksIn.from('.works-head h3',2, {y:200, opacity:1, skewY:10})
tlHomeWorksIn.from('.works-list',1, {top:100, opacity:0})

// tlHomeExpertiseIn.to('.shots',1, {opacity:0})
// tlHomeExpertiseIn.to(['body', '.header'],1, {background:"#30f9dd"})
// tlHomeExpertiseIn.from('.expertise',1, {opacity:0})

tlHomeBlogsIn.to(['.shots','.side-hustles', '.works-link'],1, {opacity:0})
tlHomeBlogsIn.fromTo(['body', '.header'],{background:"#113"},{duration:0.2, background:"#eff"})
tlHomeBlogsIn.from('.home-blogs',1, {opacity:0})
tlHomeBlogsIn.staggerFrom('.blog',1, {opacity:0, y:300},"0.6","-=1")


// tlHomeEnquiryIn.to('.blogs',1, {opacity:0})
// tlHomeEnquiryIn.fromTo(['body', '.header'],{background:"#eef"},{duration:0.2, background:"#113"})
// // tlHomeEnquiryIn.to(['body', '.header'],0.1, {background:"#113"})
// tlHomeEnquiryIn.from('.enquiry',1, {opacity:0})

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
    console.log("intro Animation")
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

    headerAppear.from(".hero-desc", 0.5, {ease: Power4.easeOut, y:20, opacity: 0}, "-=1")
    headerAppear.from(".hero-cta", 0.2, {ease: Power4.easeOut, y:20, opacity: 0}, "-=0.5")
    headerAppear.from(".hero-artwork", 0.5, {ease: Power4.easeOut, y:50, opacity: 0}, "-=0.19")
    

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
    // console.log(scroll);
    if(scroll > 580){
        $('.header').addClass("show");
    }
    else{
        $('.header').removeClass("show");
    }

});


// gsap.to(
//     'body',
//     {
//         scrollTrigger:{
//             trigger: ".home-blogs",
//             start: "top 60%",
//             end: "bottom 40%",
//             // scrub: true,
//             // markers: true,
//             onEnter() {
//                 console.log("onEnter")
//                 $('.header').removeClass('dark');
                
//             },
//             onEnterBack() {
//                 console.log("onEnterBack")
//                 $('.header').removeClass('dark');
//             },
//             onLeave() {
//                 console.log("onEnterBack")
//                 $('.header').addClass('dark');
//             },
//             onLeaveBack() {
//                 console.log("onEnterBack")
//                 $('.header').addClass('dark');
//             },
//         },
//         background:"#fff"
//     }
// )




// var requestId = null;

// TweenLite.set(scroller.target, {
//   rotation: 0.01,
//   force3D: true
// });

// window.addEventListener("load", onLoad);

// function onLoad() {    
//   updateScroller();  
//   window.focus();
//   window.addEventListener("resize", onResize);
//   document.addEventListener("scroll", onScroll); 
// }

// function updateScroller() {
  
//   var resized = scroller.resizeRequest > 0;
    
//   if (resized) {    
//     var height = scroller.target.clientHeight;
//     body.style.height = height + "px";
//     scroller.resizeRequest = 0;
//   }
      
//   var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

//   scroller.endY = scrollY;
//   scroller.y += (scrollY - scroller.y) * scroller.ease;

//   if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
//     scroller.y = scrollY;
//     scroller.scrollRequest = 0;
//   }
  
//   TweenLite.set(scroller.target, { 
//     y: -scroller.y 
//   });
  
//   requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
// }

// function onScroll() {
//   scroller.scrollRequest++;
//   if (!requestId) {
//     requestId = requestAnimationFrame(updateScroller);
//   }
// }

// function onResize() {
//   scroller.resizeRequest++;
//   if (!requestId) {
//     requestId = requestAnimationFrame(updateScroller);
//   }
// }




