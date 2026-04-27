class Car {
    constructor(color,shape) {
        this.color=color;
        this.shape=shape;
    }

    owner () {
        console.log("Hello");
        
    }
}

const user1 = new Car ("red", "hatchback");
console.log(user1);

const ownerinfo1 = user1.owner();
