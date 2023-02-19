<template>

  <div class="q-px-lg q-pb-md mon-timeline">

    <q-timeline color="secondary">
      <q-timeline-entry heading body="Timeline heading" />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :body="body"
      />

      <q-timeline-entry
        title="Event Title"
        subtitle="February 21, 1986"
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
    max-height: 500px;
  }
</style>
