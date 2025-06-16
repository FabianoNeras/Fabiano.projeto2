const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

function mostrarAba(indice) {
    botoes.forEach((botao, i) => {
        botao.classList.toggle("ativo", i === indice);
        abas[i].classList.toggle("ativo", i === indice);
    });
}

// Função de contagem
function iniciarContador(id, dataAlvo) {
    const elemento = document.getElementById(id);
    setInterval(() => {
        const agora = new Date();
        const destino = new Date(dataAlvo);
        const tempo = destino - agora;

        const dias = Math.floor(tempo / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tempo / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((tempo / (1000 * 60)) % 60);
        const segundos = Math.floor((tempo / 1000) % 60);

        elemento.innerHTML = `
            <div class="bloco"><span>${dias}</span><label>Dias</label></div>
            <div class="bloco"><span>${horas}</span><label>Horas</label></div>
            <div class="bloco"><span>${minutos}</span><label>Minutos</label></div>
            <div class="bloco"><span>${segundos}</span><label>Segundos</label></div>
        `;
    }, 1000);
}

// Defina aqui as datas:
iniciarContador("contador1", "2025-12-20");
iniciarContador("contador2", "2025-11-01");
iniciarContador("contador3", "2025-12-25");
