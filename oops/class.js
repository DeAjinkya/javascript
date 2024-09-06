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

const firstAnimal = new Animal('rex',35);
console.log(firstAnimal);
console.log(firstAnimal.getInfo());