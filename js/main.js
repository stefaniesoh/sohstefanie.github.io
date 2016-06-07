;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Full height
	var fullHeight = function() {
		if ( !isiPhone() || !isiPad() ) {
			$('.js-full-height').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-full-height').css('height', $(window).height());
			});
		}
	};

	// Scroll Next
	var ScrollNext = function() {
		$('body').on('click', '.scroll-btn', function(e){
			e.preventDefault();

			$('html, body').animate({
				scrollTop: $( $(this).closest('[data-next="yes"]').next()).offset().top
			}, 1000, 'easeInOutExpo');
			return false;
		});
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	// Counter
	var counter = function() {
		$('.convrse-counter-style-1').waypoint( function( direction ) {
			var el = $(this.element).attr('class');
			if( direction === 'down' && !$(this.element).hasClass('animated')) {
				setTimeout( function(){
					// console.log($(this.element));
					$('.'+el).find('.js-counter').countTo({
						 formatter: function (value, options) {
				      	return value.toFixed(options.decimals);
				   	},
					});
				} , 200);
				
				$(this.element).addClass('animated');
					
			}
		} , { offset: '75%' } );


		$('.convrse-counter-style-2').waypoint( function( direction ) {
			var el = $(this.element).attr('class');
			if( direction === 'down' && !$(this.element).hasClass('animated')) {
				setTimeout( function(){
					$('.'+el).find('.js-counter').countTo({
						 formatter: function (value, options) {
				      	return value.toFixed(options.decimals);
				   	},
					});
				} , 200);
				
				$(this.element).addClass('animated');
					
			}
		} , { offset: '75%' } );
	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#convrse-offcanvass, .js-convrse-mobile-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	$('html').removeClass('mobile-menu-expanded');
	    	$('.js-convrse-mobile-toggle').removeClass('active');
	    }
		});
	};

	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-convrse-nav-toggle', function(event){
			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');	
			} else {
				$(this).addClass('active');	
			}
			event.preventDefault();
		});

	};

	// Off Canvass
	var offCanvass = function() {

		if ( $('#convrse-offcanvass').length == 0 ) {
			if ( $('.convrse-nav-style-1').length > 0 ) {
				$('body').prepend('<div id="convrse-offcanvass" />');

				$('.convrse-link-wrap').each(function(){
					$('#convrse-offcanvass').append($(this).find('[data-offcanvass="yes"]').clone());	
				})
				$('#convrse-offcanvass').find('.js-convrse-mobile-toggle').remove();
				$('#convrse-offcanvass, #convrse-page').addClass($('.convrse-nav-style-1').data('offcanvass-position'));
				$('#convrse-offcanvass').addClass('offcanvass-nav-style-1');
			}		
			
			if ( $('.convrse-nav-style-2').length > 0 ) {
				$('body').prepend('<div id="convrse-offcanvass" />');

				$('.convrse-link-wrap').each(function(){
					$('#convrse-offcanvass').append($(this).find('[data-offcanvass="yes"]').clone());	
				})
				$('#convrse-offcanvass').find('.js-convrse-mobile-toggle').remove();
				$('#convrse-offcanvass, #convrse-page').addClass($('.convrse-nav-style-2').data('offcanvass-position'));
				$('#convrse-offcanvass').addClass('offcanvass-nav-style-2');
			}			
		}

		$('body').on('click', '.js-convrse-mobile-toggle', function(e){
			var $this = $(this);
			$this.toggleClass('active');
			$('html').toggleClass('mobile-menu-expanded');

		});

		if ( $(window).width() < 769 ) {
			$('body, html').addClass('convrse-overflow');
		}

		$(window).resize(function(){
			if ( $(window).width() < 769 ) {
				$('body, html').addClass('convrse-overflow');
			}
			if ( $(window).width() > 767 ) {
				if ( $('html').hasClass('mobile-menu-expanded')) {
					$('.js-convrse-mobile-toggle').removeClass('active');
					$('html').removeClass('mobile-menu-expanded');
				}
			}
		});

	};


	// Magnific Popup
	
	var imagePopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 10,
			titleSrc: 'title',
			gallery:{
				enabled:false
			}
		});
	};
	
	
	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#convrse-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top convrse-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top convrse-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top convrse-animated slideInDown slideOutUp');
					}, 100 );
				}
			} 
			
		});
	};


	// Document on load.
	$(function(){

		fullHeight();
		ScrollNext();
		parallax();
		counter();
		mobileMenuOutsideClick();
		burgerMenu();
		imagePopup();
		offCanvass();


	});


}());