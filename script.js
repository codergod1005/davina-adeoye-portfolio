document.addEventListener("DOMContentLoaded", () => {

    /* Intro */

    const loader = document.querySelector(".page-loader");
    const name = document.querySelector("#typing-name");
    const subtitle = document.querySelector("#typing-subtitle");

    if (loader && name && subtitle) {

        const text = name.dataset.text;

        const cursor = document.createElement("span");
        cursor.className = "typing-cursor";

        name.appendChild(cursor);

        let letter = 0;

        function typeName() {

            if (letter < text.length) {

                cursor.remove();

                name.textContent += text[letter];

                name.appendChild(cursor);

                letter++;

                setTimeout(typeName, 120);

            } else {

                cursor.classList.add("finished");

                setTimeout(() => {
                    subtitle.classList.add("subtitle-visible");
                }, 350);

                setTimeout(() => {
                    loader.classList.add("loader-hidden");
                }, 3200);
            }
        }

        setTimeout(typeName, 600);
    }


    /* Hero */

    const heroText = document.querySelector(".hero-text");

    setTimeout(() => {

        if (heroText) {
            heroText.classList.add("hero-visible");
        }

    }, 4800);


    /* Scroll animations */

    const elements = document.querySelectorAll(
        ".section-heading, .gallery figure, .about-content p, .contact-content"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elements.forEach(element => {
        observer.observe(element);
    });


    /* Header */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) {
            return;
        }

        header.classList.toggle(
            "scrolled",
            window.scrollY > 50
        );

    });


    /* Contact form */

    const form = document.querySelector(".enquiry-form");

    if (form) {

        form.addEventListener("submit", async event => {

            event.preventDefault();

            const button = form.querySelector(
                "button[type='submit']"
            );

            const status = form.querySelector(
                ".form-status"
            );

            const originalText = button.innerHTML;

            button.disabled = true;
            button.innerHTML = "Sending...";

            status.classList.remove("show");
            status.textContent = "";


            try {

                const response = await fetch(
                    form.action,
                    {
                        method: "POST",

                        body: new FormData(form),

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

                status.classList.add("show");


                setTimeout(() => {

                    button.disabled = false;

                    button.innerHTML =
                        originalText;

                }, 4000);


            } catch (error) {

                console.error(error);

                button.disabled = false;

                button.innerHTML =
                    "Try again";

                status.textContent =
                    "Something went wrong. Please try again.";

                status.classList.add("show");
            }

        });

    }

});
