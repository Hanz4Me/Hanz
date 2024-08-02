var tablinks = document.querySelectorAll(".tab-links p");
var tabcontents = document.getElementsByClassName("tab-contents");
// document.getElementsByClassName("tab-links")[0].style.display = "block"; // Assuming tab-links is a class and not an ID

function opentab(tabname) {
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    var selectedTab = document.getElementById(tabname);
    if (selectedTab) {
        selectedTab.classList.add("active-tab");
    }

    var activeLink = document.querySelector(".tab-links p[onclick=\"opentab('" + tabname + "')\"]");
    if (activeLink) {
        activeLink.classList.add("active-link");
    }
}

// Automatically open the first tab on page load
window.onload = function() {
    opentab('skills'); // Replace 'tab1' with the ID of the tab you want to open
};


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0"
}
function closemenu(){
    sidemenu.style.right = "-200px"
}

