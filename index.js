
bodyBackground = document.getElementById("body");
showColorName = document.getElementsByTagName("p");
colorsArray = ["red", "orange", "yellow", "green", "blue", "black", "purple", "white", "violet"];

document.getElementById("btn").addEventListener("click", () => {
    showColorName = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    bodyBackground.style.backgroundColor = `${showColorName}`;
    document.querySelector("h1").style.color =  `${showColorName}`;
    
    switch (bodyBackground.style.backgroundColor) {
        case "black":
            document.getElementById("btn").style.color = "white";
            document.getElementById("btn").classList.add("button-white");
            document.getElementById("title").classList.add("h1-white");
            document.getElementById("color-name").innerHTML = "Black";
            document.getElementById("color-name").style.color = "white";
            break;
        case "yellow":
            document.getElementById("btn").style.color = "black";
            document.getElementById("btn").classList.remove("button-white");
            document.getElementById("title").classList.remove("h1-white");
            document.getElementById("color-name").innerHTML = "Yellow";
            document.getElementById("color-name").style.color = "black";
            break;
        case "white":
            document.getElementById("btn").style.color = "black";
            document.getElementById("btn").classList.remove("button-white");
            document.getElementById("title").classList.remove("h1-white");
            document.getElementById("color-name").innerHTML = "White";
            document.getElementById("color-name").style.color = "black";
            break;
        case "blue":
            document.getElementById("btn").style.color = "black";
            document.getElementById("btn").classList.remove("button-white");
            document.getElementById("title").classList.remove("h1-white");
            document.getElementById("color-name").innerHTML = "Blue";
            document.getElementById("color-name").style.color = "black";
            break;
        case "orange":
            document.getElementById("btn").style.color = "black";
            document.getElementById("btn").classList.remove("button-white");
            document.getElementById("title").classList.remove("h1-white");
            document.getElementById("color-name").innerHTML = "Orange";
            document.getElementById("color-name").style.color = "black";
            break;
        case "red":
            document.getElementById("btn").style.color = "black";
            document.getElementById("btn").classList.remove("button-white");
            document.getElementById("title").classList.remove("h1-white");
            document.getElementById("color-name").innerHTML = "Red";
            document.getElementById("color-name").style.color = "black";
            break;
        case "green":
            document.getElementById("btn").style.color = "black";
            document.getElementById("btn").classList.remove("button-white");
            document.getElementById("title").classList.remove("h1-white");
            document.getElementById("color-name").innerHTML = "Green";
            document.getElementById("color-name").style.color = "black";
            break;
        case "purple":
            document.getElementById("btn").style.color = "white";
            document.getElementById("btn").classList.add("button-white");
            document.getElementById("btn").classList.add("button-white:hover");
            document.getElementById("title").classList.add("h1-white");
            document.getElementById("color-name").innerHTML = "Purple";
            document.getElementById("color-name").style.color = "white";
            break;
        case "violet":
            document.getElementById("btn").style.color = "black";
            document.getElementById("btn").classList.remove("button-white");
            document.getElementById("title").classList.remove("h1-white");
            document.getElementById("color-name").innerHTML = "Violet";
            document.getElementById("color-name").style.color = "black";
            break;
    }
})