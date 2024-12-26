var hora = new Date().getHours()
if (hora >5 && hora <=11){
    console.log('Bom dia')
    console.log(`São ${hora} horas`)
}
else if (hora >11 && hora<=17){
    console.log('Boa tarde')
    console.log(`São ${hora} horas`)
}
else if (hora >17 && hora <=23){
    console.log('Boa noite')
    console.log(`São ${hora} horas`)
}
else if (hora >0 && hora <=5){
    console.log('Boa madrugada!')
    console.log(`São ${hora} horas`)
}
else{
    console.log('Hora inválida!')
}