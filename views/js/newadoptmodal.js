// Get the login modal
var modal = document.getElementById('myModal');

// Get the register modal
var modalTwo = document.getElementById('myModalTwo');

// Get the button that opens the login modal
var btn = document.getElementById("loginBtn");

// Get the button that opens the register modal
var btnTwo = document.getElementById("registerBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var spanTwo = document.getElementsByClassName("close")[0];

// When the user clicks on the login button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on the register button, open the modal
btnTwo.onclick = function() {
    modalTwo.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
  $("#show-user").html("firstname");
// When the user clicks on <span> (x), close the modal
spanTwo.onclick = function() {
    modalTwo.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";

    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	console.log("This is inside the onclick", event);
    
console.log("This is the target attribute");
    if (event.target.attributes["aria-hidden"]) {
    	console.log("inside the if");
    	modal.style.display = "none";
        modalTwo.style.display = "none";
    }
}
