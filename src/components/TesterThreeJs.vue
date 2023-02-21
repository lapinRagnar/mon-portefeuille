<template>
  <div>ca marche encore</div>
  <div class=" mon-logo q-mb-xl" ref="container">&nbsp</div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import * as THREE from 'three'




  const container = ref(null)

  onMounted(() => {

    const width = 170
    const height = 70

    const scene = new THREE.Scene()


    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true  })

    renderer.setSize(width, height)

    container.value.appendChild(renderer.domElement)

    camera.position.set(0, 0, 5)


    const geometryBox = new THREE.BoxGeometry( 10, 10, 5 )
    const materialBox = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
    const cube = new THREE.Mesh( geometryBox, materialBox )
    scene.add( cube )



    const animate = () => {

      requestAnimationFrame(animate)

      renderer.render(scene, camera)
    }

    animate()

  })
</script>

<style lang="scss">
  .mon-logo{
    margin: 0;
    padding: 0;
    display: flex;
    canvas{
      display: flex !important;
      /* background-color: transparent; */
    }
  }
</style>
