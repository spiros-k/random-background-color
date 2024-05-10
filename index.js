
bodyBackground = document.getElementById("body");
showColorName = document.getElementsByTagName("p");
colorsArray = ["maroon", "orangered", "skyblue", "lime", "darkblue", "black", "purple", "white", "violet", "salmon", "teal", "olive", "gold"];

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
            document.getElementById("btn").classList.add("colorTransition");
            break;
        case "purple":
            document.getElementById("btn").style.color = "white";
            document.getElementById("btn").classList.add("button-white");
            document.getElementById("btn").classList.add("button-white:hover");
            document.getElementById("title").classList.add("h1-white");
            document.getElementById("color-name").innerHTML = "Purple";
            document.getElementById("color-name").style.color = "white";
            document.getElementById("btn").classList.add("colorTransition");
            break;
        case "darkblue":
            document.getElementById("btn").style.color = "white";
            document.getElementById("btn").classList.add("button-white");
            document.getElementById("title").classList.add("h1-white");
            document.getElementById("color-name").innerHTML = "Dark Blue";
            document.getElementById("color-name").style.color = "white";
            document.getElementById("btn").classList.add("colorTransition");
            break;
        case "skyblue":
            document.getElementById("btn").style.color = "black";
            document.getElementById("btn").classList.remove("button-white");
            document.getElementById("title").classList.remove("h1-white");
            document.getElementById("color-name").innerHTML = "Sky Blue";
            document.getElementById("color-name").style.color = "black";
            document.getElementById("btn").classList.add("colorTransition");
            break;
        case "white":
            document.getElementById("btn").style.color = "black";
            document.getElementById("btn").classList.remove("button-white");
            document.getElementById("title").classList.remove("h1-white");
            document.getElementById("color-name").innerHTML = "White";
            document.getElementById("color-name").style.color = "black";
            document.getElementById("btn").classList.add("colorTransition");
            break;
        case "orangered":
            document.getElementById("btn").style.color = "black";
            document.getElementById("btn").classList.remove("button-white");
            document.getElementById("title").classList.remove("h1-white");
            document.getElementById("color-name").innerHTML = "Orange Red";
            document.getElementById("color-name").style.color = "black";
            document.getElementById("btn").classList.add("colorTransition");
            break;
        case "maroon":
            document.getElementById("btn").style.color = "white";
            document.getElementById("btn").classList.add("button-white");
            document.getElementById("title").classList.add("h1-white");
            document.getElementById("color-name").innerHTML = "Maroon";
            document.getElementById("color-name").style.color = "white";
            document.getElementById("btn").classList.add("colorTransition");
            break;
        case "lime":
            document.getElementById("btn").style.color = "black";
            document.getElementById("btn").classList.remove("button-white");
            document.getElementById("title").classList.remove("h1-white");
            document.getElementById("color-name").innerHTML = "Lime";
            document.getElementById("color-name").style.color = "black";
            document.getElementById("btn").classList.add("colorTransition");
            break;
        case "olive":
            document.getElementById("btn").style.color = "black";
            document.getElementById("btn").classList.remove("button-white");
            document.getElementById("title").classList.remove("h1-white");
            document.getElementById("color-name").innerHTML = "Olive";
            document.getElementById("color-name").style.color = "black";
            document.getElementById("btn").classList.add("colorTransition");
            break;
        case "violet":
            document.getElementById("btn").style.color = "black";
            document.getElementById("btn").classList.remove("button-white");
            document.getElementById("title").classList.remove("h1-white");
            document.getElementById("color-name").innerHTML = "Violet";
            document.getElementById("color-name").style.color = "black";
            document.getElementById("btn").classList.add("colorTransition");
            break;
        case "salmon":
            document.getElementById("btn").style.color = "black";
            document.getElementById("btn").classList.remove("button-white");
            document.getElementById("title").classList.remove("h1-white");
            document.getElementById("color-name").innerHTML = "Salmon";
            document.getElementById("color-name").style.color = "black";
            document.getElementById("btn").classList.add("colorTransition");
            break;
        case "teal":
            document.getElementById("btn").style.color = "black";
            document.getElementById("btn").classList.remove("button-white");
            document.getElementById("title").classList.remove("h1-white");
            document.getElementById("color-name").innerHTML = "Teal";
            document.getElementById("color-name").style.color = "black";
            document.getElementById("btn").classList.add("colorTransition");
            break;
        case "gold":
            document.getElementById("btn").style.color = "black";
            document.getElementById("btn").classList.remove("button-white");
            document.getElementById("title").classList.remove("h1-white");
            document.getElementById("color-name").innerHTML = "Gold";
            document.getElementById("color-name").style.color = "black";
            document.getElementById("btn").classList.add("colorTransition");
            break;
    }
})