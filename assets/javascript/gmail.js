// Client ID and API key from the Developer Console
var CLIENT_ID = '176211938689-2a7veej5asfou4f2k01g78u9g74la9hn.apps.googleusercontent.com';
var API_KEY = 'AIzaSyCc-CWtS0sKhhW_RGxbHVhUublVKyBawSk';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/gmail.readonly'
             'https://mail.google.com/'
             'https://www.googleapis.com/auth/gmail.send' 
             'https://www.googleapis.com/auth/gmail.modify' 
             'https://www.googleapis.com/auth/gmail.compose'; 

var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    discoveryDocs: DISCOVERY_DOCS,
    clientId: CLIENT_ID,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    createDraft();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

/**
 * Print all Labels in the authorized user's inbox. If no labels
 * are found an appropriate message is printed.
 */
function listLabels() {
  gapi.client.gmail.users.labels.list({
    'userId': 'me'
  }).then(function(response) {
    var labels = response.result.labels;
    appendPre('Labels:');

    if (labels && labels.length > 0) {
      for (i = 0; i < labels.length; i++) {
        var label = labels[i];
        appendPre(label.name)
      }
    } else {
      appendPre('No Labels found.');
    }
  });
}


/**
 * Create Draft email.
 *
 * @param  {String} userId User's email address. The special value 'me'
 * can be used to indicate the authenticated user.
 * @param  {String} email RFC 5322 formatted String.
 * @param  {Function} callback Function to call when the request is complete.
 */
function createDraft(userId, email, callback) {
    // Using the js-base64 library for encoding:
    //https://www.npmjs.com/package/js-base64
    var Base64EncodedEmail = Base64.encodeURI(email);
    var request = gapi.client.gmail.users.drafts.create({
      'userId': userId,
      'resource': {
        'message': {
          'raw': Base64EncodedEmail
        }
      }
    });
    request.execute(callback);
  }




// **
//  * Send Message.
//  *
//  * @param  {String} userId User's email address. The special value 'me'
//  * can be used to indicate the authenticated user.
//  * @param  {String} email RFC 5322 formatted String.
//  * @param  {Function} callback Function to call when the request is complete.
//  */
function sendMessage(userId, email, callback) {
  // Using the js-base64 library for encoding:
  // https://www.npmjs.com/package/js-base64
  var base64EncodedEmail = Base64.encodeURI(email);
  var request = gapi.client.gmail.users.messages.send({
    'userId': userId,
    'resource': {
      'raw': base64EncodedEmail
    }
  });
  request.execute(callback);
}



function sendMessage() {
  var accessToken = $rootScope.accessToken;
  var deferred = $q.defer();
  var sender = 'jcw124sbc@gmail.com';
  var receiver = 'jcw124sbc@gmail.com';
  var subject = 'Example Subject';
  var messageText = 'This is the messsage text';
  var message = [
    'Content-Type: multipart/mixed; boundary="foo_bar_baz"', '\r\n',
    'MIME-Version: 1.0', '\r\n',
    'From: ', sender, '\r\n',
    'To: ', receiver, '\r\n',
    'Subject: ', subject, '\r\n\r\n',

    '--foo_bar_baz', '\r\n',
    'Content-Type: text/html; charset="UTF-8"', '\r\n',
    'MIME-Version: 1.0', '\r\n',
    'Content-Transfer-Encoding: 7bit', '\r\n\r\n',

    '<div style="width:700px; height:55px; background:red;">', messageText, '</div>', '\r\n\r\n',

    '--foo_bar_baz', '\r\n',
    'Content-Type: image/png', '\r\n',
    'MIME-Version: 1.0', '\r\n',
    'Content-Transfer-Encoding: base64', '\r\n',
    'Content-Disposition: attachment; filename="example.png"', '\r\n\r\n',

    smileyIconPng, '\r\n\r\n',

    '--foo_bar_baz--'
  ].join('');

   $.ajax({
    type: "POST",
    url: "https://www.googleapis.com/upload/gmail/v1/users/me/messages/send?uploadType=multipart",
    headers: {
      Authorization: 'Bearer ' + accessToken
    },
    contentType: "message/rfc822",
    data: message
  }).then(deferred.resolve);
}

sendMessage().then(function () {
  console.log('Message sent successfully!');
});
