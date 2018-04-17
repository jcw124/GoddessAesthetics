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

 //Contact Us form variables
 var ContactFirstName, ContactLastName, ContactEmail, ContactPhone, ContactMessage;

 //Booking form variables
 var BookingFirstName, BookingLastName, BookingEmail, BookingPhone, BookingNotes, BookingService1, BookingService2, BookingDate, BookingTime, time, date, datetime, apptTime;


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
  console.log("Contact Us Errors handled: " + errorObject.code);
});


// Capture Booking info from form
$("#authorize-button").on("click", function(event) {
  event.preventDefault();
  
console.log("button click function line 68");

//Collect values from Booking form
BookingFirstName = $("#bkfname").val().trim();
BookingLastName = $("#bklname").val().trim();
BookingEmail = $("#bkemailAdd").val().trim();
BookingPhone = $("#bkphone").val().trim();
BookingNotes = $("#bknotes").val().trim();
BookingService1 = $("#bkservices").val();
BookingService2 = $("#bkservices1").val();
BookingDate = $("#bkdate").val();
BookingTime = $("#bktime").val();

console.log(BookingFirstName + " " + BookingLastName);
console.log(BookingEmail);
console.log(BookingPhone);
console.log(BookingNotes);
console.log(BookingService1 + BookingService2);
console.log(BookingDate);
console.log(BookingTime);
time = moment(BookingTime).format();    
date = moment(BookingDate).format();    
datetime = BookingDate + " " + BookingTime;
apptTime = moment(datetime).format();  
//console.log(time);
console.log(date);
console.log(datetime);
console.log(apptTime);

// Push booking values to database
database.ref("bookings").push({
FirstName: BookingFirstName,
LastName: BookingLastName,
Email: BookingEmail,
PhoneNumber: BookingPhone,
Notes: BookingNotes,
Services: BookingService1,
AddtlServices: BookingService2,
dateAdded: firebase.database.ServerValue.TIMESTAMP
});
});
// Firebase watcher 
database.ref().orderByChild("dateAdded").on("child_added", function(snapshot) {
// storing the snapshot.val() in a variable for convenience
var booking = snapshot.val();

// Handle the errors
}, function(errorObject) {
console.log("Booking Errors handled: " + errorObject.code);
});