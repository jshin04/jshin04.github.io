$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
	if ($(window).scrollTop() > 600 ){
    
 		$('.bg').addClass('one');
    
  		} else {
    
    	$('.bg').removeClass('one');
    	
 		}; 

 	if ($(window).scrollTop() > 1200 ){
    
 		$('.bg').addClass('two');
    
  		} else {
    
    	$('.bg').removeClass('two');
    
 		}; 

 	if ($(window).scrollTop() > 1800 ){
    
 		$('.bg').addClass('three');
    
  		} else {
    
    	$('.bg').removeClass('three');
    
 		};     
 		
 	if ($(window).scrollTop() > 2400 ){
    
 		$('.bg').addClass('four');
    
  		} else {
    
    	$('.bg').removeClass('four');
    
 		}; 

 	if ($(window).scrollTop() > 3000 ){
    
 		$('.bg').addClass('five');
    
  		} else {
    
    	$('.bg').removeClass('five');
    
 		}; 

 	if ($(window).scrollTop() > 3600 ){
    
 		$('.bg').addClass('six');
    
  		} else {
    
    	$('.bg').removeClass('six');
    
 		}; 

 	if ($(window).scrollTop() > 4200 ){
    
 		$('.bg').addClass('seven');
    
  		} else {
    
    	$('.bg').removeClass('seven');
    
 		}; 

});
