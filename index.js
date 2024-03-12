class employ {
    constructor(name, number, salary, post) {
        this.name = name;
        this.number = number;
        this.salary = salary;
        this.post = post;
    }

    name() {
        console.log(`${this.name} this is the name`);
    }

    number() {
        console.log(`${this.number} this is your number`);
    }

}

class manager extends employ {
    constructor(name, number, salary, post, boss) {
        super(name, number, salary, post);
        this.boss = boss;
    }

    b() {
        if (this.boss == true) {
            console.log("good");
        }
        else {
            console.log("sorry");
        }
    }
}

let k = new manager("krunal", 7984433994, 100000, "MD", true);


console.log(k);

k.manager.b();