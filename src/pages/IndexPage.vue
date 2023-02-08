<template>

  <q-page class="mybackground">

    <div class="reduce-font-size-laptop">
      <div class="q-pa-xl fond-ecran">
        <div class=" text-white text-center">
          <div class="text-h3">Bonjour tout le monde</div>
          <span class="text-weight-bold text-green-8 blinking-cursor">
            {{ text }}
          </span>
          <span class="cursor">&nbsp;</span>
          <div>Je suis <span class="text-green text-body1 text-weight-bold">lapinRagnar</span></div>
          <div>developpeur frontend - javascript</div>
        </div>

        <!-- <div class="text-h4 text-weight-bold text-white q-mt-md">Developpeur - Frontend javascript</div> -->

        <!-- la caroussel -->
        <div class="q-pa-md largeur-caroussel">
          <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            animated
            control-color="primary"
            class="rounded-borders bg-transparent text-white"
            keep-alive
            autoplay
            height="200px"
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
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>

            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <q-icon
                name="fa-brands fa-css3-alt"
                color="red"
                size="100px"
              />
              <div class="q-mt-md text-center">
                {{ lorem }}
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
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
              <q-icon
                name="fa-brands fa-vuejs"
                color="green"
                size="100px"
              />
              <div class="q-mt-md text-center">
                {{ lorem }}
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

        <!-- l'icon  -->
        <div class="q-mt-xl full-width text-center">
          <q-icon
            v-for="(dataIcon, index) in datasIcons"
            :key="index"
            :color="dataIcon.couleur"
            :name="dataIcon.nomIcon"
            size="30px"
            class="q-mr-xl"
          />
        </div>

      </div>

      <!-- typing writter -->


      <div
        class="text-center text-h3 q-my-xl text-white"
      >
        Démo - mes realisations
      </div>

      <div class="row full-height mybackground">


        <div
          class="q-pa-md col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 "
          v-for="(donnee, i) in donneesMonCards"
          :key="i"
        >

          <q-card class="my-card">

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
    </div>

  </q-page>
</template>

<script setup>

  import { ref, onMounted, reactive } from 'vue'

  /* fait avec chatgpt */
  const message = ref('');
  const words = [
    'Welcome to Vue.js!',
    'I am a ChatGPT model',
    'Let me help you with code',
  ];
  let currentWordIndex = 0;
  let currentLetterIndex = 0;

   /* fin fait avec chatgpt */

  const text = ref('')

  const slide = ref('style')
  const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?'

  const opt = reactive({
    currentPhraseIndex: 0,
    currentCharacterIndex: 0,
    currentPhrase: "",
    isDeleting: false
  })

  const phrases = reactive([
    "ab",
  ])
  // const phrases = reactive([
  //   "je suis lapinRagnar",
  //   "developpeur front end",
  //   "javascript",
  //   'vue 3',
  //   'quasar'
  // ])

  const loop = () => {

    let currentPhraseText = ''
    if (opt.currentPhraseIndex <= phrases.length)  {
       currentPhraseText = phrases[opt.currentPhraseIndex]
    }


    console.log('currentPhraseIndex', opt.currentPhraseIndex,)
    console.log('length of phrase', phrases.length)
    console.log('currentCharacterIndex', opt.currentCharacterIndex)
    console.log('currentPhrase', opt.currentPhrase)
    console.log('isDeleting', opt.isDeleting)
    console.log('currentPhraseText', currentPhraseText)

    console.log("*******************************");

    if (!opt.isDeleting) {

      opt.currentPhrase += currentPhraseText[opt.currentCharacterIndex];
      opt.currentCharacterIndex++;
    } else {
      opt.currentPhrase = opt.currentPhrase.slice(0, -1)
      opt.currentCharacterIndex--

      console.log('------ opt.currentCharacterIndex', opt.currentCharacterIndex);
    }

    text.value = opt.currentPhrase

    if (opt.currentCharacterIndex === currentPhraseText?.length) {
      opt.isDeleting = true;
      // opt.currentPhraseIndex = 0; // c'est moi
    }
    if (opt.currentCharacterIndex === 0) {
      opt.currentPhrase = "";
      opt.isDeleting = false;

      console.log('typeof currentPhraseText', typeof currentPhraseText)

      if (opt.currentPhraseIndex >= phrases.length) {
        console.log('je suis ici');
        opt.currentPhraseIndex = 0
      } else{
        console.log('lelena....')
        opt.currentPhraseIndex++;
      }

      if (opt.currentPhraseIndex === opt.phrases?.length) {
        opt.currentPhraseIndex = 0;
      }
    }
    const spedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200
    const time = opt.isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)
  }



  const donneesMonCards = [
    {
      title: 'Couter cart product - e-commerce',
      subtitle1: 'Challenge Frontend Mentor 1',
      content: 'html, scss, vue3 js, quasar js',
      img: 'e-commerce-product-card.png',
      codeLink: ' https://github.com/lapinRagnar/vue3-quasar-ecomerce-product-page-chg-frontendmentor-2',
      liveLink: 'https://quasar-challeng2-ecomerce-cart.web.app/',
    },
    {
      title: 'Homepage',
      subtitle1: 'Challenge Frontend Mentor 2',
      content: 'HTML, scss, js, vue, vuetify',
      img: 'homepage-frontendmentor.png',
      codeLink: 'https://quasar-frontendmontor-ch1.web.app/',
      liveLink: 'https://quasar-frontendmontor-ch1.web.app/',
    },

    {
      title: 'Tweeter clone',
      subtitle1: 'my clone',
      content: 'HTML, scss, js, vue, quasar, firebase',
      img: 'twitter clone.png',
      codeLink: 'https://github.com/lapinRagnar/vue3_quasar_twitter_clone_firebase_for_windows_mac_ios_android',
      liveLink: 'https://qwitter-5f8d5.web.app/',
    },
    {
      title: 'Razer clone',
      subtitle1: 'my clone',
      content: 'HTML, scss, js, vue, quasar',
      img: 'razer clone.png',
      codeLink: 'https://github.com/lapinRagnar/quasar-razer-clone',
      liveLink: 'https://razer-clone.web.app/#/',
    },
    {
      title: 'Bank Dashboard',
      subtitle1: 'cours sur youtube',
      content: 'HTML, SCSS, js, vue, vuetify',
      img: 'bank dashboard.png',
      codeLink: 'https://github.com/lapinRagnar/vue3-vuetify3-bank',
      liveLink: 'https://vue3-vuetify3-bank.web.app/',
    },
    {
      title: 'Boutique e-commerce',
      subtitle1: 'cours sur youtube',
      content: 'HTML, CSS, js, vue, vuetify',
      img: 'boutique e-commerce.png',
      codeLink: 'https://github.com/lapinRagnar/vue3-vuetify-boutique-ecomerce',
      liveLink: 'https://vue3-vuetify3-e-boutique.web.app/',
    },
    {
      title: 'Todo ninja',
      subtitle1: 'cours sur youtube',
      content: 'HTML, CSS, js, vue, vuetify, firebase auth',
      img: 'todo-ninja.png',
      codeLink: 'https://github.com/lapinRagnar/vue3-vuetify-boutique-ecomerce',
      liveLink: 'https://todo-ninja-3.web.app/',
    },
  ]

  const datasIcons = [
    {
      nomIcon : 'fa-brands fa-html5',
      couleur: 'blue-3'
    },
    {
      nomIcon : 'fa-brands fa-css3-alt',
      couleur: 'red'
    },
    {
      nomIcon : 'fa-brands fa-node-js',
      couleur: 'orange'
    },
    {
      nomIcon : 'fa-brands fa-vuejs',
      couleur: 'green'
    },
  ]

  const typeValue = ref('')


  function lienExterieur(lien){
    window.open(lien, '_blank')
  }


  onMounted(() => {
    loop()
  })



</script>

<style lang="scss">
  .fond-ecran{
    height: 80vh;
    background-image: url('fond-ecran-accueil.jpg');
    /* opacity: 0.3; */

    /* @media (max-width: 1020px) {
      height: 940px;
    } */
    @media (max-width: 620px) {
      height: 380px;
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

  /* effet blinking */

  /* .largeur-caroussel{
    width: 80%;

  } */



</style>
