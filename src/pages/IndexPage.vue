<template>

  <q-page class="mybackground">

    <div class="reduce-font-size-laptop">

      <div class="q-pa-xl fond-ecran">

        <div class="row">

          <!-- colonne à gauche -->
          <div class="col-2">

            <div>
              <Clock />
            </div>

            <!-- <div class="text-h4 text-weight-bold text-white q-mt-md">Developpeur - Frontend javascript</div> -->

            <!-- la caroussel -->
            <div class="largeur-caroussel">
              <q-carousel
                v-model="slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                animated
                control-color="primary"
                class="rounded-borders bg-transparent text-white"
                keep-alive
                autoplay
                height="150px"
                infinite
              >
                <q-carousel-slide
                  name="style"
                  class="column no-wrap flex-center"
                >
                  <q-icon
                    name="fa-brands fa-html5"
                    color="blue-3"
                    size="100px"
                  />
                  <div class="q-mt-none text-center">
                    HTML5
                  </div>
                </q-carousel-slide>

                <q-carousel-slide name="tv" class="column no-wrap flex-center">
                  <q-icon
                    name="fa-brands fa-css3-alt"
                    color="red"
                    size="100px"
                  />
                  <div class="q-mt-none text-center">
                    CSS3
                  </div>
                </q-carousel-slide>
                <q-carousel-slide
                  name="blabla"
                  class="column no-wrap flex-center"
                >
                  <q-icon
                    name="fa-brands fa-node-js"
                    color="orange"
                    size="100px"
                  />
                  <div class="q-mt-none text-center">
                    Javascript
                  </div>
                </q-carousel-slide>
                <q-carousel-slide name="map" class="column no-wrap flex-center">
                  <q-icon
                    name="fa-brands fa-vuejs"
                    color="green"
                    size="100px"
                  />
                  <div class="q-mt-none text-center">
                    Vue.js
                  </div>
                </q-carousel-slide>
              </q-carousel>

              <!-- <div class="row justify-center">
                <q-btn-toggle
                  glossy
                  v-model="slide"
                  :options="[
                    { label: 1, value: 'style' },
                    { label: 2, value: 'tv' },
                    { label: 3, value: 'layers' },
                    { label: 4, value: 'map' }
                  ]"
                />
              </div> -->
            </div>

            <div class=" text-white text-center writetyping">
              <div class="text-weight-bold text-grey-5 blinking-cursor text-h5 ">
                {{ message }}
              </div>
            </div>

          </div>

          <!-- colonne au milieu -->
          <div class="col-6 text-white q-pa-md">
            <MonPremierThreeJs/>
          </div>

          <!-- colonne à droite -->
          <!-- le timeline -->
          <div class="col-4 bg-blue-grey q-pa-md rounded-borders colonne-a-droite">
            <q-scroll-area style="height: 500px;">
              <MonTimelineRealisation />
            </q-scroll-area>
          </div>

        </div>

        <div class="mon-chevron">

          <q-icon
            name="fa-solid fa-chevron-down fa-bounce"
            size="40px"
            color="orange-5"
          />
          <q-icon
            name="fa-solid fa-chevron-down fa-bounce"
            size="40px"
            color="orange-5"
          />

        </div>


      </div>



      <!-- les démos et codes sur github -->
      <div
        class="text-center text-h3 q-my-xl text-white"
        data-aos="fade-up"
      >
        Démo & codes - mes realisations
      </div>


      <!-- listes de mes réalisations - codes && démo -->


      <div class="row full-height mybackground">


        <div
          class="q-pa-md col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 "
          v-for="(donnee, i) in mesDatasPourTimelineEtCardStore.datas"
          :key="i"
        >

          <q-card class="my-card" data-aos="fade-up">

            <q-img
              :src="donnee.img"
              @click="lienExterieur(donnee.liveLink)"
              class="cursor-pointer"
              fit="scale-down"
            />

            <q-card-section class="bg-teal-7 text-orange">
              <div class="text-body1 text-weight-bold taille-text-card-title-petite-ecran">{{ donnee.title }}</div>
              <div class="text-caption taille-text-card-subtitle-petite-ecran">{{ donnee.subtitle1 }}</div>
            </q-card-section>

            <q-card-section
              class="q-pt-none q-pt-sm cursor-pointer "
              @click="lienExterieur(donnee.codeLink)"
            >
              <div class="text-caption">{{ donnee.content }}</div>
              <q-btn
                no-caps
                icon-right="fa-brands fa-github"
                class="q-mt-md bg-accent"
                label="Github"
              ></q-btn>
            </q-card-section>
          </q-card>

        </div>

      </div>


      <div class="row justify-center">
        <TextGeometryLogo />
      </div>




    </div>

  </q-page>
</template>

<script setup>

  /** component */
  import MonPremierThreeJs from 'src/components/MonPremierThreeJs.vue'
  import TextGeometryLogo from 'src/components/TextGeometryLogo.vue'
  import MonTimelineRealisation from 'src/components/MonTimelineRealisation.vue'
  import TesterThreeJs from 'src/components/TesterThreeJs.vue'

  /** aos animation on scroll */
  import AOS from 'aos'
  import 'aos/dist/aos.css'
  /** three js */

  import Clock from '../components/Clock.vue'
  import { ref, onMounted } from 'vue'

  /** les données du store */
  import { useMesDatasPourTimelineEtCardStore } from 'src/stores/mesdataspourtimelineetcard'

  const slide = ref('style')
  const time = ref(new Date().toLocaleTimeString())


  /** initialiser les données du store pinia  */
  const mesDatasPourTimelineEtCardStore = useMesDatasPourTimelineEtCardStore()


  /* les variables fait avec chatgpt pour le writetyping effect */
  const message = ref('');
  const words = [
    'Je suis lapinRagnar',
    'developpeur frontend',
    'javascript',
  ];
  let currentWordIndex = 0;
  let currentLetterIndex = 0;

  /* fin fait avec chatgpt */

  /** pour la text particule */

  /** fin text particle */



  // const datasIcons = [
  //   {
  //     nomIcon : 'fa-brands fa-html5',
  //     couleur: 'blue-3'
  //   },
  //   {
  //     nomIcon : 'fa-brands fa-css3-alt',
  //     couleur: 'red'
  //   },
  //   {
  //     nomIcon : 'fa-brands fa-node-js',
  //     couleur: 'orange'
  //   },
  //   {
  //     nomIcon : 'fa-brands fa-vuejs',
  //     couleur: 'green'
  //   },
  // ]



  function lienExterieur(lien){
    window.open(lien, '_blank')
  }

  /**
  * fait avec chatgpt pour le writetyping effect
  */

  const type = () => {
    if (currentLetterIndex === words[currentWordIndex].length) {
      setTimeout(() => {
        erase();
      }, 1000);
      return;
    }

    message.value += words[currentWordIndex][currentLetterIndex];
    currentLetterIndex++;
    setTimeout(() => {
      type();
    }, 100);
  }

  const erase = () => {
    if (currentLetterIndex === 0) {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      setTimeout(() => {
        type()
      }, 1000)
      return
    }

    message.value = message.value.slice(0, -1);
    currentLetterIndex--;
    setTimeout(() => {
      erase();
    }, 50)
  }

  /**
   * fin fait avec chatgpt
  */

  /** phrase animation avec three */



  /** fin phrase animation avec three */


  /** le scroll - aos */
  AOS.init({
    offset: 200,
    duration: 1200,
    easing: 'ease-in-out-sine',
    delay: 100,
  })


  onMounted(() => {

    // pour la writetyping
    type()

    // pour la text particle

    setInterval(() => {
      time.value = new Date().toLocaleTimeString()
    }, 1000)

    // pour l'animation text avec three

  })



</script>

<style lang="scss">
  .fond-ecran{
    height: 90vh;
    width: 100%;
    background-size: cover;
    animation: animate 30s ease-in-out infinite;

    @keyframes animate {
      0%, 100%{
        background-image: url('src/assets/fond-ecran-accueil.jpg');
      }

      35%{
        background-image: url('src/assets/background-image1.jpg');
      }

      75%{
        background-image: url('src/assets/background-image2.jpg');
      }
    }
    /* opacity: 0.3; */

    /* @media (max-width: 1020px) {
      height: 940px;
    } */
    @media (max-width: 620px) {
      height: 380px;
    }

    .colonne-a-droite{
      max-height: 580px;
    }
  }

  .reduce-font-size-laptop > .fond-ecran > div{

    @media (max-width: 600px){
      font-size: 28px;
    }
  }

  .taille-text-card-title-petite-ecran{
    @media (max-width: 1000px){
      font-size: 20px !important;
    }
  }

  .taille-text-card-subtitle-petite-ecran{
    @media (max-width: 1000px){
      font-size: 14px !important;
    }
  }

  .cursor{
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    background-color: rgb(113, 21, 21);
    animation: cursorBlink 1s infinite;
  }

  @keyframes cursorBlink {
    49% {background-color: #fff;}
    50% {background-color: transparent;}
    99% {background-color: transparent;}
  }

  .typing{
    animation: none;
  }

  .writetyping{
    min-height: 90px;
    margin-top: 70px;
  }

  /* effet blinking */

  .largeur-caroussel{
    margin-top: 50px;
  }


  /** pour la particle */
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
  }

  canvas {
    background-color: #f7f7f7;
  }

  /** mon chevron */
  .mon-chevron{
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
  }

</style>
