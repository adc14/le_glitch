
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



$(document).ready(function($) {

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

	window.addEventListener('resize', function () {
		$('article section').each(function () {
			this.style.height = window.innerHeight + 'px';
		});
	}, true);

	var sections = null, canvas = $('canvas', sections)[0],  ctx, i, x, elemTop, elemBottom, inView, docViewTop, docViewBottom;

/*	function animate(time) {
		requestAnimationFrame( animate );
		if (canvas) {
			ctx = canvas.getContext('2d');
			ctx.fillStyle = '#DADADA';
			ctx.clearRect(0,0, 50, 3);
			ctx.rect(0,0, 50, 3);
			ctx.fill();
		}
	}

	animate();*/

	function activeSectionHandler (section) {
		canvas  = $('canvas', section)[0];

		if (canvas){
			if ($(canvas).hasClass('pixelLine')) {

				canvas.style.width = window.innerWidth + 'px';
				canvas.style.maxHeight = canvas.height + 'px';
				

			}
		}
	}

	window.addEventListener('scroll', function () {

		docViewTop = $(window).scrollTop();
		docViewBottom = docViewTop + $(window).height();

		if(sections){
			for (i = 0; i < sections.length; i++) {

				elemTop = $(sections[i]).offset().top;
				elemBottom = elemTop + $(sections[i]).height();
				inView = (elemTop >= docViewBottom - $(sections[i]).height());

				$(sections[i]).removeClass('active');

				if (inView) {
					$(sections[i]).addClass('active');
					activeSectionHandler(sections[i]);
				}
			};
		}

		$('article section').each(function () {
			if ($(window).scrollTop() < 50) {
				$('.arrow').css('opacity', 1.0 );
			} else {
				$('.arrow').css('opacity', 1.0 - ($(window).scrollTop() - 50) / 100 );
			}
		});
	}, false);

	//
	// Imageglitch
	//
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

	function getKeyCode(event) {
	   event = event || window.event;
	   return event.keyCode;
	}

	
	sections = $('article section').toArray()

	// customImageGlitch(1000, $(".img-glitch-source"), $(".img-glitch-target"));
	
	$('article section').each(function () {
		this.style.height = window.innerHeight + 'px';
	});
	var lastText;

	$( "#inputForm" ).on( "keydown", function( event ) {
	  //console.log( event.type + ": " +  event.which );
	  
	  //arrow up
	  if (event.which === 38) {
	  	$('input[name~="inputField"]',this).val(lastText);
	  }
	});

	$('#inputForm').submit(function (e) {

		var text = $('input[name~="inputField"]',this).val();
		$('input[name~="inputField"]',this).val('');
		var output = $(this).find('.output');
		var aside = document.createElement('aside');
		var p = document.createElement('p');

		lastText = text;

		switch (text.toLowerCase()) {


			case "marco": 	$(aside).addClass('success'); 
						 	p.innerHTML = 'Tipp: Terminal ♡';
			              	break;

          	case "help": 	$(aside).addClass('help'); 
          				 	p.innerHTML = 'Tipp: Try Marco';
          	              	break;

          	case "hilfe": 	$(aside).addClass('help'); 
          				 	p.innerHTML = 'Tipp: Try Marco';
          	              	break;

          	case "ls": 	$(aside).addClass('success'); 
          				 	p.innerHTML = 'secret.txt';
          	              	break;

          	case "open secret.txt": 	$(aside).addClass('success'); 
		              				 	p.innerHTML = '0x3a66f2';
		              	              	break;

          	case "vi secret.txt": 	$(aside).addClass('success'); 
	              				 	p.innerHTML = '0x3a66f2';
	              	              	break;

          	case "vim secret.txt": 	$(aside).addClass('success'); 
	              				 	p.innerHTML = '0x3a66f2';
	              	              	break;

          	case "0x3a66f2": 	$(aside).addClass('success'); 
              				 	p.innerHTML = 'Your Win: Free drink!';
              	              	break;

          	case "help": 	$(aside).addClass('success'); 
          				 	p.innerHTML = 'Tipp: Try Marco';
          	              	break;
		
			default: 		$(aside).addClass('error');
							p.innerHTML = 'command not found : ' + text;
		}

		

		$(aside).append(p);
		$(output).append(aside);
		$( document ).scrollTop( 16000 );

		e.preventDefault();
		return false;
	});
});


