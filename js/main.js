(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);

window.Promise ||
document.write(
  '<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"><\/script>'
)
window.Promise ||
document.write(
  '<script src="https://cdn.jsdelivr.net/npm/eligrey-classlist-js-polyfill@1.2.20171210/classList.min.js"><\/script>'
)
window.Promise ||
document.write(
  '<script src="https://cdn.jsdelivr.net/npm/findindex_polyfill_mdn"><\/script>'
)


var _seed = 42;
Math.random = function() {
  _seed = _seed * 16807 % 2147483647;
  return (_seed - 1) / 2147483646;
};

new Vue({
	el: '#app',
	components: {
	  apexchart: VueApexCharts,
	},
	data: {
	  
	  series: [30, 30, 5, 25, 10],
	  chartOptions: {
		chart: {
		  width: '100%',
		  type: 'pie',
		},
		labels: ["Programação", "Análise Estatística","Business Intelligence", "Análise de Dados","Web Design"],
		theme: {
		  monochrome: {
			enabled: false,
			color: '#9c0d0d',
			shadeTo: 'light',
			shadeIntensity: 0.8
		  }
		},
		plotOptions: {
		  pie: {
			dataLabels: {
			  offset: -5
			}
		  }
		},
		title: {
		  text: "INTERESSE PROFISSIONAL"
		},
		dataLabels: {
		  formatter(val, opts) {
			const name = opts.w.globals.labels[opts.seriesIndex]
			return [val.toFixed(1) + '%']
		  }
		},
		legend: {
		  show: true
		}
	  },
	  
	  
	},
	
  })


  // Data retrieved from https://netmarketshare.com/
// Make monochrome colors
const colors = Highcharts.getOptions().colors.map((c, i) =>
// Start out with a darkened base color (negative brighten), and end
// up with a much brighter color
Highcharts.color(Highcharts.getOptions().colors[1])
	.brighten((i - 3) / 7)
	.get()
);

// Data retrieved from https://netmarketshare.com
Highcharts.chart('container', {
chart: {
	plotBackgroundColor: null,
	plotBorderWidth: null,
	plotShadow: false,
	type: 'pie'
},
title: {
	text: '',
	align: 'center'
},
tooltip: {
	pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
},
accessibility: {
	point: {
		valueSuffix: '%'
	}
},
plotOptions: {
	pie: {
		allowPointSelect: false,
		cursor: 'pointer',
		colors,
		borderRadius: 0,
		dataLabels: {
			enabled: true,
			format: '<b>{point.name}</b>'
		}
	}
},
series: [{
	name: 'Interesse',
	colorByPoint: true,
	data: [{
		name: 'Programação',
		y: 30,
		sliced: false,
		selected: false,
	}, {
		name: 'Análise Estatística',
		y: 30
	},  {
		name: 'Business Intelligence',
		y: 5
	}, {
		name: 'Análise de Dados',
		y: 25
	}, {
		name: 'Web Design',
		y: 10
	}]
}]
});
