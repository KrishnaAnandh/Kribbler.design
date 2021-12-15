gsap.registerPlugin(ScrollTrigger)

$(document).ready(function(){
    $("#header").load("./header.html")

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
            $('input').val("");
            $('textarea').val("");
            enquirySubmit.to('.enquiry-submitted', 0.5, {opacity:0})
            enquirySubmit.to('.enquiry-loading', 0.5, {opacity:0}, "-=1")
            enquirySubmit.to('.enquiry-now', 0.5, {opacity:1})
        });

        $("#enquiry-form-form").submit(function( event ) {
    
            event.preventDefault();
        
            console.log("submitting")
            $('.enquiry-loading svg').addClass('loading')

            var enquirySubmit= new TimelineMax()
            
            
            // Get some values from elements on the page:
            var $form = $( this ),
            name = $form.find( "input[name='name']" ).val(),
            email = $form.find( "input[name='email']" ).val(),
            message = $form.find( "textarea[name='message']" ).val(),
            url = "https://enpaq89531mi6oi.m.pipedream.net";

            if( /(.+)@(.+){2,}\.(.+){2,}/.test(email) ){
                $("input[name='email']").removeClass('invalid');
                var posting = $.post( url, { name: name,email: email,message: message } );
                enquirySubmit.to('.enquiry-now', 0.5, {opacity:0})
                enquirySubmit.to('.enquiry-loading', 0.5, {opacity:1})
                enquirySubmit.to('.enquiry-submitting', 0.5, {opacity:1}, "-=0.5")
            } else {
                $("input[name='email']").addClass('invalid');
            }
        
            // Send the data using post
            
        
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

        var tlEnquiryIn= new TimelineMax()
        ScrollTrigger.create({
            animation: tlEnquiryIn,
            trigger: ".enquiry",
            start: "top 70%",
            end: "50px 40%",
            scrub: true,
            // markers: true,
            onEnter() {
                console.log("onEnter")
                $('.header').addClass('dark');
                
            },
            onLeaveBack() {
                console.log("onLeaveBack")
                $('.header').removeClass('dark');
                if(thisPage != 'home') $('.header').css("background", "#fff")
            }
        })
        if(thisPage == 'home1'){
            // tlEnquiryIn.to('body',1, {background: "#000"})
            tlEnquiryIn.fromTo(['body', '.header'],{background:"#eef"},{duration:1, delay:1, background:"#113"})}
        else{
            tlEnquiryIn.to(['body', '.header'],1,{delay:1, background:"#113"})} 
        
    }); 
})




$(document).ready(function(){
if(thisPage != 'home'){
    $('.header').addClass("show");
    const header = $('.header');
    if(thisPage == 'works-detail'){
        console.log("applied dark")
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
})


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

