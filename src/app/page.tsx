"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Sidebar, RoleData } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import DashboardView from "@/components/views/DashboardView";
import ClientsView from "@/components/views/ClientsView";
import CasesView from "@/components/views/CasesView";
import TasksView from "@/components/views/TasksView";
import DocumentsView from "@/components/views/DocumentsView";
import AIView from "@/components/views/AIView";
import PlansView from "@/components/views/PlansView";
import SettingsView from "@/components/views/SettingsView";
import TeamView from "@/components/views/TeamView";
import ReportsView from "@/components/views/ReportsView";

export const rolesData: Record<string, RoleData> = {
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
      ["dashboard", "🏠", "Painel do escritório"],
      ["clients", "👥", "Clientes"],
      ["cases", "📁", "Casos e inventários"],
      ["tasks", "✓", "Tarefas e prazos"],
      ["documents", "📄", "Documentos"],
      ["team", "👥", "Equipe e permissões"],
      ["reports", "📊", "Relatórios"],
      ["ai", "✨", "Assistente jurídico"],
      ["plans", "💳", "Plano e cobrança"],
      ["settings", "⚙️", "Configurações"],
    ],
  },
  funeraria: {
    label: "Funerária",
    org: "Vida Serena – Rede",
    desc: "Operação de assistência",
    accent: "#d47c37",
    nav: [
      ["dashboard", "🏠", "Atendimentos"],
      ["clients", "👥", "Famílias"],
      ["cases", "📁", "Serviços ativos"],
      ["tasks", "✓", "Pendências"],
      ["documents", "📄", "Documentos"],
      ["team", "👥", "Equipe e parceiros"],
      ["reports", "📊", "Relatórios"],
      ["ai", "✨", "Assistente de atendimento"],
      ["plans", "💳", "Catálogo de produtos"],
      ["settings", "⚙️", "Configurações"],
    ],
  },
  seguradora: {
    label: "Seguradora",
    org: "Seguros Brasil S.A.",
    desc: "Benefícios e Sinistros",
    accent: "#3a76ff",
    nav: [
      ["dashboard", "🏠", "Operação"],
      ["clients", "👥", "Beneficiários"],
      ["cases", "📁", "Casos de assistência"],
      ["tasks", "✓", "SLA e pendências"],
      ["documents", "📄", "Documentos"],
      ["plans", "🛡️", "Produtos e coberturas"],
      ["team", "🤝", "Parceiros"],
      ["reports", "📊", "Relatórios"],
      ["settings", "🔌", "Integrações"],
      ["ai", "✨", "Assistente de sinistros"],
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
  const router = useRouter();
  const [role, setRole] = useState<keyof typeof rolesData>("familia");
  const [screen, setScreen] = useState("dashboard");
  const [loading, setLoading] = useState(true);
  const [showWizard, setShowWizard] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    };
    
    checkAuth();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) router.push("/login");
    });

    return () => subscription.unsubscribe();
  }, [router]);

  const currentRole = rolesData[role];
  
  const screenTitle = screen === "dashboard" 
    ? (role === "familia" ? "Meu caso familiar" : rolesData[role].nav[0][2])
    : (currentRole.nav.find(n => n[0] === screen)?.[2] || currentRole.label);
    
  const screenSubtitle = screen === "dashboard"
    ? (role === "familia" ? "Organize cada etapa com clareza e segurança." : `Visão adaptada para ${currentRole.org}.`)
    : "Tudo que você precisa para conduzir este fluxo.";

  const renderScreen = () => {
    switch (screen) {
      case "dashboard": return <DashboardView role={role as string} setScreen={setScreen} setShowWizard={setShowWizard} />;
      case "clients":
      case "people": return <ClientsView role={role as string} />;
      case "cases": return <CasesView role={role as string} setShowWizard={setShowWizard} />;
      case "tasks": return <TasksView role={role as string} />;
      case "documents": return <DocumentsView role={role as string} />;
      case "team": return <TeamView role={role as string} />;
      case "reports": return <ReportsView role={role as string} />;
      case "ai": return <AIView role={role as string} />;
      case "plans": return <PlansView role={role as string} />;
      case "settings": return <SettingsView role={role as string} />;
      default:
        return (
          <div className="bg-white border border-line rounded-2xl shadow-sm p-10 text-center text-muted">
            O módulo <b>{screen}</b> está sendo desenvolvido.
          </div>
        );
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-bg flex items-center justify-center text-navy font-bold">Carregando workspace...</div>;
  }

  return (
    <div className="flex min-h-screen" style={{ "--accent": currentRole.accent } as React.CSSProperties}>
      <Sidebar 
        currentRole={currentRole} 
        currentRoleKey={role as string}
        screen={screen} 
        setScreen={setScreen} 
        setRole={setRole}
        availableRoles={rolesData}
      />

      <main className="ml-[255px] w-[calc(100%-255px)] p-7 pb-14">
        <Topbar 
          currentRole={currentRole} 
          title={screenTitle} 
          subtitle={screenSubtitle} 
          roleKey={role as string}
          showWizard={showWizard}
          setShowWizard={setShowWizard}
        />

        {renderScreen()}
      </main>
    </div>
  );
}
