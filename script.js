function verificar(){
   let data = new Date()
   let ano = data.getFullYear()
   let fAno = document.querySelector('.txtano')
   let res = document.querySelector('.res')
   

   if(fAno.value.length == 0  || Number(fAno.value) > ano){
    alert("[ERRO] Verifique os dados digitados")

} else{
   let fsex = document.getElementsByName('radsex')
   let idade = ano - Number(fAno.value)
   let genero = ''
   let img = document.createElement('img')
   img.setAttribute('id', 'foto')
   img.setAttribute('style', 'width: 250px; ');
   if(fsex[0].checked){
    genero = 'homem'
    
    if(idade >= 0 && idade < 10){
    img.setAttribute('src', 'assets/meninobebe.png')
   } 
   else if(idade < 21) {
    img.setAttribute('src', 'assets/meninoadolescente.png')
   } 
   else if(idade < 50){
    img.setAttribute('src', 'assets/homemadulro.png')
   }
   else{
    img.setAttribute('src', 'assets/idoso.png')
   }
}
   
   else if (fsex[1].checked){
    genero = 'mulher'

    if(idade >= 0 && idade < 10){
      img.setAttribute('src', 'assets/meninabebe.png')
     } 
     else if(idade < 21) {
      img.setAttribute('src', 'assets/meninaadolescente.png')
     } 
     else if(idade < 50){
      img.setAttribute('src', 'assets/mulheradulta.png')
     }
     else{
      img.setAttribute('src', 'assets/idosa.png')
     
   } }

res.innerHTML = `Detectamos ${genero} com ${idade} anos !`
res.appendChild(img)

} } 