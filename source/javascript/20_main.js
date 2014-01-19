

(function(w){

	var command = function () {
		console.log('Some crazy stuff');
		return true;
	};

	w.doCrazyStuff = command;

	var easter_egg = new Konami();
	console.log("konami code loaded");
	easter_egg.code = function() {
		window.location.href = "crash.html";
	}
	easter_egg.load();

})(window);

function randomDeadPixel() {
	var value = Math.floor((Math.random()*60)+1),
		element = document.getElementById('deadPixel'),
		color = element.style.backgroundColor,
		top = parseInt (element.style.top.replace('px', ''), 10),
		left = parseInt (element.style.left.replace('px', ''), 10);

	if (value <= 30) {
		color = "rgb(255, 0, 0)";
		top = value * value;
		left = value * value;
	} else {
		color = "rgb(255, 255, 255)";
		top = value * value;
		left = value * value;
	}

	element.style.top = top + "px";
	element.style.left = left + "px";
	element.style.backgroundColor = color;
}

if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", randomDeadPixel, false);
}

//
// Imageglitch
//

(function($){

	var customImageGlitch = function(duration,$elem, $target){
		$elem.glitch({
		    amount: 3,
		    background : undefined,
		    complete: function(canvas){
				$target.html(canvas);
				setTimeout(function(){
					customImageGlitch(duration, $elem, $target);
				}, duration);
			}
		});
	};

	$(document).ready(function($) {
		
		customImageGlitch(1000, $(".img-glitch-source"), $(".img-glitch-target"));
		
	});
})(jQuery);
