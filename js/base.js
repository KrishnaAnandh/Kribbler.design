$("#header").load("./header.html", function() {
    var menuOpened = false
    $('#menu-icon').on('click', function(){
        
        // gsap.set(".header-menu li a", {y:"60px", opacity:"0"})
        // $("#menu-cont").toggleClass("open");
        $(this).toggleClass("close");
        $('body').toggleClass("scroll-stopped");
        $('.header-container').toggleClass("open");
        var menuOpen = new TimelineMax()
        
        if(!menuOpened){
            menuOpen.to(".header-menu", 0.3, {right: "100%"})
            menuOpen.from(".header-menu li a", 0.4 ,{
                y:"80px",
                opacity:"0",
                skewY:"30",
                stagger:{
                amount: 0.3, 
                from: "0",
            }})
            menuOpened = true
        }
        else{
            menuOpen.to(".header-menu li a", 0.4 ,{
                y:"80px",
                opacity:"0",
                skewY:"30",
                stagger:{
                amount: 0.3, 
                from: "2",
            }})
            menuOpen.to(".header-menu", 0.3, {right: "0"})
            menuOpen.reset()
            menuOpened = false
        }




        
    });
}); 

$("#enquiry").load("./enquiry.html", function(){
    //submit button glow
    const button = document.querySelector('button');
    console.log(button)

    button.addEventListener("mousemove", (e) => {
    const { x, y, width, height} = button.getBoundingClientRect();
    console.log(x, y, width, height)
    if((e.clientX > x && e.clientX < x+width)&&(e.clientY > y && e.clientY < y+height)){
        button.style.setProperty("--x", e.clientX - x);
        }
    });

    $('#another-enquiry').on('click', function(event){
        var enquirySubmit= new TimelineMax()
        enquirySubmit.to('.enquiry-submitted', 0.5, {opacity:0})
        enquirySubmit.to('.enquiry-loading', 0.5, {opacity:0}, "-=1")
        enquirySubmit.to('.enquiry-now', 0.5, {opacity:1})
    });

    $("#enquiry-form-form").submit(function( event ) {
 
        event.preventDefault();
       
        console.log("submitting")
        $('.enquiry-loading svg').addClass('loading')

        var enquirySubmit= new TimelineMax()
        
        enquirySubmit.to('.enquiry-now', 0.5, {opacity:0})
        enquirySubmit.to('.enquiry-loading', 0.5, {opacity:1})
        enquirySubmit.to('.enquiry-submitting', 0.5, {opacity:1}, "-=0.5")
        

        
        // Get some values from elements on the page:
        var $form = $( this ),
          name = $form.find( "input[name='name']" ).val(),
          email = $form.find( "input[name='email']" ).val(),
          message = $form.find( "input[name='message']" ).val(),
          url = "https://hooks.zapier.com/hooks/catch/9198386/bm6q71s/";
       
        // Send the data using post
        var posting = $.post( url, { name: name,email: email,message: message } );
       
        // Put the results in a div
        posting.done(function( data ) {
            console.log(data)
            setTimeout(function(){ 
                $('.enquiry-loading svg').removeClass('loading')
                $('.enquiry-loading svg').addClass('loaded')
                enquirySubmit.to('.enquiry-submitting', 0.5, {opacity:0})
                enquirySubmit.to('.enquiry-submitted', 0.5, {opacity:1})
            
            }, 1000);
            
            
        });
      });
      gsap.to('.fade-enquiry', 
        {
            scrollTrigger:{
                trigger: ".enquiry",
                start: "top 70%",
                end: "50px 40%",
                scrub: true,
                // markers: true,
            },
        opacity : 0,
        }
    )
      gsap.to(
        ['body', '.header'],
        {
            scrollTrigger:{
                trigger: ".enquiry",
                start: "top 70%",
                end: "50px 40%",
                scrub: true,
                // markers: true,
                onEnter() {
                    console.log("onEnter")
                    $('.header').addClass('dark');
                    
                },
                onLeave() {
                    console.log("onLeave")
                    // $('.header').removeClass('dark');
                },
                onEnterBack() {
                    console.log("onEnterBack")
                    // $('.header').addClass('dark');
                    
                },
                onLeaveBack() {
                    console.log("onLeaveBack")
                    $('.header').removeClass('dark');
                    if(thisPage != 'home') $('.header').css("background", "#fff")
                }
            },
            background:"#113"
        }
    )


    //home-page-header
    // gsap.to(
    //     '.header',
    //     {
    //         scrollTrigger:{
    //             trigger: ".bio",
    //             start: "top 100px",
    //             end: "bottom top",
    //             onEnter() {
    //                 console.log("onEnter")
    //                 $('.header').addClass('dark');
                    
    //             },
    //             onEnterBack() {
    //                 console.log("onEnterBack")
    //                 $('.header').addClass('dark');
    //             },
    //         },
    //         background:"#113"
    //     }
    // )

    gsap.to(
        'body',
        {
            scrollTrigger:{
                trigger: ".blogs",
                start: "top 60%",
                end: "bottom 40%",
                // scrub: true,
                // markers: true,
                onEnter() {
                    console.log("onEnter")
                    $('.header').removeClass('dark');
                    
                },
                onEnterBack() {
                    console.log("onEnterBack")
                    $('.header').removeClass('dark');
                },
                onLeave() {
                    console.log("onEnterBack")
                    $('.header').addClass('dark');
                },
                onLeaveBack() {
                    console.log("onEnterBack")
                    $('.header').addClass('dark');
                },
            },
            background:"#fff"
        }
    )
}); 





if(thisPage != 'home'){
    $('.header').addClass("show");
    const header = $('.header');
    if(thisPage == 'works-detail'){
        header.addClass('dark')
    }

        
        header.css("background", "#fff0")
// gsap.set('.header', {background:"#fff0", color:"#fff"})
// gsap.set('.header-logo', {"filter":"invert(100%) !important"})
        gsap.to(
            header,
            {
                scrollTrigger:{
                trigger: ".cover",
                start: "95% bottom",
                end: "95% top",
                scrub: true,
                // markers: true,
                onEnter() {
                    console.log("onEnter")
                    if(thisPage == 'works-detail') header.addClass('dark');
                    header.css("background", "#fff0")
                },
                onLeave() {
                    console.log("onLeave")
                    header.removeClass('dark');
                    header.css("background", "#fff")
                },
                onEnterBack() {
                    console.log("onEnterBack")
                    if(thisPage == 'works-detail') header.addClass('dark');
                    header.css("background", "#fff0")
                },
                onLeaveBack() {
                    console.log("onLeaveBack")
                    header.removeClass('dark');
                    header.css("background", "#fff")
                }
                },
                // background:"#fff"
            }
        )
}


$(document).ready(function(){
    //smooth scroll
    // let height
    // function setHeight() {
    // height = container.clientHeight
    // document.body.style.height = height + "px"
    // }
    // ScrollTrigger.addEventListener("refreshInit", setHeight)

    // gsap.to('body', {
    //     y: () => -(height - document.documentElement.clientHeight),
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: document.body,
    //       start: "top top",
    //       end: "bottom bottom",
    //       scrub: 0.5,
    //       invalidateOnRefresh: true
    //     }
    //   })
});





const layerTop = gsap.utils.toArray('.lyr-top');
const layerMid = gsap.utils.toArray('.lyr-mid');
const layerLow = gsap.utils.toArray('.lyr-low');

layerTop.forEach((el) => {
    gsap.set(el, {y:120})
  gsap.to(el, {
    scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        // markers: true,
    },
    y:-80
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
    y:-40
  });
});

layerLow.forEach((el) => {
    gsap.set(el, {y:0})
  gsap.to(el, {
    scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        // markers: true,
    },
    y:80
  });
});


var scrollIndication = new TimelineMax({repeat:-1})
scrollIndication.set([".scroll-jump", ".scroll-indicator p"], {y:0})
scrollIndication.fromTo(".scroll-jump", {y:0}, {duration:0.2, y:-100}, "+=6")
scrollIndication.fromTo(".scroll-jump", {y:-100}, {duration:0.3, y:0})
scrollIndication.fromTo(".scroll-jump", {y:0}, {duration:0.2, y:-100})
scrollIndication.fromTo(".scroll-jump", {y:-100}, {duration:0.5, y:0})
// scrollIndication.fromTo(".scroll-indicator p", {y:0}, {duration:0.2, y:-40})
// scrollIndication.fromTo(".scroll-indicator p", {y:-40}, {duration:0.3, y:0})
// scrollIndication.fromTo(".scroll-indicator p", {y:0}, {duration:0.2, y:-40})
// scrollIndication.fromTo(".scroll-indicator p", {y:-40}, {duration:0.6, y:0})

