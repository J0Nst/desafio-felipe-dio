// Obtenha o nome do herói a partir do usuário
const nomeDoHeroi = prompt("Digite o nome do seu herói:"); 

// Obtenha a quantidade de XP do herói a partir do usuário
const xpDoHeroi = parseInt(prompt("Digite a quantidade de XP do seu herói:"));

// Estrutura de decisão
let nivelDoHeroi;

if (xpDoHeroi < 1000) {
    nivelDoHeroi = 
    nivelDoHeroi =
"Ferro";
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    nivelDoHeroi = 
    nivel
"Prata";
} else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
    nivelDoHeroi = 
    nivel
"Ouro";
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    nivelDoHeroi = 
    nivelDoHero
"Platina";
} 
}
else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    nivelDoHeroi = 
    nivelDoHeroi =

    nivelDoHeroi
"Ascendente";
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

// Saída
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);