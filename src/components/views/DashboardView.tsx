import React from "react";
import { Users, FileText, CheckCircle2, Clock, AlertCircle, PhoneCall, Link2, Plus, Mail, FileBarChart, ArrowRight, UserPlus, AlertTriangle, FolderOpen } from "lucide-react";

interface DashboardProps {
  role: string;
  setScreen: (screen: string) => void;
  setShowWizard?: (show: boolean) => void;
}

export default function DashboardView({ role, setScreen, setShowWizard }: DashboardProps) {
  if (role === "familia") {
    return (
      <div className="grid gap-6 max-w-4xl mx-auto animate-in fade-in">
        <div className="grid md:grid-cols-[1fr_300px] gap-6">
          <div className="bg-gradient-to-br from-[#f0edff] to-white border border-[#ded9ff] p-6 rounded-3xl shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] -z-10"></div>
            
            <div>
              <span className="inline-block px-3 py-1 bg-white text-accent font-bold text-xs rounded-full shadow-sm mb-4">
                Fase 2 de 5: Planejamento
              </span>
              <h2 className="text-2xl font-bold text-navy mb-2">Olá, Ana Souza</h2>
              <p className="text-sm text-[#665d88] leading-relaxed max-w-md">
                Você e o Dr. Rafael estão trabalhando no caso de <b className="text-navy">Carlos Costa</b>. 
                Sua próxima etapa é levantar os documentos dos dependentes.
              </p>
            </div>

            <div className="mt-8 bg-white/60 p-4 rounded-2xl border border-white backdrop-blur-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-navy uppercase tracking-wider">Progresso Geral</span>
                <span className="text-xs font-bold text-accent">40%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-accent w-[40%] rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-4">
            <div className="bg-white border border-line rounded-2xl p-5 shadow-sm cursor-pointer hover:border-accent transition-colors group" onClick={() => setScreen("tasks")}>
              <div className="flex justify-between items-start mb-2">
                <div className="w-10 h-10 bg-[#fff0f1] text-[#ce4e5d] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <AlertCircle size={20} />
                </div>
                <span className="text-2xl font-bold text-navy">2</span>
              </div>
              <h3 className="font-bold text-navy text-sm">Ações Pendentes</h3>
              <p className="text-xs text-muted mt-1">1 tarefa vence esta semana</p>
            </div>

            <div className="bg-white border border-line rounded-2xl p-5 shadow-sm cursor-pointer hover:border-accent transition-colors group" onClick={() => setScreen("ai")}>
              <div className="flex justify-between items-start mb-2">
                <div className="w-10 h-10 bg-[#f0edff] text-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText size={20} />
                </div>
              </div>
              <h3 className="font-bold text-navy text-sm">Tem Dúvidas?</h3>
              <p className="text-xs text-muted mt-1">Nossa inteligência ajuda você.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-navy mb-4">Sua Próxima Tarefa</h3>
          <div className="bg-white border border-line rounded-2xl shadow-sm p-5 flex items-center justify-between hover:border-accent transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-muted group-hover:text-accent transition-colors border border-line">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-navy text-[16px]">Solicitar Extrato Bancário</h4>
                <p className="text-sm text-muted">Bancos e Finanças • <span className="text-[#ce4e5d] font-bold">Vence em 3 dias</span></p>
              </div>
            </div>
            <button className="px-5 py-2.5 bg-gray-50 border border-line text-navy rounded-xl text-sm font-bold shadow-sm hover:bg-gray-100 transition-colors">
              Iniciar
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (role === "advocacia") {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-muted font-[850] uppercase tracking-wider block mb-2">Casos Ativos</span>
            <strong className="text-3xl text-navy block mb-1">42</strong>
            <span className="text-xs text-ok font-bold">+5 esta semana</span>
          </div>
          <div className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-muted font-[850] uppercase tracking-wider block mb-2">Novos Clientes</span>
            <strong className="text-3xl text-navy block mb-1">12</strong>
            <span className="text-xs text-ok font-bold">Últimos 30 dias</span>
          </div>
          <div className="bg-[#fff0f1] border border-[#f5c2c7] rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-[#ce4e5d] font-[850] uppercase tracking-wider block mb-2">Prazos na Semana</span>
            <strong className="text-3xl text-[#a83240] block mb-1">8</strong>
            <span className="text-xs text-[#ce4e5d] font-bold">3 próximos do vencimento</span>
          </div>
          <div className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-muted font-[850] uppercase tracking-wider block mb-2">Casos Parados</span>
            <strong className="text-3xl text-[#a87200] block mb-1">4</strong>
            <span className="text-xs text-muted font-bold">Aguardando cliente</span>
          </div>
          <div className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-muted font-[850] uppercase tracking-wider block mb-2">Docs Pendentes</span>
            <strong className="text-3xl text-navy block mb-1">115</strong>
            <span className="text-xs text-muted font-bold">Em 12 casos ativos</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-muted font-[850] uppercase tracking-wider block mb-2">Tarefas por Adv</span>
            <strong className="text-2xl text-navy block mb-1">14.5</strong>
            <span className="text-xs text-muted font-bold">Média atual</span>
          </div>
          <div className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-muted font-[850] uppercase tracking-wider block mb-2">Tempo Médio / Caso</span>
            <strong className="text-2xl text-navy block mb-1">45 dias</strong>
            <span className="text-xs text-ok font-bold">-12% vs mês anterior</span>
          </div>
          <div className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-muted font-[850] uppercase tracking-wider block mb-2">Taxa de Conclusão</span>
            <strong className="text-2xl text-navy block mb-1">88%</strong>
            <span className="text-xs text-muted font-bold">No prazo estimado</span>
          </div>
          <div className="bg-gradient-to-br from-[#f0edff] to-white border border-[#ded9ff] rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-accent font-[850] uppercase tracking-wider block mb-2">Satisfação (NPS)</span>
            <strong className="text-2xl text-accent block mb-1">9.4/10</strong>
            <span className="text-xs text-accent font-bold">Famílias atendidas</span>
          </div>
          <div className="bg-[#fff6e3] border border-[#f5d996] rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-[#a87200] font-[850] uppercase tracking-wider block mb-2">Risco de Multa</span>
            <strong className="text-2xl text-[#8c5f00] block mb-1">2 Casos</strong>
            <span className="text-xs text-[#a87200] font-bold">Prazo de 60 dias (ITCMD)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-6">
          <div className="space-y-6">
            <div className="bg-white border border-line rounded-2xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-navy">Prazos e Alertas da Semana</h3>
                <button className="text-sm font-bold text-accent hover:underline flex items-center gap-1">Ver todos <ArrowRight size={14}/></button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-[#fff0f1] border border-[#f5c2c7] rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white text-[#ce4e5d] flex items-center justify-center font-bold shadow-sm">
                      <AlertTriangle size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#a83240]">Vencimento ITCMD - Família Costa</h4>
                      <p className="text-xs text-[#ce4e5d]">Prazo fatal em 3 dias (Evitar multa de 20%)</p>
                    </div>
                  </div>
                  <button onClick={() => setScreen("cases")} className="px-3 py-1.5 bg-white text-[#ce4e5d] text-xs font-bold rounded-lg border border-[#f5c2c7] hover:bg-gray-50">Acessar Caso</button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 border border-line rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white text-navy flex items-center justify-center font-bold shadow-sm">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy">Reunião de Alinhamento - Inventário Silva</h4>
                      <p className="text-xs text-muted">Hoje às 14:00 - Dr. Rafael (Sala 2)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-line rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-navy mb-4">Ações Rápidas</h3>
            <div className="space-y-2">
              <button onClick={() => setShowWizard && setShowWizard(true)} className="w-full flex items-center gap-3 p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                <Plus size={16} className="text-accent"/> Abrir Novo Caso
              </button>
              <button onClick={() => setScreen("clients")} className="w-full flex items-center gap-3 p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                <UserPlus size={16} className="text-accent"/> Cadastrar Cliente
              </button>
              <button onClick={() => setScreen("tasks")} className="w-full flex items-center gap-3 p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                <CheckCircle2 size={16} className="text-accent"/> Distribuir Tarefa
              </button>
              <button onClick={() => setScreen("cases")} className="w-full flex items-center gap-3 p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                <Mail size={16} className="text-accent"/> Convidar Família
              </button>
              <button onClick={() => setScreen("tasks")} className="w-full flex items-center gap-3 p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                <AlertCircle size={16} className="text-accent"/> Revisar Pendências
              </button>
              <button onClick={() => setScreen("reports")} className="w-full flex items-center gap-3 p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                <FileBarChart size={16} className="text-accent"/> Acessar Relatório
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (role === "funeraria") {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-1">Central de Atendimentos</h2>
            <p className="text-sm text-muted">Gestão de assistência, famílias e serviços prestados.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-white border border-line text-navy px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 flex items-center gap-2">
              <ArrowRight size={16} /> Relatórios
            </button>
            <button onClick={() => setShowWizard && setShowWizard(true)} className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
              <Plus size={16} /> Novo Atendimento
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-muted font-[850] uppercase tracking-wider block mb-2">Atendimentos Hoje</span>
            <strong className="text-3xl text-navy block mb-1">12</strong>
            <span className="text-xs text-ok font-bold">+3 novas famílias</span>
          </div>
          <div className="bg-gradient-to-br from-[#f0edff] to-white border border-[#ded9ff] rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-accent font-[850] uppercase tracking-wider block mb-2">Assistência Ativada</span>
            <strong className="text-3xl text-accent block mb-1">45</strong>
            <span className="text-xs text-accent font-bold">Serviços em andamento</span>
          </div>
          <div className="bg-[#fff0f1] border border-[#f5c2c7] rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-[#ce4e5d] font-[850] uppercase tracking-wider block mb-2">Atend. Prioritários</span>
            <strong className="text-3xl text-[#a83240] block mb-1">3</strong>
            <span className="text-xs text-[#ce4e5d] font-bold">Requer atenção imediata</span>
          </div>
          <div className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-muted font-[850] uppercase tracking-wider block mb-2">Pendências</span>
            <strong className="text-3xl text-navy block mb-1">28</strong>
            <span className="text-xs text-muted font-bold">Aguardando documentos</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-muted font-[850] uppercase tracking-wider block mb-2">Tempo Médio de Ativação</span>
            <strong className="text-2xl text-navy block mb-1">45 min</strong>
            <span className="text-xs text-ok font-bold">Excelente</span>
          </div>
          <div className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-muted font-[850] uppercase tracking-wider block mb-2">Satisfação das Famílias</span>
            <strong className="text-2xl text-navy block mb-1">9.8/10</strong>
            <span className="text-xs text-muted font-bold">Média do mês</span>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-6">
          <div className="space-y-6">
            <div className="bg-white border border-line rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-navy mb-4">Avisos e Pendências Críticas</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-[#fff0f1] border border-[#f5c2c7] rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white text-[#ce4e5d] flex items-center justify-center font-bold shadow-sm">
                      <AlertTriangle size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#a83240]">Documentação do Traslado - Família Souza</h4>
                      <p className="text-xs text-[#ce4e5d]">Parceiro (Transportadora) aguardando guia de liberação.</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 border border-line rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white text-navy flex items-center justify-center font-bold shadow-sm">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy">Preparação Memorial Digital - Família Lima</h4>
                      <p className="text-xs text-muted">Aguardando fotos enviadas pela família.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-line rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-navy mb-4">Ações Rápidas</h3>
            <div className="space-y-2">
              <button onClick={() => setShowWizard && setShowWizard(true)} className="w-full flex items-center gap-3 p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                <UserPlus size={16} className="text-accent"/> Cadastrar Família
              </button>
              <button onClick={() => setScreen("cases")} className="w-full flex items-center gap-3 p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                <Plus size={16} className="text-accent"/> Ativar Assistência
              </button>
              <button onClick={() => setScreen("cases")} className="w-full flex items-center gap-3 p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                <FolderOpen size={16} className="text-accent"/> Abrir Serviço
              </button>
              <button onClick={() => setScreen("team")} className="w-full flex items-center gap-3 p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                <CheckCircle2 size={16} className="text-accent"/> Atribuir Atendente
              </button>
              <button onClick={() => setScreen("clients")} className="w-full flex items-center gap-3 p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                <Mail size={16} className="text-accent"/> Enviar Convite
              </button>
              <button onClick={() => setScreen("tasks")} className="w-full flex items-center gap-3 p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                <AlertCircle size={16} className="text-accent"/> Acompanhar Pendência
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (role === "seguradora") {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-1">Painel da Operação</h2>
            <p className="text-sm text-muted">Gestão de assistências, coberturas e tempo de atendimento (SLA).</p>
          </div>
          <button onClick={() => setShowWizard && setShowWizard(true)} className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
            <Plus size={16} /> Abrir Caso
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-muted font-[850] uppercase tracking-wider block mb-2">Vidas Cobertas</span>
            <strong className="text-3xl text-navy block mb-1">1.2M</strong>
            <span className="text-xs text-ok font-bold">Base ativa</span>
          </div>
          <div className="bg-gradient-to-br from-[#f0edff] to-white border border-[#ded9ff] rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-accent font-[850] uppercase tracking-wider block mb-2">Casos Abertos</span>
            <strong className="text-3xl text-accent block mb-1">345</strong>
            <span className="text-xs text-accent font-bold">Assistências em curso</span>
          </div>
          <div className="bg-white border border-line rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-muted font-[850] uppercase tracking-wider block mb-2">SLA Médio (1º Contato)</span>
            <strong className="text-3xl text-navy block mb-1">15m</strong>
            <span className="text-xs text-ok font-bold">Dentro da meta (20m)</span>
          </div>
          <div className="bg-[#fff0f1] border border-[#f5c2c7] rounded-2xl p-5 shadow-sm">
            <span className="text-[11px] text-[#ce4e5d] font-[850] uppercase tracking-wider block mb-2">Estourando SLA</span>
            <strong className="text-3xl text-[#a83240] block mb-1">12</strong>
            <span className="text-xs text-[#ce4e5d] font-bold">Atraso na liberação</span>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-6">
          <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden p-6">
            <h3 className="text-lg font-bold text-navy mb-4">Casos por Produto</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="font-bold text-navy">Seguro de Vida (Sinistro)</span><span className="text-muted">145 casos</span></div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-accent w-[45%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="font-bold text-navy">Assistência Funeral</span><span className="text-muted">110 casos</span></div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-accent w-[35%] opacity-80"></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="font-bold text-navy">Assistência Jurídica/Documental</span><span className="text-muted">65 casos</span></div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-accent w-[15%] opacity-60"></div></div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-line rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-navy mb-4">Ações Rápidas</h3>
            <div className="space-y-2">
              <button onClick={() => setScreen("cases")} className="w-full flex items-center gap-3 p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                <FolderOpen size={16} className="text-accent"/> Acessar Casos
              </button>
              <button onClick={() => setScreen("tasks")} className="w-full flex items-center gap-3 p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                <AlertTriangle size={16} className="text-accent"/> Tratar SLA Crítico
              </button>
              <button onClick={() => setScreen("reports")} className="w-full flex items-center gap-3 p-3 rounded-xl border border-line hover:border-accent hover:bg-[#f0edff] text-sm font-semibold text-navy transition-colors">
                <FileBarChart size={16} className="text-accent"/> Métricas Operacionais
              </button>
            </div>
          </div>
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
