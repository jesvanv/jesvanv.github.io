if($('#closer')) {
    $('#closer').on('click tap', function() {
      if(location.hostname === "localhost") {
        window.location = 'http://jcvanv.localhost';
      } else {
        window.location = 'http://www.jcvanv.com'
      }
    });
  }
