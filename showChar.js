let autor= 'autor'
let book= 'book'
let msg = "C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar."

console.log(`This text is an extract for the book ${book} , written by ${autor}`)
console.log(`This text has ${msg.length} characters`)

for(i=0; i < msg.length; i++) 
  if(msg[i] !== " ") {
console.log(`${msg[i]} is at index ${i}`) 
}

