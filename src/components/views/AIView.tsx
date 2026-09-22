import React, { useState } from "react";
import { Sparkles, FileText, MessageSquare, Database, Settings2 } from "lucide-react";

export default function AIView({ role }: { role: string }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleSimulate = () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse(null);
    
    // Simulate AI delay
    setTimeout(() => {
      setLoading(false);
      setResponse("Orientação sugerida: pause a cobrança, reúna o documento recebido, confirme a origem por canal oficial e encaminhe o caso para revisão da equipe. A IA não toma decisão jurídica.");
    }, 1500);
  };

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
