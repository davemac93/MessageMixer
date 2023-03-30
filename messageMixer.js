function newStyle() {
    let newColor = "";
    let x = Math.floor(Math.random()*7); 
    switch (x) {
        case 0:
            newColor = '#6B4F0E';
            break;
        case 1: 
            newColor = '#EEC566';
            break;
        case 2:
            newColor = '#EAAE1E';
            break; 
        case 3:
            newColor= '#6B592E';
            break
        case 4:
            newColor = '#B88818';
            break;
        case 5:
            newColor = '#EEDBB0';
            break;
        case 6: 
            newColor = '#6B634F';
            break;
    }
    var element = document.getElementById('mainColor');
    element.style.background = newColor;
}

function newMessage() {
    let newText = ''
    let x = Math.floor(Math.random()*3)
    switch(x){
        case 0:
            newText = "Siema mordo"
            break;
        case 1:
            newText = "Elo mordo"
            break;
        case 2:
            newText = "Czesc mordo"
            break;
    }
    var elem = document.getElementById("logo")
    function(event) {
        if (event.onkeypress==32) {
            elem.textContent = newText;
        }
    }
}