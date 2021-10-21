'use strict'
const { initializeApp } = require('firebase/app')
const { getStorage, ref, getDownloadURL } = require('firebase/storage')

initializeApp(
  {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
  }
)

!(async () => {
  const storage = getStorage()
  const pathReference = ref(storage, 'sample.txt')
  const url = await getDownloadURL(pathReference)
  console.log(url)
})()