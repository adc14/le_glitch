(function () {

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
		segments = 12;

	var mouse = new THREE.Vector2(),
		offset = new THREE.Vector3( 10, 10, 10 ),
		INTERSECTED,
		controls;

	var pickingData = [], pickingTexture, pickingScene;
	var objects = [], highlightBox;

	var clock = new THREE.Clock();

	var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });

	var defaultCamera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, 0.1, 10000 );
	var firstPersonCamera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, 1, 20000 );
	var camera = firstPersonCamera;

	var projector = new THREE.Projector();
	var raycaster = new THREE.Raycaster();

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
			sphere.scale.y = 1.2;
			sphere.scale.x = 0.9;


			// now populate the array of attributes
			var vertices = sphere.geometry.vertices;
			var values = attributes.displacement.value
			for(var v = 0; v < vertices.length; v++) {
			    values.push(Math.random() * 30);
			}

			scene.add(sphere);

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






	function callbackFinished ( result ) {

		camera = result.currentCamera;
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		scene = result.scene;
		handle_update( result, 1 );
		scene.fog = new THREE.Fog( 0x3C3C3C, 1, 250 );
		scene.add( new THREE.AmbientLight( 0x3c3c3c ) );

		for ( var i = 0; i < scene.children.length; i++ ) {
			if ( scene.children[0] instanceof THREE.Mesh )
				sceneMeshObjtectsGraph.push(scene.children[i]);
		}

		composer = new THREE.EffectComposer( renderer );
		composer.addPass( new THREE.RenderPass( scene, camera ) );

		effect = new THREE.ShaderPass( THREE.RGBShiftShader );
		effect.uniforms[ 'amount' ].value = 0.0015;
		effect.renderToScreen = true;
		composer.addPass( effect );

	}





	// nuttöööö
	function loadBlenderScene ( path ) {
		var loader = new THREE.SceneLoader();
		loader.callbackProgress = callbackProgress;
		loader.load( path, callbackFinished);
	}





	function render(time) {

		// update the amplitude based on
		// the frame value
		uniforms.amplitude.value = Math.sin(time*0.0006) * 0.009;
		frame += 0.1;

		//camera.position.x += ( mouseX - camera.position.x ) * .001;
		//camera.position.y += ( - mouseY - camera.position.y ) * .001;

		if (sceneMeshObjtectsGraph.length > -1) {

			for (var i=0; i < sceneMeshObjtectsGraph.length; i++) {
				sceneObject = sceneMeshObjtectsGraph[0];
				sceneObject.rotation.z += 0.0005;
			}

			glitchCounter = (glitchCounter + 1) % (100 + glitchRepeats);

			if (glitchCounter > 98 && glitchCounter < (100 + glitchRepeats)) {

				if (glitchRepeatCounter === 0) {
					glitchStart = effect.uniforms[ 'amount' ].value;
					glitchRepeatCounter++;
				} else if (glitchRepeatCounter === glitchRepeats) {
					effect.uniforms[ 'amount' ].value = glitchStart;
					glitchRepeatCounter = 0;
				} else {
					effect.uniforms[ 'amount' ].value = Math.random() * 0.035;
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

		loadBlenderScene('scene/scene.js');


		animate();

	}





	//start if webgl supported
	if ( Modernizr.webgl ){
		window.onload = function () { init(); };
	}





})();