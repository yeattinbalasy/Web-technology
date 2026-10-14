const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const opened = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
  menuButton.setAttribute('aria-label', opened ? 'Закрыть меню' : 'Открыть меню');
  document.body.classList.toggle('menu-open', opened);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Открыть меню');
    document.body.classList.remove('menu-open');
  });
});

const dateInput = document.querySelector('input[name="date"]');
dateInput.min = new Date().toISOString().split('T')[0];

const form = document.querySelector('#booking-form');
const formMessage = document.querySelector('#form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const requiredFields = [...form.querySelectorAll('[required]')];
  requiredFields.forEach((field) => field.classList.toggle('invalid', !field.value.trim()));

  if (!form.checkValidity()) {
    formMessage.textContent = 'Заполните, пожалуйста, все поля формы.';
    formMessage.style.color = '#cc3344';
    form.querySelector(':invalid')?.focus();
    return;
  }

  const clientName = form.elements.name.value.trim();
  formMessage.textContent = `${clientName}, заявка принята! Мы свяжемся с вами для подтверждения.`;
  formMessage.style.color = '#16864b';
  form.reset();
});

form.addEventListener('input', (event) => {
  if (event.target.matches('[required]')) event.target.classList.remove('invalid');
});

const animatedItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  animatedItems.forEach((item) => observer.observe(item));
} else {
  animatedItems.forEach((item) => item.classList.add('visible'));
}
