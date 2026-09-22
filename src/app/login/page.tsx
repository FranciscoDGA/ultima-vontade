"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        alert("Conta criada! O Supabase enviou um e-mail de confirmação (se habilitado) ou a conta já está ativa.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.push("/");
      }
    } catch (err: any) {
      setError(err.message || "Ocorreu um erro durante a autenticação.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center items-center gap-2.5 text-navy text-[24px] font-[850]">
          <span className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-[#28c6b4] to-[#3a76ff] text-[20px] text-white">
            ✦
          </span>
          Última Vontade
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-navy">
          {isSignUp ? "Criar sua conta" : "Acesse seu Workspace"}
        </h2>
        <p className="mt-2 text-center text-sm text-muted">
          Plataforma de gestão sucessória e burocracia
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-2xl sm:px-10 border border-line">
          <form className="space-y-6" onSubmit={handleAuth}>
            <div>
              <label className="block text-sm font-medium text-navy">Endereço de e-mail</label>
              <div className="mt-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2.5 border border-[#dce3ec] rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                  placeholder="voce@empresa.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy">Senha</label>
              <div className="mt-1">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2.5 border border-[#dce3ec] rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="text-danger text-sm bg-[#fff0f1] p-3 rounded-lg border border-[#f5c2c7]">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-accent hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50"
              >
                {loading ? "Aguarde..." : isSignUp ? "Criar Conta" : "Entrar no Workspace"}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#eef1f5]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-muted">Ou</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="w-full inline-flex justify-center py-2.5 px-4 border border-line rounded-lg shadow-sm bg-white text-sm font-medium text-navy hover:bg-gray-50"
              >
                {isSignUp ? "Já tenho uma conta. Fazer login" : "Não tem conta? Cadastre-se"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
