/**
 * Provas Sociais Section Component
 * Design: Minimalismo Corporativo Contemporâneo
 * - Cards de depoimentos com avatares
 * - Layout de confiança e autoridade
 * - Tipografia clara e legível
 */

import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ProvasSociaisSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      name: 'Ricardo Oliveira',
      role: 'CEO',
      company: 'TechFlow Soluções',
      avatar: 'RO',
      rating: 5,
      text: 'O planejamento nos deu a clareza que faltava. Em 3 meses, organizamos o time e batemos recordes de vendas que pareciam impossíveis.',
      image: '👨‍💼'
    },
    {
      name: 'Fernanda Costa',
      role: 'Fundadora',
      company: 'Studio Design Co.',
      avatar: 'FC',
      rating: 5,
      text: 'Eu vivia apagando incêndios. Hoje tenho um processo comercial que roda sozinho e me permite focar na estratégia do negócio.',
      image: '👩‍💼'
    },
    {
      name: 'Marcos Silveira',
      role: 'Diretor Comercial',
      company: 'Logística Express',
      avatar: 'MS',
      rating: 5,
      text: 'A metodologia do Efeito Volante é real. O começo exige esforço, mas depois que a máquina engrena, o crescimento é inevitável.',
      image: '👨‍💻'
    },
    {
      name: 'Juliana Mendes',
      role: 'Gerente Geral',
      company: 'Mendes Varejo',
      avatar: 'JM',
      rating: 5,
      text: 'Finalmente temos previsibilidade. Sei exatamente quanto vamos vender no próximo mês e onde investir para escalar.',
      image: '👩‍🎓'
    },
  ];

  const logos = [
    { name: 'Lorem Corp', initials: 'LC', color: 'from-blue-500/20 to-blue-600/10' },
    { name: 'Ipsum Group', initials: 'IG', color: 'from-purple-500/20 to-purple-600/10' },
    { name: 'Dolor Solutions', initials: 'DS', color: 'from-cyan-500/20 to-cyan-600/10' },
    { name: 'Sit Amet Tech', initials: 'SAT', color: 'from-indigo-500/20 to-indigo-600/10' },
    { name: 'Consectetur Ltd', initials: 'CL', color: 'from-violet-500/20 to-violet-600/10' },
    { name: 'Adipiscing Inc', initials: 'AI', color: 'from-blue-400/20 to-blue-500/10' },
  ];

  const stats = [
    { value: '150+', label: 'Empresas', description: 'Planejadas e estruturadas' },
    { value: '94%', label: 'Satisfação', description: 'NPS dos nossos clientes' },
    { value: '3x', label: 'Crescimento', description: 'Média de escala em 1 ano' },
    { value: 'R$ 10M+', label: 'Gerados', description: 'Em novas vendas anuais' },
  ];

  // Auto-play para o carrossel
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <section id="clientes" className="relative py-16 lg:py-20 overflow-hidden">
      {/* Fundo gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b0b1a] to-[#3331c1]" />
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Título da seção */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-sm font-medium text-blue-100">
              Provas Sociais
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Quem já transformou sua{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              Realidade Comercial
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Veja o que donos de empresas dizem sobre a clareza e os resultados obtidos após o planejamento.
          </p>
        </div>

        {/* Logos das empresas */}
        <div className="mb-16 lg:mb-20">
          <p className="text-center text-gray-400 font-medium mb-8 text-sm uppercase tracking-wider">
            Confiado por empresas líderes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`group relative h-24 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${logo.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative h-full flex flex-col items-center justify-center p-4">
                  <div className="text-2xl font-bold text-white mb-1">
                    {logo.initials}
                  </div>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    {logo.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carrossel de depoimentos */}
        <div className="mb-16 lg:mb-20">
          <div className="relative max-w-4xl mx-auto">
            <Quote className="absolute -top-6 -left-6 w-12 h-12 text-blue-500/20 rotate-180" />
            <Quote className="absolute -bottom-6 -right-6 w-12 h-12 text-blue-500/20" />
            
            <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* Informações do cliente */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-3xl">
                      {testimonials[activeIndex].image}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <span className="text-sm font-bold text-white">✓</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center lg:text-left">
                    <h4 className="text-xl font-bold text-white">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-sm text-blue-300">
                      {testimonials[activeIndex].role}
                    </p>
                    <p className="text-xs text-gray-400">
                      {testimonials[activeIndex].company}
                    </p>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start gap-1 mt-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < testimonials[activeIndex].rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Texto do depoimento */}
                <div className="flex-1">
                  <p className="text-lg lg:text-xl text-gray-300 italic leading-relaxed">
                    "{testimonials[activeIndex].text}"
                  </p>
                  
                  {/* Controles do carrossel */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setActiveIndex(index);
                            setAutoPlay(false);
                            setTimeout(() => setAutoPlay(true), 10000);
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            activeIndex === index
                              ? 'w-8 bg-gradient-to-r from-blue-400 to-blue-300'
                              : 'bg-white/30 hover:bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={prevTestimonial}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-white/20 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-3xl" />
              
              <div className="relative">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-1">
                  {stat.label}
                </h4>
                <p className="text-sm text-gray-400">
                  {stat.description}
                </p>
              </div>
              
              {/* Barra de progresso decorativa */}
              <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: index === 0 ? '100%' : 
                           index === 1 ? '98%' : 
                           index === 2 ? '90%' : '100%' 
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 lg:p-10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              Sua empresa merece um futuro planejado
            </h3>
            <p className="text-gray-300 max-w-lg">
              Junte-se ao grupo de empresários que decidiram sair do amadorismo e profissionalizar sua escala comercial.
            </p>
            <button className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center gap-2">
              <span>Quero meu planejamento</span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}