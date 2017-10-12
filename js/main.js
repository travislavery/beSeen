var actionBegin = (function() {
	setSectionHeight();
	affixNavbar();
	$(document).click(function (e) {
  		e.stopPropagation();
   		var container = $("#navbarTop");
   		if (container.has(e.target).length === 0 && $('#navCollapsed').attr('aria-expanded') === 'true') {
       		$('#navbarToggleBtn').click();
        }
	})

	$('#navbarTop').on('affix.bs.affix', fixNavbarHeight);
	$('#navbarTop').on('affix-top.bs.affix', fixNavbarHeight);
	var $navs = $('body').find('nav a')
	$($navs).on('click', function(event) {
		if (this.hash !== '') {
			event.preventDefault();
			var hash= this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top-75
			}, 800);
		}
	})

	
})()

function affixNavbar() {
	var topE = $('#aboutUs').offset().top - 100;
	$('#navbarTop').affix({
		offset: {
		top: topE,
		}
	});
}	

function checkOffsetTop (object) {
	$("'"+object+"'").offset().top;
}

function setSectionHeight() {
	var $mainSections = $('.mainSection');
	setHeight100($mainSections);
}

function setHeight100(object) {
	object.css('height', '100%');
}

function fixNavbarHeight() {
	$("#navbarTop").toggleClass('ninetyFromTop fiveFromTop');
	$("#navbarTop").toggleClass('navbar-inverse');
}