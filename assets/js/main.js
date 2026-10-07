/* ================================================================
   DANILO FERREIRA SOUSA
   PORTFOLIO
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /*
     * ============================================================
     * CONFIGURAÇÃO
     * ============================================================
     */

    const CONFIG = {

        terminalText: "whoami",

        typingSpeed: 90,

        revealThreshold: 0.12

    };


    /*
     * ============================================================
     * DIAGNÓSTICO DO SISTEMA
     *
     * Apenas uma pequena experiência para quem abrir o
     * DevTools do navegador.
     * ============================================================
     */

    const runSystemDiagnostics = () => {

        console.log(
            "%c[SYSTEM] Danilo Ferreira Sousa Portfolio",
            "color:#f97316;font-weight:bold;font-size:14px;"
        );

        const logs = [

            {
                message:
                    "Inicializando interface...",
                status: "OK"
            },

            {
                message:
                    "Carregando módulos de apresentação...",
                status: "OK"
            },

            {
                message:
                    "Verificando integridade visual...",
                status: "OK"
            },

            {
                message:
                    "Carregando projetos...",
                status: "READY"
            },

            {
                message:
                    "Portfolio operacional.",
                status: "ONLINE"
            }

        ];


        logs.forEach((log, index) => {

            setTimeout(() => {

                const color =
                    log.status === "ONLINE"
                        ? "#10b981"
                        : "#f97316";

                console.log(
                    `%c[${log.status}] %c${log.message}`,
                    `color:${color};font-weight:bold;`,
                    "color:#71717a;"
                );

            }, index * 220);

        });

    };


    /*
     * ============================================================
     * TERMINAL TYPING EFFECT
     * ============================================================
     */

    const initializeTerminal = () => {

        const terminalElement =
            document.querySelector("#terminal-text");

        if (!terminalElement) {
            return;
        }

        let currentIndex = 0;

        const typeNextCharacter = () => {

            if (
                currentIndex >=
                CONFIG.terminalText.length
            ) {
                return;
            }

            currentIndex++;

            terminalElement.textContent =
                CONFIG.terminalText.substring(
                    0,
                    currentIndex
                );

            setTimeout(
                typeNextCharacter,
                CONFIG.typingSpeed
            );

        };


        setTimeout(
            typeNextCharacter,
            400
        );

    };


    /*
     * ============================================================
     * REVEAL DAS SEÇÕES AO ROLAR
     * ============================================================
     */

    const initializeScrollReveal = () => {

        const elements =
            document.querySelectorAll(".reveal");

        if (!elements.length) {
            return;
        }


        /*
         * Fallback para navegadores sem IntersectionObserver.
         */

        if (!("IntersectionObserver" in window)) {

            elements.forEach((element) => {

                element.classList.add("visible");

            });

            return;

        }


        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.classList.add(
                            "visible"
                        );

                        observerInstance.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold:
                        CONFIG.revealThreshold
                }
            );


        elements.forEach((element) => {

            observer.observe(element);

        });

    };


    /*
     * ============================================================
     * EFEITO DE PARALLAX MUITO SUTIL NA FOTO
     *
     * O efeito só é ativado em dispositivos com mouse.
     * Em celulares não existe movimentação.
     * ============================================================
     */

    const initializePhotoParallax = () => {

        const photo =
            document.querySelector(".photo-frame");

        if (!photo) {
            return;
        }


        const supportsHover =
            window.matchMedia(
                "(hover: hover)"
            ).matches;

        if (!supportsHover) {
            return;
        }


        photo.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    photo.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) *
                    -2;

                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    2;


                photo.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-4px)`;

            }
        );


        photo.addEventListener(
            "mouseleave",
            () => {

                photo.style.transform =
                    "rotate(1deg)";

            }
        );

    };


    /*
     * ============================================================
     * LOG DE NAVEGAÇÃO
     * ============================================================
     */

    const initializeNavigationLogs = () => {

        const links =
            document.querySelectorAll(
                "a[href]"
            );


        links.forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    const destination =
                        link.getAttribute(
                            "href"
                        );

                    console.log(
                        `%c[NAVIGATION] ${destination}`,
                        "color:#38bdf8;"
                    );

                }
            );

        });

    };


    /*
     * ============================================================
     * LOG DE E-MAIL
     * ============================================================
     */

    const initializeEmailLog = () => {

        const emailLinks =
            document.querySelectorAll(
                'a[href^="mailto:"]'
            );


        emailLinks.forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    console.log(
                        "%c[ACTION] Abrindo cliente de e-mail local.",
                        "color:#f97316;font-style:italic;"
                    );

                }
            );

        });

    };


    /*
     * ============================================================
     * EASTER EGG DO TECLADO
     *
     * Digitar "sudo" no teclado exibe uma pequena mensagem
     * no console.
     * ============================================================
     */

    const initializeKeyboardEasterEgg = () => {

        let input = "";

        const secret =
            "sudo";

        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key.length !== 1
                ) {
                    return;
                }

                input +=
                    event.key.toLowerCase();

                if (input.length > secret.length) {

                    input =
                        input.slice(
                            -secret.length
                        );

                }


                if (input === secret) {

                    console.log(
                        "%c[SUDO] Access granted.",
                        "color:#10b981;font-weight:bold;"
                    );

                    input = "";

                }

            }
        );

    };


    /*
     * ============================================================
     * INICIALIZAÇÃO
     * ============================================================
     */

    runSystemDiagnostics();

    initializeTerminal();

    initializeScrollReveal();

    initializePhotoParallax();

    initializeNavigationLogs();

    initializeEmailLog();

    initializeKeyboardEasterEgg();

});
