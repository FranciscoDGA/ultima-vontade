import React, { useState } from "react";
import { RoleData } from "./Sidebar";
import { HelpCircle, Plus, User, LogOut, Settings, CheckCircle2, ChevronRight, FileText } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface TopbarProps {
  currentRole: RoleData;
  title: string;
  subtitle: string;
  roleKey: string;
}

export function Topbar({ currentRole, title, subtitle, roleKey }: TopbarProps) {
  const [showProfile, setShowProfile] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showNew, setShowNew] = useState(false);
  
  // Wizard state for Advocacia
  const [wizardStep, setWizardStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleNextStep = () => {
    if (wizardStep === 2) {
      setIsGenerating(true);
      setTimeout(() => {
        setIsGenerating(false);
        setWizardStep(3);
      }, 2000); // simulate AI generating the model
    } else {
      setWizardStep(w => w + 1);
    }
  };

  const resetWizard = () => {
    setShowNew(false);
    setTimeout(() => {
      setWizardStep(1);
      setIsGenerating(false);
    }, 300);
  };

  return (
    <>
      <header className="flex justify-between items-start gap-4 mb-6 relative z-40">
        <div>
          <div className="text-accent text-[11px] uppercase font-[850] tracking-widest mb-1">
            Workspace · {currentRole.label}
          </div>
          <h1 className="text-navy text-[28px] tracking-tight my-1 font-bold">
            {title}
          </h1>
          <p className="text-muted text-[13px] m-0">{subtitle}</p>
        </div>
        <div className="flex gap-2 items-center">
          <button 
            onClick={() => setShowHelp(true)}
            className="flex items-center gap-1.5 bg-white border border-line text-navy px-3.5 py-2.5 rounded-[9px] text-[12px] font-[800] hover:bg-gray-50 transition-colors"
          >
            <HelpCircle size={16} /> Ajuda
          </button>
          <button 
            onClick={() => setShowNew(true)}
            className="flex items-center gap-1.5 bg-accent text-white shadow-[0_7px_16px_#2f6fed2b] px-3.5 py-2.5 rounded-[9px] text-[12px] font-[800] hover:brightness-110 transition-all"
          >
            <Plus size={16} /> {roleKey === 'advocacia' ? "Novo Caso" : "Novo"}
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setShowProfile(!showProfile)}
              className="grid place-items-center w-[36px] h-[36px] rounded-full bg-[#dfeaff] text-accent font-[850] hover:ring-2 ring-accent/30 transition-all"
            >
              AS
            </button>
            
            {showProfile && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-line overflow-hidden z-50">
                <div className="p-3 border-b border-line bg-gray-50/50">
                  <p className="text-sm font-bold text-navy">Advogado Responsável</p>
                  <p className="text-xs text-muted">Acesso autenticado</p>
                </div>
                <div className="p-1">
                  <button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-navy hover:bg-gray-50 rounded-lg text-left">
                    <User size={14} className="text-muted" /> Meu Perfil
                  </button>
                  <button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-navy hover:bg-gray-50 rounded-lg text-left">
                    <Settings size={14} className="text-muted" /> Preferências
                  </button>
                  <hr className="my-1 border-line" />
                  <button 
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 px-3 py-2 text-sm text-danger hover:bg-red-50 rounded-lg text-left font-semibold"
                  >
                    <LogOut size={14} /> Sair da conta
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Ajuda Modal */}
      {showHelp && (
        <div className="fixed inset-0 bg-navy/40 z-[100] flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setShowHelp(false)}>
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
            <h2 className="text-xl font-bold text-navy mb-2">Central de Ajuda</h2>
            <p className="text-sm text-muted mb-4">Como podemos te ajudar no módulo de {currentRole.label}?</p>
            
            <div className="space-y-2 mb-6">
              <button className="w-full text-left p-3 border border-line rounded-lg hover:border-accent hover:bg-blue-50/50 text-sm font-semibold text-navy transition-colors">
                📚 Ler manuais e tutoriais
              </button>
              <button className="w-full text-left p-3 border border-line rounded-lg hover:border-accent hover:bg-blue-50/50 text-sm font-semibold text-navy transition-colors">
                💬 Falar com suporte técnico
              </button>
              <button className="w-full text-left p-3 border border-line rounded-lg hover:border-accent hover:bg-blue-50/50 text-sm font-semibold text-navy transition-colors">
                ✦ Pedir para a Inteligência Artificial
              </button>
            </div>

            <div className="flex justify-end">
              <button onClick={() => setShowHelp(false)} className="px-4 py-2 bg-gray-100 text-navy rounded-lg text-sm font-bold hover:bg-gray-200">
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Novo Registro Modal / Smart Onboarding */}
      {showNew && (
        <div className="fixed inset-0 bg-navy/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm" onClick={resetWizard}>
          <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
            {roleKey === 'advocacia' ? (
              <>
                <div className="p-6 border-b border-line bg-gray-50/50 flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold text-navy mb-1">Abertura de Novo Caso</h2>
                    <p className="text-xs text-muted">Assistente de Triagem e Planejamento Sucessório</p>
                  </div>
                  <div className="flex gap-2 text-sm font-bold">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center ${wizardStep >= 1 ? 'bg-accent text-white' : 'bg-gray-200 text-muted'}`}>1</span>
                    <span className="w-4 border-b-2 border-gray-200 self-center"></span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center ${wizardStep >= 2 ? 'bg-accent text-white' : 'bg-gray-200 text-muted'}`}>2</span>
                    <span className="w-4 border-b-2 border-gray-200 self-center"></span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center ${wizardStep >= 3 ? 'bg-accent text-white' : 'bg-gray-200 text-muted'}`}>3</span>
                  </div>
                </div>

                <div className="p-6 overflow-y-auto">
                  {wizardStep === 1 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                      <h3 className="text-sm font-[850] text-navy uppercase tracking-wider mb-4 border-b border-line pb-2">1. Dados do Cliente e Família</h3>
                      <div>
                        <label className="block text-[11px] font-[850] text-navy mb-1.5 uppercase tracking-wider">Nome da Família / Cliente Principal</label>
                        <input type="text" className="w-full border border-[#dce3ec] rounded-lg p-2.5 text-sm outline-none focus:border-accent" placeholder="Ex: Família Silva ou João da Silva" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-[850] text-navy mb-1.5 uppercase tracking-wider">Telefone (WhatsApp)</label>
                          <input type="text" className="w-full border border-[#dce3ec] rounded-lg p-2.5 text-sm outline-none focus:border-accent" placeholder="(00) 00000-0000" />
                        </div>
                        <div>
                          <label className="block text-[11px] font-[850] text-navy mb-1.5 uppercase tracking-wider">Nome do Falecido (Opcional por enquanto)</label>
                          <input type="text" className="w-full border border-[#dce3ec] rounded-lg p-2.5 text-sm outline-none focus:border-accent" placeholder="" />
                        </div>
                      </div>
                    </div>
                  )}

                  {wizardStep === 2 && !isGenerating && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                      <h3 className="text-sm font-[850] text-navy uppercase tracking-wider mb-4 border-b border-line pb-2">2. Contexto Patrimonial e Familiar</h3>
                      <p className="text-sm text-muted mb-4">Selecione todas as características que se aplicam a este caso para gerarmos o plano ideal:</p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {['Falecimento com Seguro', 'Possui Imóveis', 'Possui Veículos', 'Dependentes Menores', 'Necessita Inventário', 'Possui Dívidas Ativas', 'Imóvel de Aluguel', 'Múltiplos Herdeiros'].map((opt) => (
                          <label key={opt} className="flex items-center gap-3 p-3 border border-line rounded-xl cursor-pointer hover:border-accent hover:bg-blue-50/20 transition-all">
                            <input type="checkbox" className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" />
                            <span className="text-sm text-navy font-semibold">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {wizardStep === 2 && isGenerating && (
                    <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-in fade-in">
                      <div className="w-12 h-12 border-4 border-gray-200 border-t-accent rounded-full animate-spin"></div>
                      <h3 className="text-lg font-bold text-navy">A Inteligência Artificial está montando o caso...</h3>
                      <p className="text-sm text-muted text-center max-w-sm">Criando tarefas, listando documentos obrigatórios e definindo prazos processuais e legais baseados no seu contexto.</p>
                    </div>
                  )}

                  {wizardStep === 3 && (
                    <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4">
                      <div className="flex items-center gap-3 bg-ok/10 text-ok p-4 rounded-xl border border-ok/20">
                        <CheckCircle2 size={24} />
                        <div>
                          <h3 className="font-bold text-sm">Plano Sucessório Criado com Sucesso!</h3>
                          <p className="text-xs">O sistema identificou o modelo de "Inventário Complexo + Seguros".</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="border border-line rounded-xl p-4 text-center">
                          <strong className="block text-2xl text-navy">28</strong>
                          <span className="text-xs text-muted font-bold uppercase tracking-wider">Tarefas Criadas</span>
                        </div>
                        <div className="border border-line rounded-xl p-4 text-center">
                          <strong className="block text-2xl text-navy">15</strong>
                          <span className="text-xs text-muted font-bold uppercase tracking-wider">Docs Solicitados</span>
                        </div>
                        <div className="border border-line rounded-xl p-4 text-center">
                          <strong className="block text-2xl text-danger">2</strong>
                          <span className="text-xs text-muted font-bold uppercase tracking-wider">Prazos de Risco</span>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-xl border border-line">
                        <h4 className="font-bold text-sm text-navy mb-2">Próximos Passos Recomendados:</h4>
                        <ul className="text-sm text-muted space-y-2 list-disc list-inside">
                          <li>O sistema enviará o convite de acesso para a Família Silva.</li>
                          <li>A Família será notificada para enviar a Certidão de Óbito.</li>
                          <li>Você deve revisar o cronograma do Inventário antes de aprovar.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 border-t border-line bg-gray-50 flex justify-between items-center mt-auto">
                  <button onClick={resetWizard} className="px-4 py-2 text-navy text-sm font-bold hover:bg-gray-200 rounded-lg">
                    {wizardStep === 3 ? "Fechar" : "Cancelar"}
                  </button>
                  
                  {wizardStep < 3 && !isGenerating && (
                    <button onClick={handleNextStep} className="flex items-center gap-1 bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md hover:brightness-110">
                      {wizardStep === 1 ? "Avançar" : "Gerar Plano do Caso"} <ChevronRight size={16} />
                    </button>
                  )}
                  {wizardStep === 3 && (
                    <button onClick={resetWizard} className="flex items-center gap-1 bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md hover:brightness-110">
                      <FileText size={16} /> Abrir Painel do Caso
                    </button>
                  )}
                </div>
              </>
            ) : (
              /* Fallback for other roles (Funerária, Seguradora, etc) */
              <div className="p-6">
                <h2 className="text-xl font-bold text-navy mb-1">
                  {roleKey === 'familia' ? 'Nova tarefa' : roleKey === 'funeraria' ? 'Abertura de Serviço' : roleKey === 'banco' ? 'Nova Solicitação' : 'Novo Registro'}
                </h2>
                <p className="text-xs text-muted mb-5">Preencha os dados necessários para o perfil de {currentRole.label}.</p>
                
                <form className="space-y-4">
                  {roleKey === 'funeraria' && (
                    <>
                      <div>
                        <label className="block text-[11px] font-[850] text-navy mb-1.5 uppercase tracking-wider">Nome do Falecido</label>
                        <input type="text" className="w-full border border-[#dce3ec] rounded-lg p-2.5 text-sm outline-none focus:border-accent" placeholder="Ex: João da Silva" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-[850] text-navy mb-1.5 uppercase tracking-wider">CPF</label>
                          <input type="text" className="w-full border border-[#dce3ec] rounded-lg p-2.5 text-sm outline-none focus:border-accent" placeholder="000.000.000-00" />
                        </div>
                        <div>
                          <label className="block text-[11px] font-[850] text-navy mb-1.5 uppercase tracking-wider">Data do Óbito</label>
                          <input type="date" className="w-full border border-[#dce3ec] rounded-lg p-2.5 text-sm outline-none focus:border-accent" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[11px] font-[850] text-navy mb-1.5 uppercase tracking-wider">Nome do Declarante (Responsável)</label>
                        <input type="text" className="w-full border border-[#dce3ec] rounded-lg p-2.5 text-sm outline-none focus:border-accent" placeholder="Familiar responsável" />
                      </div>
                    </>
                  )}
                  
                  {roleKey === 'seguradora' && (
                    <>
                      <div>
                        <label className="block text-[11px] font-[850] text-navy mb-1.5 uppercase tracking-wider">Número da Apólice ou CPF</label>
                        <input type="text" className="w-full border border-[#dce3ec] rounded-lg p-2.5 text-sm outline-none focus:border-accent" placeholder="Digite o número" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-[850] text-navy mb-1.5 uppercase tracking-wider">Tipo de Sinistro</label>
                        <select className="w-full border border-[#dce3ec] rounded-lg p-2.5 text-sm outline-none focus:border-accent bg-white">
                          <option>Morte natural</option>
                          <option>Morte acidental</option>
                          <option>Assistência funeral</option>
                        </select>
                      </div>
                    </>
                  )}

                  {(roleKey === 'familia' || roleKey === 'advocacia' || roleKey === 'banco') && (
                    <>
                      <div>
                        <label className="block text-[11px] font-[850] text-navy mb-1.5 uppercase tracking-wider">Título / Assunto</label>
                        <input type="text" className="w-full border border-[#dce3ec] rounded-lg p-2.5 text-sm outline-none focus:border-accent" placeholder="Do que se trata?" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-[850] text-navy mb-1.5 uppercase tracking-wider">Categoria</label>
                        <select className="w-full border border-[#dce3ec] rounded-lg p-2.5 text-sm outline-none focus:border-accent bg-white">
                          <option>Documentos Civis</option>
                          <option>Bancos e Finanças</option>
                          <option>Seguros</option>
                          <option>Imóveis</option>
                          <option>Outros</option>
                        </select>
                      </div>
                    </>
                  )}

                  <div className="flex justify-end gap-2 mt-6 pt-4 border-t border-line">
                    <button type="button" onClick={resetWizard} className="px-4 py-2 bg-white border border-line text-navy rounded-lg text-sm font-bold hover:bg-gray-50">
                      Cancelar
                    </button>
                    <button type="button" onClick={resetWizard} className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-bold shadow-md hover:brightness-110">
                      Salvar Registro
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
