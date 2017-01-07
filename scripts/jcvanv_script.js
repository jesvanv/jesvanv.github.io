function startShow( ) {

  var width = $( window ).width( ),
      name = $( '.firstname' ),
      gallery = $( '#gallery' ),
      galleryHeight = $( '#gallery' ).css( 'height' ),
      webBox = $( '#webBox' ),
      designBox = $( '#designBox' ),
      illoBox = $( '#illoBox' ),
      animationBox = $( '#animationBox' ),
      thumbsHolder = $( '.thumbsHolder' ),
      thumbLink = $( '.thumbsHolder > a' ),
      close = $( '.close' ),
      closeTopMargin = $( '.close' ).css( 'marginTop' ),
      catLink = $( '.category-titles a' ),
      footerP = $( 'footer' ).find( 'p' ),
      blueColor = '#336699',
      brownColor = '#996A33',
      purpleColor = '#753399',
      redColor = '#993333',
      noPopupWidth = '767';

  $( catLink ).on( 'click tap', function( e ) {
    e.preventDefault( );
    self = this;
    $( close ).fadeIn( );
    if ( $( window ).width( ) > 767 ) {
      $( gallery ).animate({ height: '70vh' });
      $( '#' + self.name + 'Box' ).animate({ top: 0, height: '100%' });
      $( 'body' ).animate({ padding: '0' });
    } else {
      $( gallery ).animate({ height: '75vh' });
      $( '#' + self.name + 'Box' ).animate({ top: 0, height: '100%' });
    }
    if ( self.name == "web" ) {
      $( gallery ).css({ 'borderColor': blueColor });
      $( close ).css({ 'backgroundColor': blueColor });
      $( name ).css({ 'color': blueColor });
    }
    if ( self.name == "design" ) {
      $( gallery ).css({ 'borderColor': brownColor });
      $( close ).css({ 'backgroundColor': brownColor });
      $( name ).css({ 'color': brownColor });
    }
    if ( self.name == "animation" ) {
      $( gallery ).css({ 'borderColor': purpleColor });
      $( close ).css({ 'backgroundColor': purpleColor });
      $( name ).css({ 'color': purpleColor });
    }
    if ( self.name == "illo" ) {
      $( gallery ).css({ 'borderColor': redColor });
      $( close ).css({ 'backgroundColor': redColor });
      $( name ).css({ 'color': redColor });
    }

  });

  $( close ).on( 'click', function( ) {
    self = this;
    resetColors( );
    $( thumbsHolder ).animate({
      top: '100%',
      height: '70vh'
    }, { queue: false });
    $( self ).fadeOut( );
    $( gallery ).animate({ height: galleryHeight });
    if ( $( window ).width( ) > 767 ) {
      $( 'body' ).animate({ padding: '5% 0' });
    }
  });

  function resetColors( color = '#A4E449' ) {
    $( gallery ).css({ 'borderColor': color });
    $( close ).css({ 'backgroundColor': color });
    $( name ).css({ 'color': color });
  }

  $( '#email' ).html( '<a href="mailto:' +
    'jesvanv@comcast.net">Contact</a>' );

  /* Lock body when popup is open
   $(thumbLink).on('click', function() {
            $(body).addClass('body-lock');
          });

        $('.mfp-close').on('click', function() {
          if($('body').hasClass('body-lock')){
            $(body).removeClass('body-lock');
          }
        }); */

  //Initiate Magnific Popups: -------------------------------------------
  $( ".image_popup" ).magnificPopup({ type: "image", tLoading: "Loading..." });

  $( '.iframe_popup' ).magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div style ="max-width:550px; min-height: 400px; text-align:center; position:relative; margin:0 auto">' + '<div class="mfp-close" ></div>' + '<div class="mfp-iframe-scaler" style ="width: 550px; max-width:550px; max-height:400px">' + '<iframe class="mfp-iframe" style="max-width:550px !important; max-height:400px;" frameborder="0" allowfullscreen></iframe>' + '<div class="mfp-title" style="margin-top:5em">Some caption</div>' + '</div>' + '</div>'
    },

    callbacks: {
      markupParse: function( template, values, item ) {
        values.title = item.el.attr( 'title' );
      }
    },

    disableOn: function( ) {
      // Detect here whether you want to show the popup
      // return true if you want
      if ( $( window ).width( ) < noPopupWidth ) {
        return false;
      }
      return true;
    }
  });

  $( '.email_popup' ).magnificPopup({
    type: 'iframe',
    tLoading: "Loading...",
    iframe: {
      markup: '<div style ="width: 80vw; max-width:515px; min-height: 400px; text-align:center; position:relative; margin:0 auto">' + '<div class="mfp-iframe-scaler" style ="max-width:515px">' + '<div class="mfp-close" ></div>' + '<iframe class="mfp-iframe" style="max-width:515px !important;" frameborder="0" allowfullscreen></iframe>' + '<div class="mfp-title" style="margin-top:7.5em">Some caption</div>' + '</div>' + '</div>'
    },

    callbacks: {
      markupParse: function( template, values, item ) {
        values.title = item.el.attr( 'title' );
      }
    },

    disableOn: function( ) {
      // Detect here whether you want to show the popup
      // return true if you want
      if ( $( window ).width( ) < noPopupWidth ) {
        return false;
      }
      return true;
    }

  });

  $( '.iframe_moonphase' ).magnificPopup({
    type: 'iframe',
    tLoading: 'Loading...',
    iframe: {
      markup: '<div style ="width: 50vw; max-width:530px; min-height: 405px; text-align:center; position:relative; margin:0 auto">' + '<div class="mfp-iframe-scaler" style ="max-width:530px; max-height:405px; overflow:hidden !important">' + '<div class="mfp-close" ></div>' + '<iframe class="mfp-iframe" style="max-width:515px !important; max-height:405px; overflow-y:hidden !important" frameborder="0" allowfullscreen></iframe>' + '<div class="mfp-title" style="margin-top:7em">Some caption</div>' + '</div>' + '</div>'
    },

    callbacks: {
      markupParse: function( template, values, item ) {
        values.title = item.el.attr( 'title' );
      }
    },

    disableOn: function( ) {
      // Detect here whether you want to show the popup
      // return true if you want
      if ( $( window ).width( ) < noPopupWidth ) {
        return false;
      }
      return true;
    }

  });

  $( '#webBox .image_popup.item01' ).magnificPopup({
    type: 'image',
    items: [
      {
        src: '/images/vm_screen.jpg'
      }, {
        src: '/images/vm_screen_2.jpg'
      }, {
        src: '/images/vm_screen_3.jpg'
      }, {
        src: '/images/vm_screen_4.jpg'
      }, {
        src: '/images/vm_screen_5.jpg'
      }
    ],
    gallery: {
      enabled: true,
      tcounter: ''
    },
    image: {
      markup: '<div class="mfp-figure">' + '<button title="Close (Esc)" type="button" class="mfp-close">x</button>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="description"><p><span class="imageTitle">Website Front End &amp; Development</span><span class="credit">&copy; Isabella Products</span></p><p>Responsible for managing front end concerns and improvements. Implemented a responive design for all pages and views of site. Working in a MVC framework, managing and implementing CSS, HTML and PHP improvements and solutions.</p></div>' + '</div>' + '</div>',
      titleSrc: 'title'
    },
    callbacks: {
      buildControls: function( ) {
        // re-appends controls inside the main container
        this.contentContainer.append(this.arrowLeft.add( this.arrowRight ));
      }
    }
  });

  $( '#webBox .image_popup.item02' ).magnificPopup({
    type: 'image',
    items: [
      {
        src: '/images/teacher-dash.jpg'
      }, {
        src: '/images/teacher-project-overview.jpg'
      }, {
        src: '/images/teacher-projects.jpg'
      }, {
        src: '/images/teacher-thinkspace.jpg'
      }, {
        src: '/images/teacher-group-manager.jpg'
      }
    ],
    gallery: {
      enabled: true,
      tcounter: ''
    },
    image: {
      markup: '<div class="mfp-figure">' + '<button title="Close (Esc)" type="button" class="mfp-close">x</button>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="description"><p><span class="imageTitle">Teacher Student Web App&amp; UI/UX Design</span><span class="credit">&copy; Isabella Products</span></p><p>This is conceptual UI developed based on input and feedback from team members before the start of code development. Using Adobe Illustrator and Proto.io.</p></div>' + '</div>' + '</div>',
      titleSrc: 'title'
    },
    callbacks: {
      buildControls: function( ) {
        // re-appends controls inside the main container
        this.contentContainer.append(this.arrowLeft.add( this.arrowRight ));
      }
    }
  });

  $( '#webBox .image_popup.item03' ).magnificPopup({
    type: 'image',
    items: [
      {
        src: '/images/fr_login.jpg'
      }, {
        src: '/images/fr_bookshelf.jpg'
      }, {
        src: '/images/fr_search.jpg'
      }, {
        src: '/images/fr_book_ui.jpg'
      }, {
        src: '/images/fr_help.jpg'
      }
    ],
    gallery: {
      enabled: true,
      tcounter: ''
    },
    image: {
      markup: '<div class="mfp-figure">' + '<button title="Close (Esc)" type="button" class="mfp-close">x</button>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="description"><p><span class="imageTitle">eReader App UI &amp; Development</span><span class="credit">&copy; Isabella Products</span></p><p>UI for native iOS and Android eReader. Developed all aspects of UI design and implmented and improved UX using native code using Android Studio, and HMTL/CSS/JS for WebView interfaces.</p></div>' + '</div>' + '</div>',
      titleSrc: 'title'
    },
    callbacks: {
      buildControls: function( ) {
        // re-appends controls inside the main container
        this.contentContainer.append(this.arrowLeft.add( this.arrowRight ));
      }
    }
  });

  $( '.iframe_foodweb' ).magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div style ="width:550px; height: 400px; text-align:center; position:relative; margin:0 auto">' + '<div class="mfp-iframe-scaler" style ="width:550px; height:400px">' + '<div class="mfp-close" ></div>' + '<iframe class="mfp-iframe" style="width:550px !important; height:400px;" frameborder="0" allowfullscreen></iframe>' + '<div class="mfp-title" style="margin-top:5em">Some caption</div>' + '<div class="description" style="margin-top:6em">Animation to illustrate how food webs in nature. Used Flash with Actionscript to create a drag-and-drop game to help teach these concepts.</div>' + '</div>' + '</div>'
    },

    callbacks: {
      markupParse: function( template, values, item ) {
        values.title = item.el.attr( 'title' );
      }
    },

    disableOn: function( ) {
      // Detect here whether you want to show the popup
      // return true if you want
      if ( $( window ).width() < noPopupWidth ) {
        return false;
      }
      return true;
    }

  });

  $( '.iframe_acceleration' ).magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div style =" width: 50vw; max-width:700px; min-height: 400px; height:400px; text-align:center; position:relative; margin:0 auto">' + '<div class="mfp-close" ></div>' + '<div class="mfp-iframe-scaler" style ="max-width:700px; max-height:400px">' + '<iframe class="mfp-iframe" style="max-width:711px !important; max-height:400px;" frameborder="0" allowfullscreen></iframe>' + '<div class="mfp-title" style="margin-top:0em">Some caption</div>' + '</div>' + '</div>'
    },

    callbacks: {
      markupParse: function( template, values, item ) {
        values.title = item.el.attr( 'title' );
      }
    },

    disableOn: function( ) {
      // Detect here whether you want to show the popup
      // return true if you want
      if ( $( window ).width( ) < noPopupWidth ) {
        return false;
      }
      return true;
    }
  });

  $( '.iframe_actionreaction' ).magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div style ="max-width:500px; min-height: 400px; text-align:center; position:relative; margin:0 auto">' + '<div class="mfp-iframe-scaler" style ="max-width:500px; max-height:400px">' + '<div class="mfp-close" ></div>' + '<iframe class="mfp-iframe" style="max-width:500px !important; max-height:400px;" frameborder="0" allowfullscreen></iframe>' + '<div class="mfp-title" style="margin-top:7em">Some caption</div>' + '</div>' + '</div>'
    },

    callbacks: {
      markupParse: function( template, values, item ) {
        values.title = item.el.attr( 'title' );
      }
    },

    disableOn: function( ) {
      // Detect here whether you want to show the popup
      // return true if you want
      if ( $( window ).width( ) < noPopupWidth ) {
        return false;
      }
      return true;
    }
  });

  $( '.iframe_site_popup' ).magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen>' + '<iframe class="inner_window"></iframe></iframe>' + '<div class="mfp-title">Some caption</div>' + '</div>'
    },

    callbacks: {
      markupParse: function( template, values, item ) {
        values.title = item.el.attr( 'title' );
      }
    }
  });

}
