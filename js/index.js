$(function() {
    $('#image img').on('mouseenter', enter);
    $('#image img').on('mouseleave', leave);
});

var org = '';

function enter() {
    console.log('enter');
    org = $('#image img').attr('src');
    $('#image img').attr('src', '/media/halloween.png');
    $('#news').css('background-color', '#FFA500');
}

function leave() {
    console.log('leave');
    $('#image img').attr('src', org);
    $('#news').css('background-color', 'white');
}