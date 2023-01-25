<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar class="mon-toolbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Portefeuille - lapinRagnar
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above="false"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Bonjour
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



export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  setup () {
    const leftDrawerOpen = ref(false)

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

  .mon-toolbar{
    padding: 0 100px 0 100px!important;
    background: rgb(63,94,251);
    background: radial-gradient(circle, rgb(65, 174, 53) 0%, rgb(93, 39, 50) 100%);
  }
</style>
