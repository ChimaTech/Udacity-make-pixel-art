// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let numCol, numRow, cellColr;

// Listen to submit event on grid-sizes input form
$('form').submit(function() {
  event.preventDefault(); // Prevents the 'Form' from attempting to submit inputs to a server
  numRow = $('#inputHeight').val();
  numCol = $('#inputWeight').val();
  makeGrid(numRow, numCol);
  $('#student-id').remove(''); // Removes Student ID card immediately the makeGrid function is called
});


/**
 * @description Dynamically clears out and creates grids
 * @param {number} r
 * @param {number} c
 * @returns {undefined} The grid of Height r , and Width c, that is a Table of r number of rows and c number of columns.
 */
function makeGrid(r, c) {

  // Clear out previous grid using While loop by removing the table rows starting from the last row.
  const initHeight = $('tr').length; // initHeight is the previous number of table rows calculated using .length method
  let z = 1;
  while (z <= initHeight) {
    $('table').children(':last').remove();
    z++;
  }

  // Create grid by iteration using For/nest For loop
  for (let i = 1; i <= r; i++) {
    $('table').append('<tr id=tab' + i + '></tr>');
    for (let j = 1; j <= c; j++) {
      $('#tab' + i).append('<td id=cell-' + i + 'x' + j + '></td>');
    }
  }

  // Listen to Click events on grid cells and dynamically paint grid cells
  $('td').click(function() {
    cellColr = $('#colorPicker').val(); // Captures the selected color from color input

    // If the cell has previously been painted, remove that paint, else apply the selected paint to the cell.
    if ($(this).attr('style')) {
      $(this).removeAttr('style');
      $('#notify').html('<span class="blue">Update! </span>You <span class="red">cleared out</span> the <strong>previous color </strong>!'); // Notifies the user that the previous color of the cell has been removed
    } else {
      $(this).css('background-color', cellColr); // Applies the selected color to the cell that is clicked on.
      $('#notify').fadeIn(1200); // Fades in the Paint Notification Bar within 1200 milliseconds
      $('#notify').html('<span class="blue">Update! </span>You painted with the color HEX code: <strong>' + cellColr + '</strong>'); // Notifies the user the color used to paint a cell.
    }

  });

}

// Make the Webpage fade in (within 2000 milliseconds)
$('body').hide(); // Hides the body of webpage
$('body').fadeIn(2000); // Reveals the webpage

// Hide the student's ID card (i.e #student-id) and the paint notification bar (i.e #notify).
$('#student-id').hide();
$('#notify').hide();

// Reveal the student's ID card when the mouse hovers over the page's body.
$('body').hover(function() {
  $('#student-id').fadeIn(2000);
});
