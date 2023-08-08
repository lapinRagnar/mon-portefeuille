<template>
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

    const width = 680
    const height = 300
    // const width = 880
    // const height = 300

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(width, height)

    container.value.appendChild(renderer.domElement)

    /**
     *  turusKnot
    */
    // const turusKnotGeometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 )
    // const turusKnotMaterial = new THREE.MeshNormalMaterial()
    // const torusKnot = new THREE.Mesh( turusKnotGeometry, turusKnotMaterial )
    // scene.add( torusKnot )
    // torusKnot.position.set(0, 0, 0)
    // let scaleMatrix = new THREE.Matrix4()
    // scaleMatrix.makeScale(0.008, 0.008, 0.008)
    // torusKnot.applyMatrix4(scaleMatrix)

    // pour ajouter le cube
    // const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9)
    // const material = new THREE.MeshBasicMaterial({ color: 0xf92ad0 })
    // const cube = new THREE.Mesh(geometry, material)
    // scene.add(cube)

    // cube.position.set(6, 0, 0)

    // pour ajouter la sphere
    // const sphereGeometry = new THREE.SphereGeometry(0.9, 25, 25)
    // const sphereMaterial = new THREE.MeshBasicMaterial({
    //   color: 0x0000FF,
    //   wireframe: true
    // })
    // const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    // scene.add(sphere)

    // sphere.position.x = -3  // ou
    // sphere.position.set(-7, 0, 0)
    let step = 0
    let speed = 0.01

    // pour les axes
    // const axesHelper = new THREE.AxesHelper(5)
    // scene.add(axesHelper)

    // l'orbite
    const orbit = new OrbitControls(camera, renderer.domElement)

    // camera.position.z = 5
    camera.position.set(0, 0, 10)

    orbit.update()

    /**
    * text geometry animation
    */

    const textList = [
      "CSS",
      "Javascript",
      "HTML",
      "Vue JS",
      "Quasar JS",
      "Nuxt JS",
      "SCSS",
      "Bootstrap",
    ]

    const colorFrontList = [
      { color: 0xff0000 },
      { color: 0x00ff00 },
      { color: 0x364236 },
      { color: 0xffff00 },
      { color: 0xd2b1ea },
      { color: 0xff11ea },
      { color: 0x5a183d },
      { color: 0x8154cf },
      // { color: 0xff00ff },
    ]
    const colorRearList = [
      { color: 0xca335c },
      { color: 0x8b8b6f },
      { color: 0x014c56 },
      { color: 0x800080 },
      { color: 0xec6e19 },
      { color: 0x110e19 },
      { color: 0xec6e19 },
      { color: 0x3f6f19 },
      // { color: 0xff00ff },
    ]

    var texts = ['HTML', 'CSS', 'Vue JS', 'Quasar JS', 'Nuxt JS', 'SCSS', 'Firebase']
    var textGeometries = []
    var textMaterialsFront = []
    var textMaterialsRear = []
    var textMeshes = []

    const fontLoader = new FontLoader()

    let step2 = 0
    let speed2 = 0.01019

    fontLoader.load('Roboto_Bold.json', (font) => {

      for (let i = 0; i < texts.length; i++) {

        let textGeometry = new TextGeometry(texts[i], {
          font: font,
          size: 1.1,
          height: 0.8,

        })

        textGeometry.center()

        // textGeometry.computeBoundingBox()
        // textGeometry.computeVertexNormals()

        const textMaterialFront = new THREE.MeshBasicMaterial({ color: colorFrontList[i].color })
        const textMaterialRear = new THREE.MeshBasicMaterial({ color: colorRearList[i].color })

        let textMesh = new THREE.Mesh(textGeometry, [
          textMaterialFront,
          textMaterialRear
        ])


        textMesh.position.x = Math.random() * (6 - (-10)) + (-10) //Math.random() * 1;
        textMesh.position.y = Math.random() * (6 - (-6)) + (-6) // Math.random() * 1;
        textMesh.position.z = Math.random() * (3 - (-3)) + (-3) // Math.random() * 1;

        textGeometries.push(textGeometry)
        textMaterialsFront.push(textMaterialFront)
        textMaterialsRear.push(textMaterialRear)
        textMeshes.push(textMesh)

        textMesh.castShadow = true

        // monTextGeometry.castShadow = true
        // monTextGeometry.position.set(0, 0, 5)
        // monTextGeometry.rotate.y = -0.50
        // monTextGeometry.position.set(3, 3, 0)

        scene.add(textMesh)


      }

    })

    const animate = () => {

      requestAnimationFrame(animate)

      // step2 += speed2
      // console.log('obj.monTextGeometry', obj.monTextGeometry)
      // for (let i = 0; i < 4; i++) {

      //   // obj[i].position.x = 0.5 * Math.abs(Math.sin(step2))
      //   // obj[i].position.y = 4 * Math.abs(Math.sin(step2))
      //   // obj[i].position.z = 1 * Math.abs(Math.sin(step))
      //   // console.log('obj.monTextGeometry', obj[i].monTextGeometry);
      // }

      // ********************

      const time = - performance.now() * 0.0005

      camera.position.x = 1 * Math.sin( time )
      camera.position.y = 2 * Math.cos( time )
      // camera.position.z = 2 * Math.cos( time );
      camera.lookAt( scene.position );

      renderer.render(scene, camera)
    }

    animate()

    // console.log('mon obj', obj[0])
    // console.log('sphere', sphere)


    // let clock = new THREE.Clock()

    // const animate = () => {

    //   requestAnimationFrame(animate)

    //   // cube.rotation.x += 0.01
    //   // cube.rotation.y += 0.01



    //   // step += speed
    //   // sphere.position.y = 1 * Math.abs(Math.sin(step))
    //   // sphere.position.z = 1 * Math.abs(Math.sin(step))

    //   // step2 += speed2
    //   // console.log('obj.monTextGeometry', obj.monTextGeometry)
    //   for (let i = 0; i < 4; i++) {

    //     // obj[i].position.x = 0.5 * Math.abs(Math.sin(step2))
    //     // obj[i].position.y = 4 * Math.abs(Math.sin(step2))
    //     // obj[i].position.z = 1 * Math.abs(Math.sin(step))
    //     // console.log('obj.monTextGeometry', obj[i].monTextGeometry);
    //   }

    //   const time = - performance.now() * 0.0001;

    //   camera.position.x = 8 * Math.cos( time );
    //   camera.position.z = 8 * Math.sin( time );
    //   camera.lookAt( scene.position );



    //   renderer.render(scene, camera)
    // }

    // animate()
  })
</script>

<style lang="scss">
  .bg-transparent{
    canvas{
      background-color: transparent;
    }
  }
</style>
