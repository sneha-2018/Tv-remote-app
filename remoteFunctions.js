//Map for channel number to channel Name
var channelMap = {
	'10' : ['doordarshan', 0],
	'11': ['hbo',1],
	'123': ['max',3],
	'450': ['sony',5],
	'243': ['gold',4],
	'926': ['central',6],
	'90' : ['sabTv',2]
};
//array to maintain order of channels ,used while switching channels
var channelList = ['10','11','90','123','243','450','926'];
//keeping default_channel to 10
var default_channel = '10';

//whenever a correct channel is hit by user,it is updated to that channel or else it remains on the same channel it is in
var curr_channel = default_channel;

//variable to take channel inputs
var channel = default_channel;

//variable to maintain timer
var timer = false;

//a method that has to be called on page load itself ,also contains alert to display default_Channel on refresh or page load
function init()
{
	var numbers = document.querySelectorAll(".numButton");
	for(var digit = 0 ; digit < numbers.length ;digit++ )
		numbers[digit].onclick = onClickChannel;

	var chKeys = document.querySelectorAll(".chButton");
	chKeys[0].onclick = function(){scrollChannel(true);};
	chKeys[1].onclick = function(){scrollChannel(false);};
	chKeys[2].onclick = function(){showCurrentChannel();};

	alert("channel : " + default_channel + " " + channelMap[default_channel][0]);
}

function onClickChannel() {
	if(!timer){
	 	channel = "";
	 	setTimeout(switchChannel,3000);
	 }
	 timer = true;
	 channel += this.innerHTML;
}

function switchChannel(){
	channel = parseInt(channel);
	if(channelMap[channel] != undefined){
		alert("channel : " + channel + " " + channelMap[channel][0]);
		curr_channel = channel;
	}
	else{
		alert("channel : " + channel + " invalid input");
	}
	timer = false;
}

function scrollChannel(isUp){
	var index = channelMap[curr_channel][1];
	//index++;
	if(isUp)
		index = (index + 1) % (channelList.length);
	else
		index = (index -1) < 0 ? channelList.length - 1 : index - 1;
	channel = channelList[index];
	switchChannel();
}

function showCurrentChannel(){
	alert("channel : " + curr_channel + " " + channelMap[curr_channel][0]);
}
setTimeout(init , 500);
