document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfólio de Danilo Ferreira carregado com sucesso. 🦀");
    
    // Exemplo: Alerta amigável ao tentar copiar o e-mail ou interagir
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink) {
        emailLink.addEventListener("click", () => {
            console.log("Usuário tentando entrar em contato via e-mail.");
        });
    }
});
