// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA4n2Gcla7TeIMImeqHkGnVRzAAfI1mRmk",
  authDomain: "letschat-75b43.firebaseapp.com",
  databaseURL: "https://letschat-75b43-default-rtdb.firebaseio.com",
  projectId: "letschat-75b43",
  storageBucket: "letschat-75b43.appspot.com",
  messagingSenderId: "214335307173",
  appId: "1:214335307173:web:d88aaaa14975a509677c4c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
document.getElementById("user_name_heading").innerHTML="Welcome " + user_name;

function addRoom(){
  room_name = document.getElementById("room_name").value;
  if(room_name != ""){
    firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
    localStorage.setItem("room_name" ,room_name);
    window.location="kwitter_page.html";
}else{ 
document.getElementById("room_name").placeholder="Please type a room name";
}
}
function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name = " + Room_names);
      row="<div class='room_name' id= "+ Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();




function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
  }


