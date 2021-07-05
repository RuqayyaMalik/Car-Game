class Player{

constructor()
{
    this.index = null
    this.name = null
    this.distance = 0

}
updateCount(count)
{
database.ref('/').update({
playerCount : count

})
}
update(){
    var index = "players/player"+ this.index
    database.ref(index).set({
        name : this.name,
        distance : this.distance
    })
}
static getplayerinfo(){
    var playerinforef = database.ref('players')
    playerinforef.on("value",(data)=>{
    allplayer = data.val()

    })
}
getCount(){
    var playerCountref = database.ref('playerCount')
    playerCountref.on("value",(data)=>{
        playerCount = data.val()
    })
}
}