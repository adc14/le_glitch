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
		SHARKS = [],
		pulsar = null,
		pulsarRadius = 0.5,
		particleSystem = null,
		scrollPosition = 0,
		segmentHeight = window.innerHeight;
		scrollMarks = {
			first : {
				mark : segmentHeight * 1,
				inView : false,
				triggerd : false
			},
			second : {
				mark : segmentHeight * 2,
				inView : false,
				triggerd : false
			},
			third : {
				mark : segmentHeight * 3,
				inView : false,
				triggerd : false
			}
		},
		rotSpeed = 0.0008;


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
			transparent: true
		}),
		pmMaterial = new THREE.ParticleBasicMaterial({
			color: 0xFFFFFF,
			size: 1,
			transparent: true
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
			scrollMarks.first.inView = true;
			scrollMarks.second.inView = false;
			scrollMarks.third.inView = false;
		}
		if ( scrollPosition && scrollPosition >= scrollMarks.first.mark && scrollPosition <= scrollMarks.second.mark) {
			scrollMarks.first.inView = false;
			scrollMarks.second.inView = true;
			scrollMarks.third.inView = false;
		}
		if ( scrollPosition && scrollPosition >= scrollMarks.second.mark && scrollPosition <= scrollMarks.third.mark) {
			scrollMarks.first.inView = false;
			scrollMarks.second.inView = false;
			scrollMarks.third.inView = true;
		}

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
	 * [addParticleSystem description]
	 */
	function addParticleSystem () {
		particleSystem = new THREE.ParticleSystem(
				particles,
				pMaterial);

		particleSystem.sortParticles = true;

		particles = new THREE.Geometry();

		for(var p = 0; p < particleCount; p++) {
			
				// create a particle with random
				var pX = Math.random() * 8 - 1 - Math.random() * 7,
					pY = Math.random() * 8 - 1 - Math.random() * 7,
					pZ = Math.random() * 8 - 1 - Math.random() * 7,
				    particle = new THREE.Vector3(pX, pY, pZ);

				// create a velocity vector
				particle.velocity = new THREE.Vector3(
					0,				// x
					-Math.random(),	// y
					0);				// z

				// add it to the geometry
				particles.vertices.push(particle);

			}

		scene.add(particleSystem);
	}


	/**
	 * [addSharkParticleSystem description]
	 */
	function addSharkParticleSystem () {
		if (!SHARKS || SHARKS.length < 1)
			return;


		particleSystem = new THREE.ParticleSystem(
				particles,
				pMaterial);

		scene.add( new THREE.BoxHelper( particleSystem) );
		scene.add( new THREE.FaceNormalsHelper( particleSystem) );
		scene.add( new THREE.VertexNormalsHelper( particleSystem) );
		scene.add( new THREE.WireframeHelper( particleSystem) );﻿

		particleSystem.sortParticles = true;

		particles = new THREE.Geometry();

		for(var p = 0; p < particleCount; p++) {
			
				var pX = SHARKS[p].position.x,
					pY = SHARKS[p].position.y,
					pZ = SHARKS[p].position.z,
				    particle = new THREE.Vector3(pX, pY, pZ);

	/*			var theta = Math.random()*2*Math.PI;
		    	var phi = Math.acos(Math.random()*2-1);
		    	var pX = 2*Math.sin(phi)*Math.cos(theta);
		    	var pY = 2*Math.sin(phi)*Math.sin(theta);
		    	var pZ = 2*Math.cos(phi);*/

/*			    var pX = Math.random() * 20 - 1 - Math.random() * 20,
			    	pY = Math.random() * 20 - 1 - Math.random() * 20,
			    	pZ = Math.random() * 20 - 1 - Math.random() * 20;*/
			        
				var particle = new THREE.Vector3(pX, pY, pZ);

				particleSystem.add(SHARKS[p]);

				new TWEEN.Tween( { x : pX, y : pY, z : pZ, shark : SHARKS[p] } )
				.to( { 
						x : pX + Math.random() * 10,
						y : pY + Math.random() * 10,
						z : pZ + Math.random() * 10
					 }, 4000 )
				.easing( TWEEN.Easing.Quadratic.InOut )
				.onUpdate(function() {
					this.shark.position = new THREE.Vector3(this.x, this.y, this.z);
				}).start();

				// create a velocity vector
				particle.velocity = new THREE.Vector3(
					0,				// x
					-Math.random(),	// y
					0);				// z

				// add it to the geometry
				particles.vertices.push(particle);

			}

		scene.add(particleSystem);
	}



	/**
	 * [particleUpdate description]
	 * @return {[type]} [description]
	 */
	function particleUpdate () {
		if(!particleSystem)
		return;


		particleSystem.rotation.y += 0.0015;

		var pCount = particleCount;
		while (pCount--) {

			// get the particle
			var particle = particles.vertices[pCount];

			// check if we need to reset
			if (particle.z < -6) {
					particle.z = 6;
					//particle.velocity.y = 0;
				}

			//particle.x = particle.x * Math.PI;
			//particle.y = particle.x * Math.PI;
			//particle.z = particle.x * Math.PI;

			// update the velocity with
			// a splat of randomniz
			//particle.velocity.y -= Math.random() * .1;

			// and the position
			//particle.y *= particle.velocity;

			if (SHARKS.length > 0){
					SHARKS[pCount].position = new THREE.Vector3(particle.x, particle.y, particle.z);
				}

		}

			// flag to the particle system
			// that we've changed its vertices.
			particleSystem.geometry.__dirtyVertices = true;
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

		particleUpdate();

		//camera.position.x += ( mouseX - camera.position.x ) * .001;
		//camera.position.y += ( - mouseY - camera.position.y ) * .001;
		if (scrollMarks && scrollMarks.first.inView && !scrollMarks.first.triggerd) {
			rotSpeed = 0.0008;
			loadFirstBlenderScene('scene/scene1.js');
			scrollMarks.first.triggerd = true;
			scrollMarks.second.triggerd = false;
			scrollMarks.third.triggerd = false;
			} else if (scrollMarks && scrollMarks.second.inView && !scrollMarks.second.triggerd) {
				rotSpeed = 0.0014;
				loadSecondBlenderScene('scene/scene2.js');
				scrollMarks.first.triggerd = false;
				scrollMarks.second.triggerd = true;
				scrollMarks.third.triggerd = false;
			} else if (scrollMarks && scrollMarks.third.inView && !scrollMarks.third.triggerd) {
				rotSpeed = 0.0028;
				loadThirdBlenderScene('scene/scene2.js');
				scrollMarks.first.triggerd = false;
				scrollMarks.second.triggerd = false;
				scrollMarks.third.triggerd = true;
			}

		if (scene.children.length > -1) {

			for (var i=0; i < scene.children.length; i++) {
				if(rotationExceptions.indexOf(scene.children[i].name) === -1) {
					sceneObject = scene.children[i];
					sceneObject.rotation.z += rotSpeed;
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

		}
		TWEEN.update();
		camera.lookAt( scene.position );
		composer.render(scene, camera);
		//renderer.render(scene, camera);
	}






	/**
	 * [pick description]
	 * @return {[type]} [description]
	 */
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
/*		setTimeout(function () {
			loadSecondBlenderScene('scene/scene2.js');
		}, 5000);*/


		animate();

	}





	//start if webgl supported
	if ( Modernizr.webgl ){
		window.onload = function () {
			var loader = new THREE.SceneLoader();
			loader.load( 'scene/scene1.js', function () {
				loader.load( 'scene/scene2.js', function () {
					init();
				});
			});
		};
	}





})();