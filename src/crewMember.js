let crewMemberId = 0

class CrewMember {
  constructor(position, currentShip = "Looking for a Rig") {
    this.position = position;
    this.currentShip = currentShip
    this.crewMemberId = ++crewMemberId
  }

  engageWarpDrive() {
if (typeof this.currentShip === "string") {
  return "had no effect"

} else {
  this.warpDrive = "engaged"
}
  }

  setsInvisibility() {

    if (typeof this.currentShip === "string") {
      return "had no effect"

    } else if (this.position === "Defender"){
      this.currentShip.cloaked = true
    }
  }

  chargePhasers() {
    if (typeof this.currentShip === "string") {
      return "had no effect"

    } else {
      this.phasersCharge = "charged"
    }

  }
}
