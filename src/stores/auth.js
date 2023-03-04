import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth } from 'src/boot/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
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

  /**authentication state observer */
  function authenticationStateObserver(){
  onAuthStateChanged(auth, (u) => {
    if (u) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // const uid = user.uid
      // ...
      user.value = u
      console.log("l'utilisateur connecté est ", user.value)

    } else {
      // User is signed out
      // ...
      console.log("l'utilisateur est deconnecté!")
    }
  })
}

  return {
    essai, registerUser, loginUser, authenticationStateObserver
  }
})
