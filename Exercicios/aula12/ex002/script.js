function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } 
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.getElementById('imagem')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.src = "imagens/bebeh.jpg"
            } else if (idade >= 10 && idade < 21) {
                img.src = "imagens/jovemh.jpg"
            } else if (idade < 50) {
                img.src = "imagens/adultoh.jpg"
            } else {
                img.src = "imagens/idosoh.jpg"
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.src = "imagens/bebem.jpg"
            } else if (idade >= 10 && idade < 21) {
                img.src = "imagens/jovemm.jpg"
            } else if (idade < 50) {
                img.src = "imagens/adultom.jpg"
            } else {
                img.src = "imagens/idosom.jpg"
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
    }
    msg.innerHTML = `Ano ${ano}`
}