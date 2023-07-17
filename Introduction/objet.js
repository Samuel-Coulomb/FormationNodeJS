const pc = {
    ram: 16,
    stockage: 512,
    processeur: "i7",
    type: "Portable",
    annee: 2019,
    logiciels: ["a", "b", "c"],
    upgrade: function() {
        this.ram *= 2;
        this.stockage *=2;
    }
};

console.log(pc);
console.log(pc.stockage);
console.log(pc.logiciels[1]);

pc.upgrade();
console.log(pc);

console.log(JSON.stringify(pc));

const pcJson = JSON.stringify(pc)
console.log(typeof pcJson)
console.log(JSON.parse(pcJson))

pc.upgrade();
console.log(pc);