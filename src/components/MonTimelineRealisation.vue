<template>

  <div class="q-px-lg q-pb-md mon-timeline">

    <q-timeline color="secondary">
      <q-timeline-entry heading body="Démo && code recent " />

      <q-timeline-entry
        title="Mon Portefeuille"
        subtitle="Jan 2023"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :body="body"
      />

      <q-timeline-entry
        title="Clone du Razer"
        subtitle="dec 2022"
        icon="delete"
        :body="body"
      />

      <q-timeline-entry heading body="November, 2017" />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        color="orange"
        icon="done_all"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        :body="body"
      />
    </q-timeline>


  </div>

</template>

<script setup>
  const body = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore optio fugiat perspiciatis at quae, cum explicabo. Dicta, delectus minima velit error fugiat sequi quisquam deleniti adipisci, illum enim quas incidunt!"
</script>

<style lang="scss">

  .mon-timeline{
    max-height: 520px;
  }
</style>
