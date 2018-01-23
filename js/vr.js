"use strict";
/*
if (window.opener) {
  var sceneJSONString = window.opener.sceneJSONString;
  initVR();
} else {
  window.alert("This page should only be accessed through the VR Editor.");
}
*/
console.log(navigator.userAgent);
console.log("window.innerWidth is " + window.innerWidth);
console.log("window.innerHeight is " + window.innerHeight);
var sceneJSONString;

if (window.AppInventor) {
  console.log(window.AppInventor.getPrivateWebViewString());
  sceneJSONString = decodeURIComponent(window.AppInventor.getPrivateWebViewString());
  console.log(sceneJSONString);
  initVR();
} else {
  console.log("window.AppInventor does not exist");
  sceneJSONString = decodeURIComponent("%5B%0A%09%7B%0A%09%09%22gravityx%22%3A%200%2C%0A%09%09%22gravityy%22%3A%20-98%2C%0A%09%09%22gravityz%22%3A%200%2C%0A%09%09%22camerax%22%3A%2020%2C%0A%09%09%22cameray%22%3A%2020%2C%0A%09%09%22cameraz%22%3A%2010%2C%0A%09%09%22background%22%3A%20%22%22%2C%0A%09%09%22shadows%22%3A%20false%0A%09%7D%2C%0A%09%5B%5D%2C%0A%09%5B%0A%09%09%7B%0A%09%09%09%22type%22%3A%20%22BoxBufferGeometry%22%2C%0A%09%09%09%22name%22%3A%20%22Box%22%2C%0A%09%09%09%22positionx%22%3A%200%2C%0A%09%09%09%22positiony%22%3A%202%2C%0A%09%09%09%22positionz%22%3A%200%2C%0A%09%09%09%22rotationx%22%3A%200%2C%0A%09%09%09%22rotationy%22%3A%200%2C%0A%09%09%09%22rotationz%22%3A%200%2C%0A%09%09%09%22scalex%22%3A%201%2C%0A%09%09%09%22scaley%22%3A%201%2C%0A%09%09%09%22scalez%22%3A%201%2C%0A%09%09%09%22color%22%3A%205575696%2C%0A%09%09%09%22textureURL%22%3A%20%22%22%2C%0A%09%09%09%22mass%22%3A%2010%2C%0A%09%09%09%22boxwidth%22%3A%204%2C%0A%09%09%09%22boxheight%22%3A%204%2C%0A%09%09%09%22boxdepth%22%3A%204%2C%0A%09%09%09%22linearvelocityx%22%3A%200%2C%0A%09%09%09%22linearvelocityy%22%3A%200%2C%0A%09%09%09%22linearvelocityz%22%3A%200%2C%0A%09%09%09%22angularvelocityx%22%3A%200%2C%0A%09%09%09%22angularvelocityy%22%3A%200%2C%0A%09%09%09%22angularvelocityz%22%3A%200%0A%09%09%7D%2C%0A%09%09%7B%0A%09%09%09%22type%22%3A%20%22SphereBufferGeometry%22%2C%0A%09%09%09%22name%22%3A%20%22Sphere%22%2C%0A%09%09%09%22positionx%22%3A%200%2C%0A%09%09%09%22positiony%22%3A%2012%2C%0A%09%09%09%22positionz%22%3A%200%2C%0A%09%09%09%22rotationx%22%3A%200%2C%0A%09%09%09%22rotationy%22%3A%200%2C%0A%09%09%09%22rotationz%22%3A%200%2C%0A%09%09%09%22scalex%22%3A%201%2C%0A%09%09%09%22scaley%22%3A%201%2C%0A%09%09%09%22scalez%22%3A%201%2C%0A%09%09%09%22color%22%3A%201908039%2C%0A%09%09%09%22textureURL%22%3A%20%22%22%2C%0A%09%09%09%22mass%22%3A%2010%2C%0A%09%09%09%22sphereradius%22%3A%202%2C%0A%09%09%09%22spherewidthsegments%22%3A%2016%2C%0A%09%09%09%22sphereheightsegments%22%3A%2016%2C%0A%09%09%09%22linearvelocityx%22%3A%200%2C%0A%09%09%09%22linearvelocityy%22%3A%200%2C%0A%09%09%09%22linearvelocityz%22%3A%200%2C%0A%09%09%09%22angularvelocityx%22%3A%200%2C%0A%09%09%09%22angularvelocityy%22%3A%200%2C%0A%09%09%09%22angularvelocityz%22%3A%200%0A%09%09%7D%2C%0A%09%09%7B%0A%09%09%09%22type%22%3A%20%22BoxBufferGeometry%22%2C%0A%09%09%09%22name%22%3A%20%22Ground%22%2C%0A%09%09%09%22positionx%22%3A%200%2C%0A%09%09%09%22positiony%22%3A%20-0.1%2C%0A%09%09%09%22positionz%22%3A%200%2C%0A%09%09%09%22rotationx%22%3A%200%2C%0A%09%09%09%22rotationy%22%3A%200%2C%0A%09%09%09%22rotationz%22%3A%200%2C%0A%09%09%09%22scalex%22%3A%201%2C%0A%09%09%09%22scaley%22%3A%201%2C%0A%09%09%09%22scalez%22%3A%201%2C%0A%09%09%09%22color%22%3A%2010581%2C%0A%09%09%09%22textureURL%22%3A%20%22%22%2C%0A%09%09%09%22mass%22%3A%200%2C%0A%09%09%09%22boxwidth%22%3A%2024%2C%0A%09%09%09%22boxheight%22%3A%200.2%2C%0A%09%09%09%22boxdepth%22%3A%2024%2C%0A%09%09%09%22linearvelocityx%22%3A%200%2C%0A%09%09%09%22linearvelocityy%22%3A%200%2C%0A%09%09%09%22linearvelocityz%22%3A%200%2C%0A%09%09%09%22angularvelocityx%22%3A%200%2C%0A%09%09%09%22angularvelocityy%22%3A%200%2C%0A%09%09%09%22angularvelocityz%22%3A%200%0A%09%09%7D%0A%09%5D%2C%0A%09%5B%0A%09%09%7B%0A%09%09%09%22type%22%3A%20%22AmbientLight%22%2C%0A%09%09%09%22name%22%3A%20%22Ambient%20Light%22%2C%0A%09%09%09%22color%22%3A%2016777215%2C%0A%09%09%09%22intensity%22%3A%200.6%0A%09%09%7D%2C%0A%09%09%7B%0A%09%09%09%22type%22%3A%20%22DirectionalLight%22%2C%0A%09%09%09%22name%22%3A%20%22Directional%20Light%22%2C%0A%09%09%09%22positionx%22%3A%204%2C%0A%09%09%09%22positiony%22%3A%2016%2C%0A%09%09%09%22positionz%22%3A%202%2C%0A%09%09%09%22color%22%3A%2016777215%2C%0A%09%09%09%22intensity%22%3A%202%0A%09%09%7D%0A%09%5D%0A%5D");
  initVR();
}

function ptc1() {
  console.log("ptc1 - vr webview: test");
}

function ptc2(s) {
  console.log("ptc2 - vr webview: " + s);
}

function ptc3(s, n) {
  console.log("ptc3 - vr webview: " + s + n);
}

function ptc4(s, b) {
  if (b) {
    console.log("ptc4 - vr webview: true " + s);
  } else {
    console.log("ptc4 - vr webview: false " + s);
  }
}

function return1() {
  return "return1 str";
}

function return2(s) {
  return s;
}

function return3(n) {
  return n;
}

function return4(b) {
  return b;
}

function initVR() {
  var polyfill = new WebVRPolyfill();
  var fullscreenButton = document.getElementById("vr-fullscreen");
  var vrButton = document.getElementById("vr-switch");
  var playButton = document.getElementById("vr-play");
  var playSim = false;
  document.addEventListener("fullscreenchange", function() {
    console.log("fullscreenchange");
  });
  document.addEventListener("webkitfullscreenchange", function() {
    console.log("webkitfullscreenchange");
  });
  document.addEventListener("fullscreenerror", function() {
    console.log("fullscreenerror");
  });
  document.addEventListener("webkitfullscreenerror", function() {
    console.log("webkitfullscreenerror");
  });
  fullscreenButton.addEventListener("click", function() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
    console.log("requesting fullscreen");
  });
  vrButton.addEventListener("click", function() {
    windowHeight = window.innerHeight;
    if (vrDisplay) {
      vrDisplay.requestPresent([{source: renderer.domElement}]);
    } else {
      window.alert("VR not supported: navigator.getVRDisplays() is empty.");
    }
  });
  playButton.addEventListener("click", function() {
    if (playSim) {
      playButton.innerHTML = "Play";
    } else {
      playButton.innerHTML = "Pause";
      if (typeof procedures !== "undefined") {
        if (typeof procedures.onstart === "function") {
          procedures.onstart();
        }
      }
    }
    playSim = !playSim;
  });

  var renderer = new THREE.WebGLRenderer();
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  var windowHeight;

  var hasBackground;

  var shadows;

  var scene, controls, vrEffect, vrDisplay;
  var camera;

  var cameraCube, sceneCube, equirectMaterial;

  var cameraOrtho, sceneOrtho;

  var physicsWorld;

  var rigidBodies = [];

  var huds = [];
  var hudTexts = [];
  var hudPositions = [];

  var margin = 0.01;

  var clock = new THREE.Clock();
  var transformAux1 = new Ammo.btTransform();

  var idToObjectProperties = {};
  var idToObject = {};
  var idToPhysicsBody = {};
  var objectID = -1;

  var idToLightProperties = {};
  var idToLight = {};
  var lightID = -1;

  var inVR = false;

  var touchX;
  var touchY;
  var touch3D;

  init();

  function init() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x32383f);
    renderer.autoClear = false;
    //renderer.shadowMap.enabled = true;
    //renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(renderer.domElement);
    canvas = renderer.domElement;

    cameraCube = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10000);

    cameraOrtho = new THREE.OrthographicCamera(-window.innerWidth / 2, window.innerWidth / 2, window.innerHeight / 2, -window.innerHeight / 2, 1, 10);
    cameraOrtho.position.z = 10;

    scene = new THREE.Scene();

    sceneCube = new THREE.Scene();

    sceneOrtho = new THREE.Scene();

    vrEffect = new THREE.VREffect(renderer);
    vrEffect.setSize(window.innerWidth, window.innerHeight);
    vrEffect.autoSubmitFrame = false;

    var collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
    var dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
    var broadphase = new Ammo.btDbvtBroadphase();
    var solver = new Ammo.btSequentialImpulseConstraintSolver();
    physicsWorld = new Ammo.btDiscreteDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration);

    var equirectShader = THREE.ShaderLib["equirect"];

    equirectMaterial = new THREE.ShaderMaterial({fragmentShader: getFrag(), vertexShader: equirectShader.vertexShader, uniforms: equirectShader.uniforms, depthWrite: false, side: THREE.BackSide});

    var backgroundMesh = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100), equirectMaterial);
    sceneCube.add(backgroundMesh);

    importScene(JSON.parse(sceneJSONString));

    Reticulum.init(camera, {
        proximity: false,
        clickevents: true,
        near: null,
        far: null,
        reticle: {
            visible: true,
            restPoint: 0.1,
            color: 0xcc0000,
            innerRadius: 0.0001,
            outerRadius: 0.003,
            hover: {
                color: 0xcc0000,
                innerRadius: 0.02,
                outerRadius: 0.024,
                speed: 5,
                vibrate: 50
            }
        },
        fuse: {
            visible: false,
            duration: 2.5,
            color: 0x00fff6,
            innerRadius: 0.045,
            outerRadius: 0.06,
            vibrate: 100,
            clickCancelFuse: false
        }
    });

    navigator.getVRDisplays().then(function(vrDisplays) {
        if (false && vrDisplays.length) {
          vrDisplay = vrDisplays[0];
          controls = new THREE.VRControls(camera);
          vrDisplay.requestAnimationFrame(render);
        } else {
          controls = new THREE.OrbitControls(camera, renderer.domElement);
          requestAnimationFrame(render);
        }
      });

    window.addEventListener("resize", onWindowResize);
    window.addEventListener("vrdisplaypresentchange", onWindowResize);
    window.addEventListener("vrdisplaypresentchange", resizeHUDs);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
  }

  function onTouchStart(event) {
    touchX = event.clientX;
    touchY = event.clientY;
    touch3D = (new THREE.Vector3()).set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5).unproject(camera);
    if (typeof procedures !== "undefined") {
      if (typeof procedures.ontouchstart === "function") {
        procedures.ontouchstart();
      }
    }
  }

  function onTouchMove(event) {
    touchX = event.clientX;
    touchY = event.clientY;
    touch3D = (new THREE.Vector3()).set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5).unproject(camera);
  }

  function onTouchEnd() {
    touchX = null;
    touchY = null;
    touch3D = null;
  }

  function resizeHUDs() {
    for(var i = 0; i < huds.length; i++) {
      var hud = huds[i];
      var scaleFactor = 60 * windowHeight / 800;
      if (!inVR) {
        hud.scale.set(hud.scale.x / scaleFactor, hud.scale.y / scaleFactor, 1);
        hud.position.set(hud.position.x / scaleFactor, hud.position.y / scaleFactor, 1);
      } else {
        huds[i].scale.set(hud.scale.x * scaleFactor, hud.scale.y * scaleFactor, 1);
        hud.position.set(hud.position.x * scaleFactor, hud.position.y * scaleFactor, 1);
      }
    }
    inVR = !inVR;
  }

  function getHUD(i, text) {
    var canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 256;
    var ctx = canvas.getContext("2d");
    ctx.font = "32pt BlinkMacSystemFont";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineWidth = 4;
    ctx.lineTo(0, canvas.height);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(canvas.width, 0);
    ctx.lineTo(0, 0);
    ctx.strokeStyle="white";
    ctx.stroke();
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(2, 2, canvas.width - 4, canvas.height - 4);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    hudTexts[i] = text;
    return canvas;
  }

  function getFrag() {
    return [
      "uniform sampler2D tEquirect;",
      "varying vec3 vWorldPosition;",
      "#include <common>",
      "void main() {",
        "vec3 direction = normalize( vWorldPosition );",
        "vec2 sampleUV;",
        "sampleUV.y = asin( direction.y ) * 0.3183098861 + 0.5;",
        "sampleUV.x = atan( direction.z, direction.x ) * 0.1591549430 + 0.5;",
        "gl_FragColor = texture2D( tEquirect, sampleUV );",
      "}"
    ].join("\n");
  }

  function createRigidBody(object, physicsShape, mass, linearvelocityx, linearvelocityy, linearvelocityz, angularvelocityx, angularvelocityy, angularvelocityz, id) {
    var transform = new Ammo.btTransform();
    transform.setIdentity();
    transform.setOrigin(new Ammo.btVector3(object.position.x, object.position.y, object.position.z));
    transform.setRotation(new Ammo.btQuaternion(object.quaternion.x, object.quaternion.y, object.quaternion.z, object.quaternion.w));
    var motionState = new Ammo.btDefaultMotionState(transform);
    var localInertia = new Ammo.btVector3(0, 0, 0);
    physicsShape.calculateLocalInertia(mass, localInertia);
    var rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, physicsShape, localInertia);
    var body = new Ammo.btRigidBody(rbInfo);
    body.setLinearVelocity(new Ammo.btVector3(linearvelocityx, linearvelocityy, linearvelocityz));
    body.setAngularVelocity(new Ammo.btVector3(angularvelocityx, angularvelocityy, angularvelocityz));
    object.userData.physicsBody = body;
    scene.add(object);
    if (mass > 0) {
      rigidBodies.push(object);
      body.setActivationState(4);
    }
    physicsWorld.addRigidBody(body);
    idToPhysicsBody[id] = body;
  }

  function importScene(sceneJSON) {
    var worldJSON = sceneJSON[0];
    physicsWorld.setGravity(new Ammo.btVector3(worldJSON.gravityx, worldJSON.gravityy, worldJSON.gravityz));
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 10000);
    camera.position.set(worldJSON.camerax, worldJSON.cameray, worldJSON.cameraz);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);
    if (worldJSON.background !== "") {
      var equirectTexture = new THREE.TextureLoader().load(worldJSON.background);
      equirectTexture.mapping = THREE.EquirectangularReflectionMapping;
      equirectMaterial.uniforms["tEquirect"].value = equirectTexture;
      hasBackground = false;
    } else {
      hasBackground = true;
    }
    shadows = worldJSON.shadows;
    renderer.shadowMap.enabled = shadows;
    var labelsJSON = sceneJSON[1];
    for (var i = 0; i < labelsJSON.length; i++) {
      var labelJSON = labelsJSON[i];
      var hudTexture = new THREE.Texture(getHUD(i, ""));
      hudTexture.needsUpdate = true;
      createHUD(i, hudTexture, 2 * labelJSON.left - 300, 350 - 2 * labelJSON.top);
      hudPositions.push([labelJSON.left, labelJSON.top]);
    }
    var objectsJSON = sceneJSON[2];
    for (var i = 0; i < objectsJSON.length; i++) {
      var objectJSON = objectsJSON[i];
      addObjectJSON(createObjectJSON(objectJSON));
    }
    var lightsJSON = sceneJSON[3];
    for (var i = 0; i < lightsJSON.length; i++) {
      var lightJSON = lightsJSON[i];
      addLightJSON(createLightJSON(lightJSON));
    }
  }

  function createObjectJSON(properties) {
    var id = ++objectID;
    idToObjectProperties[id] = properties;
    return id;
  }

  createObject = createObjectJSON;

  function createLightJSON(properties) {
    var id = ++lightID;
    idToLightProperties[id] = properties;
    return id;
  }

  createLight = createLightJSON;

  function addObjectJSON(id) {
    if (idToObject.hasOwnProperty(id)) {
      alert("object already in scene");
      return;
    }
    var objectJSON = idToObjectProperties[id];
    var objectGeometry;
    switch (objectJSON.type) {
      case "BoxBufferGeometry":
        objectGeometry = new THREE.BoxGeometry(objectJSON.boxwidth, objectJSON.boxheight, objectJSON.boxdepth);
        break;
      case "ConeBufferGeometry":
        objectGeometry = new THREE.ConeGeometry(objectJSON.coneradius, objectJSON.coneheight, objectJSON.coneradialsegments);
        break;
      case "CylinderBufferGeometry":
        objectGeometry = new THREE.CylinderGeometry(objectJSON.cylinderradiustop, objectJSON.cylinderradiusbottom, objectJSON.cylinderheight, objectJSON.cylinderradialsegments);
        break;
      case "DodecahedronBufferGeometry":
        objectGeometry = new THREE.DodecahedronGeometry(objectJSON.dodecahedronradius);
        break;
      case "IcosahedronBufferGeometry":
        objectGeometry = new THREE.IcosahedronGeometry(objectJSON.icosahedronradius);
        break;
      case "OctahedronBufferGeometry":
        objectGeometry = new THREE.OctahedronGeometry(objectJSON.octahedronradius);
        break;
      case "SphereBufferGeometry":
        objectGeometry = new THREE.SphereGeometry(objectJSON.sphereradius, objectJSON.spherewidthsegments, objectJSON.sphereheightsegments);
        break;
      case "TetrahedronBufferGeometry":
        objectGeometry = new THREE.TetrahedronGeometry(objectJSON.tetrahedronradius);
        break;
      default:
        return;
    }
    processObject(objectGeometry, objectJSON.positionx, objectJSON.positiony, objectJSON.positionz, objectJSON.rotationx, objectJSON.rotationy, objectJSON.rotationz, objectJSON.scalex, objectJSON.scaley, objectJSON.scalez, objectJSON.color, objectJSON.textureURL, objectJSON.mass, objectJSON.linearvelocityx, objectJSON.linearvelocityy, objectJSON.linearvelocityz, objectJSON.angularvelocityx, objectJSON.angularvelocityy, objectJSON.angularvelocityz, id);
  }

  addObject = addObjectJSON;

  function addLightJSON(id) {
    if (idToLight.hasOwnProperty(id)) {
      alert("light already in scene");
      return;
    }
    var lightJSON = idToLightProperties[id];
    var light;
    switch (lightJSON.type) {
      case "AmbientLight":
        light = new THREE.AmbientLight(lightJSON.color, lightJSON.intensity);
        break;
      case "DirectionalLight":
        light = new THREE.DirectionalLight(lightJSON.color, lightJSON.intensity);
        light.position.set(lightJSON.positionx, lightJSON.positiony, lightJSON.positionz);
        break;
      case "HemisphereLight":
        light = new THREE.HemisphereLight(lightJSON.skycolor, lightJSON.groundcolor, lightJSON.intensity);
        light.position.set(lightJSON.positionx, lightJSON.positiony, lightJSON.positionz);
        break;
      case "PointLight":
        light = new THREE.PointLight(lightJSON.color, lightJSON.intensity);
        light.position.set(lightJSON.positionx, lightJSON.positiony, lightJSON.positionz);
        break;
      case "SpotLight":
        light = new THREE.SpotLight(lightJSON.color, lightJSON.intensity, lightJSON.distance, lightJSON.angle, lightJSON.penumbra, lightJSON.decay);
        light.position.set(lightJSON.positionx, lightJSON.positiony, lightJSON.positionz);
        break;
      default:
        return;
    }
    processLight(light, id);
  }

  addLight = addLightJSON;

  function createHUD(i, texture, x, y) {
    var hudMaterial = new THREE.SpriteMaterial({map: texture});
    var hud = new THREE.Sprite(hudMaterial);
    var hudWidth = hudMaterial.map.image.width;
    var hudHeight = hudMaterial.map.image.height;
    var scaleFactor = window.innerHeight / 800;
    hud.scale.set(200 * scaleFactor, 100 * scaleFactor, 1);
    hud.position.set(x * scaleFactor, y * scaleFactor, 1);
    huds[i] = hud;
    sceneOrtho.add(hud);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    cameraCube.aspect = window.innerWidth / window.innerHeight;
    cameraCube.updateProjectionMatrix();

    cameraOrtho.left = -window.innerWidth / 2;
    cameraOrtho.right = window.innerWidth / 2;
    cameraOrtho.top = window.innerHeight / 2;
    cameraOrtho.bottom = -window.innerHeight / 2;
    cameraOrtho.updateProjectionMatrix();

    vrEffect.setSize(window.innerWidth, window.innerHeight);
  }

  function render() {
    if (vrDisplay) {
      vrDisplay.requestAnimationFrame(render);
    } else {
      requestAnimationFrame(render);
    }
    if (playSim) {
      var deltaTime = clock.getDelta();
      updatePhysics(deltaTime);
      if (typeof procedures !== "undefined") {
        if (typeof procedures.onrender === "function") {
          procedures.onrender();
        }
      }
    }
    controls.update();
    Reticulum.update();
    renderer.clear();
    cameraCube.rotation.copy(camera.rotation);
    vrEffect.render(sceneCube, cameraCube);
    if (hasBackground) {
      renderer.clear();
    }
    vrEffect.render(scene, camera);
    vrEffect.render(sceneOrtho, cameraOrtho);
    vrEffect.submitFrame();
  }

  function updatePhysics(deltaTime) {
    physicsWorld.stepSimulation(deltaTime, 10);
    for (var i = 0; i < rigidBodies.length; i++) {
      var ms = rigidBodies[i].userData.physicsBody.getMotionState();
      if (ms) {
        ms.getWorldTransform(transformAux1);
        var p = transformAux1.getOrigin();
        var q = transformAux1.getRotation();
        rigidBodies[i].position.set(p.x(),p.y(),p.z());
        rigidBodies[i].quaternion.set(q.x(), q.y(), q.z(), q.w());
      }
    }
  }

  function processObject(objectGeometry, positionx, positiony, positionz, rotationx, rotationy, rotationz, scalex, scaley, scalez, color, textureURL, mass, linearvelocityx, linearvelocityy, linearvelocityz, angularvelocityx, angularvelocityy, angularvelocityz, id) {
    objectGeometry.vertices.forEach(function(v) {
      v.x = v.x * scalex;
      v.y = v.y * scaley;
      v.z = v.z * scalez;
    });
    var objectMaterial;
    if (textureURL === "") {
      objectMaterial = new THREE.MeshPhongMaterial({color: color, flatShading: true, side: THREE.DoubleSide});
    } else {
      var texture = new THREE.TextureLoader().load(textureURL);
      objectMaterial = new THREE.MeshPhongMaterial({color: color, map: texture, flatShading: true, side: THREE.DoubleSide});
    }
    var object = new THREE.Mesh(objectGeometry, objectMaterial);
    if (shadows) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
    var objectShape = new Ammo.btConvexHullShape();
    for (var i = 0; i < objectGeometry.vertices.length; i++) {
      objectShape.addPoint(new Ammo.btVector3(objectGeometry.vertices[i].x, objectGeometry.vertices[i].y, objectGeometry.vertices[i].z));
    }
    object.position.set(positionx, positiony, positionz);
    object.rotation.set(rotationx, rotationy, rotationz);
    objectShape.setMargin(margin);
    createRigidBody(object, objectShape, mass, linearvelocityx, linearvelocityy, linearvelocityz, angularvelocityx, angularvelocityy, angularvelocityz, id);
    idToObject[id] = object;
  }

  function processLight(light, id) {
    if (!light.isAmbientLight && !light.isHemisphereLight) {
      light.shadow.mapSize.width = 512;
      light.shadow.mapSize.height = 512;
      light.shadow.camera.left = -25;
      light.shadow.camera.right = 25;
      light.shadow.camera.top = 25;
      light.shadow.camera.bottom = -25;
      light.shadow.camera.near = 0.5;
      light.shadow.camera.far = 100;
      if (shadows) {
        light.castShadow = true;
      }
    }
    scene.add(light);
    idToLight[id] = light;
  }

  setObjectProperty = function setObjectProperty(id, property, value) {
    if (!idToObjectProperties.hasOwnProperty(id)) {
      alert("invalid id");
      return;
    }
    var properties = idToObjectProperties[id];
    properties[property] = value;
    if (idToObject.hasOwnProperty(id)) {
      var object = idToObject[id];
      switch (property) {
        case "positionx":
          object.userData.physicsBody.getWorldTransform().setOrigin(new Ammo.btVector3(value, object.position.y, object.position.z));
          break;
        case "positiony":
          object.userData.physicsBody.getWorldTransform().setOrigin(new Ammo.btVector3(object.position.x, value, object.position.z));
          break;
        case "positionz":
          object.userData.physicsBody.getWorldTransform().setOrigin(new Ammo.btVector3(object.position.x, object.position.y, value));
          break;
        case "rotationx":
          var newQuaternion = new Ammo.btQuaternion();
          newQuaternion.setEulerZYX(object.rotation.z, object.rotation.y, value);
          object.userData.physicsBody.getWorldTransform().setRotation(newQuaternion);
          break;
        case "rotationy":
          var newQuaternion = new Ammo.btQuaternion();
          newQuaternion.setEulerZYX(object.rotation.z, value, object.rotation.x);
          object.userData.physicsBody.getWorldTransform().setRotation(newQuaternion);
          break;
        case "rotationz":
          var newQuaternion = new Ammo.btQuaternion();
          newQuaternion.setEulerZYX(value, object.rotation.y, object.rotation.x);
          object.userData.physicsBody.getWorldTransform().setRotation(newQuaternion);
          break;
        case "color":
          object.material.color = new THREE.Color(value);
          break;
        default:
          removeObject(id);
          addObjectJSON(properties, id);
      }
    }
  }

  getObjectProperty = function getObjectProperty(id, property) {
    if (!idToObjectProperties.hasOwnProperty(id)) {
      alert("invalid id");
      return;
    }
    var properties = idToObjectProperties[id];
    if (idToObject.hasOwnProperty(id)) {
      var object = idToObject[id];
      var physicsBody = idToPhysicsBody[id];
    } else {
      return properties[property];
    }
    switch (property) {
      case "positionx":
        return object.position.x;
      case "positiony":
        return object.position.y;
      case "positionz":
        return object.position.z;
      case "rotationx":
        return object.rotation.x;
      case "rotationy":
        return object.rotation.y;
      case "rotationz":
        return object.rotation.z;
      case "color":
        return object.material.color.getHex();
      case "linearvelocityx":
        return physicsBody.getLinearVelocity().x();
      case "linearvelocityy":
        return physicsBody.getLinearVelocity().y();
      case "linearvelocityz":
        return physicsBody.getLinearVelocity().z();
      case "angularvelocityx":
        return physicsBody.getAngularVelocity().x();
      case "angularvelocityy":
        return physicsBody.getAngularVelocity().y();
      case "angularvelocityz":
        return physicsBody.getAngularVelocity().z();
      default:
        return properties[property];
    }
  }

  setLightProperty = function setLightProperty(id, property, value) {
    if (!idToLightProperties.hasOwnProperty(id)) {
      alert("invalid id");
      return;
    }
    var properties = idToLightProperties[id];
    properties[property] = value;
    if (idToLight.hasOwnProperty(id)) {
      var light = idToLight[id];
      switch (property) {
        case "positionx":
          light.position.x = value;
          break;
        case "positiony":
          light.position.y = value;
          break;
        case "positionz":
          light.position.z = value;
          break;
        case "color":
          light.color = new THREE.Color(value);
          break;
        case "skycolor":
          light.skyColor = new THREE.Color(value);
          break;
        case "groundcolor":
          light.groundColor = new THREE.Color(value);
          break;
        default:
          light[property] = value;
      }
    }
  }

  getLightProperty = function getLightProperty(id, property) {
    if (!idToLightProperties.hasOwnProperty(id)) {
      alert("invalid id");
      return;
    }
    return idToLightProperties[id][property];
  }

  removeObject = function removeObject(id) {
    if (!idToObject.hasOwnProperty(id)) {
      alert("object not in scene");
      return;
    }
    var properties = idToObjectProperties[id];
    var object = idToObject[id];
    var physicsBody = idToPhysicsBody[id];
    properties.positionx = object.position.x;
    properties.positiony = object.position.y;
    properties.positionz = object.position.z;
    properties.rotationx = object.rotation.x;
    properties.rotationy = object.rotation.y;
    properties.rotationz = object.rotation.z;
    properties.linearvelocityx = physicsBody.getLinearVelocity().x();
    properties.linearvelocityy = physicsBody.getLinearVelocity().y();
    properties.linearvelocityz = physicsBody.getLinearVelocity().z();
    properties.angularvelocityx = physicsBody.getAngularVelocity().x();
    properties.angularvelocityy = physicsBody.getAngularVelocity().y();
    properties.angularvelocityy = physicsBody.getAngularVelocity().z();
    rigidBodies.splice(rigidBodies.indexOf(object), 1);
    scene.remove(object);
    physicsWorld.removeRigidBody(physicsBody);
    delete idToObject[id];
    delete idToPhysicsBody[id];
  }

  removeLight = function removeLight(id) {
    if (!idToLight.hasOwnProperty(id)) {
      alert("light not in scene");
      return;
    }
    scene.remove(idToLight[id]);
    delete idToLight[id];
  }

  setCameraProperty = function setCameraProperty(property, value) {
    switch (property) {
      case "positionx":
        camera.position.x = value;
        break;
      case "positiony":
        camera.position.y = value;
        break;
      case "positionz":
        camera.position.z = value;
        break;
      case "targetx":
        controls.target.x = value;
        break;
      case "targety":
        controls.target.y = value;
        break;
      case "targetz":
        controls.target.z = value;
        break;
      case "fov":
        camera.fov = value;
        camera.updateProjectionMatrix();
        break;
      default:
        controls.enabled = value;
    }
  }

  getCameraProperty = function getCameraProperty(property) {
    switch (property) {
      case "positionx":
        return camera.position.x;
      case "positiony":
        return camera.position.y;
      case "positionz":
        return camera.position.z;
      case "targetx":
        return controls.target.x;
      case "targety":
        return controls.target.y;
      case "targetz":
        return controls.target.z;
      case "fov":
        return camera.fov;
      default:
        return controls.enabled;
    }
  }

  getTouch = function getTouch(property) {
    switch (property) {
      case "touchx":
        return touchX;
      case "touchy":
        return touchY;
      case "touch3dx":
        return touch3D.x;
      case "touch3dy":
        return touch3D.y;
      default:
        return touch3D.z;
    }
  }

  getObjectCount = function getObjectCount() {
    return rigidBodies.length;
  }

  getHUDText = function getHUDText(i) {
    return hudTexts[i];
  }

  setGravity = function setGravity(x, y, z) {
    physicsWorld.setGravity(new Ammo.btVector3(x, y, z));
  }

  setBackground = function setBackground(background) {
    if (background !== "") {
      var equirectTexture = new THREE.TextureLoader().load(background);
      equirectTexture.mapping = THREE.EquirectangularReflectionMapping;
      equirectMaterial.uniforms["tEquirect"].value = equirectTexture;
      renderer.autoClear = false;
    } else {
      renderer.autoClear = true;
    }
  }

  setHUDText = function setHUDText(i, text) {
    sceneOrtho.remove(huds[i]);
    var hudTexture = new THREE.Texture(getHUD(i, text));
    hudTexture.needsUpdate = true;
    createHUD(i, hudTexture, 2 * hudPositions[i][0] - 300, 350 - 2 * hudPositions[i][1]);
  }
}

var createObject;
var createLight;

var addObject;
var addLight;

var setObjectProperty;
var getObjectProperty;

var setLightProperty;
var getLightProperty;

var removeObject;
var removeLight;

var setCameraProperty;
var getCameraProperty;

var getTouch;

var getObjectCount;

var getHUDText;

var setGravity;
var setBackground;

var setHUDText;

var canvas;
