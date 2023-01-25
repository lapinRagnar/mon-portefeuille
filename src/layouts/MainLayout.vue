<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar class="bg-green-7">
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
