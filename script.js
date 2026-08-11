/* Base */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #f3eee5;
    color: #302821;
    font-family: "DM Sans", Arial, sans-serif;
    line-height: 1.5;
}

a {
    color: inherit;
    text-decoration: none;
}

img {
    display: block;
    width: 100%;
}


/* Intro */

.page-loader {
    position: fixed;
    inset: 0;
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #302821;
    color: #f3eee5;

    transition:
        opacity 1s ease,
        visibility 1s ease;
}

.page-loader.loader-hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
}

.loader-content {
    text-align: center;
}

.loader-content p {
    min-height: 1em;

    font-family: "Baloo 2", sans-serif;
    font-size: clamp(45px, 8vw, 110px);
    font-weight: 700;
    line-height: 1;
    letter-spacing: 1px;
}

.typing-cursor {
    display: inline-block;
    width: 3px;
    height: 0.8em;
    margin-left: 8px;

    background: #d8bfa0;
    vertical-align: middle;

    animation: blink 0.7s infinite;
}

.typing-cursor.finished {
    animation: none;
    opacity: 0;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

.loader-content span {
    display: block;

    margin-top: 24px;

    font-family: "Baloo 2", sans-serif;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 7px;

    opacity: 0;
    transform: translateY(12px);

    transition:
        opacity 0.8s ease,
        transform 0.8s ease;
}

.loader-content span.subtitle-visible {
    opacity: 1;
    transform: translateY(0);
}


/* Navigation */

header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    width: 100%;
    padding: 28px 4%;

    color: white;

    mix-blend-mode: difference;

    transition:
        padding 0.3s ease,
        background 0.3s ease;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 3px;
}

.nav-links {
    display: flex;
    gap: 32px;
}

.nav-links a {
    position: relative;

    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.nav-links a::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -6px;

    width: 0;
    height: 1px;

    background: currentColor;

    transition: width 0.3s ease;
}

.nav-links a:hover::after {
    width: 100%;
}

header.scrolled {
    padding-top: 18px;
    padding-bottom: 18px;

    background: rgba(48, 40, 33, 0.85);
    backdrop-filter: blur(12px);

    mix-blend-mode: normal;
}


/* Hero */

.hero {
    position: relative;

    min-height: 100vh;

    display: flex;
    align-items: flex-end;

    padding: 0 4% 7%;

    color: white;

    overflow: hidden;

    background:
        url("images/hero.jpg")
        center center / cover no-repeat;
}

.hero-overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.05),
            rgba(35, 27, 21, 0.65)
        );
}

.hero-text {
    position: relative;
    z-index: 2;

    opacity: 0;
    transform: translateY(45px);

    transition:
        opacity 1.2s ease,
        transform 1.2s cubic-bezier(
            0.16,
            1,
            0.3,
            1
        );
}

.hero-text.hero-visible {
    opacity: 1;
    transform: translateY(0);
}

.hero-text p {
    margin-bottom: 20px;

    font-size: 10px;
    letter-spacing: 5px;
    text-transform: uppercase;
}

.hero-text h1 {
    margin-bottom: 50px;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size: clamp(80px, 14vw, 210px);
    font-weight: 400;
    line-height: 0.78;
    letter-spacing: -8px;
}

.hero-text a {
    display: inline-flex;
    align-items: center;
    gap: 14px;

    padding-bottom: 10px;

    border-bottom: 1px solid white;

    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;

    transition:
        gap 0.3s ease,
        transform 0.25s ease;
}

.hero-text a:hover {
    gap: 24px;
}


/* Sections */

section {
    padding: 150px 4%;
}

.section-heading {
    margin-bottom: 90px;

    opacity: 0;
    transform: translateY(50px);

    transition:
        opacity 0.9s ease,
        transform 0.9s cubic-bezier(
            0.16,
            1,
            0.3,
            1
        );
}

.section-heading.reveal-visible {
    opacity: 1;
    transform: translateY(0);
}

.section-heading p {
    margin-bottom: 18px;

    font-size: 10px;
    letter-spacing: 4px;
    text-transform: uppercase;
}

.section-heading h2 {
    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size: clamp(60px, 9vw, 140px);
    font-weight: 400;
    line-height: 0.8;
    letter-spacing: -6px;
}


/* Portfolio */

.portfolio {
    background: #ded0bd;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 24px;
}

.gallery figure {
    overflow: hidden;
    background: #cdbba4;

    opacity: 0;
    transform: translateY(60px);

    transition:
        opacity 0.9s ease,
        transform 1s cubic-bezier(
            0.16,
            1,
            0.3,
            1
        );
}

.gallery figure.reveal-visible {
    opacity: 1;
    transform: translateY(0);
}

.gallery figure img {
    height: 100%;
    object-fit: cover;

    transition:
        transform 0.7s ease;
}

.gallery figure:hover img {
    transform: scale(1.035);
}

.gallery figure:nth-child(1) {
    grid-column: 1 / 8;
    aspect-ratio: 4 / 5;
}

.gallery figure:nth-child(2) {
    grid-column: 9 / 13;
    margin-top: 160px;
    aspect-ratio: 3 / 4;
}

.gallery figure:nth-child(3) {
    grid-column: 2 / 7;
    margin-top: 90px;
    aspect-ratio: 4 / 5;
}

.gallery figure:nth-child(4) {
    grid-column: 8 / 13;
    margin-top: -40px;
    aspect-ratio: 3 / 4;
}

.gallery figure:nth-child(2) {
    transition-delay: 0.1s;
}

.gallery figure:nth-child(3) {
    transition-delay: 0.2s;
}

.gallery figure:nth-child(4) {
    transition-delay: 0.3s;
}


/* About */

.about {
    min-height: 80vh;

    background: #302821;
    color: #f3eee5;
}

.about-content {
    max-width: 850px;
    margin-left: auto;
}

.about-content p {
    margin-bottom: 40px;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size: clamp(25px, 3.5vw, 45px);
    line-height: 1.25;

    opacity: 0;
    transform: translateY(50px);

    transition:
        opacity 0.9s ease,
        transform 0.9s cubic-bezier(
            0.16,
            1,
            0.3,
            1
        );
}

.about-content p.reveal-visible {
    opacity: 1;
    transform: translateY(0);
}

.about-content p:nth-child(2) {
    transition-delay: 0.15s;
}

.about-content p:nth-child(3) {
    transition-delay: 0.3s;
}


/* Contact */

.contact {
    min-height: 80vh;

    background: #bda88e;
}

.contact-content {
    max-width: 1000px;

    opacity: 0;
    transform: translateY(50px);

    transition:
        opacity 0.9s ease,
        transform 0.9s cubic-bezier(
            0.16,
            1,
            0.3,
            1
        );
}

.contact-content.reveal-visible {
    opacity: 1;
    transform: translateY(0);
}

.contact-intro {
    max-width: 620px;

    margin-bottom: 65px;

    font-size: 18px;
}


/* Form */

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.form-field {
    display: flex;
    flex-direction: column;

    margin-bottom: 38px;
}

.form-field label {
    margin-bottom: 10px;

    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.form-field input,
.form-field select,
.form-field textarea {
    width: 100%;

    padding: 14px 0;

    border: 0;
    border-bottom: 1px solid #302821;

    outline: none;

    background: transparent;

    color: #302821;

    font-family: inherit;
    font-size: 17px;
}

.form-field textarea {
    resize: vertical;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
    border-bottom: 2px solid #302821;
}

.form-field input::placeholder,
.form-field textarea::placeholder {
    color: #5f5348;
}


/* Button */

.enquiry-form button {
    display: inline-flex;
    align-items: center;
    gap: 15px;

    padding: 19px 32px;

    border: 0;

    background: #302821;
    color: #f3eee5;

    cursor: pointer;

    font-family: inherit;
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;

    transition:
        background 0.3s ease,
        transform 0.25s ease,
        gap 0.3s ease;
}

.enquiry-form button:hover {
    background: #473a30;
    gap: 24px;
}

.enquiry-form button:disabled {
    cursor: wait;
    opacity: 0.7;
}


/* Form message */

.form-status {
    min-height: 30px;

    margin-top: 28px;

    font-size: 19px;
    font-weight: 600;
    letter-spacing: 0.5px;

    opacity: 0;
    transform: translateY(10px);

    transition:
        opacity 0.4s ease,
        transform 0.4s ease;
}

.form-status.show {
    opacity: 1;
    transform: translateY(0);
}


/* Footer */

footer {
    padding: 35px 4%;

    background: #302821;
    color: #f3eee5;

    font-size: 9px;
    letter-spacing: 3px;
    text-transform: uppercase;
}


/* Mobile */

@media (max-width: 700px) {

    header {
        padding: 20px;
    }

    .nav-links {
        gap: 15px;
    }

    .nav-links a {
        font-size: 9px;
    }

    section {
        padding: 100px 20px;
    }

    .hero {
        padding: 0 20px 60px;
    }

    .hero-text h1 {
        font-size: 22vw;
        letter-spacing: -5px;
    }

    .section-heading {
        margin-bottom: 60px;
    }

    .section-heading h2 {
        letter-spacing: -4px;
    }

    .gallery {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .gallery figure {
        width: 100%;
        aspect-ratio: 4 / 5;
        margin: 0 !important;
    }

    .about-content {
        margin-left: 0;
    }

    .contact-intro {
        font-size: 16px;
        margin-bottom: 50px;
    }

    .form-row {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .loader-content p {
        font-size: 14vw;
    }

    .loader-content span {
        font-size: 14px;
        letter-spacing: 4px;
    }

    .form-status {
        font-size: 17px;
    }
}


/* Reduced motion */

@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: 0.01ms !important;
    }
}
