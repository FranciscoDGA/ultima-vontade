import React, { useState } from "react";
import { RoleData } from "./Sidebar";
import { HelpCircle, Plus, User, LogOut, Settings } from "lucide-react";

interface TopbarProps {
  currentRole: RoleData;
  title: string;
  subtitle: string;
  roleKey: string;
}

import { supabase } from "@/lib/supabase";

export function Topbar({ currentRole, title, subtitle, roleKey }: TopbarProps) {
  const [showProfile, setShowProfile] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <header className="flex justify-between items-start gap-4 mb-6 relative">
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
            <Plus size={16} /> Novo
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
                  <p className="text-sm font-bold text-navy">Usuário</p>
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

      {/* Novo Registro Modal */}
      {showNew && (
        <div className="fixed inset-0 bg-navy/40 z-[100] flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setShowNew(false)}>
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
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
                <button type="button" onClick={() => setShowNew(false)} className="px-4 py-2 bg-white border border-line text-navy rounded-lg text-sm font-bold hover:bg-gray-50">
                  Cancelar
                </button>
                <button type="button" onClick={() => setShowNew(false)} className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-bold shadow-md hover:brightness-110">
                  Salvar Registro
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
