function hello() {
    console.log("hello");
}
setTimeout(hello, 2000);

function attendre2secondes() {

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("Timer temriné");
            resolve("Résolu");
        }, 2000);
    });
}



setTimeout(() => {
    console.log("Hello 2");
}, 3000);

console.log("3 Terminé")
attendre2secondes().then(() => {
    console.log("3. Timer terminé")
})

async function main() {
    console.log("111");
    console.log(await attendre2secondes());
    console.log("222");
}

main();