class Chain {
constructor(bodyA,bodyB){

    var options = {

        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.04,    // rigidez
        length: 10    //comprimento

    }

    this.chain = Constraint.create(options);
    World.add(world,this.chain);


}

    display(){
        var varA = this.chain.bodyA.position;
        var varB = this.chain.bodyB.position;
        strokeWeight(2);
        line(varA.x,varA.y,varB.x,varB.y);

    }

}