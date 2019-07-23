let intelligentLevels = [
    "smart",
    "megamind",
    "genius",
    "master mind",
    "daxter",
    "iron man",
    "idiots",
    "master",
    "wong",
    "dumb",
    "super dumb",
];

// function showIntelligence() {
//     let name = document.querySelector("input").value;

//     if (name == false) {
//         alert("please enter your name!");
//     } else {
//         if (name.charAt(0).toLowerCase() == "a") {
//             let Intelligence = intelligentLevels[0];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "b") {
//             let Intelligence = intelligentLevels[1];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "c") {
//             let Intelligence = intelligentLevels[3];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "d") {
//             let Intelligence = intelligentLevels[5];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "e") {
//             let Intelligence = intelligentLevels[11];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "f") {
//             let Intelligence = intelligentLevels[4];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "g") {
//             let Intelligence = intelligentLevels[10];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "h") {
//             let Intelligence = intelligentLevels[9];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "i") {
//             let Intelligence = intelligentLevels[8];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "j") {
//             let Intelligence = intelligentLevels[7];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "k") {
//             let Intelligence = intelligentLevels[1];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "l") {
//             let Intelligence = intelligentLevels[0];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "m") {
//             let Intelligence = intelligentLevels[2];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "n") {
//             let Intelligence = intelligentLevels[6];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "o") {
//             let Intelligence = intelligentLevels[8];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "p") {
//             let Intelligence = intelligentLevels[11];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "q") {
//             let Intelligence = intelligentLevels[12];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "r") {
//             let Intelligence = intelligentLevels[13];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "s") {
//             let Intelligence = intelligentLevels[1];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "t") {
//             let Intelligence = intelligentLevels[0];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "u") {
//             let Intelligence = intelligentLevels[7];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "v") {
//             let Intelligence = intelligentLevels[4];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "w") {
//             let Intelligence = intelligentLevels[8];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "x") {
//             let Intelligence = intelligentLevels[2];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "y") {
//             let Intelligence = intelligentLevels[4];
//             alert(name + " you are " + Intelligence);
//         } else if (name.charAt(0).toLowerCase() == "z") {
//             let Intelligence = intelligentLevels[1];
//             alert(name + " you are " + Intelligence);
//         }
//     }
// }
function showIntelligence() {
    let name = document.querySelector("input").value;
    let randomName = parseInt(Math.random() * intelligentLevels.length);

    alert(intelligentLevels[randomName]);

}