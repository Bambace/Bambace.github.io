import { useTranslation } from 'react-i18next';

export default function AboutMe() {
  const { t } = useTranslation();

  // Separar título para resaltar la última palabra en azul
  const titleText = t('aboutMe.title');
  const words = titleText.split(' ');
  const lastWord = words.pop();
  const firstPart = words.join(' ');

  return (
    <section id="about-me" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Título de la sección */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 tracking-tight">
        {firstPart} <span className="text-brand-blue">{lastWord}</span>
      </h2>

      {/* Tarjeta de Cristal con la biografía */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 w-full shadow-2xl hover:border-brand-blue/30 hover:shadow-brand-blue/5 transition-all duration-300">
        <div className="space-y-6 text-brand-light/80 text-base md:text-lg leading-relaxed text-justify md:text-left">
          <p>
            {t('aboutMe.para1')}
          </p>
          <p>
            {t('aboutMe.para2')}
          </p>
          <p>
            {t('aboutMe.para3')}
          </p>
          <p>
            {t('aboutMe.para4')}
          </p>
          <p>
            {t('aboutMe.para5')}
          </p>
        </div>
      </div>
    </section>
  );
}
