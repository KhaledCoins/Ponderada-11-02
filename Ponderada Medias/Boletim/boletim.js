// Array de Notas
const notas = [9.0, 4.5, 7.5]; 

// Soma
let soma = 0;

// Calcula a soma das notas usando um loop
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

// Calcula a média
const media = soma / notas.length;

// Mostra as notas
console.log("Notas:", notas.join (", "));

// Exibe a média das notas
console.log("A Média das Notas é:", media.toFixed(2)); // Exibe com duas casas decimais

// Verifica aprovação
if (media >= 7) {
    console.log("Status: Aprovado ✅");
} else {
    console.log("Status: Reprovado ❌");
}
