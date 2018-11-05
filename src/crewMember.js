let crewMemberId = 0;

class CrewMember {
  constructor(position, currentShip = 'Looking for a Rig'){
    this.position = position
    this.currentShip = currentShip
    this.id = crewMemberId

  }

  engageWarpDrive() {
    if  (this.currentShip === 'Looking for a Rig' || this.position !== "Pilot") {
      return "had no effect"
    } else {
      this.currentShip.warpDrive = "engaged";
    }

  }

  setsInvisibility() {
    if  (this.currentShip === 'Looking for a Rig' || this.position !== "Defender") {
      return "had no effect"
    } else {
      this.currentShip.cloaked = true
    }
  }

  chargePhasers() {

    if  (this.currentShip === 'Looking for a Rig' || this.position !== "Gunner") {

      return "had no effect"
    } else {
      // debugger
      this.currentShip.phasersCharge = "charged"
      // return this.currentShip.cloaked;


    }
  }
}
