<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar class="bg-black">
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Settings && Admin
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs class="bg-grey">
        <q-route-tab
          icon="map"
          :to="{name: 'home'}"
          replace
          label="Home"
        />
        <q-route-tab
          icon="fa-solid fa-plus"
          :to="{name: 'ajouter-demo'}"
          replace
          label="Ajout démo"
        />
      </q-tabs>
    </q-header>


    <!-- (Optional) The Footer -->
    <q-footer>
      <q-toolbar class="bg-black">
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          Footer
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="bg-grey-2"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
      </q-scroll-area>
    </q-drawer>

    <q-page-container>

      <!-- This is where pages get injected -->
      <!-- <router-view /> -->
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>

    </q-page-container>

  </q-layout>
</template>

<script setup>
  import { ref } from 'vue'

  const leftDrawerOpen = ref(false)

  const toggleLeftDrawer = ()=>{
    leftDrawerOpen.value = !leftDrawerOpen.value
  }

</script>

<style lang="scss">
  body {
    background: #959595;
    background: linear-gradient(to right, #959595 0%, #0D0D0D 46%, #010101 50%, #0A0A0A 53%, #4E4E4E 76%, #383838 87%, #1B1B1B 100%);
  }
</style>
