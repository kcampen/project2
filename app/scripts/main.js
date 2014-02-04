var user = [{
	name: "buttercup",
	location: "Rock Island",
	avatar: "images/golden.png",
}, {
	name: "moon unit",
	location: "Fall Creek Falls",
	avatar: "images/goldenpup.png",
}];

var locations = [
	"Rock Island",
	"Fall Creek Falls",
]

var message = [
	"ouch charlie that hurt",
	"i want to go to there",
]

var UserProfile = function(object) {
    this.userID = _.uniqueId('user');
    this.name = object.name;
    this.location = object.location;
    this.avatar = object.avatar;
    this.numTweets = 0;
    this.following = [];
    this.trails = [];
}

userArray = [];

var Tweet = function(userProfile) {
    this.tweetID = _.uniqueId('tweet');
    this.name = userProfile.name;
    this.userID = userProfile.userID;
    this.location = $('.sharelocation').val();
    this.msg = $('.share').val();
    this.avatar = userProfile.avatar;
    this.isFavorite = favoriteFalse;
    this.date = new Date();
    this.time = tweetTimeFormat(this.date);
};
tweetArray = [];

var postTemplate = _.template($('.tweet-template').text());

// _.each(users, function(user) {
//     registerNewUser(user);
// });

 // populateStream(20);

 var currentUser = setCurrentUser(_.sample(userArray));


$(document).on('click', '.sharebutton', function(){
	var tweet = new Tweet (currentUser);
	tweetArray.push(tweet);
	$('.tweets').prepend(postTemplate(tweet));
	$('.share').val('');

});

function populateStream(num) {
    for (i = 0; i < num; i++) {
        randomUser = _.sample(userArray);
        var tweet = new Tweet(randomUser);
        tweet.msg = _.sample(messages);
        tweet.location = _.sample(locations);
        tweetArray.push(tweet);
        $('.tweets').prepend(postTemplate(tweet));
        ++randomUser.numTweets;
    }
}


function setCurrentUser (user) {
	currentUser = user;
	$('.profpic img').attr ("src", user.avatar);
	$('.profname').text (user.name);
	$('.proflocation').val (user.location);
	$('.sharelocation').val (user.location);
	return user;
}

// function registerNewUser(user) {
//     newUser = new UserProfile(user);
//     userArray.push(newUser);
//     $('.profile-chooser-rows').append(userRowTemplate(newUser));
// }











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