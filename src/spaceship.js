let crewShipJoin = {"ship": [], "crewMembers": []}
let shipId = 0;




class Spaceship {
  constructor(name, crewArr, phasers, shields){
    this.id = ++shipId
    this.name = name
    this.crew = this.assignShip(crewArr)
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = this.crew.length === 0
    this.phasersCharge = 'uncharged'
    crewShipJoin["ship"].push(this)
    console.log(this)
  }

  assignShip(arr){
    if (arr.length === 0) {
      return arr;
    } else {
      for (let member in arr) {
        arr[member].currentShip = this
      }
      return arr;
    }
  }

}
