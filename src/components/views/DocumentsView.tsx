import React from "react";
import { UploadCloud, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export default function DocumentsView({ role }: { role: string }) {
  const isFamily = role === "familia";
  const title = isFamily ? "Meus Documentos" : "Cofre de Documentos (Auditoria)";

  return (
    <div className="grid gap-4">
      <div className="flex justify-between items-center gap-4 flex-wrap mb-2">
        <div>
          <h2 className="m-0 text-navy text-[18px] font-bold">{title}</h2>
          <p className="mt-1 text-muted text-[12px]">
            {isFamily 
              ? "Faça o envio seguro dos documentos solicitados pelo escritório." 
              : "Arquivos com permissões, versões, validade e histórico de auditoria do cliente."}
          </p>
        </div>
        <button className="flex items-center gap-2 bg-accent text-white px-4 py-2.5 rounded-xl text-[13px] font-[800] shadow-md hover:brightness-110">
          <UploadCloud size={16} /> 
          {isFamily ? "Enviar Documento" : "Solicitar Documento"}
        </button>
      </div>

      <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full border-collapse text-[13px] min-w-[580px]">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="text-left py-4 px-5 border-b border-line uppercase text-muted text-[10px] tracking-wider font-bold">Documento / Arquivo</th>
              <th className="text-left py-4 px-5 border-b border-line uppercase text-muted text-[10px] tracking-wider font-bold">Categoria</th>
              {!isFamily && <th className="text-left py-4 px-5 border-b border-line uppercase text-muted text-[10px] tracking-wider font-bold">Enviado por</th>}
              <th className="text-left py-4 px-5 border-b border-line uppercase text-muted text-[10px] tracking-wider font-bold">Data</th>
              <th className="text-left py-4 px-5 border-b border-line uppercase text-muted text-[10px] tracking-wider font-bold">Status de Aprovação</th>
            </tr>
          </thead>
          <tbody>
            {/* Approved Document */}
            <tr className="hover:bg-gray-50/30 transition-colors">
              <td className="py-4 px-5 border-b border-[#f0f2f6]">
                <strong className="text-navy flex items-center gap-2">
                  📄 Certidão de óbito.pdf
                </strong>
              </td>
              <td className="py-4 px-5 border-b border-[#f0f2f6] text-muted">Documentos civis</td>
              {!isFamily && <td className="py-4 px-5 border-b border-[#f0f2f6] text-muted">Ana Souza</td>}
              <td className="py-4 px-5 border-b border-[#f0f2f6] text-muted">Hoje, 09:41</td>
              <td className="py-4 px-5 border-b border-[#f0f2f6]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#eaf8f5] text-[#078b7d] text-[11px] font-[850]">
                  <CheckCircle2 size={12} /> Aprovado
                </span>
              </td>
            </tr>
            
            {/* Pending Analysis Document */}
            <tr className="hover:bg-gray-50/30 transition-colors">
              <td className="py-4 px-5 border-b border-[#f0f2f6]">
                <strong className="text-navy flex items-center gap-2">
                  📄 Apólice seguro vida_v2.pdf
                </strong>
              </td>
              <td className="py-4 px-5 border-b border-[#f0f2f6] text-muted">Seguros</td>
              {!isFamily && <td className="py-4 px-5 border-b border-[#f0f2f6] text-muted">Ana Souza</td>}
              <td className="py-4 px-5 border-b border-[#f0f2f6] text-muted">Ontem, 15:20</td>
              <td className="py-4 px-5 border-b border-[#f0f2f6]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fff6e3] text-[#a87200] text-[11px] font-[850]">
                  <Clock size={12} /> {isFamily ? "Em análise" : "Revisar Envio"}
                </span>
              </td>
            </tr>

            {/* Missing/Rejected Document */}
            <tr className="hover:bg-gray-50/30 transition-colors">
              <td className="py-4 px-5 border-b border-[#f0f2f6]">
                <strong className="text-navy flex items-center gap-2">
                  ⚠️ Certidão de Casamento Atualizada
                </strong>
              </td>
              <td className="py-4 px-5 border-b border-[#f0f2f6] text-muted">Documentos civis</td>
              {!isFamily && <td className="py-4 px-5 border-b border-[#f0f2f6] text-muted">-</td>}
              <td className="py-4 px-5 border-b border-[#f0f2f6] text-muted">-</td>
              <td className="py-4 px-5 border-b border-[#f0f2f6]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fff0f1] text-[#ce4e5d] text-[11px] font-[850]">
                  <AlertCircle size={12} /> {isFamily ? "Pendente Envio" : "Aguardando Cliente"}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
