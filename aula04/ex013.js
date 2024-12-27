var hora = new Date().getHours()
console.log(`Agora são ${hora} horas`)
if (hora>=0 && hora <5){
    console.log('Boa Madrugada!')
}
else if (hora <12){
    console.log('Bom Dia!')
}
else if (hora >=12 && hora <18){
    console.log('Boa Tarde!')
}
else{
    console.log('Boa noite!')
}
