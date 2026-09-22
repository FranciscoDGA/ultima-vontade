import React from "react";
import { CheckCircle2, Star, Shield, Building2, Crown } from "lucide-react";

export default function PlansView({ role }: { role: string }) {
  const isFamily = role === "familia";

  return (
    <div className="grid gap-6 animate-in fade-in duration-500">
      <div className="text-center max-w-2xl mx-auto mb-4">
        <h2 className="text-navy text-[28px] font-bold tracking-tight mb-3">
          {isFamily ? "Planos e Proteção Familiar" : "Planos Corporativos"}
        </h2>
        <p className="text-muted text-[15px] leading-relaxed">
          {isFamily 
            ? "O escritório parceiro já cobriu a sua organização inicial. Escolha como deseja proteger o futuro do seu patrimônio." 
            : "Escale sua operação de sucessões e inventários com tecnologia de ponta. Transparência para seus clientes e eficiência para sua equipe."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
        {/* Tier 1 */}
        <div className="bg-white rounded-3xl p-8 border border-line shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
          <div className="mb-6">
            <div className="w-12 h-12 bg-[#f0edff] text-[#41337c] rounded-2xl flex items-center justify-center mb-4">
              <Shield size={24} />
            </div>
            <h3 className="text-navy text-xl font-bold mb-2">{isFamily ? "Família Essencial" : "Profissional"}</h3>
            <p className="text-muted text-sm min-h-[40px]">
              {isFamily ? "Uso direto e controle básico dos seus documentos." : "Para advogados autônomos e pequenos escritórios."}
            </p>
          </div>
          
          <div className="mb-6 pb-6 border-b border-line">
            <span className="text-4xl font-bold text-navy">{isFamily ? "Grátis" : "R$ 499"}</span>
            {!isFamily && <span className="text-muted font-medium">/mês</span>}
          </div>

          <ul className="space-y-4 mb-8 flex-1">
            {[
              isFamily ? "Acesso ao cofre de documentos" : "Até 15 casos simultâneos",
              isFamily ? "Histórico de 30 dias" : "Portal da Família (End-user)",
              isFamily ? "Suporte via e-mail" : "Modelos prontos de inventário",
              isFamily ? "2 usuários" : "Até 3 advogados na equipe",
              !isFamily && "Suporte em horário comercial"
            ].filter(Boolean).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[14px] text-navy">
                <CheckCircle2 size={18} className="text-ok shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button className="w-full py-3.5 px-4 rounded-xl font-bold text-navy bg-gray-100 hover:bg-gray-200 transition-colors">
            {isFamily ? "Plano Atual" : "Começar Agora"}
          </button>
        </div>

        {/* Tier 2 (Highlighted) */}
        <div className="bg-navy rounded-3xl p-8 border border-navy shadow-2xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col transform md:scale-105 z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#28c6b4] to-[#3a76ff] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg">
            Mais Escolhido
          </div>
          
          <div className="mb-6">
            <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-4">
              <Star size={24} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">{isFamily ? "Família Completo" : "Equipe"}</h3>
            <p className="text-gray-300 text-sm min-h-[40px]">
              {isFamily ? "Organização definitiva, mais armazenamento e suporte." : "Para escritórios consolidados e funerárias médias."}
            </p>
          </div>
          
          <div className="mb-6 pb-6 border-b border-white/10">
            <span className="text-4xl font-bold text-white">{isFamily ? "R$ 197" : "R$ 1.490"}</span>
            <span className="text-gray-300 font-medium">{isFamily ? "/caso único" : "/mês"}</span>
          </div>

          <ul className="space-y-4 mb-8 flex-1">
            {[
              isFamily ? "Documentos e tarefas ilimitadas" : "Casos simultâneos ilimitados",
              isFamily ? "Armazenamento vitalício" : "Inteligência Artificial (Copiloto)",
              isFamily ? "Suporte prioritário (WhatsApp)" : "White Label (Sua marca no portal)",
              isFamily ? "Usuários familiares ilimitados" : "Até 10 profissionais na equipe",
              !isFamily && "Dashboard avançado de produtividade"
            ].filter(Boolean).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[14px] text-gray-100">
                <CheckCircle2 size={18} className="text-[#28c6b4] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button className="w-full py-3.5 px-4 rounded-xl font-bold text-navy bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:brightness-90 transition-all">
            Fazer Upgrade
          </button>
        </div>

        {/* Tier 3 */}
        <div className="bg-white rounded-3xl p-8 border border-line shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
          <div className="mb-6">
            <div className="w-12 h-12 bg-[#fff6e3] text-[#a87200] rounded-2xl flex items-center justify-center mb-4">
              {isFamily ? <Crown size={24} /> : <Building2 size={24} />}
            </div>
            <h3 className="text-navy text-xl font-bold mb-2">{isFamily ? "Proteção Total" : "Corporativo"}</h3>
            <p className="text-muted text-sm min-h-[40px]">
              {isFamily ? "Consultoria humana dedicada." : "Para Seguradoras, Bancos e grandes operações."}
            </p>
          </div>
          
          <div className="mb-6 pb-6 border-b border-line">
            <span className="text-3xl font-bold text-navy">Sob Consulta</span>
          </div>

          <ul className="space-y-4 mb-8 flex-1">
            {[
              isFamily ? "Assessoria dedicada 1-a-1" : "API e Integrações Bancárias/Cartoriais",
              isFamily ? "Revisão jurídica dos documentos" : "WhatsApp Oficial Integrado",
              isFamily ? "Concierge" : "Relatórios personalizados",
              !isFamily && "Gerente de Sucesso (CSM) dedicado",
              !isFamily && "Contrato SLA e Acordo LGPD"
            ].filter(Boolean).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[14px] text-navy">
                <CheckCircle2 size={18} className="text-ok shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button className="w-full py-3.5 px-4 rounded-xl font-bold text-navy bg-white border-2 border-line hover:border-navy transition-colors">
            Falar com Vendas
          </button>
        </div>
      </div>
    </div>
  );
}
