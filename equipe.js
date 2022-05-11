import { Boss,Classes} from "./class.js"

export let vexiona = new Boss("vexiona",10000);

export let mt1 = new Classes("mt1", "humain", "guerrier", "protection", "mt");
export let mt2 = new Classes("mt2", "pandaren", "moine", "maitre-brasseur", "mt");

export let heal1 = new Classes("heal1", "nain", "chaman", "restauration", "heal");
export let heal2 = new Classes("heal2", "elfe de la nuit", "druide", "restauration", "heal");
export let heal3 = new Classes("heal3", "humain", "paladin", "sacre", "heal");
export let heal4 = new Classes("heal4", "pandaren", "moine", "tisse-brume", "heal");

export let dpscac1 = new Classes("dpscac1", "elfe de la nuit", "chevalier de la mort", "impie", "dpscac");
export let dpscac2 = new Classes("dpscac2", "worgen", "voleur", "finesse", "dpscac");
export let dpscac3 = new Classes("dpscac3", "humain", "voleur", "hors-la-loi", "dpscac");
export let dpscac4 = new Classes("dpscac4", "nain", "chasseur", "survie", "dpscac");
export let dpscac5 = new Classes("dpscac5", "nain", "chasseur", "survie", "dpscac");
export let dpscac6 = new Classes("dpscac6", "elfe de la nuit", "chasseur de démon", "dévastation", "dpscac");
export let dpscac7 = new Classes("dpscac7", "draenei", "paladin", "vindicte", "dpscac");

export let dpsdist1 = new Classes("dpsdist1", "humain", "demoniste", "affliction", "dpsdistance");
export let dpsdist2 = new Classes("dpsdist2", "humain", "mage", "givre", "dpsdistance");
export let dpsdist3 = new Classes("dpsdist3", "elfe de la nuit", "mage", "givre", "dpsdistance");
export let dpsdist4 = new Classes("dpsdist4", "elfe de la nuit", "chasseur", "precision", "dpsdistance");
export let dpsdist5 = new Classes("dpsdist5", "worgen", "druide", "equilibre", "dpsdistance");
export let dpsdist6 = new Classes("dpsdist6", "humain", "demoniste", "demonologie", "dpsdistance");
export let dpsdist7 = new Classes("dpsdist7", "gnome", "pretre", "ombre", "dpsdistance");

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