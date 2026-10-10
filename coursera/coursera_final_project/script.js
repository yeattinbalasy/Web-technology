document.addEventListener("DOMContentLoaded", function () {
    // Мобильное меню
    const menuButton = document.querySelector(
        "#menuToggle, .menu-toggle, .menu-button"
    );

    const navigation = document.querySelector(
        "#navMenu, .nav-menu, .nav-links"
    );

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            navigation.classList.toggle("active");

            const isOpened = navigation.classList.contains("active");
            menuButton.setAttribute("aria-expanded", isOpened);
        });

        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Плавный переход по ссылкам
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const address = link.getAttribute("href");

            if (!address || address === "#") {
                return;
            }

            const section = document.querySelector(address);

            if (section) {
                event.preventDefault();

                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Форма добавления рекомендации
    const form = document.querySelector(
        "#recommendationForm, #recommendation-form, .recommendation-form"
    );

    const input = document.querySelector(
        "#recommendationText, #recommendation-text, textarea[name='recommendation']"
    );

    const recommendationsContainer = document.querySelector(
        "#recommendationsList, #recommendations-list, .recommendations-grid"
    );

    if (form && input && recommendationsContainer) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const recommendationText = input.value.trim();

            if (recommendationText.length < 5) {
                input.focus();
                return;
            }

            const recommendation = document.createElement("article");
            recommendation.className = "recommendation-card";

            const text = document.createElement("p");
            text.textContent = `“${recommendationText}”`;

            const author = document.createElement("strong");
            author.textContent = "Новая рекомендация";

            recommendation.appendChild(text);
            recommendation.appendChild(author);
            recommendationsContainer.appendChild(recommendation);

            form.reset();
            showPopup();
        });
    }

    // Кнопка возврата наверх
    const homeButton = document.querySelector(
        "#homeButton, #home-button, .home-button"
    );

    if (homeButton) {
        homeButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        window.addEventListener("scroll", function () {
            homeButton.classList.toggle("visible", window.scrollY > 350);
        });
    }
});

// Уведомление появляется только после добавления рекомендации
function showPopup() {
    const popup = document.querySelector(
        "#popup, .popup, #recommendationPopup"
    );

    if (!popup) {
        alert("Спасибо! Ваша рекомендация успешно добавлена.");
        return;
    }

    popup.classList.add("show");

    window.setTimeout(function () {
        popup.classList.remove("show");
    }, 3000);
}