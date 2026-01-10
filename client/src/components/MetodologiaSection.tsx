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
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
      icon: Zap,
      title: 'Dolor Sit Amet',
      description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: Layers,
      title: 'Consectetur',
      description: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.',
    },
    {
      icon: TrendingUp,
      title: 'Adipiscing',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.',
    },
  ];

  return (
    <section id="metodologia" className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Cabeçalho */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lorem Ipsum Dolor Sit
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
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
                { x: 60, y: 300, label: 'Fase 1' },
                { x: 240, y: 270, label: 'Fase 2' }, // Crescimento sutil: 100% → 140%
                { x: 380, y: 145, label: 'Fase 3' }, // Aceleração: 140% → 260%
                { x: 520, y: 30, label: 'Fase 4' },  // Crescimento agressivo: 260% → 500%
              ].map((point, i) => (
                <g key={i}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="5"
                    fill="white"
                    stroke="#3b82f6"
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
                  <div className="mb-4 inline-flex p-3 bg-blue-50 rounded-lg">
                    <Icon className="w-5 h-5 text-blue-600" />
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
            <div className="text-left">
              <h4 className="font-bold text-gray-900 text-lg mb-1">
                Pronto para crescimento exponencial?
              </h4>
              <p className="text-gray-600 text-sm">
                Agende uma consultoria gratuita e veja como aplicar esta metodologia no seu negócio
              </p>
            </div>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap">
              Agendar Demonstração
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}