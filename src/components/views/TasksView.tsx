import React, { useState } from "react";

export default function TasksView({ role }: { role: string }) {
  const isFamily = role === "familia";
  const title = isFamily ? "Meu plano de providências" : "Tarefas e prazos";
  
  const [tasks, setTasks] = useState([
    { t: "Confirmar cobertura do seguro de vida", s: "Seguros · vence em 3 dias", urgent: true, done: false },
    { t: "Solicitar encerramento da conta corrente", s: "Bancos · vence em 5 dias", urgent: false, done: false },
    { t: "Separar documentos dos dependentes", s: "Benefícios · vence em 8 dias", urgent: false, done: false },
    { t: "Cancelar assinatura de streaming", s: "Serviços · concluída ontem", urgent: false, done: true },
  ]);

  const toggleTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const familyTasks = [
    {
      title: "Solicitar encerramento da conta corrente",
      category: "Bancos",
      reason: "Evitar cobrança de taxas e proteger o saldo para o inventário.",
      assignee: "Marcos Souza (Filho)",
      deadline: "28/09/2026",
      docs: "Certidão de Óbito, RG do Herdeiro",
      status: "Aguardando protocolo",
      protocol: "",
      nextAction: "Ir à agência bancária com os documentos impressos.",
      statusColor: "bg-[#fff6e3] text-[#a87200]"
    },
    {
      title: "Dar entrada no Seguro de Vida",
      category: "Seguros",
      reason: "Garantir o recebimento da indenização para cobrir custos imediatos.",
      assignee: "Ana Souza (Cônjuge)",
      deadline: "Hoje",
      docs: "Apólice, Certidão de Óbito original",
      status: "Urgente",
      protocol: "-",
      nextAction: "Ligar para corretora Seguros S/A",
      statusColor: "bg-[#fff0f1] text-[#ce4e5d]"
    },
    {
      title: "Cancelar plano de internet",
      category: "Assinaturas e Contas",
      reason: "Evitar débitos automáticos.",
      assignee: "Marcos Souza",
      deadline: "15/10/2026",
      docs: "Fatura recente",
      status: "Concluído",
      protocol: "202688991234",
      nextAction: "-",
      statusColor: "bg-[#eaf8f5] text-[#078b7d]"
    }
  ];

  if (isFamily) {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-2">Meu Plano</h2>
            <p className="text-muted text-sm max-w-xl">
              Organize todas as etapas financeiras, jurídicas e administrativas pós-falecimento. Acompanhe os responsáveis e prazos.
            </p>
          </div>
          <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110">
            + Adicionar Tarefa
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {["Todos", "Documentos civis", "Bancos", "Seguros", "Imóveis", "Veículos", "Dívidas", "Inventário"].map(cat => (
            <button key={cat} className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold border ${cat === 'Todos' ? 'bg-navy text-white border-navy' : 'bg-white text-navy border-line hover:border-accent'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Tasks List */}
        <div className="grid gap-4">
          {familyTasks.map((task, idx) => (
            <div key={idx} className="bg-white border border-line rounded-2xl p-5 shadow-sm hover:border-accent transition-colors cursor-pointer" onClick={() => setSelectedTask(true)}>
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${task.status === 'Concluído' ? 'bg-ok' : task.status === 'Urgente' ? 'bg-danger' : 'bg-[#a87200]'}`}></div>
                  <h3 className="text-[16px] font-bold text-navy m-0">{task.title}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${task.statusColor}`}>
                  {task.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                <div>
                  <span className="block text-[11px] font-bold text-muted uppercase tracking-wider mb-1">Categoria</span>
                  <span className="text-navy font-medium">{task.category}</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-muted uppercase tracking-wider mb-1">Responsável</span>
                  <div className="flex items-center gap-1.5 text-navy font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#f0edff] text-accent flex items-center justify-center text-[10px]">{task.assignee.charAt(0)}</div>
                    {task.assignee}
                  </div>
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-muted uppercase tracking-wider mb-1">Prazo</span>
                  <span className="text-navy font-medium">{task.deadline}</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-muted uppercase tracking-wider mb-1">Docs Necessários</span>
                  <span className="text-navy font-medium flex items-center gap-1"><FileText size={14} className="text-muted"/> Ver lista</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Task Detail Modal (simulated) */}
        {selectedTask && (
          <div className="fixed inset-0 bg-navy/60 z-50 flex items-center justify-end" onClick={() => setSelectedTask(false)}>
            <div className="bg-white h-full w-full max-w-md shadow-2xl animate-in slide-in-from-right overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="p-6 border-b border-line bg-gray-50 flex justify-between items-center sticky top-0 z-10">
                <h3 className="text-lg font-bold text-navy">Detalhes da Tarefa</h3>
                <button onClick={() => setSelectedTask(false)} className="text-muted hover:text-navy font-bold">Fechar</button>
              </div>
              
              <div className="p-6 space-y-6">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#fff6e3] text-[#a87200] mb-3`}>
                    Aguardando Protocolo
                  </span>
                  <h2 className="text-xl font-bold text-navy">Solicitar encerramento da conta corrente</h2>
                  <p className="text-muted text-sm mt-2 flex gap-2"><Info size={16} className="text-accent shrink-0"/> Evitar cobrança de taxas e proteger o saldo para o inventário.</p>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl border border-line">
                  <div>
                    <label className="text-[10px] font-bold text-muted uppercase tracking-wider block mb-1">Responsável</label>
                    <span className="text-sm font-semibold text-navy">Marcos Souza</span>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-muted uppercase tracking-wider block mb-1">Prazo</label>
                    <span className="text-sm font-semibold text-danger">28/09/2026</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-navy mb-3">Documentos Necessários</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border border-line rounded-lg">
                      <div className="flex items-center gap-2 text-sm text-navy"><CheckCircle2 size={16} className="text-ok"/> Certidão de Óbito</div>
                      <span className="text-xs text-ok font-bold">No Cofre</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-[#f5c2c7] bg-[#fff0f1] rounded-lg">
                      <div className="flex items-center gap-2 text-sm text-[#ce4e5d]"><AlertCircle size={16}/> RG do Herdeiro</div>
                      <button className="text-xs font-bold bg-white text-[#ce4e5d] px-2 py-1 rounded border border-[#f5c2c7] hover:bg-[#ce4e5d] hover:text-white transition-colors">Fazer Upload</button>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-navy mb-3">Próxima Ação</h4>
                  <p className="text-sm text-muted bg-[#f0edff] p-4 rounded-xl border border-[#ded9ff]">
                    Ir à agência bancária com os documentos impressos e solicitar o protocolo de atendimento.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-navy mb-2">Comprovante / Protocolo</h4>
                  <input type="text" placeholder="Digite o nº do protocolo" className="w-full border border-line rounded-xl p-3 focus:border-accent outline-none text-sm mb-2" />
                  <button className="flex items-center justify-center gap-2 w-full py-3 border border-dashed border-gray-400 rounded-xl text-muted text-sm font-bold hover:bg-gray-50 transition-colors">
                    <Upload size={16} /> Anexar Comprovante
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- Advocacia / Corporativo View ---
  return (
    <div className="grid gap-4">
      <div className="flex justify-between items-center gap-4 flex-wrap mb-2">
        <div>
          <h2 className="m-0 text-navy text-[18px] font-bold">Tarefas e prazos</h2>
          <p className="mt-1 text-muted text-[12px]">O sistema sugere etapas; a equipe confirma, atribui e registra evidências.</p>
        </div>
        <button className="bg-accent text-white px-3.5 py-2.5 rounded-[9px] text-[12px] font-[800]">
          + Nova tarefa
        </button>
      </div>

      <div className="flex gap-2 mb-2 flex-wrap">
        <button className="px-3 py-2 rounded-lg text-[11px] bg-[#eaf1ff] border border-[#d7e4ff] text-accent font-[850]">Todas</button>
        <button className="px-3 py-2 rounded-lg text-[11px] bg-white border border-line text-muted">Urgentes</button>
        <button className="px-3 py-2 rounded-lg text-[11px] bg-white border border-line text-muted">Minhas</button>
        <button className="px-3 py-2 rounded-lg text-[11px] bg-white border border-line text-muted">Concluídas</button>
      </div>

      <div className="bg-white border border-line rounded-2xl shadow-sm">
        {tasks.map((task, i) => (
          <div key={i} className="grid grid-cols-[25px_1fr_auto] items-center gap-3 p-4 border-t border-[#eef1f5] first:border-t-0">
            <button 
              onClick={() => toggleTask(i)}
              className={`w-[18px] h-[18px] border-2 rounded-[5px] text-[11px] grid place-items-center transition-colors ${
                task.done ? "bg-ok border-ok text-white" : "bg-white border-[#cad5e4] text-white"
              }`}
            >
              {task.done ? "✓" : ""}
            </button>
            <div>
              <b className="text-[12px] text-navy block">{task.t}</b>
              <small className="text-[10px] text-muted block mt-1">{task.s}</small>
            </div>
            <span className={`inline-block px-2 py-1 rounded-full text-[10px] font-[850] whitespace-nowrap ${
              task.done ? "bg-[#eef1f5] text-[#7b8799]" : task.urgent ? "bg-[#fff0f1] text-[#ce4e5d]" : "bg-[#eaf8f5] text-[#078b7d]"
            }`}>
              {task.done ? "Concluída" : task.urgent ? "Urgente" : "No prazo"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
