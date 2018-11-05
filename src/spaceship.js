class Spaceship {
  constructor(name,crewMembers,phasers,shields,cloaked=false,warpDrive="disengaged",phasersCharge="uncharged"){

    this.name=name
    this.crew=crewMembers
    this.phasers=phasers
    this.shields=shields
    this.cloaked=cloaked
    this.warpDrive=warpDrive
    if(this.crew.length<1){
      this.docked=true
    }
    else{
      this.docked=false
    }
    this.phasersCharge=phasersCharge
    this.setCurrentShip()
  } //constrcotr

  setCurrentShip(){
    this.crew.forEach(member=>{
      member.currentShip=this
    })
  }

}
