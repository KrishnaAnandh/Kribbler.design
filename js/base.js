$("#header").load("./header.html", function() {
    $('#menu-icon').on('click', function(){
        console.log("click detected")
        $("#menu-cont").toggleClass("open");
        $(this).toggleClass("close");
        $('body').toggleClass("scroll-stopped");
        $('.header-container').toggleClass("open");
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
    console.log("click detected")
    //menu-icon

    
    // $('#enquiry-submit').on('submit', function(event){
    //     event.preventDefault();
    //     console.log("click detected")
    //     gsap.to('.enquiry-now', 1, {opacity:0})
    //     gsap.to('.enquiry-submit', 1, {opacity:1})
    // });
    // $("#enquiry-form-form").submit(function(e){
    //     return false;
    // });
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

