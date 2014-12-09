addEventListener("keydown", function(event) {
    if (event.keyCode == 73)
    	document.body.style.background = "black"; 
    	document.p.style.color = "white";
  });
  addEventListener("keyup", function(event) {
    if (event.keyCode == 73)
    	document.body.style.background = "";
    	document.p.style.color = "";

  });

WebFontConfig = {
    google: { families: [ 'Roboto+Condensed::latin', 'Share+Tech+Mono::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);

$(document).ready(main);