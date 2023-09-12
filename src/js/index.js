// Obter todos os títulos dos cartões com a classe "mod"
const princeTitles = document.querySelectorAll(".mod");

// Adicionar o evento de clique a cada título dos cartões
princeTitles.forEach((title) => {
    title.addEventListener("click", () => {
        const card = title.parentElement;

        // Alternar a classe "open" para expandir ou contrair o cartão específico que foi clicado
        card.classList.toggle("open");
    });
});
