 class Project{
    constructor(name, id, list = [], date = []){
        this.name = name;
        this.id = id;
        this.list = list;
        this.date = date;
    }

    sayName(){
        return `Hi ${this.name}`;
    }

    showInfo(){
        return ``;
    }
}

export {Project} 