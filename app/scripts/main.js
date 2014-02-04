var Userprofile = {
    name: "Moon Unit",
    location: "Table Top Rock",
    avatar: "images/golden.png",
};

var Tweet = function(Userprofile) {
    this.tweetID = _.uniqueId('tweet');
    this.name = Userprofile.name;
    this.location = $('.sharelocation').val();
    this.msg = $('.share').val();
    this.avatar = Userprofile.avatar;
    this.time = 'Feb 4, 2014'
    this.isFavorite = false;
};

var postTemplate = _.template($('.tweet-template').text());


$('.sharebutton').click(function(){
    var tweet = new Tweet(Userprofile);
    $('.tweets').prepend(postTemplate(tweet));
});

tweetArray=[];









$('.postimage').on('click', function(){
	$('#myModal').toggleClass('dialogIsOpen');
	$('#page-wrap').toggleClass('dialogIsOpen');
});

$('.expand').on('focus', function(){
    $('#page-wrap').toggleClass('dialogIsOpen');
	$('#myModal').toggleClass('dialogIsOpen');
});


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