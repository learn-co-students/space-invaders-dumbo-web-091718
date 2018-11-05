class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name 
    this.shields = 4
    this.phasers = 5
    this.warpDrive = 'disengaged'
    this.cloaked = false 
    this.phasersCharge = 'uncharged'
    this.crew = []
    this.docked = crew.length ? false : true 
  
    for (const crewMember of crew) {
      crewMember.currentShip = this
      this.crew.push(crewMember)
    }
  }
}
