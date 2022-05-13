import { mt1, mt2, heal1, heal2, heal3, heal4, dpscac1, dpscac2, dpscac3, dpscac4, dpscac5, dpscac6, dpscac7, dpsdist1, dpsdist2, dpsdist3, dpsdist4, dpsdist5, dpsdist6, dpsdist7, vexiona, tableauTeam, tableauTeamHeal } from "./equipe.js";
import { preparation, presentation, donnees, degats, checkHealSoin, healMax } from "./function.js"

export let compteur = 0;
presentation()
preparation()
donnees()
alert("bonne chance !")
while (vexiona.vie > 0 && tableauTeam.length > 0) {
    if (vexiona.vie > 20000) {
        let choixTanking = prompt("quel tank encaissera Vexiona pour ce tour ? mt1/mt2/h")
        if (choixTanking == "mt1" && mt1.vie > 0 && tableauTeam.length > 0) {
            console.log("Vexiona utilise ca technique sur votre tank !")
            vexiona.techniqueSouffle(mt1)
            console.log("Vexiona utilise ca technique sur votre groupe !")
            vexiona.techniqueRaid()
            degats(tableauTeam)
            donnees()
            let z = 1;
            while (z == 1) {
                let demandeSoin = prompt("soigner ce tour ci ? oui/non")
                if (demandeSoin.toLowerCase() == "oui" && tableauTeam.length > 0) {
                    checkHealSoin(tableauTeamHeal)
                    let choixHeal = prompt("quel soigneur voulez vous choisir")
                    for (compteur; compteur < tableauTeamHeal.length; compteur++) {
                        if (tableauTeamHeal[compteur].name == choixHeal) {
                            healMax(tableauTeamHeal[compteur])
                        }
                    }
                    compteur = 0
                }
                else {
                    z = 0
                }
            }
        }
        else if (choixTanking == "mt2" && mt2.vie > 0) {
            console.log("Vexiona utilise ca technique sur votre tank !")
            vexiona.techniqueSouffle(mt2)
            console.log("Vexiona utilise ca technique sur votre groupe !")
            vexiona.techniqueRaid()
            degats(tableauTeam)
            donnees()
            let z = 1;
            while (z == 1) {
                let demandeSoin = prompt("soigner ce tour ci ? oui/non")
                if (demandeSoin.toLowerCase() == "oui" && tableauTeam.length > 0) {
                    checkHealSoin(tableauTeamHeal)
                    let choixHeal = prompt("quel soigneur voulez vous choisir")
                    for (compteur; compteur < tableauTeamHeal.length; compteur++) {
                        if (tableauTeamHeal[compteur].name == choixHeal) {
                            healMax(tableauTeamHeal[compteur])
                        }
                    }
                    compteur = 0
                }
                else {
                    z = 0
                }
            }
        }
        else if (choixTanking == "h") {
            let x = Math.floor(Math.random() * tableauTeam.length)
            vexiona.techniqueSouffle(tableauTeam[x])
            console.log("Vexiona utilise ca technique sur votre groupe !")
            vexiona.techniqueRaid()
            degats(tableauTeam)
            donnees()
            let z = 1;
            while (z == 1) {
                let demandeSoin = prompt("soigner ce tour ci ? oui/non")
                if (demandeSoin.toLowerCase() == "oui" && tableauTeam.length > 0) {
                    checkHealSoin(tableauTeamHeal)
                    let choixHeal = prompt("quel soigneur voulez vous choisir")
                    for (compteur; compteur < tableauTeamHeal.length; compteur++) {
                        if (tableauTeamHeal[compteur].name == choixHeal) {
                            healMax(tableauTeamHeal[compteur])
                        }
                    }
                    compteur = 0
                }
                else {
                    z = 0
                }
            }
        }
    }
    else{
        console.log("Vexiona invoque un Ascendant du vide")
        
    }
}
if (tableauTeam.length <= 0) {
    alert("tout les joueurs de votre groupe sont mort !")
}
else {
    alert("Félicitations, vous avez reussi à battre Vexiona, rendez-vous au prochain boss !")
}