'use strict'; // Modo restrito
// Este modo faz como que o JavaScript apere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
/* Consumo de API - https://viacep.com.br/ */
 
// Função para limpar formulário
const limparFormulario = () =>{
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('uf').value = '';
   
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

// lenght é uma priopriedade de verifica a quantidade de caracteres dentro do argumento cep
const cepValido = (cep) => cep.length == 8 & eNumero(cep);

// Função para preencher formulários como campos da API 
const preencherFormulario = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}
// Função de consumo de API ViaCEP
const pesquisarCep = async() =>{
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;

    if(cepValido(vep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();

        if(addres.hasOwnProperty('erro')){
            alert('CEP Não encontrado');
        }else{
            preencherFormulario(addres);
        }

    }else{
      alert("CEP Incorreto!");
    }
}

// Adiciona escutador para executar consumo de API da ViaCEP
document.getElementById('cep').addEventListener('focusout', pesquisarCep);