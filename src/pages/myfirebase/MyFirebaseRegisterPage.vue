<template>
  <div class="flex flex-center text-white q-ma-lg">
    <div>Register to Firebase</div>
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        type="email"
        v-model="email"
        label="email *"
        hint="ton email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Ton email STP!']"
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

  console.log('authStore', authStore.essai)

  const email = ref(null)
  const password = ref(null)
  // const $q = useQuasar()

  const onSubmit = () => {
    console.log('ca marche, email et pswd', email.value, password.value)
    authStore.registerUser(email.value, password.value)
  }


</script>


<style lang="scss" scoped>

</style>
