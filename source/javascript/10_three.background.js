(function () {

	var width = window.innerWidth,
		height = window.innerHeight,
		halfWidth = width / 2,
		halfHeight = height / 2,
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
		rotObject = null;

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
			mouseX = ( event.clientX - halfWidth );
			mouseY = ( event.clientY - halfHeight );
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


	function callbackFinished ( result ) {

		camera = result.currentCamera;
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		scene = result.scene;
		handle_update( result, 1 );
		scene.fog = new THREE.Fog( 0x3C3C3C, 1, 250 );
		scene.add( new THREE.AmbientLight( 0x3c3c3c ) );

		for ( var i = 0; i < scene.children.length; i++ ) {
			if ( scene.children[0] instanceof THREE.Mesh && scene.children[0].name === "Icosphere" )
				rotObject = scene.children[0];
		}

		composer = new THREE.EffectComposer( renderer );
		composer.addPass( new THREE.RenderPass( scene, camera ) );

/*		var effect = new THREE.ShaderPass( THREE.DotScreenShader );
		effect.uniforms[ 'scale' ].value = 10;
		composer.addPass( effect );*/

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

	function render() {

		//camera.position.x += ( mouseX - camera.position.x ) * .001;
		//camera.position.y += ( - mouseY - camera.position.y ) * .001;

		if (rotObject) {

			rotObject.rotation.z += .005;

			glitchCounter = (glitchCounter + 1) % (100 + glitchRepeats);

			if (glitchCounter > 98 && glitchCounter < (100 + glitchRepeats)) {

				if (glitchRepeatCounter === 0) {
					glitchStart = effect.uniforms[ 'amount' ].value;
					glitchRepeatCounter++;
				} else if (glitchRepeatCounter === glitchRepeats) {
					effect.uniforms[ 'amount' ].value = glitchStart;
					glitchRepeatCounter = 0;
				} else {
					effect.uniforms[ 'amount' ].value = Math.random() * 0.015;
					glitchRepeatCounter++;
				}
			}

		}

		camera.lookAt( scene.position );
		composer.render(scene, camera);
		//renderer.render(scene, camera);
	}

	function animate() {

		requestAnimationFrame( animate );

		render();

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
		renderer.setSize(width * ratio, height * ratio);
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