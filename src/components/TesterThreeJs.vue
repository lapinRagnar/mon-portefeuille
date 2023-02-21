<template>
  <div>ca marche encore</div>
  <div class=" mon-logo q-mb-xl mon-fond-ecran" ref="container">&nbsp</div>
  <div style="margin-top: 50px;">ha ha ha </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import * as THREE from 'three'

  import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
  import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'



  const container = ref(null)

  onMounted(() => {

    const width = 1200
    const height = 300

    const scene = new THREE.Scene()


    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true  })

    renderer.setSize(width, height)

    container.value.appendChild(renderer.domElement)

    camera.position.set(0, 0, 5)


    const geometryBox = new THREE.BoxGeometry( 1, 1, 1 )
    const materialBox = new THREE.MeshBasicMaterial( { color: 0x0bff00 } )
    const cube = new THREE.Mesh( geometryBox, materialBox )
    cube.position.set(0, 2, 0)
    scene.add( cube )

    const clock = new THREE.Clock()

    const textMesh = new THREE.Mesh()
    textMesh.castShadow = true
    textMesh.position.set(0, -0.5, 0)
    scene.add(textMesh)

    const fontLoader = new FontLoader()

    fontLoader.load('Archivo_SemiBold_Regular.json', (font) => {

      let textGeometry = new TextGeometry('Bonjour', {
        font: font,
        size: 1.5,
        height: 0.8,
      })

      textGeometry.center()

      const textMaterialFront = new THREE.MeshNormalMaterial()
      const textMaterialRear = new THREE.MeshNormalMaterial()

      textMesh.geometry = textGeometry
      textMesh.material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide })

      // let textMesh = new THREE.Mesh(textGeometry, [
      //   textMaterialFront,
      //   textMaterialRear
      // ])

      // textMesh.castShadow = true

      // textMesh.position.set(0, -0.5, 0)

      // scene.add(textMesh)

    })


    const animate = () => {

      requestAnimationFrame(animate)

      const deltaTime = clock.getDelta()

      cube.rotation.x += deltaTime * 0.02
      cube.rotation.y += deltaTime * 0.5
      cube.rotation.z += deltaTime * 0.02

      // textMesh.rotation.y += 0.001;
        // Calculate the position of the textMesh
      const radius = 3
      const theta = deltaTime * 0.5
      const x = radius * Math.cos(theta)
      const y = radius * Math.sin(theta)
      textMesh.position.set(x, y, 0)

      // Rotate the textMesh
      textMesh.rotation.x += deltaTime * 0.05
      textMesh.rotation.y += deltaTime * 0.05
      textMesh.rotation.z += deltaTime * 0.05

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
      background-color: transparent;
    }
  }

  .mon-fond-ecran{
    background-color: red;
    background-image: url('src/assets/fond-ecran-accueil.jpg');
  }
</style>
