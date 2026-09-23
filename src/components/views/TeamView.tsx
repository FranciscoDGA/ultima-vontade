import React from "react";
import { Users, Plus, Shield, Mail, CheckCircle2, MoreVertical, Search } from "lucide-react";

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
                    <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold">
                      RL
                    </div>
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
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-line hover:bg-gray-50/50 cursor-pointer transition-colors group">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 text-muted flex items-center justify-center font-bold">
                      MT
                    </div>
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
                  <button className="p-2 text-muted hover:text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical size={18} />
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
