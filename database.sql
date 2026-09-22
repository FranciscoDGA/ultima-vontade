-- 1. Tabela de Empresas (Multi-tenant)
CREATE TABLE public.companies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('familia', 'advocacia', 'funeraria', 'seguradora', 'banco')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Tabela de Usuários vinculados às empresas
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  role TEXT DEFAULT 'member',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Tabela de Casos (Isolada por empresa)
CREATE TABLE public.cases (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  status TEXT DEFAULT 'Aguardando',
  progress INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Tabela de Tarefas vinculadas aos casos
CREATE TABLE public.tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  case_id UUID REFERENCES public.cases(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  is_urgent BOOLEAN DEFAULT false,
  is_done BOOLEAN DEFAULT false,
  due_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- HABILITAR ROW LEVEL SECURITY (RLS) - O coração da segurança multi-tenant
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;

-- POLÍTICAS DE SEGURANÇA (Garante que a empresa A não veja os dados da empresa B)

-- Perfis: Usuário só pode ver perfis da sua própria empresa
CREATE POLICY "Ver perfis da própria empresa" ON public.profiles
  FOR SELECT USING (company_id = (SELECT company_id FROM public.profiles WHERE id = auth.uid()));

-- Casos: Usuário só pode ver e criar casos da sua própria empresa
CREATE POLICY "Gerenciar casos da própria empresa" ON public.cases
  FOR ALL USING (company_id = (SELECT company_id FROM public.profiles WHERE id = auth.uid()));

-- Tarefas: Usuário só pode ver e criar tarefas de casos que pertencem à sua empresa
CREATE POLICY "Gerenciar tarefas da própria empresa" ON public.tasks
  FOR ALL USING (
    case_id IN (
      SELECT id FROM public.cases WHERE company_id = (SELECT company_id FROM public.profiles WHERE id = auth.uid())
    )
  );

-- INSERIR DADOS MOCK (Apenas para podermos testar a interface)
INSERT INTO public.companies (id, name, type) VALUES 
  ('11111111-1111-1111-1111-111111111111', 'Ana Souza · Família', 'familia'),
  ('22222222-2222-2222-2222-222222222222', 'Vida Serena · Rede', 'funeraria');

-- Casos da Família
INSERT INTO public.cases (company_id, title, status, progress) VALUES 
  ('11111111-1111-1111-1111-111111111111', 'UV-2026-0148 · Família Souza', 'Em andamento', 64),
  ('11111111-1111-1111-1111-111111111111', 'UV-2026-0149 · Inventário do Carro', 'Aguardando', 10);

-- Casos da Funerária
INSERT INTO public.cases (company_id, title, status, progress) VALUES 
  ('22222222-2222-2222-2222-222222222222', 'Atendimento #001 · João Silva', 'Ativo', 80),
  ('22222222-2222-2222-2222-222222222222', 'Atendimento #002 · Maria Oliveira', 'Concluído', 100);
