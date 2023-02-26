<template>

  <div class="q-px-lg q-pb-md mon-timeline">

    <q-timeline dark>
      <q-timeline-entry heading>
        Derniers Codes && Démo
      </q-timeline-entry>
      <q-timeline-entry
        v-for="(data, index) in datas"
        :key="index"
        :title="data.title"
        :subtitle="data.subtitle"
        :avatar="data.avatar"
        :body="data.body"
        :color="data.color"
      />
    </q-timeline>

  </div>

</template>

<script setup>

  const datas = [
    {
      title: 'Couter cart product - e-commerce',
      subtitle: 'Jan 2023',
      avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
      body: 'Challenge Frontend Mentor - html, scss, vue3 js, quasar js',
      color: 'orange'
    },
    {
      title: 'Homepage ',
      subtitle: 'Dec 2022',
      avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
      body: 'Challenge Frontend - HTML, scss, js, vue, vuetify',
      color: 'green'
    },
    {
      title: 'Tweeter clone',
      subtitle: 'Nov 2022',
      avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
      body: 'HTML, scss, js, vue, quasar, firebase.',
      color: 'purple'
    },
    {
      title: 'Razer clone',
      subtitle: 'Oct 2022',
      avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
      body: 'HTML, scss, js, vue, quasar.',
      color: 'yellow'
    },
    {
      title: 'Bank Dashboard',
      subtitle: 'Oct 2022',
      avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
      body: 'HTML, SCSS, js, vue, vuetify.'
    },

    {
      title: 'Boutique e-commerce',
      subtitle: 'Sept 2022',
      avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
      body: 'HTML, SCSS, js, vue, vuetify.',
      color: 'blue'
    },
    {
      title: 'Todo ninja',
      subtitle: 'Sept 2022',
      avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
      body: 'HTML, CSS, js, vue, vuetify, firebase auth.',
      color: 'white'
    },
  ]

</script>

<style lang="scss">

  .mon-timeline{
    max-height: 520px;
  }
</style>
