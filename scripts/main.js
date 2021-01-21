let pageTitle = document.querySelector("h1");
pageTitle.textContent = "Welcome To This Weird Page";

let someImage = document.querySelector("img");
someImage.onclick = function () {
    let imageSrc = someImage.getAttribute("src");
    if (imageSrc === "images/solid-green-background.jpg") {
        someImage.setAttribute("src", "images/solid-blue-background.jpg");
    } else {
        someImage.setAttribute("src", "images/solid-green-background.jpg");
    }
};

let userSelectorButton = document.querySelector("button");

function updatePageTitle() {
    let userName = localStorage.getItem("name");
    pageTitle.textContent = "Welcome, " + userName;
}

function setUserName() {
    let userName = prompt("Please enter your name.");
    if (!userName) {
        userName = "One who's name must not be mentioned";
    }
    localStorage.setItem("name", userName);
}

if (!localStorage.getItem("name")) {
    setUserName();
}

updatePageTitle();

userSelectorButton.onclick = function () {
    setUserName();
};
