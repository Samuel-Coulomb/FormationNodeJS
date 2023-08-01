function sum(a, b) {
    return a + b;
}

const res = sum(2, 5);
console.log(res);



///////////////////////////////////////



var sum2 = function(a, b) {
    return a + b;
};

const res2 = sum2(8, 5);
console.log(res2);



///////////////////////////////////////



var sum3 = (a, b) => {
    return a + b;
};

const res3 = sum3(8, 19);
console.log(res3);



///////////////////////////////////////



var sum4 = (a, b) => a + b;

const res4 = sum4(12, 19);
console.log(res4);



///////////////////////////////////////



const direSalut = (formule = "Hello", prenom = "world !") => {
    console.log(`${formule} ${prenom}`);
};

direSalut("Bonjour", "Bob");
direSalut("Hey");
direSalut();