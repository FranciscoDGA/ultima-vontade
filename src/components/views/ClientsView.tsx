import React from "react";

export default function ClientsView({ role }: { role: string }) {
  const isFamily = role === "familia";
  const title = isFamily ? "Minha família" : `Gestão de ${role === "banco" ? "herdeiros" : role === "funeraria" ? "famílias" : "clientes"}`;
  const desc = isFamily ? "Pessoas que participam deste caso." : "Cadastre, convide e acompanhe pessoas relacionadas aos casos.";

  return (
    <div className="grid gap-4">
      <div className="flex justify-between items-center gap-4 flex-wrap mb-4">
        <div>
          <h2 className="m-0 text-navy text-[18px] font-bold">{title}</h2>
          <p className="mt-1 text-muted text-[12px]">{desc}</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-line text-navy px-3.5 py-2.5 rounded-[9px] text-[12px] font-[800]">
            Exportar
          </button>
          <button className="bg-accent text-white px-3.5 py-2.5 rounded-[9px] text-[12px] font-[800]">
            {isFamily ? "+ Convidar familiar" : "+ Novo cliente"}
          </button>
        </div>
      </div>

      <div className="bg-white border border-line rounded-2xl shadow-sm overflow-auto">
        <table className="w-full border-collapse text-[12px] min-w-[580px]">
          <thead>
            <tr>
              <th className="text-left py-3 px-5 border-b border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">Nome</th>
              <th className="text-left py-3 px-5 border-b border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">Relação / caso</th>
              <th className="text-left py-3 px-5 border-b border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">Última atividade</th>
              <th className="text-left py-3 px-5 border-b border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">Status</th>
              <th className="text-left py-3 px-5 border-b border-[#eef1f5] uppercase text-muted text-[10px] tracking-wider">Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><strong className="text-navy">Ana Souza</strong></td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Coordenadora</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Agora</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><span className="inline-block px-2 py-1 rounded-full bg-[#eaf8f5] text-[#078b7d] text-[10px] font-[850]">Ativa</span></td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><button className="text-accent bg-transparent p-1">Abrir</button></td>
            </tr>
            <tr>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><strong className="text-navy">Marcos Souza</strong></td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Filho · Família Souza</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Há 2h</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><span className="inline-block px-2 py-1 rounded-full bg-[#eaf8f5] text-[#078b7d] text-[10px] font-[850]">Convidado</span></td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><button className="text-accent bg-transparent p-1">Detalhes</button></td>
            </tr>
            <tr>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><strong className="text-navy">Dr. Rafael Lima</strong></td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Advogado · 4 casos</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Ontem</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><span className="inline-block px-2 py-1 rounded-full bg-[#eaf8f5] text-[#078b7d] text-[10px] font-[850]">Profissional</span></td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><button className="text-accent bg-transparent p-1">Permissões</button></td>
            </tr>
            <tr>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><strong className="text-navy">Paulo Oliveira</strong></td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">Família Oliveira</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]">18 set.</td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><span className="inline-block px-2 py-1 rounded-full bg-[#fff6e3] text-[#a87200] text-[10px] font-[850]">Aguardando</span></td>
              <td className="py-3 px-5 border-b border-[#f0f2f6]"><button className="text-accent bg-transparent p-1">Abrir</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
