document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       INTRO
    ===================================== */

    const loader = document.querySelector(".page-loader");
    const name = document.querySelector("#typing-name");
    const subtitle = document.querySelector("#typing-subtitle");

    if (loader && name && subtitle) {

        const text = name.dataset.text || "DAVINAH ADEOYE";

        let letter = 0;

        const cursor = document.createElement("span");

        cursor.className = "typing-cursor";

        name.appendChild(cursor);


        function typeName() {

            if (letter < text.length) {

                cursor.remove();

                name.textContent += text[letter];

                name.appendChild(cursor);

                letter++;

                setTimeout(typeName, 120);

            } else {

                /* Stop the cursor when typing finishes */

                cursor.classList.add("finished");


                /* Show PORTFOLIO */

                setTimeout(() => {

                    subtitle.classList.add(
                        "subtitle-visible"
                    );

                }, 300);


                /* Close intro */

                setTimeout(() => {

                    loader.classList.add(
                        "loader-hidden"
                    );

                }, 2500);
            }
        }


        /* Start typing */

        setTimeout(typeName, 400);


        /*
            Safety fallback.

            If something goes wrong with the
            animation on a phone, the page
            cannot remain stuck forever.
        */

        setTimeout(() => {

            loader.classList.add(
                "loader-hidden"
            );

        }, 7000);
    }


    /* =====================================
       HERO
    ===================================== */

    const heroText =
        document.querySelector(".hero-text");

    setTimeout(() => {

        if (heroText) {

            heroText.classList.add(
                "hero-visible"
            );
        }

    }, 3000);


    /* =====================================
       SCROLL ANIMATIONS
    ===================================== */

    const elements = document.querySelectorAll(
        ".section-heading, " +
        ".gallery figure, " +
        ".about-content p, " +
        ".contact-content"
    );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "reveal-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.1
                }
            );


        elements.forEach(element => {

            observer.observe(element);

        });

    } else {

        /*
            Older browsers that do not support
            IntersectionObserver simply show
            everything normally.
        */

        elements.forEach(element => {

            element.classList.add(
                "reveal-visible"
            );

        });
    }


    /* =====================================
       HEADER
    ===================================== */

    const header =
        document.querySelector("header");

    if (header) {

        window.addEventListener(
            "scroll",
            () => {

                header.classList.toggle(
                    "scrolled",
                    window.scrollY > 50
                );

            }
        );
    }


    /* =====================================
       CONTACT FORM
    ===================================== */

    const form =
        document.querySelector(
            ".enquiry-form"
        );


    if (form) {

        form.addEventListener(
            "submit",
            async event => {

                event.preventDefault();


                const button =
                    form.querySelector(
                        "button[type='submit']"
                    );


                const status =
                    form.querySelector(
                        ".form-status"
                    );


                const originalText =
                    button.innerHTML;


                button.disabled = true;

                button.innerHTML =
                    "Sending...";


                status.classList.remove(
                    "show"
                );

                status.textContent = "";


                try {

                    const response =
                        await fetch(
                            form.action,
                            {
                                method: "POST",

                                body:
                                    new FormData(form),

                                headers: {
                                    Accept:
                                        "application/json"
                                }
                            }
                        );


                    if (!response.ok) {

                        throw new Error(
                            "Form submission failed"
                        );
                    }


                    form.reset();


                    button.innerHTML =
                        "✓ Enquiry sent";


                    status.textContent =
                        "✓ Your enquiry has been sent successfully.";


                    status.classList.add(
                        "show"
                    );


                    setTimeout(() => {

                        button.disabled =
                            false;

                        button.innerHTML =
                            originalText;

                    }, 4000);


                } catch (error) {

                    console.error(error);


                    button.disabled =
                        false;


                    button.innerHTML =
                        "Try again";


                    status.textContent =
                        "Something went wrong. Please try again.";


                    status.classList.add(
                        "show"
                    );
                }

            }
        );
    }

});
