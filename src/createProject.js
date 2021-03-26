class Project{
    constructor(name, id, list = []){
        this.name = name;
        this.id = id;
        this.list = list;
    }

    sayName(){
        return `Hi ${this.name}`;
    }
}

export {Project}