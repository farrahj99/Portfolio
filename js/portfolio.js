$(document).ready(function() {

	// declare the arrays with var range
	var range = ['images/food.png',
	'images/jubilee.png',
	'images/fb.png',
	'images/yelp.png',
	'images/farm.png',
	'images/todolist.png']

	// assign count as 0 for the first index
	var count = 0;

	// select the IDs #next and #prev to do an on "click" function (anonymous) with
	// incrementation - add attr

	$("#next").on("click", function() {
		dots: true
		$("#projectImageOne").attr('src', range[count]);
		count += 1;

		if (count > 5) {
			count = 0;
		}
	});




	$("#prev").on("click", function() {
		dots: true

		$("#projectImageOne").attr('src', range[count]);
		count -= 1;

		if (count < 0) {
			count = 7;
		}

	});






});

// the skill bar

$('.skillbar, .skillbar2, .skillbar3, .skillbar4, .skillbar5, .skillbar6').each(function(){
	$(this).find('.skillbar-bar').animate({
		width:$(this).attr('data-percent')
	},6000);
});
