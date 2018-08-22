$(document).ready(function() {
	var current;
	$.scrollify({
		section:".box",
		setHeights: false,
		scrollSpeed: 1100,
		scrollbars: false,
		easing:"easeOutQuad",
		overflowScroll:false,
		before: function(i,box) {
			current = i
			$(".pagenation .active").removeClass("active");
			$(".pagenation").find("a").eq(i).addClass("active");

			$(".js-slide").removeClass("active");
			$(".js-slide").eq(i).addClass('active');
			},
		afterRender: function() {
			var pagenation = '<ul class="pagenation">';
			$(".box").each(function(i) {
				pagenation += '<li><a></a></li>';
			});
			pagenation += '</ul>';
			$("body").append(pagenation);
			$(".pagenation a").each(function(i) {
				$(this).on('click', function() {
					$.scrollify.move[i]
				});
			});
			$(".pagenation li:first-child").find("a").addClass("active");
			$(".js-slide-first").addClass('active');
		},
	});

	$(window).on('resize', function() {
		if(current) {
			var currentScrl = $(".box").eq(current).offset().top;
			$(window).scrollTop(currentScrl);
		}
	});
});
