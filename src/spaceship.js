class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false, warpDrive = 'disengaged', docked = true, phasersCharge = 'uncharged') {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.docked = docked
    this.phasersCharge = phasersCharge

    crew.forEach((member) => {
      member.currentShip = this
    })

    if (this.crew.length > 0) {
      this.docked = false
    }

  }


}
