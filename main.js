// get the elements 
const output = document.getElementById("output");
const button = document.querySelector("button");
const input = document.querySelector("[type='text']");
//genarate the color
function genrateHexColor() {
    var result = '';
    var characters = 'abcdef0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 6; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

//assign the color to the box and as value to hte input
button.onclick= function(){
    let color = genrateHexColor();
    output.style.backgroundColor = `#${color}`
    input.value =  `#${color}`;
}
input.oninput = function(){
    output.style.backgroundColor = input.value;
}

