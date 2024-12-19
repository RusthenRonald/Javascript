function carregar(){
    var corpo=window.document.body
    var msg = window.document.getElementById('msg')
    var foto=window.document.getElementById('foto')
    var data= new Date()
    var hora = data.getHours()
    msg.innerHTML=`Agora são ${hora} horas.`
    if (hora>=0 && hora <5){
        corpo.style.background = 'darkblue'
        msg.innerHTML+=' Boa Madrugada!'
        foto.src='../img/noite.png'
    }
    else if (hora<12){
        corpo.style.background='yellow'
        msg.innerHTML+=' Bom dia!'
    }
    else if (hora>=12 && hora <18){
        corpo.style.background='orange'
        msg.innerHTML+=' Boa Tarde!'
    }
    else{
        corpo.style.background='blue'
        msg.innerHTML+=' Boa Noite!'
    }
}