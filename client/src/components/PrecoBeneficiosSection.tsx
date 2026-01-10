/**
 * Preço e Benefícios Section Component - Produto Único
 * Design: Minimalismo Corporativo Contemporâneo
 * - Card de preço único com destaque visual
 * - Lista de benefícios clara e escaneável
 * - CTA prominente para compra única
 */

import { Check, Shield, Zap, Clock, Users, Star, Target, TrendingUp } from 'lucide-react';

export default function PrecoBeneficiosSection() {
  const productPrice = 2997; // Valor único do planejamento estratégico
  const installmentPrice = 299; // Valor da parcela (10x sem juros)
  const installments = 10; // Número de parcelas

  const benefits = [
    { icon: Target, text: 'Diagnóstico completo do cenário atual' },
    { icon: TrendingUp, text: 'Definição de metas e KPIs de crescimento' },
    { icon: Users, text: 'Estruturação do time e processos comerciais' },
    { icon: Zap, text: 'Plano tático de canais de aquisição' },
    { icon: Clock, text: 'Cronograma detalhado de implementação' },
    { icon: Shield, text: 'Suporte pós-entrega para ajustes' },
  ];

  const features = [
    { icon: Check, label: 'Duração', value: '4 Semanas' },
    { icon: Check, label: 'Entregável', value: 'PDF + Dashboard' },
    { icon: Check, label: 'Reuniões', value: '4 Encontros' },
    { icon: Check, label: 'Suporte', value: '30 Dias' },
  ];

  const guarantees = [
    { text: 'Sua satisfação ou seu dinheiro de volta', highlight: '30 dias de garantia' },
    { text: 'Acompanhamento direto com especialistas', highlight: 'Suporte especializado' },
    { text: 'Acesso a todas as ferramentas e templates', highlight: 'Materiais inclusos' },
  ];

  return (
    <section id="precos" className="relative py-16 lg:py-20 overflow-hidden">
      {/* Fundo gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b0b1a] to-[#3331c1]" />
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#3331c1]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Título da seção */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#3331c1] animate-pulse"></span>
            <span className="text-sm font-medium text-[#3331c1]">
              Investimento Único
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Planejamento Estratégico{' '}
            <span className="bg-gradient-to-r from-[#3331c1] to-[#3331c1] bg-clip-text text-transparent">
              Comercial
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Invista na clareza estratégica que sua empresa precisa para parar de patinar e começar a lucrar de verdade.
          </p>
        </div>

        {/* Grid principal - Preço + Benefícios */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {/* Card de preço único */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3331c1] to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-white/10 p-8 lg:p-10">
              {/* Badge exclusivo */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="px-4 py-1.5 bg-gradient-to-r from-[#3331c1] to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg">
                  Produto Exclusivo
                </div>
              </div>

              {/* Preço à vista */}
              <div className="mb-8 pt-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl lg:text-6xl font-bold text-white">
                    R$ {productPrice.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-xl text-gray-400">
                    à vista
                  </span>
                </div>
                
                <p className="text-lg text-gray-400 mb-6">
                  ou {installments}x de R$ {installmentPrice.toFixed(2).replace('.', ',')} sem juros
                </p>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <Star className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">
                    Economize 15% pagando à vista
                  </span>
                </div>
              </div>

              {/* Features do produto */}
              <div className="mb-8 space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#3331c1]/10 rounded-lg">
                        <feature.icon className="w-4 h-4 text-[#3331c1]" />
                      </div>
                      <span className="text-gray-300">{feature.label}</span>
                    </div>
                    <span className="font-medium text-white">{feature.value}</span>
                  </div>
                ))}
              </div>

              {/* CTA principal */}
              <div className="space-y-4">
                <button className="w-full py-4 bg-gradient-to-r from-[#3331c1] to-[#3331c1] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#3331c1]/25 transition-all duration-300 active:scale-95 text-lg">
                  Quero meu planejamento
                </button>
                
                <div className="text-center">
                  <p className="text-gray-400 text-sm">
                    Pagamento seguro via cartão, PIX ou boleto
                  </p>
                </div>
              </div>

              {/* Garantia */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="font-semibold text-white">Garantia Incondicional</span>
                </div>
                <p className="text-sm text-gray-400">
                  Se em 30 dias você sentir que o planejamento não é para você, devolvemos 100% do seu investimento. Sem perguntas.
                </p>
              </div>
            </div>
          </div>

          {/* Lista de benefícios */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                O que você recebe
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#3331c1]/20 to-[#3331c1]/20 flex items-center justify-center group-hover:from-[#3331c1]/30 group-hover:to-[#3331c1]/30 transition-all">
                      <benefit.icon className="w-5 h-5 text-[#3331c1]" />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-300 leading-relaxed">
                        {benefit.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Diferenciais exclusivos */}
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4">
                Diferenciais Exclusivos
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3331c1]/10 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[#3331c1]" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Lorem Ipsum</p>
                    <p className="text-sm text-gray-400">Dolor sit amet</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Consectetur</p>
                    <p className="text-sm text-gray-400">Adipiscing elit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 lg:p-10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 max-w-3xl mx-auto">
            <div className="p-3 bg-gradient-to-br from-[#3331c1]/20 to-purple-500/20 rounded-xl">
              <Star className="w-8 h-8 text-[#3331c1]" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              Assuma o controle do seu crescimento hoje mesmo
            </h3>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="text-left">
                <p className="text-gray-300 mb-1">
                  Investimento único de
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">
                    R$ {productPrice.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-gray-400">
                    ou {installments}x de R$ {installmentPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>
              
              <button className="px-8 py-3 bg-gradient-to-r from-[#3331c1] to-[#3331c1] text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[#3331c1]/25 transition-all duration-300 whitespace-nowrap">
                Quero meu planejamento
              </button>
            </div>
            
            <p className="text-sm text-gray-400">
              Oferta por tempo limitado. Vagas restritas para garantir a qualidade do acompanhamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}