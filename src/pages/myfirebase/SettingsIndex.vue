<template>
  <div>

    <div class="text-h2 text-orange text-weight-bold q-pl-md">Liste de demos</div>

    <div class="q-pa-md">
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="name"
        dark
      >
        <template #header-cell="props">
          <q-th
            style="font-size: 1.4em;"
            class="text-primary"
            :props="props"
          >
            {{ props.col.label }}
          </q-th>
        </template>

        <!-- ajout icon dans le header du tableau -->
        <template #header-cell-title="props">
          <q-th
            :props="props"
            style="font-size: 1.4em;"
            class="text-primary"
          >
            <q-icon
              size="sm"
              name="title"
              class="q-mr-sm"
            />{{ props.col.label }}
          </q-th>
        </template>

        <template #header-cell-img="props">
          <q-th
            :props="props"
            style="font-size: 1.4em;"
            class="text-primary"
          >
            <q-icon
              size="sm"
              name="image"
              class="q-mr-sm"
            />{{ props.col.label }}
          </q-th>
        </template>

        <template #header-cell-codeLink="props">
          <q-th
            :props="props"
            style="font-size: 1.4em;"
            class="text-primary"
          >
            <q-icon
              size="sm"
              name="code"
              class="q-mr-sm"
            />{{ props.col.label }}
          </q-th>
        </template>

        <template #header-cell-liveLink="props">
          <q-th
            :props="props"
            style="font-size: 1.4em;"
            class="text-primary"
          >
            <q-icon
              size="sm"
              name="code"
              class="q-mr-sm"
            />{{ props.col.label }}
          </q-th>
        </template>


        <template #header-cell-subtitle="props">
          <q-th
            :props="props"
            style="font-size: 1.4em;"
            class="text-primary"
          >
            <q-icon
              size="sm"
              name="fa-solid fa-calendar-days"
              class="q-mr-sm"
            />{{ props.col.label }}
          </q-th>
        </template>


        <!-- parametrer le body du tableau -->
        <template #body-cell="props">
          <q-td
            :props="props"
            style="text-align: left; max-width: 120px; overflow: hidden;"
          >
            <q-btn
              flat
              color="grey"
              :label="props.value"
              no-caps
            />
          </q-td>
        </template>

      </q-table>
    </div>

    <!-- <div class="q-pa-md">
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="name"
        dark
        color="green"
      />
    </div> -->

    <div
      v-for="(demo, i) in mesDatasPourTimelineEtCardStore.datas"
      :index="i"
    >
      <div> {{ demo.title}}</div>
    </div>

  </div>
</template>

<script setup>

  import { onMounted, onUnmounted, ref } from 'vue';

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


  const columns = [
    { name: 'title', required: true, label: 'Titre', align: 'center', field: 'title', format: val => `${val}`, sortable: true,},
    { name: 'subtitle', label: 'Date', field: 'subtitle', sortable: true, align: 'center' },
    { name: 'subtitle1', label: 'Sous-titre', field: 'subtitle1', sortable: true, align: 'center' },
    { name: 'content', label: 'Contenu', field: 'content', align: 'center' },
    { name: 'img', label: 'Image', field: 'img', align: 'center' },
    { name: 'codeLink', label: 'Lien du code', field: 'codeLink', align: 'center' },
    { name: 'liveLink', label: 'Lien du demo - live', field: 'liveLink', align: 'center' },
    { name: 'icon', label: 'Icon', field: 'icon', sortable: true, align: 'center'},
    { name: 'color', label: 'Couleur', field: 'color', align: 'center' }
  ]

  const rows = mesDatasPourTimelineEtCardStore.datas
  console.log('rows', rows);


</script>

<style lang="scss" scoped>




</style>
