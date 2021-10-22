'use strict'
const { initializeApp, deleteApp, getApps } = require('firebase/app')
const { getStorage, ref, getDownloadURL } = require('firebase/storage')

const app = initializeApp(
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
  const pathReference = ref(storage, 'sample.jpeg')
  const url = await getDownloadURL(pathReference)
  console.log('Download url:', url)
  console.log('App num:', getApps().length)
  await deleteApp(app)
  console.log('Delete app!')
  console.log('App num:', getApps().length)
})()