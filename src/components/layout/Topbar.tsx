import React from "react";
import { RoleData } from "./Sidebar";

interface TopbarProps {
  currentRole: RoleData;
  title: string;
  subtitle: string;
}

export function Topbar({ currentRole, title, subtitle }: TopbarProps) {
  return (
    <header className="flex justify-between items-start gap-4 mb-6">
      <div>
        <div className="text-accent text-[11px] uppercase font-[850] tracking-widest mb-1">
          Workspace · {currentRole.label}
        </div>
        <h1 className="text-navy text-[28px] tracking-tight my-1 font-bold">
          {title}
        </h1>
        <p className="text-muted text-[13px] m-0">{subtitle}</p>
      </div>
      <div className="flex gap-2 items-center">
        <button className="bg-white border border-line text-navy px-3.5 py-2.5 rounded-[9px] text-[12px] font-[800]">
          ? Ajuda
        </button>
        <button className="bg-accent text-white shadow-[0_7px_16px_#2f6fed2b] px-3.5 py-2.5 rounded-[9px] text-[12px] font-[800]">
          + Novo
        </button>
        <div className="grid place-items-center w-[36px] h-[36px] rounded-full bg-[#dfeaff] text-accent font-[850]">
          AS
        </div>
      </div>
    </header>
  );
}
