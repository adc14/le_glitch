
(function(){

		var command = function () {
			if(console) {
				console.log('Some crazy stuff');
				return true;
			}
			return false;
		};

		window.doCrazyStuff = command;

})();



$(document).ready(function($) {

	function getRandom (min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function randomDeadPixel() {
		console.log('load');
		var value = getRandom(0, window.innerWidth),
			element = document.getElementById('deadPixel'),
			color = element.style.backgroundColor,
			top = parseInt (element.style.top.replace('px', ''), 10),
			left = parseInt (element.style.left.replace('px', ''), 10);

		color = "rgb(255, 0, 0)";
		top = value * value;
		left = value * value;

		element.style.top = getRandom(0, window.innerHeight) + "px";
		element.style.left = getRandom(0, window.innerWidth) + "px";
		element.style.backgroundColor = color;
	}

	randomDeadPixel();


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

          	case "developer": 	$(aside).addClass('success');
	          				 	p.innerHTML = 'Marius Bruns, Florenz Helderman, Valeri Kremer, Matthias Bauer';
	          	              	break;

          	case "thx": 	$(aside).addClass('success');
	          				 	p.innerHTML = 'sass, three.js, tween.js, Ion.Sound';
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

    // Mobile Background Change
    $('#section1').waypoint(function() {
        console.log("section1");
        $('body').toggleClass('mobi-bg1')
    });
    $('#section2').waypoint(function() {
        console.log("section2");
        $('body').toggleClass('mobi-bg2')
    });
    $('#section3').waypoint(function() {
        console.log("section3");
        $('body').toggleClass('mobi-bg3')
    });
    $('#section4').waypoint(function() {
        console.log("section4");
        $('body').toggleClass('mobi-bg4')
    });


	// Konami Code
	var easter_egg = new Konami();
	easter_egg.code = function() {
		window.location.href = "well-well-what-do-we-have-here.html";
	}
	easter_egg.load();

	// page related arg tips
	if( $('body').hasClass('main') ){
		console.log("http://www.imdb.com/title/tt0113957/");
	}

    if( $('body').hasClass('l33t') ){
        console.log('... such intense');
        console.log('much love....ö')
        console.log('...wow...')
        console.log('(ﾉಥ益ಥ）ﾉ﻿ ┻━┻');
        console.log('┬─┬ノ( º _ ºノ)', 'chill out bro');
        console.log('┬──┬﻿ ¯\_(ツ)');
        console.log('(ﾉಥ益ಥ）ﾉ﻿ /(.o.) ', 'Dont flip me, Bro!')
    }
    if( $('body').hasClass('pi') ){
    	console.log("Gratulation - du hast die Seite kaputt gemacht");
    	console.log("٩(͡๏̯͡๏)۶");
    	console.log("Ich hoffe es war es wert... ");
    	console.log("... vielleicht ist es dir auch eine Lehre... ");
    	console.log("... man sollte nicht jedes PI anklicken, nur weil Sandra Bullock es gemacht hat... ");
    	console.log("... ich meine... ");
    	console.log("...schon die Tatsache, dass überhaupt etwas hier integriert wurde, was auf einer John Grisham Verfilmung basiert, ist schon seltsam... ");
    	console.log("... was kommt als nächstes... ein KONAMI CODE???");
    	console.log("ಠ_ಠ");
    }
});


