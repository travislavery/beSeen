var actionBegin = (function() {
	affixNavbar();
	checkNavbarPosition();
	$(document).click(function (e) {
  		e.stopPropagation();
   		var container = $("#navbarTop");
   		if (container.has(e.target).length === 0 && $('#navCollapsed').attr('aria-expanded') === 'true') {
       		$('#navbarToggleBtn').click();
        }
	})
	$('.testBtn').bind('mouseenter', testFunction).bind('mouseleave', leftTest);
	$('#navbarTop').on('affix.bs.affix', goingDown);
	$('#navbarTop').on('affixed.bs.affix', checkNavbarPosition);
	$('#navbarTop').on('affix-top.bs.affix', goingUp);
	$('#navbarTop').on('affixed-top.bs.affix', checkNavbarPosition);

	$('#contactUsBtn').on('click', enlargeContactDiv);
	var $navs = $('body').find('nav a');
	$($navs).on('click', function(event) {
		if (this.hash !== '') {
			event.preventDefault();
			var hash= this.hash;
			$('html, body').animate({
				scrollTop: checkOffsetTop(hash) - 75
			}, 800);
		}
	});
})()

function testFunction() {
	var self = $(this);
	var moreDeg = 0;
	this.iid= setInterval(function() {
		self.animate({ fakeChange: 100}, {
			step: function() {
				self.css({
					"-webkit-transition": 'width 2s',
					"-webkit-transform": 'rotateZ('+moreDeg+'deg)'
				});
			}, duration:50
		}, 50);
		moreDeg += 3;
	}, 50);
}

function leftTest() {
	var self = $(this);
	self.animate({ fakeChange: 100}, {
		step: function() {
			self.css({
				//width: '70px',
				//"-webkit-transform": 'rotate(0deg)'
			});
		}, duration:50
	},50);
	this.iid && clearInterval(this.iid);
}

// function leftTest() {
// 	var self = $(this);
// 	self.animate({
// 		width: '70px',
// 		"-webkit-transform": 'rotate(0deg)'
// 	}, 500);
// 	this.iid && clearInterval(this.iid);
// }

function affixNavbar() {
	var topE = checkOffsetTop('#aboutUs') - 75;
	$('#navbarTop').affix({
		offset: {
		top: topE,
		}
	});
}	

function checkOffsetTop (object) {
	var offsetFromTop = $(object).offset().top;
	return offsetFromTop;
}

function goingDown() {
	fixNavbarHeight();
	$('#navbarTop').animate({
		opacity: '1'
	},  'slow');
}

function goingUp() {
	fixNavbarHeight();
	$('#navbarTop').animate({
		opacity: '0'
	}, 'slow');
}

function fixNavbarHeight() {
	$("#navbarTop").toggleClass('ninetyFromTop fiveFromTop');
	$("#navbarTop").toggleClass('navbar-inverse');	
}

function enlargeContactDiv() {
	$('#contactUs').toggleClass('contactShrink contactEnlarged well');
	$('#contactUsBtn').toggleClass('btnShrink btnEnlarge');
	//$('#contactBtnImage').attr('src', '../assets/arrowdown.png');
	//$('#contactBtnImage').toggleClass('btnImgShrink btnImgEnlarge');
}

function checkNavbarPosition() {
	var $navbarTop = $('#navbarTop');
	if($navbarTop.hasClass('fiveFromTop') && $navbarTop.hasClass('affix-top')) {
		$navbarTop.removeClass('navbar-inverse fiveFromTop');
		$navbarTop.addClass('ninetyFromTop');
		$navbarTop.css('opacity', '1');
	} else if ($navbarTop.hasClass('ninetyFromTop') && $navbarTop.hasClass('affix')) {
		$navbarTop.removeClass('ninetyFromTop');
		$navbarTop.addClass('fiveFromTop navbar-inverse');
		$navbarTop.css('opacity', '1');
	}
}
