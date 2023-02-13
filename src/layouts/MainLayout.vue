<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar class="mon-toolbar">
        <q-btn
          flat
          dense
          round
          color="orange"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="mon-q-toolbar-title">

          <div class="text-geometry-logo">
            <TextGeometryLogo />
          </div>

          <div>
            developpeur Fontend
          </div>

        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Bonjour hahaha

        </q-item-label>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import TextGeometryLogo from '../components/TextGeometryLogo.vue'


export default defineComponent({
  name: 'MainLayout',

  components: {
    TextGeometryLogo
  },

  setup () {
    const leftDrawerOpen = ref(false)

    const x = 'mavariable'
    console.log('ici', x)

    return {

      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
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
</style>
