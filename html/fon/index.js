// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAE-lU1QTK4zPboKV-LA8AJi4LoDXUHMlM",
  authDomain: "img-html5.firebaseapp.com",
  projectId: "img-html5",
  storageBucket: "img-html5.firebasestorage.app",
  messagingSenderId: "449060493639",
  appId: "1:449060493639:web:8ac1cb3d5ae1e683db1462"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Глобальная функция
window.imgZ = function(action, imageUrl, type) {
  const bgRef = doc(db, "backgrounds", "current");
  
  if (action === "Запись") {
    setDoc(bgRef, {
      imageUrl: imageUrl,
      type: type || "img",
      timestamp: Date.now(),
      setBy: "user"
    });
    return "Записываю...";
  } 
  else if (action === "Чтение") {
    return getDoc(bgRef).then((docSnap) => {
      return docSnap.exists() ? docSnap.data().imageUrl : "";
    });
  }
};