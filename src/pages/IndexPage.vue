<template>
  <q-page class="mybackground">

    <div>
      <div class="q-pa-xl fond-ecran">
        <div class="text-h3 text-grey-1">Bonjour tout le monde, je suis <span class="text-weight-bold text-green-4">lapinRagnar</span> </div>
        <div class="text-h4 text-weight-bold text-white">Developpeur Frontend javascript</div>
      </div>


      <div
          class="text-center text-h3 q-my-xl text-white"
        >
          Démo - mes realisations
        </div>

      <div class="row full-height mybackground">


        <div
          class="q-pa-md col-4 "
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
              <div class="text-h6">{{ donnee.title }}</div>
              <div class="text-subtitle2">{{ donnee.subtitle1 }}</div>
            </q-card-section>

            <q-card-section
              class="q-pt-none q-pt-sm cursor-pointer"
              @click="lienExterieur(donnee.codeLink)"
            >
              <div>{{ donnee.content }}</div>
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

  function lienExterieur(lien){
    window.open(lien, '_blank');
  }


</script>

<style lang="scss">
  .fond-ecran{
    height: 200px;
    background-image: url('fond-ecran-accueil.jpg');
    opacity: 0.3;
  }
</style>
