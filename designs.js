// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var numCol, numRow, cellColr, test;

// Listen to grid-sizes form submission event.
$("form").submit(function() {

	// Prevent the default behavior of form element.
	event.preventDefault();

	numRow = $("#inputHeight").val();
	numCol = $("#inputWeight").val();
	makeGrid(numRow,numCol);
	$("#comment").remove("");
});

// The "makeGrid" function
function makeGrid(r,c) {
	$("tr").remove();
	for (var i = 1; i <= r; i++) {
		$("table").append("<tr id=tab" + i + "></tr>");
		for (var j = 1; j <= c; j++) {
			$("#tab" + i).append("<td id=cell-" + i + "x" + j + "></td>");
		}
	}

	$("td").click(function() {
		cellColr = $("#colorPicker").val();

		if ($(this).attr("style")) {
			$(this).removeAttr("style");

			// Fades in the paint notification bar within 1200 milliseconds.
			$("#notify").fadeIn(1200);
			$("#notify").html("<span class='blue'>Update! </span>You <span class='red'>cleared out</span> the <strong>previous color </strong>!");
		}
		else {
			$(this).css("background-color", cellColr);

			// Fades in the paint notification bar within 1200 milliseconds.
			$("#notify").fadeIn(1200);
			$("#notify").html("<span class='blue'>Update! </span>You painted with the color notify code: <strong>" + cellColr + "</strong>");
		}

	});

}

/*
// Dynamically paint grid cells (and announce the color used.) -- These will produce about the same result as the one written above.
$("table").click(function() {
	cellColr = $("#colorPicker").val();

	if ($(event.target).attr("style")) {
		$(event.target).removeAttr("style");

		// Fades in the paint notification bar within 1200 milliseconds.
		$("#notify").fadeIn(1200);
		$("#notify").html("<span class='blue'>Update! </span>You <span class='red'>cleared out</span> the <strong>previous color </strong>!");
	}
	else {
		$(event.target).css("background-color", cellColr);

		// Fades in the paint notification bar within 1200 milliseconds.
		$("#notify").fadeIn(1200);
		$("#notify").html("<span class='blue'>Update! </span>You painted with the color notify code: <strong>" + cellColr + "</strong>");
	}

});
*/

// Makes the Webpage fade in (within 2000 milliseconds)
$("body").hide();
$("body").fadeIn(2000);

// Hides the student's ID card (i.e #comment) and the paint notification bar (i.e #notify).
$("#comment").hide();
$("#notify").hide();

// Reveals the student's ID card when the mouse hovers over the page's body.
$("body").hover(function() {
	$("#comment").fadeIn(2000);
});
