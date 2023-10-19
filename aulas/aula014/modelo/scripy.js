function carregar(){
    var msg =window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    msg.innerHTML= `agora são ${hora} horas`
    var hora = 18
   
   

    if(hora >= 0 && hora <=12){
        //BOM DIA 
        img.src = 'foto-manha.jpg'
        document.body.style.background = '#f9d3af '
    }else if (hora > 12 && hora < 18){
        //BOA TARDE 
        img.src = 'foto-tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        //BOA NOITE
        img.src = 'noite-foto.jpg'
        document.body.style.background = '#6d3816'
    }

}