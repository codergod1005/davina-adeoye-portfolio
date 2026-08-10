// ==========================================
// DAVINAH ADEOYE PORTFOLIO
// ==========================================


// ==========================================
// WAIT FOR PAGE
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


    // ==========================================
    // OPENING TYPEWRITER
    // ==========================================

    const nameElement =
        document.getElementById(
            "typing-name"
        );

    const subtitleElement =
        document.getElementById(
            "typing-subtitle"
        );

    const loader =
        document.querySelector(
            ".page-loader"
        );


    if (
        nameElement &&
        subtitleElement &&
        loader
    ) {

        const text =
            nameElement.getAttribute(
                "data-text"
            );


        let currentLetter = 0;


        subtitleElement.style.opacity =
            "0";


        function typeName() {

            if (
                currentLetter <
                text.length
            ) {

                nameElement.textContent +=
                    text.charAt(
                        currentLetter
                    );


                currentLetter++;


                setTimeout(
                    typeName,
                    120
                );

            }

            else {

                setTimeout(
                    function () {

                        subtitleElement.classList.add(
                            "subtitle-visible"
                        );


                        setTimeout(
                            function () {

                                loader.classList.add(
                                    "loader-hidden"
                                );

                            },
                            3000
                        );

                    },
                    400
                );

            }

        }


        setTimeout(
            typeName,
            600
        );

    }



    // ==========================================
    // HERO TEXT
    // ==========================================

    const heroText =
        document.querySelector(
            ".hero-text"
        );


    if (heroText) {

        setTimeout(
            function () {

                heroText.classList.add(
                    "hero-visible"
                );

            },
            5000
        );

    }



    // ==========================================
    // SCROLL REVEAL
    // ==========================================

    const revealElements =
        document.querySelectorAll(
            ".section-heading, " +
            ".gallery img, " +
            ".about-content p, " +
            ".contact-content"
        );


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "reveal-visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        function (element) {

            element.classList.add(
                "reveal"
            );


            observer.observe(
                element
            );

        }
    );



    // ==========================================
    // HERO PARALLAX
    // ==========================================

    const hero =
        document.querySelector(
            ".hero"
        );


    window.addEventListener(
        "scroll",
        function () {

            if (!hero) {
                return;
            }


            const scrollPosition =
                window.scrollY;


            if (
                scrollPosition <
                window.innerHeight
            ) {

                hero.style.backgroundPosition =
                    "center " +
                    (
                        scrollPosition *
                        0.35
                    ) +
                    "px";

            }

        }
    );



    // ==========================================
    // NAVIGATION
    // ==========================================

    const header =
        document.querySelector(
            "header"
        );


    window.addEventListener(
        "scroll",
        function () {

            if (!header) {
                return;
            }


            if (
                window.scrollY > 50
            ) {

                header.classList.add(
                    "scrolled"
                );

            }

            else {

                header.classList.remove(
                    "scrolled"
                );

            }

        }
    );



    // ==========================================
    // MAGNETIC BUTTONS
    // ==========================================

    const buttons =
        document.querySelectorAll(
            ".hero-text a, " +
            ".enquiry-form button"
        );


    buttons.forEach(
        function (button) {


            button.addEventListener(
                "mousemove",
                function (event) {

                    const rect =
                        button.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;


                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    button.style.transform =
                        "translate(" +
                        (
                            x * 0.15
                        ) +
                        "px, " +
                        (
                            y * 0.15
                        ) +
                        "px)";

                }
            );


            button.addEventListener(
                "mouseleave",
                function () {

                    button.style.transform =
                        "translate(0, 0)";

                }
            );

        }
    );



    // ==========================================
    // ENQUIRY FORM
    // ==========================================

    const form =
        document.querySelector(
            ".enquiry-form"
        );


    if (form) {


        form.addEventListener(
            "submit",
            async function (event) {


                // ==========================================
                // STOP NORMAL FORM NAVIGATION
                // ==========================================

                event.preventDefault();

                event.stopPropagation();


                // ==========================================
                // GET FORM ELEMENTS
                // ==========================================

                const button =
                    form.querySelector(
                        "button[type='submit']"
                    );


                const status =
                    form.querySelector(
                        ".form-status"
                    );


                const originalButtonText =
                    button.textContent;


                // ==========================================
                // CHECK REQUIRED FIELDS
                // ==========================================

                const name =
                    document.getElementById(
                        "name"
                    );

                const email =
                    document.getElementById(
                        "email"
                    );

                const enquiry =
                    document.getElementById(
                        "enquiry"
                    );

                const message =
                    document.getElementById(
                        "message"
                    );


                if (
                    !name.value.trim() ||
                    !email.value.trim() ||
                    !enquiry.value ||
                    !message.value.trim()
                ) {

                    status.textContent =
                        "Please complete all required fields.";

                    status.style.opacity =
                        "1";


                    return;

                }



                // ==========================================
                // SENDING
                // ==========================================

                button.disabled =
                    true;


                button.textContent =
                    "Sending...";


                status.textContent =
                    "Sending your enquiry...";


                status.style.opacity =
                    "1";



                try {


                    // ==========================================
                    // COLLECT FORM DATA
                    // ==========================================

                    const formData =
                        new FormData(form);



                    // ==========================================
                    // SEND TO FORMSPREE
                    // ==========================================

                    const response =
                        await fetch(
                            form.action,
                            {
                                method: "POST",

                                body: formData,

                                headers: {
                                    "Accept":
                                        "application/json"
                                }
                            }
                        );



                    // ==========================================
                    // SUCCESS
                    // ==========================================

                    if (
                        response.ok
                    ) {

                        status.textContent =
                            "✓ Your enquiry has been sent successfully.";

                        status.style.opacity =
                            "1";


                        button.textContent =
                            "✓ Enquiry Sent";


                        form.reset();



                        // ==========================================
                        // RESET BUTTON AFTER 4 SECONDS
                        // ==========================================

                        setTimeout(
                            function () {

                                button.disabled =
                                    false;


                                button.textContent =
                                    originalButtonText;


                                status.textContent =
                                    "";

                            },
                            4000
                        );

                    }


                    else {

                        throw new Error(
                            "Submission failed"
                        );

                    }

                }


                // ==========================================
                // ERROR
                // ==========================================

                catch (error) {

                    console.error(
                        "Form error:",
                        error
                    );


                    status.textContent =
                        "Something went wrong. Please try again.";


                    button.disabled =
                        false;


                    button.textContent =
                        "Try Again";


                    setTimeout(
                        function () {

                            button.textContent =
                                originalButtonText;

                        },
                        3000
                    );

                }

            }
        );

    }


});