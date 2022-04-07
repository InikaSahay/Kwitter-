// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA5bQgX7fPfKNZqprPUo2uEKefONZL9gTE",
      authDomain: "kwitter-e9eaf.firebaseapp.com",
      databaseURL: "https://kwitter-e9eaf-default-rtdb.firebaseio.com",
      projectId: "kwitter-e9eaf",
      storageBucket: "kwitter-e9eaf.appspot.com",
      messagingSenderId: "327250720024",
      appId: "1:327250720024:web:ba8e509f6a8ab135cc1a6d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("User Name");
document.getElementById("user_name").innerHTML="Welcome"+user_name;

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name"+Room_names);
      row="<div class='room_name' id= "+Room_names+"onclick='redirectToroomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToroomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";      
}

