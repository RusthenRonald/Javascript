function carregar(){
    var hora = new Date().getHours()
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    msg.innerHTML=`Agora são ${hora} horas!`
    if (hora >=0 && hora <12){
        //bom dia
    }
    else if (hora>=12 && hora <18){
        //boa tarde
    }
    else{
        //boa noite
    }
}