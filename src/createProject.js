class Project{
    constructor(name){
        this.name = name;
    }

    sayName(){
        return `Hi ${this.name}`;
    }
}

export {Project}