import React, { useState } from "react";
import { User, Search, Filter, MoreVertical, Plus, ChevronRight, Mail, Phone, Calendar } from "lucide-react";

export default function ClientsView({ role }: { role: string }) {
  const [activeTab, setActiveTab] = useState("Todos (124)");
  const [showNewClient, setShowNewClient] = useState(false);

  if (role === "advocacia") {
    // keeping previous advocacia implementation
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-1">Clientes</h2>
            <p className="text-sm text-muted">Controle todas as famílias e pessoas atendidas pelo escritório.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-white border border-line text-navy px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 flex items-center gap-2">
              <Filter size={16} /> Filtros
            </button>
            <button onClick={() => setShowNewClient(true)} className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
              <Plus size={16} /> Novo Cliente
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-2 rounded-2xl border border-line shadow-sm">
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto">
            {["Todos (124)", "Ativos (89)", "Prioridade Alta", "Arquivados"].map((tab, i) => (
              <button 
                key={i} 
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap transition-colors ${activeTab === tab ? "bg-[#f0edff] text-accent" : "text-muted hover:bg-gray-50"}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input type="text" placeholder="Buscar por nome ou CPF..." className="w-full bg-gray-50 border border-line rounded-xl py-2 pl-9 pr-3 text-sm focus:border-accent outline-none" />
          </div>
        </div>

        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-line">
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Cliente</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Contato</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Origem / Categoria</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Caso Relacionado</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Última Interação</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f0edff] text-accent flex items-center justify-center font-bold">A</div>
                    <div>
                      <strong className="text-navy block">Ana Souza</strong>
                      <span className="text-[11px] text-muted font-bold px-2 py-0.5 bg-gray-100 rounded-md mt-1 inline-block">Cônjuge Meeiro</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5 space-y-1">
                  <div className="flex items-center gap-2 text-navy text-xs"><Phone size={12} className="text-muted"/> (11) 99999-1234</div>
                  <div className="flex items-center gap-2 text-navy text-xs"><Mail size={12} className="text-muted"/> ana@souza.com</div>
                </td>
                <td className="py-4 px-5">
                  <strong className="text-navy block text-xs">Indicação (Dr. Mendes)</strong>
                  <span className="text-[11px] text-danger font-bold uppercase tracking-wider mt-1 block">Alta Prioridade</span>
                </td>
                <td className="py-4 px-5">
                  <strong className="text-navy block text-xs">UV-2026-0148</strong>
                  <span className="text-xs text-muted">Inventário Extrajudicial</span>
                </td>
                <td className="py-4 px-5 text-navy text-xs">
                  <div className="flex items-center gap-2 mb-1"><Calendar size={12} className="text-muted"/> Hoje</div>
                  Mensagem WhatsApp
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

        {showNewClient && (
          <div className="fixed inset-0 bg-navy/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setShowNewClient(false)}>
            <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
              <h2 className="text-xl font-bold text-navy mb-1">Cadastrar Cliente</h2>
              <p className="text-sm text-muted mb-4">Insira os dados do novo cliente ou familiar.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-[850] text-navy mb-1.5 uppercase tracking-wider">Nome Completo</label>
                  <input type="text" className="w-full border border-[#dce3ec] rounded-lg p-2.5 text-sm outline-none focus:border-accent" placeholder="Ex: Ana Souza" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-[850] text-navy mb-1.5 uppercase tracking-wider">WhatsApp</label>
                    <input type="text" className="w-full border border-[#dce3ec] rounded-lg p-2.5 text-sm outline-none focus:border-accent" placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-[850] text-navy mb-1.5 uppercase tracking-wider">E-mail</label>
                    <input type="email" className="w-full border border-[#dce3ec] rounded-lg p-2.5 text-sm outline-none focus:border-accent" placeholder="email@exemplo.com" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6 pt-4 border-t border-line">
                <button onClick={() => setShowNewClient(false)} className="px-4 py-2 bg-gray-100 text-navy rounded-lg text-sm font-bold hover:bg-gray-200">
                  Cancelar
                </button>
                <button onClick={() => setShowNewClient(false)} className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-bold hover:brightness-110">
                  Salvar Cliente
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (role === "funeraria") {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-1">Famílias</h2>
            <p className="text-sm text-muted">Controle a relação com as famílias atendidas, serviços adquiridos e status da assistência.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-white border border-line text-navy px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 flex items-center gap-2">
              <Filter size={16} /> Filtros
            </button>
            <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
              <Plus size={16} /> Cadastrar Família
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-2 rounded-2xl border border-line shadow-sm">
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto">
            {["Todas (215)", "Em Acompanhamento", "Aguardando Família", "Assistência Ativada", "Concluído", "Pós-atendimento"].map((tab, i) => (
              <button 
                key={i} 
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap transition-colors ${activeTab === tab ? "bg-[#f0edff] text-accent" : "text-muted hover:bg-gray-50"}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input type="text" placeholder="Buscar por nome..." className="w-full bg-gray-50 border border-line rounded-xl py-2 pl-9 pr-3 text-sm focus:border-accent outline-none" />
          </div>
        </div>

        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-gray-50 border-b border-line">
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Família (Contato Principal)</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Falecido</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Plano Contratado</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Serviços Adquiridos</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Atendente</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Status da Assistência</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f0edff] text-accent flex items-center justify-center font-bold">F</div>
                    <div>
                      <strong className="text-navy block">Família Fernandes</strong>
                      <span className="text-[11px] text-muted flex items-center gap-1 mt-1"><Phone size={10}/> (11) 98888-0000 (João)</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <strong className="text-navy block text-xs">Marcos Fernandes</strong>
                  <span className="text-[11px] text-muted">Óbito: 20/09/2026</span>
                </td>
                <td className="py-4 px-5">
                  <strong className="text-navy block text-xs">Plano Completo</strong>
                  <span className="text-[11px] text-muted">Origem: Site</span>
                </td>
                <td className="py-4 px-5 text-xs text-navy">
                  Funeral, Cremação, Documentação
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2 text-navy text-xs">
                    <div className="w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center font-bold">CM</div>
                    Carlos Moura
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#f0edff] text-accent text-[10px] font-bold uppercase tracking-wider">
                    Assistência Ativada
                  </span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight size={18} />
                  </button>
                </td>
              </tr>

              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 text-muted flex items-center justify-center font-bold">S</div>
                    <div>
                      <strong className="text-navy block">Família Silva</strong>
                      <span className="text-[11px] text-muted flex items-center gap-1 mt-1"><Phone size={10}/> (21) 97777-1111 (Maria)</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <strong className="text-navy block text-xs">José Silva</strong>
                  <span className="text-[11px] text-muted">Óbito: 10/08/2026</span>
                </td>
                <td className="py-4 px-5">
                  <strong className="text-navy block text-xs">Plano Básico</strong>
                  <span className="text-[11px] text-muted">Origem: Ligação</span>
                </td>
                <td className="py-4 px-5 text-xs text-navy">
                  Funeral, Apoio Cartório
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2 text-navy text-xs">
                    <div className="w-6 h-6 rounded-full bg-gray-200 text-muted flex items-center justify-center font-bold">AP</div>
                    Ana Paula
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-muted text-[10px] font-bold uppercase tracking-wider">
                    Pós-atendimento
                  </span>
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

  // Fallback for others
  return (
    <div className="bg-white border border-line rounded-2xl shadow-sm p-10 text-center text-muted">
      Em construção para {role}
    </div>
  );
}
