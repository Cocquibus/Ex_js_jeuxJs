import { mt1, mt2, heal1, heal2, heal3, heal4, dpscac1, dpscac2, dpscac3, dpscac4, dpscac5, dpscac6, dpscac7, dpsdist1, dpsdist2, dpsdist3, dpsdist4, dpsdist5, dpsdist6, dpsdist7, vexiona, tableauTeam, tableauTeamHeal } from "./equipe.js";
import { compteur } from "./main.js";
import { Classes } from "./class.js"
export function preparation() {
    mt1.equilibrageStat()
    mt2.equilibrageStat()
    dpscac1.equilibrageStat()
    dpscac2.equilibrageStat()
    dpscac3.equilibrageStat()
    dpscac4.equilibrageStat()
    dpscac5.equilibrageStat()
    dpscac6.equilibrageStat()
    dpscac7.equilibrageStat()
    dpsdist1.equilibrageStat()
    dpsdist2.equilibrageStat()
    dpsdist3.equilibrageStat()
    dpsdist4.equilibrageStat()
    dpsdist5.equilibrageStat()
    dpsdist6.equilibrageStat()
    dpsdist7.equilibrageStat()
    heal1.equilibrageStat()
    heal2.equilibrageStat()
    heal3.equilibrageStat()
    heal4.equilibrageStat()
}
export function presentation() {
    alert("Vexiona est le 9ème boss du raid de Ny'alotha, la cité en éveil.")
    alert("Vexiona devra être tué en maximum 20 tours, si ce n'est pas le cas elle enragera et ses dégats seront augmenté de 300%.")
    alert("elle attaquera les 2 tanks de votre équipe avec le souffle du crépuscule qui fera des dégats direct ainsi que des dégats par tour avec désespoir qui augmentera au fil de la partie, elle attaquera aussi le groupe entier avec ombres envahissantes qui mettra des dégats à l'ensemble du groupe de raid.")
    alert("Quand Vexiona atteint 30,20,10% de point de vie elle invoquera les ascendant du vide qui faudra tuer en priorité avant de repasser sur vexiona, les ascendant devront être tuer en 3 tours maximum. Si cela ne devrait pas arriver ils lanceront décimateur du crépuscule qui tueront l'ensemble du groupe de raid.")
    alert("le combat s'arrête si vous n'avez plus de personnage en vie ou que Vexiona soi tuée")
    alert("la repartition des points commence !")
}
export function donnees() {
    console.log("voici les données du boss:");
    console.table(vexiona)
    console.log("voici votre équipe avec les stats:")
    console.table(tableauTeam)
}
export function degats(x) {
    let totalDmg = 0;
    let i = 0;
    for (i; i < x.length; i++) {
        let crit = Math.random() * 4
        if (crit >= 3) {
            totalDmg += Math.round(x[i].stat * (Math.random() * (2 - 1.25) + 1.25))
            console.log(x[i].name + " à reussi un coup critique et inflige: " + Math.round(x[i].stat * (Math.random() * (2 - 1.25) + 1.25)) + " ce tour ci !");

        }
        else {
            totalDmg += x[i].stat
        }
    }
    console.log("total des dommage avec " + x.length + "/20 joueurs: " + totalDmg);
    vexiona.vie -= totalDmg
}
export function checkHealSoin(x) {
    let i = 0;
    for (i; i < tableauTeamHeal.length; i++) {
        if (x[i].vie <= 0) {
            x.splice(i, 1)
        }
    }
    console.table(x)
}
export function healMax(x) {
    let y = 0;
    let i = 0;
    console.log("vous avez choisi " + x.name + " et soignera votre groupe. Quel technique voulez vous utiliser ?")
    switch (x.specialisation) {
        case "restauration":
            alert("quel technique voulez vous utiliser:")
            y = prompt("1: soin de groupe faible, 2: soin de groupe puissant")
            i = 0;
            switch (y) {
                case "1":
                    i = 0;
                    for (i; i < tableauTeam.length; i++) {
                        tableauTeam[i].vie += (tableauTeam[i].maxVie * 0.1)
                        x.mana -= 2
                    }
                    console.table(tableauTeam)
                    break;
                case "2":
                    i = 0;
                    for (i; i < tableauTeam.length; i++) {
                        tableauTeam[i].vie += (tableauTeam[i].maxVie * 0.4)
                        x.mana -= 10
                    }
                    console.table(tableauTeam)
                    x.mana += 40
                    break;
                default:
                    break;
            }
            break;
        case "sacre":
            alert("quel technique voulez vous utiliser:")
            y = prompt("1: soin faible sur les tanks, 2: soin puissant sur les tanks")
            i = 0;
            switch (y) {
                case "1":
                    i = 0;
                    for (i; i < tableauTeam.length; i++) {
                        if(tableauTeam[i].role == "mt"){
                            tableauTeam[i].vie += (tableauTeam[i].maxVie *0.5)
                        }
                    }
                    console.table(tableauTeam)
                    break;
                case "2":
                    i = 0;
                    for (i; i < tableauTeam.length; i++) {
                        if(tableauTeam[i].role == "mt"){
                            tableauTeam[i].vie += (tableauTeam[i].maxVie *0.5)
                        }
                    }
                    console.table(tableauTeam)
                    break;
                default:
                    break;
            }
            break;
        case "tisse-brume":

            break;
        default:
            break;
    }
}