/**
 * Footer Component
 * Design: Minimalismo Corporativo Contemporâneo
 * - Focado no CTA final de conversão
 * - Design limpo e direto ao ponto
 * - Otimizado para página de vendas B2C
 */

import { Phone, Linkedin, Instagram, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "+55 11 98902-3070";
  const formattedPhone = "(11) 98902-3070";

  const footerLinks = {
    'Planejamento': [
      { label: 'Metodologia', href: '#metodologia' },
      { label: 'Processo', href: '#processo' },
      { label: 'Benefícios', href: '#precos' },
    ],
    'Empresa': [
      { label: 'Provas Sociais', href: '#clientes' },
      { label: 'Sobre Nós', href: '#sobre' },
    ],
    'Legal': [
      { label: 'Política de Privacidade', href: '/privacidade' },
      { label: 'Termos de Uso', href: '/termos' },
    ],
  };

  return (
    <footer className="bg-black text-white">
      {/* CTA Final - Última chance de conversão */}
      <div className="relative overflow-hidden">
        {/* Elementos decorativos sutis */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 lg:py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-sm font-medium text-blue-100">
                Última Oportunidade
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
              Transforme Seu Negócio com{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Planejamento Estratégico
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Não deixe o futuro da sua empresa ao acaso. Comece hoje a construir uma operação comercial sólida e lucrativa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=Olá! Gostaria de mais informações sobre o planejamento estratégico`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95 text-lg min-w-[280px]"
              >
                <span className="relative z-10">Quero meu planejamento</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="font-medium">Dúvidas?</span>
                </div>
                <a 
                  href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 transition-colors font-semibold"
                >
                  {formattedPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo do footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Links rápidos */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-bold text-white mb-4 text-lg">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors group inline-flex items-center gap-1"
                      >
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contato e Redes Sociais */}
            <div>
              <h4 className="font-bold text-white mb-4 text-lg">
                Conecte-se
              </h4>
              <div className="space-y-4">
                {/* Redes Sociais */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/company/bxassessoria/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/30 border border-gray-800 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
                  </a>
                  <a
                    href="https://www.instagram.com/bxassessoria/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-pink-600/20 hover:border-pink-500/30 border border-gray-800 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 transition-colors" />
                  </a>
                </div>

                {/* Contato direto */}
                <div className="pt-4 border-t border-gray-800">
                  <p className="text-gray-400 text-sm mb-2">
                    Dúvidas ou suporte:
                  </p>
                  <a 
                    href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition-colors font-medium inline-flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    {formattedPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-800 my-8" />

          {/* Bottom footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © {currentYear} BX Assessoria. Todos os direitos reservados.
              </p>
              {/* CNPJ escondido para SEO mas visível */}
              <p className="text-gray-600 text-xs mt-1">
                CNPJ: 00.000.000/0000-00
              </p>
            </div>

            {/* Links legais */}
            <div className="flex items-center gap-6 text-gray-500 text-sm">
              <a 
                href="/privacidade" 
                className="hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a 
                href="/termos" 
                className="hover:text-white transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Robusto (escondido) */}
      <div className="hidden" aria-hidden="true">
        <h1>Planejamento Estratégico Comercial para PMEs</h1>
        <p>Transforme seu negócio com metodologia de crescimento exponencial desenvolvida pela BX Assessoria.</p>
        <p>Consultoria especializada em planejamento estratégico, análise de mercado e desenvolvimento comercial para pequenas e médias empresas.</p>
        <p>Localização: São Paulo | Atendimento em todo Brasil via online</p>
        <p>Serviço: Planejamento Estratégico Comercial Completo | Análise de Mercado | Desenvolvimento de Estratégias de Crescimento</p>
      </div>
    </footer>
  );
}