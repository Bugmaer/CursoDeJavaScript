let amigo = {nome: 'josé', 
sexo: 'm',
peso: 85.4,
engordar(p = 0){
    console.log('Engordou')
    this.peso += p

}}
amigo.engordar(2.1)
console.log(`${amigo.nome} pesa ${amigo.peso} agora`)