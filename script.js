document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navLinksItems = document.querySelectorAll(".nav-links a"); // Todos os links do menu
    const currentPage = window.location.pathname.split("/").pop(); // Obtém o nome do arquivo atual

    // Adiciona a classe "active" ao link correto
    navLinksItems.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Destaca o link da página atual
        }
    });

    // Toggle do menu hambúrguer
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
