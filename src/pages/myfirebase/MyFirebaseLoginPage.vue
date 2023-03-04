<template>
  <div class=" text-green q-ma-lg ma-form">
    <div class="text-h3 q-mb-xl">Login</div>
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
        ]"
        dark
      />

      <div>
        <q-btn label="Login" type="submit" color="primary"/>
      </div>

    </q-form>

  </div>
</template>

<script setup>
  import { useAuthStore } from 'src/stores/auth'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  // import { useQuasar } from 'quasar'

  const authStore = useAuthStore()

  const router = useRouter()

  const email = ref(null)
  const password = ref(null)
  // const $q = useQuasar()

  const onSubmit = () => {
    authStore.loginUser(email.value, password.value)
    router.push({name: 'home'})
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
