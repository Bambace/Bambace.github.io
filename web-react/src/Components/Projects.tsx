import { useTranslation } from 'react-i18next';

interface ProjectItem {
  title: string;
  link: string;
  icon: string;
  descriptionKey: string; // Usamos una clave de traducción
}

const projectsData: ProjectItem[] = [
  {
    title: "Rock, Paper, Scissors",
    link: "https://bambace.github.io/project-rps/",
    icon: "/static/icons/rock-paper-scissors_6831874.png",
    descriptionKey: "projects.descriptions.rps"
  },
  {
    title: "Dragon Ball Characters",
    link: "https://bambace.github.io/apidragonball/",
    icon: "/static/icons/icons8-dragon-ball-48.png",
    descriptionKey: "projects.descriptions.dragonball"
  },
  {
    title: "Guestbook",
    link: "https://bambace.github.io/guestbook/",
    icon: "/static/icons/rating-rate-svgrepo-com.svg",
    descriptionKey: "projects.descriptions.guestbook"
  },
  {
    title: "Calculator",
    link: "https://bambace.github.io/calculadora/",
    icon: "/static/icons/calculator-svgrepo-com.svg",
    descriptionKey: "projects.descriptions.calculator"
  },
  {
    title: "Test JS",
    link: "https://bambace.github.io/testjs/",
    icon: "/static/icons/test-svgrepo-com.svg",
    descriptionKey: "projects.descriptions.testjs"
  },
  {
    title: "Memory Game",
    link: "https://bambace.github.io/MemoryGame/",
    icon: "/static/icons/cards-svgrepo-com.svg",
    descriptionKey: "projects.descriptions.memory"
  },
  {
    title: "React Shopping List",
    link: "https://bambace.github.io/react-shopping-list",
    icon: "/static/icons/check-square-svgrepo-com.svg",
    descriptionKey: "projects.descriptions.shopping"
  }
];

export default function Projects() {
  const { t } = useTranslation();

  // Separar título para resaltar la última palabra en azul
  const titleText = t('projects.title');
  const words = titleText.split(' ');
  const lastWord = words.pop();
  const firstPart = words.join(' ');

  return (
    <section id="projects" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4 tracking-tight">
        {firstPart} <span className="text-brand-blue">{lastWord}</span>
      </h2>
      <p className="text-center text-brand-light/60 max-w-lg mx-auto mb-16 text-sm md:text-base">
        {t('projects.subtitle')}
      </p>

      {/* Grid de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.title}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-between text-center shadow-xl hover:border-brand-blue/30 hover:shadow-brand-blue/5 transition-all duration-300 transform hover:-translate-y-2 group"
          >
            {/* Imagen/Icono del Proyecto */}
            <div className={`w-20 h-20 flex items-center justify-center rounded-2xl p-3 border border-white/5 mb-6 group-hover:border-brand-blue/20 transition-colors ${project.title === "React Shopping List" ? "bg-white" : "bg-brand-navy/60"}`}>
              <img
                src={project.icon}
                alt={project.title}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/80';
                }}
              />
            </div>

            {/* Título y Descripción */}
            <div className="flex-grow mb-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-brand-light/60 text-xs md:text-sm leading-relaxed">
                {t(project.descriptionKey)}
              </p>
            </div>

            {/* Botón de Enlace */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-blue/80 hover:bg-brand-blue text-white text-xs font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-brand-blue/30 uppercase tracking-wider"
            >
              {t('projects.viewProject')}
              {/* Icono de flecha saliente */}
              <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
