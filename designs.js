// Select color input
// Select size input
let height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);
});

function makeGrid(u, v) {
    $('tr').remove();

// Your code goes here!
    for (let i = 1; i <= u; i++){
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (let j = 1; j <=v; j++){
            $('#table' + i).append('<td></td>');
        }
    }
    // add color to cell
    $('td').click(function addColor() {
       color = $('#colorPicker').val();

       if ($(this).attr('style')){
           $(this).removeAttr('style')
       } else {
           $(this).attr('style','background-color:' + color);
       }

    });

}
