import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth } from 'src/boot/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth"

export const useAuthStore = defineStore('auth', () => {

  const essai = ref('salut')

  /** enregister un user */
  function registerUser(email, password) {

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      console.log('bien enregistré', user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log('erreur', errorCode, errorMessage);
    })
  }

  return {
    essai, registerUser
  }
})
