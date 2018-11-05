let spaceShipId = 0;

class Spaceship {

  constructor(name, crew = [], phasers, shields, cloaked = false, warpDrive = 'disengaged', docked = true, phasersCharge = 'uncharged'){
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.docked = docked
    this.phasersCharge = phasersCharge
    this.id = ++spaceShipId
    // debugger

    crew.forEach(function (crews) {
      crews.currentShip = this
      // debugger
    }.bind(this))

    if (crew.length >= 1) {
      // debugger
      this.docked = false
    }
  }


}
