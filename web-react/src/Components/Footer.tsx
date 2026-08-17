import { useTranslation } from 'react-i18next';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  // Separar título para resaltar la última palabra en azul
  const titleText = t('footer.title');
  const words = titleText.split(' ');
  const lastWord = words.pop();
  const firstPart = words.join(' ');

  return (
    <footer id="contact" className="py-20 px-6 md:px-12 border-t border-brand-dark/30 bg-brand-navy/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Título de la sección */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4 tracking-tight">
          {firstPart} <span className="text-brand-blue">{lastWord}</span>
        </h2>
        <p className="text-center text-brand-light/60 max-w-md mx-auto mb-12 text-sm md:text-base">
          {t('footer.subtitle')}
        </p>

        {/* Canales de Contacto (Tarjetas de Cristal) */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-4xl mx-auto">
          {/* Tarjeta de LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/eduardo-gabriel-bambace-18335a184/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl flex items-center gap-4 shadow-lg hover:border-brand-blue/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-[#0077b5]/10 rounded-xl flex items-center justify-center p-2.5 border border-[#0077b5]/20 group-hover:bg-[#0077b5]/20 group-hover:border-[#0077b5]/30 transition-all">
              <img 
                src="/static/icons/icons8-linkedin.svg" 
                alt="LinkedIn" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="block text-[10px] text-brand-light/50 font-semibold tracking-wider uppercase">LinkedIn</span>
              <span className="text-white font-bold group-hover:text-brand-blue transition-colors">My Profile</span>
            </div>
          </a>

          {/* Tarjeta de GitHub */}
          <a 
            href="https://github.com/Bambace"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl flex items-center gap-4 shadow-lg hover:border-brand-blue/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center p-2.5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
              <img 
                src="/static/icons/icons8-github.svg" 
                alt="GitHub" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 filter invert"
              />
            </div>
            <div>
              <span className="block text-[10px] text-brand-light/50 font-semibold tracking-wider uppercase">GitHub</span>
              <span className="text-white font-bold group-hover:text-brand-blue transition-colors">My Profile</span>
            </div>
          </a>

          {/* Tarjeta de Correo */}
          <a 
            href="mailto:eduardobambace@gmail.com?subject=Asunto del correo&body=Texto del mensaje"
            className="flex-1 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl flex items-center gap-4 shadow-lg hover:border-brand-blue/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-[#ea4335]/10 rounded-xl flex items-center justify-center p-2.5 border border-[#ea4335]/20 group-hover:bg-[#ea4335]/20 group-hover:border-[#ea4335]/30 transition-all">
              <img 
                src="/static/icons/gmail-svgrepo-com.svg" 
                alt="Email" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="block text-[10px] text-brand-light/50 font-semibold tracking-wider uppercase">Email</span>
              <span className="text-white font-bold group-hover:text-brand-blue transition-colors">Send an email</span>
            </div>
          </a>
        </div>

        {/* Copyright inferior */}
        <div className="mt-16 pt-6 border-t border-brand-dark/30 text-center text-xs md:text-sm text-brand-light/40 font-medium">
          <p>© {currentYear} Eduardo Bambace. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
