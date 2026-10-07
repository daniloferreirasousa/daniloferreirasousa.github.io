document.addEventListener("DOMContentLoaded", () => {

    /*
    ============================================================
    PORTFÓLIO - DANILO FERREIRA SOUSA
    ============================================================
    */


    /* =========================================================
       NAVBAR - ALTERAÇÃO AO ROLAR
    ========================================================== */

    const navigation = document.querySelector(".site-nav");


    const updateNavigation = () => {

        if (!navigation) {
            return;
        }

        if (window.scrollY > 20) {

            navigation.classList.add("scrolled");

        } else {

            navigation.classList.remove("scrolled");

        }

    };


    window.addEventListener(
        "scroll",
        updateNavigation,
        { passive: true }
    );


    updateNavigation();



    /* =========================================================
       REVEAL DAS SEÇÕES
    ========================================================== */

    const revealElements = document.querySelectorAll(
        ".section, .project-card, .timeline-item, .education-card, .contact-section"
    );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

    });


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }


                entry.target.classList.add("visible");


                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.08
        }
    );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });



    /* =========================================================
       TERMINAL TYPING EFFECT
    ========================================================== */

    const commandElement =
        document.querySelector(".hero-command");


    if (commandElement) {

        const command =
            "danilo@dev:~$ whoami";


        commandElement.textContent = "";


        let position = 0;


        const typeCommand = () => {

            if (position >= command.length) {
                return;
            }


            commandElement.textContent +=
                command[position];


            position++;


            setTimeout(
                typeCommand,
                55
            );

        };


        setTimeout(
            typeCommand,
            500
        );

    }



    /* =========================================================
       ANIMAÇÃO DA FOTO
    ========================================================== */

    const profileCard =
        document.querySelector(".profile-card");


    if (profileCard) {

        profileCard.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    profileCard.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const rotateX =
                    ((y / rect.height) - 0.5) * -4;


                const rotateY =
                    ((x / rect.width) - 0.5) * 4;


                profileCard.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-3px)`;

            }
        );


        profileCard.addEventListener(
            "mouseleave",
            () => {

                profileCard.style.transform =
                    "";

            }
        );

    }



    /* =========================================================
       LOG DE INICIALIZAÇÃO
    ========================================================== */

    console.log(
        "%c DANILO.DEV ",
        "background:#f97316;color:#000;font-weight:bold;padding:5px;"
    );


    console.log(
        "%cPortfolio initialized.",
        "color:#10b981;font-weight:bold;"
    );


    console.log(
        "%cStack: PHP / Laravel / JavaScript / Docker / NativePHP",
        "color:#a1a1aa;"
    );



    /* =========================================================
       LOGS DE NAVEGAÇÃO
    ========================================================== */

    const externalLinks =
        document.querySelectorAll(
            'a[target="_blank"]'
        );


    externalLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                console.log(
                    `%c[NAVIGATION] ${link.href}`,
                    "color:#f97316;"
                );

            }
        );

    });



    /* =========================================================
       LOG DE CONTATO
    ========================================================== */

    const emailLinks =
        document.querySelectorAll(
            'a[href^="mailto:"]'
        );


    emailLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                console.log(
                    "%c[CONTACT] Opening local email client...",
                    "color:#10b981;"
                );

            }
        );

    });



    /* =========================================================
       EFEITO SUTIL NO BACKGROUND
    ========================================================== */

    const backgroundGlowOne =
        document.querySelector(
            ".background-glow-one"
        );


    const backgroundGlowTwo =
        document.querySelector(
            ".background-glow-two"
        );


    window.addEventListener(
        "mousemove",
        (event) => {

            const x =
                event.clientX / window.innerWidth;


            const y =
                event.clientY / window.innerHeight;


            if (backgroundGlowOne) {

                backgroundGlowOne.style.transform =
                    `translate(${x * 35}px, ${y * 20}px)`;

            }


            if (backgroundGlowTwo) {

                backgroundGlowTwo.style.transform =
                    `translate(${-x * 25}px, ${-y * 15}px)`;

            }

        },
        { passive: true }
    );



    /* =========================================================
       SMOOTH SCROLL PARA LINKS INTERNOS
    ========================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (!target) {
                    return;
                }


                event.preventDefault();


                const navHeight =
                    navigation
                        ? navigation.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navHeight -
                    20;


                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }
        );

    });



    /* =========================================================
       STATUS DINÂMICO
    ========================================================== */

    const statusElement =
        document.querySelector(".terminal-label");


    if (statusElement) {

        setTimeout(() => {

            const text =
                statusElement.querySelector(
                    "span:last-child"
                );


            if (text) {

                text.textContent =
                    "SYSTEM_READY";

            }

        }, 1800);

    }

});