
function startShow() {

    "use strict";

        var $j  = jQuery.noConflict(),
          width = $j(window).width();

    $j("#owlHolder").owlCarousel({
        singleItem: true,
        pagination: false,
        paginationNumbers: false,
    		slideSpeed: 1000,
    		navigation: true,
    		navigationText: ["<img src='images/back.png' />", "<img src='images/next.png' />"]
    });

    var owl = $j("#owlHolder").data("owlCarousel");


    $j(".owl-prev").css("opacity", "0");

    $j("#illoLink").click(function () {
        owl.goTo('0');
    });


    $j("#designLink").click(function () {
        owl.goTo('1');
    });

    $j("#animLink").click(function () {
        owl.goTo('2');
    });


    $j("#webLink").click(function () {
        owl.goTo('3');
    });





    if (width >= 800) {
        $j(".firstname").delay(1000).animate({opacity: 1}, 1000);
        $j(".lastname").delay(1700).animate({opacity: 1}, 1800);
        $j(".category_title").animate({left: "0%", opacity: 1}, 1000);
    }

    if (width <= 650) {
        $j(".firstname").delay(500).animate({opacity: 1}, 1000);
        $j(".lastname").delay(1200).animate({opacity: 1}, 500);
        $j(".category_title").delay(1600).animate({left: "0%", opacity: 1}, 1000);
    }

    $j("img").css({visibility: "visible"});

//Visit links animation:

	var clickVisitLink = $j(".clickText");

//Initiate Magnific Popups: -------------------------------------------

    $j(".image_popup").magnificPopup({
        type: "image",
        tLoading: "Loading..."
       });

    $j('.iframe_popup').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div style ="max-width:550px; min-height: 400px; text-align:center; position:relative; margin:0 auto">' +
                        '<div class="mfp-iframe-scaler" style ="max-width:550px; max-height:400px">' +
                            '<div class="mfp-close" ></div>' +
                                '<iframe class="mfp-iframe" style="max-width:550px !important; max-height:400px;" frameborder="0" allowfullscreen></iframe>' +
                            '<div class="mfp-title" style="margin-top:5em">Some caption</div>' + '</div>' +
                    '</div>'
        },

        callbacks: {
            markupParse: function (template, values, item) {
                values.title = item.el.attr('title');
            }
        },

         disableOn: function() {
    // Detect here whether you want to show the popup
    // return true if you want
    if($j(window).width() < 500) {
      return false;
    }
    return true;
  }
         });


  $j('.email_popup').magnificPopup({
        type: 'iframe',
        tLoading: "Loading...",
        iframe: {
            markup: '<div style ="max-width:515px; min-height: 400px; text-align:center; position:relative; margin:0 auto">' +
                        '<div class="mfp-iframe-scaler" style ="max-width:515px">' +
                            '<div class="mfp-close" ></div>' +
                                '<iframe class="mfp-iframe" style="max-width:515px !important;" frameborder="0" allowfullscreen></iframe>' +
                            '<div class="mfp-title" style="margin-top:7.5em">Some caption</div>' + '</div>' +
                    '</div>'
        },

        callbacks: {
            markupParse: function (template, values, item) {
                values.title = item.el.attr('title');
            }
        },

         disableOn: function() {
    // Detect here whether you want to show the popup
    // return true if you want
    if($j(window).width() < 500) {
      return false;
    }
    return true;
  }


    });

     $j('.iframe_moonphase').magnificPopup({
        type: 'iframe',
        tLoading: 'Loading...',
        iframe: {
            markup: '<div style ="max-width:530px; min-height: 405px; text-align:center; position:relative; margin:0 auto">' +
                        '<div class="mfp-iframe-scaler" style ="max-width:530px; max-height:405px; overflow:hidden !important">' +
                            '<div class="mfp-close" ></div>' +
                                '<iframe class="mfp-iframe" style="max-width:515px !important; max-height:405px; overflow-y:hidden !important" frameborder="0" allowfullscreen></iframe>' +
                            '<div class="mfp-title" style="margin-top:7em">Some caption</div>' + '</div>' +
                    '</div>'
        },

        callbacks: {
            markupParse: function (template, values, item) {
                values.title = item.el.attr('title');
            }
        },

          disableOn: function() {
    // Detect here whether you want to show the popup
    // return true if you want
    if($j(window).width() < 500) {
      return false;
    }
    return true;
  }

    });

    $j('.iframe_foodweb').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div style ="width:550px; height: 400px; text-align:center; position:relative; margin:0 auto">' +
                        '<div class="mfp-iframe-scaler" style ="width:550px; height:400px">' +
                            '<div class="mfp-close" ></div>' +
                                '<iframe class="mfp-iframe" style="width:550px !important; height:400px;" frameborder="0" allowfullscreen></iframe>' +
                            '<div class="mfp-title" style="margin-top:5em">Some caption</div>' + '</div>' +
                    '</div>'
        },

        callbacks: {
            markupParse: function (template, values, item) {
                values.title = item.el.attr('title');
            }
        },

         disableOn: function() {
    // Detect here whether you want to show the popup
    // return true if you want
    if($j(window).width() < 500) {
      return false;
    }
    return true;
  }

    });

        $j('.iframe_acceleration').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div style ="max-width:700px; min-height: 393px; height:393px; text-align:center; position:relative; margin:0 auto">' +
                        '<div class="mfp-iframe-scaler" style ="max-width:700px; max-height:393px">' +
                            '<div class="mfp-close" ></div>' +
                                '<iframe class="mfp-iframe" style="max-width:711px !important; max-height:393px;" frameborder="0" allowfullscreen></iframe>' +
                            '<div class="mfp-title" style="margin-top:0em">Some caption</div>' + '</div>' +
                    '</div>'
        },

        callbacks: {
            markupParse: function (template, values, item) {
                values.title = item.el.attr('title');
            }
        },

             disableOn: function() {
    // Detect here whether you want to show the popup
    // return true if you want
    if($j(window).width() < 500) {
      return false;
    }
    return true;
  }
    });

        $j('.iframe_actionreaction').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div style ="max-width:500px; min-height: 400px; text-align:center; position:relative; margin:0 auto">' +
                        '<div class="mfp-iframe-scaler" style ="max-width:500px; max-height:400px">' +
                            '<div class="mfp-close" ></div>' +
                                '<iframe class="mfp-iframe" style="max-width:500px !important; max-height:400px;" frameborder="0" allowfullscreen></iframe>' +
                            '<div class="mfp-title" style="margin-top:7em">Some caption</div>' + '</div>' +
                    '</div>'
        },

        callbacks: {
            markupParse: function (template, values, item) {
                values.title = item.el.attr('title');
            }
        },

             disableOn: function() {
    // Detect here whether you want to show the popup
    // return true if you want
    if($j(window).width() < 500) {
      return false;
    }
    return true;
  }
    });


    $j('.iframe_site_popup').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen>'+ '<iframe class="inner_window"></iframe></iframe>' +
                '<div class="mfp-title">Some caption</div>' +
                '</div>'
        },

        callbacks: {
            markupParse: function (template, values, item) {
                values.title = item.el.attr('title');
            }
        }
    });


     setInterval(function () {

        if (owl.currentItem == 0) {
            $j("#illoLink").addClass("categoryOn");
        }

        else {
            $j("#illoLink").removeClass("categoryOn");
        }

        if (owl.currentItem == 1) {
            $j("#designLink").addClass("categoryOn");
        }

        else {
            $j("#designLink").removeClass("categoryOn");
        }

         if (owl.currentItem == 2) {
            $j("#animLink").addClass("categoryOn");
        }

        else {
            $j("#animLink").removeClass("categoryOn");
        }

        if (owl.currentItem == 3) {
            $j("#webLink").addClass("categoryOn");
        }

        else {
            $j("#webLink").removeClass("categoryOn");
        }

    }, 33);



}



function runMasonry() {

    "use strict";



    var container1 = document.querySelector('#illoBox'),
        container2 = document.querySelector('#designBox'),
        container3 = document.querySelector('#animationBox'),
        container4 = document.querySelector('#webBox');

      $j('#illoBox').imagesLoaded( function() {

          var msnry = new Masonry(container1, {
                columnWidth: container1.querySelector('.grid-sizer'),
                "gutter": 10,
                itemSelector: '.item',
                isFitWidth: true,
                isResizeBound: true
            }),

            msnry2 = new Masonry(container2, {
                columnWidth: container1.querySelector('.grid-sizer'),
                "gutter": 10,
                itemSelector: '.item',
                isFitWidth: true,
                isResizeBound: true
            }),

            msnry3 = new Masonry(container3, {
                columnWidth: container1.querySelector('.grid-sizer'),
                "gutter": 10,
                itemSelector: '.item',
                isFitWidth: true,
                isResizeBound: true
            }),

            msnry4 = new Masonry(container4, {
                columnWidth: container1.querySelector('.grid-sizer'),
                "gutter": 10,
                itemSelector: '.item',
                isFitWidth: true,
                isResizeBound: true
            });

          $j('#loader').remove();

    });

}
