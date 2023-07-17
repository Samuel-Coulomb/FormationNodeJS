class Voiture {
    constructor(marque, annee=new Date().getFullYear(), kilometrage="0") {
        this.marque = marque;
        this.annee = annee;
        this.kilometrage = kilometrage; 
    }

    afficherInfos() {
        console.log("=== Informations ===")
        console.log(`>Marque : ${this.marque}`)
    }
}

const v = new Voiture();
console.log(v);



const v2 = new Voiture("Peugeot", 1990, 250000);
console.log(v2);
v2.afficherInfos();


v2.marque = "Hyundai";
v2.afficherInfos();