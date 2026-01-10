/**
 * Processo Section Component
 * Design: Minimalismo Corporativo Contemporâneo
 * - Timeline de etapas com numeração
 * - Layout claro e escaneável
 * - Hierarquia visual através de tamanho e espaçamento
 */

import { CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ProcessoSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Imersão e Diagnóstico',
      description: 'Analisamos profundamente seus números e processos para identificar onde o dinheiro está ficando pelo caminho.',
      features: ['Auditoria de processos', 'Análise de funil', 'Mapeamento de gargalos']
    },
    {
      number: '02',
      title: 'Desenho da Estratégia',
      description: 'Criamos o mapa de guerra personalizado para sua PME, com metas claras e táticas de execução imediata.',
      features: ['Plano de ação 90 dias', 'Definição de KPIs', 'Manual de táticas']
    },
    {
      number: '03',
      title: 'Execução Guiada',
      description: 'Ajudaremos a implementar as primeiras ações para garantir que a teoria se transforme em resultados práticos.',
      features: ['Treinamento de time', 'Ajustes semanais', 'Mentoria estratégica']
    },
    {
      number: '04',
      title: 'Otimização e Escala',
      description: 'Com a base sólida, ajustamos os detalhes para aumentar a eficiência e escalar seus resultados.',
      features: ['Análise de ROI', 'Escala de canais', 'Previsibilidade total']
    },
  ];

  return (
    <section id="processo" className="relative py-16 lg:py-20 overflow-hidden">
      {/* Fundo gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b0b1a] to-[#3331c1]" />
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#3331c1]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Título da seção */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#3331c1] animate-pulse"></span>
            <span className="text-sm font-medium text-[#3331c1]">
              Processo de Trabalho
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Como vamos construir sua{' '}
            <span className="bg-gradient-to-r from-[#3331c1] to-[#3331c1] bg-clip-text text-transparent">
              Maquina de previsibilidade comercial
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Uma jornada estruturada para transformar sua operação comercial em um sistema de alta performance.
          </p>
        </div>

        {/* Timeline interativa */}
        <div className="relative">
          {/* Linha de conexão */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3331c1]/30 via-[#3331c1]/50 to-[#3331c1]/30 transform md:translate-x-[-1px] hidden md:block" />

          {/* Passos - layout vertical em mobile, horizontal em desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  activeStep === index 
                    ? 'transform md:-translate-y-2' 
                    : 'hover:transform md:hover:-translate-y-1'
                }`}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Card da etapa */}
                <div className={`relative h-full rounded-xl p-6 transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-white/10 backdrop-blur-md border border-[#3331c1]/30 shadow-lg shadow-[#3331c1]/20'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20'
                }`}>
                  {/* Indicador na linha (desktop) */}
                  <div className="absolute -left-4 md:-left-1/2 top-6 transform md:translate-x-[-2px] hidden md:block">
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-[#3331c1] shadow-lg shadow-[#3331c1]/50 scale-125'
                        : 'bg-white/40 group-hover:bg-white/60'
                    }`} />
                  </div>

                  {/* Número da etapa */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-gradient-to-br from-[#3331c1] to-[#3331c1] text-white'
                      : 'bg-white/10 text-white/60'
                  }`}>
                    <span className="text-lg font-bold">{step.number}</span>
                  </div>

                  {/* Título e descrição */}
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    activeStep === index ? 'text-white' : 'text-white/90'
                  }`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${
                    activeStep === index ? 'text-gray-300' : 'text-gray-400'
                  }`}>
                    {step.description}
                  </p>

                  {/* Features da etapa */}
                  <div className="space-y-2">
                    {step.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          activeStep === index ? 'bg-[#3331c1]' : 'bg-white/30'
                        }`} />
                        <span className={`text-xs transition-colors duration-300 ${
                          activeStep === index ? 'text-gray-300' : 'text-gray-500'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Indicador ativo */}
                  {activeStep === index && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-4 h-4 bg-[#3331c1] rotate-45"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navegação entre passos (mobile) */}
          <div className="flex justify-center items-center gap-4 mt-8 md:hidden">
            <button
              onClick={() => setActiveStep(prev => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            
            <div className="flex gap-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-[#3331c1] w-6'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => setActiveStep(prev => (prev < steps.length - 1 ? prev + 1 : 0))}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Indicador de etapa ativa (desktop) */}
        <div className="hidden md:flex justify-center items-center gap-4 mt-12">
          <span className="text-sm text-gray-400 font-medium">
            Etapa {activeStep + 1} de {steps.length}
          </span>
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-8 h-1 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-gradient-to-r from-[#3331c1] to-[#3331c1]'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-6 lg:p-8 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 max-w-3xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                Pronto para o próximo nível?
              </h3>
              <p className="text-gray-300 text-sm">
                Não deixe o crescimento da sua empresa ao acaso. Garanta sua vaga para o próximo ciclo de planejamento.
              </p>
            </div>
            
            <a 
              href="https://chk.eduzz.com/E05X5474WX"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 bg-gradient-to-r from-[#3331c1] to-[#3331c1] text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#3331c1]/25 transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap text-center"
            >
              <span>Quero meu planejamento</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
