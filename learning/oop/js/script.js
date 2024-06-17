// inheritance
console.log(` !!!  inheritance  !!!`);

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }

}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    bark() {
        console.log(`${this.name} is barking`);
    }
}

let dog = new Dog('tommy');
dog.eat();
dog.bark();
dog.sleep();


// polymorphism
console.log(` !!!  polymorphism  !!!`);
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    // polymorphism 
    eat() {
        console.log(`${this.name} cat is eating`);
    }
}

let cat = new Cat('kitty');
cat.eat();
cat.sleep();


// abstraction 
console.log(` !!!  abstraction  !!!`);
class Person {
    #name;
    constructor(name) {
        this.#name = name;
        this.#getname();
    }
    #getname() {
        console.log(`this person name is ${this.#name}`);
    }
}
let person1 = new Person('priya');
let person2 = new Person('ragini');
let person3 = new Person('prachi');

//encapsulation
console.log(` !!!  encapsulation  !!!`);
class Student {
    #name;
    constructor(name) {
        this.#name = name;
    }
    getname() {
        console.log(`this person name is ${this.#name}`);
    }
}
let student1 = new Student('priya');
student1.getname();