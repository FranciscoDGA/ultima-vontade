import React from "react";
import { FileText, CheckCircle2, AlertCircle, Search, Download, Upload, Clock } from "lucide-react";

export default function DocumentsView({ role }: { role: string }) {
  if (role === "familia") {
    return (
      <div className="grid gap-6 max-w-4xl mx-auto animate-in fade-in">
        <div className="bg-gradient-to-br from-[#f0edff] to-white border border-[#ded9ff] p-6 rounded-2xl shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
            <FileText size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy mb-2">Cofre de Documentos</h2>
            <p className="text-sm text-[#665d88] leading-relaxed">
              Fotografe ou envie os documentos solicitados pelo seu advogado. Tudo fica guardado com criptografia. Apenas você e o escritório têm acesso.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-line rounded-2xl shadow-sm p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-ok/10 text-ok rounded-full flex items-center justify-center">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h3 className="text-navy font-bold text-[16px]">Certidão de Óbito</h3>
                <p className="text-sm text-muted">Enviado por você • Aprovado pelo advogado</p>
              </div>
            </div>
            <button className="text-accent font-bold text-sm px-4 py-2 hover:bg-gray-50 rounded-lg">Ver arquivo</button>
          </div>

          <div className="bg-[#fff0f1] border border-[#f5c2c7] rounded-2xl shadow-sm p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white text-[#ce4e5d] rounded-full flex items-center justify-center shadow-sm">
                <AlertCircle size={20} />
              </div>
              <div>
                <h3 className="text-[#a83240] font-bold text-[16px]">Certidão de Casamento (Atualizada)</h3>
                <p className="text-sm text-[#ce4e5d]">Falta enviar • Necessário para a Partilha</p>
              </div>
            </div>
            <button className="bg-white text-[#ce4e5d] font-bold text-sm px-4 py-2 hover:bg-gray-50 rounded-lg shadow-sm border border-[#f5c2c7]">Enviar Foto</button>
          </div>
        </div>
      </div>
    );
  }

  if (role === "advocacia") {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-2">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-1">Cofre de Documentos (Auditoria)</h2>
            <p className="text-sm text-muted">Arquivos com permissões, versões, validade e histórico de auditoria do cliente.</p>
          </div>
          <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
            <Upload size={16} /> Solicitar Documento
          </button>
        </div>

        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-line">
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Documento / Arquivo</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Categoria</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Enviado por</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Data</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Status de Aprovação</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <FileText size={20} className="text-muted" />
                    <strong className="text-navy">Certidão de óbito.pdf</strong>
                  </div>
                </td>
                <td className="py-4 px-5 text-muted">Documentos civis</td>
                <td className="py-4 px-5 text-muted">Ana Souza</td>
                <td className="py-4 px-5 text-muted">Hoje, 09:41</td>
                <td className="py-4 px-5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-ok bg-ok/10 px-2 py-1 rounded-md"><CheckCircle2 size={12}/> Aprovado (Validado)</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download size={18} />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <FileText size={20} className="text-muted" />
                    <strong className="text-navy">Apólice seguro vida_v2.pdf</strong>
                  </div>
                </td>
                <td className="py-4 px-5 text-muted">Seguros</td>
                <td className="py-4 px-5 text-muted">Ana Souza</td>
                <td className="py-4 px-5 text-muted">Ontem, 15:20</td>
                <td className="py-4 px-5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#a87200] bg-[#fff6e3] px-2 py-1 rounded-md"><Clock size={12}/> Em análise</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download size={18} />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <AlertCircle size={20} className="text-[#a87200]" />
                    <strong className="text-[#a87200]">Certidão de Casamento Atualizada</strong>
                  </div>
                </td>
                <td className="py-4 px-5 text-muted">Documentos civis</td>
                <td className="py-4 px-5 text-muted">-</td>
                <td className="py-4 px-5 text-muted">-</td>
                <td className="py-4 px-5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#ce4e5d] bg-[#fff0f1] px-2 py-1 rounded-md"><AlertCircle size={12}/> Aguardando Cliente</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                    <Upload size={18} />
                  </button>
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
            <h2 className="text-2xl font-bold text-navy mb-1">Documentos</h2>
            <p className="text-sm text-muted">Acesso rápido aos documentos das famílias, atestados e formulários de parceiros.</p>
          </div>
          <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
            <Upload size={16} /> Enviar Arquivo
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-2 rounded-2xl border border-line shadow-sm">
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto">
            {["Todos", "Certidões", "Documentos Pessoais", "Autorizações", "Traslado/Cremação", "Seguros", "Contratos"].map((tab, i) => (
              <button key={i} className={`px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap transition-colors ${i === 0 ? "bg-[#f0edff] text-accent" : "text-muted hover:bg-gray-50"}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input type="text" placeholder="Buscar documento..." className="w-full bg-gray-50 border border-line rounded-xl py-2 pl-9 pr-3 text-sm focus:border-accent outline-none" />
          </div>
        </div>

        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-line">
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Documento / Arquivo</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Categoria</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Família / Enviado por</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Data</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Status</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <FileText size={20} className="text-muted" />
                    <strong className="text-navy">Autorização de Cremação.pdf</strong>
                  </div>
                </td>
                <td className="py-4 px-5 text-muted">Autorizações</td>
                <td className="py-4 px-5 text-navy text-xs">
                  <strong className="block">Família Oliveira</strong>
                  <span className="text-muted">Enviado por: Ana Paula (Atendente)</span>
                </td>
                <td className="py-4 px-5 text-muted">Hoje, 10:45</td>
                <td className="py-4 px-5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-ok bg-ok/10 px-2 py-1 rounded-md"><CheckCircle2 size={12}/> Assinado</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download size={18} />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <AlertCircle size={20} className="text-[#a87200]" />
                    <strong className="text-[#a87200]">Guia de Liberação de Corpo</strong>
                  </div>
                </td>
                <td className="py-4 px-5 text-muted">Traslado/Cremação</td>
                <td className="py-4 px-5 text-navy text-xs">
                  <strong className="block">Família Souza</strong>
                  <span className="text-muted">-</span>
                </td>
                <td className="py-4 px-5 text-muted">-</td>
                <td className="py-4 px-5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#a87200] bg-[#fff6e3] px-2 py-1 rounded-md">Pendente (IML)</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                    <Upload size={18} />
                  </button>
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
            <h2 className="text-2xl font-bold text-navy mb-1">Central de Documentos</h2>
            <p className="text-sm text-muted">Acesso a apólices, atestados, declarações e documentos dos beneficiários.</p>
          </div>
          <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2">
            <Upload size={16} /> Enviar Arquivo
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-2 rounded-2xl border border-line shadow-sm">
          <div className="flex gap-1 overflow-x-auto w-full md:w-auto">
            {["Todos", "Apólices", "Certidões de Óbito", "Documentos Pessoais", "Formulários", "Comprovantes", "Pagamentos"].map((tab, i) => (
              <button key={i} className={`px-4 py-2 text-sm font-bold rounded-xl whitespace-nowrap transition-colors ${i === 0 ? "bg-[#f0edff] text-accent" : "text-muted hover:bg-gray-50"}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input type="text" placeholder="Buscar documento..." className="w-full bg-gray-50 border border-line rounded-xl py-2 pl-9 pr-3 text-sm focus:border-accent outline-none" />
          </div>
        </div>

        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-line">
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Documento / Arquivo</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Categoria</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Caso / Titular</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Data</th>
                <th className="py-3 px-5 text-[11px] font-[850] uppercase text-muted tracking-wider">Validação</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <FileText size={20} className="text-muted" />
                    <strong className="text-navy">Certidão_Obito_Original.pdf</strong>
                  </div>
                </td>
                <td className="py-4 px-5 text-muted">Certidões de Óbito</td>
                <td className="py-4 px-5 text-navy text-xs">
                  <strong className="block">SIN-2026-9912</strong>
                  <span className="text-muted">Roberto Almeida</span>
                </td>
                <td className="py-4 px-5 text-muted">Hoje, 10:45</td>
                <td className="py-4 px-5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-ok bg-ok/10 px-2 py-1 rounded-md"><CheckCircle2 size={12}/> Validado (Cartório)</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download size={18} />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <AlertCircle size={20} className="text-[#a87200]" />
                    <strong className="text-[#a87200]">Formulário de Beneficiário</strong>
                  </div>
                </td>
                <td className="py-4 px-5 text-muted">Formulários</td>
                <td className="py-4 px-5 text-navy text-xs">
                  <strong className="block">SIN-2026-9912</strong>
                  <span className="text-muted">Luciana Almeida</span>
                </td>
                <td className="py-4 px-5 text-muted">-</td>
                <td className="py-4 px-5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#a87200] bg-[#fff6e3] px-2 py-1 rounded-md">Pendente Assinatura</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                    <Upload size={18} />
                  </button>
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
