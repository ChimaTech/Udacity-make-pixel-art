// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let numCol, numRow, cellColr;

// Listen to grid-sizes form submission event.
$('form').submit(function() {

  // Prevent the default behavior of form element.
  event.preventDefault();

  numRow = $('#inputHeight').val();
  numCol = $('#inputWeight').val();
  makeGrid(numRow, numCol);
  $('#student-id').remove('');
});

// The 'makeGrid' function
function makeGrid(r, c) {

  // This While Loop clears out a previously formed grid, by removing the table rows starting from the last row.
  const initHeight = $('tr').length; // initHeight is the previous number of table rows calculated using .length method
  let z = 1;
  while (z <= initHeight) {
    $('table').children(':last').remove();
    z++;
  }

  // This For loop creates a grid according to user's inputs: r refers to Grid Height and c refers to Grid Width.
  for (let i = 1; i <= r; i++) {
    $('table').append('<tr id=tab' + i + '></tr>');
    for (let j = 1; j <= c; j++) {
      $('#tab' + i).append('<td id=cell-' + i + 'x' + j + '></td>');
    }
  }

  // Dynamically paint grid cells (and announce the color used.)
  $('td').click(function() {
    cellColr = $('#colorPicker').val();

    // If the cell has previously been painted, remove that paint.
    if ($(this).attr('style')) {
      $(this).removeAttr('style');

      // This notifies the user when the previous background color of a cell is removed.
      $('#notify').html('<span class="blue">Update! </span>You <span class="red">cleared out</span> the <strong>previous color </strong>!');

    } else {
      // When the cell has no paint on it, apply the selected color (cellColr).
      $(this).css('background-color', cellColr);

      // Fades in the paint notification bar within 1200 milliseconds, and tells the user the color used to paint a cell.
      $('#notify').fadeIn(1200);
      $('#notify').html('<span class="blue">Update! </span>You painted with the color HEX code: <strong>' + cellColr + '</strong>');
    }

  });

}

// Make the Webpage fade in (within 2000 milliseconds)
$('body').hide(); // hides the body of webpage
$('body').fadeIn(2000); // Reveals the webpage

// Hide the student's ID card (i.e #student-id) and the paint notification bar (i.e #notify).
$('#student-id').hide(); // Hides the Student's ID card
$('#notify').hide(); // Hides paint notification bar

// Reveals the student's ID card when the mouse hovers over the page's body.
$('body').hover(function() {
  $('#student-id').fadeIn(2000);
});
