/**
 * Hero Section Component
 * Design: Minimalismo Corporativo Contemporâneo
 * - Tipografia em escala dramática (Helvetica Bold para títulos, Avenir para textos)
 * - Layout alinhado à esquerda
 * - Foco total no CTA principal
 */

export default function HeroSection() {
  const handleCtaClick = () => {
    const element = document.querySelector('#precos');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-start overflow-hidden text-white pt-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/bglp.png')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
        {/* Linhas de crescimento sutis */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
            style={{
              top: `${i * 7}%`,
              width: `${20 + i * 2}%`,
              left: `${5 + i}%`,
              opacity: 0.05 + i * 0.02,
            }}
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-12">
        <div className="max-w-2xl">
          {/* Conteúdo textual */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-sm font-medium text-blue-100" style={{ fontFamily: 'Avenir, sans-serif' }}>
                  Planejamento Estratégico Comercial
                </span>
              </div>
              
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
                style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 700 }}
              >
                Pare de apagar incêndios e comece a escalar sua PME
              </h1>
            </div>
            
            <p 
              className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
              style={{ fontFamily: 'Avenir, sans-serif' }}
            >
              Saia da execução operacional e assuma o controle estratégico. Implementamos uma metodologia validada para organizar seus processos e acelerar suas vendas de forma previsível.
            </p>
            
            {/* CTA Principal */}
            <div className="pt-8">
              <button 
                onClick={handleCtaClick}
                className="group relative px-16 py-5 bg-white text-black font-semibold text-lg rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(96,165,250,0.35)] active:scale-95 inline-flex items-center justify-center min-w-[280px]"
                style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 600 }}
              >
                <span className="relative z-10">Quero meu planejamento</span>
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#60a5fa]/30 via-white/20 to-[#60a5fa]/30 blur-2xl animate-[pulse_3s_ease-in-out_infinite]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll sutil */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
