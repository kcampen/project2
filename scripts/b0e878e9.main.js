var Userprofile={name:"Moon Unit",location:"Table Top Rock",avatar:"images/golden.png"},Tweet=function(a){this.tweetID=_.uniqueId("tweet"),this.name=a.name,this.location=$(".sharelocation").val(),this.msg=$(".share").val(),this.avatar=a.avatar,this.time="Feb 4, 2014",this.isFavorite=!1},postTemplate=_.template($(".tweet-template").text());$(".sharebutton").click(function(){var a=new Tweet(Userprofile);$(".tweets").prepend(postTemplate(a))}),tweetArray=[],$(".postimage").on("click",function(){$("#myModal").toggleClass("dialogIsOpen"),$("#page-wrap").toggleClass("dialogIsOpen")}),$(".expand").on("focus",function(){$("#page-wrap").toggleClass("dialogIsOpen"),$("#myModal").toggleClass("dialogIsOpen")}),$(".close").on("click",function(){$("#page-wrap").toggleClass("dialogIsOpen"),$("#myModal").toggleClass("dialogIsOpen")}),$(".btn").on("click",function(){console.log("close will return state"),$("#page-wrap").toggleClass("dialogIsOpen"),$("#myModal").toggleClass("dialogIsOpen")}),$(".sharebutton").on("click",function(){console.log("after submit will return state"),$("#page-wrap").toggleClass("dialogIsOpen"),$("#myModal").toggleClass("dialogIsOpen")});