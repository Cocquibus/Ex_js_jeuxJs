import { mt1, mt2, heal1, heal2, heal3, heal4, dpscac1, dpscac2, dpscac3, dpscac4, dpscac5, dpscac6, dpscac7, dpsdist1, dpsdist2, dpsdist3, dpsdist4, dpsdist5, dpsdist6, dpsdist7, vexiona, tableauTeam, tableauTeamHeal } from "./equipe.js";
import { preparation, presentation, donnees, degats, checkHealSoin } from "./function.js"


presentation()
preparation()
donnees()
alert("bonne chance !")
let tourCombat = 20;
while (tourCombat > 0) {
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
    }
    else if (choixTanking == "h") {
        let x = Math.random()
    }
}