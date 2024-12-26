function carregar(){
    var fundo = window.document.body
    var hora = new Date().getHours()
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    msg.innerHTML=`Agora são ${hora} horas!`
    if (hora >=0 && hora <12){
        //bom dia
        imagem.src='img/manha.png'
        fundo.style.background='yellow'
    }
    else if (hora>=12 && hora <18){
        //boa tarde
        imagem.src='img/tarde.png'
        fundo.style.background='orange'
    }
    else{
        //boa noite
        imagem.src='img/noite.png'
        fundo.style.background='darkblue'
    }
}