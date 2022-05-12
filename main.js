import { mt1, mt2, heal1, heal2, heal3, heal4, dpscac1, dpscac2, dpscac3, dpscac4, dpscac5, dpscac6, dpscac7, dpsdist1, dpsdist2, dpsdist3, dpsdist4, dpsdist5, dpsdist6, dpsdist7, vexiona, tableauTeam, tableauTeamHeal} from "./equipe.js";
import { preparation, presentation, donnees, degats, checkHealSoin,healMax} from "./function.js"

export let compteur = 0;

presentation()
preparation()
donnees()
alert("bonne chance !")
while (vexiona.vie > 0) {
    let choixTanking = prompt("quel tank encaissera Vexiona pour ce tour ? mt1/mt2/h")
    if (choixTanking == "mt1" && mt1.vie > 0) {
        vexiona.techniqueSouffle(mt1)
        vexiona.techniqueRaid()
        degats(tableauTeam)
        donnees()
    }
    else if (choixTanking == "mt2" && mt2.vie > 0) {
        vexiona.techniqueSouffle(mt2)
        vexiona.techniqueRaid()
        degats(tableauTeam)
        donnees()
        let z = 1;
        while(z == 1){
            let demandeSoin = prompt("soigner ce tour ci ? oui/non")
            if(demandeSoin.toLowerCase() == "oui"){
                checkHealSoin(tableauTeamHeal)
                let choixHeal = prompt("quel soigneur voulez vous choisir")
                for(compteur;compteur<tableauTeamHeal.length;compteur++){
                    if(tableauTeamHeal[compteur].name == choixHeal){
                        healMax(tableauTeamHeal[compteur])
                    }
                }
                compteur = 0
            }
            else{
                z = 0
            }    
        }
    }
    else if (choixTanking == "h") {
        let x = Math.random()
    }
}