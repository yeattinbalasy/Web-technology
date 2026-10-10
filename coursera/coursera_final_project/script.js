:root {
    --primary: #2563eb;
    --primary-dark: #1d4ed8;
    --secondary: #7c3aed;
    --dark: #0f172a;
    --text: #1e293b;
    --muted: #64748b;
    --background: #f6f8fc;
    --surface: #ffffff;
    --border: #e2e8f0;
    --success: #16a34a;
    --shadow: 0 20px 50px rgba(15, 23, 42, 0.10);
    --small-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
    --radius-large: 28px;
    --radius-medium: 18px;
    --radius-small: 12px;
    --container: 1180px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
}

body {
    min-width: 320px;
    background: var(--background);
    color: var(--text);
    font-family:
        Inter,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;
    line-height: 1.65;
}

body::before {
    position: fixed;
    z-index: -1;
    top: -200px;
    left: -200px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: rgba(37, 99, 235, 0.10);
    filter: blur(90px);
    content: "";
}

body::after {
    position: fixed;
    z-index: -1;
    right: -200px;
    bottom: -200px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: rgba(124, 58, 237, 0.10);
    filter: blur(90px);
    content: "";
}

img {
    display: block;
    max-width: 100%;
}

a {
    color: inherit;
    text-decoration: none;
}

button,
input,
textarea {
    font: inherit;
}

button,
a {
    -webkit-tap-highlight-color: transparent;
}

.container {
    width: min(var(--container), calc(100% - 40px));
    margin-inline: auto;
}

.section {
    padding: 100px 0;
}

.section-light {
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.70);
}

/* Шапка */

.site-header {
    position: sticky;
    z-index: 1000;
    top: 0;
    border-bottom: 1px solid rgba(226, 232, 240, 0.85);
    background: rgba(255, 255, 255, 0.88);
    backdrop-filter: blur(18px);
}

.header-container {
    display: flex;
    min-height: 78px;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.brand {
    display: flex;
    align-items: center;
    gap: 12px;
}

.brand-logo {
    display: grid;
    width: 44px;
    height: 44px;
    place-items: center;
    border-radius: 13px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
    color: white;
    font-weight: 800;
}

.brand-text {
    display: flex;
    flex-direction: column;
    line-height: 1.25;
}

.brand-text strong {
    color: var(--dark);
    font-size: 16px;
}

.brand-text small {
    color: var(--muted);
    font-size: 12px;
}

.navigation {
    display: flex;
    align-items: center;
    gap: 8px;
}

.nav-link {
    position: relative;
    padding: 11px 14px;
    border-radius: 10px;
    color: var(--muted);
    font-size: 14px;
    font-weight: 600;
    transition: 0.2s ease;
}

.nav-link::after {
    position: absolute;
    right: 14px;
    bottom: 7px;
    left: 14px;
    height: 2px;
    border-radius: 2px;
    background: var(--primary);
    content: "";
    opacity: 0;
    transform: scaleX(0);
    transition: 0.2s ease;
}

.nav-link:hover,
.nav-link:focus-visible {
    background: #eff6ff;
    color: var(--primary);
    font-weight: 800;
}

.nav-link:hover::after,
.nav-link:focus-visible::after {
    opacity: 1;
    transform: scaleX(1);
}

.menu-button {
    display: none;
    width: 46px;
    height: 46px;
    cursor: pointer;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: var(--surface);
}

.menu-button span {
    display: block;
    width: 21px;
    height: 2px;
    margin: 5px auto;
    border-radius: 3px;
    background: var(--dark);
    transition: 0.2s ease;
}

/* Главный блок */

.hero {
    display: flex;
    min-height: calc(100vh - 78px);
    align-items: center;
    padding-top: 70px;
}

.hero-container {
    display: grid;
    align-items: center;
    gap: 70px;
    grid-template-columns: minmax(0, 1.1fr) minmax(380px, 0.9fr);
}

.section-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 18px;
    color: var(--primary);
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.15em;
    text-transform: uppercase;
}

.section-label::before {
    width: 30px;
    height: 2px;
    background: var(--primary);
    content: "";
}

.hero h1 {
    max-width: 750px;
    margin-bottom: 24px;
    color: var(--dark);
    font-size: clamp(42px, 6vw, 72px);
    line-height: 1.08;
    letter-spacing: -0.045em;
}

.hero h1 span {
    display: block;
    background: linear-gradient(120deg, var(--primary), var(--secondary));
    background-clip: text;
    color: transparent;
}

.hero-description {
    max-width: 700px;
    margin-bottom: 14px;
    color: var(--muted);
    font-size: 17px;
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 30px;
}

.button {
    display: inline-flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    cursor: pointer;
    border: 0;
    border-radius: 12px;
    font-weight: 750;
    transition: 0.2s ease;
}

.button-primary {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    box-shadow: 0 12px 25px rgba(37, 99, 235, 0.25);
    color: white;
}

.button-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 32px rgba(37, 99, 235, 0.32);
}

.button-secondary {
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--dark);
}

.button-secondary:hover {
    border-color: var(--primary);
    color: var(--primary);
    transform: translateY(-2px);
}

.hero-statistics {
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
    margin-top: 42px;
}

.statistic {
    display: flex;
    flex-direction: column;
}

.statistic strong {
    color: var(--dark);
    font-size: 25px;
    line-height: 1.2;
}

.statistic span {
    color: var(--muted);
    font-size: 13px;
}

/* Иллюстрация профиля */

.profile-card {
    position: relative;
    overflow: hidden;
    min-height: 520px;
    padding: 45px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: var(--radius-large);
    background:
        linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.96),
            rgba(239, 246, 255, 0.90)
        );
    box-shadow: var(--shadow);
}

.profile-decoration {
    position: absolute;
    border-radius: 50%;
    filter: blur(4px);
}

.profile-decoration-one {
    top: -70px;
    right: -70px;
    width: 240px;
    height: 240px;
    background: rgba(37, 99, 235, 0.18);
}

.profile-decoration-two {
    bottom: -100px;
    left: -90px;
    width: 260px;
    height: 260px;
    background: rgba(124, 58, 237, 0.15);
}

.profile-avatar {
    position: relative;
    display: grid;
    width: 155px;
    height: 155px;
    margin: 20px auto 30px;
    place-items: center;
    border: 9px solid white;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.25);
    color: white;
    font-size: 48px;
    font-weight: 900;
}

.profile-information {
    position: relative;
    text-align: center;
}

.profile-information h2 {
    margin: 15px 0 4px;
    color: var(--dark);
    font-size: 28px;
}

.profile-information p {
    color: var(--muted);
}

.status {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 7px 12px;
    border-radius: 30px;
    background: #ecfdf5;
    color: #15803d;
    font-size: 12px;
    font-weight: 700;
}

.status-point {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.14);
}

.code-window {
    position: relative;
    margin-top: 35px;
    padding: 20px;
    border-radius: 16px;
    background: var(--dark);
    box-shadow: var(--small-shadow);
    color: #cbd5e1;
    font-size: 13px;
    line-height: 1.8;
}

.code-window-header {
    display: flex;
    gap: 6px;
    margin-bottom: 14px;
}

.code-window-header span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.code-window-header span:nth-child(1) {
    background: #ef4444;
}

.code-window-header span:nth-child(2) {
    background: #eab308;
}

.code-window-header span:nth-child(3) {
    background: #22c55e;
}

.code-purple {
    color: #c084fc;
}

.code-blue {
    color: #60a5fa;
}

/* Заголовки разделов */

.section-heading {
    max-width: 720px;
    margin: 0 auto 55px;
    text-align: center;
}

.section-heading .section-label {
    justify-content: center;
}

.section-heading h2 {
    margin-bottom: 14px;
    color: var(--dark);
    font-size: clamp(32px, 4vw, 48px);
    line-height: 1.15;
    letter-spacing: -0.03em;
}

.section-heading > p:last-child {
    color: var(--muted);
    font-size: 17px;
}

/* Навыки */

.skills-grid {
    display: grid;
    gap: 22px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
}

.skill-card {
    padding: 26px;
    border: 1px solid var(--border);
    border-radius: var(--radius-medium);
    background: var(--surface);
    box-shadow: var(--small-shadow);
    transition: 0.25s ease;
}

.skill-card:hover {
    border-color: rgba(37, 99, 235, 0.35);
    transform: translateY(-8px);
}

.skill-icon {
    display: grid;
    width: 62px;
    height: 62px;
    margin-bottom: 22px;
    place-items: center;
    border-radius: 16px;
    background: #f8fafc;
}

.skill-icon img {
    width: 38px;
    height: 38px;
    object-fit: contain;
}

.skill-card h3 {
    margin-bottom: 8px;
    color: var(--dark);
    font-size: 20px;
}

.skill-card p {
    min-height: 74px;
    color: var(--muted);
    font-size: 14px;
}

.skill-progress {
    overflow: hidden;
    height: 6px;
    margin: 20px 0 10px;
    border-radius: 20px;
    background: #e2e8f0;
}

.skill-progress span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
}

.skill-card small {
    color: var(--muted);
    font-size: 12px;
}

/* Проекты */

.projects-grid {
    display: grid;
    align-items: stretch;
    gap: 24px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.project-card {
    position: relative;
    display: flex;
    min-height: 470px;
    flex-direction: column;
    padding: 34px;
    overflow: hidden;
    border: 1px solid var(--border);
    border-radius: var(--radius-large);
    background: var(--surface);
    box-shadow: var(--small-shadow);
    transition: 0.25s ease;
}

.project-card:hover {
    border-color: rgba(37, 99, 235, 0.35);
    transform: translateY(-8px);
    box-shadow: var(--shadow);
}

.project-card-featured {
    background:
        linear-gradient(145deg, var(--dark), #1e3a5f);
    color: white;
}

.project-number {
    position: absolute;
    top: 22px;
    right: 25px;
    color: rgba(100, 116, 139, 0.18);
    font-size: 68px;
    font-weight: 900;
    line-height: 1;
}

.project-card-featured .project-number {
    color: rgba(255, 255, 255, 0.10);
}

.project-tags {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 50px;
}

.project-tags span {
    padding: 6px 10px;
    border-radius: 30px;
    background: #eff6ff;
    color: var(--primary);
    font-size: 11px;
    font-weight: 800;
}

.project-card-featured .project-tags span {
    background: rgba(255, 255, 255, 0.12);
    color: #bfdbfe;
}

.project-card h3 {
    position: relative;
    margin-bottom: 16px;
    color: var(--dark);
    font-size: 27px;
}

.project-card-featured h3 {
    color: white;
}

.project-card p {
    position: relative;
    margin-bottom: 22px;
    color: var(--muted);
    font-size: 15px;
}

.project-card-featured p {
    color: #cbd5e1;
}

.project-card ul {
    position: relative;
    display: grid;
    gap: 8px;
    margin-bottom: 30px;
    padding-left: 20px;
    color: var(--muted);
    font-size: 14px;
}

.project-card-featured ul {
    color: #cbd5e1;
}

.project-link {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
    color: var(--primary);
    font-weight: 800;
}

.project-card-featured .project-link {
    color: #93c5fd;
}

.project-link span {
    transition: 0.2s ease;
}

.project-link:hover span {
    transform: translateX(5px);
}

/* Рекомендации */

.recommendations-grid {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.recommendation-card {
    position: relative;
    display: flex;
    min-height: 290px;
    flex-direction: column;
    padding: 32px;
    border: 1px solid var(--border);
    border-radius: var(--radius-medium);
    background: var(--surface);
    box-shadow: var(--small-shadow);
    transition: 0.25s ease;
}

.recommendation-card:hover {
    border-color: rgba(37, 99, 235, 0.35);
    transform: translateY(-6px);
}

.quote {
    height: 45px;
    color: var(--primary);
    font-family: Georgia, serif;
    font-size: 70px;
    line-height: 0.8;
}

.recommendation-card > p {
    margin: 14px 0 28px;
    color: var(--text);
    font-size: 15px;
    font-style: italic;
}

.recommendation-author {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: auto;
}

.author-avatar {
    display: grid;
    width: 45px;
    height: 45px;
    place-items: center;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    font-weight: 800;
}

.recommendation-author div:last-child {
    display: flex;
    flex-direction: column;
}

.recommendation-author strong {
    color: var(--dark);
    font-size: 14px;
}

.recommendation-author span {
    color: var(--muted);
    font-size: 12px;
}

/* Форма */

.recommendation-form-container {
    display: grid;
    margin-top: 70px;
    padding: 45px;
    gap: 60px;
    border: 1px solid var(--border);
    border-radius: var(--radius-large);
    background: var(--surface);
    box-shadow: var(--shadow);
    grid-template-columns: 0.8fr 1.2fr;
}

.form-information h2 {
    margin-bottom: 14px;
    color: var(--dark);
    font-size: 35px;
    line-height: 1.2;
}

.form-information > p:last-child {
    color: var(--muted);
}

form {
    display: grid;
    gap: 18px;
}

.form-group {
    display: grid;
    gap: 8px;
}

.form-group label {
    color: var(--dark);
    font-size: 14px;
    font-weight: 750;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid var(--border);
    border-radius: 12px;
    outline: none;
    background: #f8fafc;
    color: var(--text);
    transition: 0.2s ease;
}

.form-group textarea {
    min-height: 150px;
    resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: var(--primary);
    background: white;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.10);
}

.submit-button {
    justify-self: start;
}

/* Подвал */

.site-footer {
    padding: 35px 0;
    background: var(--dark);
    color: white;
}

.footer-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.footer-container strong {
    font-size: 17px;
}

.footer-container p {
    margin-top: 3px;
    color: #94a3b8;
    font-size: 13px;
}

/* Кнопка наверх */

.home-button {
    position: fixed;
    z-index: 800;
    right: 24px;
    bottom: 24px;
    display: grid;
    width: 52px;
    height: 52px;
    place-items: center;
    border-radius: 15px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    box-shadow: 0 15px 30px rgba(37, 99, 235, 0.30);
    color: white;
    font-size: 23px;
    font-weight: 800;
    transition: 0.2s ease;
}

.home-button:hover {
    transform: translateY(-4px);
}

/* Всплывающее окно */

.popup {
    position: fixed;
    z-index: 2001;
    top: 50%;
    left: 50%;
    width: min(420px, calc(100% - 32px));
    padding: 38px;
    border-radius: 24px;
    background: white;
    box-shadow: 0 30px 80px rgba(15, 23, 42, 0.25);
    text-align: center;
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, -45%) scale(0.95);
    transition: 0.25s ease;
}

.popup.show {
    opacity: 1;
    pointer-events: auto;
    transform: translate(-50%, -50%) scale(1);
}

.popup-icon {
    display: grid;
    width: 70px;
    height: 70px;
    margin: 0 auto 20px;
    place-items: center;
    border-radius: 50%;
    background: #dcfce7;
    color: var(--success);
    font-size: 32px;
    font-weight: 900;
}

.popup h2 {
    margin-bottom: 8px;
    color: var(--dark);
    font-size: 30px;
}

.popup p {
    margin-bottom: 24px;
    color: var(--muted);
}

.popup-overlay {
    position: fixed;
    z-index: 2000;
    inset: 0;
    background: rgba(15, 23, 42, 0.55);
    opacity: 0;
    pointer-events: none;
    backdrop-filter: blur(5px);
    transition: 0.25s ease;
}

.popup-overlay.show {
    opacity: 1;
    pointer-events: auto;
}

/* Адаптивность */

@media (max-width: 1050px) {
    .hero-container {
        gap: 40px;
        grid-template-columns: 1fr 0.8fr;
    }

    .skills-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .projects-grid,
    .recommendations-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 820px) {
    .section {
        padding: 75px 0;
    }

    .menu-button {
        display: block;
    }

    .navigation {
        position: absolute;
        top: 78px;
        right: 20px;
        left: 20px;
        display: none;
        flex-direction: column;
        align-items: stretch;
        padding: 15px;
        border: 1px solid var(--border);
        border-radius: 16px;
        background: white;
        box-shadow: var(--shadow);
    }

    .navigation.open {
        display: flex;
    }

    .nav-link {
        text-align: center;
    }

    .menu-button.active span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
    }

    .menu-button.active span:nth-child(2) {
        opacity: 0;
    }

    .menu-button.active span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
    }

    .hero {
        min-height: auto;
        padding-top: 65px;
    }

    .hero-container {
        grid-template-columns: 1fr;
    }

    .hero-content {
        text-align: center;
    }

    .hero-description {
        margin-inline: auto;
    }

    .hero-actions,
    .hero-statistics {
        justify-content: center;
    }

    .hero-visual {
        max-width: 550px;
        margin-inline: auto;
    }

    .recommendation-form-container {
        gap: 35px;
        grid-template-columns: 1fr;
    }
}

@media (max-width: 650px) {
    .container {
        width: min(100% - 28px, var(--container));
    }

    .section {
        padding: 60px 0;
    }

    .brand-text small {
        display: none;
    }

    .hero h1 {
        font-size: 42px;
    }

    .hero-description {
        font-size: 15px;
    }

    .hero-actions {
        flex-direction: column;
    }

    .hero-actions .button {
        width: 100%;
    }

    .hero-statistics {
        gap: 20px;
    }

    .statistic {
        min-width: 90px;
    }

    .profile-card {
        min-height: auto;
        padding: 30px 20px;
    }

    .profile-avatar {
        width: 125px;
        height: 125px;
        font-size: 40px;
    }

    .skills-grid,
    .projects-grid,
    .recommendations-grid {
        grid-template-columns: 1fr;
    }

    .skill-card p {
        min-height: auto;
    }

    .project-card {
        min-height: 430px;
        padding: 28px;
    }

    .recommendation-form-container {
        padding: 28px 20px;
    }

    .submit-button {
        width: 100%;
    }

    .footer-container {
        flex-direction: column;
        text-align: center;
    }

    .home-button {
        right: 16px;
        bottom: 16px;
        width: 48px;
        height: 48px;
    }
}