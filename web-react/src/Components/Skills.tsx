import { useTranslation } from "react-i18next";

interface TechItem {
    name: string;
    icon: string;
}

interface SkillCategory {
    title: string;
    items: TechItem[];
}

const skillCategories: SkillCategory[] = [
    {
        title: "Front-end",
        items: [
            { name: "HTML", icon: "/static/icons/html.svg" },
            { name: "CSS", icon: "/static/icons/css.svg" },
            { name: "JavaScript", icon: "/static/icons/javascript.svg" },
            { name: "React", icon: "/static/icons/react-svgrepo-com.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Bootstrap", icon: "/static/icons/bootstrap-4.svg" }
        ]
    },
    {
        title: "Back-end",
        items: [
            { name: "Python", icon: "/static/icons/python.svg" },
            { name: "Flask", icon: "/static/icons/flask.svg" },
            { name: "Java", icon: "/static/icons/java.svg" }
        ]
    },
    {
        title: "Database",
        items: [
            { name: "MySQL", icon: "/static/icons/mysql-logo-svgrepo-com.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "AS400 (DB2)", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
            { name: "DBeaver", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg" },
            { name: "SQLAlchemy", icon: "/static/icons/simple-icons--sqlalchemy.svg" }
        ]
    },
    {
        title: "DevOps & Version Control",
        items: [
            { name: "Git", icon: "/static/icons/Git.svg" },
            { name: "GitHub", icon: "/static/icons/icons8-github.svg" },
            { name: "Azure DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" }
        ]
    }
];

interface LanguageItem {
    key: string;
    levelKey: string;
    percentage: number;
}

const languages: LanguageItem[] = [
    { key: "spanish", levelKey: "native", percentage: 100 },
    { key: "italian", levelKey: "advanced", percentage: 80 },
    { key: "english", levelKey: "intermediate", percentage: 60 }
];

export default function Skills() {
    const { t } = useTranslation();
    const titleText = t('skills.title');
    const words = titleText.split(' ');
    const lastWord = words.pop();
    const firstPart = words.join(' ');

    return (
        <section id="skills" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 tracking-tight">
                {firstPart} <span className="text-brand-blue">{lastWord}</span>
            </h2>

            {/* Grid de Categorías en Filas Horizontales */}
            <div className="space-y-6 mb-16">
                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-xl hover:border-brand-blue/30 hover:shadow-brand-blue/5 transition-all duration-300"
                    >
                        {/* Título de Categoría a la izquierda */}
                        <h3 className="text-xl font-bold text-white md:w-1/4 text-center md:text-left border-b md:border-b-0 md:border-r border-brand-dark/30 pb-4 md:pb-0 md:pr-6">
                            {category.title}
                        </h3>

                        {/* Tecnologías alineadas a la derecha */}
                        <div className="flex flex-wrap gap-6 justify-center md:justify-start md:w-3/4">
                            {category.items.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex flex-col items-center group relative cursor-pointer"
                                >
                                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-brand-navy/40 rounded-xl p-2 border border-brand-dark/20 transition-all duration-300 group-hover:border-brand-blue/40 group-hover:shadow-[0_0_12px_rgba(22,72,147,0.3)]">
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/50';
                                            }}
                                        />
                                    </div>
                                    <span className="text-[10px] text-brand-light/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold tracking-wider uppercase">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Sección de Idiomas */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
                <h3 className="text-2xl font-bold text-white text-center mb-8 tracking-wide">
                    {t('skills.languages')}
                </h3>

                <div className="space-y-6">
                    {languages.map((lang) => (
                        <div key={lang.key} className="space-y-2">
                            <div className="flex justify-between items-center text-sm md:text-base">
                                <span className="font-semibold text-brand-light">{t(`skills.langNames.${lang.key}`)}</span>
                                <span className="text-brand-blue font-bold text-xs md:text-sm tracking-wider uppercase">
                                    {t(`skills.langLevels.${lang.levelKey}`)}
                                </span>
                            </div>
                            <div className="w-full bg-brand-dark/50 rounded-full h-3 p-[2px] border border-brand-dark/30 overflow-hidden">
                                <div
                                    className="bg-gradient-to-r from-brand-blue to-cyan-400 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(22,72,147,0.3)]"
                                    style={{ width: `${lang.percentage}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}