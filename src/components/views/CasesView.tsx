import React from "react";

export default function CasesView({ role }: { role: string }) {
  const title = role === "banco" ? "Solicitações sucessórias" : role === "seguradora" ? "Casos de assistência" : role === "funeraria" ? "Serviços ativos" : role === "familia" ? "Meu caso" : "Casos e inventários";

  return (
    <div className="grid gap-4">
      <div className="flex justify-between items-center gap-4 flex-wrap mb-2">
        <div>
          <h2 className="m-0 text-navy text-[18px] font-bold">{title}</h2>
          <p className="mt-1 text-muted text-[12px]">Cada caso reúne tarefas, documentos, responsáveis, prazos e histórico.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-line text-navy px-3.5 py-2.5 rounded-[9px] text-[12px] font-[800]">Importar</button>
          <button className="bg-accent text-white px-3.5 py-2.5 rounded-[9px] text-[12px] font-[800]">+ Abrir caso</button>
        </div>
      </div>

      <div className="flex gap-2 mb-2 flex-wrap">
        <button className="px-3 py-2 rounded-lg text-[11px] bg-[#eaf1ff] border border-[#d7e4ff] text-accent font-[850]">Todos (18)</button>
        <button className="px-3 py-2 rounded-lg text-[11px] bg-white border border-line text-muted">Em andamento (12)</button>
        <button className="px-3 py-2 rounded-lg text-[11px] bg-white border border-line text-muted">Aguardando (4)</button>
        <button className="px-3 py-2 rounded-lg text-[11px] bg-white border border-line text-muted">Concluídos (2)</button>
      </div>

      <div className="bg-white border border-line rounded-2xl shadow-sm overflow-auto">
        <table className="w-full border-collapse text-[12px] min-w-[580px]">
          <thead>
            <tr>
              <th className="text-left py-3 px-5 border-b border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">Caso</th>
              <th className="text-left py-3 px-5 border-b border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">Responsável</th>
              <th className="text-left py-3 px-5 border-b border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">Atualização</th>
              <th className="text-left py-3 px-5 border-b border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">Progresso</th>
              <th className="text-left py-3 px-5 border-b border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><strong className="text-navy">UV-2026-0148 · Família Souza</strong></td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Ana Souza</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Hoje, 14:20</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">64%</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><span className="inline-block px-2 py-1 rounded-full bg-[#eaf8f5] text-[#078b7d] text-[10px] font-[850]">Em andamento</span></td>
            </tr>
            <tr>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><strong className="text-navy">UV-2026-0147 · Família Oliveira</strong></td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Rafael Lima</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Ontem</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">82%</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><span className="inline-block px-2 py-1 rounded-full bg-[#fff6e3] text-[#a87200] text-[10px] font-[850]">Aguardando</span></td>
            </tr>
            <tr>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><strong className="text-navy">UV-2026-0146 · Família Santos</strong></td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Marcos Silva</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">18 set.</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">100%</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><span className="inline-block px-2 py-1 rounded-full bg-[#eef1f5] text-[#7b8799] text-[10px] font-[850]">Concluído</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
