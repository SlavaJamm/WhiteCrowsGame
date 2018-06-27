(function($) {
	//var clickedBirds = 0;
	
	var animObj = {
		clickedBirds: 0,
		startPageObj: $('.start-page'),

		_init: function() {
			var self = animObj;

			console.log('init');
			$(".start-page--click").click(self._startPageClick);
			$("path").mouseenter(self._addAudio);
			$('.change-time').click(self._changeTime);
			$('svg path').click(self._removeBird);
		},
		_startPageClick: function() {
			var self = animObj;

			self.startPageObj.remove();
			$('.change-time').show();
		},
		_addAudio: function() {
			$("<audio></audio>").attr({ 
				'src': 'sound/' + Math.ceil(Math.random() * 5) + '.wav', 
				'volume': 0.4,
				'autoplay': 'autoplay'
			}).appendTo("body");
		},
		_changeTime: function() {
			$(this).toggleClass('--night');
			$('body').toggleClass('--night');
		},
		_removeBird: function() {
			var self = animObj;

			$(this).remove();
			self.clickedBirds += 1;
			$('#crowsClicked').html(self.clickedBirds);
		}
	};
	

	$(document).ready(animObj._init);

	console.log("IIF");
})(jQuery);