import React, { useState } from "react";
import { CheckCircle2, Clock, AlertCircle, Upload, Info, Calendar, Kanban, List, Filter, Plus, ChevronRight } from "lucide-react";

export default function TasksView({ role }: { role: string }) {
  const [viewMode, setViewMode] = useState("lista");
  const [selectedTask, setSelectedTask] = useState(false);

  if (role === "familia") {
    return (
      <div className="grid gap-6 max-w-4xl mx-auto animate-in fade-in">
        <div className="bg-gradient-to-br from-[#f0edff] to-white border border-[#ded9ff] p-6 rounded-2xl shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy mb-2">Seu Plano de Providências</h2>
            <p className="text-sm text-[#665d88] leading-relaxed">
              Aqui estão as tarefas que você precisa realizar. Tudo foi organizado de forma simples para que você saiba exatamente <b>o que fazer</b>, <b>por que fazer</b> e <b>quando entregar</b>. Clique em uma tarefa para ver os detalhes.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div 
            onClick={() => setSelectedTask(true)}
            className="bg-white border border-line rounded-2xl shadow-sm p-5 cursor-pointer hover:border-accent transition-colors group relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ce4e5d]"></div>
            
            <div className="flex justify-between items-start mb-3 pl-3">
              <div>
                <span className="inline-block px-2 py-1 bg-gray-100 text-muted rounded-md text-[10px] font-bold uppercase tracking-wider mb-2">Bancos e Finanças</span>
                <h3 className="text-navy font-bold text-[16px] group-hover:text-accent transition-colors">Solicitar Extrato Bancário</h3>
              </div>
              <span className="bg-[#fff0f1] text-[#ce4e5d] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <AlertCircle size={14}/> Urgente
              </span>
            </div>

            <div className="pl-3 grid grid-cols-3 gap-4 text-xs text-muted font-bold">
              <span className="flex items-center gap-1"><Info size={14}/> Por que? Para calcular imposto.</span>
              <span className="flex items-center gap-1"><Clock size={14}/> Vence amanhã</span>
              <span className="flex items-center gap-1">👤 Resp: Marcos</span>
            </div>
          </div>
        </div>

        {selectedTask && (
          <div className="fixed inset-0 bg-navy/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedTask(false)}>
            <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
              <div className="p-6 border-b border-line bg-gray-50/50">
                <span className="inline-block px-2 py-1 bg-gray-100 text-muted rounded-md text-[10px] font-bold uppercase tracking-wider mb-3">Bancos e Finanças</span>
                <h2 className="text-2xl font-bold text-navy mb-2">Solicitar Extrato Bancário e Cancelar Cartões</h2>
                <div className="flex gap-4 text-sm text-muted font-bold">
                  <span className="flex items-center gap-1 text-[#ce4e5d]"><AlertCircle size={16}/> Vence amanhã (25 Out)</span>
                  <span className="flex items-center gap-1">👤 Responsável: Marcos (Filho)</span>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-[850] text-navy text-xs uppercase tracking-wider mb-2">Por que eu preciso fazer isso?</h4>
                  <p className="text-sm text-muted bg-gray-50 p-4 rounded-xl">O extrato bancário do dia exato do falecimento é obrigatório por lei para que o advogado consiga calcular os impostos (ITCMD) e fazer a partilha dos valores nas contas.</p>
                </div>

                <div>
                  <h4 className="font-[850] text-navy text-xs uppercase tracking-wider mb-2">Como fazer (Passo a passo)</h4>
                  <ol className="text-sm text-muted space-y-3 list-decimal list-inside">
                    <li>Vá até a agência do Banco do Brasil com a Certidão de Óbito original.</li>
                    <li>Apresente seu documento de identidade (RG ou CNH).</li>
                    <li>Solicite o <b>Extrato da Conta Corrente e Poupança da data de 10/10/2026</b>.</li>
                    <li>Peça o bloqueio e cancelamento dos cartões de crédito.</li>
                  </ol>
                </div>

                <div className="border border-dashed border-[#dce3ec] rounded-2xl p-6 text-center bg-gray-50/50">
                  <div className="w-12 h-12 bg-[#f0edff] text-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <Upload size={20} />
                  </div>
                  <h4 className="font-bold text-navy text-sm mb-1">Anexar Protocolos e Extratos</h4>
                  <p className="text-xs text-muted mb-4">Tire uma foto ou escaneie o extrato entregue pelo banco.</p>
                  <div className="flex justify-center gap-2">
                    <button className="bg-white border border-line text-navy px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50">Tirar Foto</button>
                    <button className="bg-accent text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:brightness-110">Procurar Arquivo</button>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-line bg-gray-50 flex justify-end gap-2">
                <button onClick={() => setSelectedTask(false)} className="px-5 py-2.5 bg-white border border-line text-navy rounded-xl text-sm font-bold hover:bg-gray-100">
                  Fechar
                </button>
                <button onClick={() => setSelectedTask(false)} className="px-5 py-2.5 bg-accent text-white rounded-xl text-sm font-bold shadow-md hover:brightness-110">
                  Marcar como Concluída
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (role === "advocacia") {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-1">Tarefas e Prazos</h2>
            <p className="text-sm text-muted">Acompanhe a fila de trabalho da equipe, prazos legais e pendências.</p>
          </div>
          <div className="flex gap-2">
            <div className="bg-white border border-line rounded-xl p-1 flex">
              <button onClick={() => setViewMode("lista")} className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold transition-colors ${viewMode === "lista" ? "bg-gray-100 text-navy" : "text-muted hover:bg-gray-50"}`}><List size={14}/> Lista</button>
              <button onClick={() => setViewMode("kanban")} className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold transition-colors ${viewMode === "kanban" ? "bg-gray-100 text-navy" : "text-muted hover:bg-gray-50"}`}><Kanban size={14}/> Kanban</button>
              <button onClick={() => setViewMode("calendario")} className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold transition-colors ${viewMode === "calendario" ? "bg-gray-100 text-navy" : "text-muted hover:bg-gray-50"}`}><Calendar size={14}/> Calendário</button>
            </div>
            <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
              <Plus size={16} /> Nova Tarefa
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-2 rounded-2xl border border-line shadow-sm">
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto">
            {["Todas (56)", "Minhas Tarefas (14)", "Atrasadas (3)", "Da Semana", "Por Cliente"].map((tab, i) => (
              <button key={i} className={`px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap transition-colors ${i === 0 ? "bg-[#f0edff] text-accent" : "text-muted hover:bg-gray-50"}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-50 border border-line text-navy px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-100 flex items-center gap-2">
              <Filter size={16} /> Status
            </button>
            <button className="bg-gray-50 border border-line text-navy px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-100 flex items-center gap-2">
              <Filter size={16} /> Advogado
            </button>
          </div>
        </div>

        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-line">
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Tarefa</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Caso / Cliente</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Prazo</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Atribuído a</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Status</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <div>
                      <strong className="text-navy block">Emitir guias do ITCMD</strong>
                      <span className="text-[10px] text-danger font-bold uppercase tracking-wider mt-1 block flex items-center gap-1">
                        <AlertCircle size={10}/> Prioridade Alta
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <strong className="text-navy block text-xs">Inventário Extrajudicial</strong>
                  <span className="text-xs text-muted">Família Costa</span>
                </td>
                <td className="py-4 px-5 text-[#ce4e5d] text-xs font-bold flex items-center gap-1">
                  <Calendar size={14}/> Vence Hoje
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2 text-navy text-xs">
                    <div className="w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center text-[10px] font-bold">RL</div>
                    Dr. Rafael Lima
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#f0edff] text-accent text-[10px] font-bold uppercase tracking-wider">
                    Em Andamento
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
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <div>
                      <strong className="text-navy block">Revisar Minuta de Partilha</strong>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <strong className="text-navy block text-xs">Testamento e Partilha</strong>
                  <span className="text-xs text-muted">Marcos Almeida</span>
                </td>
                <td className="py-4 px-5 text-muted text-xs font-bold flex items-center gap-1">
                  <Calendar size={14}/> Amanhã
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2 text-navy text-xs">
                    <div className="w-6 h-6 rounded-full bg-gray-200 text-muted flex items-center justify-center text-[10px] font-bold">MT</div>
                    Marcela Teixeira
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#fff6e3] text-[#a87200] text-[10px] font-bold uppercase tracking-wider">
                    Pendente
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

  if (role === "funeraria") {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-1">Pendências</h2>
            <p className="text-sm text-muted">Acompanhe documentos faltando, pagamentos e respostas de parceiros.</p>
          </div>
          <div className="flex gap-2">
            <div className="bg-white border border-line rounded-xl p-1 flex">
              <button onClick={() => setViewMode("lista")} className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold transition-colors ${viewMode === "lista" ? "bg-gray-100 text-navy" : "text-muted hover:bg-gray-50"}`}><List size={14}/> Lista</button>
              <button onClick={() => setViewMode("kanban")} className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold transition-colors ${viewMode === "kanban" ? "bg-gray-100 text-navy" : "text-muted hover:bg-gray-50"}`}><Kanban size={14}/> Kanban</button>
            </div>
            <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
              <Plus size={16} /> Nova Pendência
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-2 rounded-2xl border border-line shadow-sm">
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto">
            {["Todas (28)", "Urgentes (3)", "Aguardando Família", "Aguardando Parceiro", "Documentação", "Financeiro"].map((tab, i) => (
              <button key={i} className={`px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap transition-colors ${i === 0 ? "bg-[#f0edff] text-accent" : "text-muted hover:bg-gray-50"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-line">
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Pendência</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Família / Serviço</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Tipo</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Responsável</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Status</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <div>
                      <strong className="text-navy block">Falta Cópia do RG do Falecido</strong>
                      <span className="text-[10px] text-danger font-bold uppercase tracking-wider mt-1 block flex items-center gap-1">
                        <AlertCircle size={10}/> Urgente (Trava o Traslado)
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <strong className="text-navy block text-xs">Família Souza</strong>
                  <span className="text-xs text-muted">Traslado Interestadual</span>
                </td>
                <td className="py-4 px-5 text-xs font-bold text-navy">
                  Documentação
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2 text-navy text-xs">
                    <div className="w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center text-[10px] font-bold">AP</div>
                    Ana Paula
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#f0edff] text-accent text-[10px] font-bold uppercase tracking-wider">
                    Aguardando Família
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
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <div>
                      <strong className="text-navy block">Confirmação de Vaga no Crematório</strong>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <strong className="text-navy block text-xs">Família Oliveira</strong>
                  <span className="text-xs text-muted">Cremação Direta</span>
                </td>
                <td className="py-4 px-5 text-xs font-bold text-navy">
                  Serviço de Parceiro
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2 text-navy text-xs">
                    <div className="w-6 h-6 rounded-full bg-gray-200 text-muted flex items-center justify-center text-[10px] font-bold">CM</div>
                    Carlos Moura
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#fff6e3] text-[#a87200] text-[10px] font-bold uppercase tracking-wider">
                    Aguardando Parceiro
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

  if (role === "seguradora") {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-1">SLA e Pendências</h2>
            <p className="text-sm text-muted">Acompanhe casos atrasados, filas por equipe e envio de documentos.</p>
          </div>
          <div className="flex gap-2">
            <div className="bg-white border border-line rounded-xl p-1 flex">
              <button onClick={() => setViewMode("lista")} className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold transition-colors ${viewMode === "lista" ? "bg-gray-100 text-navy" : "text-muted hover:bg-gray-50"}`}><List size={14}/> Lista</button>
              <button onClick={() => setViewMode("kanban")} className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold transition-colors ${viewMode === "kanban" ? "bg-gray-100 text-navy" : "text-muted hover:bg-gray-50"}`}><Kanban size={14}/> Kanban</button>
            </div>
            <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
              <Plus size={16} /> Nova Tarefa
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-2 rounded-2xl border border-line shadow-sm">
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto">
            {["Todas (112)", "Fila de Triagem (45)", "SLA Crítico (12)", "Aguardando Beneficiário", "Aguardando Parceiro"].map((tab, i) => (
              <button key={i} className={`px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap transition-colors ${i === 0 ? "bg-[#f0edff] text-accent" : "text-muted hover:bg-gray-50"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-line">
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Pendência</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Caso / Protocolo</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Métrica de SLA</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Equipe Responsável</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Status</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <div>
                      <strong className="text-navy block">Análise de Divergência Cadastral</strong>
                      <span className="text-[10px] text-danger font-bold uppercase tracking-wider mt-1 block flex items-center gap-1">
                        <AlertCircle size={10}/> Urgente (SLA Estourado)
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <strong className="text-navy block text-xs">SIN-2026-9912</strong>
                  <span className="text-xs text-muted">Morte Acidental</span>
                </td>
                <td className="py-4 px-5 text-xs font-bold text-navy">
                  Prazo de Análise (D+3)
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2 text-navy text-xs">
                    <div className="w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center text-[10px] font-bold">SM</div>
                    Sinistros Morte
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#fff0f1] text-[#ce4e5d] text-[10px] font-bold uppercase tracking-wider">
                    Atrasado
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
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <div>
                      <strong className="text-navy block">Recebimento da Certidão de Óbito</strong>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <strong className="text-navy block text-xs">SIN-2026-9988</strong>
                  <span className="text-xs text-muted">Assistência Funeral</span>
                </td>
                <td className="py-4 px-5 text-xs font-bold text-navy">
                  Prazo de Documento (D+30)
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2 text-navy text-xs">
                    <div className="w-6 h-6 rounded-full bg-gray-200 text-muted flex items-center justify-center text-[10px] font-bold">AS</div>
                    Atendimento
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#f0edff] text-accent text-[10px] font-bold uppercase tracking-wider">
                    Aguardando Cliente
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

  if (role === "banco") {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-1">Pendências e Tratativas</h2>
            <p className="text-sm text-muted">Documentos faltantes, análise jurídica e aprovações internas necessárias.</p>
          </div>
          <div className="flex gap-2">
            <div className="bg-white border border-line rounded-xl p-1 flex">
              <button onClick={() => setViewMode("lista")} className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold transition-colors ${viewMode === "lista" ? "bg-gray-100 text-navy" : "text-muted hover:bg-gray-50"}`}><List size={14}/> Lista</button>
              <button onClick={() => setViewMode("kanban")} className={`px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold transition-colors ${viewMode === "kanban" ? "bg-gray-100 text-navy" : "text-muted hover:bg-gray-50"}`}><Kanban size={14}/> Kanban</button>
            </div>
            <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
              <Plus size={16} /> Nova Tratativa
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-2 rounded-2xl border border-line shadow-sm">
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto">
            {["Todas", "Análise Jurídica", "Falta Documento", "Divergência", "Aprovação Gerencial"].map((tab, i) => (
              <button key={i} className={`px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap transition-colors ${i === 0 ? "bg-[#f0edff] text-accent" : "text-muted hover:bg-gray-50"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-line">
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Descrição</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Protocolo Vinculado</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Responsável</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">SLA</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Status</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <div>
                      <strong className="text-navy block">Validar Escritura Pública (Sem Inventariante)</strong>
                      <span className="text-[10px] text-[#a87200] font-bold uppercase tracking-wider mt-1 block flex items-center gap-1">
                        <AlertCircle size={10}/> Risco Jurídico
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <strong className="text-navy block text-xs">SOL-2026-9912</strong>
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2 text-navy text-xs">
                    <div className="w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center text-[10px] font-bold">JUR</div>
                    Depto Jurídico
                  </div>
                </td>
                <td className="py-4 px-5 text-xs font-bold text-navy">
                  Vence amanhã
                </td>
                <td className="py-4 px-5">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#fff6e3] text-[#a87200] text-[10px] font-bold uppercase tracking-wider">
                    Em Análise
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
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <div>
                      <strong className="text-navy block">Procuração Vencida / Inválida</strong>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <strong className="text-navy block text-xs">SOL-2026-9915</strong>
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2 text-navy text-xs">
                    <div className="w-6 h-6 rounded-full bg-gray-200 text-muted flex items-center justify-center text-[10px] font-bold">AT</div>
                    Atendimento
                  </div>
                </td>
                <td className="py-4 px-5 text-xs font-bold text-[#ce4e5d]">
                  Estourado (+2d)
                </td>
                <td className="py-4 px-5">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#f0edff] text-accent text-[10px] font-bold uppercase tracking-wider">
                    Aguardando Cliente
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

  return (
    <div className="bg-white border border-line rounded-2xl shadow-sm p-10 text-center text-muted">
      Em construção para {role}
    </div>
  );
}
