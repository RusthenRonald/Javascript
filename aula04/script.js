function carregar(){
    var hora = new Date().getHours()
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    msg.innerHTML=`Agora são ${hora} horas!`
}