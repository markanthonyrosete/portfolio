;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 100, 'easeInOutExpo' );
					});
					
				}, 50);
				
			}

		} , { offset: '85%' } );
	};



	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	var pieChart = function() {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 4,
			lineCap: 'butt',
			barColor: '#FF9000',
			trackColor:	"#f5f5f5",
			size: 160,
			animate: 1000
		});
	};

	var skillsWayPoint = function() {
		if ($('#fh5co-skills').length > 0 ) {
			$('#fh5co-skills').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( pieChart , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}

	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	// Loading page
	var showModal = function() {
		$('.backoffice-js').on('click', function(event){
			event.preventDefault();
			document.getElementById("modalTitle").textContent = " Backoffice";
			document.getElementById("modalContent").innerHTML = "● Call back of Daily Transactions<br/>● Call back of Daily Transactions (TELLER)<br/>● Scanning of Backoffice Daily Transactions<br/>● Filing of Daily Transactions<br/>● Routing of Transactions for Signature<br/>● Assist CCTV Backup";
			document.getElementById("modal").style.display = "flex";
		});

		$('.salary-js').on('click', function(event){
			event.preventDefault();
			document.getElementById("modalTitle").textContent = " Salary Loan";
			document.getElementById("modalContent").innerHTML = "● Scanning of Daily Transactions<br/>● Scanning of Client’s Application Documents<br/> ● Filing of SL Client’s Documents; stamping “CLOSED” to mature/finished loans<br/>● Surveying Clients";
			document.getElementById("modal").style.display = "flex";
		});

		$('.new-js').on('click', function(event){
			event.preventDefault();
			document.getElementById("modalTitle").textContent = " New Accounts";
			document.getElementById("modalContent").innerHTML = "● Assisting Clients<br/>● ATM Cards Release<br/>● Filing of New Accounts/Dormant<br/>● Encoding of New Accounts Monitoring<br/>● Filing of Various Reports<br/>● EBS Records Checking<br/>● Scanning/Photocopying of Docs<br/>● Grooming New Accounts Docs<br/>● INTEGRAL 360";
			document.getElementById("modal").style.display = "flex";
		});

		$('.cashier-js').on('click', function(event){
			event.preventDefault();
			document.getElementById("modalTitle").textContent = " Cashier";
			document.getElementById("modalContent").innerHTML = "● Call back (PAYROLL)<br/>● Scanning of New Accounts Docs; Closed Accounts<br/>● EBS Records Checking<br/>● ATM Cards Release<br/>● Segregation of Closed Signature Cards<br/>● Sorting of Customer Records";
			document.getElementById("modal").style.display = "flex";
		});

		$('.head-js').on('click', function(event){
			event.preventDefault();
			document.getElementById("modalTitle").textContent = " Branch Head";
			document.getElementById("modalContent").innerHTML = "● Checking of CIFF Thru AB2 and ECI<br/>● Customer Survey-Lobby";
			document.getElementById("modal").style.display = "flex";
		});

	};

	var closeModal = function() {
		$('.close-js').on('click', function(event){
			
			event.preventDefault();

		  	document.getElementById("modal").style.display = "none";
		});

	};

	
	$(function(){
		contentWayPoint();
		goToTop();
		loaderPage();
		fullHeight();
		parallax();
		// pieChart();
		skillsWayPoint();
		showModal();
		closeModal();
	});


}());