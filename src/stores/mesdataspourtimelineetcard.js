import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMesDatasPourTimelineEtCardStore = defineStore('useMesDatasPourTimelineEtCardStore', () => {

  const datas = ref([
    {
      title: 'Couter cart product && e-commerce',
      subtitle: 'Jan 2023',
      subtitle1: 'Challenge Frontend Mentor 1',
      content: 'html, scss, vue3 js, quasar js.',
      img: 'e-commerce-product-card.png',
      codeLink: 'https://github.com/lapinRagnar/vue3-quasar-ecomerce-product-page-chg-frontendmentor-2',
      liveLink: 'https://quasar-challeng2-ecomerce-cart.web.app/',
      icon: 'fa-solid fa-code',
      color: 'orange'
    },
    {
      title: 'Homepage',
      subtitle: 'Dec 2022',
      subtitle1: 'Challenge Frontend Mentor 2',
      content: 'HTML, scss, js, vue, vuetify.',
      img: 'homepage-frontendmentor.png',
      codeLink: 'https://quasar-frontendmontor-ch1.web.app/',
      liveLink: 'https://quasar-frontendmontor-ch1.web.app/',
      icon: 'fa-solid fa-code',
      color: 'green'
    },
    {
      title: 'Tweeter clone',
      subtitle: 'Nov 2022',
      subtitle1: 'my clone',
      content: 'HTML, scss, js, vue, quasar, firebase.',
      img: 'twitter clone.png',
      codeLink: 'https://github.com/lapinRagnar/vue3_quasar_twitter_clone_firebase_for_windows_mac_ios_android',
      liveLink: 'https://qwitter-5f8d5.web.app/',
      icon: 'fa-solid fa-code',
      color: 'purple'
    },
    {
      title: 'Razer clone',
      subtitle: 'Nov 2022',
      subtitle1: 'my clone',
      content: 'HTML, scss, js, vue, quasar.',
      img: 'razer clone.png',
      codeLink: 'https://github.com/lapinRagnar/quasar-razer-clone',
      liveLink: 'https://razer-clone.web.app/#/',
      icon: 'fa-solid fa-code',
      color: 'yellow'
    },
    {
      title: 'Bank Dashboard',
      subtitle: 'Oct 2022',
      subtitle1: 'cours sur youtube',
      content: 'HTML, SCSS, js, vue, vuetify.',
      img: 'bank dashboard.png',
      codeLink: 'https://github.com/lapinRagnar/vue3-vuetify3-bank',
      liveLink: 'https://vue3-vuetify3-bank.web.app/',
      icon: 'fa-solid fa-code',
      color: 'red'
    },
    {
      title: 'Boutique e-commerce',
      subtitle: 'Sept 2022',
      subtitle1: 'cours sur youtube',
      content: 'HTML, CSS, js, vue, vuetify.',
      img: 'boutique e-commerce.png',
      codeLink: 'https://github.com/lapinRagnar/vue3-vuetify-boutique-ecomerce',
      liveLink: 'https://vue3-vuetify3-e-boutique.web.app/',
      icon: 'fa-solid fa-code',
      color: 'blue'
    },
    {
      title: 'Todo ninja',
      subtitle: 'Sept 2022',
      subtitle1: 'cours sur youtube',
      content: 'HTML, CSS, js, vue, vuetify, firebase auth.',
      img: 'todo-ninja.png',
      codeLink: 'https://github.com/lapinRagnar/vue3-vuetify-boutique-ecomerce',
      liveLink: 'https://todo-ninja-3.web.app/',
      icon: 'fa-solid fa-code',
      color: 'grey'
    },
  ])

  return { datas }

})
