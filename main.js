'use strict'; // Modo restrito
// Este modo faz como que o JavaScript apere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
/* Consumo de API - https://viacep.com.br/ */
 
// Função para limpar formulário
const limparFormulario = () =>{
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('complemento').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
   
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

// lenght é uma priopriedade de verifica a quantidade de caracteres dentro do argumento cep
const cepValido = (cep) => cep.length == 8 & eNumero(cep);

