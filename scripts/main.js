document.addEventListener("DOMContentLoaded", () => {
  const langButton = document.querySelector(".lang_button");
  const langDropdown = document.querySelector(".lang_dropdown");
  const navLang = document.querySelector(".nav_lang");

  // Toggle dropdown visibility
  langButton.addEventListener("click", () => {
    navLang.classList.toggle("active");
  });

  // Select a language
  langDropdown.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const selectedLang = e.target.textContent;
      langButton.textContent = selectedLang;
      navLang.classList.remove("active");
      console.log("Выбран язык:", e.target.dataset.lang); // Используйте этот код для обработки языка
    }
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", (e) => {
    if (!navLang.contains(e.target)) {
      navLang.classList.remove("active");
    }
  });
});

const paymentGroups = document.querySelectorAll(".payment_types");

paymentGroups.forEach((group) => {
  const buttons = group.querySelectorAll(".payment_type");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active_payment_type"));
      button.classList.add("active_payment_type");
    });
  });
});
