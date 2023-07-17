const tab = ['a', 'b', 'c', 'd'];
const str = "Bonjour";

for (let i=0; i < tab.length; i++) {
    console.log(i, tab[i]);
}

for (let letter of tab) {
    console.log(letter);
}

for (let char of str) {
    console.log(char);
}
