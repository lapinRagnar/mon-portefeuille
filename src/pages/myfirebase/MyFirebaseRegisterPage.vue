<template>
  <div class=" text-green q-ma-lg ma-form">
    <div class="text-h3 q-mb-xl">Register to Firebase</div>
    <q-form
      @submit="onSubmit"
      class="q-gutter-md text-white"
      style="width: 300px"
    >
      <q-input
        filled
        type="email"
        v-model="email"
        label="email *"
        hint="ton email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Ton email STP!']"
        dark
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="ton mot de passe *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ton mot de passe stp!',
          val => (val.length > 4 )|| 'mot de passe > 4 caractère!'
        ]"
        dark
      />

      <div>
        <q-btn label="Register" type="submit" color="primary"/>
      </div>

    </q-form>

  </div>
</template>

<script setup>
  import { useAuthStore } from 'src/stores/auth'
  import { ref } from 'vue'
  // import { useQuasar } from 'quasar'

  const authStore = useAuthStore()

  const email = ref(null)
  const password = ref(null)
  // const $q = useQuasar()

  const onSubmit = () => {
    console.log('ca marche, email et pswd', email.value, password.value)
    authStore.registerUser(email.value, password.value)
  }


</script>


<style lang="scss" scoped>
  .ma-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
