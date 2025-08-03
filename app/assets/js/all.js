"use strict";

// Projetos atualizados para Fernando César
let projects = [
  {
    id: 1,
    urlImage: "assets/images/seinfra-portal.png",
    urlGitHub: "",
    urlLink: "#",
    name: "Portal Seinfra",
    language: "WordPress · PHP · CSS · JavaScript",
    description: "Desenvolvimento completo do portal institucional da Seinfra, incluindo temas customizados, plugins específicos, seções de notícias, banners rotativos e integração com sistemas internos.",
    status: "Em andamento"
  },
  {
    id: 2,
    urlImage: "assets/images/intranet-system.png",
    urlGitHub: "",
    urlLink: "#",
    name: "Sistema de Transporte",
    language: "Python · PostgreSQL · APIs",
    description: "Desenvolvimento de sistema de integração com APIs de transporte público de BH, incluindo sincronização de dados, backup automatizado e gerenciamento de banco de dados PostgreSQL.",
    status: "Concluído"
  },
  {
    id: 3,
    urlImage: "assets/images/intranet-system.png",
    urlGitHub: "",
    urlLink: "#",
    name: "Intranet Corporativa",
    language: "SharePoint · Power Apps · Power Automate",
    description: "Criação e manutenção da Intranet corporativa com páginas dinâmicas, aplicativos Power Apps, fluxos automatizados e integração com Microsoft 365.",
    status: "Concluído"
  },
  {
    id: 4,
    urlImage: "assets/images/automation-tools.png",
    urlGitHub: "",
    urlLink: "#",
    name: "Sistema Mineirinho",
    language: "Python · Web Development · Database",
    description: "Desenvolvimento de sistema de controle de gestão e concessão de equipamentos públicos, incluindo protótipo funcional, servidor web e banco de dados online.",
    status: "Em andamento"
  },
  {
    id: 5,
    urlImage: "assets/images/ai-solutions.png",
    urlGitHub: "",
    urlLink: "#",
    name: "Site Artemig",
    language: "WordPress · PHP · Web Development",
    description: "Desenvolvimento completo do site institucional da Artemig, incluindo páginas específicas, configuração de servidor web e integração com sistemas existentes.",
    status: "Em andamento"
  },
  {
    id: 6,
    urlImage: "assets/images/data-analysis.png",
    urlGitHub: "",
    urlLink: "#",
    name: "Formulário de Usuário",
    language: "Python · Web Development · PDF",
    description: "Criação de sistema online para formulário de criação de usuário com geração automática de PDF e integração com banco de dados PostgreSQL.",
    status: "Concluído"
  }
];

let othersProjects = [
  {
    id: 7,
    urlImage: "assets/images/automation-tools.png",
    urlGitHub: "",
    urlLink: "#",
    name: "Automação de Backup",
    language: "Python · Scripts · Compressão",
    description: "Desenvolvimento de scripts Python para backup automatizado de dados, compressão de arquivos e sincronização de sistemas críticos.",
    status: "Concluído"
  },
  {
    id: 8,
    urlImage: "assets/images/ai-solutions.png",
    urlGitHub: "",
    urlLink: "#",
    name: "Treinamentos Microsoft 365",
    language: "Teams · Power BI · Capacitação",
    description: "Criação e aplicação de treinamentos para Microsoft Teams, Power BI e ferramentas Microsoft 365, incluindo capacitação de equipes.",
    status: "Concluído"
  }
];

// Função para listar todos os projetos
function listAllProjects() {
  let projectContainer = document.getElementById("card-project");
  let otherContainer = document.getElementById("other-project");
  
  if (!projectContainer || !otherContainer) {
    console.error("Containers de projetos não encontrados");
    return;
  }

  // Limpar containers antes de adicionar
  projectContainer.innerHTML = '';
  otherContainer.innerHTML = '';

  projects.forEach(project => {
    const githubLink = project.urlGitHub ? 
      `<a href="${project.urlGitHub}" alt="Github" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="app-icon--github">
        <path class="path" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 
        6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 
        0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 
        6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>` : "";

    const projectLink = project.urlLink && project.urlLink !== "#" ? 
      `<a href="${project.urlLink}" alt="Abrir" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="app-icon--open">
          <path class="path" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline class="path" points="15 3 21 3 21 9"></polyline>
          <line class="path" x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>` : "";

    const statusClass = project.status === "Em andamento" ? "status-ongoing" : "status-completed";
    const cardHTML = `<div class="card">
      <div class="card-content">
        <div class="card-content--title">
          <h4 class="card-title">${project.name}</h4>
          <div class="app-icon">
            ${githubLink}
            ${projectLink}
          </div>
        </div>
        <p class="card-text mt-3">${project.description}</p>
        <p class="card-subtitle">${project.language}</p>
        <span class="project-status ${statusClass}">${project.status}</span>
      </div>
    </div>`;

    const cardElement = document.createElement("div");
    cardElement.innerHTML = cardHTML;
    projectContainer.appendChild(cardElement.firstChild);
  });

  othersProjects.forEach(project => {
    const githubLink = project.urlGitHub ? 
      `<a href="${project.urlGitHub}" alt="Github" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="app-icon--github">
        <path class="path" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 
        6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 
        0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 
        6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>` : "";

    const projectLink = project.urlLink && project.urlLink !== "#" ? 
      `<a href="${project.urlLink}" alt="Abrir" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="app-icon--open">
          <path class="path" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline class="path" points="15 3 21 3 21 9"></polyline>
          <line class="path" x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>` : "";

    const statusClass = project.status === "Em andamento" ? "status-ongoing" : "status-completed";
    const cardHTML = `<div class="card">
      <div class="card-content">
        <div class="card-content--title">
          <h4 class="card-title">${project.name}</h4>
          <div class="app-icon">
            ${githubLink}
            ${projectLink}
          </div>
        </div>
        <p class="card-text mt-3">${project.description}</p>
        <p class="card-subtitle">${project.language}</p>
        <span class="project-status ${statusClass}">${project.status}</span>
      </div>
    </div>`;

    const cardElement = document.createElement("div");
    cardElement.innerHTML = cardHTML;
    otherContainer.appendChild(cardElement.firstChild);
  });
}

// Função para mostrar mais projetos
function seeMoreProjects() {
  const otherProject = document.getElementById("other-project");
  const buttonSeeMore = document.getElementById("buttonSeeMore");
  const projectsSection = document.getElementById("projects");
  
  if (!otherProject || !buttonSeeMore) return;
  
  if (otherProject.classList.contains("hideContent")) {
    otherProject.classList.remove("hideContent");
    otherProject.classList.add("showContent");
    buttonSeeMore.innerText = "Ver menos";
  } else {
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
    otherProject.classList.add("hideContent");
    otherProject.classList.remove("showContent");
    buttonSeeMore.innerText = "Ver mais";
  }
}



// Função para selecionar empresa nas abas
function selectEnterprise(evt, enterpriseName) {
  let i, tabcontent, tablinks;
  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  const targetTab = document.getElementById(enterpriseName);
  if (targetTab) {
    targetTab.style.display = "block";
  }
  
  if (evt && evt.currentTarget) {
    evt.currentTarget.className += " active";
  }
}

// Funções de tema
function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.documentElement.className = theme;
}

function changeTheme() {
  if (localStorage.getItem("theme") === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}

// Função para toggle do menu mobile
function classToggle() {
  document.querySelectorAll(".navbar-items").forEach(item => {
    item.classList.toggle("navbar-show--toggle");
  });
}

// Função para animação do botão hamburger
function changeButton() {
  document.querySelector(".container-button").classList.toggle("change");
}

// Função para esconder/mostrar navbar no scroll
let prevScrollPos = window.pageYOffset;

function hideNavbar() {
  let currentScrollPos = window.pageYOffset;
  let navbar = document.getElementById("navbar");
  
  if (!navbar) return;
  
  navbar.setAttribute("class", "navbar--show");
  
  if (currentScrollPos < prevScrollPos) {
    navbar.style.top = "0";
    navbar.setAttribute("class", "navbar--show");
    if (currentScrollPos === 0) {
      navbar.removeAttribute("class", "navbar--show");
    }
  }
  
  prevScrollPos = currentScrollPos;
}

// Animação de texto digitado
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["Python.", "IA.", "Back-end.", "Inovação."];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (!typedTextSpan || !cursorSpan) return;
  
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (!typedTextSpan || !cursorSpan) return;
  
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}

// Scroll animations
const scrollGroups = document.querySelectorAll('[class*="scroll-group"]');
scrollGroups.forEach(group => {
  let className = group.className.split(" ");
  for (let i in className) {
    if (className[i].match(/^scroll-group-/)) {
      let targetClass = className[i].split("--")[1];
      group.querySelectorAll("." + targetClass).forEach(item => {
        item.classList.add("scroll");
      });
      break;
    }
  }
});

const scrollList = document.querySelectorAll(".scroll, [class*='scroll-group']");
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("scrolled-in");
    }
  });
};

const options = {};
const myObserver = new IntersectionObserver(callback, options);
scrollList.forEach(item => {
  myObserver.observe(item);
});

// Event Listeners
document.addEventListener("DOMContentLoaded", function() {
  // Inicializar funções principais
  listAllProjects();
  
  // Configurar tema
  if (localStorage.getItem("theme") === "dark") {
    setTheme("dark");
    const switchElement = document.getElementById("switch");
    if (switchElement) {
      switchElement.checked = true;
    }
  } else {
    setTheme("light");
    const switchElement = document.getElementById("switch");
    if (switchElement) {
      switchElement.checked = false;
    }
  }
  
  // Ativar primeira aba por padrão
  const defaultOpen = document.getElementById("defaultOpen");
  if (defaultOpen) {
    defaultOpen.click();
  }
  
  // Iniciar animação de texto
  if (textArray.length && typedTextSpan) {
    setTimeout(type, newTextDelay + 250);
  }
});

// Event listeners para navegação
const navbarToggle = document.querySelector(".navbar-toggle");
if (navbarToggle) {
  navbarToggle.addEventListener("click", classToggle);
}

const listItems = document.querySelectorAll("#nav ul li");
listItems.forEach(item => {
  item.addEventListener("click", () => {
    const containerButton = document.querySelector(".container-button");
    document.querySelectorAll(".navbar-items").forEach(navItem => {
      navItem.classList.remove("navbar-show--toggle");
    });
    if (containerButton) {
      containerButton.classList.remove("change");
    }
  });
});

// Scroll event
window.onscroll = function() {
  hideNavbar();
};

// Service Worker (opcional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("../../serviceWorker.js")
      .then(registration => console.log("Service worker registered"))
      .catch(error => console.log("Service worker not registered", error));
  });
}