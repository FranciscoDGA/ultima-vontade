import React, { useState } from "react";
import { RoleData } from "./Sidebar";
import { HelpCircle, Plus, User, LogOut, Settings } from "lucide-react";
import { supabase } from "@/lib/supabase";
import NewCaseWizard from "../wizard/NewCaseWizard";

interface TopbarProps {
  currentRole: RoleData;
  title: string;
  subtitle: string;
  roleKey: string;
  showWizard: boolean;
  setShowWizard: (val: boolean) => void;
}

export function Topbar({ currentRole, title, subtitle, roleKey, showWizard, setShowWizard }: TopbarProps) {
  const [showProfile, setShowProfile] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <>
      <header className="flex justify-between items-start mb-10 animate-in fade-in slide-in-from-top-4">
        <div>
          <h1 className="text-3xl font-[900] text-navy tracking-tight mb-2 flex items-center gap-3">
            {title}
          </h1>
          <p className="text-muted text-sm max-w-2xl font-medium">{subtitle}</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowHelp(true)}
            className="flex items-center gap-1.5 bg-white border border-line text-navy px-3.5 py-2.5 rounded-[9px] text-[12px] font-[800] hover:bg-gray-50 transition-colors"
          >
            <HelpCircle size={16} /> Ajuda
          </button>
          <button 
            onClick={() => setShowWizard(true)}
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
                  <p className="text-sm font-bold text-navy">Responsável</p>
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
                Ler manuais e tutoriais
              </button>
              <button className="w-full text-left p-3 border border-line rounded-lg hover:border-accent hover:bg-blue-50/50 text-sm font-semibold text-navy transition-colors">
                Falar com suporte técnico
              </button>
              <button className="w-full text-left p-3 border border-line rounded-lg hover:border-accent hover:bg-blue-50/50 text-sm font-semibold text-navy transition-colors">
                Pedir para a Inteligência Artificial
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
      {showWizard && (
        <NewCaseWizard roleKey={roleKey} onClose={() => setShowWizard(false)} />
      )}
    </>
  );
}
