$('.btn-infosi').click(function () {
    $('#infosi').hide();
    $('#ootb').show();
    $('.btn-restart').show();
});
$('.btn-ootb').click(function () {
    $('#ootb').hide();
    $('#old').show();
    $('.btn-restart').show();
});
$('.btn-olds').click(function () {
    $('#old').hide();
    $('#community').show();
    $('.btn-restart').show();
});
$('.btn-oldd').click(function () {
    $('#old').hide();
    $('#vold').show();
    $('.btn-restart').show();
});
$('.btn-vold').click(function () {
    $('#vold').hide();
    $('#community').show();
    $('.btn-restart').show();
});
$('.btn-community').click(function() {
    $('#community').hide();
    $('#rolling').show();
    $('.btn-restart').show();
});
$('.btn-rolling').click(function () {
    $('#rolling').hide();
    $('#inssi').show();
    $('.btn-restart').show();
});
$('.btn-inssi').click(function () {
    $('#inssi').hide();
    $('#Result').show();
});
$('.btn-restart').click(function () {
    $('.btn-restart').hide();
    $('#infosi').show();
    $('#ootb').hide();
    $('#old').hide();
    $('#vold').hide();
    $('#community').hide();
    $('#rolling').hide();
    $('#inssi').hide();
    $('#Result').hide();
});
