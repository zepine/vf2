import { initializeApp } from 'firebase/app'
// import * as firebase from 'firebase/app'
import { getDatabase, ref, set, child, get, onValue } from 'firebase/database'
// import Vue from 'vue'
import firebaseConfig from '../../firebaseConfig'

export {
  writeUserData,
  readUserData,
  listenUserData
}

// const app = initializeApp(firebaseConfig)
initializeApp(firebaseConfig)
const db = getDatabase()
const dbRef = ref(getDatabase())

function writeUserData (userId, name, born, imageUrl) {
  // set()을 사용하여 데이터 쓰기
  set(ref(db, `The Witcher/${userId}`), {
    name: name,
    born: born,
    profile_picture: imageUrl
  })
}

function readUserData (userId) {
  // get()을 사용하여 데이터 한 번 읽기
  get(child(dbRef, `The Witcher/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val())
      } else {
        console.log('데이터가 없습니다')
      }
    })
    .catch((error) => {
      console.error('db를 가져오는 중 에러가 발생했습니다(아래 참조) </br>' + error)
    })
}
function listenUserData (userId) {
  // on(), 경로의 데이터를 읽고 변경사항을 수신 대기
  onValue(ref(db, `The Witcher/${userId}`), (snapshot) => {
    const data = snapshot.val()
    console.log(data)
  })
}

// export Vue.prototype.$firebase = firebase
