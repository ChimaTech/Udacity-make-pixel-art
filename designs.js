// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let numCol, numRow, cellColr;

// Listen to grid-sizes form submission event.
$("form").submit(function() {

  // Prevent the default behavior of form element.
  event.preventDefault();

  numRow = $("#inputHeight").val();
  numCol = $("#inputWeight").val();
  makeGrid(numRow, numCol);
  $("#student-id").remove("");
});

// The "makeGrid" function
function makeGrid(r, c) {
  $("tr").remove();
  for (let i = 1; i <= r; i++) {
    $("table").append("<tr id=tab" + i + "></tr>");
    for (let j = 1; j <= c; j++) {
      $("#tab" + i).append("<td id=cell-" + i + "x" + j + "></td>");
    }
  }

  // Dynamically paint grid cells (and announce the color used.)
  $("td").click(function() {
    cellColr = $("#colorPicker").val();

      // If the cell has previously been painted, remove that paint.
    if ($(this).attr("style")) {
      $(this).removeAttr("style");

      // Notifies the user when the previous background color of a cell has been removed.
      $("#notify").html("<span class='blue'>Update! </span>You <span class='red'>cleared out</span> the <strong>previous color </strong>!");

    } else {
      // When the cell has no paint on it, apply the selected color (cellColr).
      $(this).css("background-color", cellColr);

      // Fades in the paint notification bar within 1200 milliseconds, and tells the user the color used to paint a cell.
      $("#notify").fadeIn(1200);
      $("#notify").html("<span class='blue'>Update! </span>You painted with the color HEX code: <strong>" + cellColr + "</strong>");
    }

  });

}

// Makes the Webpage fade in (within 2000 milliseconds)
$("body").hide();
$("body").fadeIn(2000);

// Hides the student's ID card (i.e #student-id) and the paint notification bar (i.e #notify).
$("#student-id").hide();
$("#notify").hide();

// Reveals the student's ID card when the mouse hovers over the page's body.
$("body").hover(function() {
  $("#student-id").fadeIn(2000);
});