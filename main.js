const form = document.getElementById('formulario');
const nomes = [];
const telefones = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLinha();
    atualizaTabela();
})

function addLinha(){
    const inputNome = document.getElementById('nome');
    const inputTel = document.getElementById('telefone');

    if(telefones.includes(inputTel.value)){
        alert(`O telefone: ${inputTel.value} já foi inserido`);
    } else {
        nomes.push(inputNome.value);
        telefones.push(parseInt(inputTel.value));

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTel.value}</td>`;
        linha += '</tr>';
        linhas += linha;
    }
    inputNome.value = '';
    inputTel.value = '';
}

function atualizaTabela(){
    const tabela = document.querySelector('tfoot');
    tabela.innerHTML = linhas;
}