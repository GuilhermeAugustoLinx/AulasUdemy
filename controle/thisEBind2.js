function Pessoa(){
    this.idade = 0

    const self = this

    setInterval(function(){
        self.idade++
        console.log(self.idade) //self substituindo o this
    }/*.bind(this)*/, 1000)
}

new Pessoa