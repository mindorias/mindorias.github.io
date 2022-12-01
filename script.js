let currentNumber = 1;
let newNumber;

function nextPage(previousPage, nextPage) {
    document.getElementById(previousPage).classList.add('d-none');
    document.getElementById(nextPage).classList.remove('d-none');
}

function moveButton(id) {
    let button = document.getElementById(id);
    button.classList.remove('align-self-center', 'align-self-start', 'align-self-end');
    newNumber = Math.floor(Math.random() * 3) + 1
    
    if (currentNumber != newNumber) {
        currentNumber = newNumber
    } else {
        moveButton(id)
    }

    switch(currentNumber) {
        case 1:
            button.classList.add('align-self-center')
            break;
        case 2:
            button.classList.add('align-self-start')
            break;
        case 3:
            button.classList.add('align-self-end')
            break;
    };
}