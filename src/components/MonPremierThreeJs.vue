<template>
  <div>ca marche</div>
  <div ref="container"></div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import * as THREE from 'three'

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

    console.log('scene', scene)

    renderer.setSize(width, height)
    container.value.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 5

    const animate = () => {
      requestAnimationFrame(animate)

      cube.rotation.x += 0.01
      cube.rotation.y += 0.01

      renderer.render(scene, camera)
    }

    animate()
  })
</script>
