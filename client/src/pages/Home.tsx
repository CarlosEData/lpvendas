/**
 * Home Page - Landing Page Profissional
 * Design: Minimalismo Corporativo Contemporâneo
 * 
 * Estrutura:
 * 1. Hero Section - Impacto visual e CTAs principais
 * 2. Metodologia - Gráfico exponencial e pilares
 * 3. Processo - Timeline de etapas
 * 4. Preço e Benefícios - Proposta de valor
 * 5. Provas Sociais - Confiança e autoridade
 * 6. Footer - Informações e links
 */

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MetodologiaSection from '@/components/MetodologiaSection';
import ProcessoSection from '@/components/ProcessoSection';
import PrecoBeneficiosSection from '@/components/PrecoBeneficiosSection';

import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Metodologia Section */}
      <MetodologiaSection />

      {/* Processo Section */}
      <ProcessoSection />

      {/* Preço e Benefícios Section */}
      <PrecoBeneficiosSection />



      {/* Footer */}
      <Footer />
    </div>
  );
}
