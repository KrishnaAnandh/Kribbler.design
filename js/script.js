gsap.registerPlugin(ScrollTrigger)

var tlHomeHeroIn= new TimelineMax()
var tlHomeHeroOut= new TimelineMax()
var tlHomeBioIn= new TimelineMax()
var tlHomeWorksIn= new TimelineMax()

var headerRolesLoop = new TimelineMax()
var headerAppear = new TimelineMax()

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
    end: "40px 40%",
    scrub: true,
    // markers: true,
})

var scHomeWorksIn = ScrollTrigger.create({
    animation: tlHomeWorksIn,
    trigger: ".works",
    start: "top 70%",
    end: "50px 40%",
    scrub: true,
    // markers: true,
})

tlHomeHeroIn.staggerFrom('.hero-name .general span', 1, {y:100}, 0.1)

tlHomeHeroOut.to('.hero-details',1, {y:-100})
tlHomeHeroOut.to('.hero-name',1, {y:-30},"-=1")
// tlHomeHeroOut.to('body',0.1, {background:"#1b1486"},"-=0.5")

tlHomeBioIn.to('.hero',0.1, {opacity:0})
tlHomeBioIn.to(['body', '.header'],0.1, {background:"#1b1486"})
// tlHomeBioIn.staggerFrom('.bio-summary span',0.5, {opacity:0}, 0.04)
tlHomeBioIn.from('.bio-head',1, { opacity:0}, "-=0.8")
tlHomeBioIn.from('.bio-figures',1, {opacity:0}, "-=0.8")
// tlHomeBioIn.to('.bio-head',1.7, {y:80}, "-=1")
// tlHomeBioIn.to('.bio-figures',1.7, {y:80}, "-=1.6")


tlHomeWorksIn.to(['body', '.header'],0.1, {background:"#000"})
tlHomeWorksIn.from('.works-head',0.1, {x:200, opacity:0})
tlHomeWorksIn.from('.work-row-1',0.1, {y:100, opacity:0}, "-=0.02")


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
gsap.from(
    ".bio-summary",
    {
        scrollTrigger:{
        trigger: ".bio-summary",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        // markers: true,
        },
        y:200,
    },
)
gsap.from(
    ".bio-summary span",
    {
        scrollTrigger:{
        trigger: ".bio-summary",
        start: "top 60%",
        end: "bottom 40%",
        scrub: true,
        markers: true,
        },
        stagger: {
            from: 0,
            amount: 1.5
        },
        y:10,
        opacity:0
    },
    0.04
)

gsap.set(".work-1-image", {y:150, rotate: "4deg"})
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
        y:-150,rotate: "-4deg"
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
    

    $("#menu-icon").on('click', function(){
        $("#menu-cont").toggleClass("open");
        $(this).toggleClass("close");
        $('body').toggleClass("scroll-stopped");
        $('.header-container').toggleClass("open");
    });

    $('.hero-cta').on('click', function() {
    introAnimation();
    });
    
    
    
});
$(document).ready(function() {
    introAnimation();
}, 1000);

$(window).focus(function() {
    console.log('Focus')
    if(introExecuted){ 
        // headerRolesLoop.restart()
        action()
    }
})
$(window).blur(function() {
    if(introExecuted){
        headerRolesLoop.set(['.role1 span','.role2 span','.role3 span'], {opacity:0})
    }
})

var introExecuted = false, i=1;

var action = function() {
    if(introExecuted && !document.hidden){
        loopAnimation(i)
        i = (i < 3) ? i+1 : 1
        setTimeout(action, 5000)
    }
    if(document.hidden){
        console.log("paused")
    }
};

function introAnimation() {
    var headerLetters=$('.general span'),
    roleLetters=$('.role1 span'),
    role2Letters=$('.role2 span'),
    role3Letters=$('.role3 span'),
    headerLettersArray=headerLetters.toArray();
    roleLettersArray=roleLetters.toArray();
    
    headerLettersArray.sort(function() {return 0.7-Math.random()});
    roleLettersArray.sort(function() {return 0.7-Math.random()});
    
    headerAppear.set([".role1 span",".role2 span",".role3 span"], {opacity: 0})
    headerAppear.staggerFromTo(
        headerLettersArray, 
        1, 
        {ease: Back.easeInOut.config(1.7), opacity: 0, top: -10},
        {ease: Back.easeInOut.config(1.7), opacity: 1, top: 0}, 
        0.08
    )
    headerAppear.staggerFromTo(
        roleLettersArray, 
        1, 
        {ease: Back.easeInOut.config(0.7), opacity: 0, top: -10},
        {ease: Back.easeInOut.config(0.7), opacity: 1, top: 0}, 
        "0.08", '-=1.5'
    )

    headerAppear.from(".hero-logo", 0.5, {ease: Power4.easeOut, y:20, opacity: 0})
    headerAppear.from(".hero-desc", 0.5, {ease: Power4.easeOut, y:-20, opacity: 0}, "-=0.2")
    headerAppear.from(".hero-cta", 0.2, {ease: Power4.easeOut, y:-20, opacity: 0}, "-=0.2")
    headerAppear.from(".hero-artwork", 0.5, {ease: Power4.easeOut, y:20, opacity: 0}, "-=0.6")
    
    setTimeout(function(){introExecuted = true
    action();
    console.log(introExecuted);},5000)
}

function loopAnimation(i) {
    var currentRoleEl = '.role' + i + ' span'
    j = (i<3)?i+1:1
    var nextRoleEl = '.role' + j + ' span'
    
    var currentRole=$(currentRoleEl),
    currentRoleLetters=currentRole.toArray();
    currentRoleLetters.sort(function() {return 0.7-Math.random()});

    var nextRole=$(nextRoleEl),
    nextRoleLetters=nextRole.toArray();
    nextRoleLetters.sort(function() {return 0.7-Math.random()});
    
    // headerRolesLoop.to([], 0, { opacity: 0})
    
    headerRolesLoop.staggerFromTo(
        currentRoleLetters, 
        1,
        {ease: Back.easeInOut.config(1.7),opacity: 1},
        {ease: Back.easeInOut.config(1.7), opacity: 0}, 
        0.08
    )
    
    console.log("current:", j)
    headerRolesLoop.staggerFromTo(
        nextRoleLetters, 
        1,
        {ease: Back.easeInOut.config(1.7), opacity: 0},
        {ease: Back.easeInOut.config(1.7), opacity: 1}, 
        0.08
    )
  
   
}

var lastScrollTop = 0;

   
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    var heroEnds = $(".hero").height(),
        bioEnds = $(".bio").height()+heroEnds,
        worksEnds = $(".works").height()+bioEnds,
        shotsEnds = $(".shots").height()+worksEnds,
        blogsEnds = $(".blogs").height()+shotsEnds;
    
   

    
    if (scroll > lastScrollTop){
        scrollOffset = -300;
    } else {
        scrollOffset = -100;
    }
    lastScrollTop = scroll;
    


    if(scroll > 580){
        $('.header').addClass("show");
    }
    else{
        $('.header').removeClass("show");
    }
    //hero section
    // if(scroll >= 0 && scroll < (heroEnds + scrollOffset)){
    //     $('body').removeClass("background-black");
    //     $('body').removeClass("background-turq");
    //     $('.header').css("background","#fff");
    //     $('.header-logo').css("filter", "invert(0%)");
        
    //     $('.hero').addClass("appear");
    //     $('.bio').removeClass("appear");
    //     $('.works').removeClass("appear");
    //     $('.shots').removeClass("appear");
    //     $('.blogs').removeClass("appear");
    //     console.log("hero");
    // }
    //bio section
    // else if(scroll > (heroEnds + scrollOffset) && scroll < (bioEnds + scrollOffset)){
    //     $('body').removeClass("background-black");
    //     $('body').addClass("background-turq");
    //     $('.header').css("background","#1b1486");
    //     $('.header-logo').css("filter", "invert(100%)");
    //     $('.header-menu-icon div').css("background", "#fff");
        
    //     $('.hero').removeClass("appear");
    //     $('.bio').addClass("appear");
    //     $('.works').removeClass("appear");
    //     $('.shots').removeClass("appear");
    //     $('.blogs').removeClass("appear");
    //     console.log("bio");
    // }
    //works section
    // else if(scroll > (bioEnds + scrollOffset) && scroll < (shotsEnds + scrollOffset)){
    //     $('body').removeClass("background-turq");
    //     $('body').addClass("background-black");
    //     $('.header').css("background","#000");
    //     $('.header-logo').css("filter", "invert(100%)");
    //     $('.header-menu-icon div').css("background", "#fff");
        
    //     $('.hero').removeClass("appear");
    //     $('.bio').removeClass("appear");
    //     $('.works').addClass("appear");
    //     $('.shots').addClass("appear");
    //     $('.blogs').removeClass("appear");

    //     console.log("works");
    // }
    
    //blogs-section
    // else if(scroll > (shotsEnds + scrollOffset)){
    //     $('body').removeClass("background-black");
    //     $('body').removeClass("background-turq");
    //     $('.header').css("background","#fff");
    //     $('.header-logo').css("filter", "invert(0%)");
    //     $('.header-menu-icon div').css("background", "#000");
        
    //     $('.hero').removeClass("appear");
    //     $('.bio').removeClass("appear");
    //     $('.works').removeClass("appear");
    //     $('.shots').removeClass("appear");
    //     $('.blogs').addClass("appear");
    //     console.log("blogs");
    // }
    // else{
    //     $('body').removeClass("background-black");
    //     $('body').removeClass("background-turq");
    //     $('.header').css("background","#fff");
    //     $('.header-logo').css("filter", "invert(0%)");
    //     $('.header-menu-icon div').css("background", "#000");
    // }
    
    
    var row1_pos = -(scroll-2200);
    var row2_pos = (scroll-2200)-2500;
    var row3_pos = -(scroll-2800);
    
    $('.shots-row-1').css("left",row1_pos);
    $('.shots-row-2').css("left",row2_pos);
    $('.shots-row-3').css("left",row3_pos);
    
    
    var layer_top = scroll*2;
    var layer_middle = scroll*1.5;
    var layer_bottom = scroll
    
//            $('.layer-top').css("transfom","translateY(" . layer_top . ")");
    
    
    console.log(layer_top);
});
