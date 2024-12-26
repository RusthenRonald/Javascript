var hora = 16
if (hora >5 && hora <=11){
    console.log('Bom dia')
}
else if (hora >11 && hora<=17){
    console.log('Boa tarde')
}
else if (hora >17 && hora <=23){
    console.log('Boa noite')
}
else if (hora >0 && hora <=5){
    console.log('Boa madrugada!')
}
else{
    console.log('Hora inválida!')
}