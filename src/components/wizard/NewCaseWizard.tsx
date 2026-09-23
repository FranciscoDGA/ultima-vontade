import React, { useState } from "react";
import { X, ChevronRight, FileText, CheckCircle2, Bot, Users, Briefcase, Sparkles, Building, Phone, Mail } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface NewCaseWizardProps {
  roleKey: string;
  onClose: () => void;
}

export default function NewCaseWizard({ roleKey, onClose }: NewCaseWizardProps) {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    tipo: "",
    email: "",
  });

  const getRoleConfig = () => {
    switch (roleKey) {
      case 'banco':
        return {
          title: "Nova Solicitação Sucessória",
          subtitle: "Cadastre o herdeiro e identifique o tipo de requisição.",
          step1Title: "1. Identificação do Solicitante (Herdeiro/Representante)",
          step2Title: "2. Detalhes da Solicitação",
          step3Title: "Plano de Validação Criado",
          options: ["Levantamento de Saldo", "Encerramento de Conta", "Transferência de Veículo", "Seguro Prestamista"]
        };
      case 'seguradora':
        return {
          title: "Abertura de Sinistro",
          subtitle: "Inicie um novo processo de regulação e assistência.",
          step1Title: "1. Dados do Segurado (Falecido)",
          step2Title: "2. Dados da Apólice e Cobertura",
          step3Title: "Fluxo de Regulação Criado",
          options: ["Seguro de Vida", "Assistência Funeral", "Previdência (PGBL/VGBL)"]
        };
      case 'funeraria':
        return {
          title: "Novo Atendimento Funeral",
          subtitle: "Cadastre a família e ative os serviços necessários.",
          step1Title: "1. Dados do Falecido e Declarante",
          step2Title: "2. Serviços Contratados",
          step3Title: "Ordem de Serviço Gerada",
          options: ["Translado", "Cerimonial Completo", "Cremação", "Sepultamento Padrão"]
        };
      case 'advocacia':
      default:
        return {
          title: "Abertura de Caso Jurídico",
          subtitle: "Cadastre o cliente e gere o cronograma processual.",
          step1Title: "1. Identificação do Cliente (Inventariante)",
          step2Title: "2. Escopo do Processo",
          step3Title: "Cronograma e Plano de Ação Criados",
          options: ["Inventário Extrajudicial", "Inventário Judicial", "Alvará Judicial", "Planejamento Sucessório"]
        };
    }
  };

  const config = getRoleConfig();

  const handleNextStep = async () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setIsGenerating(true);
      
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('company_id')
            .eq('id', user.id)
            .single();

          if (profile?.company_id) {
            const caseTitle = formData.nome ? `${config.options[0].split(' ')[0]} - ${formData.nome}` : 'Novo Processo';
            await supabase
              .from('cases')
              .insert([
                {
                  company_id: profile.company_id,
                  title: caseTitle,
                  status: 'Aguardando',
                  progress: 0
                }
              ]);
          }
        }
      } catch (err) {
        console.error("Failed to create case", err);
      }
      
      // Simulate AI loading delay
      setTimeout(() => {
        setIsGenerating(false);
        setStep(3);
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm animate-in fade-in" onClick={onClose}></div>
      
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl flex flex-col relative z-10 animate-in zoom-in-95 duration-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-line flex justify-between items-center bg-gray-50/50">
          <div>
            <h2 className="text-xl font-bold text-navy mb-1">{config.title}</h2>
            <p className="text-xs text-muted">{config.subtitle}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full text-muted transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* AI Loading State */}
        {isGenerating && (
          <div className="p-12 flex flex-col items-center justify-center text-center animate-in fade-in">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white relative z-10 shadow-lg shadow-accent/30">
                <Sparkles size={28} className="animate-pulse" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-navy mb-2">A Inteligência Artificial está analisando o caso...</h3>
            <p className="text-sm text-muted max-w-sm">
              Criando estruturas de pastas, gerando lista de documentos necessários e calculando o cronograma ideal baseado na legislação vigente.
            </p>
            
            <div className="w-full max-w-md bg-gray-100 rounded-full h-1.5 mt-8 overflow-hidden">
              <div className="bg-accent h-full animate-[progress_3s_ease-in-out_forwards]"></div>
            </div>
          </div>
        )}

        {/* Step 1: Client Data */}
        {!isGenerating && step === 1 && (
          <div className="p-8 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
              <Users size={20} className="text-accent" /> {config.step1Title}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-[850] text-navy mb-1.5 uppercase tracking-wider">Nome Completo</label>
                <input 
                  type="text" 
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  className="w-full border border-[#dce3ec] rounded-xl p-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all" 
                  placeholder="Ex: João da Silva" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-[850] text-navy mb-1.5 uppercase tracking-wider">CPF / CNPJ</label>
                  <input 
                    type="text" 
                    value={formData.cpf}
                    onChange={(e) => setFormData({...formData, cpf: e.target.value})}
                    className="w-full border border-[#dce3ec] rounded-xl p-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all" 
                    placeholder="000.000.000-00" 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-[850] text-navy mb-1.5 uppercase tracking-wider">E-mail para Contato</label>
                  <input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border border-[#dce3ec] rounded-xl p-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all" 
                    placeholder="joao@email.com" 
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Case Details */}
        {!isGenerating && step === 2 && (
          <div className="p-8 animate-in fade-in slide-in-from-right-4">
            <h3 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
              <Briefcase size={20} className="text-accent" /> {config.step2Title}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-[850] text-navy mb-2 uppercase tracking-wider">Selecione o Fluxo Desejado</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {config.options.map((opt, idx) => (
                    <label key={idx} className={`border rounded-xl p-4 cursor-pointer transition-all flex items-center gap-3 ${formData.tipo === opt ? 'border-accent bg-[#f0edff]/50 ring-1 ring-accent' : 'border-line hover:border-gray-400'}`}>
                      <input 
                        type="radio" 
                        name="tipo" 
                        className="w-4 h-4 text-accent accent-accent" 
                        checked={formData.tipo === opt}
                        onChange={() => setFormData({...formData, tipo: opt})}
                      />
                      <span className="text-sm font-bold text-navy">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <label className="block text-[11px] font-[850] text-navy mb-1.5 uppercase tracking-wider">Observações Adicionais (Opcional)</label>
                <textarea 
                  className="w-full border border-[#dce3ec] rounded-xl p-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none h-24" 
                  placeholder="Contexto adicional para a IA analisar..." 
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Success */}
        {!isGenerating && step === 3 && (
          <div className="p-8 animate-in fade-in slide-in-from-bottom-4">
            <div className="w-16 h-16 bg-ok/10 rounded-full flex items-center justify-center text-ok mx-auto mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-navy text-center mb-2">{config.step3Title}!</h3>
            <p className="text-sm text-muted text-center mb-8">
              A IA estruturou o ambiente de trabalho para <strong className="text-navy">{formData.nome || 'o cliente'}</strong>. Veja o resumo gerado:
            </p>
            
            <div className="bg-gray-50 border border-line rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-line">
                <Bot size={20} className="text-accent" />
                <h4 className="font-bold text-navy text-sm">Resumo Operacional (Gerado via IA)</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="text-[10px] font-[850] uppercase text-muted tracking-wider block mb-2">Estrutura Criada</span>
                  <ul className="text-xs text-navy font-semibold space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-ok"/> Pasta de documentos fiscais</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-ok"/> Sala de chat com a família</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-ok"/> Notificação inicial (Minuta)</li>
                  </ul>
                </div>
                <div>
                  <span className="text-[10px] font-[850] uppercase text-muted tracking-wider block mb-2">Próximos Passos (SLA)</span>
                  <ul className="text-xs text-navy font-semibold space-y-2">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-danger"></div> Solicitar Certidão de Óbito (24h)</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Validar herdeiros legais</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div> Aprovação de honorários/taxas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        {!isGenerating && (
          <div className="p-6 border-t border-line bg-gray-50 flex justify-between items-center mt-auto">
            <button onClick={onClose} className="px-5 py-2.5 text-navy text-sm font-bold hover:bg-gray-200 rounded-xl transition-colors">
              {step === 3 ? "Fechar" : "Cancelar"}
            </button>
            
            {step < 3 && (
              <button 
                onClick={handleNextStep} 
                disabled={step === 1 && !formData.nome}
                className="flex items-center gap-2 bg-accent text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {step === 1 ? "Próxima Etapa" : "Gerar Plano Automático"} <ChevronRight size={16} />
              </button>
            )}
            
            {step === 3 && (
              <button onClick={onClose} className="flex items-center gap-2 bg-accent text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 transition-all">
                <FileText size={16} /> Acessar Painel do Caso
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
