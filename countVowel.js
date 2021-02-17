let text = `Je suis le ténébreux, - le veuf, - l'inconsolé,
Le prince d'Aquitaine à la tour abolie :
Ma seule étoile est morte, - et mon luth constellé
Porte le soleil noir de la Mélancolie.

Dans la nuit du tombeau, toi qui m'as consolé,
Rends-moi le Pausilippe et la mer d'Italie,
La fleur qui plaisait tant à mon cœur désolé,
Et la treille où le pampre à la rose s'allie.

Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?
Mon front est rouge encor du baiser de la reine ;
J'ai rêvé dans la grotte où nage la sirène...

Et j'ai deux fois vainqueur traversé l'Achéron ;
Modulant tour à tour sur la lyre d'Orphée
Les soupirs de la sainte et les cris de la fée.`


text = text.toLowerCase()
console.log(text)

let nbA = 0
let nbE = 0
let nbI = 0
let nbO = 0
let nbU = 0
let nbY = 0


for(let i =0; i < text.length ; i++) {
  if(text[i] === 'e' ) {
    nbE++ 
} else if(text[i] === 'a') {
    nbA++
} else if(text[i] === 'i') {
    nbI++
} else if(text[i] === 'o') {
    nbO++
} else if(text[i] === 'u') {
    nbU++
} else if(text[i] === 'y') {
    nbY++
}


console.log(`nb A: ${nbA}`)
console.log(`nb E: ${nbE}`)
console.log(`nb I: ${nbI}`)
console.log(`nb O: ${nbO}`)
console.log(`nb U: ${nbU}`)
console.log(`nb Y: ${nbY}`) 