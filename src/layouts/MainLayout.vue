<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar class="mon-toolbar">
        <q-btn
          flat
          dense
          round
          color="orange"
          icon="fa-solid fa-bars"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />


        <q-toolbar-title class="mon-q-toolbar-title">

          <div>
            Developpeur Fontend
          </div>

          <div class="text-geometry-logo">
            <TextGeometryLogo />
          </div>

        </q-toolbar-title>


        <q-btn
          color="orange"
          flat
          round
          dense
          icon="fa-solid fa-gear fa-fade"
        >

          <q-menu
            dark
            transition-show="rotate"
            transition-hide="rotate"
            anchor="top middle"
            self="bottom middle"
            max-height="300px"
          >
            <q-list style="min-width: 150px">

              <q-item clickable :to="{name: 'login'}">

                <q-item-section avatar>
                  <q-icon color="primary" name="fa-solid fa-user" />
                </q-item-section>

                <q-item-section>Login</q-item-section>

              </q-item>

              <q-item clickable :to="{name: 'register'}">

                <q-item-section avatar>
                  <q-icon color="primary" name="fa-solid fa-user-plus" />
                </q-item-section>

                <q-item-section>Register</q-item-section>

              </q-item>


              <q-separator />

              <q-item clickable>

                <q-item-section avatar>
                  <q-icon color="primary" name="logout" />
                </q-item-section>

                <q-item-section>Logout</q-item-section>

              </q-item>


            </q-list>
          </q-menu>
        </q-btn>

      </q-toolbar>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      dark
      class="text-white"
      :width="150"
    >
      <q-list>
        <!-- <q-item-label
          header
        >
          <div>
            Bonjour hahaha
          </div>

        </q-item-label> -->


        <q-item
          clickable
          v-ripple
          class="q-mt-xl"
          active-class="my-menu-link"
          :active="link === 'Home'"
          @click="link = 'Home'"
        >

          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>
            Home
          </q-item-section>

        </q-item>


        <q-item
          clickable
          v-ripple
          class="q-mt-xl"
          active-class="my-menu-link"
          :active="link === 'Google'"
          @click="link = 'Google'"
        >

          <q-item-section avatar>
            <q-icon name="fa-brands fa-google" />
          </q-item-section>

          <q-item-section>
            Google
          </q-item-section>

        </q-item>

        <q-item
          clickable
          v-ripple
          active-class="my-menu-link"
          :active="link === 'Facebook'"
          @click="link = 'Facebook'"
        >

          <q-item-section avatar>
            <q-icon name="fa-brands fa-facebook-f" />
          </q-item-section>

          <q-item-section>
            Facebook
          </q-item-section>

        </q-item>


        <q-item
          clickable
          v-ripple
          active-class="my-menu-link"
          :active="link === 'Twitter'"
          @click="link = 'Twitter'"
        >

          <q-item-section avatar>
            <q-icon name="fa-brands fa-twitter" />
          </q-item-section>

          <q-item-section>
            Twitter
          </q-item-section>

        </q-item>


        <q-item
          clickable
          v-ripple
          @click="lienExterieur('https://github.com/lapinRagnar')"
          active-class="my-menu-link"
          :active="link === 'Github'"
        >
          <q-item-section avatar>
            <q-icon name="fa-brands fa-github" />
          </q-item-section>

          <q-item-section>
            Github
          </q-item-section>
        </q-item>


        <q-item
          clickable
          v-ripple
          active-class="my-menu-link"
          :active="link === 'Settings'"
          @click="link = 'Settings'"
          style="margin-top: 280px"
        >

          <q-item-section avatar>
            <q-icon name="fa-solid fa-gear" />
          </q-item-section>

          <q-item-section>
            Settings
          </q-item-section>

        </q-item>


      </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import TextGeometryLogo from '../components/TextGeometryLogo.vue'
  import { useAuthStore } from 'src/stores/auth';


  const leftDrawerOpen = ref(false)
  const miniState = ref(true)
  const link = ref('Home')

  const authStore = useAuthStore()

  onMounted(() => {
    console.log('je suis dans on mounted de main layout')
    authStore.authenticationStateObserver()
  }),

  function lienExterieur(lien){
    window.open(lien, '_blank')
    console.log("ca marche");
  }

  const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }


</script>

<style lang="scss">

  body {
    background: #959595;
    background: linear-gradient(to right, #959595 0%, #0D0D0D 46%, #010101 50%, #0A0A0A 53%, #4E4E4E 76%, #383838 87%, #1B1B1B 100%);

  }

  .mybackground{
    background: #959595;
    background: linear-gradient(to right, #959595 0%, #0D0D0D 46%, #010101 50%, #0A0A0A 53%, #4E4E4E 76%, #383838 87%, #1B1B1B 100%);
  }

  .mon-toolbar{
    padding: 0 100px 0 100px!important;
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgb(65, 174, 53) 0%, rgb(59, 39, 93) 100%);
  }

  .mon-q-toolbar-title{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .text-geometry-logo{
      margin: 0;
      padding-bottom: 0;
    }
  }

  .my-menu-link{
    color: white;
    background: #F2C037
  }

</style>
