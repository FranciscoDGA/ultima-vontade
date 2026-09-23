import React from "react";
import { Users, Plus, Shield, CheckCircle2, MoreVertical, Filter, Download } from "lucide-react";

export default function TeamView({ role }: { role: string }) {
  if (role === "advocacia") {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-1">Equipe e Permissões</h2>
            <p className="text-sm text-muted">Gerencie os profissionais do escritório e seus níveis de acesso.</p>
          </div>
          <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
            <Plus size={16} /> Convidar Membro
          </button>
        </div>

        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-line">
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Profissional</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Nível de Acesso</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Casos Ativos</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Status</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold">RL</div>
                    <div>
                      <strong className="text-navy block">Dr. Rafael Lima</strong>
                      <span className="text-xs text-muted">rafael@lima.adv.br</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="flex items-center gap-1 text-xs font-bold text-navy"><Shield size={14} className="text-accent" /> Sócio Administrador</span>
                </td>
                <td className="py-4 px-5 font-bold text-navy">12 casos</td>
                <td className="py-4 px-5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-ok bg-ok/10 px-2 py-1 rounded-md"><CheckCircle2 size={12}/> Ativo</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity"><MoreVertical size={18} /></button>
                </td>
              </tr>
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 text-muted flex items-center justify-center font-bold">MT</div>
                    <div>
                      <strong className="text-navy block">Marcela Teixeira</strong>
                      <span className="text-xs text-muted">marcela@lima.adv.br</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="flex items-center gap-1 text-xs font-bold text-navy">Advogada Associada</span>
                </td>
                <td className="py-4 px-5 font-bold text-navy">8 casos</td>
                <td className="py-4 px-5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-ok bg-ok/10 px-2 py-1 rounded-md"><CheckCircle2 size={12}/> Ativo</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity"><MoreVertical size={18} /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (role === "funeraria") {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-1">Equipe e Parceiros</h2>
            <p className="text-sm text-muted">Gerencie equipe interna e parceiros (cartórios, advogados, cemitérios, seguradoras).</p>
          </div>
          <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
            <Plus size={16} /> Novo Cadastro
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-2 rounded-2xl border border-line shadow-sm">
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto">
            {["Todos", "Equipe Interna", "Cemitérios/Crematórios", "Cartórios", "Seguradoras", "Transportadoras"].map((tab, i) => (
              <button key={i} className={`px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap transition-colors ${i === 0 ? "bg-[#f0edff] text-accent" : "text-muted hover:bg-gray-50"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-line">
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Nome / Empresa</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Tipo / Cargo</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Contrato / Comissão</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Serviços Ativos</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Status</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold">AP</div>
                    <div>
                      <strong className="text-navy block">Ana Paula</strong>
                      <span className="text-xs text-muted">ana.paula@vidaserena.com</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="flex items-center gap-1 text-xs font-bold text-navy">Equipe: Atendente</span>
                </td>
                <td className="py-4 px-5 text-muted">-</td>
                <td className="py-4 px-5 font-bold text-navy">5 famílias</td>
                <td className="py-4 px-5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-ok bg-ok/10 px-2 py-1 rounded-md"><CheckCircle2 size={12}/> Ativo</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity"><MoreVertical size={18} /></button>
                </td>
              </tr>
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 text-muted flex items-center justify-center font-bold">TC</div>
                    <div>
                      <strong className="text-navy block">Transportadora Carvalho</strong>
                      <span className="text-xs text-muted">(11) 3333-4444</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="flex items-center gap-1 text-xs font-bold text-navy">Parceiro: Transportadora</span>
                </td>
                <td className="py-4 px-5 text-muted text-xs">Contrato Ativo / Comissionado</td>
                <td className="py-4 px-5 font-bold text-navy">2 traslados em curso</td>
                <td className="py-4 px-5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-ok bg-ok/10 px-2 py-1 rounded-md"><CheckCircle2 size={12}/> Ativo</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity"><MoreVertical size={18} /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (role === "seguradora") {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-1">Parceiros e Credenciados</h2>
            <p className="text-sm text-muted">Gestão da rede de funerárias, escritórios, corretores e prestadores de serviço.</p>
          </div>
          <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
            <Plus size={16} /> Credenciar Parceiro
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-2 rounded-2xl border border-line shadow-sm">
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto">
            {["Todos", "Funerárias", "Escritórios de Advocacia", "Corretores", "Cartórios"].map((tab, i) => (
              <button key={i} className={`px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap transition-colors ${i === 0 ? "bg-[#f0edff] text-accent" : "text-muted hover:bg-gray-50"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-line">
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Nome / Empresa</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Tipo de Parceiro</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Região de Atuação</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Casos Ativos</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Status (SLA)</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold">VS</div>
                    <div>
                      <strong className="text-navy block">Vida Serena - Rede</strong>
                      <span className="text-xs text-muted">Rede Nacional</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="flex items-center gap-1 text-xs font-bold text-navy">Funerária / Assistência</span>
                </td>
                <td className="py-4 px-5 text-muted text-xs">SP, RJ, MG, PR</td>
                <td className="py-4 px-5 font-bold text-navy">124 casos</td>
                <td className="py-4 px-5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-ok bg-ok/10 px-2 py-1 rounded-md"><CheckCircle2 size={12}/> Excelente (98%)</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity"><MoreVertical size={18} /></button>
                </td>
              </tr>
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 text-muted flex items-center justify-center font-bold">LA</div>
                    <div>
                      <strong className="text-navy block">Lima & Associados</strong>
                      <span className="text-xs text-muted">Inventários e Sucessões</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="flex items-center gap-1 text-xs font-bold text-navy">Escritório Advocacia</span>
                </td>
                <td className="py-4 px-5 text-muted text-xs">São Paulo (Capital)</td>
                <td className="py-4 px-5 font-bold text-navy">45 casos</td>
                <td className="py-4 px-5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-ok bg-ok/10 px-2 py-1 rounded-md"><CheckCircle2 size={12}/> Bom (92%)</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity"><MoreVertical size={18} /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (role === "banco") {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-1">Auditoria e Compliance</h2>
            <p className="text-sm text-muted">Acompanhe todos os acessos, alterações e aprovações feitas na plataforma.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-white border border-line text-navy px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 flex items-center gap-2">
              <Filter size={16} /> Filtros Avançados
            </button>
            <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
              <Download size={16} /> Exportar Logs (PDF/CSV)
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-2 rounded-2xl border border-line shadow-sm">
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto">
            {["Todos os Logs", "Acessos a Documentos", "Aprovações Jurídicas", "Modificações Cadastrais", "Falhas de Autenticação"].map((tab, i) => (
              <button key={i} className={`px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap transition-colors ${i === 0 ? "bg-[#f0edff] text-accent" : "text-muted hover:bg-gray-50"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-gray-50 border-b border-line">
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Data / Hora</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Usuário / Sistema</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Ação Realizada</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Protocolo / Alvo</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Status / IP</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5 text-muted text-xs">
                  23/09/2026<br/>14:23:01
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center font-bold text-[10px]">LM</div>
                    <span className="font-bold text-navy text-xs">Lucia Medeiros (Jurídico)</span>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#a87200] bg-[#fff6e3] px-2 py-1 rounded-md">
                    Validou Documento Legal
                  </span>
                </td>
                <td className="py-4 px-5 text-navy text-xs">
                  <strong className="block">SOL-2026-9912</strong>
                  <span className="text-muted">Certidão_Obito.pdf</span>
                </td>
                <td className="py-4 px-5 text-xs text-muted">
                  <span className="text-ok font-bold flex items-center gap-1"><CheckCircle2 size={12}/> Sucesso</span>
                  IP: 192.168.1.44
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity"><MoreVertical size={18} /></button>
                </td>
              </tr>
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5 text-muted text-xs">
                  23/09/2026<br/>13:10:45
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px]">API</div>
                    <span className="font-bold text-navy text-xs">Core Bancário (Integração)</span>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-navy bg-gray-100 px-2 py-1 rounded-md">
                    Bloqueio de Saldo
                  </span>
                </td>
                <td className="py-4 px-5 text-navy text-xs">
                  <strong className="block">Conta: 12345-6</strong>
                  <span className="text-muted">CPF: 123.456.789-00</span>
                </td>
                <td className="py-4 px-5 text-xs text-muted">
                  <span className="text-ok font-bold flex items-center gap-1"><CheckCircle2 size={12}/> Processado</span>
                  IP: 10.0.0.5 (Interno)
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity"><MoreVertical size={18} /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-line rounded-2xl shadow-sm p-10 text-center text-muted">
      Em construção para {role}
    </div>
  );
}
