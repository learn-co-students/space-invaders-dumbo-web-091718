let spaceshipId = 0

class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false, warpDrive = "disengaged", phasersCharge = "uncharged") {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.spaceshipId = ++spaceshipId;
    if (crew.length > 0) {
      this.docked = false;
      const ship = this
      this.crew.forEach(function(member) {
        member.currentShip = ship
      })

    }  else {
      this.docked = true
    }
    this.phasersCharge = phasersCharge

  }


}
