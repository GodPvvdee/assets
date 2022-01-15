var iScrollPos = 0;
$(window).scroll(function () {
	if ($(window).scrollTop() >= 260) {
		$(".sub-menu").removeClass("d-block");
	}
});

$(document).ready(function () {
	// $(".menu a").click(function (e) {
	// 	if ($(this).hasClass('mh-dropdown')) {
	// 		e.preventDefault();
	// 		let ddmenuid = $(this).attr('nhd-target');
	// 		$(".header-menu-dd .container").removeClass('d-block');
	// 		$(".header-menu-dd").toggleClass('d-block');
	// 		$("#" + ddmenuid).addClass('d-block');
	// 	}
	// });

	// $(".menu>li>a").click(function (e) {
	// 	$(".sub-menu").removeClass("d-block");
	// 	$(this).next().addClass("d-block");
	// });


	$(".video-wrap").click(function (e) {
		$(this).children('.vw-hover').addClass('hide-hover');
		$(this).children('.video').addClass('show');
		let videourl = $(this).children('.video').attr('data-videourl');
		$(this).find('iframe').attr('src', videourl);
	});
	$(".hr-box1").click(function (e) {
		$(".hr-box1").removeClass('active');
		$(this).addClass('active');
		let targetID = $(this).attr('hr-target');
		$(".hr-target").removeClass('d-block');
		$("#" + targetID).addClass('d-block');

	});

	$(".thbz-item").click(function (e) {
		$(".thbz-item").removeClass('active');
		$(this).addClass('active');
		let targetID = $(this).attr('hr-target');
		$(".hr-target").removeClass('d-block');
		$("#" + targetID).addClass('d-block');

	});


	$('.companyModal').on('show.bs.modal', function (e) {
		setTimeout(function () {
			var swiperCompany = new Swiper('.company-slider', {
				navigation: {
					nextEl: '.swiper-button-custom-next',
					prevEl: '.swiper-button-custom-prev',
				},
			});
		}, 500);
	});


	$(".close-member-item").click(function (e) {
		e.preventDefault();
		$(".member-modal-wrap ").removeClass('show');
		// $(".members-list ").removeClass('d-none');
	});
	$(".member-modal-wrap").click(function (e) {
		e.preventDefault();
		$(".member-modal-wrap ").removeClass('show');
		// $(".members-list ").removeClass('d-none');
	});

});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

jQuery(function ($) {
	// custom formatting example
	$('.count-number').data('countToOptions', {
		formatter: function (value, options) {
			return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',').replace(/\.00$/, '');
		}
	});

	$(window).scroll(function () {
		var wh = $(window).height();
		let scroll_pos = $(this).scrollTop();
		$(".timer").each(function () {
			var oTop = $(this).offset().top,
				oBottom = $(this).offset().top + $(this).height();
			var spBottom = scroll_pos + wh;

			if (oTop < spBottom && scroll_pos < oBottom) {
				if (!$(this).hasClass('counted')) {
					$(this).addClass('counted')
					$(this).each(count)
				}
			} else {
				// $(this).removeClass('counted')
			}
		});

		$(".ab-animate-prog").each(function () {
			var oTop = $(this).offset().top,
				oBottom = $(this).offset().top + $(this).height();
			var spBottom = scroll_pos + wh;

			let width = $(this).attr('data-width');
			if (oTop < spBottom && scroll_pos < oBottom) {
				if (!$(this).hasClass('animate-done')) {
					$(this).animate({
						width: width + "%"
					}, 0);
					$(this).addClass('animate-done')
				}
			} else {
				// $(this).removeClass('animate-done')
			}
		});
	});



	// start all the timers
	$('.timer').each(count);

	function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
	}
});

