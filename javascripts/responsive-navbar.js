/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function collapse() {
  var x = document.getElementById("top-nav");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
} 