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
		ratio = getPixelRatio();

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

	function createLoadingScene () {
		var object, geometry, material, light, count = 500, range = 300;
		var context = {
			scene : new THREE.Scene(),
			camera : new THREE.PerspectiveCamera( 54, window.innerWidth / window.innerHeight, 1, 1000 )
		};

		context.camera.position.z = 100;

		material = new THREE.MeshLambertMaterial( { color:0xffffff } );
		geometry = new THREE.CubeGeometry( 4,4,4 );

		for( var i = 0; i < count; i++ ) {

			object = new THREE.Mesh( geometry, material );

			object.position.x = ( Math.random() - 0.5 ) * range;
			object.position.y = ( Math.random() - 0.5 ) * range;
			object.position.z = ( Math.random() - 0.5 ) * range;

			object.rotation.x = Math.random() * 6;
			object.rotation.y = Math.random() * 6;
			object.rotation.z = Math.random() * 6;

			object.matrixAutoUpdate = false;
			object.updateMatrix();

			context.scene.add( object );

		}

		context.scene.matrixAutoUpdate = false;
		context.scene.fog = new THREE.Fog( 0x3C3C3C, 1, 250 );

		context.scene.add( new THREE.AmbientLight( 0x1c1c1c ) );

		light = new THREE.PointLight( 0xffffff );
		context.scene.add( light );

		light = new THREE.DirectionalLight( 0x111111 );
		light.position.x = 1;
		context.scene.add( light );

		return context;

	}

	function render() {

		camera.position.x += ( mouseX - camera.position.x ) * .001;
		camera.position.y += ( - mouseY - camera.position.y ) * .001;

		camera.lookAt( scene.position );
		//composer.render(scene, camera);
		renderer.render(scene, camera);
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

		var loadScene = createLoadingScene();

		scene = loadScene.scene;
		camera = loadScene.camera;

		renderer = new THREE.WebGLRenderer({ antialiasing: true });
		renderer.setSize(width * ratio, height * ratio);
		renderer.setClearColor( 0x3C3C3C, 1 );
		renderer.domElement.style.position = "relative";

/*		// postprocessing

		composer = new THREE.EffectComposer( renderer );
		composer.addPass( new THREE.RenderPass( scene, camera ) );

		var effect = new THREE.ShaderPass( THREE.DotScreenShader );
		effect.uniforms[ 'scale' ].value = 10;
		composer.addPass( effect );

		var effect = new THREE.ShaderPass( THREE.RGBShiftShader );
		effect.uniforms[ 'amount' ].value = 0.0015;
		effect.renderToScreen = true;
		composer.addPass( effect );*/


		container.appendChild(renderer.domElement);

		animate();

	}

	window.onload = function () {
		init();
	};

})();