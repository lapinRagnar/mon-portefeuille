<template>

  <div class="maForm">

    <div class="text-h3 text-white q-mb-xl">Ajouter un démo</div>

    <q-form
      @submit="onSubmit"
      class="q-gutter-md text-white"
      style="width: 1000px"
    >

      <div class="row q-gutter-lg">

        <div class="col">

          <q-input
            filled
            type="text"
            v-model="formulaireDemo.title"
            label="Titre *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Ton titre STP!']"
            dark
          />

          <q-input
            filled
            type="text"
            v-model="formulaireDemo.subtitle"
            label="date *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'date STP!']"
            dark
          />

          <q-input
            filled
            type="text"
            v-model="formulaireDemo.subtitle1"
            label="sous-titre *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'sous-titre STP!']"
            dark
          />

          <q-input
            filled
            type="text"
            v-model="formulaireDemo.content"
            label="contenu *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'contenu STP!']"
            dark
          />

          <q-input
            filled
            type="text"
            v-model="formulaireDemo.img"
            label="image *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'image STP!']"
            dark
          />

        </div>

        <div class="col ">

          <q-input
            filled
            type="text"
            v-model="formulaireDemo.codeLink"
            label="Lien du code *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'lien du code STP!']"
            dark
          />

          <q-input
            filled
            type="text"
            v-model="formulaireDemo.liveLink"
            label="Lien du démo *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'lien du démo STP!']"
            dark
          />

          <q-input
            filled
            type="text"
            v-model="formulaireDemo.icon"
            label="L'icone *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'icone STP!']"
            dark
          />

          <q-input
            filled
            type="text"
            v-model="formulaireDemo.color"
            label="La couleur *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'la couleur STP!']"
            dark
          />

          <div class="text-right q-mt-md">
            <q-btn label="Ajouter" type="submit" color="accent" style="width: 150px"/>
          </div>


        </div>

      </div>





    </q-form>

  </div>

</template>

<script setup>

  import { ref } from 'vue';
  import { useMesDatasPourTimelineEtCardStore } from 'src/stores/mesdataspourtimelineetcard'

  const mesDatasPourTimelineEtCardStore = useMesDatasPourTimelineEtCardStore()

  // const title = ref(null)
  // const subtitle = ref(null)
  // const subtitle1 = ref(null)
  // const content = ref(null)
  // const img = ref(null)
  // const codeLink = ref(null)
  // const liveLink = ref(null)
  // const icon = ref(null)
  // const color = ref(null)

  const formulaireDemo = ref({
    title: '',
    subtitle: '',
    subtitle1: '',
    content: '',
    img: '',
    codeLink: '',
    liveLink: '',
    icon: '',
    color: ''
  })


  const onSubmit = () => {

    mesDatasPourTimelineEtCardStore.ajouterDemo(formulaireDemo)

    formulaireDemo.value.title = ''
    formulaireDemo.value.subtitle = ''
    formulaireDemo.value.subtitle1 = ''
    formulaireDemo.value.content = ''
    formulaireDemo.value.img = ''
    formulaireDemo.value.codeLink = ''
    formulaireDemo.value.liveLink = ''
    formulaireDemo.value.icon = ''
    formulaireDemo.value.color = ''
  }

</script>

<style lang="scss" scoped>

  .maForm{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
  }

</style>
