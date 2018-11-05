let crewId = 0;
class CrewMember {
  constructor(position, currentShip){
    this.id = ++crewId;
    this.position = position
    this.currentShip = 'Looking for a Rig'
    crewShipJoin["crewMembers"].push(this)
  }


  chargePhasers() {
    if (this.currentShip !== 'Looking for a Rig' && this.position.toLowerCase() === 'gunner') {
      this.currentShip.phasers = 'charged'
    } else {
      return 'had no effect'
    }
  }

  engageWarpDrive() {
    if (this.currentShip !== 'Looking for a Rig' && this.position.toLowerCase() === 'pilot') {
      this.currentShip.warpDrive = 'engaged'
    } else {
      return 'had no effect'
    }
  }

  setsInvisibility() {
    if (this.currentShip !== 'Looking for a Rig' && this.position.toLowerCase() === 'defender') {
      this.currentShip.cloaked = true
    } else {
      return 'had no effect'
    }
  }

}
//
