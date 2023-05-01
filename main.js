const form = document.getElementById('form-inserir-dados');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputDddContato = document.getElementById('ddd-contato');
    const inputTelContato = document.getElementById('telefone-contato');

    let linha = '<tr>';
    linha +=`<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputDddContato.value}</td>`;
    linha += `<td>${inputTelContato.value}</td>`;
    linha+= '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputDddContato.value = '';
    inputTelContato.value = '';
});