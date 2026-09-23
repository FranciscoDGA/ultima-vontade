import React from "react";
import { FolderOpen, Search, Filter, Plus, ChevronRight, AlertCircle, Calendar } from "lucide-react";

export default function CasesView({ role }: { role: string }) {
  if (role === "advocacia") {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-1">Casos e Inventários</h2>
            <p className="text-sm text-muted">Gerencie todos os processos sucessórios, extrajudiciais e planejamento patrimonial.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-white border border-line text-navy px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 flex items-center gap-2">
              <Filter size={16} /> Filtros
            </button>
            <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
              <Plus size={16} /> Novo Caso
            </button>
          </div>
        </div>

        {/* Search & Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-2 rounded-2xl border border-line shadow-sm">
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto">
            {["Todos (42)", "Inventário Judicial", "Extrajudicial", "Testamento", "Seguro", "Partilha"].map((tab, i) => (
              <button key={i} className={`px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap transition-colors ${i === 0 ? "bg-[#f0edff] text-accent" : "text-muted hover:bg-gray-50"}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input type="text" placeholder="Buscar caso ou família..." className="w-full bg-gray-50 border border-line rounded-xl py-2 pl-9 pr-3 text-sm focus:border-accent outline-none" />
          </div>
        </div>

        {/* Cases Table */}
        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-line">
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Identificação do Caso</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Cliente / Família</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Responsável (Time)</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Situação Financeira</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Status</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f0edff] text-accent flex items-center justify-center shrink-0">
                      <FolderOpen size={16} />
                    </div>
                    <div>
                      <strong className="text-navy block">UV-2026-0148</strong>
                      <span className="text-xs text-muted">Inventário Extrajudicial</span>
                      <div className="flex items-center gap-1 text-[10px] text-danger mt-1 font-bold">
                        <AlertCircle size={10} /> Alta Complexidade
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <strong className="text-navy block">Família Costa</strong>
                  <span className="text-xs text-muted">Falecido: Carlos Costa</span>
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2 text-navy">
                    <div className="w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center text-[10px] font-bold">RL</div>
                    Dr. Rafael Lima
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="text-xs font-bold text-ok bg-ok/10 px-2 py-1 rounded-md">Contrato Assinado</span>
                </td>
                <td className="py-4 px-5">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#fff6e3] text-[#a87200] text-[10px] font-bold uppercase tracking-wider">
                    Análise
                  </span>
                  <p className="text-[10px] text-muted mt-1 flex items-center gap-1"><Calendar size={10}/> Modificado há 2 dias</p>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight size={18} />
                  </button>
                </td>
              </tr>

              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f0edff] text-accent flex items-center justify-center shrink-0">
                      <FolderOpen size={16} />
                    </div>
                    <div>
                      <strong className="text-navy block">UV-2026-0092</strong>
                      <span className="text-xs text-muted">Testamento e Partilha</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <strong className="text-navy block">Marcos Almeida</strong>
                  <span className="text-xs text-muted">Herdeiro Único</span>
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2 text-navy">
                    <div className="w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center text-[10px] font-bold">MT</div>
                    Marcela Teixeira
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="text-xs font-bold text-[#ce4e5d] bg-[#fff0f1] px-2 py-1 rounded-md">Inadimplente (1x)</span>
                </td>
                <td className="py-4 px-5">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#f0edff] text-accent text-[10px] font-bold uppercase tracking-wider">
                    Aguardando Órgão
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

  // Fallback
  return (
    <div className="bg-white border border-line rounded-2xl shadow-sm p-10 text-center text-muted">
      Em construção para {role}
    </div>
  );
}
