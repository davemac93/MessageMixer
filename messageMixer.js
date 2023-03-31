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
    const start = ['Hello,', 'Hi,', 'Greetings,', 'Bonjour,', 'Welcome,', 'Hey,', 'Hi-ya,', 'Good Morning,']
    const mid = ['wish you', 'give you', 'bless you', 'hope you have a']
    const end = ['good day', 'beautiful day', 'amazing day', 'incredible day', 'wonderful day', 'fantastic day', 'sweet day']
    let newText = ''
    let x = Math.floor(Math.random()*7)
    let y = Math.floor(Math.random()*3)
    let z = Math.floor(Math.random()*6)
    newText = newText.concat(start[x], ' ', mid[y], ' ', end[z])
    console.log(newText)
    //var elem = document.getElementById("logo")
    //elem.textContent = newText;
}

newMessage();