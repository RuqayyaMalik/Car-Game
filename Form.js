class Form{
    constructor()
    {
        this.input = createInput('enter your NAME')
        this.button = createButton('PLAY')
        this.greetings =  createElement('h3')
    }
    
    hide(){
        this.greetings.hide()
        this.button.hide()
        this.input.hide()
    }
    display()
    {
        var title = createElement('h2')
        title.html('Car RACING Game')
        title.position(600,80)
     
        this.input.position(600,140)
       
        this.button.position(600,200)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount = playerCount + 1
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)
           
          
            this.greetings.html('Hello '+ player.name)
            this.greetings.position(600,200)
        })
    }
    
}