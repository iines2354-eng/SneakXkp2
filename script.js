
let sneakers = ["Nike Air Force 1", "Adidas UltraBoost", "Jordan 1"];


function countCharacters(text) {
    return text.length;
}


function checkEmail(email) {
    if (email.includes("@")) {
        return true;
    }
    return false;
}


document.getElementById("contactForm").addEventListener("submit", function (event) {

    event.preventDefault();

    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    
    if (checkEmail(email)) {

        document.getElementById("result").innerHTML =
            "Thank you, " + name +
            "! Message length: " + countCharacters(message) + " characters.";

        
        document.getElementById("result").style.color = "green";
        document.getElementById("result").style.fontWeight = "bold";

    } else {

        document.getElementById("result").innerHTML =
            "Invalid email address!";

        document.getElementById("result").style.color = "red";
    }

    
    for (let i = 0; i < sneakers.length; i++) {
        console.log("Sneaker model: " + sneakers[i]);
    }
});



document.getElementById("naslov").addEventListener("mouseover", function () {
    this.style.color = "#00ff99";
});