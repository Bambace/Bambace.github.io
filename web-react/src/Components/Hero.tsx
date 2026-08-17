import logoImg from "../assets/logo.jpg";
import { useTranslation } from "react-i18next";

function Hero() {
    const { t, i18n } = useTranslation();

    // Rutas dinámicas de los CVs en la carpeta public/static/cv/
    const cvPaths: { [key: string]: string } = {
        en: "/static/cv/CV_EN.pdf",
        es: "/static/cv/CV_ES.pdf",
        it: "/static/cv/CV_IT.pdf"
    };

    const currentCvPath = cvPaths[i18n.language] || cvPaths.en;

    return (
        <section className="flex flex-col items-center justify-center text-center min-h-[70vh] px-4">
            <img
                src={logoImg}
                alt="Eduardo Bambace"
                className="w-48 h-48 rounded-full object-cover ring-2 ring-brand-blue/30 hover:ring-white ring-offset-4 ring-offset-brand-navy shadow-lg shadow-brand-blue/20 transition-all duration-700 ease-in-out hover:[transform:rotateY(360deg)_scale(1.05)] hover:shadow-brand-blue/50 mb-8"
            />

            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                {t('hero.greeting')}
            </h1>
            <h2 className="text-xl md:text-3xl font-medium text-brand-white tracking-wide mb-8">
                {t('hero.subtitle')}
            </h2>

            <a
                href={currentCvPath}
                download={`CV_Eduardo_Bambace_${i18n.language.toUpperCase()}.pdf`}
                className="px-8 py-3 bg-brand-blue text-white font-bold rounded-full shadow-lg shadow-brand-blue/30 transition-all duration-300 hover:scale-105 hover:bg-brand-blue/80 hover:shadow-brand-blue/60 tracking-wider text-sm uppercase"
            >
                {t('hero.downloadCV')}
            </a>

        </section>
    )
}

export default Hero;
