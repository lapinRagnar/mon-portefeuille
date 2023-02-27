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

  const datas = [
    {
      title: 'Couter cart product - e-commerce',
      subtitle: 'Jan 2023',
      icon: 'fa-solid fa-code',
      body: 'Challenge Frontend Mentor - html, scss, vue3 js, quasar js',
      color: 'orange'
    },
    {
      title: 'Homepage ',
      subtitle: 'Dec 2022',
      icon: 'fa-solid fa-code',
      body: 'Challenge Frontend - HTML, scss, js, vue, vuetify',
      color: 'green'
    },
    {
      title: 'Tweeter clone',
      subtitle: 'Nov 2022',
      icon: 'fa-solid fa-code',
      body: 'HTML, scss, js, vue, quasar, firebase.',
      color: 'purple'
    },
    {
      title: 'Razer clone',
      subtitle: 'Oct 2022',
      icon: 'fa-solid fa-code',
      body: 'HTML, scss, js, vue, quasar.',
      color: 'yellow'
    },
    {
      title: 'Bank Dashboard',
      subtitle: 'Oct 2022',
      icon: 'fa-solid fa-code',
      body: 'HTML, SCSS, js, vue, vuetify.'
    },

    {
      title: 'Boutique e-commerce',
      subtitle: 'Sept 2022',
      icon: 'fa-solid fa-code',
      body: 'HTML, SCSS, js, vue, vuetify.',
      color: 'blue'
    },
    {
      title: 'Todo ninja',
      subtitle: 'Sept 2022',
      icon: 'fa-solid fa-code',
      body: 'HTML, CSS, js, vue, vuetify, firebase auth.',
      color: 'grey'
    },
  ]

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
