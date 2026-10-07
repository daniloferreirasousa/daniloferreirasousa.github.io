document.addEventListener("DOMContentLoaded", () => {
    // 1. Logs de Inicialização no Console (Estética de Engenharia de Sistemas)
    const runSystemDiagnostics = () => {
        console.log("%c[SYSTEM] Inicializando portfólio de Danilo Ferreira...", "color: #f97316; font-weight: bold;");
        
        const logs = [
            { msg: "Carregando arquitetura de módulos...", status: "OK" },
            { msg: "Verificando integridade dos repositórios (Rust/PHP)...", status: "OK" },
            { msg: "Orquestrando ambiente local (CrabAI Integration)...", status: "ACTIVE" },
            { msg: "Conectando ao host firjan_senai_resende...", status: "ONLINE" }
        ];

        logs.forEach((log, index) => {
            setTimeout(() => {
                const statusColor = log.status === "OK" || log.status === "ONLINE" ? "color: #10b981" : "color: #f59e0b";
                console.log(`%c[LOAD] ${log.msg} %c[${log.status}]`, "color: #71717a;", `${statusColor}; font-weight: bold;`);
            }, (index + 1) * 250);
        });

        setTimeout(() => {
            console.log("%c[READY] Console interativo operacional. 🦀", "color: #10b981; font-weight: bold; border-top: 1px solid #27272a; padding-top: 4px;");
        }, 1200);
    };

    runSystemDiagnostics();

    // 2. Efeito de Digitação Automatizado (Terminal Typing Effect)
    const typeWriterEffect = () => {
        const terminalPrompt = document.querySelector(".text-zinc-600.font-mono");
        if (terminalPrompt) {
            const originalText = "guest@danilo:~# whoami";
            terminalPrompt.innerHTML = "guest@danilo:~# <span class='cursor-blink'></span>";
            
            let i = 15; // Começa a digitar após o prefixo 'guest@danilo:~# '
            terminalPrompt.innerHTML = originalText.substring(0, i) + "<span class='cursor-blink'></span>";

            const typing = setInterval(() => {
                if (i < originalText.length) {
                    i++;
                    terminalPrompt.innerHTML = originalText.substring(0, i) + "<span class='cursor-blink'></span>";
                } else {
                    clearInterval(typing);
                }
            }, 100);
        }
    };

    typeWriterEffect();

    // 3. Monitoramento de Intenção de Contato (Métricas Locais)
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink) {
        emailLink.addEventListener("click", (e) => {
            console.log("%c[ACTION] Redirecionando usuário para cliente de e-mail local.", "color: #f97316; font-style: italic;");
        });
    }

    // Monitora cliques nos links externos de código fonte para fins de log
    const sourceLinks = document.querySelectorAll(".btn-cyber, .group");
    sourceLinks.forEach(link => {
        link.addEventListener("click", function() {
            const destination = this.getAttribute("href");
            console.log(`%c[NAVIGATION] Desviando fluxo de execução para: ${destination}`, "color: #38bdf8;");
        });
    });
});
