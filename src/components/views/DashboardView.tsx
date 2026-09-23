import React from "react";
import { Users, FileText, CheckCircle2, Clock, AlertCircle, PhoneCall, Link2, Plus, Mail, FileBarChart, ArrowRight, UserPlus, AlertTriangle } from "lucide-react";

interface DashboardProps {
  role: string;
  setScreen: (screen: string) => void;
  setShowWizard?: (show: boolean) => void;
}

export default function DashboardView({ role, setScreen, setShowWizard }: DashboardProps) {
  if (role === "familia") {
    return (
      <div className="grid gap-6 max-w-4xl mx-auto animate-in fade-in">
        <div className="bg-gradient-to-br from-[#f0edff] to-[#edf5ff] border border-[#ded9ff] rounded-2xl p-8 text-center shadow-sm">
          <h2 className="text-[24px] font-bold text-[#41337c] mb-2">Olá, Família Souza. Estamos aqui para ajudar.</h2>
          <p className="text-[#665d88] text-[14px] max-w-2xl mx-auto leading-relaxed">
            Seu processo de organização patrimonial e inventário está sendo conduzido por <b>Lima & Associados</b>. Siga as etapas abaixo e conte conosco.
          </p>
        </div>

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

  // Fallback for others
  return (
    <div className="bg-white border border-line rounded-2xl shadow-sm p-10 text-center text-muted">
      Dashboard {role} em construção.
    </div>
  );
}
