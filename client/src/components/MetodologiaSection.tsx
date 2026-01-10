/**
 * Metodologia Section Component
 * Design: Minimalismo Corporativo Contemporâneo
 * - Gráfico exponencial visual
 * - Blocos/cards representando pilares
 * - Ênfase em crescimento planejado
 */

import { TrendingUp, Zap, Target, Layers } from 'lucide-react';

export default function MetodologiaSection() {
  const pillars = [
    {
      icon: Target,
      title: 'Diagnóstico',
      description: 'Você ganhará um diagnóstico de toda sua operação de marketing vendas.',
    },
    {
      icon: Zap,
      title: 'Estratégia',
      description: 'Criaremos junto contigo a sua estratégia de escala de receita para o ano de 2026.',
    },
    {
      icon: Layers,
      title: 'Execução',
      description: 'Criaremos um calendário para você ter previsibilidade de onde você deve colocar energia e como você vai fazer pra obter resultado em cima da energia que foi colocado.',
    },
    {
      icon: TrendingUp,
      title: 'Tração exponencial',
      description: 'O último passo será você alcançar a atração exponencial onde o seu negócio cresce de maneira sólida e consistentente.',
    },
  ];

  return (
    <section id="metodologia" className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Cabeçalho */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Metodologia do Efeito Volante
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            O crescimento exponencial não acontece por sorte. Ele é o resultado de um volante que começa pesado, mas ganha velocidade e força a cada volta planejada.
          </p>
        </div>

        {/* Conteúdo principal - gráfico + cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Gráfico exponencial */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 h-full">
            {/* Título do gráfico */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 text-lg">Trajetória de Crescimento</h3>
              <p className="text-sm text-gray-500">Resultado médio de nossos clientes</p>
            </div>

            <svg
              viewBox="0 0 600 300"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="exponentialGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3331c1" />
                  <stop offset="100%" stopColor="#3331c1" />
                </linearGradient>
                
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3331c1" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3331c1" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grade de fundo */}
              <g opacity="0.3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <line
                    key={`h-${i}`}
                    x1="60"
                    y1={60 + i * 60}
                    x2="540"
                    y2={60 + i * 60}
                    stroke="#d1d5db"
                    strokeWidth="1"
                    strokeDasharray="4 2"
                  />
                ))}
              </g>

              {/* Eixos */}
              <line x1="60" y1="300" x2="540" y2="300" stroke="#374151" strokeWidth="2" />
              <line x1="60" y1="60" x2="60" y2="300" stroke="#374151" strokeWidth="2" />

              {/* Curva exponencial ajustada para crescimento real (100% → 140% → 260% → 500%) */}
              <path
                d="M 60 300 
                   C 150 295, 180 285, 240 270 
                   C 300 220, 350 170, 380 145 
                   C 450 80, 500 45, 520 30"
                stroke="url(#exponentialGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />

              {/* Área sob a curva ajustada */}
              <path
                d="M 60 300 
                   C 150 295, 180 285, 240 270 
                   C 300 220, 350 170, 380 145 
                   C 450 80, 500 45, 520 30
                   L 520 300 Z"
                fill="url(#areaGradient)"
              />

              {/* Pontos de destaque - 4 pontos com crescimento exponencial real */}
              {[
                { x: 60, y: 300, label: 'Diagnóstico' },
                { x: 240, y: 270, label: 'Estratégia' }, // Crescimento sutil: 100% → 140%
                { x: 380, y: 145, label: 'Execução' }, // Aceleração: 140% → 260%
                { x: 520, y: 30, label: 'Tração exponencial' },  // Crescimento agressivo: 260% → 500%
              ].map((point, i) => (
                <g key={i}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="5"
                    fill="white"
                    stroke="#3331c1"
                    strokeWidth="2"
                  />
                  <text
                    x={point.x}
                    y={point.y - 12}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="600"
                    fill="#374151"
                  >
                    {point.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Grid de cards - 2x2 em mobile, mesma altura do gráfico */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 transition-colors h-full flex flex-col"
                >
                  <div className="mb-4 inline-flex p-3 bg-[#3331c1] rounded-lg">
                    <Icon className="w-5 h-5 text-[#3331c1]" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA abaixo dos cards */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-[#3331c1] rounded-2xl border border-[#3331c1] shadow-xl">
            <div className="text-left">
              <h4 className="font-bold text-white text-xl mb-2">
                Pronto para crescimento exponencial?
              </h4>
              <p className="text-white/90 text-base">
                Agende uma consultoria e veja como aplicar esta metodologia no seu negócio
              </p>
            </div>
            <a 
              href="https://chk.eduzz.com/E05X5474WX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#3331c1] hover:bg-gray-100 font-bold rounded-xl transition-all duration-200 shadow-lg whitespace-nowrap text-lg"
            >
              Quero meu planejamento
            </a>
          </div>
        </div>