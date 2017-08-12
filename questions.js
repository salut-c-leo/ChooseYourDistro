$('.btn-infosi').click(function() {
    $('#infosi').hide();
    $('#ootb').show();
    $('.btn-restart').show();
});
$('.btn-ootb').click(function() {
    $('#ootb').hide();
    $('#inter').show();
    $('.btn-restart').show();
});

$('.btn-inter').click(function() {
    $('#inter').hide();
    $('#old').show();
    $('.btn-restart').show();
});

$('.btn-olds').click(function() {
    $('#old').hide();
    $('#rolling').show();
    $('.btn-restart').show();
});
$('.btn-oldd').click(function() {
    $('#old').hide();
    $('#vold').show();
    $('.btn-restart').show();
});
$('.btn-vold').click(function() {
    $('#vold').hide();
    $('#rolling').show();
    $('.btn-restart').show();
});
$('.btn-rolling').click(function() {
    $('#rolling').hide();
    $('#systemd').show();
    $('.btn-restart').show();
});
$('.btn-systemd').click(function() {
    $('#systemd').hide();
    $('#inssi').show();
    $('.btn-restart').show();
});
$('.btn-inssi').click(function() {
    $('#inssi').hide();
    $('#Result').show();
});
$('.btn-restart').click(function() {
    $('.btn-restart').hide();
    $('#infosi').show();
    $('#ootb').hide();
    $('#inter').hide();
    $('#old').hide();
    $('#rolling').hide();
    $('#systemd').hide();
    $('#inssi').hide();
    $('#Result').hide();
});
