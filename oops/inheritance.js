class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return(
            `the name of the animal is ${this.name} and age is ${this.age}`
        )
    }
}

class Dog extends Animal{
    constructor(name,age,breed){
        super(name,age);
        this.breed = breed;
    }

    beark(){
        return 'woof';
    }
}

const myDog = new Dog('rex',2,'german shepard');
console.log(myDog.getInfo());
console.log(myDog.breed);
console.log(myDog.beark());