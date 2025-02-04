const gerarOEE = document.getElementById('generator')
gerarOEE.addEventListener('click', () => {

    availability =  document.getElementById('availability').innerText = Number(Math.random()).toFixed(2)
    productivity = document.getElementById('productivity').innerText = Number(Math.random()).toFixed(2)
    quality = document.getElementById('quality').innerText = Number(Math.random()).toFixed(2)
    OEE = parseFloat((availability * productivity * quality) * 100).toFixed(2)
})
const addOEE = document.getElementById('addOEE')
const table = document.getElementById('tabelaOEE')
addOEE.addEventListener('click', () => {
    const novaLinha = document.createElement('tr')
    novaLinha.innerHTML = `
        <td>${new Date().toLocaleDateString()}</td> <!-- Data atual -->
        <td>${availability * 100}%</td> <!-- Disponibilidade aleatória -->
        <td>${productivity * 100}%</td> <!-- Produtividade aleatória -->
        <td>${quality * 100}%</td> <!-- Qualidade aleatória -->
        <td>${OEE}%</td> <!-- OEE aleatório -->
    `;
    table.append(novaLinha)
} )

