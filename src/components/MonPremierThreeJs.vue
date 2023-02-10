<template>
  <div>ca marche</div>
  <div ref="container" class="bg-transparent"></div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import * as THREE from 'three'
  import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
  import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
  import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
  // import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader'


  const container = ref(null)

  onMounted(() => {

    const width = 880
    const height = 300

    

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true })

    renderer.setSize(width, height)

    container.value.appendChild(renderer.domElement)

    /**
     *  turusKnot
    */
    const turusKnotGeometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 )
    const turusKnotMaterial = new THREE.MeshNormalMaterial()
    const torusKnot = new THREE.Mesh( turusKnotGeometry, turusKnotMaterial )
    scene.add( torusKnot )
    let scaleMatrix = new THREE.Matrix4()
    scaleMatrix.makeScale(0.09, 0.09, 0.09)
    torusKnot.applyMatrix4(scaleMatrix)

    // pour ajouter le cube
    const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9)
    const material = new THREE.MeshBasicMaterial({ color: 0xf92ad0 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    cube.position.set(6, 0, 0)

    // pour ajouter la sphere
    const sphereGeometry = new THREE.SphereGeometry(0.9, 25, 25)
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x0000FF,
      wireframe: true
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    scene.add(sphere)

    // sphere.position.x = -3  // ou
    sphere.position.set(-7, 0, 0)
    let step = 0
    let speed = 0.01

    // pour les axes
    const axesHelper = new THREE.AxesHelper(5)
    scene.add(axesHelper)

    // l'orbite
    const orbit = new OrbitControls(camera, renderer.domElement)

    // camera.position.z = 5
    camera.position.set(0, 0, 5)

    orbit.update()

    /**
    * text geometry animation
    */
    const fontLoader = new FontLoader()

    fontLoader.load('../../node_modules/three/examples/fonts/droid/droid_serif_bold.typeface.json', (font) => {

      const textGeometry = new TextGeometry('Bonjour tout le monde', {
        font: font,
        size: 1.2,
        height: 1.2,
      })

      const textMaterialFront = new THREE.MeshBasicMaterial({ color: 0xaaaad0 })
      const textMaterialRear = new THREE.MeshBasicMaterial({ color: 0x080ab0 })

      const monTextGeometry = new THREE.Mesh(textGeometry, [
        textMaterialFront,
        textMaterialRear
      ])

      monTextGeometry.castShadow = true
      // monTextGeometry.position.y += 15
      // monTextGeometry.position.z -= 40
      // monTextGeometry.position.x = -8
      // monTextGeometry.rotate.y = -0.50
      monTextGeometry.position.set(3, 3, 0)
      scene.add(monTextGeometry)

    })

    var clock = new THREE.Clock()

    const animate = () => {

      requestAnimationFrame(animate)

      cube.rotation.x += 0.01
      cube.rotation.y += 0.01



      step += speed
      sphere.position.y = 1 * Math.abs(Math.sin(step))
      sphere.position.z = 1 * Math.abs(Math.sin(step))

      const time = - performance.now() * 0.0003;

      camera.position.x = 8 * Math.cos( time );
      camera.position.z = 8 * Math.sin( time );
      camera.lookAt( scene.position );



      renderer.render(scene, camera)
    }

    animate()
  })
</script>
