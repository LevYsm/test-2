let button = document.getElementById("btn");
button.addEventListener('click', checkTest)

function checkTest() {
    let resul = 0;
    let vopros1 = document.getElementById('vopros1').value;
    if (vopros1 === '🍌🍌🍌' ) {
        resul++;
    }

    let vopros2 = document.getElementById('vopros2').value;
    if (vopros2 === 'потому-что' ) {
        resul++;
    }

    let vopros3 = document.getElementById('vopros3').value;
    if (vopros3 === 'ААА') {
        resul++;
    }

    alert('нуууу вот твой iq' + resul);
}
