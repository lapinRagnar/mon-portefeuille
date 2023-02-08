<template>
  <q-card class="bg-transparent text-green text-center text-weight-bold text-h4">
    <q-card-section class="bg-transparent">
      {{ time }}
    </q-card-section>
  </q-card>
</template>


<script setup>
  import { ref, onMounted } from 'vue'

  const time = ref('')

  function updateTime () {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    time.value = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds)
  }

  function formatTime (value) {
    return value < 10 ? '0' + value : value
  }

  onMounted(() => {
    updateTime()
    setInterval(() => {
      updateTime()
    }, 1000)
  })



</script>
