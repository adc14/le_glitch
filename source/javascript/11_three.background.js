// Inspired by threejs examples.
// Used for le_glitch project.
// 
// @author: Valeri Kremer
// @twitter: @krevativ

(function () {



	//==================================================================
	// requestAnimFrame() Shim layer by Paul Irish
	//==================================================================
	

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




    //==================================================================
    // Globals
    //==================================================================
    
	var WIDTH = window.innerWidth,
		HEIGHT = window.innerHeight,
		HALFWIDTH = WIDTH / 2,
		HALFHEIGTH = HEIGHT / 2,
		VIEW_ANGLE = 60,
	    ASPECT = WIDTH / HEIGHT,
		SCENELAMPS = [],
		SHARKS = [],
		SHARKS_DISTANCE = 15,
	    animationRequestID = undefined,
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
		pulsar = null,
		pulsarRadius = 0.5,
		particleSystem = null,
		scrollPosition = 0,
		lastScrollPosition = 0,
		segmentHeight = window.innerHeight,
		inViewSectionNumber = 0,
		scrollMarks = {
			first : {
				mark : segmentHeight * 1,
				triggerd : false
			},
			second : {
				mark : segmentHeight * 2,
				triggerd : false
			},
			third : {
				mark : segmentHeight * 4,
				triggerd : false
			}
		},
		rotSpeed = 0.0018;


	var mouse = new THREE.Vector2(),
		offset = new THREE.Vector3( 10, 10, 10 ),
		INTERSECTED,
		controls;

	var pickingData = [], pickingTexture, pickingScene;
	var objects = [], highlightBox;

	var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });

	var defaultCamera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, 0.1, 10000 ),
		firstPersonCamera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, 1, 20000 ),
		camera = firstPersonCamera;

	var projector = new THREE.Projector(),
		raycaster = new THREE.Raycaster();

	// Particle System
	// @particleCount needs to be at least the same count as sharks in second scene
	var particleCount = 99, 
	    particles = new THREE.Geometry(),
		pMaterial = new THREE.ParticleBasicMaterial({
			color: 0xFFFFFF,
			size: 20,
			map: THREE.ImageUtils.loadTexture(
				"/img/arrow.png"
			),
			blending: THREE.AdditiveBlending,
			transparent: false
		}),
		pmMaterial = new THREE.ParticleBasicMaterial({
			color: 0xFFFFFF,
			size: 1,
			transparent: true,
			opacity: 0
		});



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


	var loader = new THREE.SceneLoader(),
		canvas = document.getElementById('preloader'),
		ctx = canvas.getContext("2d"),
		margin = { all : 10 }
		pWidth = 88,
		pHeight = 88,
		pWidthHalf = (pWidth / 2),
		pHeightHalf = (pHeight / 2);

	canvas.width = pWidth;
	canvas.height = pHeight;



	//==================================================================
	// Small Helpers
	//==================================================================
	
	/**
	 * [getPixelRatio description]
	 * @return {[type]} [description]
	 */
	function getPixelRatio () {
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
	}

	/**
	 * [getYScrollPosition description]
	 * @return {[type]} [description]
	 */
	function getYScrollPosition (){
	    if(window.pageYOffset!= undefined){
	        return pageYOffset;
	    } else {
	        var sx, sy;
	        sx= document.documentElement.scrollLeft || 0;
	        sy= document.documentElement.scrollTop || 0;
	        return sy;
	    }
	}

	function getRandom (min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	//==================================================================
	// Event Handlers
	//==================================================================

	/**
	 * [onDocumentMouseMoveHandler description]
	 * @param  {[type]} event [description]
	 * @return {[type]}       [description]
	 */
	function onDocumentMouseMoveHandler (event) {
			mouseX = ( event.clientX - HALFWIDTH );
			mouseY = ( event.clientY - HALFHEIGTH );
	}

	/**
	 * [onWindowResize description]
	 * @return {[type]} [description]
	 */
	function onWindowResize() {

		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

		segmentHeight = window.innerHeight;

	}

	/**
	 * [onWindowScroll description]
	 * @return {[type]} [description]
	 */
	function onWindowScroll () {
		scrollPosition = getYScrollPosition();

		if ( scrollPosition && scrollPosition <= scrollMarks.first.mark) {
			inViewSectionNumber = 0;
		}
		if ( scrollPosition && scrollPosition >= scrollMarks.first.mark && scrollPosition <= scrollMarks.second.mark) {
			inViewSectionNumber = 1;
		}
		if ( scrollPosition && scrollPosition >= scrollMarks.third.mark) {
			inViewSectionNumber = 2;
		}

		if (inViewSectionNumber == 0 && !scrollMarks.first.triggerd) {
			rotSpeed = 0.0018;
			loadFirstBlenderScene('scene/scene1.js');
			scrollMarks.first.triggerd = true;
			scrollMarks.second.triggerd = false;
			scrollMarks.third.triggerd = false;
		} else if (inViewSectionNumber == 1 && !scrollMarks.second.triggerd) {
			rotSpeed = 0.0020;
			loadSecondBlenderScene('scene/scene2.js');
			scrollMarks.first.triggerd = false;
			scrollMarks.second.triggerd = true;
			scrollMarks.third.triggerd = false;
		} else if (inViewSectionNumber == 2 && !scrollMarks.third.triggerd) {
			rotSpeed = 0.0008;
			loadThirdBlenderScene('scene/scene2.js');
			scrollMarks.first.triggerd = false;
			scrollMarks.second.triggerd = false;
			scrollMarks.third.triggerd = true;
		}

		if (inViewSectionNumber == 2 && scrollMarks.third.triggerd) {

			for (var i = 0; i < SHARKS.length; i++) {
				var pX = SHARKS[i].position.x,
					pY = SHARKS[i].position.y,
					pZ = SHARKS[i].position.z;

				if (SHARKS[i].startPos) {

					
					if (scrollPosition > lastScrollPosition) {	// down direction

						if ( Math.abs(pX) < SHARKS[i].endPosABS.x &&
							 Math.abs(pY) < SHARKS[i].endPosABS.y &&
							 Math.abs(pZ) < SHARKS[i].endPosABS.z ) {

							new TWEEN.Tween( { x : pX, y : pY, z : pZ, shark : SHARKS[i] } )
								.to( { 
										x : pX + pX * SHARKS[i].velocity,
										y : pY + pY * SHARKS[i].velocity,
										z : pZ + pZ * SHARKS[i].velocity
									 }, 300 )
								.easing( TWEEN.Easing.Quadratic.InOut )
								.onUpdate(function() {
									this.shark.position = new THREE.Vector3(this.x, this.y, this.z);
								}).start();

						}


					} else { 									// up direction


						new TWEEN.Tween( {
								x : pX,
								y : pY,
								z : pZ,
								shark : SHARKS[i],
								start : SHARKS[i].startPos,
								abs : SHARKS[i].startPosABS
							} )
							.to( { 
									x : pX - pX * SHARKS[i].velocity,
									y : pY - pY * SHARKS[i].velocity,
									z : pZ - pZ * SHARKS[i].velocity
								 }, 300 )
							.easing( TWEEN.Easing.Quadratic.InOut )
							.onUpdate(function() {

								if ( Math.abs(this.x) < this.abs.x &&
									 Math.abs(this.y) < this.abs.y &&
									 Math.abs(this.z) < this.abs.z) {
									this.x = this.start.x;
									this.y = this.start.y;
									this.z = this.start.z;
								}

								this.shark.position = new THREE.Vector3(this.x, this.y, this.z);
									
							}).start();


					}

				}

			}

		}

		lastScrollPosition = scrollPosition;
	}

	/**
	 * [bindEvents description]
	 * @return {[type]} [description]
	 */
	function bindEvents () {
		window.addEventListener('scroll', onWindowScroll, false);
		window.addEventListener( 'resize', onWindowResize, false );
	}

	/**
	 * [createLoadingScene description]
	 * @return {[type]} [description]
	 */
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

	/**
	 * [handle_update description]
	 * @param  {[type]} result [description]
	 * @param  {[type]} pieces [description]
	 * @return {[type]}        [description]
	 */
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





	//==================================================================
	// Callbacks
	//==================================================================

	/**
	 * [callbackProgress description]
	 * @param  {[type]} progress [description]
	 * @param  {[type]} result   [description]
	 * @return {[type]}          [description]
	 */
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

	/**
	 * [setAllSceneObjectsFlat description]
	 * @param {[type]} exceptArr [description]
	 */
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



	//==================================================================
	// Scene Loader
	//==================================================================

	/**
	 * [findObjectsByNames description]
	 * @param  {[type]} searchArr [description]
	 * @return {[type]}           [description]
	 */
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

	/**
	 * [prepareScene description]
	 * @param  {[type]} result [description]
	 * @return {[type]}        [description]
	 */
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

	/**
	 * [addPulsar description]
	 */
	function addPulsar () {

		var shaderMaterial = new THREE.ShaderMaterial({
			uniforms: 		uniforms,
			attributes:     attributes,
			vertexShader: document.getElementById( 'vertexshader' ).textContent,
			fragmentShader:  document.getElementById( 'fragmentshader' ).textContent
		});


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
	}




	/**
	 * [firstCallbackFinished description]
	 * @param  {[type]} result [description]
	 * @return {[type]}        [description]
	 */
	function firstCallbackFinished ( result ) {

		prepareScene(result);

		setAllSceneObjectsFlat(flatShadingExceptions);

		$.ionSound({
		    sounds: [
		        "computer_error",
		        "synth_stab:0.5"        // http://www.freesound.org/people/Erokia/sounds/216059/
		    ],
		    path: "sounds/",            // set path to sounds
		    multiPlay: true,            // playing only 1 sound at once
		    volume: "0.3"               // not so loud please
		});

		$.ionSound.play("computer_error");
	}




	/**
	 * [secondCallbackFinished description]
	 * @param  {[type]} result [description]
	 * @return {[type]}        [description]
	 */
	function secondCallbackFinished ( result ) {

		prepareScene(result);

		SCENELAMPS = findObjectsByNames(['Lamp']);
		SHARKS = findObjectsByNames(['Icosphere_cell']);
		addPulsar();
		
		//set flat shading
		setAllSceneObjectsFlat(flatShadingExceptions);


		$.ionSound.play("computer_error");
	}


	/**
	 * [secondCallbackFinished description]
	 * @param  {[type]} result [description]
	 * @return {[type]}        [description]
	 */
	function thirdCallbackFinished ( result ) {

		prepareScene(result);

		SCENELAMPS = findObjectsByNames(['Lamp']);
		SHARKS = findObjectsByNames(['Icosphere_cell']);

		// Calculate positions for animation
		for (var i = 0; i < SHARKS.length; i++) {
			var pX = SHARKS[i].position.x,
				pY = SHARKS[i].position.y,
				pZ = SHARKS[i].position.z;

			SHARKS[i].startPos = {
				x : pX,
				y : pY,
				z : pZ
			};

			SHARKS[i].startPosABS = {
				x : Math.abs(pX),
				y : Math.abs(pY),
				z : Math.abs(pZ)
			};

			SHARKS[i].endPos = {
				x : pX * SHARKS_DISTANCE,
				y : pY * SHARKS_DISTANCE,
				z : pZ * SHARKS_DISTANCE
			};

			SHARKS[i].endPosABS = {
				x : Math.abs(pX * SHARKS_DISTANCE),
				y : Math.abs(pY * SHARKS_DISTANCE),
				z : Math.abs(pZ * SHARKS_DISTANCE)
			};

			SHARKS[i].velocity = Math.random();
		}



		addPulsar();
		

		//set flat shading
		setAllSceneObjectsFlat(flatShadingExceptions);

		addSharkParticleSystem();


		$.ionSound.play("computer_error");
	}





	// mietääää
	


	/**
	 * [loadFirstBlenderScene description]
	 * @param  {[type]} path [description]
	 * @return {[type]}      [description]
	 */
	function loadFirstBlenderScene ( path ) {
		var loader = new THREE.SceneLoader();
		loader.callbackProgress = callbackProgress;
		loader.load( path, firstCallbackFinished);
	}



	/**
	 * [loadSecondBlenderScene description]
	 * @param  {[type]} path [description]
	 * @return {[type]}      [description]
	 */
	function loadSecondBlenderScene ( path ) {
		var loader = new THREE.SceneLoader();
		loader.callbackProgress = callbackProgress;
		loader.load( path, secondCallbackFinished);
	}


	/**
	 * [loadSecondBlenderScene description]
	 * @param  {[type]} path [description]
	 * @return {[type]}      [description]
	 */
	function loadThirdBlenderScene ( path ) {
		var loader = new THREE.SceneLoader();
		loader.callbackProgress = callbackProgress;
		loader.load( path, thirdCallbackFinished);
	}


	/**
	 * [addSharkParticleSystem description]
	 */
	function addSharkParticleSystem () {
		if (!SHARKS || SHARKS.length < 1)
			return;


		particleSystem = new THREE.ParticleSystem(
				particles,
				pmMaterial);

/*		scene.add( new THREE.BoxHelper( particleSystem) );
		scene.add( new THREE.FaceNormalsHelper( particleSystem) );
		scene.add( new THREE.VertexNormalsHelper( particleSystem) );
		scene.add( new THREE.WireframeHelper( particleSystem) );﻿*/

		particleSystem.sortParticles = true;

		particles = new THREE.Geometry();

		for(var p = 0; p < particleCount; p++) {
			
				var pX = SHARKS[p].position.x,
					pY = SHARKS[p].position.y,
					pZ = SHARKS[p].position.z;


				particleSystem.add(SHARKS[p]);

			}

		scene.add(particleSystem);
	}


	/**
	 * [render description]
	 * @param  {[type]} time [description]
	 * @return {[type]}      [description]
	 */
	function render(time) {

		// update the amplitude based on
		// the frame value
		uniforms.amplitude.value = Math.sin(time*0.0006) * 0.009;
		frame += 0.1;

		for (var i=0; i < scene.children.length; i++) {
			if(rotationExceptions.indexOf(scene.children[i].name) === -1) {
				sceneObject = scene.children[i];
				sceneObject.rotation.z += rotSpeed;
			}
		}

		if (particleSystem)
			particleSystem.rotation.y += 0.0016;

		glitchCounter = (glitchCounter + 1) % (250 + glitchRepeats);

		if (glitchCounter > 248 && glitchCounter < (250 + glitchRepeats)) {

			if (glitchRepeatCounter === 0) {
				glitchStart = effect.uniforms[ 'amount' ].value;
				glitchRepeatCounter++;
				$.ionSound.play("synth_stab");
			} else if (glitchRepeatCounter === glitchRepeats) {
				effect.uniforms[ 'amount' ].value = glitchStart;
				glitchRepeatCounter = 0;
				if (SCENELAMPS.length){
					SCENELAMPS[1].intensity = 0.6;
					SCENELAMPS[2].intensity = 0.6;
				}
			} else {
				effect.uniforms[ 'amount' ].value = Math.random() * 0.035;
				if (SCENELAMPS.length){
					SCENELAMPS[1].intensity = Math.random() * 0.35;
					SCENELAMPS[2].intensity = Math.random() * 0.95;
				}
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

		TWEEN.update();
		camera.lookAt( scene.position );
		composer.render(scene, camera);
		//renderer.render(scene, camera);
	}



	/**
	 * [animate description]
	 * @param  {[type]} time [description]
	 * @return {[type]}      [description]
	 */
	function animate(time) {
		requestAnimationFrame( animate );
		render(time);

	}

	/**
	 * [animatePreloader description]
	 * @return {[type]} [description]
	 */
	function animatePreloader () {
		animationRequestID = requestAnimationFrame( animatePreloader );
		TWEEN.update();
	}





	/**
	 * [init description]
	 * @return {[type]} [description]
	 */
	function init () {
		// Globals
		container = document.getElementById('threeBackground');

		// Events
		document.addEventListener( 'mousemove', onDocumentMouseMoveHandler, false );
		bindEvents();

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

		cancelAnimationFrame(animationRequestID);
		animationRequestID = undefined;
		animate();

	}


	function startPrealoader () {
		$('.home .arrow').fadeOut( "fast" );
		document.body.style.overflow = "hidden";
		animatePreloader();

		new TWEEN.Tween( { progress : 0, loader : loader } )
		.to( { progress : 0.5 }, 1000 )
		.easing( TWEEN.Easing.Quadratic.InOut )
		.onUpdate(function() {
			ctx.strokeStyle="#DADADA";
			ctx.fillStyle = "#DADADA";
			ctx.beginPath();
			ctx.clearRect(0, 0, pWidth, pHeight);
			ctx.arc(pWidthHalf,pWidthHalf,pWidthHalf - margin.all,0,Math.PI*this.progress,false);
			ctx.lineWidth=3;
			ctx.stroke();
		}).onComplete(function () {
			loader.load( 'scene/scene1.js', function () {

				new TWEEN.Tween( { progress : 1, loader : loader } )
				.to( { progress : 1.5 }, 5000 )
				.easing( TWEEN.Easing.Quadratic.InOut )
				.onUpdate(function() {
					ctx.beginPath();
					ctx.clearRect(0, 0, pWidth, pHeight);
					ctx.arc(pWidthHalf,pWidthHalf,pWidthHalf - margin.all,0,Math.PI*this.progress,false);
					ctx.stroke();
				}).onComplete(function () {
					loader.load( 'scene/scene2.js', function () {

						new TWEEN.Tween( { progress : 1.5, loader : loader } )
						.to( { progress : 2 }, 500 )
						.easing( TWEEN.Easing.Quadratic.InOut )
						.onUpdate(function() {
							ctx.beginPath();
							ctx.clearRect(0, 0, pWidth, pHeight);
							ctx.arc(pWidthHalf,pWidthHalf,pWidthHalf - margin.all,0,Math.PI*this.progress,false);
							ctx.stroke();
						}).start();

						init();
						document.body.style.overflow = "";
						$('.preloaderContainer').fadeOut( "slow" );
						$('.home .arrow').fadeIn( "slow" );
					});
				}).start();

			});
		}).start();
	}


	//start if webgl supported
	if ( Modernizr.webgl ){

		
		$(document).ready(function($) {

			setTimeout(function () {
				window.scrollTo(0,0);
				startPrealoader();
			}, 100);


		});

	}


})();