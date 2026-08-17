import { useState } from "react";
import { useTranslation } from "react-i18next";

const menuItems = [
    {
        "key": "nav.aboutMe",
        "link": "#about-me"
    },
    {
        "key": "nav.skills",
        "link": "#skills"
    },
    {
        "key": "nav.projects",
        "link": "#projects"
    },
    {
        "key": "nav.contact",
        "link": "#contact"
    }
]

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { t, i18n } = useTranslation();

    return (
        <nav className="flex justify-center w-full relative z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-brand-light focus:outline-none mt-6"
            >
                {/* Icono simple de hamburguesa */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Menú de escritorio: siempre visible en pantallas grandes, oculto en móviles */}
            <ul className="hidden md:flex md:items-center md:gap-8 mt-6 mx-auto mb-6">
                {menuItems.map((item) => (
                    <li key={item.key}>
                        <a href={item.link} className="text-sm font-semibold tracking-widest uppercase inline-block transition-all duration-200 hover:text-brand-blue hover:scale-110"
                        >
                            {t(item.key)}
                        </a>
                    </li>
                ))}
                
                {/* Selector de idioma premium para escritorio (Dropdown estilo foto) */}
                <li className="ml-6 relative border-l border-white/10 pl-6 flex items-center">
                    <button
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-xs font-bold uppercase tracking-wider text-brand-light cursor-pointer select-none"
                    >
                        {i18n.language}
                        <svg
                            className={`w-3 h-3 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {isLangOpen && (
                        <div className="absolute top-full right-0 mt-2 w-44 bg-[#1B213B]/95 backdrop-blur-lg border border-white/10 rounded-2xl p-2 shadow-2xl flex flex-col gap-1 z-50">
                            {[
                                { code: 'en', label: 'English' },
                                { code: 'es', label: 'Español' },
                                { code: 'it', label: 'Italiano' }
                            ].map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        i18n.changeLanguage(lang.code);
                                        setIsLangOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm flex items-center justify-between transition-all ${
                                        i18n.language === lang.code
                                            ? 'bg-white/5 text-white font-semibold'
                                            : 'text-brand-light/70 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {lang.label}
                                    {i18n.language === lang.code && (
                                        <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </li>
            </ul>

            {/* Menú de móvil: solo se muestra si isOpen es true */}
            {isOpen && (
                <ul className="flex flex-col md:hidden absolute top-16 left-0 w-full bg-brand-navy/95 backdrop-blur-md border-b border-brand-dark/40 py-4 px-6 gap-4 shadow-xl">
                    {menuItems.map((item) => (
                        <li key={item.key}>
                            <a
                                href={item.link}
                                onClick={() => setIsOpen(false)}
                                className="block hover:text-brand-blue transition-colors font-medium"
                            >
                                {t(item.key)}
                            </a>
                        </li>
                    ))}
                    
                    {/* Selector de idioma premium para móviles */}
                    <li className="border-t border-white/10 pt-4 flex justify-center gap-4">
                        {['en', 'es', 'it'].map((lang) => (
                            <button
                                key={lang}
                                onClick={() => {
                                    i18n.changeLanguage(lang);
                                    setIsOpen(false);
                                }}
                                className={`text-xs font-bold px-3 py-1.5 rounded-md uppercase transition-all ${
                                    i18n.language === lang
                                        ? 'bg-brand-blue text-white shadow-md'
                                        : 'text-brand-light/50 hover:text-brand-light'
                                }`}
                            >
                                {lang}
                            </button>
                        ))}
                    </li>
                </ul>
            )}

        </nav>
    )
}
export default Navbar;