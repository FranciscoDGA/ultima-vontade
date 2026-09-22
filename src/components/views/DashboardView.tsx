import React from "react";

const dashboardData: Record<string, any> = {
  familia: {
    k: [
      ["Progresso do caso", "64%", "18 de 28 etapas"],
      ["Tarefas abertas", "10", "3 urgentes"],
      ["Documentos", "23", "3 para revisar"],
      ["Próximo prazo", "3 dias", "Seguro de vida"],
    ],
    rows: [
      ["Seguro de vida", "Ana Souza", "3 dias", "Urgente"],
      ["Conta corrente", "Marcos Souza", "5 dias", "Próxima"],
      ["Documentos dos dependentes", "Ana Souza", "8 dias", "No prazo"],
    ],
    quickActions: [
      ["✓", "Continuar meu plano", "tasks"],
      ["▣", "Adicionar documento", "documents"],
      ["♧", "Convidar familiar", "people"],
    ],
  },
  advocacia: {
    k: [
      ["Casos ativos", "18", "+3 nesta semana"],
      ["Prazos em 7 dias", "7", "2 prioritários"],
      ["Docs. pendentes", "12", "4 aguardando cliente"],
      ["SLA cumprido", "92%", "meta de 90%"],
    ],
    rows: [
      ["Família Souza", "Seguro de vida", "Ana Souza", "Urgente"],
      ["Família Oliveira", "Documentos civis", "Rafael Lima", "Aguardando"],
      ["Família Santos", "Inventário", "Marcos Silva", "No prazo"],
    ],
    quickActions: [
      ["♙", "Cadastrar cliente", "clients"],
      ["▤", "Abrir inventário", "cases"],
      ["✦", "Pedir ajuda à IA", "ai"],
    ],
  },
  funeraria: {
    k: [
      ["Atendimentos no mês", "24", "+18% vs. anterior"],
      ["Aguardando ativação", "5", "contato necessário"],
      ["Prioritários", "2", "atender hoje"],
      ["Satisfação", "4,9/5", "19 avaliações"],
    ],
    rows: [
      ["Família Souza", "João Souza · hoje", "Ana Souza", "Ativo"],
      ["Família Oliveira", "Maria Oliveira · ontem", "Paulo Oliveira", "Aguardando"],
      ["Família Santos", "Carlos Santos · 12 set.", "Luciana Santos", "Concluído"],
    ],
    quickActions: [
      ["♙", "Ativar família", "clients"],
      ["▤", "Abrir serviço", "cases"],
      ["✓", "Ver pendências", "tasks"],
    ],
  },
  seguradora: {
    k: [
      ["Vidas cobertas", "1.248", "carteira ativa"],
      ["Casos no mês", "24", "+6 vs. anterior"],
      ["SLA de assistência", "92%", "meta de 90%"],
      ["Custo médio/caso", "R$ 184", "-8% no mês"],
    ],
    rows: [
      ["UV-2026-0148", "Vida · João Souza", "3 dias para SLA", "Em andamento"],
      ["UV-2026-0147", "Funeral · M. Oliveira", "Concluído em 9 dias", "Concluído"],
      ["UV-2026-0146", "Vida · C. Santos", "Documento pendente", "Atenção"],
    ],
    quickActions: [
      ["▤", "Abrir assistência", "cases"],
      ["◒", "Ver SLA", "tasks"],
      ["▣", "Exportar relatório", "documents"],
    ],
  },
  banco: {
    k: [
      ["Solicitações abertas", "36", "9 novas hoje"],
      ["Docs. pendentes", "9", "3 prioritários"],
      ["Auditoria completa", "98%", "últimos 30 dias"],
      ["Tempo médio", "4,6 dias", "-1,2 dia no mês"],
    ],
    rows: [
      ["SOL-8842", "Conta corrente · João Souza", "Ana Souza", "Documentos"],
      ["SOL-8837", "Seguro e previdência · M. Oliveira", "Paulo Oliveira", "Em análise"],
      ["SOL-8829", "Financiamento · C. Santos", "Luciana Santos", "Concluído"],
    ],
    quickActions: [
      ["▤", "Nova solicitação", "cases"],
      ["▣", "Validar documentos", "documents"],
      ["◒", "Ver auditoria", "settings"],
    ],
  },
};

export default function DashboardView({ role, setScreen }: { role: string; setScreen: (s: string) => void }) {
  const data = dashboardData[role];

  return (
    <div className="grid gap-4">
      {/* Notice */}
      <div className="p-4 flex justify-between items-center gap-4 bg-gradient-to-r from-[#eafaf6] to-[#eef3ff] border border-[#d9eee9] rounded-2xl mb-4">
        <div>
          <h3 className="text-navy m-0 mb-1 text-[15px] font-bold">
            {role === "familia"
              ? "Seu plano está sendo acompanhado com segurança."
              : "Bem-vindo ao seu workspace corporativo."}
          </h3>
          <p className="text-[#5b7282] m-0 text-[12px] leading-relaxed">
            O workspace adapta fluxo, permissões e linguagem ao perfil selecionado.
          </p>
        </div>
        <div className="text-[28px]">
          {role === "banco" ? "🏦" : role === "funeraria" ? "🕊️" : role === "familia" ? "✦" : "🛡️"}
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-3 mb-5">
        {data.k.map((kpi: string[], idx: number) => (
          <div key={idx} className="bg-white border border-line rounded-2xl p-4 shadow-sm">
            <small className="block text-muted text-[10px] uppercase font-[850] tracking-wider">
              {kpi[0]}
            </small>
            <strong className="block text-navy text-[25px] mt-2 font-bold">{kpi[1]}</strong>
            <span className="block text-ok text-[11px] mt-1.5">{kpi[2]}</span>
          </div>
        ))}
      </div>

      {/* Two columns layout */}
      <div className="grid grid-cols-[1.35fr_0.8fr] gap-4">
        {/* Table */}
        <div className="bg-white border border-line rounded-2xl shadow-sm">
          <div className="flex items-center justify-between gap-4 p-4 pb-3">
            <div>
              <h2 className="text-navy text-[16px] font-bold m-0">
                {role === "familia" ? "Próximas etapas" : "Fila prioritária"}
              </h2>
            </div>
            <button className="bg-accent text-white px-3 py-1.5 rounded-lg text-xs font-bold">
              {role === "familia" ? "+ Nova tarefa" : "+ Novo caso"}
            </button>
          </div>
          <div className="overflow-auto">
            <table className="w-full border-collapse text-[12px] min-w-[580px]">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 border-t border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">
                    {role === "familia" ? "Etapa" : "Atendimento"}
                  </th>
                  <th className="text-left py-3 px-4 border-t border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">
                    {role === "familia" ? "Responsável" : "Contexto"}
                  </th>
                  <th className="text-left py-3 px-4 border-t border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">
                    Prazo
                  </th>
                  <th className="text-left py-3 px-4 border-t border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.rows.map((row: string[], idx: number) => {
                  const statusRaw = row[3].toLowerCase();
                  const isDanger = statusRaw.includes("urg") || statusRaw.includes("aten");
                  const isWarn = statusRaw.includes("agu") || statusRaw.includes("doc");
                  const statusClass = isDanger 
                    ? "bg-[#fff0f1] text-[#ce4e5d]" 
                    : isWarn 
                      ? "bg-[#fff6e3] text-[#a87200]" 
                      : "bg-[#eaf8f5] text-[#078b7d]";

                  return (
                    <tr key={idx}>
                      <td className="text-left py-3 px-4 border-t border-[#eef1f5]">
                        <strong className="text-navy font-bold">{row[0]}</strong>
                      </td>
                      <td className="text-left py-3 px-4 border-t border-[#eef1f5]">{row[1]}</td>
                      <td className="text-left py-3 px-4 border-t border-[#eef1f5]">{row[2]}</td>
                      <td className="text-left py-3 px-4 border-t border-[#eef1f5]">
                        <span className={`inline-block px-2 py-1 rounded-full text-[10px] font-[850] whitespace-nowrap ${statusClass}`}>
                          {row[3]}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-line rounded-2xl shadow-sm">
          <div className="flex items-center justify-between gap-4 p-4 pb-3">
            <div>
              <h2 className="text-navy text-[16px] font-bold m-0">Ações rápidas</h2>
              <span className="text-muted text-[11px] mt-1 block">Atalhos do seu perfil</span>
            </div>
          </div>
          <div className="px-4 pb-3">
            {data.quickActions.map((action: string[], idx: number) => (
              <div 
                key={idx} 
                onClick={() => setScreen(action[2])}
                className={`flex items-center gap-3 border-t border-[#f0f2f6] py-3 cursor-pointer ${idx === 0 ? 'border-t-0' : ''}`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#eef3ff] text-accent grid place-items-center font-[850] text-[11px]">
                  {action[0]}
                </div>
                <div className="flex-1">
                  <b className="text-navy block text-[12px]">{action[1]}</b>
                  <small className="text-muted text-[10px]">Clique para abrir este módulo</small>
                </div>
                <span className="text-muted">›</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
