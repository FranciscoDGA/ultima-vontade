import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { name: "Jan", casos: 4 },
  { name: "Fev", casos: 7 },
  { name: "Mar", casos: 12 },
  { name: "Abr", casos: 18 },
  { name: "Mai", casos: 15 },
  { name: "Jun", casos: 24 },
];

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
      ["Providências identificadas", "28", "18 concluídas"],
      ["Aguardando documentos", "6", "23 já organizados"],
      ["Prazo próximo", "3", "Atenção necessária"],
      ["Situação de risco", "1", "4 pessoas envolvidas"],
    ],
    rows: [
      ["Família Silva", "Inventário com Seguro", "Hoje", "Urgente: ITCMD"],
      ["Família Oliveira", "Seguro de Vida", "2 dias", "Aguardando certidão"],
      ["Família Souza", "Alvará Judicial", "15 set", "No prazo"],
    ],
    quickActions: [
      ["♙", "+ Novo Caso (Smart)", "cases"],
      ["▤", "Cobrar Pendências", "tasks"],
      ["✦", "Relatório de Produtividade", "documents"],
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

  if (role === "familia") {
    return (
      <div className="grid gap-6 max-w-4xl mx-auto animate-in fade-in">
        {/* Welcome Message */}
        <div className="bg-gradient-to-br from-[#f0edff] to-[#edf5ff] border border-[#ded9ff] rounded-2xl p-8 text-center shadow-sm">
          <h2 className="text-[24px] font-bold text-[#41337c] mb-2">Olá, Família Souza. Estamos aqui para ajudar.</h2>
          <p className="text-[#665d88] text-[14px] max-w-2xl mx-auto leading-relaxed">
            Seu processo de organização patrimonial e inventário está sendo conduzido por <b>Lima & Associados</b>. Siga as etapas abaixo e conte conosco.
          </p>
        </div>

        {/* Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div className="bg-white border border-line rounded-xl p-4 text-center">
            <strong className="block text-2xl text-navy">18/28</strong>
            <span className="text-[10px] text-muted font-bold uppercase tracking-wider">Etapas concluídas</span>
          </div>
          <div className="bg-white border border-line rounded-xl p-4 text-center">
            <strong className="block text-2xl text-navy">3</strong>
            <span className="text-[10px] text-muted font-bold uppercase tracking-wider">Docs pendentes</span>
          </div>
          <div className="bg-white border border-line rounded-xl p-4 text-center">
            <strong className="block text-2xl text-danger">2</strong>
            <span className="text-[10px] text-muted font-bold uppercase tracking-wider">Tarefas urgentes</span>
          </div>
          <div className="bg-white border border-line rounded-xl p-4 text-center">
            <strong className="block text-2xl text-[#a87200]">3 dias</strong>
            <span className="text-[10px] text-muted font-bold uppercase tracking-wider">Próximo prazo</span>
          </div>
          <div className="bg-white border border-line rounded-xl p-4 text-center">
            <strong className="block text-2xl text-navy">4</strong>
            <span className="text-[10px] text-muted font-bold uppercase tracking-wider">Pessoas envolvidas</span>
          </div>
        </div>

        {/* Big Progress Bar */}
        <div className="bg-white border border-line rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-navy text-[16px] m-0">Progresso Geral</h3>
            <span className="bg-ok/10 text-ok px-3 py-1 rounded-full text-xs font-bold">64% Concluído</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-3 mb-2">
            <div className="bg-accent h-3 rounded-full transition-all" style={{ width: '64%' }}></div>
          </div>
          <div className="flex justify-between text-xs text-muted font-bold uppercase tracking-wider mt-3">
            <span className="text-accent">1. Documentos Iniciais</span>
            <span className="text-accent">2. Inventário</span>
            <span>3. Bancos e Seguros</span>
            <span>4. Conclusão</span>
          </div>
        </div>

        {/* Pendencies & Quick Actions */}
        <div className="grid md:grid-cols-[1fr_250px] gap-6">
          <div className="space-y-4">
            <div className="bg-[#fff0f1] border border-[#f5c2c7] rounded-2xl p-5 shadow-sm">
              <h3 className="text-[#ce4e5d] font-bold text-[15px] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ce4e5d]"></span> Alerta Importante
              </h3>
              <p className="text-[#a83240] text-sm mb-4">O escritório solicitou o envio da Certidão de Casamento atualizada para dar entrada no inventário.</p>
              <button onClick={() => setScreen("documents")} className="bg-[#ce4e5d] text-white px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:brightness-110 transition-all">
                Enviar Documento
              </button>
            </div>
            <div className="bg-[#fff6e3] border border-[#f5d996] rounded-2xl p-5 shadow-sm">
              <h3 className="text-[#a87200] font-bold text-[15px] mb-2 flex items-center gap-2">Mensagem do Profissional</h3>
              <p className="text-[#8c5f00] text-sm">"Ana, por favor confira a lista de bens que inseri no plano e valide se esquecemos de algum veículo." - <b>Dr. Rafael Lima</b></p>
            </div>
          </div>

          <div className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <h3 className="text-navy font-bold text-[14px] mb-4">Ações Rápidas</h3>
            <div className="space-y-2">
              <button onClick={() => setScreen("tasks")} className="w-full text-left p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                ▶ Continuar plano
              </button>
              <button onClick={() => setScreen("tasks")} className="w-full text-left p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                + Adicionar tarefa
              </button>
              <button onClick={() => setScreen("clients")} className="w-full text-left p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                👤 Convidar familiar
              </button>
              <button onClick={() => setScreen("ai")} className="w-full text-left p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                🤖 Pedir ajuda (IA)
              </button>
              <button className="w-full text-left p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                💬 Falar c/ profissional
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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

      {/* Chart Section */}
      {role !== "familia" && (
        <div className="bg-white border border-line rounded-2xl shadow-sm p-5 mt-1">
          <div className="mb-4">
            <h2 className="text-navy text-[16px] font-bold m-0">Volume de Casos (Últimos 6 meses)</h2>
            <p className="text-muted text-[12px] mt-1">Acompanhamento de novos registros na plataforma.</p>
          </div>
          <div className="h-[250px] w-full text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCasos" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--accent)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--muted)' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--muted)' }} />
                <CartesianGrid vertical={false} stroke="#eef1f5" />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #eef1f5', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }} 
                  itemStyle={{ color: 'var(--navy)', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="casos" stroke="var(--accent)" strokeWidth={3} fillOpacity={1} fill="url(#colorCasos)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}
