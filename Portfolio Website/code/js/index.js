
function sendMessage() {
  // Get the message from the input field
  var message = document.getElementById("messageInput").value;

  // Display the message in a specific area (e.g., a div)
  var messageDisplay = document.getElementById("messageDisplay");
  messageDisplay.innerHTML = "<p>Sent Message: " + message + "</p>";
}
// function myfunction(){
//   var element=document.body;
//   element.dataset.bsTheme=element.dataset.bsTheme=="blue" ?"blue":"light";

// }
