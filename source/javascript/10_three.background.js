(function () {




	// shim layer with setTimeout fallback
	window.requestAnimFrame = (function () {
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            window.setTimeout(callback, 1000 / 60);
	          };
	})();

	
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };




    // globals
	var WIDTH = window.innerWidth,
		HEIGHT = window.innerHeight,
		HALFWIDTH = WIDTH / 2,
		HALFHEIGTH = HEIGHT / 2,
		VIEW_ANGLE = 60,
	    ASPECT = WIDTH / HEIGHT,
		container = null,
		mouseX = 0,
		mouseY = 0,
		scene = null,
		camera = null,
		renderer = null,
		composer = null,
		ratio = getPixelRatio(),
		effect = null,
		glitchCounter = 0,
		glitchStart = 0,
		glitchRepeats = 10,
		glitchRepeatCounter = 0,
		sceneMeshObjtectsGraph = [],
		sceneObject = null,
		frame = 0,
		radius = 1,
		rings = 12,
		segments = 12,
		flatShadingExceptions = ['Floor']
		rotationExceptions = ['Floor', 'Glitch'],
		SCENELAMPS = [],
		pulsar = null,
		pulsarRadius = 0.5;

	var mouse = new THREE.Vector2(),
		offset = new THREE.Vector3( 10, 10, 10 ),
		INTERSECTED,
		controls;

	var pickingData = [], pickingTexture, pickingScene;
	var objects = [], highlightBox;

	var clock = new THREE.Clock();

	var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });

	var defaultCamera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, 0.1, 10000 ),
		firstPersonCamera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, 1, 20000 ),
		camera = firstPersonCamera;

	var projector = new THREE.Projector(),
		raycaster = new THREE.Raycaster();

	// create shader
	var attributes = {
	    displacement: {
	        type: 'f', // a float
	        value: [] // an empty array
	    }
	};

	// add a uniform for the amplitude
	var uniforms = {
	    amplitude: {
	        type: 'f', // a float
	        value: 0
	    }
	};


	// Small Helpers
	
	function getPixelRatio() {
		var canvas = document.createElement('canvas'),
			context = canvas.getContext('2d'),
			devicePixelRatio = window.devicePixelRatio || 1,
			backingStoreRatio = context.webkitBackingStorePixelRatio ||
								context.mozBackingStorePixelRatio ||
								context.msBackingStorePixelRatio ||
								context.oBackingStorePixelRatio ||
								context.backingStorePixelRatio || 1,
			ratio = devicePixelRatio / backingStoreRatio;

		return ratio;
	};

	// Small Helpers 







	function onDocumentMouseMoveHandler (event) {
			mouseX = ( event.clientX - HALFWIDTH );
			mouseY = ( event.clientY - HALFHEIGTH );
	}





	function onWindowResize() {

		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

	}





	function createLoadingScene () {
		var object, geometry, material, light, count = 500, range = 300;
		var context = {
			scene : new THREE.Scene(),
			camera : new THREE.PerspectiveCamera( 54, window.innerWidth / window.innerHeight, 1, 1000 )
		};

		context.camera.position.z = 100;
		context.scene.matrixAutoUpdate = false;

		return context;

	}





	function handle_update ( result, pieces ) {

		var m, material, count = 0;

		for ( m in result.materials ) {

			material = result.materials[ m ];
			if ( ! ( material instanceof THREE.MeshFaceMaterial ) ) {

				if( !material.program ) {

					renderer.initMaterial( material, result.scene.__lights, result.scene.fog );

					count += 1;
					if( count > pieces ) {
						break;
					}

				}
				
			}
			material.shading = THREE.FlatShading;

		}
	}





	function callbackProgress ( progress, result ) {

		var bar = 250,
			total = progress.total_models + progress.total_textures,
			loaded = progress.loaded_models + progress.loaded_textures;

		if ( total )
			bar = Math.floor( bar * loaded / total );

		count = 0;
		for ( var m in result.materials ) count++;

		handle_update( result, Math.floor( count/total ) );

	}


	function setAllSceneObjectsFlat(exceptArr) {

		var except = false;
		//set flat shading
		for (var i = 0; i < scene.children.length; i++) {
			if (scene.children[i]){
				for (var z = 0; z < exceptArr.length; z++) {
					if (exceptArr[i] === scene.children[i].name){
						except = true;
					}
				}
				if (scene.children[i].material && scene.children[i].material.materials) {
					for (var x = 0; x < scene.children[i].material.materials.length; x++) {
						if (scene.children[i].material.materials[x] && !except) {
							scene.children[i].material.materials[x].shading = THREE.FlatShading;
							scene.children[i].material.materials[x].needsUpdate = true;
						}
					}
				}
				except = false;
			}
		}

	}

	function findObjectsByNames (searchArr){
		var result = [], child;

		for (var i = 0; i < scene.children.length; i++) {
			child = scene.children[i];
			if (child){
				for (var x = 0; x < searchArr.length; x++){
					if(child.name.split('.')[0] === searchArr[x] ){
						result.push(child);
					}
				}
			}
		}

		return result;
	}

	function prepareScene (result) {

		camera = result.currentCamera;
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		scene = result.scene;
		handle_update( result, 1 );
		scene.fog = new THREE.Fog( 0x3C3C3C, 1, 250 );
		scene.add( new THREE.AmbientLight( 0x3c3c3c ) );

		composer = new THREE.EffectComposer( renderer );
		composer.addPass( new THREE.RenderPass( scene, camera ) );

		effect = new THREE.ShaderPass( THREE.RGBShiftShader );
		effect.uniforms[ 'amount' ].value = 0.0015;
		effect.renderToScreen = true;
		composer.addPass( effect );

	}


	function firstCallbackFinished ( result ) {

		prepareScene(result);
		setAllSceneObjectsFlat(flatShadingExceptions);

		$.ionSound({
		    sounds: [
		        "computer_error",
		        "synth_stab:0.5"         // http://www.freesound.org/people/Erokia/sounds/216059/
		    ],
		    path: "sounds/",             // set path to sounds
		    multiPlay: true,            // playing only 1 sound at once
		    volume: "0.3"                // not so loud please
		});

		$.ionSound.play("computer_error");

	}



	function secondCallbackFinished ( result ) {

		prepareScene(result);

		var shaderMaterial = new THREE.ShaderMaterial({
			uniforms: 		uniforms,
			attributes:     attributes,
			vertexShader: document.getElementById( 'vertexshader' ).textContent,
			fragmentShader:  document.getElementById( 'fragmentshader' ).textContent
		});

		SCENELAMPS = findObjectsByNames(['Lamp']);

		// create a new mesh with sphere geometry -
		// we will cover the sphereMaterial next!
		var sphere = new THREE.Mesh(
		   new THREE.SphereGeometry(2,
		   segments,
		   rings),

		   shaderMaterial);

		// changes to the vertices
		sphere.geometry.__dirtyVertices = true;

		// changes to the normals
		sphere.geometry.__dirtyNormals = true;
		sphere.name = 'Glitch';
		sphere.scale.y = 1.2;
		sphere.scale.x = 0.7;
		sphere.scale.z = 0.9;


		// now populate the array of attributes
		var vertices = sphere.geometry.vertices;
		var values = attributes.displacement.value
		for(var v = 0; v < vertices.length; v++) {
		    values.push(Math.random() * 30);
		}

		scene.add(sphere);

		sphereMaterial =
		  new THREE.MeshLambertMaterial(
		    {
		      color: 0xCC0000,
		      transparent: true,
		      opacity: 0.25
		    });

		// set up the sphere vars
		var radius = pulsarRadius,
		    segments = 24,
		    rings = 24;

		// create a new mesh with
		// sphere geometry - we will cover
		// the sphereMaterial next!
		pulsar = new THREE.Mesh(

		  new THREE.SphereGeometry(
		    radius,
		    segments,
		    rings),

		  sphereMaterial);

		// add the sphere to the scene
		scene.add(pulsar);



		//set flat shading
		setAllSceneObjectsFlat(flatShadingExceptions);
		$.ionSound.play("computer_error");
	}


	// mietääää
	function loadFirstBlenderScene ( path ) {
		var loader = new THREE.SceneLoader();
		loader.callbackProgress = callbackProgress;
		loader.load( path, firstCallbackFinished);
	}

	function loadSecondBlenderScene ( path ) {
		var loader = new THREE.SceneLoader();
		loader.callbackProgress = callbackProgress;
		loader.load( path, secondCallbackFinished);
	}



	function render(time) {

		// update the amplitude based on
		// the frame value
		uniforms.amplitude.value = Math.sin(time*0.0006) * 0.009;
		frame += 0.1;

		//camera.position.x += ( mouseX - camera.position.x ) * .001;
		//camera.position.y += ( - mouseY - camera.position.y ) * .001;

		if (scene.children.length > -1) {

			for (var i=0; i < scene.children.length; i++) {
				if(rotationExceptions.indexOf(scene.children[i].name) === -1) {
					sceneObject = scene.children[i];
					sceneObject.rotation.z += 0.0008;
				}
			}

			glitchCounter = (glitchCounter + 1) % (250 + glitchRepeats);

			if (glitchCounter > 248 && glitchCounter < (250 + glitchRepeats)) {

				if (glitchRepeatCounter === 0) {
					glitchStart = effect.uniforms[ 'amount' ].value;
					glitchRepeatCounter++;
					$.ionSound.play("synth_stab");
				} else if (glitchRepeatCounter === glitchRepeats) {
					effect.uniforms[ 'amount' ].value = glitchStart;
					glitchRepeatCounter = 0;
					if (SCENELAMPS.length)
						SCENELAMPS[1].intensity = 0.6;
						SCENELAMPS[2].intensity = 0.6;
				} else {
					effect.uniforms[ 'amount' ].value = Math.random() * 0.035;
					if (SCENELAMPS.length)
						SCENELAMPS[1].intensity = Math.random() * 0.35;
						SCENELAMPS[2].intensity = Math.random() * 0.95;
					if (pulsar && pulsarRadius < 18) {
						pulsarRadius += Math.random() * 2;
						pulsar.scale.x = pulsarRadius;
						pulsar.scale.y = pulsarRadius;
						pulsar.scale.z = pulsarRadius;
					} else if ( pulsarRadius >= 18 ) {
						pulsarRadius = 1;
 					}
					glitchRepeatCounter++;
				}
			}

		}

		camera.lookAt( scene.position );
		composer.render(scene, camera);
		//renderer.render(scene, camera);
	}





	function pick() {

		var vector = new THREE.Vector3( mouseX, mouseY, 1 );
		projector.unprojectVector( vector, camera );

		raycaster.set( camera.position, vector.sub( camera.position ).normalize() );
		var intersects = raycaster.intersectObjects( scene.children );

		if ( intersects.length > 0 ) {

			if ( INTERSECTED != intersects[ 0 ].object ) {

				if ( INTERSECTED && INTERSECTED.material ){
					if(INTERSECTED.material.emissive) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
				}

				INTERSECTED = intersects[ 0 ].object;
				if( INTERSECTED.material.emissive ){
					INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
					INTERSECTED.material.emissive.setHex( 0xff0000 );
				}

			}

		} else {

			if ( INTERSECTED && INTERSECTED.material.emissive ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

			INTERSECTED = null;

		}


	}







	function animate(time) {
		requestAnimationFrame( animate );

		render(time);

	}








	function init () {
		// Globals
		container = document.getElementById('threeBackground');

		// Events
		document.addEventListener( 'mousemove', onDocumentMouseMoveHandler, false );
		window.addEventListener( 'resize', onWindowResize, false );

		var loadScene = createLoadingScene();

		scene = loadScene.scene;
		camera = loadScene.camera;

		renderer = new THREE.WebGLRenderer({ antialiasing: true });
		renderer.setSize(WIDTH * ratio, HEIGHT * ratio);
		renderer.setClearColor( 0x3C3C3C, 1 );
		renderer.domElement.style.position = "relative";

		// postprocessing

		composer = new THREE.EffectComposer( renderer );
		composer.addPass( new THREE.RenderPass( scene, camera ) );


		container.appendChild(renderer.domElement);

		loadFirstBlenderScene('scene/scene1.js');
		setTimeout(function () {
			loadSecondBlenderScene('scene/scene2.js');
		}, 5000);


		animate();

	}





	//start if webgl supported
	if ( Modernizr.webgl ){
		window.onload = function () { init(); };
	}





})();