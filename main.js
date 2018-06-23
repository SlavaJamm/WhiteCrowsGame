$('.start-page--click').click(function(){
	$('.start-page').remove();
	$('.change-time').show();
})

var audio = document.getElementsByTagName('audio')[0];

var path = document.getElementsByTagName('path');

$("path").mouseenter(function(){
	$("<audio></audio>").attr({ 
		'src':'sound/'+Math.ceil(Math.random() * 5)+'.wav', 
		'volume':0.4,
		'autoplay':'autoplay'
	}).appendTo("body");
});
//at the day
$('.change-time').click(function(){
	$(this).toggleClass('--night');
	$('body').toggleClass('--night');
});
//remove birds
	var clickedBirds = 0;

$('svg path').click(function(){
	$(this).remove();
	clickedBirds += 1;

	$('#crowsClicked').html(clickedBirds);

});
