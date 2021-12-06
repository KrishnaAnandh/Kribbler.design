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
        var enquirySubmit= new TimelineMax()
        
        enquirySubmit.to('.enquiry-now', 0.5, {opacity:0})
        enquirySubmit.to('.enquiry-loading', 0.5, {opacity:1})
        enquirySubmit.to('.enquiry-submitting', 0.5, {opacity:1}, "-=0.5")
        enquirySubmit.to('.enquiry-submitting', 0.5, {opacity:0}, "+=3")
        enquirySubmit.to('.enquiry-submitted', 0.5, {opacity:1})
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
            enquirySubmit.to('.enquiry-submitting', 0.5, {opacity:0})
            enquirySubmit.to('.enquiry-submitted', 0.5, {opacity:1})
        });
      });
      
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
                $('.header').addClass('dark');
                
            },
            onLeave() {
                // $('.header').removeClass('dark');
            },
            onEnterBack() {
                // $('.header').addClass('dark');
                
            },
            onLeaveBack() {
                $('.header').removeClass('dark');
            }
            },
            background:"#113"
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
                start: "bottom 10px",
                // end: "bottom bottom",
                scrub: true,
                // markers: true,
                onEnter() {
                    header.removeClass('dark');
                    header.css("background", "#fff")
                },
                onLeave() {
                    // header.addClass('dark');
                },
                onEnterBack() {
                    header.removeClass('dark');
                    header.css("background", "#fff")
                },
                onLeaveBack() {
                    header.addClass('dark');
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

