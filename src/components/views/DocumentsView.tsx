import React from "react";

export default function DocumentsView({ role }: { role: string }) {
  const title = role === "banco" ? "Validação documental" : "Cofre de documentos";

  return (
    <div className="grid gap-4">
      <div className="flex justify-between items-center gap-4 flex-wrap mb-2">
        <div>
          <h2 className="m-0 text-navy text-[18px] font-bold">{title}</h2>
          <p className="mt-1 text-muted text-[12px]">Arquivos com permissões, versões, validade e histórico de acesso.</p>
        </div>
        <button className="bg-accent text-white px-3.5 py-2.5 rounded-[9px] text-[12px] font-[800]">
          + Adicionar documento
        </button>
      </div>

      <div className="bg-white border border-line rounded-2xl shadow-sm overflow-auto">
        <table className="w-full border-collapse text-[12px] min-w-[580px]">
          <thead>
            <tr>
              <th className="text-left py-3 px-5 border-b border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">Documento</th>
              <th className="text-left py-3 px-5 border-b border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">Categoria</th>
              <th className="text-left py-3 px-5 border-b border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">Acesso</th>
              <th className="text-left py-3 px-5 border-b border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">Atualização</th>
              <th className="text-left py-3 px-5 border-b border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><strong className="text-navy">Certidão de óbito.pdf</strong></td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Documentos civis</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Ana, Rafael</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Hoje</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><span className="inline-block px-2 py-1 rounded-full bg-[#eaf8f5] text-[#078b7d] text-[10px] font-[850]">Validado</span></td>
            </tr>
            <tr>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><strong className="text-navy">Apólice seguro vida.pdf</strong></td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Seguros</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Ana, corretora</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Ontem</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><span className="inline-block px-2 py-1 rounded-full bg-[#fff6e3] text-[#a87200] text-[10px] font-[850]">Revisar</span></td>
            </tr>
            <tr>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><strong className="text-navy">Extrato bancário.zip</strong></td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Bancos</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Ana, Rafael</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">17 set.</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><span className="inline-block px-2 py-1 rounded-full bg-[#fff0f1] text-[#ce4e5d] text-[10px] font-[850]">Restrito</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
