$(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            console.log(scroll);
            if(scroll > 580){
                $('.header').addClass("show");
            }
            else{
                $('.header').removeClass("show");
            }
            
            if(scroll > 480 && scroll < 999){
                $('body').removeClass("background-black");
                $('body').addClass("background-turq");
                $('.header').css("background","#30f9dd");
                $('.header-logo').css("filter", "invert(0%)");
            }
            else if(scroll > 1000 && scroll < 3230){
                $('body').removeClass("background-turq");
                $('body').addClass("background-black");
                $('.header').css("background","#000");
                $('.header-logo').css("filter", "invert(100%)");
            }
            else{
                $('body').removeClass("background-black");
                $('body').removeClass("background-turq");
                $('.header').css("background","#fff");
                $('.header-logo').css("filter", "invert(0%)");
            }
            
            

            
            var layer_top = scroll*2;
            var layer_middle = scroll*1.5;
            var layer_bottom = scroll
            
//            $('.layer-top').css("transfom","translateY(" . layer_top . ")");
            
            
            console.log(layer_top);
        });