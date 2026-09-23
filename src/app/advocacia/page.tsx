"use client";
import React from "react";
import Link from "next/link";
import { ChevronRight, CheckCircle2, Shield, FolderOpen, Clock, Users, ArrowRight, MessageSquare, AlertCircle, FileText, CheckCircle, Smartphone, Lock } from "lucide-react";

export default function AdvocaciaLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-navy selection:bg-accent/20">
      
      {/* 1. Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-line z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy rounded-xl flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="font-[900] text-xl tracking-tight text-navy">última vontade</span>
            <span className="ml-2 text-xs font-bold px-2 py-1 bg-accent/10 text-accent rounded-full uppercase tracking-wider">Para Advogados</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-muted">
            <a href="#solucao" className="hover:text-navy transition-colors">Como funciona</a>
            <a href="#planos" className="hover:text-navy transition-colors">Planos</a>
            <a href="#faq" className="hover:text-navy transition-colors">Dúvidas</a>
            <Link href="/login" className="text-navy">Login</Link>
          </div>
          <button className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:brightness-110 transition-all flex items-center gap-2">
            Testar Primeiro Caso <ArrowRight size={16} />
          </button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-b from-[#f0edff]/30 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6">
            <Shield size={14} /> Para escritórios de advocacia, inventário e sucessões
          </div>
          <h1 className="text-5xl md:text-6xl font-[900] text-navy tracking-tight leading-[1.1] mb-6">
            Organize inventários sem perseguir documentos por WhatsApp.
          </h1>
          <p className="text-xl text-muted font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
            O Última Vontade centraliza clientes, famílias, tarefas e prazos em um único workspace, permitindo que seu escritório acompanhe cada etapa com mais clareza e menos retrabalho.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-navy text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:bg-navy/90 transition-all flex items-center justify-center gap-2">
              Testar com meu primeiro caso <ChevronRight size={20} />
            </button>
            <button className="w-full sm:w-auto bg-white border-2 border-line text-navy px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-50 transition-all">
              Ver como funciona
            </button>
          </div>
        </div>

        {/* Dashboard Mockup Image */}
        <div className="max-w-5xl mx-auto mt-20 relative">
          <div className="absolute inset-0 bg-accent/5 rounded-[2.5rem] transform rotate-1 scale-105 -z-10"></div>
          <div className="bg-white rounded-3xl shadow-2xl border border-line p-2 overflow-hidden">
            <div className="bg-gray-50 rounded-2xl h-[400px] md:h-[600px] border border-line/50 flex flex-col relative overflow-hidden">
              {/* Fake UI Header */}
              <div className="h-14 border-b border-line bg-white flex items-center px-6 gap-4">
                <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
                <div className="w-64 h-6 bg-gray-100 rounded-md mx-auto"></div>
              </div>
              {/* Fake UI Content */}
              <div className="flex-1 flex p-6 gap-6">
                <div className="w-64 border-r border-line space-y-3 hidden md:block">
                  <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
                  <div className="h-8 w-1/2 bg-gray-100 rounded"></div>
                  <div className="h-8 w-2/3 bg-gray-100 rounded"></div>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="h-8 w-48 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 w-64 bg-gray-100 rounded"></div>
                    </div>
                    <div className="h-10 w-32 bg-accent/20 rounded-xl"></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 border border-line rounded-xl bg-white p-4"><div className="h-6 w-1/2 bg-gray-200 rounded mb-2"></div><div className="h-4 w-1/3 bg-gray-100 rounded"></div></div>
                    <div className="h-24 border border-danger/20 rounded-xl bg-red-50 p-4"><div className="h-6 w-1/2 bg-red-200 rounded mb-2"></div><div className="h-4 w-1/3 bg-red-100 rounded"></div></div>
                    <div className="h-24 border border-line rounded-xl bg-white p-4"><div className="h-6 w-1/2 bg-gray-200 rounded mb-2"></div><div className="h-4 w-1/3 bg-gray-100 rounded"></div></div>
                  </div>
                  
                  <div className="h-48 border border-line rounded-xl bg-white"></div>
                </div>
              </div>
              
              {/* Overlay elements demonstrating value */}
              <div className="absolute top-1/4 right-10 bg-white p-4 rounded-xl shadow-xl border border-line animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center"><CheckCircle size={20}/></div>
                  <div>
                    <p className="text-sm font-bold text-navy">Família Silva enviou certidão</p>
                    <p className="text-xs text-muted">Há 2 minutos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problem Section */}
      <section className="py-24 px-6 bg-gray-50 border-t border-line">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-[900] text-navy tracking-tight mb-6">
            O problema não é o inventário.<br/> É tudo o que acontece ao redor dele.
          </h2>
          <p className="text-lg text-muted font-medium">
            Depois de um falecimento, seu escritório acaba gastando tempo organizando o caos, quando deveria estar concentrado na análise e na estratégia do caso.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {icon: <MessageSquare/>, title: "Mensagens Perdidas", desc: "Arquivos enviados fora de ordem e cobranças constantes por atualização em vários grupos de WhatsApp."},
            {icon: <Clock/>, title: "Prazos Esquecidos", desc: "Informações desencontradas que atrasam o recolhimento de impostos e protocolos em cartório."},
            {icon: <Users/>, title: "Família Confusa", desc: "Clientes que não sabem qual é o próximo passo e repetem as mesmas dúvidas dezenas de vezes."}
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-line shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-50 text-danger rounded-xl flex items-center justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
              <p className="text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Solution Section */}
      <section id="solucao" className="py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-[900] text-navy tracking-tight">
              Uma central de acompanhamento para cada caso.
            </h2>
            <p className="text-lg text-muted font-medium">
              A família acompanha o que precisa fazer. A equipe acompanha o que está pendente. Todos trabalham com a mesma informação.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shrink-0"><CheckCircle2 size={14}/></div>
                <div>
                  <strong className="block text-navy text-lg mb-1">1. Menos mensagens desorganizadas</strong>
                  <span className="text-muted">Cada família tem um espaço próprio (Cofre) para tarefas, documentos e atualizações.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shrink-0"><CheckCircle2 size={14}/></div>
                <div>
                  <strong className="block text-navy text-lg mb-1">2. Mais controle dos prazos</strong>
                  <span className="text-muted">A equipe visualiza o que está atrasado, o que depende do cliente e o que precisa ser feito.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shrink-0"><CheckCircle2 size={14}/></div>
                <div>
                  <strong className="block text-navy text-lg mb-1">3. Melhor experiência para a família</strong>
                  <span className="text-muted">O escritório deixa de ser apenas cobrado e passa a oferecer um acompanhamento profissional.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full bg-gray-50 rounded-[2rem] p-8 border border-line">
             {/* Feature Visual */}
             <div className="bg-white rounded-xl shadow-lg border border-line p-6 mb-4">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-line">
                  <div>
                    <h4 className="font-bold text-navy">Inventário Silva</h4>
                    <span className="text-xs text-muted">Aguardando Documentação</span>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold">2 Pendências</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-line">
                    <div className="flex items-center gap-3">
                      <FileText size={18} className="text-accent" />
                      <span className="text-sm font-semibold text-navy">Certidão de Casamento Atualizada</span>
                    </div>
                    <span className="text-xs text-muted">João Silva</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-line">
                    <div className="flex items-center gap-3">
                      <FileText size={18} className="text-accent" />
                      <span className="text-sm font-semibold text-navy">Matrícula do Imóvel</span>
                    </div>
                    <span className="text-xs text-muted">Maria Silva</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. How it Works */}
      <section className="py-24 px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-[900] tracking-tight mb-6">Como funciona na prática</h2>
          <p className="text-lg text-gray-300 font-medium">Deixe o sistema gerar o fluxo. Foque apenas em aprovar e orientar.</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6">
          {[
            {n: "01", title: "Crie o caso", desc: "Cadastre o processo e o responsável."},
            {n: "02", title: "Escolha o modelo", desc: "Inventário, seguro, doação... a IA estrutura."},
            {n: "03", title: "Convide a família", desc: "Eles ganham acesso a um portal seguro."},
            {n: "04", title: "Organize tarefas", desc: "Delegue quem envia qual documento e até quando."},
            {n: "05", title: "Acompanhe", desc: "Painel central mostrando o que está travado."}
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="text-accent text-5xl font-[900] opacity-50 mb-4">{step.n}</div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.desc}</p>
              {i < 4 && <div className="hidden md:block absolute top-6 right-0 w-8 border-t-2 border-dashed border-gray-600"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* 6. Differentiation (Comparison) */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-[900] text-navy tracking-tight mb-6">
              Não é apenas um checklist. <br/>É um workspace compartilhado.
            </h2>
          </div>
          
          <div className="bg-white rounded-3xl border border-line shadow-lg overflow-hidden">
            <div className="grid grid-cols-2 bg-gray-50 border-b border-line">
              <div className="p-6 font-bold text-muted text-center text-lg border-r border-line">Sem o Última Vontade</div>
              <div className="p-6 font-bold text-accent text-center text-lg">Com o Última Vontade</div>
            </div>
            {[
              ["Documentos perdidos no WhatsApp", "Cofre organizado e seguro por familiar"],
              ["Tarefas e prazos na memória", "Responsáveis definidos com alertas"],
              ["Família perguntando toda hora", "Portal de acompanhamento transparente"],
              ["Informações espalhadas", "Caso centralizado em um só lugar"],
              ["IA genérica sem contexto", "Assistente configurado para o processo"],
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-2 border-b border-line last:border-0 hover:bg-gray-50 transition-colors">
                <div className="p-6 text-muted border-r border-line flex items-center gap-3">
                  <AlertCircle size={18} className="text-danger shrink-0" /> {row[0]}
                </div>
                <div className="p-6 text-navy font-semibold flex items-center gap-3 bg-[#f0edff]/10">
                  <CheckCircle2 size={18} className="text-accent shrink-0" /> {row[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Offer & Plans */}
      <section id="planos" className="py-24 px-6 bg-gray-50 border-t border-line">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-[900] text-navy tracking-tight mb-6">Escolha o plano ideal para seu escritório</h2>
            <p className="text-lg text-muted font-medium">Comece sem riscos. Cancele quando quiser.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-white rounded-3xl p-8 border border-line shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-2">Essencial</h3>
              <p className="text-sm text-muted mb-6">Para advogados individuais.</p>
              <div className="text-4xl font-[900] text-navy mb-6">R$ 97<span className="text-lg text-muted font-medium">/mês</span></div>
              <ul className="space-y-4 mb-8 text-sm text-navy">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-ok"/> Até 10 casos ativos</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-ok"/> Checklist e Tarefas</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-ok"/> Cofre de Documentos</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-ok"/> 1 Usuário Profissional</li>
              </ul>
              <button className="w-full py-3 bg-white border-2 border-line text-navy rounded-xl font-bold hover:bg-gray-50">Começar gratuitamente</button>
            </div>
            
            {/* Plan 2 (Highlighted) */}
            <div className="bg-navy rounded-3xl p-8 border-2 border-accent shadow-2xl relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Mais Escolhido</div>
              <h3 className="text-xl font-bold text-white mb-2">Profissional</h3>
              <p className="text-sm text-gray-400 mb-6">Para escritórios em crescimento.</p>
              <div className="text-4xl font-[900] text-white mb-6">R$ 297<span className="text-lg text-gray-400 font-medium">/mês</span></div>
              <ul className="space-y-4 mb-8 text-sm text-white">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-accent"/> Casos Ilimitados</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-accent"/> Convite para Famílias (Portal)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-accent"/> Inteligência Artificial Jurídica</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-accent"/> Até 5 Usuários da Equipe</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-accent"/> Relatórios e Dashboard</li>
              </ul>
              <button className="w-full py-3 bg-accent text-white rounded-xl font-bold hover:brightness-110 shadow-lg">Testar com minha equipe</button>
            </div>
            
            {/* Plan 3 */}
            <div className="bg-white rounded-3xl p-8 border border-line shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-2">Corporativo</h3>
              <p className="text-sm text-muted mb-6">Bancos, Seguradoras e Redes.</p>
              <div className="text-4xl font-[900] text-navy mb-6">Personalizado</div>
              <ul className="space-y-4 mb-8 text-sm text-navy">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-ok"/> White Label (Sua Marca)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-ok"/> Acesso API e Integrações</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-ok"/> Suporte Dedicado (SLA)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-ok"/> Treinamento Onboarding</li>
              </ul>
              <button className="w-full py-3 bg-white border-2 border-navy text-navy rounded-xl font-bold hover:bg-navy hover:text-white transition-colors">Falar com vendas</button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-[900] text-navy tracking-tight mb-10 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              {q: "Minha equipe já usa WhatsApp.", a: "O WhatsApp continua sendo útil para conversas casuais. O Última Vontade organiza aquilo que não pode se perder: tarefas, prazos, documentos e responsabilidades (a 'pasta' digital do cliente)."},
              {q: "Meus clientes não são bons com tecnologia.", a: "A família recebe uma experiência desenhada para ser simples, com botões grandes, linguagem clara (sem juridiquês) e apenas as etapas que ela precisa preencher."},
              {q: "Isso substitui meu advogado?", a: "Não. O sistema organiza a bagunça administrativa para que o profissional possa trabalhar melhor e focar na estratégia legal do inventário."},
              {q: "Meus documentos estarão seguros?", a: "O produto foi planejado com permissões restritas, controle de acesso e auditoria. Segue os princípios de segurança e LGPD."},
              {q: "A IA pode cometer erros legais?", a: "A IA atua como um assistente de triagem: organiza fluxos, extrai dados de PDF e cria rascunhos. A decisão e aprovação final SEMPRE exige a revisão humana."}
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 border border-line rounded-2xl p-6">
                <h4 className="font-bold text-navy text-lg mb-2">{faq.q}</h4>
                <p className="text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA & Form */}
      <section className="py-24 px-6 bg-accent text-white">
        <div className="max-w-5xl mx-auto bg-navy rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
          
          <div className="flex-1 z-10">
            <div className="inline-block bg-accent/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Programa Primeiros Escritórios
            </div>
            <h2 className="text-4xl md:text-5xl font-[900] tracking-tight mb-6 leading-tight">
              Organize seu primeiro caso acompanhado por nós.
            </h2>
            <ul className="space-y-3 text-gray-300 font-medium mb-8">
              <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-accent"/> Configuração inicial do workspace</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-accent"/> Criação do primeiro modelo</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-accent"/> Convite da primeira família</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-accent"/> 14 dias de teste sem cartão</li>
            </ul>
          </div>
          
          <div className="w-full md:w-[400px] bg-white rounded-3xl p-8 shadow-xl text-navy z-10">
            <h3 className="text-2xl font-[900] mb-6">Solicitar Acesso</h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-muted mb-1 uppercase tracking-wider">Nome do Responsável</label>
                <input type="text" className="w-full border border-line rounded-xl p-3 text-sm focus:border-accent outline-none" placeholder="Dr. Nome" />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted mb-1 uppercase tracking-wider">Escritório</label>
                <input type="text" className="w-full border border-line rounded-xl p-3 text-sm focus:border-accent outline-none" placeholder="Nome do Escritório" />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted mb-1 uppercase tracking-wider">WhatsApp</label>
                <input type="text" className="w-full border border-line rounded-xl p-3 text-sm focus:border-accent outline-none" placeholder="(00) 00000-0000" />
              </div>
              <button className="w-full bg-accent text-white py-4 rounded-xl font-bold shadow-md hover:brightness-110 mt-4 transition-all">
                Quero testar meu primeiro caso
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-line py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-navy rounded-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="font-[900] text-lg tracking-tight text-navy">última vontade</span>
          </div>
          <div className="text-sm font-medium text-muted">
            &copy; {new Date().getFullYear()} Última Vontade. Todos os direitos reservados.
          </div>
          <div className="flex gap-4 text-sm font-bold text-muted">
            <a href="#" className="hover:text-navy">Privacidade</a>
            <a href="#" className="hover:text-navy">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
