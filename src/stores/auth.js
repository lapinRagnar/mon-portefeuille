import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth } from 'src/boot/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth"

export const useAuthStore = defineStore('auth', () => {

  const essai = ref('salut')
  const user = ref(null)

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

  /** login */
  function loginUser(email, password) {
    console.log("dans le login", email, password)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      user.value = userCredential.user
      console.log('l utilisateur', user.value)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log('des erreurs', errorCode, errorMessage);
    })
  }

  return {
    essai, registerUser, loginUser
  }
})
