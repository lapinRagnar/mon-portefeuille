<template>
  <div>
    <div class="text-h3 text-center text-white q-ma-xl">Settings && Admin</div>
    <div class="text-h2 text-orange text-weight-bold">Liste de demos</div>
    <div
      v-for="(demo, i) in mesDatasPourTimelineEtCardStore.datas"
      :index="i"
    >
      <div> {{ demo.title}}</div>
    </div>
  </div>
</template>

<script setup>

  import { onMounted, onUnmounted } from 'vue';

  /** les données du store */
  import { useMesDatasPourTimelineEtCardStore } from 'src/stores/mesdataspourtimelineetcard'

  /** initialiser les données du store pinia  */
  const mesDatasPourTimelineEtCardStore = useMesDatasPourTimelineEtCardStore()

  onMounted(() => {
    mesDatasPourTimelineEtCardStore.obtenirDataFirebase()
  })

  onUnmounted(() => {
    // vider la data pour eviter qu'il s'affiche plusieurs fois
    mesDatasPourTimelineEtCardStore.datas = []
  })


</script>

<style lang="scss" scoped>

</style>
