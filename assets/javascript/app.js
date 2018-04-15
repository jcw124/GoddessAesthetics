$(document).ready(function () {});

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD9JPRHwIhDlaJtCx2WQC0OxJpFO2n6y4Q",
    authDomain: "goddess-aesthetics-db.firebaseapp.com",
    databaseURL: "https://goddess-aesthetics-db.firebaseio.com",
    projectId: "goddess-aesthetics-db",
    storageBucket: "goddess-aesthetics-db.appspot.com",
    messagingSenderId: "176211938689"
  };
  firebase.initializeApp(config);

  //Initialize database variable
 var database = firebase.database();

 //Initialize Contact Us form variables
 var ContactFirstName, ContactLastName, ContactEmail, ContactPhone, ContactMessage;

 //Initialize services Variables
 var serviceArray = services[];
 console.log(services[]);


//Services
function ListServices() {
  for (i = 0; i < services.length; i++) {
    var serviceTitle = services.title[i];
    var serviceFee = services.fee[i];
    var serviceDescription = services.description[i];
    console.log(serviceTitle + serviceFee + serviceDescription);
}
}; 


// function Questions() {
//   $("#questions").empty();
//   $("<h2>").empty();
//   if (ticker == 20) {
//     endgame();
//   } else {

//     $("#questions").append(questions[ticker].question);
//     var questionText = questions[ticker].question;
//     var answer = questions[ticker].answer;

//     var choicea = $("<div id='choicea' class='choices'>");
//     var choiceb = $("<div id='choiceb' class='choices'>");
//     var choicec = $("<div id='choicec' class='choices'>");
//     var choiced = $("<div id='choiced' class='choices'>");
//     correctanswer = $("<div id='answer' class='answer'>");

//     choicea.append(questions[ticker].choices[0]);
//     choiceb.append(questions[ticker].choices[1]);
//     choicec.append(questions[ticker].choices[2]);
//     choiced.append(questions[ticker].choices[3]);

//     $("#questions").append(choicea, choiceb, choicec, choiced);



 // Capture Contact info from form
$("#signin").on("click", function(event) {
    event.preventDefault();

console.log("button click function line 21");

//Collect values from contact us form
ContactFirstName = $("#fname").val().trim();
ContactLastName = $("#lname").val().trim();
ContactEmail = $("#emailAdd").val().trim();
ContactPhone = $("#phone").val().trim();
ContactMessage = $("#message").val().trim();

console.log(ContactFirstName + " " + ContactLastName);
console.log(ContactEmail);
console.log(ContactPhone);
console.log(ContactMessage);

// Push contact us values to database
database.ref("contacts").push({
  FirstName: ContactFirstName,
  LastName: ContactLastName,
  Email: ContactEmail,
  PhoneNumber: ContactPhone,
  Message: ContactMessage,
  dateAdded: firebase.database.ServerValue.TIMESTAMP
});
});
// Firebase watcher 
database.ref().orderByChild("dateAdded").on("child_added", function(snapshot) {
  // storing the snapshot.val() in a variable for convenience
  var contact = snapshot.val();

  // Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});

ListServices();