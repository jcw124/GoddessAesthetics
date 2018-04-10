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


 //Ajax test call 
queryURL = "https://www.googleapis.com/calendar/v3/calendars/primary/events?sendNotifications=true&supportsAttachments=true&fields=endTimeUnspecified%2Cgadget%2Corganizer%2Creminders%2FuseDefault%2Cstart&key=AIzaSyABfyoUKd5LoeP8AXbn05AXwSjr9C4LCcY"
appointment = {
    "end": {
     "dateTime": "2018-05-01T11:00:00",
     "timeZone": "America/Los_Angeles"
    },
    "start": {
     "dateTime": "2018-05-01T10:00:00",
     "timeZone": "America/Los_Angeles"
    },
    "description": "appointment ",
    "attendees": [
     {
      "email": "jcw_124@sbcglobal.net"
     }
    ],
    "reminders": {
     "useDefault": true
    }
    }
    

 $.ajax({
    url: queryURL,
    headers: {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin' : '*'
    },
    dataType: 'json',
    data: appointment,
    method: "POST"
  }).then(function(response) {
    
    console.log(response);

    var  results = (response.data) ;

   })
