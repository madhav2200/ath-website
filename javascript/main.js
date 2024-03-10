$(document).ready(function(){

	$(window).scroll(function(){                                 /*** for smooth scroll and fixed nav  ***/
		var sc = $(window).scrollTop();
		 if( sc > 100 ) {
		 	$(".nav").addClass("sticky");
		 }
		  else {
		 	$(".nav").removeClass("sticky");
		 } 	
	});


	/*js script fo portfolio magnificpopup
    
    $('.gallerys').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
                enabled : true
            }

  // other options
  
});        
*/
});




