const jPDinos = [
    "Velociraptors",
   [ "Tyrannosaurus Rex",
    "Dilophosaurus"]
]

function seeDinos(a, b, c){
    // console.log(`Using Spread`);
    console.log(a);
    console.log(``);
    console.log(b);
    // console.log(c);

}

seeDinos(...jPDinos)

const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
}

seeCharacters = () => `Laura Dern`
console.log(seeCharacters());