
(function ($) {
	"use strict";


  /*---background image---*/

		$('[data-bgimg]').each(function () {
			var bgImgUrl = $(this).data('bgimg');
			$(this).css({
				'background-image': 'url(' + bgImgUrl + ')', // + meaning concat
			});
		});

/*=============================================
	=    		Mobile Menu			      =
=============================================*/
//SubMenu Dropdown Toggle
if ($('.menu-area li.dropdown ul').length) {
	$('.menu-area .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

}

//Mobile Nav Hide Show
if ($('.mobile-menu').length) {

	var mobileMenuContent = $('.menu-area .main-menu').html();
	$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

	//Dropdown Button
	$('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(500);
	});
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	});
}


/*=============================================
	=    	   Data Background  	         =
=============================================*/


$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})


/*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
		$('.scroll-to-target').removeClass('open');

	} else {
		$("#sticky-header").addClass("sticky-menu");
		$('.scroll-to-target').addClass('open');
	}
});



 /*---slider activation---*/
    var $slider = $('.slider_area');
    if($slider.length > 0){
        $slider.owlCarousel({
            animateOut: 'fadeOut',
            loop: true,
            nav: false,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 1,
            dots:true,
        });
    }


/*=============================================
	=    		 Wow Active  	         =
=============================================*/
function wowAnimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}
/*************************
         Isotope
*************************/



    /* ---- For Footer Start ---- */

    var $headingFooterhome3 = $("footer h3");
    $(window)
        .resize(function () {
            if ($(window).width() <= 768) {
                $headingFooterhome3.attr("data-toggle", "collapse");
            } else {
                $headingFooterhome3.removeAttr("data-toggle", "collapse");
            }
        })
        .resize();
    $headingFooterhome3.on("click", function () {
        $(this).toggleClass("opened");
    });

    $("#iconfooter3 h3").click(function () {
        $(this).next("ul").slideToggle(1000);
        $(this).find("em").toggleClass("fa-angle-down fa-angle-up");
    });
  /* ---- For Footer End ---- */

      /*--- team carousel sec---*/
    var $teamcarousel = $(".team-carousel");
    if ($teamcarousel.length > 0) {
        $teamcarousel
            .on(
                "changed.owl.carousel initialized.owl.carousel",
                function (e) {
                    $(e.target)
                        .find(".owl-item")
                        .removeClass("last")
                        .eq(e.item.index + e.page.size - 1)
                        .addClass("last");
                }
            )
            .owlCarousel({
                loop: true,
                nav: true,
                autoplay: false,
                autoplayTimeout: 8000,
                items: 3,
                rtl:false,
                dots: false,
                margin: 10,
                navText: [
                    '<i class="fas fa-chevron-left"></i>',
                    '<i class="fas fa-chevron-right"></i>',
                ],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    576: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 4,
                    },
                    1200: {
                        items: 5,
                    },
                },
            });
    }

 /*---single product activation---*/
     var $singleProductActive = $('.single-product-active');
        if($singleProductActive.length > 0){
        $('.single-product-active').owlCarousel({
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 4,
            margin:15,
            dots:false,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsiveClass:true,
            responsive:{
                    0:{
                    items:1,
                },
                320:{
                    items:2,
                },
                400:{
                    items:3,
                },
                992:{
                    items:3,
                },
                1200:{
                    items:4,
                },


              }
        });
    }


})(jQuery);


// product tab

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    mayaniRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) mayaniAddClass(x[i], "show");
  }
}

function mayaniAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function mayaniRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

$(document).ready(function() {
$(".btn1").click(function () {
    $(".btn1").removeClass("active");
    $(this).addClass("active");
});
});
