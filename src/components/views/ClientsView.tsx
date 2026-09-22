import React from "react";

export default function ClientsView({ role }: { role: string }) {
  const isFamily = role === "familia";

  if (isFamily) {
    return (
      <div className="grid gap-6 animate-in fade-in">
        <div className="flex justify-between items-center gap-4 flex-wrap mb-2">
          <div>
            <h2 className="m-0 text-navy text-[24px] font-bold">Minha Família</h2>
            <p className="mt-1 text-muted text-[14px]">Gerencie quem tem acesso ao plano e defina responsáveis por tarefas.</p>
          </div>
          <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110">
            + Convidar Pessoa
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-line rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg">
                  A
                </div>
                <div>
                  <h3 className="font-bold text-navy m-0">Ana Souza</h3>
                  <span className="text-xs text-muted">Cônjuge / Viúva</span>
                </div>
              </div>
              <span className="bg-accent/10 text-accent px-2 py-1 rounded text-[10px] font-bold uppercase">Coordenadora</span>
            </div>
            <div className="text-sm text-navy mb-4 space-y-1">
              <p><b>Acesso:</b> Controle total</p>
              <p><b>Tarefas:</b> 4 sob responsabilidade</p>
            </div>
            <button className="w-full py-2 border border-line rounded-lg text-xs font-bold text-navy hover:bg-gray-50 transition-colors">Ver Perfil</button>
          </div>

          <div className="bg-white border border-line rounded-2xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#f0edff] text-accent flex items-center justify-center font-bold text-lg">
                  M
                </div>
                <div>
                  <h3 className="font-bold text-navy m-0">Marcos Souza</h3>
                  <span className="text-xs text-muted">Filho / Herdeiro</span>
                </div>
              </div>
            </div>
            <div className="text-sm text-navy mb-4 space-y-1">
              <p><b>Acesso:</b> Visualização e Envio de Docs</p>
              <p><b>Tarefas:</b> 2 sob responsabilidade</p>
            </div>
            <button className="w-full py-2 border border-line rounded-lg text-xs font-bold text-navy hover:bg-gray-50 transition-colors">Editar Permissões</button>
          </div>

          <div className="bg-white border border-line rounded-2xl p-6 shadow-sm border-dashed flex flex-col items-center justify-center text-center hover:border-accent hover:bg-gray-50 transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-gray-100 text-muted flex items-center justify-center font-bold text-2xl mb-3">
              +
            </div>
            <h3 className="font-bold text-navy mb-1">Adicionar Profissional</h3>
            <p className="text-xs text-muted px-4">Convide um corretor, contador ou outro advogado parceiro para visualizar o caso.</p>
          </div>
        </div>
      </div>
    );
  }

  const title = `Gestão de ${role === "banco" ? "herdeiros" : role === "funeraria" ? "famílias" : "clientes"}`;
  const desc = "Cadastre, convide e acompanhe pessoas relacionadas aos casos.";

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
            + Novo cliente
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
