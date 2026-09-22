import React from "react";

export type RoleData = {
  label: string;
  org: string;
  desc: string;
  accent: string;
  nav: [string, string, string][];
};

interface SidebarProps {
  currentRole: RoleData;
  screen: string;
  setScreen: (screen: string) => void;
}

export function Sidebar({ currentRole, screen, setScreen }: SidebarProps) {
  return (
    <aside className="fixed z-50 w-[255px] inset-y-0 left-0 bg-navy text-[#d7e2f3] py-5 px-3 flex flex-col">
      <div className="flex items-center gap-2.5 text-white text-[17px] font-[850] px-2.5 pt-1.5 pb-5">
        <span className="w-9 h-9 rounded-xl grid place-items-center bg-gradient-to-br from-[#28c6b4] to-[#3a76ff] text-[20px]">
          ✦
        </span>
        Última Vontade
      </div>

      <div className="p-2.5 border border-white/10 bg-white/5 rounded-xl mb-4">
        <div className="text-[10px] uppercase tracking-wider text-[#9fb4d1] font-[800]">
          Workspace
        </div>
        <div className="text-white text-[12px] font-[750] mt-1">
          {currentRole.org}
        </div>
      </div>

      <nav className="grid gap-1">
        {currentRole.nav.map(([id, icon, label]) => (
          <button
            key={id}
            onClick={() => setScreen(id)}
            className={`flex items-center gap-2.5 text-left rounded-lg px-3 py-2.5 text-[13px] ${
              screen === id
                ? "text-white bg-white/10 shadow-[inset_3px_0_var(--accent)]"
                : "text-[#b7c7df] hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="w-5 text-center">{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
