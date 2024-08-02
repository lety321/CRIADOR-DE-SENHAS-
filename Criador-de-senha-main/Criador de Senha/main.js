const numeroSenha = document.querySelector('paramentro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll("parametro-senha_botao");

botoes[0].onlink = diminuiTamanho;
botoes[1].onlink = aumentaTamanho;

function diminuiTamanho(){
 if(tamanhoenha>1){
    tamanhoSenha--;
 }
  numeroSenha.textContent =tamanhoSenha
}

function aumentaTamanho(){
    if (tamanhoSenha< 20){ 
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}
