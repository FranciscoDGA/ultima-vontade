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

  return (
    <div className="grid gap-4">
      <div className="flex justify-between items-center gap-4 flex-wrap mb-2">
        <div>
          <h2 className="m-0 text-navy text-[18px] font-bold">{title}</h2>
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
