const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-navigation");

const recommendationForm = document.getElementById(
  "recommendation-form"
);

const recommendationsList = document.getElementById(
  "recommendations-list"
);

const popup = document.getElementById(
  "recommendation-popup"
);

let popupTimer;


/* Работа мобильного меню */

menuButton.addEventListener("click", function () {
  const isOpen = navigation.classList.toggle("open");

  menuButton.setAttribute(
    "aria-expanded",
    String(isOpen)
  );
});


/* Закрытие мобильного меню после выбора раздела */

navigation.addEventListener("click", function (event) {
  if (event.target.matches("a")) {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});


/* Показ уведомления */

function showPopup() {
  clearTimeout(popupTimer);

  popup.classList.add("visible");
  popup.setAttribute("aria-hidden", "false");

  popupTimer = setTimeout(function () {
    popup.classList.remove("visible");
    popup.setAttribute("aria-hidden", "true");
  }, 3500);
}


/* Отправка новой рекомендации */

recommendationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById(
    "recommender-name"
  );

  const recommendationInput = document.getElementById(
    "recommendation-text"
  );

  const recommendationText =
    recommendationInput.value.trim();

  /*
    Если рекомендация пустая, она не добавляется,
    а функция showPopup() не вызывается.
  */

  if (recommendationText === "") {
    recommendationInput.focus();
    return;
  }

  /* Создание новой карточки рекомендации */

  const recommendation =
    document.createElement("blockquote");

  recommendation.className = "recommendation-card";

  const text = document.createElement("p");

  text.textContent = `«${recommendationText}»`;

  const author = document.createElement("footer");

  author.textContent =
    `— ${nameInput.value.trim() || "Посетитель портфолио"}`;

  recommendation.append(text, author);

  /* Добавление рекомендации на страницу */

  recommendationsList.append(recommendation);

  /* Очистка формы */

  recommendationForm.reset();

  /* Переход к добавленной рекомендации */

  recommendation.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  /*
    showPopup вызывается только здесь:
    после успешного добавления рекомендации.
  */

  showPopup();
});