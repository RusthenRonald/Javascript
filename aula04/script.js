function carregar(){
    var corpo=window.document.body
    var msg = window.document.getElementById('msg')
    var foto=window.document.getElementById('foto')
    var data= new Date()
    var hora = data.getHours()
    msg.innerHTML=`Agora são ${hora} horas.`
    if (hora>=0 && hora <5){
        corpo.style.background = 'darkblue'
    }
}