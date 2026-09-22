import React, { useState } from "react";
import { Palette, Globe, Mail, ShieldAlert, Users, CreditCard, Save, Settings } from "lucide-react";

export default function SettingsView({ role }: { role: string }) {
  const isFamily = role === "familia";
  const [activeTab, setActiveTab] = useState("whitelabel");

  if (isFamily) {
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 border border-line shadow-sm animate-in fade-in">
        <h2 className="text-2xl font-bold text-navy mb-6">Configurações da Conta</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-navy mb-2">Nome Completo</label>
            <input type="text" className="w-full border border-line rounded-xl p-3 focus:border-accent outline-none" defaultValue="Ana Souza" />
          </div>
          <div>
            <label className="block text-sm font-bold text-navy mb-2">E-mail</label>
            <input type="email" className="w-full border border-line rounded-xl p-3 focus:border-accent outline-none" defaultValue="ana.souza@email.com" />
          </div>
          <div className="pt-4 border-t border-line">
            <h3 className="text-lg font-bold text-danger mb-2">Zona de Perigo</h3>
            <button className="px-4 py-2 bg-[#fff0f1] text-[#ce4e5d] font-bold rounded-lg border border-[#f5c2c7] hover:brightness-95 transition-all">
              Solicitar exclusão dos meus dados (LGPD)
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Corporative Settings (White Label, etc)
  return (
    <div className="grid grid-cols-[250px_1fr] gap-8 h-full min-h-[600px] animate-in fade-in">
      {/* Settings Sidebar */}
      <div className="flex flex-col gap-2">
        <button 
          onClick={() => setActiveTab("whitelabel")}
          className={`flex items-center gap-3 p-3 rounded-xl text-sm font-bold transition-all ${activeTab === "whitelabel" ? "bg-accent text-white shadow-md" : "text-navy hover:bg-gray-100"}`}
        >
          <Palette size={18} /> Aparência (White Label)
        </button>
        <button 
          onClick={() => setActiveTab("domain")}
          className={`flex items-center gap-3 p-3 rounded-xl text-sm font-bold transition-all ${activeTab === "domain" ? "bg-accent text-white shadow-md" : "text-navy hover:bg-gray-100"}`}
        >
          <Globe size={18} /> Domínio Personalizado
        </button>
        <button 
          onClick={() => setActiveTab("team")}
          className={`flex items-center gap-3 p-3 rounded-xl text-sm font-bold transition-all ${activeTab === "team" ? "bg-accent text-white shadow-md" : "text-navy hover:bg-gray-100"}`}
        >
          <Users size={18} /> Equipe e Permissões
        </button>
        <button 
          onClick={() => setActiveTab("billing")}
          className={`flex items-center gap-3 p-3 rounded-xl text-sm font-bold transition-all ${activeTab === "billing" ? "bg-accent text-white shadow-md" : "text-navy hover:bg-gray-100"}`}
        >
          <CreditCard size={18} /> Faturamento e Assinatura
        </button>
        <button 
          onClick={() => setActiveTab("security")}
          className={`flex items-center gap-3 p-3 rounded-xl text-sm font-bold transition-all ${activeTab === "security" ? "bg-accent text-white shadow-md" : "text-navy hover:bg-gray-100"}`}
        >
          <ShieldAlert size={18} /> Privacidade e LGPD
        </button>
      </div>

      {/* Settings Content */}
      <div className="bg-white rounded-3xl border border-line shadow-sm overflow-hidden flex flex-col">
        {activeTab === "whitelabel" && (
          <div className="p-8 flex-1">
            <h2 className="text-xl font-bold text-navy mb-2">Personalização da Marca</h2>
            <p className="text-muted text-sm mb-8">Deixe o portal com a identidade visual do seu escritório para a família.</p>
            
            <div className="space-y-6 max-w-xl">
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Nome do Portal (Área do Cliente)</label>
                <input type="text" className="w-full border border-line rounded-xl p-3 focus:border-accent outline-none" defaultValue="Área do Cliente — Lima & Associados" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Logotipo Corporativo</label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 text-muted">
                    <span className="text-xs font-bold uppercase">Upload</span>
                  </div>
                  <div className="text-sm text-muted">
                    <p>Recomendado: PNG transparente, 400x100px.</p>
                    <button className="text-accent font-bold mt-1">Escolher arquivo</button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2">Cor Principal (Brand Color)</label>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#7357c7] border border-line shadow-inner"></div>
                  <input type="text" className="w-32 border border-line rounded-xl p-3 focus:border-accent outline-none font-mono" defaultValue="#7357c7" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2">Mensagem de Boas-vindas Padrão</label>
                <textarea className="w-full border border-line rounded-xl p-3 focus:border-accent outline-none h-24 resize-none" defaultValue="Olá. Estamos aqui para ajudar. Seu processo de inventário está sendo conduzido com total segurança." />
              </div>
            </div>
          </div>
        )}

        {activeTab === "domain" && (
          <div className="p-8 flex-1">
            <h2 className="text-xl font-bold text-navy mb-2">Domínio Customizado</h2>
            <p className="text-muted text-sm mb-8">Permita que seus clientes acessem o portal pelo seu próprio site.</p>
            
            <div className="bg-gray-50 border border-line rounded-2xl p-6 mb-6">
              <label className="block text-sm font-bold text-navy mb-2">Seu Domínio</label>
              <div className="flex gap-3">
                <input type="text" className="flex-1 border border-line rounded-xl p-3 focus:border-accent outline-none" placeholder="ex: portal.limaassociados.com.br" />
                <button className="bg-navy text-white px-6 py-3 rounded-xl font-bold hover:brightness-110">Verificar</button>
              </div>
            </div>
            
            <div className="bg-[#fff6e3] border border-[#f5d996] p-4 rounded-xl flex items-start gap-3 text-[#a87200]">
              <Globe className="shrink-0 mt-0.5" />
              <p className="text-sm">Para configurar o domínio, você precisará adicionar um registro <strong>CNAME</strong> apontando para <code>cname.ultimavontade.com</code> no painel do seu provedor de hospedagem (Hostinger, Registro.br, etc).</p>
            </div>
          </div>
        )}

        {/* Other tabs can just show a placeholder for the MVP */}
        {["team", "billing", "security"].includes(activeTab) && (
          <div className="p-8 flex flex-col items-center justify-center flex-1 text-center h-full">
            <div className="w-16 h-16 bg-gray-100 text-muted rounded-full flex items-center justify-center mb-4">
              <Settings size={32} />
            </div>
            <h2 className="text-xl font-bold text-navy mb-2">Módulo em Desenvolvimento</h2>
            <p className="text-muted text-sm max-w-sm">
              As configurações de {activeTab} estão sendo integradas na plataforma. Volte em breve.
            </p>
          </div>
        )}

        <div className="p-5 bg-gray-50 border-t border-line flex justify-end">
          <button className="flex items-center gap-2 bg-accent text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110">
            <Save size={16} /> Salvar Alterações
          </button>
        </div>
      </div>
    </div>
  );
}
