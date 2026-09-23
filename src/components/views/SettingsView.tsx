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
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-navy mb-2">Nome Completo</label>
              <input type="text" className="w-full border border-line rounded-xl p-3 focus:border-accent outline-none" defaultValue="Ana Souza" />
            </div>
            <div>
              <label className="block text-sm font-bold text-navy mb-2">E-mail</label>
              <input type="email" className="w-full border border-line rounded-xl p-3 focus:border-accent outline-none" defaultValue="ana.souza@email.com" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-navy mb-3">Preferências e Notificações</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 border border-line rounded-xl cursor-pointer hover:bg-gray-50">
                <input type="checkbox" defaultChecked className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" />
                <span className="text-sm font-semibold text-navy">Receber avisos de prazos via WhatsApp</span>
              </label>
              <label className="flex items-center gap-3 p-3 border border-line rounded-xl cursor-pointer hover:bg-gray-50">
                <input type="checkbox" defaultChecked className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" />
                <span className="text-sm font-semibold text-navy">Relatório semanal de andamento no e-mail</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-navy mb-3">Privacidade e Dados</h3>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-gray-100 text-navy font-bold rounded-lg hover:bg-gray-200 transition-colors">
                Baixar Histórico de Acessos
              </button>
              <button className="px-4 py-2 bg-gray-100 text-navy font-bold rounded-lg hover:bg-gray-200 transition-colors">
                Exportar Meus Dados (ZIP)
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-line mt-8">
            <h3 className="text-lg font-bold text-danger mb-2">Zona de Perigo</h3>
            <p className="text-sm text-muted mb-4">Ações irreversíveis relacionadas ao seu processo.</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white text-[#ce4e5d] font-bold rounded-lg border border-[#f5c2c7] hover:bg-[#fff0f1] transition-all">
                Solicitar Encerramento do Caso
              </button>
              <button className="px-4 py-2 bg-[#fff0f1] text-[#ce4e5d] font-bold rounded-lg border border-[#f5c2c7] hover:brightness-95 transition-all">
                Excluir Conta (LGPD)
              </button>
            </div>
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

        {activeTab === "team" && (
          <div className="p-8 flex-1">
            <h2 className="text-xl font-bold text-navy mb-2">Equipe e Permissões</h2>
            <p className="text-muted text-sm mb-8">Defina quem pode acessar, editar e excluir informações do seu escritório.</p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-line rounded-xl hover:border-accent transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold">RL</div>
                  <div>
                    <strong className="text-navy block">Dr. Rafael Lima</strong>
                    <span className="text-sm text-muted">Sócio Administrador (Acesso Total)</span>
                  </div>
                </div>
                <button className="text-accent text-sm font-bold">Editar Acesso</button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-line rounded-xl hover:border-accent transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 text-muted flex items-center justify-center font-bold">MT</div>
                  <div>
                    <strong className="text-navy block">Marcela Teixeira</strong>
                    <span className="text-sm text-muted">Advogada (Pode ver casos e documentos)</span>
                  </div>
                </div>
                <button className="text-accent text-sm font-bold">Editar Acesso</button>
              </div>
              
              <button className="mt-4 flex items-center gap-2 text-accent text-sm font-bold px-4 py-2 bg-[#f0edff] rounded-xl hover:bg-[#e0d9ff] transition-all">
                + Adicionar Novo Membro
              </button>
            </div>
          </div>
        )}

        {activeTab === "billing" && (
          <div className="p-8 flex-1">
            <h2 className="text-xl font-bold text-navy mb-2">Faturamento e Assinatura</h2>
            <p className="text-muted text-sm mb-8">Gerencie seu plano atual e métodos de pagamento.</p>
            
            <div className="bg-gradient-to-br from-[#f0edff] to-white border border-[#ded9ff] rounded-2xl p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="inline-block px-2 py-1 bg-accent text-white rounded-md text-[10px] font-bold uppercase tracking-wider mb-2">Plano Atual</span>
                  <h3 className="text-2xl font-bold text-navy">Plano Profissional (Advocacia)</h3>
                </div>
                <div className="text-right">
                  <strong className="text-3xl text-navy block">R$ 499<span className="text-lg text-muted font-normal">/mês</span></strong>
                </div>
              </div>
              <p className="text-sm text-muted mb-4">Renovação automática em 10 de Novembro de 2026.</p>
              <div className="flex gap-3">
                <button className="bg-navy text-white px-4 py-2 rounded-xl text-sm font-bold hover:brightness-110">Alterar Plano</button>
                <button className="bg-white border border-line text-navy px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-50">Cancelar Assinatura</button>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-navy mb-4">Últimas Faturas</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-4 border border-line rounded-xl">
                <div>
                  <strong className="text-navy block">Fatura #INV-2026-10</strong>
                  <span className="text-sm text-muted">10 de Outubro de 2026</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-ok bg-ok/10 px-2 py-1 rounded-md">Pago</span>
                  <button className="text-accent text-sm font-bold hover:underline">Baixar PDF</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="p-8 flex-1">
            <h2 className="text-xl font-bold text-navy mb-2">Privacidade e LGPD</h2>
            <p className="text-muted text-sm mb-8">Controle as regras de conformidade com a Lei Geral de Proteção de Dados.</p>
            
            <div className="space-y-6">
              <div className="p-4 border border-line rounded-xl flex items-start gap-4">
                <input type="checkbox" className="mt-1 w-4 h-4 text-accent" defaultChecked />
                <div>
                  <h4 className="font-bold text-navy">Excluir dados após conclusão (LGPD Automática)</h4>
                  <p className="text-sm text-muted">O sistema irá apagar automaticamente todos os documentos e arquivos vinculados ao caso 30 dias após ele ser marcado como concluído.</p>
                </div>
              </div>
              
              <div className="p-4 border border-line rounded-xl flex items-start gap-4">
                <input type="checkbox" className="mt-1 w-4 h-4 text-accent" defaultChecked />
                <div>
                  <h4 className="font-bold text-navy">Log de Auditoria Rigoroso</h4>
                  <p className="text-sm text-muted">Registrar absolutamente cada clique, visualização de documento e alteração para gerar um relatório em caso de disputas legais.</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-line">
                <h3 className="text-lg font-bold text-danger mb-2">Zona de Perigo (Escritório)</h3>
                <p className="text-sm text-muted mb-4">Ações irreversíveis que afetam toda a conta da Advocacia e seus clientes.</p>
                <button className="px-4 py-2 bg-[#fff0f1] text-[#ce4e5d] font-bold rounded-xl border border-[#f5c2c7] hover:brightness-95 transition-all">
                  Exportar e Excluir Conta do Escritório
                </button>
              </div>
            </div>
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
