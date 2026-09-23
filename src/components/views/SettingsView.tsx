import React, { useState } from "react";
import { Palette, Globe, Mail, ShieldAlert, Users, CreditCard, Save, Settings, Lock, Plus } from "lucide-react";

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

          <div className="pt-6 border-t border-line">
            <h3 className="text-lg font-bold text-danger mb-2 text-[#ce4e5d]">Zona de Perigo</h3>
            <p className="text-sm text-muted mb-4">Ao excluir sua conta, todos os documentos sob seu controle serão removidos. Documentos já protocolados com o escritório não serão apagados do sistema deles.</p>
            <button className="px-4 py-2 bg-[#fff0f1] text-[#ce4e5d] font-bold rounded-xl border border-[#f5c2c7] hover:brightness-95 transition-all">
              Excluir Minha Conta Permanentemente
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-bold shadow-md hover:brightness-110">
            <Save size={18} /> Salvar Alterações
          </button>
        </div>
      </div>
    );
  }

  if (role === "seguradora") {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-1">Integrações e APIs</h2>
            <p className="text-sm text-muted">Gerencie a conexão da plataforma com seus sistemas internos.</p>
          </div>
          <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
            <Plus size={16} /> Nova Integração
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-2 rounded-2xl border border-line shadow-sm mb-2">
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto">
            {["APIs de Sinistro", "CRM (Salesforce/Dynamics)", "Webhooks", "Pagamentos"].map((tab, i) => (
              <button key={i} className={`px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap transition-colors ${i === 0 ? "bg-[#f0edff] text-accent" : "text-muted hover:bg-gray-50"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-line rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#f0edff] text-accent flex items-center justify-center"><CreditCard size={16}/></span>
              Integração de Apólices (Core Seguros)
            </h3>
            <p className="text-sm text-muted mb-4">Sincronização diária de novos segurados, renovações e cancelamentos.</p>
            <div className="bg-gray-50 border border-line rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-navy">Status: Conectado</span>
                <span className="text-xs font-bold text-ok bg-ok/10 px-2 py-1 rounded-md">Ativo</span>
              </div>
              <span className="text-xs text-muted block">Última sincronização: Há 2 horas</span>
            </div>
            <button className="w-full font-bold text-navy bg-gray-100 hover:bg-gray-200 py-2.5 rounded-xl transition-colors">
              Configurar Conexão
            </button>
          </div>

          <div className="bg-white border border-line rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#f0edff] text-accent flex items-center justify-center"><Lock size={16}/></span>
              Chaves de API
            </h3>
            <p className="text-sm text-muted mb-4">Gerencie as chaves para criar casos e sinistros via sistema próprio.</p>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center border-b border-line pb-3">
                <div>
                  <span className="text-sm font-bold text-navy block">Portal de Corretores (Prod)</span>
                  <span className="text-xs text-muted">Criada em 10/05/2026</span>
                </div>
                <button className="text-xs font-bold text-navy bg-gray-100 px-3 py-1.5 rounded-lg">Gerar Nova</button>
              </div>
            </div>
            
            <button className="w-full text-accent font-bold hover:underline text-sm flex justify-center items-center gap-1">
              Ver Documentação da API
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Advocacia / Funeraria Settings
  return (
    <div className="flex flex-col md:flex-row gap-6 animate-in fade-in">
      <div className="w-full md:w-64 shrink-0">
        <h2 className="text-2xl font-bold text-navy mb-6 px-2">Configurações</h2>
        <div className="flex flex-col gap-1">
          <button onClick={() => setActiveTab("whitelabel")} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-colors text-left ${activeTab === "whitelabel" ? "bg-white text-accent shadow-sm border border-line" : "text-muted hover:bg-gray-100 hover:text-navy"}`}>
            <Palette size={18} /> Marca e Domínio
          </button>
          <button onClick={() => setActiveTab("team")} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-colors text-left ${activeTab === "team" ? "bg-white text-accent shadow-sm border border-line" : "text-muted hover:bg-gray-100 hover:text-navy"}`}>
            <Users size={18} /> Equipe e Acessos
          </button>
          <button onClick={() => setActiveTab("integrations")} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-colors text-left ${activeTab === "integrations" ? "bg-white text-accent shadow-sm border border-line" : "text-muted hover:bg-gray-100 hover:text-navy"}`}>
            <Globe size={18} /> Integrações e APIs
          </button>
          <button onClick={() => setActiveTab("billing")} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-colors text-left ${activeTab === "billing" ? "bg-white text-accent shadow-sm border border-line" : "text-muted hover:bg-gray-100 hover:text-navy"}`}>
            <CreditCard size={18} /> Faturamento
          </button>
          <button onClick={() => setActiveTab("security")} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-colors text-left ${activeTab === "security" ? "bg-white text-accent shadow-sm border border-line" : "text-muted hover:bg-gray-100 hover:text-navy"}`}>
            <ShieldAlert size={18} /> Segurança (LGPD)
          </button>
        </div>
      </div>

      <div className="flex-1 bg-white border border-line rounded-3xl shadow-sm flex flex-col">
        {activeTab === "whitelabel" && (
          <div className="p-8 flex-1">
            <h2 className="text-xl font-bold text-navy mb-2">Marca White Label</h2>
            <p className="text-muted text-sm mb-8">Personalize o portal com a identidade visual da sua empresa.</p>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 border border-line rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 cursor-pointer hover:border-accent transition-all">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                  <Palette size={24} />
                </div>
                <div>
                  <strong className="text-navy text-sm block">Logotipo Principal</strong>
                  <span className="text-xs text-muted">PNG ou SVG até 2MB</span>
                </div>
              </div>
              <div className="bg-gray-50 border border-line rounded-2xl p-6 flex flex-col justify-center">
                <label className="block text-sm font-bold text-navy mb-2">Cor de Destaque (HEX)</label>
                <div className="flex gap-3 items-center">
                  <input type="color" defaultValue="#7357c7" className="w-12 h-12 rounded cursor-pointer border-0 p-0" />
                  <input type="text" defaultValue="#7357c7" className="w-full border border-line rounded-xl p-3 focus:border-accent outline-none text-navy font-mono uppercase" />
                </div>
              </div>
            </div>

            <div className="h-px bg-line w-full my-8"></div>

            <h2 className="text-xl font-bold text-navy mb-2">Domínio Personalizado</h2>
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
                <span className="font-bold text-xl">+</span> Adicionar Novo Membro
              </button>
            </div>
          </div>
        )}

        {activeTab === "integrations" && (
          <div className="p-8 flex-1">
            <h2 className="text-xl font-bold text-navy mb-2">Integrações e APIs</h2>
            <p className="text-muted text-sm mb-8">Gerencie a conexão da plataforma com seus sistemas corporativos.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-line rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#f0edff] text-accent flex items-center justify-center"><CreditCard size={16}/></span>
                  Integração de Core Bancário / Seguros
                </h3>
                <p className="text-sm text-muted mb-4">Sincronização diária de produtos, seguros e investimentos vinculados.</p>
                <div className="bg-gray-50 border border-line rounded-xl p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-navy">Status: Conectado</span>
                    <span className="text-xs font-bold text-ok bg-ok/10 px-2 py-1 rounded-md">Ativo</span>
                  </div>
                  <span className="text-xs text-muted block">Última sincronização: Há 2 horas</span>
                </div>
                <button className="w-full font-bold text-navy bg-gray-100 hover:bg-gray-200 py-2.5 rounded-xl transition-colors">
                  Configurar Conexão
                </button>
              </div>

              <div className="bg-white border border-line rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#f0edff] text-accent flex items-center justify-center"><Lock size={16}/></span>
                  Chaves de API
                </h3>
                <p className="text-sm text-muted mb-4">Gerencie as chaves para criar casos automaticamente via sistema próprio.</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center border-b border-line pb-3">
                    <div>
                      <span className="text-sm font-bold text-navy block">Portal de Agências (Prod)</span>
                      <span className="text-xs text-muted">Criada em 10/05/2026</span>
                    </div>
                    <button className="text-xs font-bold text-navy bg-gray-100 px-3 py-1.5 rounded-lg">Gerar Nova</button>
                  </div>
                </div>
                
                <button className="w-full text-accent font-bold hover:underline text-sm flex justify-center items-center gap-1">
                  Ver Documentação da API
                </button>
              </div>
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
                <div className="flex gap-2">
                  <button className="text-navy font-bold text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors">Editar</button>
                  <button className="text-[#ce4e5d] font-bold text-sm bg-[#fff0f1] hover:bg-[#ffe5e7] px-3 py-1.5 rounded-lg transition-colors">Revogar</button>
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
