<template>
  <q-page class="mybackground">

    <div class="reduce-font-size-laptop">
      <div class="q-pa-xl fond-ecran">
        <div class="text-h3 text-white">
          Bonjour tout le monde,
          <span class="text-weight-bold text-green-8"></span>
          <span class="cursor"></span>
        </div>
        <div class="text-h4 text-weight-bold text-white q-mt-md">Developpeur - Frontend javascript</div>
        <div class="q-mt-xl full-width text-center">
          <q-icon
            v-for="(dataIcon, index) in datasIcons"
            :key="index"
            :color="dataIcon.couleur"
            :name="dataIcon.nomIcon"
            size="100px"
            class="q-mr-xl"
          />
        </div>
      </div>



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
    {
      nomIcon : 'fa-brands fa-node-js',
      couleur: ''
    },
  ]



  function lienExterieur(lien){
    window.open(lien, '_blank');
  }


</script>

<style lang="scss">
  .fond-ecran{
    height: 350px;
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
    
  }

</style>
