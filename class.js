//pour le type de boss
export class Boss{
    constructor(name,hp,technique){
        this.name = name;
        this.hp = hp;
        this.degats = degats;
    }
    }
//pour créer la race que c'est exemple: humain,pandaren etc ...
export class Race{
    constructor(name,race){
        this.name = name;
        this.race = race;
    }
}
//type pour la classe de personnage exemple: guerrier et la spécialisation pour le type de guerrier exemple : protection avec le role qu'il a dans le groupe
export class Classes extends Race{
    constructor(name,race,type,specialisation,role,vie,stat){
        super(name,race);
        this.type = type;
        this.specialisation = specialisation;
        this.role = role;
        this.vie = vie;
        this.stat = stat;
    }
    equilibrageStat(){
        let a = 1;
        let total = 100;
        while(a == 1){
            let x = prompt("vous avez 100 points à partager entre la vie et la stat principale de votre personnage, combien de point voulez vous mettre en vie ? les points restant ce mettront dans ca stat principale, ce personnage est un: " + this.type + " " + this.specialisation)
            if(x > 100){
                console.log("vous ne pouvez pas mettre plus de 100 points sur votre personnage")
            }
            else if(x <= 100){
                if(this.role == "mt"){
                    this.rage = 0
                    this.vie = x * 30
                    total -= x
                    this.stat = total * 0.6
                    total = 0
                    a = 0
                }
                else if(this.role == "heal" || this.role == "dpsdistance"){
                    this.mana = 500
                    this.vie = x *10
                    total -= x
                    this.stat = total * 2
                    total = 0
                    a = 0
                }
                else{
                    this.energie = 100
                    this.vie = x *15
                    total -= x
                    this.stat = total * 1.5
                    total = 0
                    a = 0
                }
            }
        }
    }
}