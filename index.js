class employ{
    constructor(name,number ,salary,post){
        this.name=name;
        this.number=number;
        this.salary=salary;
        this.post=post;
    }

    name(){
        console.log(`${this.name} this is the name`);
    }

    number(){
       console.log(`${this.number} this is your number`); 
    }

}

let krunal=new employ(krunal,7984433994,10000000000000000000000,MD);


console.log(krunal);

krunal.name();