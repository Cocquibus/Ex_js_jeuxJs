import {mt1,mt2,heal1,heal2,heal3,heal4,dpscac1,dpscac2,dpscac3,dpscac4,dpscac5,dpscac6,dpscac7,dpsdist1,dpsdist2,dpsdist3,dpsdist4,dpsdist5,dpsdist6,dpsdist7,vexiona} from "./equipe.js";
import {tableauTeam} from "./equipe.js"
import {preparation,presentation} from "./function.js"

presentation()
preparation()
console.log("voici les données du boss:");
console.table(vexiona)
console.log("voici votre équipe avec les stats:")
console.table(tableauTeam)
alert("bonne chance !")
let tourCombat = 20;
while(tourCombat > 0){
    let choixTanking = prompt("quel tank encaissera Vexiona pour ce tour ?")
    if(choixTanking == "mt1" && mt1.vie > 0){
        vexiona.techniqueSouffle(mt1)
        vexiona.techniqueRaid()
        console.table(tableauTeam)
    }
    else if(choixTanking == "mt2" && mt2.vie > 0){
        vexiona.techniqueSouffle(mt2)
        vexiona.techniqueRaid()
        console.table(tableauTeam)
    }
    else{
        console.log("vous devez choisir un tank, si vous n'en avez plus vous ne pouvez plus choisir qui tankera Vexiona");
    }
}