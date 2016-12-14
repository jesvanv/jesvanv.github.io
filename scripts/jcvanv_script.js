
function startShow() {

    "use strict";

    var width         = $(window).width(),
        webBox        = $('#webBox'),
        designBox     = $('#designBox'),
        illoBox       = $('#illoBox'),
        animationBox  = $('#animationBox'),
        thumbsHolder  = $('.thumbsHolder'),

        catLink       = $('.category-title a');

        $(catLink).on('click', function(e) {
          e.preventDefault();
          thumbsHolder.fadeOut();
          $('#' + this.name + 'Box').fadeIn();
        })

//Initiate Magnific Popups: -------------------------------------------

    $(".image_popup").magnificPopup({
        type: "image",
        tLoading: "Loading..."
       });

    $('.iframe_popup').magnificPopup({
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
    if($(window).width() < 500) {
      return false;
    }
    return true;
  }
         });


  $('.email_popup').magnificPopup({
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
    if($(window).width() < 500) {
      return false;
    }
    return true;
  }


    });

     $('.iframe_moonphase').magnificPopup({
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
    if($(window).width() < 500) {
      return false;
    }
    return true;
  }

    });

    $('.iframe_foodweb').magnificPopup({
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
    if($(window).width() < 500) {
      return false;
    }
    return true;
  }

    });

        $('.iframe_acceleration').magnificPopup({
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
    if($(window).width() < 500) {
      return false;
    }
    return true;
  }
    });

        $('.iframe_actionreaction').magnificPopup({
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
    if($(window).width() < 500) {
      return false;
    }
    return true;
  }
    });


    $('.iframe_site_popup').magnificPopup({
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
}
