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
window.onload = function () {
    createStates();
}