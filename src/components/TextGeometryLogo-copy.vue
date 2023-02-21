<template>
  <div class=" mon-logo q-ma-none q-pa-none" ref="container">&nbsp</div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import * as THREE from 'three'
  import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
  import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'

  const container = ref(null)

  onMounted(() => {

    const width = 170
    const height = 70

    const scene = new THREE.Scene()


    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true  })

    renderer.setSize(width, height)
    // renderer.setClearColor( 0x000000, 0 )

    container.value.appendChild(renderer.domElement)

    camera.position.set(0, 0, 5)

    const fontLoader = new FontLoader()

    fontLoader.load('../../node_modules/three/examples/fonts/droid/droid_serif_bold.typeface.json', (font) => {

      let textGeometry = new TextGeometry('lapinRagnar', {
        font: font,
        size: 1.5,
        height: 0.8,
      })

      textGeometry.center()

      const textMaterialFront = new THREE.MeshBasicMaterial({ color: 0xFF8C00 })
      const textMaterialRear = new THREE.MeshBasicMaterial({ color: 0x303030 })

      let textMesh = new THREE.Mesh(textGeometry, [
        textMaterialFront,
        textMaterialRear
      ])

      textMesh.castShadow = true

      scene.add(textMesh)

    })

    const animate = () => {

      requestAnimationFrame(animate)

      const time = - performance.now() * 0.0005;

      camera.position.x = 1 * Math.sin( time );
      camera.position.y = 2 * Math.cos( time );
      // camera.position.z = 2 * Math.cos( time );
      camera.lookAt( scene.position );

      // renderer.setClearColor( 0x000000, 0 );
      // renderer.clear();
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
