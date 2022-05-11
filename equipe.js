import {Boss,Classes} from "./class.js"

export let vexiona = new Boss("vexiona",60000);

export let mt1 = new Classes("Grochat", "humain", "guerrier", "protection", "mt");
export let mt2 = new Classes("Yûee", "pandaren", "moine", "maitre-brasseur", "mt");

export let heal1 = new Classes("Uthorim", "nain", "chaman", "restauration", "heal");
export let heal2 = new Classes("Almer", "elfe de la nuit", "druide", "restauration", "heal");
export let heal3 = new Classes("Taredd", "humain", "paladin", "sacre", "heal");
export let heal4 = new Classes("Vuduin", "pandaren", "moine", "tisse-brume", "heal");

export let dpscac1 = new Classes("Nymo", "elfe de la nuit", "chevalier de la mort", "impie", "dpscac");
export let dpscac2 = new Classes("Vanya", "worgen", "voleur", "finesse", "dpscac");
export let dpscac3 = new Classes("Jastira", "humain", "voleur", "hors-la-loi", "dpscac");
export let dpscac4 = new Classes("Mailra", "nain", "chasseur", "survie", "dpscac");
export let dpscac5 = new Classes("Nylian", "nain", "chasseur", "survie", "dpscac");
export let dpscac6 = new Classes("Torberos", "elfe de la nuit", "chasseur de démon", "dévastation", "dpscac");
export let dpscac7 = new Classes("Nesterin", "draenei", "paladin", "vindicte", "dpscac");

export let dpsdist1 = new Classes("Nasir", "humain", "demoniste", "affliction", "dpsdistance");
export let dpsdist2 = new Classes("Galan", "humain", "mage", "givre", "dpsdistance");
export let dpsdist3 = new Classes("Elaith", "elfe de la nuit", "mage", "givre", "dpsdistance");
export let dpsdist4 = new Classes("Githrel", "elfe de la nuit", "chasseur", "precision", "dpsdistance");
export let dpsdist5 = new Classes("Lierin", "worgen", "druide", "equilibre", "dpsdistance");
export let dpsdist6 = new Classes("Hamon", "humain", "demoniste", "demonologie", "dpsdistance");
export let dpsdist7 = new Classes("Aerith", "gnome", "pretre", "ombre", "dpsdistance");

export let tableauTeam = 
[
    mt1,
    mt2,
    heal1,
    heal2,
    heal3,
    heal4,
    dpscac1,
    dpscac2,
    dpscac3,
    dpscac4,
    dpscac5,
    dpscac6,
    dpscac7,
    dpsdist1,
    dpsdist2,
    dpsdist3,
    dpsdist4,
    dpsdist5,
    dpsdist6,
    dpsdist7
]
export let tableauTeamHeal =
[
    heal1,
    heal2,
    heal3,
    heal4
]