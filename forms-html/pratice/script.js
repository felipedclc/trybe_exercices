function createStates() {
    const select = document.querySelector('#estados');

    const stateList = ['Selecione um estado', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    for (let i = 0; i < stateList.length; i += 1) {
        const option = document.createElement('option');
        option.value = stateList[i];
        option.innerText = stateList[i];
        select.appendChild(option);
    }
}

function sendForm() {
    const btn = document.querySelector('#send');
    const form = document.querySelector('#formulario')
    const inputElements = document.querySelectorAll('input');

    btn.addEventListener('click', function (e) {
        e.preventDefault();
        for (let i = 0; i < inputElements.length; i += 1) {
            const div = document.createElement('div');
            let el = inputElements[i];
            div.innerHTML = el.value;
            div.className = 'form-input';
            div.style.background = 'rgb(130, 130, 130)';
            form.appendChild(div);
        }
    });
}

function clearForm() {
    
}

window.onload = function () {
    createStates();
    sendForm();
}