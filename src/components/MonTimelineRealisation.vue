<template>

  <div class="q-px-lg q-pb-md mon-timeline">

    <q-timeline dark>
      <q-timeline-entry heading>
        Derniers Codes && Démo
      </q-timeline-entry>
      <q-timeline-entry
        v-for="(data, index) in mesDatasPourTimelineEtCardStore.datas"
        :key="index"
        :title="data.title"
        :subtitle="data.subtitle"
        :icon="data.icon"
        :body="data.content"
        :color="data.color"
      />
    </q-timeline>

  </div>

</template>

<script setup>

  import { onMounted } from 'vue';
  import { useMesDatasPourTimelineEtCardStore } from 'src/stores/mesdataspourtimelineetcard';


  /** initialiser les données du store pinia  */
  const mesDatasPourTimelineEtCardStore = useMesDatasPourTimelineEtCardStore()

  onMounted(() => {

    console.log('ici', mesDatasPourTimelineEtCardStore.datas[0].title)

  })

</script>

<style lang="scss">

  .mon-timeline{
    max-height: 520px;
  }
</style>
