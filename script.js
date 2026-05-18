const year = document.getElementById("year");
const langToggle = document.getElementById("langToggle");
year.textContent = new Date().getFullYear();

const translations = {
  ru: {
    nav_courses: "Курсы",
    nav_directory: "Каталог",
    nav_market: "Маркет",
    explore_btn: "Смотреть",
    hero_kicker: "Креативная платформа",
    hero_title: "Учись. Находи.<br />Создавай лучшие сайты.",
    hero_intro: "Визуальный лендинг в духе витринных платформ: обучение, каталог студий и маркет цифровых ассетов.",
    courses_kicker: "Курсы",
    courses_title: "Освой веб-дизайн",
    featured: "Рекомендуем",
    course1_title: "Креативная режиссура для веба",
    course1_text: "Композиция, типографика, motion и storytelling для выразительных интерфейсов.",
    course2_title: "Системы компоновки",
    course2_text: "Сетки, ритм и визуальная иерархия.",
    course3_title: "Дизайн взаимодействия",
    course3_text: "Сценарии, анимации и UX-динамика.",
    directory_kicker: "Каталог",
    directory_title: "Студии и фрилансеры",
    tag_studio: "Студия",
    tag_freelancer: "Фрилансер",
    tag_team: "Команда",
    dir1_text: "Бренд-сайты и премиальный e-commerce.",
    dir2_text: "Арт-дирекшн и веб-типографика.",
    dir3_text: "Иммерсивные лендинги и кампании.",
    dir4_text: "Дизайн-системы и продуктовые сайты.",
    market_kicker: "Маркет",
    market_title: "Ассеты и шаблоны",
    m1_title: "Премиум UI Kit",
    m1_text: "120+ компонентов для редакционных сайтов.",
    m2_title: "Набор анимаций",
    m2_text: "Reveal-эффекты и переходы страниц.",
    m3_title: "Шаблон портфолио",
    m3_text: "Витринный макет с динамичными секциями.",
    footer_name: "A-Studio Showcase"
  },
  en: {
    nav_courses: "Courses",
    nav_directory: "Directory",
    nav_market: "Market",
    explore_btn: "Explore",
    hero_kicker: "Creative platform",
    hero_title: "Learn. Discover.<br />Build better websites.",
    hero_intro: "A visual landing page inspired by showcase platforms: education, studio directory and digital assets market.",
    courses_kicker: "Courses",
    courses_title: "Master Web Design",
    featured: "Featured",
    course1_title: "Creative Direction for the Web",
    course1_text: "Composition, typography, motion and storytelling for expressive interfaces.",
    course2_title: "Layout Systems",
    course2_text: "Grids, rhythm and visual hierarchy.",
    course3_title: "Interaction Design",
    course3_text: "Flows, animations and UX dynamics.",
    directory_kicker: "Directory",
    directory_title: "Studios & Freelancers",
    tag_studio: "Studio",
    tag_freelancer: "Freelancer",
    tag_team: "Team",
    dir1_text: "Brand websites and premium e-commerce.",
    dir2_text: "Art direction and web typography.",
    dir3_text: "Immersive landing pages and campaigns.",
    dir4_text: "Design systems and product websites.",
    market_kicker: "Market",
    market_title: "Assets & Templates",
    m1_title: "Premium UI Kit",
    m1_text: "120+ components for editorial websites.",
    m2_title: "Motion Pack",
    m2_text: "Reveal effects and page transitions.",
    m3_title: "Portfolio Template",
    m3_text: "Showcase layout with dynamic sections.",
    footer_name: "A-Studio Showcase"
  }
};

const applyLanguage = (lang) => {
  const dict = translations[lang] || translations.ru;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) {
      node.innerHTML = dict[key];
    }
  });
  langToggle.textContent = lang === "ru" ? "EN" : "RU";
  localStorage.setItem("siteLang", lang);
};

const savedLang = localStorage.getItem("siteLang") || "ru";
applyLanguage(savedLang);

langToggle.addEventListener("click", () => {
  const nextLang = document.documentElement.lang === "ru" ? "en" : "ru";
  applyLanguage(nextLang);
});

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

reveals.forEach((node) => observer.observe(node));
