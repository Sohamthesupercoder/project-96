

 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyAGfhfJvbcUc6EmIQGhFHRfMwA6OLrJcdQ",
      authDomain: "kwitter-442f5.firebaseapp.com",
      databaseURL: "https://kwitter-442f5-default-rtdb.firebaseio.com",
      projectId: "kwitter-442f5",
      storageBucket: "kwitter-442f5.appspot.com",
      messagingSenderId: "833924373424",
      appId: "1:833924373424:web:a0b48d1922ad21fb221475"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");


function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
      }


      function send(){
            msg=document.getElementById("message").value;
            firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
            
            });
            document.getElementById("message").value="";
      }


      function update_like(message_id){
         button_id=message_id;   
         likes=document.getElementById(button_id).value;
         updated_likes=Number(likes) + 1;
         firebase.database().ref(room_name).child(button_id).update({
            like:updated_likes     
         });
      }