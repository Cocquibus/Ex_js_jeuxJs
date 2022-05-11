import {mt1,mt2,heal1,heal2,heal3,heal4,dpscac1,dpscac2,dpscac3,dpscac4,dpscac5,dpscac6,dpscac7,dpsdist1,dpsdist2,dpsdist3,dpsdist4,dpsdist5,dpsdist6,dpsdist7,vexiona} from "./equipe.js";
import {tableauTeam} from './equipe.js'
//pour le type de boss
let dotmt1 = 0
let dotmt2 = 0
export class Boss{
    constructor(name,vie){
        this.name = name;
        this.vie = vie;
    }
    //technique anti tank
    techniqueSouffle(x){
        x.vie -= ((200 * x.reduction) / 100)
        if(x == mt1){
            x.vie -= 150 * dotmt1
            dotmt1 += 1
        }
        else if(x == mt2){
            x.vie -= 150 * dotmt2
            dotmt2 += 1
        }
        if(x.vie <= 0){
            console.log(x.name + " est  mort")
            tableauTeam.splice(tableauTeam.indexOf(x),1)
        }
    }
    //technique contre le raid entier
    techniqueRaid(){
        let i = 0
        for(i;i<tableauTeam.length;i++){
            tableauTeam[i].vie -= ((2800 * tableauTeam[i].reduction) / 100);
            if(tableauTeam[i].vie <= 0){
                console.log(tableauTeam[i].name + " est  mort")
                tableauTeam.splice(i,1)
            }
        }
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
    constructor(name,race,type,specialisation,role,vie,stat,reduction){
        super(name,race);
        this.type = type;
        this.specialisation = specialisation;
        this.role = role;
        this.vie = vie;
        this.stat = stat;
        reduction = reduction;
    }
    infligerdamage(){
        i = 0;
        total = 0;
        for(i;i<tableauTeam.length;i++){

        }
    }
    //fonction pour parametré les points de vie, réduction de dégats et les stats
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
                    this.vie = Math.round((x * 100) * (Math.random() * 2))
                    total -= x
                    this.stat = total * 0.6
                    total = 0
                    this.reduction = Math.round(50 + (Math.random() *35))
                    if(this.vie < 4000){
                        this.vie = 4000;
                    }
                    a = 0
                }
                else if(this.role == "heal" || this.role == "dpsdistance"){
                    this.mana = 500
                    this.vie = Math.round((x * 60) * (Math.random() * 2))
                    total -= x
                    this.stat = total * 2
                    total = 0
                    this.reduction = Math.round(10 + (Math.random() *15))
                    if(this.vie < 1400){
                        this.vie = 1400;
                    }
                    a = 0
                }
                else{
                    this.energie = 100
                    this.vie = Math.round((x * 70) * (Math.random() * 2))
                    total -= x
                    this.stat = total * 1.5
                    total = 0
                    this.reduction = Math.round(13 + (Math.random() *17))
                    if(this.vie < 1600){
                        this.vie = 1600;
                    }
                    a = 0
                }
            }
        }
    }
}
