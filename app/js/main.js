$(function(){ 
    $(".menu a").on("click", function (e) {   
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
    var mixer = mixitup('.portfolio__content');
    $('.slider-blog__inner').slick({
        dots: true,
        arrows: false
    });
});
