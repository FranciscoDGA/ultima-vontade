import React from "react";
import { BarChart3, TrendingUp, PieChart, Activity, Users, Clock, DollarSign, Download, Filter, Calendar } from "lucide-react";

export default function ReportsView({ role }: { role: string }) {
  if (role === "funeraria") {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-1">Relatórios e Desempenho</h2>
            <p className="text-sm text-muted">Acompanhe métricas de atendimento, vendas de planos e satisfação.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-white border border-line text-navy px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 flex items-center gap-2">
              <Calendar size={16} /> Este Mês
            </button>
            <button className="bg-white border border-line text-navy px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 flex items-center gap-2">
              <Filter size={16} /> Filtros
            </button>
            <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
              <Download size={16} /> Exportar PDF
            </button>
          </div>
        </div>

        {/* KPIs principais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Activity size={16} className="text-muted" />
              <span className="text-[11px] text-muted font-[850] uppercase tracking-wider">Atendimentos no Mês</span>
            </div>
            <strong className="text-2xl text-navy block mb-1">142</strong>
            <span className="text-xs text-ok font-bold flex items-center gap-1"><TrendingUp size={12}/> +12% vs anterior</span>
          </div>
          <div className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Users size={16} className="text-muted" />
              <span className="text-[11px] text-muted font-[850] uppercase tracking-wider">Famílias Ativadas</span>
            </div>
            <strong className="text-2xl text-navy block mb-1">89</strong>
            <span className="text-xs text-ok font-bold">Novos cadastros</span>
          </div>
          <div className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={16} className="text-muted" />
              <span className="text-[11px] text-muted font-[850] uppercase tracking-wider">Tempo Médio de Atend.</span>
            </div>
            <strong className="text-2xl text-navy block mb-1">4.2 horas</strong>
            <span className="text-xs text-ok font-bold">-15 min vs anterior</span>
          </div>
          <div className="bg-gradient-to-br from-[#f0edff] to-white border border-[#ded9ff] rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Star size={16} className="text-accent" />
              <span className="text-[11px] text-accent font-[850] uppercase tracking-wider">Satisfação Geral</span>
            </div>
            <strong className="text-2xl text-accent block mb-1">9.6/10</strong>
            <span className="text-xs text-accent font-bold">NPS: 82</span>
          </div>
        </div>

        {/* Gráficos e Tabelas */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-line rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-navy flex items-center gap-2"><BarChart3 size={18}/> Serviços Mais Vendidos</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-bold text-navy">Plano Básico</span>
                  <span className="text-muted">45 vendas (40%)</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-accent w-[40%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-bold text-navy">Cremação Direta</span>
                  <span className="text-muted">32 vendas (28%)</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-accent w-[28%] opacity-80"></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-bold text-navy">Plano Completo</span>
                  <span className="text-muted">20 vendas (18%)</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-accent w-[18%] opacity-60"></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-bold text-navy">Organização Documental</span>
                  <span className="text-muted">16 vendas (14%)</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-accent w-[14%] opacity-40"></div></div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-line rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-navy flex items-center gap-2"><PieChart size={18}/> Receita por Origem</h3>
            </div>
            <div className="flex h-32 items-end gap-2 mb-6">
              <div className="w-1/4 bg-[#f0edff] rounded-t-lg relative h-[100%] flex flex-col justify-end group cursor-pointer transition-all hover:brightness-95">
                <span className="text-xs font-bold text-accent text-center mb-2">Particular</span>
              </div>
              <div className="w-1/4 bg-[#e8e4ff] rounded-t-lg relative h-[60%] flex flex-col justify-end group cursor-pointer transition-all hover:brightness-95">
                <span className="text-xs font-bold text-accent text-center mb-2">Convênio</span>
              </div>
              <div className="w-1/4 bg-[#ded9ff] rounded-t-lg relative h-[45%] flex flex-col justify-end group cursor-pointer transition-all hover:brightness-95">
                <span className="text-xs font-bold text-accent text-center mb-2">Site</span>
              </div>
              <div className="w-1/4 bg-[#c0b2ec] rounded-t-lg relative h-[30%] flex flex-col justify-end group cursor-pointer transition-all hover:brightness-95">
                <span className="text-xs font-bold text-white text-center mb-2">Outros</span>
              </div>
            </div>
            <div className="pt-4 border-t border-line flex justify-between text-sm">
              <span className="text-muted">Receita Total no Período:</span>
              <strong className="text-navy">R$ 145.900,00</strong>
            </div>
          </div>
        </div>

        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-line flex items-center justify-between">
            <h3 className="font-bold text-navy">Performance de Parceiros</h3>
            <button className="text-accent text-sm font-bold hover:underline">Ver detalhado</button>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-line">
                <th className="py-3 px-6 text-[11px] font-[850] uppercase text-muted tracking-wider">Parceiro</th>
                <th className="py-3 px-6 text-[11px] font-[850] uppercase text-muted tracking-wider">Tipo</th>
                <th className="py-3 px-6 text-[11px] font-[850] uppercase text-muted tracking-wider">Serviços Executados</th>
                <th className="py-3 px-6 text-[11px] font-[850] uppercase text-muted tracking-wider">Tempo Médio Resposta</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-line hover:bg-gray-50/50">
                <td className="py-4 px-6 font-bold text-navy">Transportadora Carvalho</td>
                <td className="py-4 px-6 text-muted">Transporte</td>
                <td className="py-4 px-6">45 serviços</td>
                <td className="py-4 px-6 text-ok font-bold">12 minutos</td>
              </tr>
              <tr className="border-b border-line hover:bg-gray-50/50">
                <td className="py-4 px-6 font-bold text-navy">Crematório Vale da Paz</td>
                <td className="py-4 px-6 text-muted">Crematório</td>
                <td className="py-4 px-6">32 serviços</td>
                <td className="py-4 px-6 text-muted">45 minutos</td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="py-4 px-6 font-bold text-navy">Dr. Mendes & Associados</td>
                <td className="py-4 px-6 text-muted">Advocacia</td>
                <td className="py-4 px-6">12 encaminhamentos</td>
                <td className="py-4 px-6 text-[#ce4e5d] font-bold">4.5 horas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Advocacia
  return (
    <div className="grid gap-6 animate-in fade-in">
      <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-navy mb-1">Relatórios (Advocacia)</h2>
          <p className="text-sm text-muted">Acompanhe métricas de casos, honorários e produtividade.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-line text-navy px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 flex items-center gap-2">
            <Calendar size={16} /> Este Mês
          </button>
          <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
            <Download size={16} /> Exportar
          </button>
        </div>
      </div>
      <div className="bg-white border border-line rounded-2xl shadow-sm p-10 text-center text-muted">
        Métricas de honorários e tempo médio de conclusão em consolidação.
      </div>
    </div>
  );
}

// Need Star component from lucide-react if missing, we import it
import { Star } from "lucide-react";
