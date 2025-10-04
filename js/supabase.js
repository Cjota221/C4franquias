// File: js/supabase.js
// Este arquivo centraliza a configuração do cliente Supabase para ser usado em todo o projeto.

// Importa a função createClient da biblioteca Supabase.
const { createClient } = supabase;

// Substitua com as credenciais do SEU projeto Supabase.
const SUPABASE_URL = 'https://SUA_URL_DO_PROJETO.supabase.co'; 
const SUPABASE_KEY = 'SUA_CHAVE_ANON';

// Cria e exporta a instância do cliente Supabase.
export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);


