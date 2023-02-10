<template>
  <div>ca marche</div>
  <div ref="container"></div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import * as THREE from 'three'
  import {OrbitControls, MapControls} from 'three/examples/jsm/controls/OrbitControls'


  const container = ref(null)

  onMounted(() => {
    // const width = container.value.offsetWidth
    // const height = container.value.offsetHeight
    const width = 450
    const height = 300

    console.log('width', width, height)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true })

    renderer.setSize(width, height)
    container.value.appendChild(renderer.domElement)

    // pour ajouter le cube
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshBasicMaterial({ color: 0xf92ad0 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    cube.position.set(2, 0, 0)

    // pour ajouter la sphere
    const sphereGeometry = new THREE.SphereGeometry(2, 25, 25)
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x0000FF,
      wireframe: true
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    scene.add(sphere)

    // sphere.position.x = -3  // ou
    sphere.position.set(-3, 0, 0)
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

    const animate = () => {
      requestAnimationFrame(animate)

      cube.rotation.x += 0.01
      cube.rotation.y += 0.01

      step += speed
      sphere.position.y = 1 * Math.abs(Math.sin(step))

      renderer.render(scene, camera)
    }

    animate()
  })
</script>
