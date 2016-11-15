function loadCSSFile (filename) {
    $("<link>", {
         rel: "stylesheet"
       , type: "text/css"
       , href: filename
    }).appendTo("head");
}

function setZoom () {
    $("<meta name='viewport' content='initial-scale=1, width=device-width, target-densitydpi=device-dpi, maximum-scale=1.0'>").appendTo("head");
}

if (window.top!=window.self) { 
    loadCSSFile("../styles/jcvanv_styles.css" );
} else { 
    loadCSSFile("../styles/animation_container.css");
	setZoom();
}



