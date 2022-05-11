import { mt1, mt2, heal1, heal2, heal3, heal4, dpscac1, dpscac2, dpscac3, dpscac4, dpscac5, dpscac6, dpscac7, dpsdist1, dpsdist2, dpsdist3, dpsdist4, dpsdist5, dpsdist6, dpsdist7} from "./equipe.js";

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