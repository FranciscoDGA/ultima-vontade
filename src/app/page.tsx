"use client";

import { useState } from "react";
import { Sidebar, RoleData } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

const rolesData: Record<string, RoleData> = {
  familia: {
    label: "Família",
    org: "Ana Souza · Família",
    desc: "Área pessoal e familiar",
    accent: "#2f6fed",
    nav: [
      ["dashboard", "⌂", "Visão geral"],
      ["tasks", "✓", "Meu plano"],
      ["documents", "▣", "Documentos"],
      ["people", "♧", "Minha família"],
      ["ai", "✦", "Assistente"],
      ["plans", "◇", "Planos e proteção"],
      ["settings", "⚙", "Configurações"],
    ],
  },
  advocacia: {
    label: "Advocacia",
    org: "Lima & Associados",
    desc: "Workspace profissional",
    accent: "#7357c7",
    nav: [
      ["dashboard", "⌂", "Painel do escritório"],
      ["clients", "♙", "Clientes"],
      ["cases", "▤", "Casos e inventários"],
      ["tasks", "✓", "Tarefas e prazos"],
      ["documents", "▣", "Documentos"],
      ["team", "♧", "Equipe e permissões"],
      ["ai", "✦", "Assistente jurídico"],
      ["plans", "◇", "Plano e cobrança"],
      ["settings", "⚙", "Configurações"],
    ],
  },
  funeraria: {
    label: "Funerária",
    org: "Vida Serena · Rede",
    desc: "Operação de assistência",
    accent: "#d47c37",
    nav: [
      ["dashboard", "⌂", "Atendimentos"],
      ["clients", "♙", "Famílias"],
      ["cases", "▤", "Serviços ativos"],
      ["tasks", "✓", "Pendências"],
      ["documents", "▣", "Documentos"],
      ["team", "♧", "Equipe e parceiros"],
      ["ai", "✦", "Assistente de atendimento"],
      ["plans", "◇", "Plano e cobrança"],
      ["settings", "⚙", "Configurações"],
    ],
  },
  seguradora: {
    label: "Seguradora",
    org: "Protege Vida · Operação",
    desc: "Benefício e assistência",
    accent: "#0aa89a",
    nav: [
      ["dashboard", "⌂", "Operação"],
      ["clients", "♙", "Beneficiários"],
      ["cases", "▤", "Casos de assistência"],
      ["tasks", "✓", "SLA e pendências"],
      ["documents", "▣", "Documentos"],
      ["team", "♧", "Times e parceiros"],
      ["ai", "✦", "IA de atendimento"],
      ["plans", "◇", "Contrato e uso"],
      ["settings", "⚙", "Configurações"],
    ],
  },
  banco: {
    label: "Banco",
    org: "Banco Aurora · Sucessório",
    desc: "Atendimento institucional",
    accent: "#1664c0",
    nav: [
      ["dashboard", "⌂", "Atendimento"],
      ["clients", "♙", "Herdeiros"],
      ["cases", "▤", "Solicitações"],
      ["tasks", "✓", "Pendências"],
      ["documents", "▣", "Validação documental"],
      ["team", "♧", "Equipe e acessos"],
      ["ai", "✦", "IA de triagem"],
      ["plans", "◇", "Plano e uso"],
      ["settings", "⚙", "Configurações"],
    ],
  },
};

export default function Home() {
  const [role, setRole] = useState<keyof typeof rolesData>("familia");
  const [screen, setScreen] = useState("dashboard");

  const currentRole = rolesData[role];

  return (
    <div className="flex min-h-screen" style={{ "--accent": currentRole.accent } as React.CSSProperties}>
      <Sidebar currentRole={currentRole} screen={screen} setScreen={setScreen} />

      <main className="ml-[255px] w-[calc(100%-255px)] p-7 pb-14">
        <Topbar 
          currentRole={currentRole} 
          title="Meu caso familiar" 
          subtitle="Organize cada etapa com clareza e segurança." 
        />

        <div className="bg-white border border-line rounded-2xl shadow-sm p-10 text-center text-muted">
          Página {screen} em construção...
          <div className="mt-4 flex justify-center gap-2">
            {Object.keys(rolesData).map((r) => (
              <button
                key={r}
                onClick={() => {
                  setRole(r as keyof typeof rolesData);
                  setScreen("dashboard");
                }}
                className={`px-3 py-1 rounded text-xs ${role === r ? 'bg-navy text-white' : 'bg-gray-100'}`}
              >
                Mudar para {r}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
