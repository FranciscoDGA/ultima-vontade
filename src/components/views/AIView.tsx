import React, { useState } from "react";
import { Sparkles, FileText, MessageSquare, Database, Settings2, Send, Bot, ShieldAlert, CheckCircle2, AlertTriangle } from "lucide-react";

export default function AIView({ role }: { role: string }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const isFamily = role === "familia";

  const handleSimulate = () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse(null);
    
    setTimeout(() => {
      setLoading(false);
      setResponse(isFamily 
        ? "Você pode obter a certidão de óbito no cartório onde o registro foi feito. Se precisar, posso preparar um formulário de solicitação para você."
        : "Orientação sugerida: pause a cobrança, reúna o documento recebido e encaminhe para revisão."
      );
    }, 1500);
  };

  if (isFamily) {
    return (
      <div className="flex flex-col h-[calc(100vh-140px)] max-w-4xl mx-auto bg-white rounded-3xl border border-line shadow-sm overflow-hidden animate-in fade-in">
        {/* Header */}
        <div className="p-6 border-b border-line bg-gradient-to-r from-[#f0edff] to-white flex justify-between items-start">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center shrink-0 shadow-lg">
              <Bot size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy mb-1">Assistente Pessoal</h2>
              <p className="text-sm text-muted">Uma inteligência artificial treinada para ajudar a sua família a entender as etapas e organizar os documentos com linguagem simples.</p>
            </div>
          </div>
        </div>

        {/* Guidelines */}
        <div className="px-6 pt-6 pb-2">
          <div className="bg-[#fff6e3] border border-[#f5d996] rounded-2xl p-4 flex gap-4">
            <ShieldAlert className="text-[#a87200] shrink-0" />
            <div>
              <h3 className="text-[#a87200] font-bold text-sm mb-1">Limitações Importantes</h3>
              <ul className="text-[#8c5f00] text-xs space-y-1 list-disc list-inside">
                <li>O Assistente não toma decisões jurídicas nem substitui seu advogado.</li>
                <li>O Assistente não afirma quem tem direito à herança ou quem não tem.</li>
                <li>Qualquer dúvida complexa será redirecionada para a equipe de Lima & Associados.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shrink-0 mt-1">
              <Bot size={16} />
            </div>
            <div className="bg-gray-50 border border-line rounded-2xl rounded-tl-none p-4 text-sm text-navy max-w-[80%] leading-relaxed shadow-sm">
              Olá! Como posso ajudar você hoje com o plano do inventário? Você pode me pedir para:
              <ul className="mt-3 space-y-2">
                <li className="flex items-center gap-2"><Sparkles size={14} className="text-accent" /> Explicar um termo difícil que o banco usou.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-ok" /> Dizer quais documentos ainda faltam você enviar.</li>
                <li className="flex items-center gap-2"><FileText size={14} className="text-navy" /> Ajudar a escrever um e-mail para a seguradora.</li>
              </ul>
            </div>
          </div>

          {response && (
             <div className="flex gap-4">
               <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shrink-0 mt-1">
                 <Bot size={16} />
               </div>
               <div className="bg-gray-50 border border-line rounded-2xl rounded-tl-none p-4 text-sm text-navy max-w-[80%] leading-relaxed shadow-sm">
                 {response}
               </div>
             </div>
          )}
          {loading && (
             <div className="flex gap-4">
               <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shrink-0 mt-1">
                 <Bot size={16} />
               </div>
               <div className="bg-gray-50 border border-line rounded-2xl rounded-tl-none p-4 text-sm text-navy max-w-[80%] leading-relaxed shadow-sm flex gap-1">
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></span>
               </div>
             </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-line">
          <div className="relative">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSimulate()}
              placeholder="Ex: Como consigo a certidão de óbito?" 
              className="w-full bg-gray-50 border border-line rounded-2xl py-4 pl-4 pr-14 text-sm focus:border-accent outline-none focus:bg-white transition-all shadow-inner"
            />
            <button 
              onClick={handleSimulate}
              disabled={loading || !prompt.trim()}
              className="absolute right-2 top-2 bottom-2 w-10 bg-accent text-white rounded-xl flex items-center justify-center shadow-md hover:brightness-110 transition-all disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </div>
          <p className="text-center text-[10px] text-muted mt-3">A IA pode cometer erros. Confirme as informações com seu advogado.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-5">
      {/* Banner */}
      <div className="p-6 bg-gradient-to-br from-[#f0edff] to-[#edf5ff] border border-[#ded9ff] rounded-2xl">
        <div className="flex gap-3 items-center mb-2">
          <Sparkles className="text-[#41337c]" size={24} />
          <h2 className="m-0 text-[#41337c] text-[20px] font-bold">Assistente de IA da Última Vontade</h2>
        </div>
        <p className="mt-2 text-[#665d88] text-[13px] max-w-3xl leading-relaxed">
          Configure o que a IA pode sugerir, quais fontes ela pode consultar e quando ela precisa de aprovação humana. 
          As chaves do modelo (OpenAI/Gemini) ficam seguras no servidor (variáveis de ambiente).
        </p>
      </div>

      <div className="grid grid-cols-[1fr_1fr] gap-5">
        {/* Configurações */}
        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-[#eef1f5]">
            <h2 className="text-navy text-[16px] font-bold m-0 flex items-center gap-2">
              <Settings2 size={18} /> Configuração do Agente
            </h2>
            <span className="text-muted text-[12px] mt-1 block">Regras aplicadas a este workspace</span>
          </div>

          <div className="flex-1">
            <div className="p-5 border-b border-[#eef1f5] flex justify-between items-center gap-4">
              <div>
                <b className="text-navy text-[13px] flex items-center gap-2"><FileText size={14}/> Gerar checklist por tipo de caso</b>
                <p className="text-muted text-[11px] mt-1.5 leading-relaxed">A IA sugere tarefas e documentos pendentes automaticamente para revisão humana.</p>
              </div>
              <div className="w-11 h-6 bg-accent rounded-full relative cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 shadow-sm"></div>
              </div>
            </div>

            <div className="p-5 border-b border-[#eef1f5] flex justify-between items-center gap-4">
              <div>
                <b className="text-navy text-[13px] flex items-center gap-2"><Database size={14}/> Resumir documentos enviados</b>
                <p className="text-muted text-[11px] mt-1.5 leading-relaxed">Extrai informações de PDFs (como certidões) sem tomar decisões jurídicas.</p>
              </div>
              <div className="w-11 h-6 bg-accent rounded-full relative cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 shadow-sm"></div>
              </div>
            </div>

            <div className="p-5 flex justify-between items-center gap-4">
              <div>
                <b className="text-navy text-[13px] flex items-center gap-2"><MessageSquare size={14}/> Responder ao cliente final</b>
                <p className="text-muted text-[11px] mt-1.5 leading-relaxed">Permitir que a IA fale direto com a família via WhatsApp. Exige aprovação humana.</p>
              </div>
              <div className="w-11 h-6 bg-[#ccd5e1] rounded-full relative cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Playground / Simulação */}
        <div className="bg-white border border-line rounded-2xl shadow-sm flex flex-col">
          <div className="p-5 border-b border-[#eef1f5]">
            <h2 className="text-navy text-[16px] font-bold m-0 flex items-center gap-2">
              <Sparkles size={18} /> Teste do Assistente
            </h2>
            <span className="text-muted text-[12px] mt-1 block">Simulação segura sem enviar nada aos clientes reais</span>
          </div>

          <div className="p-5 flex flex-col flex-1">
            <label className="text-[11px] font-[850] text-navy mb-2 uppercase tracking-wider">Digite o contexto ou a dúvida</label>
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full border border-[#dce3ec] rounded-xl p-3 text-sm outline-none focus:border-accent min-h-[100px] resize-none" 
              placeholder="Ex.: a família recebeu uma cobrança de juros após o falecimento. O que devemos fazer no protocolo XYZ?"
            />
            
            <button 
              onClick={handleSimulate}
              disabled={loading || !prompt.trim()}
              className="mt-4 bg-accent text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
            >
              {loading ? "Processando com a IA..." : "Gerar Orientação"}
            </button>

            {response && (
              <div className="mt-5 p-4 bg-gray-50 border border-line rounded-xl">
                <span className="text-[10px] uppercase font-bold text-accent tracking-wider block mb-2">Resposta da IA:</span>
                <p className="text-sm text-navy leading-relaxed m-0">
                  {response}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
