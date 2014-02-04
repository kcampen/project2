$('.postimage').on('click', function(){
	$('#myModal').toggleClass('dialogIsOpen');
	$('#page-wrap').toggleClass('dialogIsOpen');
});

$('.expand').on('focus', function(){

	$('#myModal').toggleClass('dialogIsOpen');
});

$('.expand').on('focus', function(){
	$('#page-wrap').toggleClass('dialogIsOpen');
});
// Question: can put two $'s on click but not for focus.



$('.close').on('click', function() {
    $('#page-wrap').toggleClass('dialogIsOpen');
    $('#myModal').toggleClass('dialogIsOpen');
});


$('.btn').on('click', function() {
    console.log('close will return state')
    $('#page-wrap').toggleClass('dialogIsOpen');
    $('#myModal').toggleClass('dialogIsOpen');
});

$('.sharebutton').on('click', function() {
    console.log('after submit will return state')
    $('#page-wrap').toggleClass('dialogIsOpen');
    $('#myModal').toggleClass('dialogIsOpen');
});