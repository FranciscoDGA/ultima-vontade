import React, { useState } from "react";
import { Bot, Sparkles, MessageSquare, Search, FileText, CheckCircle2 } from "lucide-react";

export default function AIView({ role }: { role: string }) {
  const [checklist, setChecklist] = useState(true);
  const [resumir, setResumir] = useState(true);
  const [responder, setResponder] = useState(false);

  if (role === "seguradora") {
    return (
      <div className="flex flex-col md:flex-row gap-6 animate-in fade-in h-[calc(100vh-140px)]">
        <div className="w-full md:w-80 bg-white border border-line rounded-3xl shadow-sm flex flex-col overflow-hidden shrink-0">
          <div className="p-6 border-b border-line bg-[#f0edff]/30">
            <h2 className="text-xl font-bold text-navy mb-1 flex items-center gap-2">
              <Bot size={20} className="text-accent" />
              IA de Sinistros
            </h2>
            <p className="text-xs text-muted">Configure o assistente automático para triagem e validação de documentos.</p>
          </div>

          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            <div>
              <h3 className="text-sm font-bold text-navy mb-3">Triagem de Documentos</h3>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-start">
                    <input type="checkbox" className="peer sr-only" defaultChecked />
                    <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent"></div>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-navy block">Extrair Dados de Apólices</span>
                    <span className="text-xs text-muted block mt-0.5">Lê PDFs e preenche o formulário.</span>
                  </div>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-start">
                    <input type="checkbox" className="peer sr-only" defaultChecked />
                    <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent"></div>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-navy block">OCR em Certidão de Óbito</span>
                    <span className="text-xs text-muted block mt-0.5">Alerta divergência de nomes/datas.</span>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-navy mb-3">Atendimento ao Beneficiário</h3>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-start">
                    <input type="checkbox" className="peer sr-only" defaultChecked />
                    <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent"></div>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-navy block">Respostas via WhatsApp</span>
                    <span className="text-xs text-muted block mt-0.5">Responde dúvidas sobre status.</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-4 border-t border-line">
            <span className="text-xs font-bold text-muted">Testando versão: v1.0.2</span>
            <button className="bg-accent text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:brightness-110">
              Salvar
            </button>
          </div>
        </div>

        <div className="flex-1 bg-white border border-line rounded-3xl shadow-sm flex flex-col overflow-hidden">
          <div className="p-6 border-b border-line">
            <h3 className="font-bold text-navy">Simulador de Triagem</h3>
          </div>
          <div className="flex-1 p-6 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <FileText size={24} className="text-muted" />
            </div>
            <strong className="text-navy">Arraste um PDF (Apólice ou Certidão)</strong>
            <p className="text-sm text-muted mt-2 max-w-sm">A IA de Sinistros processará o documento para demonstrar a extração automática de dados.</p>
            <button className="mt-4 px-4 py-2 border border-line rounded-xl text-sm font-bold text-navy hover:bg-gray-50">Upload Manual</button>
          </div>
        </div>
      </div>
    );
  }

  if (role === "banco") {
    return (
      <div className="flex flex-col md:flex-row gap-6 animate-in fade-in h-[calc(100vh-140px)]">
        <div className="w-full md:w-80 bg-white border border-line rounded-3xl shadow-sm flex flex-col overflow-hidden shrink-0">
          <div className="p-6 border-b border-line bg-[#f0edff]/30">
            <h2 className="text-xl font-bold text-navy mb-1 flex items-center gap-2">
              <Bot size={20} className="text-accent" />
              IA Sucessória
            </h2>
            <p className="text-xs text-muted">Configure o nível de atuação da inteligência artificial para processos do banco.</p>
          </div>

          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            <div>
              <h3 className="text-sm font-bold text-navy mb-3">Triagem e Compliance</h3>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-start">
                    <input type="checkbox" className="peer sr-only" defaultChecked />
                    <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent"></div>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-navy block">Extrair Dados de Inventário</span>
                    <span className="text-xs text-muted block mt-0.5">Mapeia herdeiros, bens e valores automaticamente.</span>
                  </div>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-start">
                    <input type="checkbox" className="peer sr-only" defaultChecked />
                    <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent"></div>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-navy block">Alerta de Fraude e Divergência</span>
                    <span className="text-xs text-muted block mt-0.5">Cruza dados do óbito com CPFs para apontar inconsistências.</span>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-navy mb-3">Atendimento e Automação</h3>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-start">
                    <input type="checkbox" className="peer sr-only" defaultChecked />
                    <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent"></div>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-navy block">Redigir Respostas (Rascunho)</span>
                    <span className="text-xs text-muted block mt-0.5">Cria minutas de ofícios e e-mails para aprovação.</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-4 border-t border-line">
            <span className="text-xs font-bold text-muted">Testando versão: v1.1.0</span>
            <button className="bg-accent text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:brightness-110">
              Salvar
            </button>
          </div>
        </div>

        <div className="flex-1 bg-white border border-line rounded-3xl shadow-sm flex flex-col overflow-hidden">
          <div className="p-6 border-b border-line">
            <h3 className="font-bold text-navy flex items-center gap-2"><Sparkles size={18}/> Simulador Jurídico</h3>
          </div>
          <div className="flex-1 p-6 flex flex-col">
            <label className="block text-[11px] font-[850] text-navy mb-2 uppercase tracking-wider">Testar Parecer da IA</label>
            <textarea 
              className="w-full flex-1 border border-line rounded-xl p-4 text-sm outline-none focus:border-accent resize-none mb-4"
              placeholder="Ex: Cole o texto de um ofício judicial aqui para a IA extrair a ordem de transferência..."
            ></textarea>
            <button className="w-full bg-[#c0b2ec] hover:bg-accent text-white py-3 rounded-xl font-bold transition-colors">
              Processar Texto
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (role === "advocacia") {
    return (
      <div className="grid gap-6 animate-in fade-in h-[calc(100vh-140px)]">
        <div>
          <h2 className="text-2xl font-bold text-navy mb-1">Assistente Jurídico (IA)</h2>
          <p className="text-sm text-muted">Configure o nível de autonomia do Copiloto no seu escritório.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 h-full pb-10">
          <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-line">
              <h3 className="font-bold text-navy flex items-center gap-2"><CheckCircle2 size={18}/> Autonomia e Permissões</h3>
              <p className="text-xs text-muted mt-1">O que a inteligência artificial tem permissão para fazer?</p>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-navy text-sm flex items-center gap-2"><CheckCircle2 size={16}/> Gerar checklist inicial de documentos</h4>
                  <p className="text-xs text-muted mt-1">Baseado no tipo do caso, a IA sugere os documentos vitais antes do primeiro atendimento.</p>
                </div>
                <div 
                  className={`w-12 h-6 rounded-full flex items-center p-1 cursor-pointer transition-colors ${checklist ? 'bg-accent' : 'bg-gray-300'}`}
                  onClick={() => setChecklist(!checklist)}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${checklist ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </div>
              </div>
              
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-navy text-sm flex items-center gap-2"><FileText size={16}/> Resumir documentos enviados</h4>
                  <p className="text-xs text-muted mt-1">Extrai informações de PDFs (como certidões) sem tomar decisões jurídicas.</p>
                </div>
                <div 
                  className={`w-12 h-6 rounded-full flex items-center p-1 cursor-pointer transition-colors ${resumir ? 'bg-accent' : 'bg-gray-300'}`}
                  onClick={() => setResumir(!resumir)}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${resumir ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </div>
              </div>
              
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-navy text-sm flex items-center gap-2"><MessageSquare size={16}/> Responder ao cliente final</h4>
                  <p className="text-xs text-muted mt-1">Permitir que a IA fale direto com a família via WhatsApp. Exige aprovação humana.</p>
                </div>
                <div 
                  className={`w-12 h-6 rounded-full flex items-center p-1 cursor-pointer transition-colors ${responder ? 'bg-accent' : 'bg-gray-300'}`}
                  onClick={() => setResponder(!responder)}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${responder ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-line">
              <h3 className="font-bold text-navy flex items-center gap-2"><Sparkles size={18}/> Teste do Assistente</h3>
              <p className="text-xs text-muted mt-1">Simulação segura sem enviar nada aos clientes reais</p>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <label className="block text-[11px] font-[850] text-navy mb-2 uppercase tracking-wider">Digite o contexto ou a dúvida</label>
              <textarea 
                className="w-full flex-1 border border-line rounded-xl p-4 text-sm outline-none focus:border-accent resize-none mb-4"
                placeholder="Ex.: a família recebeu uma cobrança de juros após o falecimento. O que devemos fazer no protocolo XYZ?"
              ></textarea>
              <button className="w-full bg-[#c0b2ec] hover:bg-accent text-white py-3 rounded-xl font-bold transition-colors">
                Gerar Orientação
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Familia / Default
  return (
    <div className="grid md:grid-cols-[1fr_350px] gap-6 items-start h-[calc(100vh-140px)] animate-in fade-in">
      <div className="bg-white border border-line rounded-3xl p-6 shadow-sm flex flex-col h-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-accent text-white rounded-2xl flex items-center justify-center">
            <Bot size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy">Tire suas dúvidas</h2>
            <p className="text-sm text-muted">A inteligência artificial ajuda a traduzir o juridiquês.</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-line rounded-2xl bg-gray-50/50 mb-6">
          <Sparkles className="text-accent mb-4" size={32} />
          <h3 className="text-navy font-bold mb-2">Como eu posso te ajudar hoje?</h3>
          <p className="text-sm text-muted max-w-sm">
            Pergunte sobre documentos, prazos, impostos ou os próximos passos do seu processo.
          </p>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Digite sua dúvida aqui..." 
            className="w-full border border-line rounded-2xl py-4 pl-4 pr-12 outline-none focus:border-accent shadow-sm"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-accent text-white rounded-xl flex items-center justify-center shadow-md hover:brightness-110">
            <Sparkles size={18} />
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#fff0f1] to-white border border-[#f5c2c7] rounded-3xl p-6 shadow-sm">
        <h3 className="font-bold text-danger mb-4 flex items-center gap-2">Importante</h3>
        <p className="text-sm text-[#ce4e5d] leading-relaxed mb-4">
          Nossa assistente virtual é treinada para ajudar com informações sobre processos sucessórios, mas <b>não substitui</b> o aconselhamento legal do seu advogado.
        </p>
        <p className="text-sm text-[#ce4e5d] leading-relaxed">
          Toda decisão importante deve ser validada com o profissional responsável pelo seu caso.
        </p>
      </div>
    </div>
  );
}
