import React from "react";
import { CheckCircle2, Star, Shield, Building2, Crown, Plus, Filter, Search, ChevronRight } from "lucide-react";

export default function PlansView({ role }: { role: string }) {
  const isFamily = role === "familia";

  if (role === "funeraria") {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-1">Catálogo de Produtos</h2>
            <p className="text-sm text-muted">Configure os planos funerários, serviços assistenciais e pacotes vendidos.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-white border border-line text-navy px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 flex items-center gap-2">
              <Filter size={16} /> Filtros
            </button>
            <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
              <Plus size={16} /> Novo Produto
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-2 rounded-2xl border border-line shadow-sm">
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto">
            {["Todos os Produtos", "Planos Funerários", "Serviços Avulsos", "Assistência Documental"].map((tab, i) => (
              <button key={i} className={`px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap transition-colors ${i === 0 ? "bg-[#f0edff] text-accent" : "text-muted hover:bg-gray-50"}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input type="text" placeholder="Buscar produto..." className="w-full bg-gray-50 border border-line rounded-xl py-2 pl-9 pr-3 text-sm focus:border-accent outline-none" />
          </div>
        </div>

        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-line">
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Produto / Plano</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Preço</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Serviços Inclusos</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Limite de Famílias</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Status</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <strong className="text-navy block">Plano Básico</strong>
                  <span className="text-xs text-muted">Assistência funeral padrão</span>
                </td>
                <td className="py-4 px-5 font-bold text-navy">
                  R$ 69,90 /mês
                </td>
                <td className="py-4 px-5 text-xs text-muted max-w-[200px] truncate">
                  Urna, Velório, Traslado (100km)
                </td>
                <td className="py-4 px-5 text-xs text-navy">
                  Titular + 5 dependentes
                </td>
                <td className="py-4 px-5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-ok bg-ok/10 px-2 py-1 rounded-md"><CheckCircle2 size={12}/> Ativo</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight size={18} />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <strong className="text-navy block">Plano Completo</strong>
                  <span className="text-xs text-muted">Funeral e Organização Documental</span>
                </td>
                <td className="py-4 px-5 font-bold text-navy">
                  R$ 129,90 /mês
                </td>
                <td className="py-4 px-5 text-xs text-muted max-w-[200px] truncate">
                  Urna Premium, Velório, Cremação, Auxílio Cartório
                </td>
                <td className="py-4 px-5 text-xs text-navy">
                  Titular + 8 dependentes
                </td>
                <td className="py-4 px-5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-ok bg-ok/10 px-2 py-1 rounded-md"><CheckCircle2 size={12}/> Ativo</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight size={18} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (role === "seguradora") {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-1">Produtos e Coberturas</h2>
            <p className="text-sm text-muted">Configuração de apólices, assistências, carências e SLAs.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-white border border-line text-navy px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 flex items-center gap-2">
              <Filter size={16} /> Filtros
            </button>
            <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
              <Plus size={16} /> Novo Produto
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-2 rounded-2xl border border-line shadow-sm">
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto">
            {["Todos", "Seguro de Vida", "Assistência Funeral", "Previdência", "Pacotes Premium"].map((tab, i) => (
              <button key={i} className={`px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap transition-colors ${i === 0 ? "bg-[#f0edff] text-accent" : "text-muted hover:bg-gray-50"}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input type="text" placeholder="Buscar produto..." className="w-full bg-gray-50 border border-line rounded-xl py-2 pl-9 pr-3 text-sm focus:border-accent outline-none" />
          </div>
        </div>

        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-gray-50 border-b border-line">
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Produto</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Cobertura Base</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Limites / Carência</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">SLA Padrão</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Vidas Ativas</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <strong className="text-navy block">Seguro Vida Plena</strong>
                  <span className="text-xs text-muted">ID: PROD-882</span>
                </td>
                <td className="py-4 px-5 text-navy text-xs">
                  Morte Natural/Acidental
                </td>
                <td className="py-4 px-5 text-xs text-navy">
                  <div className="font-bold text-accent">Até R$ 200.000</div>
                  <div className="text-muted mt-1">Carência: 90 dias</div>
                </td>
                <td className="py-4 px-5">
                  <span className="text-xs font-bold text-navy bg-gray-100 px-2 py-1 rounded">D+30 (Liquidação)</span>
                </td>
                <td className="py-4 px-5 text-xs text-navy">
                  85.420
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight size={18} />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <strong className="text-navy block">Assistência Funeral Familiar</strong>
                  <span className="text-xs text-muted">ID: AST-105</span>
                </td>
                <td className="py-4 px-5 text-navy text-xs">
                  Prestação de Serviço Direta
                </td>
                <td className="py-4 px-5 text-xs text-navy">
                  <div className="font-bold text-accent">R$ 15.000 (ou Serviço)</div>
                  <div className="text-muted mt-1">Carência: 30 dias</div>
                </td>
                <td className="py-4 px-5">
                  <span className="text-xs font-bold text-navy bg-gray-100 px-2 py-1 rounded">D+1 (Atendimento)</span>
                </td>
                <td className="py-4 px-5 text-xs text-navy">
                  124.000
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight size={18} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // advocacia / familia original
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
              {isFamily ? "Organização definitiva, mais armazenamento e suporte." : "Para escritórios consolidados."}
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
              {isFamily ? "Consultoria humana dedicada." : "Para grandes operações."}
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
