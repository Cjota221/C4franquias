// File: js/franqueada.js
// Lógica de frontend para o painel da franqueada.

import { supabaseClient as supabase } from './supabase.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Painel da Franqueada carregado.");
    
    carregarDadosDaLoja();
    carregarProdutosDisponiveis();
});

/**
 * Carrega as configurações da loja da franqueada logada.
 */
async function carregarDadosDaLoja() {
    console.log("Carregando dados da loja da franqueada...");
    // Lógica para buscar os dados da franquia no Supabase e preencher os campos.
}

/**
 * Carrega a lista de produtos que a franqueada pode ativar em sua loja.
 */
async function carregarProdutosDisponiveis() {
    console.log("Carregando produtos disponíveis para ativação...");
    // Lógica para buscar os produtos mestre e os produtos já ativos pela franqueada.
}


